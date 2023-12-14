
import './App.css';
import f3logo from './images/f3-logo-light.png';
import map from './images/map.png';
import f3vicenza from './images/f3-vicenza.png';
import slacklogo from './images/slack.png';
import walogo from './images/whatsapp-icon.png';
import fblogo from './images/fb-icon.png';


function App() {
  return (
    <div class="bg-dark text-white">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand fs-2" href="#">
            <img src={f3logo} alt="F3 Icon" width="40" height="40" class="d-inline-block align-text-top"/>
            Italy - Vicenza
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOptions" aria-controls="navbarOptions" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarOptions">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">HOME</a>
              <a class="nav-link" href="#location">LOCATION</a>
              <a class="nav-link" href="#about">ABOUT F3</a>
              <a class="nav-link" href="https://forms.gle/A7uVrbJTn3snvmZW9" target="_blank">CONTACT US</a>
              <li class="nav-item">
                <a class="nav-link" href="https://f3nation.com/" target="_blank">F3 NATION</a>
            </li>
            </div>
          </div>
        </div>
    </nav>

    <div id="runners" class="container mt-5 flex-column d-flex align-items-center justify-content-center">
        <p class="header text-center mt-5">Come Out to F3 Vicenza!</p>
        <p class="subheader text-center mt-4">Fitness Fellowship Faith</p>
    </div>

    <div id="location" class="container mt-5">
        <p class="subheader text-center mb-3">'The Garrison' AO</p>
        <img src={map} class="img-fluid mx-auto d-block"/>
        <p class="textHighlight text-center h4 mt-3">Bootcamp Workouts</p>
        <p class="text text-center">Every Wednesday @ 0530</p>
        <p class="text text-center mt-2">Meet at the South East Corner of the Ederle Track on Caserma Ederle</p>
        <p class="text text-center mt-2">Look for the Shovel Flag, and you'll find us!</p>

        <div class="d-grid gap-2 col-6 mx-auto">
          <a class="btn btn-outline-light mt-4 fs-3" role="button" href="https://forms.gle/A7uVrbJTn3snvmZW9" target="_blank">
            Request more info here & join us in the Gloom!
          </a>
        </div>
    </div>
    
    <div id="about" class="container mt-5">
      <p class="subheader text-center mb-4">The Core Principles of F3</p>
      <p class="h5 text-center">The Mission of F3 is to plant, grow, and serve small workout groups for the 
          invigoration of male community leadership. </p>
      <p class="h4 my-4 text-center it">"Leave no man behind, but leave no man where you found him."</p>
      <div class="row justify-content-center">
        <div class="col-auto">
          <div class="row justify-content-center">
            <div class="col">
              <div class="row justify-content-center text-center"><i class="fa-solid fa-dollar-sign icon"></i></div>
              <div class="row text-center mt-3"><p class="h5">Always Free</p></div>
            </div>
            <div class="col">
              <div class="row justify-content-center text-center"><i class="fa-solid fa-people-group icon"></i></div>
              <div class="row text-center mt-3"><p class="h5">Open to All Men</p></div>
            </div>
            <div class="col">
              <div class="row justify-content-center text-center"><i class="fa-solid fa-cloud-sun-rain icon"></i></div>
              <div class="row text-center mt-3"><p class="h5">Held Outdoors</p></div>
            </div>
            <div class="col">
              <div class="row justify-content-center text-center"><i class="fa-solid fa-street-view icon"></i></div>
              <div class="row text-center mt-3"><p class="h5">Peer Led</p></div>
            </div>
            <div class="col">
              <div class="row justify-content-center text-center"><i class="fa-regular fa-life-ring icon"></i></div>
              <div class="row text-center mt-3"><p class="h5">Circle of Trust</p></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-10">
          <p class="h5 text-center">There is no physical fitness requirement for F3, so don't tell yourself you need to get in shape first!
            Come as you are, all shapes and sizes welcome. You'll grow stronger and faster in time. It's never easy,
            but it's always worth it.
          </p>
        </div>
      </div>

      <div class="row justify-content-center my-4">
        <div class="col-6 text-center">
          <iframe width="600" height="420" src="https://www.youtube.com/embed/rGo03Y1ZZ3I"></iframe>
        </div>
      </div>
      
    </div>

    <div id="footer" class="mt-5">
      <div class="container">
        <div class="row justify-content-evenly">
          <div class="col-3 my-5">
            <p class="h5 mb-3">F3 Italy</p>
            <p class="mb-1">Vicenza, Italy</p>
            <p>info@f3italy.com</p>
          </div>
          <div class="col-3 my-5">
            <p class="h5 mb-3">Links</p>
            <p class="mb-2"><a class="ft-link" href="#">Home</a></p>
            <p class="mb-2"><a class="ft-link" href="#location">Workout Location</a></p>
            <p class="mb-2"><a class="ft-link" href="#about">F3 Nation Core Principles</a></p>
            <p class="mb-2"><a class="ft-link" href="https://forms.gle/A7uVrbJTn3snvmZW9" target="_blank">Contact Us via Google Form</a></p>
            <p class="mb-2"><a class="ft-link" href="https://f3nation.com/" target="_blank">Learn more about F3 Nation</a></p>
          </div>
          <div class="col-4 my-5">
            <a href="https://f3nation.com/" target="_blank"><img class="img-fluid rounded-circle ft-img me-3 mb-2" src={f3logo}/></a>
            <a href="mailto:info@f3italy.com"><img class="img-fluid rounded-circle ft-img me-3 mb-2" src={f3vicenza}/></a>
            <a href="https://f3nation.slack.com/team/U040NL0L0G5"><img class="img-fluid rounded-circle ft-img me-3 mb-2" src={slacklogo}/></a>
            <a href="https://wa.me/12102864205"><img class="img-fluid rounded-circle ft-img me-3 mb-2" src={walogo}/></a>
            <a href="https://www.facebook.com/profile.php?id=61551343644693"><img class="img-fluid rounded-circle ft-img me-3 mb-2" src={fblogo}/></a>
          </div> 
        </div> 
      </div>
    </div>
    </div>
  );
}

export default App;
