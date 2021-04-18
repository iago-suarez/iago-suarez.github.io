import mypicture from './images/mypicture.jpg'
import slide1 from './images/LineSegmentDetection.jpg'
import slide2 from './images/FeatureDescription.jpg'
import DeepLearningGuide from './documents/GA_10AZ_103000856_2S_2020-21.pdf'
import ReconocimientoGuide from './documents/GA_10II_105000059_1S_2020-21.pdf'
import VanishingPointsVideo from './videos/vanishing.mp4'
import './App.css'
import './Sidebar.css'
import * as Icon from 'react-bootstrap-icons'
import Carousel from 'react-bootstrap/Carousel'

function App () {
  return (
    <div className="App">
      <div id="wrapper">
        {/*Sidebar*/}
        <div id="sidebar-wrapper" className="bg-dark">
          <ul className="sidebar-nav">
            <li>
              <h1 className="text-white text-decoration-none">Iago Suárez</h1>
            </li>
            <li className="mypicture-container">
              <img src={mypicture} className="img-fluid rounded-circle img-thumbnail" alt="Iago Suárez"/>
            </li>
            <li>
              <a href="#">Publications</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a className="medium-icon col-sm" href="https://www.linkedin.com/in/iago-suarez/"><Icon.Linkedin/></a>
              <a className="medium-icon col-sm" href="https://github.com/iago-suarez"><Icon.Github/></a>
              <a className="medium-icon col-sm"
                 href="https://scholar.google.es/citations?user=6CRh05wAAAAJ&hl=es&oi=ao"><Icon.Book/></a>
            </li>
          </ul>
        </div>
        {/*/#sidebar-wrapper*/}

        {/*Page Content*/}
        <div id="page-content-wrapper">
          <Carousel>
            <Carousel.Item interval={12000}>
              <video src={VanishingPointsVideo} autoPlay={true} loop></video>
              <Carousel.Caption>
                <h3>Vanishing point detection</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide2} alt="Second slide"/>
              <Carousel.Caption>
                <h3>Image Matching and feature point description</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide1}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Line segment detection and merging</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <br/><br/>

          <div className="container">
            <div className="text-justify">
              <p>Computer Engineer - Universidade Da Coruña, Artificial Intelligence (AI) Máster - Universidad
                Politécnica de Madrid (UPM) and PhD student in AI (UPM), I have been researching several years in
                Computer Vision (CV), delivering jobs in CV and robotics symposiums and journals and contributing to
                important libraries such as OpenCV.</p>
              <p>In business, among a large list of projects I would like to highlight my contributions in The Graffter,
                where I develop Augmented Reality technology for urban environment and XOIA Software Development, a
                company that I have co-founded and nowadays has more than 10 employees.</p>
            </div>
            <br/>
            <div>
              <h2>Publications</h2>
              <ul>
                <li>Suárez, I., Muñoz, E., Buenaposada, J. M., & Baumela, L. (2018, October).
                  <b>FSG: A statistical approach to line detection via fast segments grouping</b>. In
                  <i>2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</i> (pp. 97-102).
                  IEEE.
                </li>
                <a href="https://www.youtube.com/watch?v=RknriYhmeUI">Video</a>, &nbsp;
                <a
                  href="https://raw.githubusercontent.com/graffter/fsg-benchmark/master/fsg-paper.pdf">Paper</a>, &nbsp;
                <a href="https://github.com/graffter/fsg-benchmark">Dataset</a>, &nbsp;
                <a href="https://doi.org/10.1109/IROS.2018.8594434">DOI</a>
                <br/>
                <li>Suárez, I., Sfeir, G., Buenaposada, J. M., & Baumela, L. (2019, July). <b>BELID: Boosted efficient
                  local image descriptor</b>. In
                  <i>Iberian Conference on Pattern Recognition and Image Analysis</i> (pp. 449-460). Springer, Cham.
                </li>
                <a href="https://www.youtube.com/watch?v=RknriYhmeUI">Video</a>, &nbsp;
                <a href="http://www.dia.fi.upm.es/~pcr/publications/PRL_2020_web_BEBLID.pdf">Paper</a>, &nbsp;
                <a href="https://doi.org/10.1007/978-3-030-31332-6_39">DOI</a>
                <br/>
                <li>Suárez, I., Sfeir, G., Buenaposada, J. M., & Baumela, L. (2020). <b>BEBLID: Boosted efficient binary
                  local image descriptor</b>.
                  <i>Pattern Recognition Letters</i>, 133, 366-372.
                </li>
                <a href="http://www.dia.fi.upm.es/~pcr/publications/PRL_2020_web_BEBLID.pdf">Paper</a>, &nbsp;
                <a href="https://github.com/iago-suarez/BEBLID">Source code (C++)</a>, &nbsp;
                <a
                  href="https://towardsdatascience.com/improving-your-image-matching-results-by-14-with-one-line-of-code-b72ae9ca2b73">Python
                  OpenCV Tutorial</a>, &nbsp;
                <a href="https://doi.org/10.1016/j.patrec.2020.04.005">DOI</a>
                <br/>
              </ul>
            </div>
            <br/>

            <div>
              <h2>Teaching</h2>
              Teaching assistant in the following courses:
              <ul>
                <li><b>Deep Learning</b> - Master's Programme in Digital Innovation: Data Science. (English) &nbsp;
                  <a href={DeepLearningGuide}>Learning Guide</a> </li>
                <li><b>Pattern Recognition</b> - Computer Engineering degree. (Spanish) &nbsp;
                  <a href={ReconocimientoGuide}>Learning Guide</a> </li>
              </ul>
              <br/>
              Advisor of the following Final Degree and Final Master projects:
              <ul>
                <li>
                  <b>Wei, Tingyun</b> (2020). <a href="http://oa.upm.es/65861/1/TFM_TINGYUN_WEI.pdf">A multi-platform comparison of local feature description methods</a>. Thesis (Master thesis).
                </li>
                <li>
                  <b>Olivares Gil, Alicia</b> (2020). <a href="http://oa.upm.es/63767/1/TFM_ALICIA_OLIVARES_GIL.pdf">Estudio sobre detectores y descriptores de segmentos rectilíneos</a>. Thesis (Master thesis)
                </li>
                <li>
                  <b>Cobo Cabornero, Alejandro</b> (2019). <a href="http://oa.upm.es/55778/1/TFG_ALEJANDRO_COBO_CABORNERO.pdf">Evaluación y optimización de un descriptor de características</a>. Proyecto Fin de Carrera.
                </li>
                <li>
                  <b>Audante Ramos, Néstor Rafael</b> (2019). <a href="http://oa.upm.es/56021/1/TFM_NESTOR_RAFAEL_AUDANTE_RAMOS.pdf">Simulación de entornos urbanos para el aprendizaje de descriptores locales de apariencia</a>. Thesis (Master thesis)
                </li>
                <li>
                  <b>Sfeir Malavé, Ghesn Daniel</b> (2019). <a href="http://oa.upm.es/55889/1/TFM_GHESN_DANIEL_SFEIR_MALAVE.pdf">Learning highly efficient local image descriptors</a>. Thesis (Master thesis)
                </li>
              </ul>

            </div>
            <br/>

            <div>
              <h2>Education</h2>
              <ul>
                <li>
                  <b>PhD (In progress) - Universidad Politécnica de Madrid: Augmented Reality in Urban
                    Environments</b><br/>

                  <p className="text-justify">
                    In my PhD I am creating and improving the basics of Augmented Reality to move it towards Urban
                    Environments. My research is centered in efficient detectors and descriptors for local image
                    features such as corners or line segments where we have already published two articles. We are also
                    working with RANSAC based geometric techniques to improve the estimation of the device pose in the
                    world.</p>
                </li>
                <li>
                  <b>Master in Artificial Intelligence - Universidad Politécnica de Madrid</b><br/>
                  In this master I could learn about some important AI topics such as: Machine Learning, Computer
                  Vision, Evolutionary Computing or Advanced Neural Networks.
                  It was also one introduction to the research world and a first step into my PhD.
                </li>
                <li>
                  <b>Degree in Computer Engineering - Universidade da Coruña</b><br/>
                  <Icon.ArrowRight/> &nbsp;
                    Final degree project: <b>Web application for the analysis of human behavior</b>.&nbsp;
                      <a href="https://www.youtube.com/watch?v=VtWA3Z4OhHQ">video</a>, &nbsp;
                      <a href="https://github.com/iago-suarez/ancoweb-TFG">source code</a>
                </li>
              </ul>
            </div>
            <br/>

            <div>
              <h2>Public Presentations</h2>
            </div>
            <br/>

            <div>
              <h2>Awards</h2>
              <ul>
                <li>Best Student Paper Award of ibPRIA 2019</li>
                <li>Best PhD Thesis Award in the ICT field of the Polytechnic University of Madrid (May, 2019)</li>
                <li>Primer Premio al mejor Trabajo Fin de Grado de Soft. Libre (November, 2015)</li>
              </ul>
            </div>
            <br/>

            <div>
              <h2>Other Projects</h2>
              I am specially proud of the following companies/project:<br/><br/>
              <ul>
                <li>XOIA Software Development. &nbsp;
                  <a href="https://xoia.es/">webpage</a>, &nbsp;
                  <a href="https://youtu.be/gJum_Qv_Ws8">video1</a>,  &nbsp;
                  <a href="https://youtu.be/74K1lK3kQJM">video2</a>
                </li>
                <li>Eation Tech. &nbsp;<a href="https://www.eationtech.com/">webpage</a>, &nbsp;<a href="https://youtu.be/0cbVPS4-VEQ">video</a></li>
                <li>White Mirror. &nbsp;<a href="https://www.whitemirror.es/">webpage</a></li>
              </ul>
            </div>
            <br/>
            <div>
              <h2>Contact</h2>
              <p><b>Email</b>:
                <a href="mailto:iago.suarez.canosa@alumnos.upm.es">iago.suarez.canosa@alumnos.upm.es</a></p>
            </div>

          </div>
        </div>
      </div>
      {/*/#wrapper*/}
    </div>
  )
}

export default App
