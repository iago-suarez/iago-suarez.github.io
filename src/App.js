import mypicture from './images/mypicture.jpg'
import slide1 from './images/LineSegmentDetection.jpg'
import slide2 from './images/FeatureDescription.jpg'
import DeepLearningGuide from './documents/GA_10AZ_103000856_2S_2020-21.pdf'
import ReconocimientoGuide from './documents/GA_10II_105000059_1S_2020-21.pdf'
import SlidesIROS18 from './documents/Slides_IROS18.pdf'
import SlidesIbPRIA18 from './documents/Slides_IbPRIA19.pdf'
import PosterSymposiumUPM from './documents/Poster_PhDSymposium19.pdf'
import SlidesTFM from './documents/Slides_TFM_iago.pdf'
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
          {/*<Carousel>*/}
          {/*  <Carousel.Item interval={12000}>*/}
          {/*    <video src={VanishingPointsVideo} autoPlay={true} loop></video>*/}
          {/*    <Carousel.Caption>*/}
          {/*      <h3>Vanishing point detection</h3>*/}
          {/*    </Carousel.Caption>*/}
          {/*  </Carousel.Item>*/}
          {/*  <Carousel.Item>*/}
          {/*    <img className="d-block w-100" src={slide2} alt="Second slide"/>*/}
          {/*    <Carousel.Caption>*/}
          {/*      <h3>Image Matching and feature point description</h3>*/}
          {/*    </Carousel.Caption>*/}
          {/*  </Carousel.Item>*/}
          {/*  <Carousel.Item>*/}
          {/*    <img*/}
          {/*      className="d-block w-100"*/}
          {/*      src={slide1}*/}
          {/*      alt="Third slide"*/}
          {/*    />*/}
          {/*    <Carousel.Caption>*/}
          {/*      <h3>Line segment detection and merging</h3>*/}
          {/*    </Carousel.Caption>*/}
          {/*  </Carousel.Item>*/}
          {/*</Carousel>*/}

          <br/><br/>

          <div className="container">
            <div className="text-justify">
              <p>Bachelor in Computer Science, Master in Artificial Intelligence (AI), and PhD in AI.
                I am a senior researcher in Computer Vision (CV). I have managed several CV and robotic projects that have been
                presented in symposiums and journals. I also contribute to important libraries such as OpenCV.</p>
              <p>In business, among a large list of projects I would like to highlight my contributions in The Graffter,
                where I developed Augmented Reality technology for urban environment and XOIA Software Development, a
                company that I have co-founded and nowadays has more than 10 employees.</p>
            </div>
            <br/>
            <div>
              <h2>Publications</h2>
              <ul>
                <li>Suárez, I., Buenaposada, J. M., & Baumela, L. (2021). <b>ELSED: Enhanced Line SEgment Drawing</b>.
                </li>
                <a href="https://arxiv.org/abs/2108.03144">Paper</a>, &nbsp;
                <a href="https://github.com/iago-suarez/ELSED">Source code</a> &nbsp;
                <br/>
                <li>Suárez, I., Buenaposada, J. M., & Baumela, L. (2021). <b>Revisiting Binary Local Image Description for Resource Limited Devices</b>.
                   <i> IEEE Robotics and Automation Letters</i>.
                </li>
                <a href="https://arxiv.org/abs/2108.08380">Paper</a>, &nbsp;
                <a href="https://github.com/iago-suarez/efficient-descriptors">Source code (C++)</a>, &nbsp;
                <a href="https://doi.org/10.1109/LRA.2021.3107024">DOI</a>, &nbsp;
                <a href="https://iago-suarez.com/efficient-descriptors">Project page</a>
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
                <li>Suárez, I., Sfeir, G., Buenaposada, J. M., & Baumela, L. (2019, July). <b>BELID: Boosted efficient
                  local image descriptor</b>. In
                  <i>Iberian Conference on Pattern Recognition and Image Analysis</i> (pp. 449-460). Springer, Cham.
                </li>
                <a href="http://www.dia.fi.upm.es/~pcr/publications/PRL_2020_web_BEBLID.pdf">Paper</a>, &nbsp;
                <a href="https://doi.org/10.1007/978-3-030-31332-6_39">DOI</a>, &nbsp;
                <a href="https://www.youtube.com/watch?v=RknriYhmeUI">Video</a>
                <br/>
                <li>Suárez, I., Muñoz, E., Buenaposada, J. M., & Baumela, L. (2018, October).
                  <b>FSG: A statistical approach to line detection via fast segments grouping</b>. In
                  <i>2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</i> (pp. 97-102).
                  IEEE.
                </li>
                <a href="https://raw.githubusercontent.com/graffter/fsg-benchmark/master/fsg-paper.pdf">Paper</a>, &nbsp;
                <a href="https://github.com/iago-suarez/FSG">Source code (C++)</a>, &nbsp;
                <a href="https://doi.org/10.1109/IROS.2018.8594434">DOI</a>, &nbsp;
                <a href="https://github.com/graffter/fsg-benchmark">Dataset</a>, &nbsp;
                <a href="https://www.youtube.com/watch?v=RknriYhmeUI">Video</a>
                <br/>
              </ul>
            </div>
            <br/>

            <div>
              <h2>Teaching</h2>
              Teaching assistant in the following courses (2019 - 2021):
              <ul>
                <li><b>Deep Learning</b> - Master's Programme in Digital Innovation: Data Science. (English) &nbsp;
                  <a href={DeepLearningGuide}>Learning Guide</a> </li>
                <li><b>Pattern Recognition</b> - Computer Engineering degree. (Spanish) &nbsp;
                  <a href={ReconocimientoGuide}>Learning Guide</a> </li>
              </ul>
              <br/>
              Advisor of the following Bachelor and Master projects:
              <ul>
                <li>
                  <b>García-Siñeriz Sánchez, Ignacio </b> (2021). &nbsp;
                  <a href="http://oa.upm.es/68051/1/TFG_IGNACIO_GARCIA_SINERIZ_SANCHEZ.pdf" target="_blank">
                    Interfaz gráfica para el uso de Realidad Aumentada en Unity3D
                  </a>. Proyecto Fin de Carrera.
                </li>
                <li>
                  <b>Díaz Álvarez, Jorge </b> (2021). &nbsp;
                  <a href="http://oa.upm.es/68007/1/TFG_JORGE_DIAZ_ALVAREZ.pdf" target="_blank">
                    Visión por computador para el uso de Realidad Aumentada en Unity3D
                  </a>. Proyecto Fin de Carrera.
                </li>
                <li>
                  <b>Wei, Tingyun</b> (2020). &nbsp;
                  <a href="http://oa.upm.es/65861/1/TFM_TINGYUN_WEI.pdf" target="_blank">
                    A multi-platform comparison of local feature description methods
                  </a>. Thesis (Master thesis).
                </li>
                <li>
                  <b>Olivares Gil, Alicia</b> (2020). &nbsp;
                  <a href="http://oa.upm.es/63767/1/TFM_ALICIA_OLIVARES_GIL.pdf" target="_blank">
                    Estudio sobre detectores y descriptores de segmentos rectilíneos
                  </a>. Thesis (Master thesis)
                </li>
                <li>
                  <b>Cobo Cabornero, Alejandro</b> (2019). &nbsp;
                  <a href="http://oa.upm.es/55778/1/TFG_ALEJANDRO_COBO_CABORNERO.pdf" target="_blank">
                    Evaluación y optimización de un descriptor de características
                  </a>. Proyecto Fin de Carrera.
                </li>
                <li>
                  <b>Audante Ramos, Néstor Rafael</b> (2019). &nbsp;
                  <a href="http://oa.upm.es/56021/1/TFM_NESTOR_RAFAEL_AUDANTE_RAMOS.pdf" target="_blank">
                    Simulación de entornos urbanos para el aprendizaje de descriptores locales de apariencia
                  </a>. Thesis (Master thesis)
                </li>
                <li>
                  <b>Sfeir Malavé, Ghesn Daniel</b> (2019).  &nbsp;
                  <a href="http://oa.upm.es/55889/1/TFM_GHESN_DANIEL_SFEIR_MALAVE.pdf" target="_blank">
                    Learning highly efficient local image descriptors
                  </a>. Thesis (Master thesis)
                </li>
              </ul>

            </div>
            <br/>

            <div>
              <h2>Education</h2>
              <ul>
                <li>
                  <b>Research Internship - ETH Zürich</b> (2021)<br/>
                  <p className="text-justify">
                    During three amazing months I have been working in <a href="https://www.cvg.ethz.ch/">CVG</a> group
                    of ETH under the supervision of Prof. Marc Pollefeys. I developed a project about geometric-aware line
                    segment matching for SLAM systems.</p>
                </li>
                <li>
                  <b>PhD - Universidad Politécnica de Madrid: Augmented Reality in Urban Environments</b> (2021)<br/>

                  <p className="text-justify">
                    In my PhD I created and improved the basics of Augmented Reality to move it towards Urban
                    Environments. My research is centered in efficient detectors and descriptors for local image
                    features such as corners or line segments where we have already published two articles. We are also
                    working with RANSAC based geometric techniques to improve the estimation of the device pose in the
                    world.</p>
                  <Icon.ArrowRight/> &nbsp;
                  <a href="https://oa.upm.es/69043" target="_blank">thesis</a> &nbsp;
                </li><br/>
                <li>
                  <b>Master in Artificial Intelligence - Universidad Politécnica de Madrid</b> (2016)<br/>
                  In this master I could learn about some important AI topics such as: Machine Learning, Computer
                  Vision, Evolutionary Computing or Advanced Neural Networks.
                  It was also one introduction to the research world and a first step into my PhD.<br/>
                  <Icon.ArrowRight/> &nbsp;
                  Project: <b>Prototipo de motor de realidad aumentada tridimensional para dispositivos móviles</b>.&nbsp;
                  <a href="https://oa.upm.es/43350/1/TFM_XOANIAGO_SUAREZ_CANOSA.pdf" target="_blank">thesis</a>, &nbsp;
                  <a href={SlidesTFM} target="_blank">slides</a>, &nbsp;
                  <a href="https://youtu.be/NnIveZCbigk" target="_blank">video</a> &nbsp;
                </li><br/>
                <li>
                  <b>Bachelor in Computer Science - Universidade da Coruña</b> (2015)<br/>
                  <Icon.ArrowRight/> &nbsp;
                    Bachelor project: <b>Web application for the analysis of human behavior</b>.&nbsp;
                      <a href="https://www.youtube.com/watch?v=VtWA3Z4OhHQ" target="_blank">video</a>, &nbsp;
                      <a href="https://github.com/iago-suarez/ancoweb-TFG" target="_blank">source code</a>
                </li>
              </ul>
            </div>
            <br/>

            <div>
              <h2>Public Presentations</h2>
              <ul>
                <li><b>Master Universitario en Vision Artificial (URJC) 2021, 2020</b>: Augmented Reality in Urban Environments Seminar.&nbsp;
                  <a href="https://youtu.be/zijWdXDjwb0"  target="_blank">video</a>,&nbsp;
                  <a href={PosterSymposiumUPM} target="_blank">poster</a>
                </li>
                <li><b>2019: 9th Iberian Conference on Pattern Recognition and Image Analysis (IbPRIA)</b>: BELID: Boosted Efficient Local Image Descriptor.&nbsp;
                  <a href={SlidesIbPRIA18} target="_blank">slides</a>
                </li>
                <li><b>2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</b>: FSG: A statistical approach to line detection via fast segments grouping.&nbsp;
                  <a href={SlidesIROS18} target="_blank">slides</a>
                </li>
                <li><b>TEDx OviedoUniversity 2017</b>: The power of the Augmented Reality (Workshop Speaker)</li>
              </ul>
            </div>
            <br/>

            <div>
              <h2>Honors and Awards</h2>
              <ul>
                <li>Cum Laude PhD (Nov, 2021)</li>
                <li>Best Student Paper Award of ibPRIA 2019</li>
                <li>Best PhD Thesis Award in the ICT field of the Polytechnic University of Madrid (May, 2019), &nbsp;
                  <a href="https://youtu.be/pJN94oZgqWY" target="_blank">video</a></li>
                <li>Primer Premio al mejor Trabajo Fin de Grado de Soft. Libre (November, 2015)</li>
              </ul>
            </div>
            <br/>

            <div>
              <h2>Other Projects</h2>
              I am specially proud of the following companies/project:<br/><br/>
              <ul>
                <li>The Graffter. &nbsp;
                  <a href="http://www.thegraffter.com/en/" target="_blank">webpage</a>, &nbsp;
                  <a href="https://www.youtube.com/channel/UCaA4tTBqW6Wbkxz1Ep-4szw" target="_blank">videos1</a>,  &nbsp;
                  <a href="https://youtu.be/XIBLZUiOKmc" target="_blank">video2</a>
                </li>
                <li>XOIA Software Development. &nbsp;
                  <a href="https://xoia.es/" target="_blank">webpage</a>, &nbsp;
                  <a href="https://youtu.be/gJum_Qv_Ws8" target="_blank">video1</a>,  &nbsp;
                  <a href="https://youtu.be/74K1lK3kQJM" target="_blank">video2</a>
                </li>
                <li>Bookker. &nbsp;
                  <a href="https://www.bookkercorp.com/" target="_blank">webpage</a>, &nbsp;
                  <a href="https://youtu.be/hM3mOG7bLEU" target="_blank">video1</a>,  &nbsp;
                  <a href="https://youtu.be/pYOwr3o-AWY" target="_blank">video2</a>
                </li>
                {/*<li>Eation Tech. &nbsp;<a href="https://www.eationtech.com/">webpage</a>, &nbsp;<a href="https://youtu.be/0cbVPS4-VEQ">video</a></li>*/}
                <li>White Mirror. &nbsp;<a href="https://www.whitemirror.es/" target="_blank">webpage</a></li>
              </ul>
            </div>
            <br/>
            <div>
              <h2>Contact</h2>
              <p><b>Email</b>:&nbsp;
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
