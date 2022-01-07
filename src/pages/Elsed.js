import React from 'react'
import ElsedHeader from '../images/ElsedHeader.jpg'

const Elsed = () => {

  return (
    <div className="App">
      <br/>
        <div className="container">
          <div className="mx-auto text-center">
            <h2>ELSED: Enhanced Line SEgment Drawing</h2>
          </div>
          <br/>
          <div className="row text-center">
            <div className="col-sm">
              <a href="https://arxiv.org/abs/2108.03144" target="_blank" rel="noreferrer">Paper</a>
            </div>
            <div className="col-sm">
              <a href="https://github.com/iago-suarez/ELSED" target="_blank" rel="noreferrer">Source Code (C++)</a>
            </div>
            <div className="col-sm">
              <a href="https://colab.research.google.com/github/iago-suarez/ELSED/blob/main/Python_ELSED.ipynb" target="_blank" rel="noreferrer">Colab Python demo</a>
            </div>
          </div>
          <br/><br/>

          <div>
            <img className="w-100" src={ElsedHeader}/>
          </div>
          <br/>

          <div>
            <h3>Online Demo</h3>
            <div className="card">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div>
          <br/>

          <div>
            <h3>Video Figure 4</h3>
            <p>This videos shows the drawing process of the image in Figure 4 of the paper.</p>
            <ul className="list-group">
              <li className="list-group-item">
                <b>Left</b>: We show the image gradient magnitude in the background. ELSED fits a segment during
                drawing. The pixels of the current segment are drawn in <span className="color-blue">blue</span> and
                the infinite line fitted to them in <span className="color-green">green</span>. Already visited pixels
                appear in <span className="color-magenta">magenta</span>.
              </li>
              <li className="list-group-item"><b>Right</b>: Under black background, we can see the pixels of the segments
              in <span className="color-green">green</span>, the discontinuities in
                <span className="color-gray"> gray</span>, and outlier pixels (fleetingly when the direction turns)
                in <span className="color-orange">orange</span>. </li>
            </ul>
            <br/>

            <div className="text-center">
              <iframe className="mw-100" width="960" height="540" src="https://www.youtube.com/embed/oxkvjoe1oIs"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
            </div>

          </div>

          <br/>


          <div className="card">
            <div className="card-body bg-middle-gray">
              <h4>Abstract</h4>
              <p className="text-justify">
              Detecting local features, such as corners, segments or blobs, is the first step in the pipeline of many
              Computer Vision applications. Its speed is crucial for real-time applications. In this paper we present
              ELSED,
              the fastest line segment detector in the literature. The key for its efficiency is a local segment growing
              algorithm that connects gradient-aligned pixels in presence of small discontinuities. The proposed algorithm
              not only runs in devices with very low end hardware, but may also be parametrized to foster the detection of
              short or longer segments, depending on the task at hand. We also introduce new metrics to evaluate the
              accuracy and repeatability of segment detectors. In our experiments with different public benchmarks we
              prove that our method accounts the highest repeatability and it is the most efficient in the literature.
              In the experiments we quantify the accuracy traded for such gain.
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Elsed