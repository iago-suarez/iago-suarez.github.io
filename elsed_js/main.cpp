#include <iostream>

#include <opencv2/opencv.hpp>
#include "ELSED.h"

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#define EMSCRIPTEN_EXPORT EMSCRIPTEN_KEEPALIVE extern "C"
#else
#define EMSCRIPTEN_EXPORT
#endif

EMSCRIPTEN_EXPORT
const char *version() {
  return "v.0.1";
}

EMSCRIPTEN_EXPORT
uint8_t *create_buffer(int width, int height) {
  return new uint8_t[width * height * 4];
}

EMSCRIPTEN_EXPORT
void destroy_buffer(uint8_t *p) {
  delete p;
}

inline void
drawSegments(cv::Mat img,
             upm::SalientSegments segs,
             const cv::Scalar &color,
             int thickness = 1,
             int lineType = cv::LINE_AA,
             int shift = 0) {
  for (const upm::SalientSegment &s: segs) {
    cv::Point2f p0(s.segment[0], s.segment[1]);
    cv::Point2f p1(s.segment[2], s.segment[3]);
    cv::line(img, p0, p1, color, thickness, lineType, shift);
//    cv::Scalar dark_color =  CV_RGB(0, 150, 0);
//    cv::circle(img, p0, 1.5 * thickness, dark_color, -1, lineType);
//    cv::circle(img, p1, 1.5 * thickness, dark_color, -1, lineType);
  }
}

EMSCRIPTEN_EXPORT
int process_frame(uint8_t *data, uint8_t * pOutput, int width, int height,
                  int gradTh = 25, float valTh = 0.15, int nJumpChecks = 3, int maxSegs = 1e6) {
  // Prepare input image
  cv::Mat input_img(height, width, CV_8UC4, data);
//  std::cout << "Processing image of size: " << input_img.size() << " from C++" << std::endl;

  // Prepare output image
  cv::Mat output_img(height, width, CV_8UC4, pOutput);

  // Convert the input image to grayscale
  cv::Mat tmp;
  cv::cvtColor(input_img, tmp, cv::COLOR_BGR2GRAY);

  // If the image has no contrast enough, equalize it
  double min, max;
  cv::minMaxLoc(tmp, &min, &max);
  if (max < 155 || min > 100) {
    cv::createCLAHE(4)->apply(tmp, tmp);
  }

  // Create ELSED parameters
  upm::ELSEDParams params;
  params.gradientThreshold = gradTh;
  params.validationTh = valTh;
  params.listJunctionSizes = {};
  for (int i = 0; i < nJumpChecks; i++) {
    params.listJunctionSizes.push_back(5 + i * 2);
  }

  // Create ELSED detector and use it
  upm::ELSED elsed(params);
  upm::SalientSegments segs = elsed.detectSalient(tmp);
  int nSegs = segs.size();
  std::sort(segs.begin(), segs.end());
  segs.resize(std::min((int) segs.size(), maxSegs));
//  std::cout << "ELSED detected: " << segs.size() << " segments" << std::endl;

  cv::cvtColor(tmp, tmp, cv::COLOR_GRAY2BGR);
  // Draw detected segments
  drawSegments(tmp, segs, CV_RGB(0, 255, 0), 2);

  cv::cvtColor(tmp, output_img, cv::COLOR_BGR2RGBA);
  return nSegs;
}

#ifndef __EMSCRIPTEN__
int main(int argc, char **argv) {
  std::cout << "************* ELSED JavaScript demo ************" << std::endl;

  // Read the input image
  cv::Mat img = cv::imread("../00051240.jpg");
  if (img.empty()) {
    std::cerr << "Error reading input image" << std::endl;
    return -1;
  }

  cv::imshow("Input image", img);

  // Convert input image in OpenCV (BGR) format to RGBA format
  cv::cvtColor(img, img, cv::COLOR_BGR2RGBA);

  // Process frame using the same function that we use when we call from JavaScript
  uint8_t *pResult = process_frame(img.data, img.cols, img.rows);

  // Wrap the memory buffer with a cv::Mat
  cv::Mat resultRGBA(img.size(), CV_8UC4, pResult);
  // Convert back from RGBA to BGR
  cv::Mat result;
  cv::cvtColor(resultRGBA, result, cv::COLOR_RGBA2BGR);

  // Display results
  cv::imshow("Result", result);
  cv::waitKey();

  // Destroy allocated buffer
  destroy_buffer(pResult);
}
#endif