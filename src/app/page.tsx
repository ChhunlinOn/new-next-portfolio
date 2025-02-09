// import ParticlesBackground from "./component/ParticlesBackground";
import "./globals.css"; // Make sure the path is correct
const intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, neque nec aliquet commodo, libero lectus scelerisque metus, vel tincidunt orci turpis ut justo. Praesent volutpat, elit at feugiat tincidunt, nisi justo varius erat, nec pellentesque tortor libero sed dolor. Phasellus fermentum metus id mi venenatis, eu suscipit ligula tempus.";

export default function Home() {
  return (
    <div id="text">
      {/* <ParticlesBackground /> */}
      <div id="container-home" className="block">
        <div id="Profile">
          <img src="null" alt="" />
        </div>
        <div id="intro">
          <h1>Hi! I'm <span className="text-ani" style={{color:"yellow"}}>Chhunlin</span></h1>
          <p>I'm a Full Stack Dev</p>
          <div className="button">
            <button>Hire Me</button>
            <button>My Project</button>
          </div>
        </div>
      </div>

      <div className="block1" id="container-about">
        <h1><span>About</span> Me</h1>
        <p><span>Name:</span> On Chhunlin</p>
        <p><span>Date of birth:</span>26, September, 2007</p>
        <p><span>Adress:</span>Phnom Penh city, Cambodia.</p>
        <p><span>Email:</span>chhunlin.on@institute.pse.ngo</p>
        <p><span>Phone:</span>+855 979033023</p>
        <p><span>20</span> Complete projects</p>
        <a href="path/to/yourfile.pdf" download>
         <button>Download my CV</button>
        </a>
      </div>
    </div>
  );
}
