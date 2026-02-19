import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header" style="cursor:pointer;">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/" style="text-decoration: none;">click ici</a>
        </div>


        <div class="topnav">
          <a href="#" class="fa fa-facebook" alt="icone facebook"></a>
          <a href="#" class="fa fa-twitter" alt="icone twitter"></a>
          <a href="#" class="fa fa-google" alt="icone google"></a>
          <a href="#" class="fa fa-linkedin" alt="icone linkedin"></a>
          <a href="#" class="fa fa-youtube" alt="icone youtube"></a>
          <a href="#" class="fa fa-instagram" alt="icone instagram"></a>
          <a href="#" class="fa fa-pinterest" alt="icone pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost" alt="icone snapchat"></a>
          <a href="#" class="fa fa-skype" alt="icone skype"></a>
          <a href="#" class="fa fa-android" alt="icone android"></a>
          <a href="#" class="fa fa-dribbble" alt="icone dribbble"></a>
          <a href="#" class="fa fa-vimeo" alt="icone vimeo"></a>
          <a href="#" class="fa fa-tumblr" alt="icone tumblr"></a>
          <a href="#" class="fa fa-vine" alt="icone vine"></a>
          <a href="#" class="fa fa-foursquare" alt="icone foursquare"></a>
          <a href="#" class="fa fa-stumbleupon" alt="icone stumbleupon"></a>
          <a href="#" class="fa fa-flickr" alt="icone flickr"></a>
          <a href="#" class="fa fa-yahoo" alt="icone yahoo"></a>
          <a href="#" class="fa fa-reddit" alt="icone reddit"></a>
          <a href="#" class="fa fa-rss" alt="icone rss"></a>
        </div>

        <div class="row">
          <div class="leftcolumn">
            <div class="card">
              <h1>Nom étudiant</h1>
              <h5>description</h5>
              <div id="quiz">
                <h2>A TOI DE JOUER</h2>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card">
              <img src="/question.png" width="500" height="600" alt="point d'interrogation">
            </div>
        </div>

        <div class="footer">
          <h2>@2024</h2>
        </div>
`

initQuizz();