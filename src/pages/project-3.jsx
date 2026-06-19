import ProjectHeader from '../components/ProjectHeader';
import Card from '../components/Card';

//IMAGES
import headerImage from './project-3/header.png';
import intro from './project-3/intro.webp';

import problem from './project-3/problem.webp';
import problem1 from './project-3/problem_1.webp';
import problem2 from './project-3/problem_2.webp';

import criteria1 from './project-3/criteria_1.webp';
import criteria2 from './project-3/criteria_2.webp';
import criteria3 from './project-3/criteria_3.webp';
import criteria4 from './project-3/criteria_4.webp';

import wireframe1 from './project-3/sketch_1.webp';
import wireframe2 from './project-3/sketch_2.webp';
import wireframe3 from './project-3/sketch_3.webp';
import wireframe4 from './project-3/sketch_4.webp';
import wireframe5 from './project-3/sketch_5.webp';
import wireframe6 from './project-3/sketch_6.webp';

import prototype1 from './project-3/prototype_1.webp';
import prototype2 from './project-3/prototype_2.webp';
import prototype3 from './project-3/prototype_3.webp';
import mobile1 from './project-3/mobile_1.webp';
import mobile2 from './project-3/mobile_2.webp';
import mobile3 from './project-3/mobile_3.webp';
import mobile4 from './project-3/mobile_4.webp';

// OTHER WORKS
import project1 from './project-1/thumb.webp';
import project2 from './project-2/thumb.jpg';

const cards = [
  {
    imageOne: project1,
    titleOne: 'Belinker Cloud Service',
    descOne: 'Improving the permission control for manufacturing document management system.',
    linkOne: '/project-1',
    imageTwo: project2,
    titleTwo: 'ai.sell',
    descTwo: 'An A.I. tool that provides better B2B sales experience for B2B sellers',
    linkTwo: '/project-2',
  },
]

function Project3() {
  return (
    <>
      <div className="nav-gap"></div>
      <ProjectHeader
        label="PNY Technologies"
        title="Redesigning the Resource Center page of PNY Technologies official website."
        date="May 2023 - June 2023"
        tags={['User Interface', 'Web Design']}
        meta={[
          { label: 'Role', value: 'UI / Web Designer' },
          { label: 'Members', value: ['Myself'] },
          { label: 'Company', value: 'PNY Technologies' },
          { label: 'Supervisor', value: 'Rebecca Magar' },
        ]}
        image={headerImage}
      />
    <main>
      
      <section>
        <h6 class="sub-title">Introduction</h6>
        <h2>The Resource Center is part of a website designed for PNY's partners.</h2>
        <p>pnypartners.com is primarily used by PNY's partners and PNY's Sales Team. PNY Technologies partners can visit this page and download necessary company-related materials.</p>
        <img src={intro} alt="Introduction" className="img-popup margin-md" />
      </section>

      {/* ============ BIG SECTION DIVIDER ============ */}
      <div class="divider-section"></div>
      <section>
        <h6 class="sub-title">Problem</h6>
        <h2>In the previous design, users had difficulty finding the materials.</h2>
        <img src={problem} alt="Problem" className="img-popup margin-md" />

        <div class="column  margin-md">
          <div className="column-box column-box-img-txt">
            <img src={problem1} alt="Problem 1" className="img-popup" />
            <p>When clicking a category, subcategories kept appearing below as tabs: an uncommon UI pattern for web interfaces.</p>
          </div>
          <div className="column-box column-box-img-txt">
            <img src={problem2} alt="Problem 2" className="img-popup" />
            <p>Visually, categories and files shared the same design, so users could not distinguish between them.</p>
          </div>
        </div>
        
      </section>

      {/* ============ BIG SECTION DIVIDER ============ */}
      <div class="divider-section"></div>
      <section>
        <h6 class="sub-title">Criteria</h6>
        <h2>A better UI was needed based on the existing file classification system.</h2>
        <p>It was important to provide a better experience within a familiar scope for internal users who were already using the existing service. The goal was to maintain the existing classification concept while improving the UI to deliver a better overall file browsing experience.</p>
      </section>

      <section>
        <img src={criteria1} alt="Criteria 1" className="img-popup margin-md" />
        <h6>Files should be viewable by Asset or Product type, as before.</h6>
        <ul>
          <li>Asset: classification by the type of the file itself - Web content, Presentation Decks, Press images, etc.</li>
          <li>Product: classification by which product the file is about.</li>
        </ul>
      </section>

      <section class="max-width-project">
        <div class="column">
          <div class="column-box">
            <img src={criteria2} alt="Criteria 2" className="img-popup margin-md" />
            <h6>Categories and files should be visually distinct.</h6>
            <p>Currently there was a confusion between categories and files in the UI.</p>
          </div>
          <div class="column-box">
            <img src={criteria3} alt="Criteria 3" className="img-popup margin-md" />
            <h6>Filter functionality can be added</h6>
            <p>We received confirmation from the development team that filter functionality can be implemented.</p>
          </div>
          <div class="column-box">
            <img src={criteria4} alt="Criteria 4" className="img-popup margin-md" />
            <h6>Mobile view support required</h6>
            <p>The previous design was not optimized for mobile: a responsive design was needed for usability.</p>
          </div>
        </div>
      </section>

      {/* ============ BIG SECTION DIVIDER ============ */}
      <div class="divider-section"></div>
      <section>
        <h6 className="sub-title">Wireframe</h6>
        <h2>Based on positive internal feedback, we decided on a sidebar design direction.</h2>
        <p>We tried several wireframe sketches and narrowed them down to two directions:</p>
        <ul>
          <li>Filter-only layout</li>
          <li>Sidebar + filter layout</li>
        </ul>
        <p>Based on positive feedback from the internal sales team, we chose the sidebar direction for the prototype.</p>
        
        <div class="column-wrapper margin-md">
          <div class="column">
            <div className="column-box">
              <img src={wireframe1} alt="Wireframe 1" className="img-popup" />
            </div>
            <div className="column-box">
              <img src={wireframe2} alt="Wireframe 2" className="img-popup" />
            </div>
          </div>
          <div class="column">
            <div className="column-box">
              <img src={wireframe3} alt="Wireframe 3" className="img-popup" />
            </div>
            <div className="column-box">
              <img src={wireframe4} alt="Wireframe 4" className="img-popup" />
            </div>
          </div>
          <div class="column">
            <div className="column-box">
              <img src={wireframe5} alt="Wireframe 5" className="img-popup" />
            </div>
            <div className="column-box">
              <img src={wireframe6} alt="Wireframe 6" className="img-popup" />
            </div>
          </div>
        </div>  
      </section>


      {/* ============ BIG SECTION DIVIDER ============ */}
      <div class="divider-section"></div>
      <section>
        <h6 className="sub-title">Prototype</h6>
        <h2>Final Prototype improved user experience.</h2>
      </section>

      <section>
        <h5>The design clearly separates categories and products.</h5>
        <p>Categories are all processed through filters or sidebars, making the distinction between categories and products clear.</p>
        <img src={prototype1} alt="Prototype 1" className="img-popup margin-md" />
        <img src={prototype2} alt="Prototype 2" className="img-popup margin-md" />
      </section>

      <section>
        <h5>Files can be viewed by Asset and Product type.</h5>
        <img src={prototype3} alt="Prototype 3" className="img-popup margin-md" />
      </section>

      <section>
        <h5>Users can access this page through mobile as well.</h5>
        <div className="column">
          <div className="column-box">
            <img src={mobile1} alt="Mobile 1" className="img-popup margin-md" />
          </div>
          <div className="column-box">
            <img src={mobile2} alt="Mobile 1" className="img-popup margin-md" />
          </div>
          <div className="column-box">
            <img src={mobile3} alt="Mobile 1" className="img-popup margin-md" />
          </div>
          <div className="column-box">
            <img src={mobile4} alt="Mobile 1" className="img-popup margin-md" />
          </div>
        </div>

      </section>

       <section>
        <h2 className="center card-title">Other Works</h2>
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </section>

    </main>
    </>
  );
}

export default Project3;
