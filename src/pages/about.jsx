import profile from './about/profile.png';
import { IconDownload } from '../components/icons';

function About() {
  return (
    <main>
      <div class="nav-gap"></div>
      
      <div class="divider-title">
        <h2 class="center">About</h2>
      </div>

      {/* PROFILE */}
      <section> 
        <img src={profile} alt="A profile of myself, standing next to a plant."></img>
        <h5>Self Introduction</h5>
        <p>
          After studying Interaction Design in the United States and working as a UX/UI designer, I am seeking more opportunities to solve UX problems. I believe that providing users with a framework for experience is the essence of UX/UI.
        </p>
      </section>
      
      {/* EDUCATION */}
      <section>

        <h5 class="section-title">Education</h5>
        
        <div class="column">
          <div class="column-box">
            <h6>School of Visual Arts</h6>
            <p class="grey-dark-text">New York, United States</p>
          </div>
          <ul class="column-box">
            <li>MFA Interaction Design</li>
            <li>Sep 2022 - May 2024</li>
          </ul>
        </div>

        <div class="divider-space"></div> {/* DIVIDER */}

        <div class="column">
          <div class="column-box">
            <h6>Rhode Island School of Design</h6>
            <p class="grey-dark-text">Rhode Island United States</p>
          </div>
          <ul class="column-box">
            <li>BFA Graphic Design</li>
            <li>Sep 2018 - May 2022</li>
          </ul>
        </div>

        <div class="divider-space"></div> {/* DIVIDER */}

        <div class="column">
          <div class="column-box">
            <h6>Korea University</h6>
            <p class="grey-dark-text">Seoul, South Korea</p>
          </div>
          <ul class="column-box">
            <li>Art & Design Department</li>
            <li>Mar 2015 - Dec 2016</li>
          </ul>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section>
        {/* WORK 1 */}
        <h5 class="section-title">Work Experience</h5>
        <h6>UX/UI Designer <span class="blue-text">@ Belinker</span></h6>
        <ul class="grey-dark-text">
          <li>Dec 2024 - Feb 2026</li>
          <li>Seoul, South Korea</li>
        </ul>
        <p>
          I was responsible for the UX/UI of the Belinker Cloud Service, continuously developing new features and corresponding design updates. Our service helped small and medium-sized manufacturing companies in Korea manage their drawing files in the most optimal way. Since joining, I have communicated with our users to analyze their needs, followed by design planning and UX processes. This process helped me contribute to the establishment and improvement of the overall UI and design system from the early stages of the service. Additionally, I have continuously improved the planning workflow itself for efficient collaboration with front-end and back-end developers.
        </p>

        <div class="divider-line"></div> {/* DIVIDER */}
        
        {/* WORK 2 */}
        <h6>Web Design Intern <span class="blue-text">@ PNY Technologies</span></h6>
        <ul class="grey-dark-text">
          <li>May 2023 - Aug 2023</li>
          <li>New Jersey, United States</li>
        </ul>
        <p>
          I worked on various pages of the official website of PNY Technologies, including the resource archiving page: A page for helping customers and partners easily access the information they need. By constantly reflecting feedbacks and discussing with my supervisor, I was able to complete several designs that were implemented on the actual website.
        </p>

        <div class="divider-line"></div> {/* DIVIDER */}

        {/* WORK 3 */}
        <h6>UI Designer <span class="blue-text">@ Sir.Loin</span></h6>
        <ul class="grey-dark-text">
          <li>Mar 2022 - Apr, 2022</li>
          <li>Seoul, South Korea</li>
        </ul>
        <p>
          I participated in GUI design as part of the UX team for an in-house app selling Hanwoo beef. I collaborated with the branding team to work on the magazine section and discussed the feasibility of the designs with the development team within the timeline.
        </p>

        <div class="divider-line"></div> {/* DIVIDER */}
        
        {/* WORK 4 */}
        <h6>GUI Design Intern <span class="blue-text">@ pxd</span></h6>
        <p></p>
        <ul class="grey-dark-text">
          <li>Jun 2019 - Aug 2019</li>
          <li>Seoul, South Korea</li>
        </ul>
        <p>
            I supported the GUI team and contributed to UI/UX design projects for pxd's clients. Through design research, GUI improvements, and icon work for the app's system configuration, I was able to learn the fundamentals and theories of UX/UI.
        </p>
      </section>
      
      {/* AWARDS */}
      <section>
        <h5 class="section-title">Awards</h5>
        <div class="column">
          <div class="column-box">
            <h6>Paula Rhodes Award 2024</h6>
            <p class="grey-dark-text">School of Visual Arts</p>
          </div>
          <div class="column-box">
            <h6>Interaction Awards Shortlist 2023</h6>
            <p class="grey-dark-text">Interaction Design Association</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h5 class="section-title">Skills</h5>
        <h6>Design</h6>
        <p>
          User Experiennce, User Interface, Prototype, Design System, Figma, Adobe Creative Suite, HTML/CSS
        </p>
        <div class="divider-space"></div> {/* DIVIDER */}
        <h6>Language</h6>
        <p>
          Fluent English, Native Korean
        </p>
      </section>

      <section class="button-center-section">
        <button className="btn-secondary btn-size-lg" onClick={() => window.open(process.env.PUBLIC_URL + '/resume_jueun_jeon.pdf', '_blank')}>
          Download Resume
          <IconDownload />
        </button>
      </section>

    </main>
  );
}

export default About;
