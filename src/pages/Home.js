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
import ImgWireframe from '../images/WireframeDetector.gif'
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
    <div className="container-fluid pub-card-container">
      <div className="row pub-row">
        <div className="col-md-3 vcenter-item pub-image-pane">
          <img src={props.img} className="card-img-top pub-image" alt="Publication image"></img>
        </div>
        <div className="col-md-9 pub-details-pane">
          <p className="pub-text-title pub-text-p">{props.name}</p>
          <p className="pub-text-authors pub-text-p">{props.authors_year}</p>
          <p className="pub-text-p pub-text-venue">{props.venue}</p>
          <p className="pub-text-p pub-links">
            {props.links.map((tag, i) => {
              const { href, children, target, rel, ...restProps } = tag.props
              return <span key={i}> {i > 0 && "| "}
                <a href={href}
                   target={target || '_blank'}
                   rel={rel || 'noreferrer'}
                   {...restProps}>{children}</a>
              </span>
            })}
          </p>
        </div>
      </div>
    </div>
  </div>
}

function HighlightCard ({ icon: IconComponent, title, subtitle, description, tags = [], links = [], children }) {
  return <div className="highlight-card">
    <div className="highlight-card-header">
      {IconComponent && <div className="highlight-card-icon">
        <IconComponent/>
      </div>}
      <div>
        <p className="highlight-card-title">{title}</p>
        {subtitle && <p className="highlight-card-subtitle">{subtitle}</p>}
        {tags.length > 0 && <div className="highlight-card-tags">
          {tags.map((tag, idx) => <span className="highlight-card-tag" key={idx}>{tag}</span>)}
        </div>}
      </div>
    </div>
    {description && <p className="highlight-card-description">{description}</p>}
    {children}
    {links.length > 0 && <div className="highlight-card-links">
      {links.map((link, idx) =>
        <a key={idx}
           href={link.href}
           target={link.target || '_blank'}
           rel={link.rel || 'noreferrer'}>{link.label}</a>
      )}
    </div>}
  </div>
}

function EducationTimeline ({ items }) {
  return <div className="education-timeline">
    <div className="education-timeline-line"></div>
    {items.map((item, idx) => {
      return <div className="education-timeline-item" key={idx}>
        <p className="education-label education-label-top">{item.title}</p>
        <div className="education-node">
          <div className="education-circle" tabIndex={0}>
            <div className="education-card">
              <p className="education-card-heading">{item.title}</p>
              <p className="education-card-subheading">{item.subtitle}</p>
              <p className="education-card-description">{item.description}</p>
              {item.tags.length > 0 && <div className="education-card-tags">
                {item.tags.map((tag, tagIdx) => <span className="highlight-card-tag" key={tagIdx}>{tag}</span>)}
              </div>}
              {item.links.length > 0 && <div className="education-card-links">
                {item.links.map((link, linkIdx) =>
                  <a key={linkIdx}
                     href={link.href}
                     target={link.target || '_blank'}
                     rel={link.rel || 'noreferrer'}>{link.label}</a>)}
              </div>}
            </div>
          </div>
        </div>
        <p className="education-label education-label-bottom">{item.subtitle}</p>
      </div>
    })}
  </div>
}

function Home () {
  const educationHighlights = [
    {
      icon: Icon.Laptop,
      title: 'B.Sc. in Computer Science',
      subtitle: 'Universidade da Coruña · 2015',
      description: 'Developed AncoWeb, a behavioural analytics platform for understanding user interactions, graduating with highest honours.',
      tags: ['Full-Stack', 'Behaviour Analytics'],
      links: [
        { label: 'Project video', href: 'https://www.youtube.com/watch?v=VtWA3Z4OhHQ' },
        { label: 'Source code', href: 'https://github.com/iago-suarez/ancoweb-TFG' }
      ]
    },
    {
      icon: Icon.Cpu,
      title: 'M.Sc. in Artificial Intelligence',
      subtitle: 'Universidad Politécnica de Madrid · 2016',
      description: 'Specialised in machine learning, computer vision, evolutionary computation, and neural networks. Built a 3D mobile augmented reality engine as a capstone project.',
      tags: ['Machine Learning', 'AR Engine'],
      links: [
        { label: 'Capstone thesis', href: 'https://oa.upm.es/43350/1/TFM_XOANIAGO_SUAREZ_CANOSA.pdf' },
        { label: 'Slides', href: SlidesTFM },
        { label: 'Demo video', href: 'https://youtu.be/NnIveZCbigk' }
      ]
    },
    {
      icon: Icon.Globe,
      title: 'Research Internship',
      subtitle: 'ETH Zürich — CVG Lab · 2021',
      description: 'Collaborated with Prof. Marc Pollefeys on geometric-aware line segment matching for SLAM, combining learned features with robust multi-view geometry.',
      tags: ['SLAM', 'Feature Matching'],
      links: [
        { label: 'CVG Lab', href: 'https://www.cvg.ethz.ch/' }
      ]
    },
    {
      icon: Icon.BookHalf,
      title: 'Ph.D. in Artificial Intelligence',
      subtitle: 'Universidad Politécnica de Madrid · 2021',
      description: 'Advanced augmented reality for large-scale urban environments by creating efficient line and keypoint detectors, geometric verification pipelines, and real-time pose estimation tools.',
      tags: ['Augmented Reality', 'Geometric Vision'],
      links: [
        { label: 'Thesis', href: 'https://oa.upm.es/69043' },
        { label: 'Defense slides', href: SlidesPhD }
      ]
    }
  ]

  const teachingHighlights = [
    {
      icon: Icon.Easel,
      title: 'Graduate Instruction',
      subtitle: 'Teaching Assistant · 2019–2021',
      description: 'Delivered hands-on labs and mentoring for Deep Learning (M.Sc. Digital Innovation, English) and Pattern Recognition (Computer Engineering, Spanish).',
      tags: ['Deep Learning', 'Pattern Recognition'],
      links: [
        { label: 'Deep Learning guide', href: DeepLearningGuide },
        { label: 'Pattern Recognition guide', href: ReconocimientoGuide }
      ]
    },
    {
      icon: Icon.People,
      title: 'Thesis Supervision',
      subtitle: '9 Master theses · 3 Bachelor theses',
      description: 'Guided students through projects spanning omnidirectional perception, AR authoring tools, and efficient feature descriptors.',
      children: <details>
        <summary>View selected theses</summary>
        <ul className="highlight-list">
          <li><b>Lomas, Vanesa</b> (2023) — Detección de personas en imágenes omnidireccionales.</li>
          <li><b>García-Siñeriz Sánchez, Ignacio</b> (2021) — Interfaz gráfica para el uso de Realidad Aumentada en Unity3D.</li>
          <li><b>Díaz Álvarez, Jorge</b> (2021) — Visión por computador para el uso de Realidad Aumentada en Unity3D.</li>
          <li><b>Wei, Tingyun</b> (2020) — A multi-platform comparison of local feature description methods.</li>
          <li><b>Olivares Gil, Alicia</b> (2020) — Estudio sobre detectores y descriptores de segmentos rectilíneos.</li>
          <li><b>Cobo Cabornero, Alejandro</b> (2019) — Evaluación y optimización de un descriptor de características.</li>
          <li><b>Audante Ramos, Néstor Rafael</b> (2019) — Simulación de entornos urbanos para el aprendizaje de descriptores locales.</li>
          <li><b>Sfeir Malavé, Ghesn Daniel</b> (2019) — Learning highly efficient local image descriptors.</li>
        </ul>
      </details>
    }
  ]

  const presentationHighlights = [
    {
      icon: Icon.Mic,
      title: 'Extended Reality: Towards Spatial Intelligence',
      subtitle: 'Madrid Innovation Lab Summer Camp · 2023',
      description: 'Keynote on how XR, generative AI, and vision converge to build human-centered spatial interfaces.',
      links: [
        { label: 'Slides (PDF)', href: SummerCampMIL23 },
        { label: 'Slides (PPTX)', href: 'https://docs.google.com/presentation/d/1EM4jQSoufcEDOPeYmybGYD3QeBP7XHYx/edit?usp=sharing&ouid=103357012295063844651&rtpof=true&sd=true' },
        { label: 'Talk recording', href: 'https://youtu.be/vkUojbPE_3o' }
      ]
    },
    {
      icon: Icon.Bullseye,
      title: 'Sticking Points and Lines for Improved Image Matching',
      subtitle: 'International Computer Vision Summer School · 2022',
      description: 'Presented GlueStick to the ICVSS community, sharing lessons on combining point and line cues for robust matching.',
      links: [
        { label: 'Poster', href: PosterICVSS22 }
      ]
    },
    {
      icon: Icon.Megaphone,
      title: 'Academic & Public Outreach',
      subtitle: '2017–2021',
      description: 'Invited seminars at URJC, IbPRIA, IROS, and TEDx OviedoUniversity covering augmented reality pipelines and line detection.',
      links: [
        { label: 'URJC seminar', href: 'https://youtu.be/zijWdXDjwb0' },
        { label: 'IbPRIA slides', href: SlidesIbPRIA18 },
        { label: 'IROS slides', href: SlidesIROS18 },
        { label: 'TEDx workshop', href: 'https://youtu.be/XIBLZUiOKmc' }
      ]
    }
  ]

  const awardHighlights = [
    {
      icon: Icon.Award,
      title: 'Excellent PhD Award',
      subtitle: 'UPM School of Computer Science · 2024',
      links: [
        { label: 'Ceremony recording', href: 'https://youtu.be/lznCqRtA6TE?si=0ImUd6yYpzXWebI7&t=6047' }
      ]
    },
    {
      icon: Icon.Trophy,
      title: 'Reading Group Competition Winner',
      subtitle: 'International Computer Vision Summer School · 2022'
    },
    {
      icon: Icon.Star,
      title: 'Best Student Paper',
      subtitle: 'IbPRIA · 2019'
    },
    {
      icon: Icon.PatchCheck,
      title: 'Best PhD Thesis in ICT',
      subtitle: 'Polytechnic University of Madrid · 2019',
      links: [
        { label: 'Award video', href: 'https://youtu.be/pJN94oZgqWY' },
        { label: 'Poster', href: PosterSymposiumUPM }
      ]
    },
    {
      icon: Icon.LightningCharge,
      title: 'Open Source Final Degree Prize',
      subtitle: 'Universidade da Coruña · 2015'
    }
  ]

  const projectHighlights = [
    {
      icon: Icon.Lightbulb,
      title: 'ML Circle',
      subtitle: 'Co-founder & Co-organiser',
      description: 'Community that curates meetups, study groups, and technical content for Madrid’s applied machine learning practitioners.',
      links: [
        { label: 'Website', href: 'https://mlcircle.org/' },
        { label: 'Meetup', href: 'https://www.meetup.com/madrid-machine-learning-meetup/' },
        { label: 'Talk archive', href: 'https://youtube.com/playlist?list=PLHeG8vnHL6C8mOU8K8vs2j9I7dSMYCgJQ&si=QQAqaV9PpU4w8aNZ' }
      ]
    },
    {
      icon: Icon.Heart,
      title: 'Apolo AI at New Horizon Technologies',
      subtitle: 'Computer Vision Lead',
      description: 'Built AI-first healthcare products such as Cardia, an early-warning system for cardiac events using multimodal sensing and vision analytics.',
      links: [
        { label: 'Apolo AI', href: 'https://www.apoloai.com/' },
        { label: 'Cardia', href: 'https://cardia.ai/' },
        { label: 'Product video', href: CardiaVideo }
      ]
    },
    {
      icon: Icon.Vr,
      title: 'XOIA Software Development',
      subtitle: 'Co-founder',
      description: 'Scaled a boutique studio into a 10+ person AR/VR company delivering immersive experiences for industry, culture, and education.',
      links: [
        { label: 'Website', href: 'https://xoia.es/' },
        { label: 'Demo 1', href: 'https://youtu.be/gJum_Qv_Ws8' },
        { label: 'Demo 2', href: 'https://youtu.be/74K1lK3kQJM' }
      ]
    },
    {
      icon: Icon.GeoAlt,
      title: 'The Graffter',
      subtitle: 'Computer Vision Lead',
      description: 'Delivered large-scale AR visualisation for smart cities, enabling interactive urban narratives anchored to geolocated content.',
      links: [
        { label: 'Website', href: 'http://www.thegraffter.com/en/' },
        { label: 'YouTube channel', href: 'https://www.youtube.com/channel/UCaA4tTBqW6Wbkxz1Ep-4szw' },
        { label: 'Demo video', href: 'https://youtu.be/XIBLZUiOKmc' }
      ]
    },
    {
      icon: Icon.Briefcase,
      title: 'Bookker',
      subtitle: 'Vision & Innovation Advisor',
      description: 'Defined spatial analytics for hybrid workplaces, integrating occupancy sensing, booking telemetry, and AR guidance.',
      links: [
        { label: 'Website', href: 'https://www.bookkercorp.com/' },
        { label: 'Product video', href: 'https://youtu.be/hM3mOG7bLEU' },
        { label: 'Showcase', href: 'https://youtu.be/pYOwr3o-AWY' }
      ]
    },
    {
      icon: Icon.Compass,
      title: 'White Mirror',
      subtitle: 'Creative Technologist',
      description: 'Explores how computer vision and interactive media can turn physical spaces into narrative experiences.',
      links: [
        { label: 'Website', href: 'https://www.whitemirror.es/' },
        { label: 'Wool AR demo', href: '/wool-ar/' }
      ]
    }
  ]
  return (
    <div className="App">
      <div id="wrapper">
        {/*Sidebar*/}
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li>
              <h1 className="text-white text-decoration-none">Iago Suárez</h1>
            </li>
            <li className="mypicture-container">
              <img src={mypicture} className="img-fluid rounded-circle img-thumbnail" alt="Iago Suárez"/>
            </li>
            {/* <li className="sidebar-divider" aria-hidden="true"></li> */}
            {/* <li className="sidebar-link-item">
              <a className="sidebar-link" href="#publications-section">Publications</a>
            </li>
            <li className="sidebar-link-item">
              <a className="sidebar-link" href="#education-section">Education</a>
            </li>
            <li className="sidebar-link-item">
              <a className="sidebar-link" href="#projects-section">Projects</a>
            </li> */}
            <li className="sidebar-divider" aria-hidden="true"></li>
            <li className="sidebar-social-item">
              <a className="sidebar-social-link" href="https://github.com/iago-suarez">
                <Icon.Github className="sidebar-social-icon"/> GitHub
              </a>
            </li>
            <li className="sidebar-social-item">
              <a className="sidebar-social-link"
                 href="https://scholar.google.es/citations?user=6CRh05wAAAAJ&hl=es&oi=ao">
                <Icon.Book className="sidebar-social-icon"/> Scholar
              </a>
            </li>
            <li className="sidebar-social-item">
              <a className="sidebar-social-link" href="https://twitter.com/IagoSuarez0">
                <Icon.Twitter className="sidebar-social-icon"/> Twitter
              </a>
            </li>
            <li className="sidebar-social-item">
              <a className="sidebar-social-link" href="https://www.linkedin.com/in/iago-suarez/">
                <Icon.Linkedin className="sidebar-social-icon"/> LinkedIn
              </a>
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

          <section className="hero-section">
            <div className="hero-inner">
              <p className="hero-tagline">Senior ML Engineer · Computer Vision Researcher</p>
              <h2 className="hero-heading">Leveraging geometry-aware deep learning for XR, robotics, and imaging.</h2>
              <p className="hero-subtitle">
                I design robust perception systems that merge classical vision with modern machine learning to solve real-world SLAM and SfM challenges.
              </p>
              <div className="hero-actions">
                <a className="hero-cta" href="#publications-section">
                  View Publications
                </a>
                <a className="hero-cta hero-cta-secondary" href="#education-section">
                  Education
                </a>
                <a className="hero-cta hero-cta-secondary" href="#teaching-section">
                  Teaching
                </a>
                <a className="hero-cta hero-cta-secondary" href="#presentations-section">
                  Presentations
                </a>
                <a className="hero-cta hero-cta-secondary" href="#projects-section">
                  Projects
                </a>
              </div>
            </div>
          </section>

          <div className="container">
            <div className="text-justify">
              <p>I hold a B.Sc. in Computer Science, an M.Sc. in Artificial Intelligence, and a Ph.D. in AI. My research focuses on computer vision and geometric deep learning, with peer-reviewed publications in leading venues and open-source contributions, including code merged into OpenCV.</p>
              <p>I previously co-founded XOIA Soft Dev., where I led the delivery of urban augmented reality solutions, and drove computer-vision initiatives at The Graffter and New Horizon Technologies spanning surveillance, robotics, and medical imaging products.</p>
              <p>I currently serve as a Senior Machine Learning Engineer at Qualcomm XR Labs Europe, designing production-grade SLAM and SfM systems that power the next generation of AR/VR headsets.</p>
            </div>
            <br/>
            <div id="publications-section">
              <h2>Publications</h2>
              <Publication name="Learning to Detect and Describe a Wireframe"
                           img={ImgWireframe}
                           authors_year="Ferre, I., Baumela, L., & Suárez, I. (2025)"
                           venue={<span className="pub-venue"><span className="pub-venue-name">IbPRIA 2025</span>. Accepted manuscript.</span>}
                           links={[
                             <a href="https://github.com/iferfra/wireframe-detector/blob/main/paper/Learning%20to%20Detect%20and%20Describe%20a%20Wireframe.pdf">Paper</a>,
                             <a href="https://github.com/iferfra/wireframe-detector">Code</a>,
                             <a href="https://huggingface.co/spaces/iferfra/wireframe-detector">🤗 Demo</a>,
                             <a href="https://doi.org/10.1007/978-3-031-99565-1_28">DOI</a>
                           ]}/>
              <Publication name="GlueStick: Robust Image Matching by Sticking Points and Lines Together"
                           img={ImgGlueStick}
                           authors_year={<span>Pautrat, R.<sup>*</sup>, Suárez, I.<sup>*</sup>, Yu, Y., Pollefeys, M., Larsson, V. (2023)</span>}
                           venue={<span className="pub-venue"><sup>*</sup>Equal contribution.&nbsp;<span className="pub-venue-name">ICCV 2023</span>.</span>}
                           links={[
                             <a href="https://arxiv.org/pdf/2304.02008.pdf">Paper</a>,
                             <a href="https://github.com/cvg/GlueStick">Code</a>,
                             <a href="/gluestick">Project page</a>,
                             <a href="https://colab.research.google.com/github/cvg/GlueStick/blob/main/gluestick_matching_demo.ipynb">Colab Demo</a>
                           ]}/>

              <Publication name="ELSED: Enhanced Line SEgment Drawing"
                           img={ImgELSED}
                           authors_year="Suárez, I., Buenaposada, J. M., & Baumela, L. (2022)"
                           venue={<span className="pub-venue"><span className="pub-venue-name">Pattern Recognition</span>, 127, 108619.</span>}
                           links={[
                             <a href="https://www.sciencedirect.com/science/article/pii/S0031320322001005/pdfft?md5=30d73760c68b632196efe2f0a1745a94&pid=1-s2.0-S0031320322001005-main.pdf">Paper</a>,
                             <a href="https://github.com/iago-suarez/ELSED">Code (C++)</a>,
                             <a href="https://doi.org/10.1016/j.patcog.2022.108619">DOI</a>,
                             <a href="/elsed">Project page</a>
                           ]}/>

              <Publication name="Revisiting Binary Local Image Description for Resource Limited Devices"
                           img={ImgRAL21}
                           authors_year="Suárez, I., Buenaposada, J. M., & Baumela, L. (2021)"
                           venue={<span className="pub-venue"><span className="pub-venue-name">IEEE Robotics and Automation Letters</span>, 6(4), 8317-8324.</span>}
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
                           venue={<span className="pub-venue"><span className="pub-venue-name">Pattern Recognition Letters</span>, 133, 366-372.</span>}
                           links={[
                             <a href="http://www.dia.fi.upm.es/~pcr/publications/PRL_2020_web_BEBLID.pdf">Paper</a>,
                             <a href="https://github.com/iago-suarez/BEBLID">Code (C++)</a>,
                             <a href="https://towardsdatascience.com/improving-your-image-matching-results-by-14-with-one-line-of-code-b72ae9ca2b73">Python OpenCV Tutorial</a>,
                             <a href="https://doi.org/10.1016/j.patrec.2020.04.005">DOI</a>
                           ]}/>
              <Publication name="BELID: Boosted efficient local image descriptor"
                           img={ImgBelid}
                           authors_year="Suárez, I., Sfeir, G., Buenaposada, J. M., & Baumela, L. (2019, July)"
                           venue={<span className="pub-venue"><span className="pub-venue-name">Iberian Conference on Pattern Recognition and Image Analysis (IbPRIA)</span> (pp. 449-460).</span>}
                           links={[
                             <a href="http://www.dia.fi.upm.es/~pcr/publications/ibpria2019.pdf">Paper</a>,
                             <a href="https://doi.org/10.1007/978-3-030-31332-6_39">DOI</a>
                           ]}/>
              <Publication name="FSG: A statistical approach to line detection via fast segments grouping"
                           img={ImgFSG}
                           authors_year="Suárez, I., Muñoz, E., Buenaposada, J. M., & Baumela, L. (2018, October)"
                           venue={<span className="pub-venue"><span className="pub-venue-name">International Conference on Intelligent Robots and Systems (IROS)</span> (pp. 97-102).</span>}
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
              <EducationTimeline items={educationHighlights}/>
              <div className="education-mobile-grid">
                {educationHighlights.map((item, idx) => <HighlightCard key={idx} {...item}/>)}
              </div>
            </div>
            <br/>

            <div id="teaching-section">
              <h2>Teaching</h2>
              <div className="highlight-grid">
                {teachingHighlights.map((item, idx) => <HighlightCard key={idx} {...item}/>)}
              </div>

            </div>
            <br/>

            <div id="presentations-section">
              <h2>Public Presentations</h2>
              <div className="highlight-grid">
                {presentationHighlights.map((item, idx) => <HighlightCard key={idx} {...item}/>)}
              </div>
            </div>
            <br/>

            <div id="awards-section">
              <h2>Honors and Awards</h2>
              <div className="highlight-grid awards-grid">
                {awardHighlights.map((item, idx) => <HighlightCard key={idx} {...item}/>)}
              </div>
            </div>
            <br/>

            <div id="projects-section">
              <h2>Other Projects</h2>
              <p className="section-subtitle">Selected collaborations that blend computer vision research with real-world impact.</p>
              <div className="highlight-grid">
                {projectHighlights.map((item, idx) => <HighlightCard key={idx} {...item}/>)}
              </div>
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
