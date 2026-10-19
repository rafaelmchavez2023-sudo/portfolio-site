import { Link } from 'react-router-dom';
import BlurText from '../components/BlurText';
import ArmDiagram from '../components/ArmDiagram';

export default function Home() {
  return (
    <main>

      <div className="wrap">
        <div className="hero-split">
          <div className="hero-photo">
            <img src="/assets/headshot.jpg" alt="Rafael M. Chavez" />
          </div>
          <div className="hero-text">
            <BlurText
              as="h1"
              text="Mechanical Engineering Student at Georgia Tech, passionate about robotics, perception and control systems."
              animateBy="words"
              direction="top"
              delay={35}
              stepDuration={0.3}
              className="hero-statement"
            />
            <p className="currently">Currently an Autonomy and Controls Engineering Intern at Sea Machines Robotics and Project Leader and Research Assistant at GT's Institute for Robotics and Intelligent Machines.</p>
          </div>
        </div>

        <ArmDiagram />
      </div>

      <div className="section-band">
        <div className="wrap"><p className="label">About</p></div>
      </div>
      <div className="wrap">
        <section style={{ paddingTop: 24 }}>
          <p><strong>Rafael Chavez</strong> is a B.S. Mechanical Engineering student at Georgia Tech, minoring in Applications of Artificial Intelligence and Machine Learning, graduating in May 2027. He then plans to pursue his Master's degree, with a specialization in robotics. His interests lie at the intersection of robotics, computer vision, and control systems. His industry experience consists of internships at Amazon Robotics as a Process Engineer, and Sea Machines Robotics as an Autonomy and Controls Engineer. His research has spanned mechanical and industrial engineering domains.</p>
          <p>Some recent milestones in my career: publishing a research paper at the 2026 Industrial Engineering and Operations Management World Congress in Irvine, California, where it earned 1st Place in the Best Undergraduate Research Paper Award Track Sponsored by Siemens. The research came from a project that I lead through the Georgia Tech Institute for Robotics and Intelligent Machines in an industry partnership with TE Connectivity. I also founded and chartered the Industrial Engineering and Operations Management Society GT Chapter, where I serve as President. Additionally, I am currently interning as an Autonomy and Controls Engineering Intern at Sea Machines Robotics, building a vessel-agnostic parameter estimation tool to allow autonomous vessels to reason about their own dynamics in real time.</p>
          <p>Outside of coursework and research, I'm building RoBobby Fischer, an autonomous chess-playing robot, from scratch, including an arm, vision system, and control stack, documented as I go.</p>
        </section>
      </div>

      <div className="section-band">
        <div className="wrap"><p className="label">Information</p></div>
      </div>
      <div className="wrap">
        <section style={{ paddingTop: 24, paddingBottom: 40 }}>
          <ul className="linklist">
            <li><span className="k">R&eacute;sum&eacute;</span><span className="v"><Link to="/resume">View &amp; download</Link></span></li>
            <li><span className="k">Selected work</span><span className="v"><Link to="/experience">See experience</Link></span></li>
            <li><span className="k">GitHub</span><span className="v"><a href="https://github.com/rafaelmchavez2023-sudo" target="_blank" rel="noopener">rafaelmchavez2023-sudo</a></span></li>
            <li><span className="k">Get in touch</span><span className="v"><Link to="/contact">Contact</Link></span></li>
          </ul>
        </section>
      </div>

    </main>
  );
}
