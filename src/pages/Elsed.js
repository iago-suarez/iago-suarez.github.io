import React from 'react'
import ElsedHeader from '../images/ElsedHeader.jpg'
import * as Icon from 'react-bootstrap-icons'

const Elsed = () => {
  return (
    <div className="App">
      <br/>
      <div className="container">
        <div className="mx-auto text-center">
          <h2>ELSED: Enhanced Line SEgment Drawing</h2>
          <h5><a href="https://doi.org/10.1016/j.patcog.2022.108619"
                 className="link-dark" target="_blank" rel="noreferrer">Pattern Recognition</a></h5>
        </div>
        <div className="row text-center">
          <div className="col-sm">
            <u><a href="/" className="text-dark link-dark" target="_blank" rel="noreferrer">
              Iago Suárez
            </a></u><br/>
            Universidad Politécnica de Madrid<br/>
            The Graffter S.L.
          </div>
          <div className="col-sm">
            <u><a href="https://jmbuena.github.io/" className="text-dark link-dark" target="_blank" rel="noreferrer">
              José Miguel Buenaposada
            </a></u><br/>
            Universidad Rey Juan Carlos
          </div>
          <div className="col-sm">
            <u><a href="http://www.dia.fi.upm.es/~lbaumela/" className="text-dark link-dark" target="_blank"
                  rel="noreferrer">
              Luis Baumela
            </a></u>
            <br/>Universidad Politécnica de Madrid
          </div>
        </div>
        <br/>

        <div className="row text-center">
          <div className="col-4">
            <a href="https://www.sciencedirect.com/science/article/pii/S0031320322001005/pdfft?md5=30d73760c68b632196efe2f0a1745a94&pid=1-s2.0-S0031320322001005-main.pdf" target="_blank" rel="noreferrer">
              <div>Paper</div>
              <div className="medium-icon social-icon"><Icon.Book/></div>
            </a>
          </div>
          <div className="col-4">
            <a href="https://github.com/iago-suarez/ELSED" target="_blank" rel="noreferrer">
              <div>Source Code (C++)</div>
              <div className="medium-icon social-icon"><Icon.Github/></div>
            </a>

          </div>
          <div className="col-4">
            <a href="https://colab.research.google.com/github/iago-suarez/ELSED/blob/main/Python_ELSED.ipynb"
               target="_blank" rel="noreferrer">
              <div>Colab Python demo</div>
              <div className="medium-icon social-icon"><Icon.Code/></div>
            </a>
          </div>
        </div>
        <br/>

        <div>
          <img className="w-100" src={ElsedHeader}/>
        </div>
        <br/>
        <br/>

        <div>
          <h3>Online Demo</h3>
          <p>Since ELSED is extremely efficient, it can run in your browser effortlessly using Web Assembly.
            {/*More info in <a href="TODO" target="_blank" rel="noreferrer">this post</a>.*/}
          </p>
          <div className="blue-shadow card p-3 mb-5 bg-white rounded">
            <iframe className="mw-100" width="110%" height="520" src="/elsed_js/index.html"
                    title="ELSED Online demo" frameBorder="0"/>
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
              in <span className="color-orange">orange</span>.
            </li>
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
              algorithm that connects gradient-aligned pixels in presence of small discontinuities. The proposed
              algorithm
              not only runs in devices with very low end hardware, but may also be parametrized to foster the detection
              of
              short or longer segments, depending on the task at hand. We also introduce new metrics to evaluate the
              accuracy and repeatability of segment detectors. In our experiments with different public benchmarks we
              prove that our method accounts the highest repeatability and it is the most efficient in the literature.
              In the experiments we quantify the accuracy traded for such gain.
            </p>
          </div>
        </div>
        <br/>
        <div>
          <h4>Citation</h4>
          <div className="card">
            <div className="card-body code-like-font">
              {'@article{suarez2022elsed,'} <br/>
              &nbsp; {'  title={ELSED: Enhanced Line SEgment Drawing},'} <br/>
              &nbsp; {'  author={Su{\\\'a}rez, Iago and Buenaposada, Jos{\\\'e} M and Baumela, Luis},'} <br/>
              &nbsp; {'  journal={Pattern Recognition},\n'} <br/>
              &nbsp; {'  volume={127},\n'} <br/>
              &nbsp; {'  pages={108619},\n'} <br/>
              &nbsp; {'  year={2022}\n'} <br/>
              &nbsp; {'  issn={0031-3203},\n'} <br/>
              &nbsp; {'  doi={https://doi.org/10.1016/j.patcog.2022.108619},\n'} <br/>
              &nbsp; {'  url={https://www.sciencedirect.com/science/article/pii/S0031320322001005}\n'} <br/>
              {'}'}
            </div>
          </div>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default Elsed