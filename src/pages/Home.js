import mypicture from '../images/mypicture.jpg'
import slide1 from '../images/LineSegmentDetection.jpg'
import slide2 from '../images/FeatureDescription.jpg'
import DeepLearningGuide from '../documents/GA_10AZ_103000856_2S_2020-21.pdf'
import ReconocimientoGuide from '../documents/GA_10II_105000059_1S_2020-21.pdf'
import SlidesIROS18 from '../documents/Slides_IROS18.pdf'
import SlidesIbPRIA18 from '../documents/Slides_IbPRIA19.pdf'
import PosterSymposiumUPM from '../documents/Poster_PhDSymposium19.pdf'
import SlidesTFM from '../documents/Slides_TFM_iago.pdf'
import SlidesPhD from '../documents/Slides_PhD_iago.pdf'
import PosterICVSS22 from '../documents/Poster_ICVSS22_Iago_Suarez.pdf'
import SummerCampMIL23 from '../documents/SummerCampMIL23.pdf'
import ImgELSED from '../images/ELSED.jpg'
import ImgGlueStick from '../images/gluestick.gif'
import ImgFSG from '../images/FsgIros18.gif'
import ImgBelid from '../images/BelidImg.png'
import ImgBeblid from '../images/BeblidImg.png'
import ImgRAL21 from '../images/ImgRAL21.gif'
import VanishingPointsVideo from '../videos/vanishing.mp4'
import CardiaVideo from '../videos/cardia_demo.mp4'
import '../App.css'
import '../Sidebar.css'
import * as Icon from 'react-bootstrap-icons'
import Carousel from 'react-bootstrap/Carousel'

function Publication(props) {
  //return <h1>Hello, {props.name}</h1>;
  return <div className="card pub-card">
    <div className="container-fluid">
      <div className="row pub-row">
        <div className="col-md-3 vcenter-item">
          <img src={props.img} className="card-img-top pub-image" alt="Publication image"></img>
        </div>
        <div className="col-md-9">
          <p className="pub-text-title pub-text-p ">{props.name}</p>
          <p className="pub-text-authors pub-text-p">{props.authors_year}</p>
          <p className="pub-text-p">{props.venue}</p>
          <p className="pub-text-p">
            {props.links.map((tag, i) => <span key={i}> {i > 0 && "| "}
              <a href={tag.props.href} target="_blank" rel="noreferrer">{tag.props.children}</a>
            </span>)
            }
          </p>
        </div>
      </div>
    </div>
  </div>
}

function Home () {
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
              <a href="#publications-section">Publications</a>
            </li>
            <li>
              <a href="#education-section">Education</a>
            </li>
            <li>
              <a href="#projects-section">Projects</a>
            </li>
            <li>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <a className="medium-icon social-icon" href="https://github.com/iago-suarez"><Icon.Github/></a>
                  </div>
                  <div className="col-sm">
                    <a className="medium-icon social-icon"
                       href="https://scholar.google.es/citations?user=6CRh05wAAAAJ&hl=es&oi=ao"><Icon.Book/></a>
                  </div>
                  <div className="col-sm">
                    <a className="medium-icon social-icon"
                       href="https://twitter.com/IagoSuarez0"><Icon.Twitter/></a>
                  </div>
                  <div className="col-sm">
                    <a className="medium-icon social-icon" href="https://www.linkedin.com/in/iago-suarez/"><Icon.Linkedin/></a>
                  </div>
                </div>
              </div>
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
              <p>Among a large list of projects I would like to highlight my contributions in The Graffter,
                where I developed Augmented Reality technology for urban environment and XOIA Soft. Dev., a
                company that I have co-founded and nowadays has more than 10 employees. I led the CV team of New Horizon
                Technologies, developing several video surveillance, and medical image projects.</p>

              <p>At the moment, I am a Senior Machine Learning Engineer at Qualcomm XR Labs Europe, where we are
                creating a new generation of AR/VR headsets by using cutting-edge Deep Learning technology to improve
                SLAM and SfM. </p>
            </div>
            <br/>
            <div id="publications-section">
              <h2>Publications</h2>
              <Publication name="GlueStick: Robust Image Matching by Sticking Points and Lines Together"
                           img={ImgGlueStick}
                           authors_year={<span>Pautrat, R.<sup>*</sup>, Suárez, I.<sup>*</sup>, Yu, Y., Pollefeys, M., Larsson, V. (2023)</span>}
                           venue={<span><sup>*</sup>Equal contribution.  &nbsp; <i>ICCV 2023</i>.</span>}
                           links={[
                             <a href="https://arxiv.org/pdf/2304.02008.pdf">Paper</a>,
                             <a href="https://github.com/cvg/GlueStick">Code</a>,
                             <a href="/gluestick">Project page</a>,
                             <a href="https://colab.research.google.com/github/cvg/GlueStick/blob/main/gluestick_matching_demo.ipynb">Colab Demo</a>
                           ]}/>

              <Publication name="ELSED: Enhanced Line SEgment Drawing"
                           img={ImgELSED}
                           authors_year="Suárez, I., Buenaposada, J. M., & Baumela, L. (2022)"
                           venue={<span><i>Pattern Recognition</i>, 127, 108619.</span>}
                           links={[
                             <a href="https://www.sciencedirect.com/science/article/pii/S0031320322001005/pdfft?md5=30d73760c68b632196efe2f0a1745a94&pid=1-s2.0-S0031320322001005-main.pdf">Paper</a>,
                             <a href="https://github.com/iago-suarez/ELSED">Code (C++)</a>,
                             <a href="https://doi.org/10.1016/j.patcog.2022.108619">DOI</a>,
                             <a href="/elsed">Project page</a>
                           ]}/>

              <Publication name="Revisiting Binary Local Image Description for Resource Limited Devices"
                           img={ImgRAL21}
                           authors_year="Suárez, I., Buenaposada, J. M., & Baumela, L. (2021)"
                           venue={<span><i> IEEE Robotics and Automation Letters</i>, 6(4), 8317-8324.</span>}
                           links={[
                             <a href="https://arxiv.org/abs/2108.08380">Paper</a>,
                             <a href="https://github.com/iago-suarez/efficient-descriptors">Code (C++)</a>,
                             <a href="https://doi.org/10.1109/LRA.2021.3107024">DOI</a>,
                             <a href="https://iago-suarez.com/efficient-descriptors">Project page</a>,
                             <a href="https://youtu.be/3WxjxPjDGSQ">Video</a>
                           ]}/>

              <Publication name="BEBLID: Boosted efficient binary local image descriptor"
                           img={ImgBeblid}
                           authors_year="Suárez, I., Sfeir, G., Buenaposada, J. M., & Baumela, L. (2020)."
                           venue={<span><i>Pattern Recognition Letters</i>, 133, 366-372.</span>}
                           links={[
                             <a href="http://www.dia.fi.upm.es/~pcr/publications/PRL_2020_web_BEBLID.pdf">Paper</a>,
                             <a href="https://github.com/iago-suarez/BEBLID">Code (C++)</a>,
                             <a href="https://towardsdatascience.com/improving-your-image-matching-results-by-14-with-one-line-of-code-b72ae9ca2b73">Python OpenCV Tutorial</a>,
                             <a href="https://doi.org/10.1016/j.patrec.2020.04.005">DOI</a>
                           ]}/>
              <Publication name="BELID: Boosted efficient local image descriptor"
                           img={ImgBelid}
                           authors_year="Suárez, I., Sfeir, G., Buenaposada, J. M., & Baumela, L. (2019, July)"
                           venue={<span><i>Iberian Conference on Pattern Recognition and Image Analysis (IbPRIA)</i> (pp. 449-460).</span>}
                           links={[
                             <a href="http://www.dia.fi.upm.es/~pcr/publications/ibpria2019.pdf">Paper</a>,
                             <a href="https://doi.org/10.1007/978-3-030-31332-6_39">DOI</a>
                           ]}/>
              <Publication name="FSG: A statistical approach to line detection via fast segments grouping"
                           img={ImgFSG}
                           authors_year="Suárez, I., Muñoz, E., Buenaposada, J. M., & Baumela, L. (2018, October)"
                           venue={<span><i>International Conference on Intelligent Robots and Systems (IROS)</i> (pp. 97-102).</span>}
                           links={[
                             <a href="http://www.dia.fi.upm.es/~pcr/publications/iros2018.pdf">Paper</a>,
                             <a href="https://github.com/iago-suarez/FSG">Code (C++)</a>,
                             <a href="https://doi.org/10.1109/IROS.2018.8594434">DOI</a>,
                             <a href="https://github.com/graffter/fsg-benchmark">Dataset</a>,
                             <a href="https://www.youtube.com/watch?v=RknriYhmeUI">Video</a>
                           ]}/>
            </div>
            <br/>

            <div id="education-section">
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
                  <a href="https://oa.upm.es/69043" target="_blank" rel="noreferrer">thesis</a>, &nbsp;
                  <a href={SlidesPhD} target="_blank" rel="noreferrer">slides</a>
                </li><br/>
                <li>
                  <b>Master in Artificial Intelligence - Universidad Politécnica de Madrid</b> (2016)<br/>
                  In this master I could learn about some important AI topics such as: Machine Learning, Computer
                  Vision, Evolutionary Computing or Advanced Neural Networks.
                  It was also one introduction to the research world and a first step into my PhD.<br/>
                  <Icon.ArrowRight/> &nbsp;
                  Project: <b>Prototipo de motor de realidad aumentada tridimensional para dispositivos móviles</b>.&nbsp;
                  <a href="https://oa.upm.es/43350/1/TFM_XOANIAGO_SUAREZ_CANOSA.pdf" target="_blank" rel="noreferrer">thesis</a>, &nbsp;
                  <a href={SlidesTFM} target="_blank" rel="noreferrer">slides</a>, &nbsp;
                  <a href="https://youtu.be/NnIveZCbigk" target="_blank" rel="noreferrer">video</a> &nbsp;
                </li><br/>
                <li>
                  <b>Bachelor in Computer Science - Universidade da Coruña</b> (2015)<br/>
                  <Icon.ArrowRight/> &nbsp;
                    Bachelor project: <b>Web application for the analysis of human behavior</b>.&nbsp;
                      <a href="https://www.youtube.com/watch?v=VtWA3Z4OhHQ" target="_blank" rel="noreferrer">video</a>, &nbsp;
                      <a href="https://github.com/iago-suarez/ancoweb-TFG" target="_blank" rel="noreferrer">source code</a>
                </li>
              </ul>
            </div>
            <br/>

            <div id="teaching-section">
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
                  <b>Lomas, Vanesa </b> (2023). &nbsp;
                    Detección de personas en imágenes omnidireccionales. Thesis (Master thesis).
                </li>

                <li>
                  <b>García-Siñeriz Sánchez, Ignacio </b> (2021). &nbsp;
                  <a href="http://oa.upm.es/68051/1/TFG_IGNACIO_GARCIA_SINERIZ_SANCHEZ.pdf" target="_blank" rel="noreferrer">
                    Interfaz gráfica para el uso de Realidad Aumentada en Unity3D
                  </a>. Proyecto Fin de Carrera.
                </li>
                <li>
                  <b>Díaz Álvarez, Jorge </b> (2021). &nbsp;
                  <a href="http://oa.upm.es/68007/1/TFG_JORGE_DIAZ_ALVAREZ.pdf" target="_blank" rel="noreferrer">
                    Visión por computador para el uso de Realidad Aumentada en Unity3D
                  </a>. Proyecto Fin de Carrera.
                </li>
                <li>
                  <b>Wei, Tingyun</b> (2020). &nbsp;
                  <a href="http://oa.upm.es/65861/1/TFM_TINGYUN_WEI.pdf" target="_blank" rel="noreferrer">
                    A multi-platform comparison of local feature description methods
                  </a>. Thesis (Master thesis).
                </li>
                <li>
                  <b>Olivares Gil, Alicia</b> (2020). &nbsp;
                  <a href="http://oa.upm.es/63767/1/TFM_ALICIA_OLIVARES_GIL.pdf" target="_blank" rel="noreferrer">
                    Estudio sobre detectores y descriptores de segmentos rectilíneos
                  </a>. Thesis (Master thesis)
                </li>
                <li>
                  <b>Cobo Cabornero, Alejandro</b> (2019). &nbsp;
                  <a href="http://oa.upm.es/55778/1/TFG_ALEJANDRO_COBO_CABORNERO.pdf" target="_blank" rel="noreferrer">
                    Evaluación y optimización de un descriptor de características
                  </a>. Proyecto Fin de Carrera.
                </li>
                <li>
                  <b>Audante Ramos, Néstor Rafael</b> (2019). &nbsp;
                  <a href="http://oa.upm.es/56021/1/TFM_NESTOR_RAFAEL_AUDANTE_RAMOS.pdf" target="_blank" rel="noreferrer">
                    Simulación de entornos urbanos para el aprendizaje de descriptores locales de apariencia
                  </a>. Thesis (Master thesis)
                </li>
                <li>
                  <b>Sfeir Malavé, Ghesn Daniel</b> (2019).  &nbsp;
                  <a href="http://oa.upm.es/55889/1/TFM_GHESN_DANIEL_SFEIR_MALAVE.pdf" target="_blank" rel="noreferrer">
                    Learning highly efficient local image descriptors
                  </a>. Thesis (Master thesis)
                </li>
              </ul>

            </div>
            <br/>

            <div id="presentations-section">
              <h2>Public Presentations</h2>
              <ul>
                <li><b>Extended Reality: Towards Spatial Intelligence</b>: Madrid Innovation Lab <a href="https://milmadrid.es/disfruta-el-verano-a-mil-summer-camp-2023/">Summer Camp</a> (2023).&nbsp;
                <a href={SummerCampMIL23} target="_blank" rel="noreferrer">slides.pdf</a>,  &nbsp;
                <a href="https://docs.google.com/presentation/d/1EM4jQSoufcEDOPeYmybGYD3QeBP7XHYx/edit?usp=sharing&ouid=103357012295063844651&rtpof=true&sd=true" target="_blank" rel="noreferrer">slides.pptx</a>,  &nbsp;
                <a href="https://youtu.be/vkUojbPE_3o" target="_blank" rel="noreferrer">video (spanish)</a> </li>
                <li><b>Sticking Points and Lines for Improved Image Matching</b>: International Computer Vision Summer School (ICVSS) 2022. <a href={PosterICVSS22} target="_blank" rel="noreferrer">poster</a></li>
                <li><b>Master Universitario en Vision Artificial (URJC) 2021, 2020</b>: Augmented Reality in Urban Environments Seminar.&nbsp;
                  <a href="https://youtu.be/zijWdXDjwb0"  target="_blank" rel="noreferrer">video</a>
                </li>
                <li><b>2019: 9th Iberian Conference on Pattern Recognition and Image Analysis (IbPRIA)</b>: BELID: Boosted Efficient Local Image Descriptor.&nbsp;
                  <a href={SlidesIbPRIA18} target="_blank" rel="noreferrer">slides</a>
                </li>
                <li><b>2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</b>: FSG: A statistical approach to line detection via fast segments grouping.&nbsp;
                  <a href={SlidesIROS18} target="_blank" rel="noreferrer">slides</a>
                </li>
                <li><b>TEDx OviedoUniversity 2017</b>: The power of the Augmented Reality (Workshop Speaker)</li>
              </ul>
            </div>
            <br/>

            <div id="awards-section">
              <h2>Honors and Awards</h2>
              <ul>
                <li>Excellent PhD Award, Computer Science Faculty, Universidad Politécnica de Madrid (January, 2024), &nbsp;
                  <a href="https://youtu.be/lznCqRtA6TE?si=0ImUd6yYpzXWebI7&t=6047" target="_blank" rel="noreferrer">recording</a>
                </li>
                <li>Reading Group Competition Award. International Computer Vision Summer School (ICVSS), 2022</li>
                <li>Cum Laude PhD (November, 2021)</li>
                <li>Best Student Paper Award of ibPRIA 2019</li>
                <li>Best PhD Thesis Award in the ICT field of the Polytechnic University of Madrid (May, 2019), &nbsp;
                  <a href="https://youtu.be/pJN94oZgqWY" target="_blank" rel="noreferrer">video</a>, &nbsp;
                  <a href={PosterSymposiumUPM} target="_blank" rel="noreferrer">poster</a>
                </li>
                <li>Primer Premio al mejor Trabajo Fin de Grado de Soft. Libre (November, 2015)</li>
              </ul>
            </div>
            <br/>

            <div id="projects-section">
              <h2>Other Projects</h2>
              I am specially proud of the following companies/project:<br/><br/>
              <ul>
                <li>ML Circle. &nbsp;
                  <a href="https://mlcircle.org/" target="_blank" rel="noreferrer">webpage</a>, &nbsp;
                  <a href="https://www.meetup.com/madrid-machine-learning-meetup/" target="_blank" rel="noreferrer">meetup</a>, &nbsp;
                  <a href="https://youtube.com/playlist?list=PLHeG8vnHL6C8mOU8K8vs2j9I7dSMYCgJQ&si=QQAqaV9PpU4w8aNZ" target="_blank" rel="noreferrer">previous talks</a>
                </li>
                <li>New Horizon Technologies ~ Apolo AI. &nbsp;
                  <a href="https://www.apoloai.com/" target="_blank" rel="noreferrer">webpage</a>, &nbsp;
                  <a href="https://cardia.ai/" target="_blank" rel="noreferrer">cardia</a>,  &nbsp;
                  <a href={CardiaVideo} target="_blank" rel="noreferrer">video</a>
                </li>
                <li>XOIA Software Development. &nbsp;
                  <a href="https://xoia.es/" target="_blank" rel="noreferrer">webpage</a>, &nbsp;
                  <a href="https://youtu.be/gJum_Qv_Ws8" target="_blank" rel="noreferrer">video1</a>,  &nbsp;
                  <a href="https://youtu.be/74K1lK3kQJM" target="_blank" rel="noreferrer">video2</a>
                </li>
                <li>The Graffter. &nbsp;
                  <a href="http://www.thegraffter.com/en/" target="_blank" rel="noreferrer">webpage</a>, &nbsp;
                  <a href="https://www.youtube.com/channel/UCaA4tTBqW6Wbkxz1Ep-4szw" target="_blank" rel="noreferrer">videos1</a>,  &nbsp;
                  <a href="https://youtu.be/XIBLZUiOKmc" target="_blank" rel="noreferrer">video2</a>
                </li>
                <li>Bookker. &nbsp;
                  <a href="https://www.bookkercorp.com/" target="_blank" rel="noreferrer">webpage</a>, &nbsp;
                  <a href="https://youtu.be/hM3mOG7bLEU" target="_blank" rel="noreferrer">video1</a>,  &nbsp;
                  <a href="https://youtu.be/pYOwr3o-AWY" target="_blank" rel="noreferrer">video2</a>
                </li>
                {/*<li>Eation Tech. &nbsp;<a href="https://www.eationtech.com/">webpage</a>, &nbsp;<a href="https://youtu.be/0cbVPS4-VEQ">video</a></li>*/}
                <li>White Mirror. &nbsp;<a href="https://www.whitemirror.es/" target="_blank" rel="noreferrer">webpage</a>,  &nbsp;
                <a href="/wool-ar/" target="_blank" rel="noreferrer">Online Demo</a>
                </li>
              </ul>
            </div>
            <br/>
            <div>
              <h2>Contact</h2>
              <p><b>Email</b>:&nbsp;
                <a href="mailto:iagosuarz@gmail.com">iagosuarz@gmail.com</a></p>
            </div>

          </div>
        </div>
      </div>
      {/*/#wrapper*/}
    </div>
  )
}

export default Home
