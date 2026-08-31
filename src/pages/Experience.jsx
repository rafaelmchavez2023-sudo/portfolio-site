export default function Experience() {
  return (
    <main>

      <div className="wrap">
        <div className="hero" style={{ paddingBottom: 4 }}>
          <h1 className="page-title">Experience</h1>
          <p className="dek">Work Experience, Research, Publications, Projects, Leadership, and Organizations.</p>
        </div>
      </div>

      <div className="section-band sticky">
        <div className="wrap"><p className="label">Work Experience</p></div>
      </div>
      <div className="wrap">
        <section style={{ paddingTop: 24 }}>

          <div className="project">
            <div className="project-head">
              <h3>Autonomy and Controls Engineering Intern</h3>
              <span className="when">May 2026 &ndash; Present</span>
            </div>
            <div className="org-line">Sea Machines Robotics</div>
            <p>Testing and evaluating radar sensor hardware to ensure reliable performance for autonomous vessel deployments, and building a streamlined data ingestion application to support live mission data capture for downstream analysis. Developing a vessel-agnostic dynamic model parameter estimation tool that achieves sub-5% average accuracy in simulation, supporting collision avoidance, fuel optimization, and trajectory planning. Applying digital signal filtering to improve state estimation fidelity, and validating results against motion model simulations with injected Markov-Gauss sensor noise and physical wave disturbances.</p>
            <div className="tags"><span>Signal Filtering</span><span>Dynamic Modeling</span><span>Radar</span><span>Simulation</span></div>
          </div>

          <div className="project">
            <div className="project-head">
              <h3>Process Engineering Intern</h3>
              <span className="when">May 2025 &ndash; Aug. 2025</span>
            </div>
            <div className="org-line">Amazon Robotics</div>
            <p>Developed a modular Shadow Board fabrication, infrastructure, and procurement system to promote 5S principles, building a tooling database of over 150 discrete tools and reducing requisite labor by 94%. Conducted cycle time studies and developed SOPs for material line replenishment and warehouse re-organization, cutting part delivery time 81%, increasing discrete materials delivered per cycle 18x, and reducing station headcount 60%. Drove an 85% increase in technician task efficiency through Pareto analysis, and reduced manufacturing downtime and headcount by 22% through root cause analysis.</p>
            <div className="tags"><span>Process Engineering</span><span>SOP Writing</span><span>Six Sigma</span><span>5S</span></div>
          </div>

        </section>
      </div>

      <div className="section-band sticky">
        <div className="wrap"><p className="label">Research Experience</p></div>
      </div>
      <div className="wrap">
        <section style={{ paddingTop: 24 }}>

          <div className="project">
            <div className="project-head">
              <h3>Project Lead and Research Assistant</h3>
              <span className="when">Dec. 2025 &ndash; Present</span>
            </div>
            <div className="org-line">Institute for Robotics and Intelligent Machines, Georgia Tech</div>
            <p>Leading a project deploying OpenCV to detect, locate, and manipulate objects with UR5 robot arms, and training an RF-DETR detection model to improve end-effector relative object manipulation and orientation estimation. Built a $50,000 cost-saving machine vision part inspection prototype to compete in the TE Connectivity AI Cup. Research accepted for publication in the IEOM 2026 World Congress in Irvine, California.</p>
            <div className="tags"><span>OpenCV</span><span>RF-DETR</span><span>UR5</span><span>Project Management</span><span>Computer Vision</span><span>Model Training</span></div>
          </div>

          <div className="project">
            <div className="project-head">
              <h3>Research Assistant</h3>
              <span className="when">Aug. 2024 &ndash; May 2025</span>
            </div>
            <div className="org-line">Exoskeleton &amp; Prosthetic Intelligent Controls (EPIC) Lab, Georgia Tech</div>
            <p>Engineered hardware for a hip exoskeleton assistive device targeting stroke and cerebral palsy patient rehabilitation, analyzing biomechanics via VICON motion capture and simulation software to inform design decisions. Cut hardware housing fixture mass 55% and volume 32% while optimizing cable routing and component cooling, designing parts in SolidWorks and manufacturing them via 3D printing and pre-impregnated carbon fiber layering.</p>
            <div className="tags"><span>SolidWorks</span><span>Motion Capture</span><span>Carbon Fiber Manufacturing</span><span>3D Printing</span></div>
          </div>

          <div className="project">
            <div className="project-head">
              <h3>Research Assistant</h3>
              <span className="when">Jan. 2024 &ndash; May 2024</span>
            </div>
            <div className="org-line">Chip Scale Power &amp; Energy Project, Georgia Tech Research Institute</div>
            <p>Fabricated electrochemical double layer supercapacitor chips and electrodes using carbon nanotubes embedded within a silicon wafer, functionalizing them through nanomaterial synthesis, cleanroom microfabrication, and atomic layer deposition. Hermetically packaged chip-scale devices as viable prototypes for mission architecture, and characterized electrodes to analyze the process efficiency of atomic layer deposition and plasma-enhanced chemical vapor deposition.</p>
            <div className="tags"><span>Microfabrication</span><span>Atomic Layer Deposition</span><span>Materials</span><span>Cleanroom Fabrication</span></div>
          </div>

        </section>
      </div>

      <div className="section-band sticky">
        <div className="wrap"><p className="label">Publications</p></div>
      </div>
      <div className="wrap">
        <section style={{ paddingTop: 24 }}>
          <p>R. Chavez, &ldquo;Edge AI Vision Model for Catheter Shaft Inspection,&rdquo; <em>IEOM 2026 World Congress</em>, Irvine, CA &mdash; accepted for publication, Oct. 2026.</p>
        </section>
      </div>

      <div className="section-band sticky">
        <div className="wrap"><p className="label">Projects</p></div>
      </div>
      <div className="wrap">
        <section style={{ paddingTop: 24 }}>

          <div className="project">
            <div className="project-head">
              <h3>Autonomous Chess-Playing Robot</h3>
              <span className="when">Aug. 2026 &ndash; Present</span>
            </div>
            <div className="org-line">Personal Project</div>
            <p>Designing and building a chess-playing robot arm entirely from scratch, including custom 3D-printed linkages, hand-selected motors, sensors, and microcontrollers (Arduino, Raspberry Pi), and a computer vision pipeline that reads the board and piece positions in real time. Move selection runs through a Stockfish API, translated into physical arm motion through a control stack built from the ground up.</p>
            <div className="tags"><span>Computer Vision</span><span>Arduino</span><span>Raspberry Pi</span><span>3D Printing</span><span>Stockfish API</span></div>
            <div className="links"><a href="https://github.com/rafaelmchavez2023-sudo/Chess_Playing_Robot" target="_blank" rel="noopener">View repository &amp; build log</a></div>
          </div>

          <div className="project">
            <div className="project-head">
              <h3>Mobile Robot Navigation</h3>
              <span className="when">Jan. 2026 &ndash; May 2026</span>
            </div>
            <div className="org-line">Robotics Coursework, Georgia Institute of Technology</div>
            <p>Built forward and inverse kinematic models in MATLAB for serial and parallel manipulators, optimizing trajectory planning and closed-loop end-effector control. Programmed TurtleBot3 autonomous navigation in ROS, fusing LiDAR, IMU, and odometry data for obstacle avoidance and path following, and trained CNNs for robotic object classification, tuning architectures and hyperparameters to maximize accuracy.</p>
            <div className="tags"><span>MATLAB</span><span>ROS</span><span>TurtleBot3</span><span>CNNs</span></div>
          </div>

        </section>
      </div>

      <div className="section-band sticky">
        <div className="wrap"><p className="label">Leadership</p></div>
      </div>
      <div className="wrap">
        <section style={{ paddingTop: 24, paddingBottom: 40 }}>

          <div className="project">
            <div className="project-head">
              <h3>Director of Corporate Relations</h3>
              <span className="when">Jul. 2025 &ndash; May 2026</span>
            </div>
            <div className="org-line">Pi Tau Sigma Mechanical Engineering Honor Society, Nu Chapter</div>
            <p>Served on the executive board of the Georgia Tech chapter, organizing recruiting events and fostering professional relationships between recruiters and prospective students.</p>
          </div>

          <div className="project">
            <div className="project-head">
              <h3>Student Advisory Board Member</h3>
              <span className="when">Mar. 2025 &ndash; May 2026</span>
            </div>
            <div className="org-line">Woodruff School of Mechanical Engineering, Georgia Tech</div>
            <p>Served as a student representative to the Woodruff School, advising college leadership on ways to improve student life and address issues pertinent to the student body.</p>
          </div>

          <div className="project">
            <div className="project-head">
              <h3>TA Mentor &amp; Undergraduate Teaching Assistant</h3>
              <span className="when">Jan. 2024 &ndash; Dec. 2024</span>
            </div>
            <div className="org-line">GT Tutoring and Academic Support Center</div>
            <p>Organized orientation for incoming Teaching Assistants and facilitated biweekly mentorship check-ins for the TA team, while facilitating active learning and collaboration for 50+ students in Statics/Mechanics lectures, office hours, and recitation sessions, and collaborating with faculty stakeholders to create student-centered curriculum resources.</p>
          </div>

        </section>
      </div>

      <div className="section-band sticky">
        <div className="wrap"><p className="label">Organizations</p></div>
      </div>
      <div className="wrap">
        <section style={{ paddingTop: 24, paddingBottom: 40 }}>

          <div className="project">
            <div className="project-head">
              <h3>Member | RoboJackets | GT Robotics Team</h3>
              <span className="when">Sept. 2026 &ndash; Present</span>
            </div>
          </div>

          <div className="project">
            <div className="project-head">
              <h3>Member | SHPE</h3>
              <span className="when">Aug. 2023 &ndash; Present</span>
            </div>
          </div>

          <div className="project">
            <div className="project-head">
              <h3>Member | ASME</h3>
              <span className="when">Aug. 2023 &ndash; Present</span>
            </div>
          </div>

          <div className="project">
            <div className="project-head">
              <h3>Member | IEOM</h3>
              <span className="when">June 2026 &ndash; Present</span>
            </div>
          </div>

          <div className="project">
            <div className="project-head">
              <h3>Member | IEEE</h3>
              <span className="when">Aug. 2023 &ndash; Present</span>
            </div>
          </div>

        </section>
      </div>

    </main>
  );
}
