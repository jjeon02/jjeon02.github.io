import WorkCard from '../components/WorkCard';
// import Card from '../components/Card';
import arrow from './home/arrow.png';

import project1 from './project-1/thumb.webp';
import project2 from './project-2/thumb.jpg';
import project3 from './project-3/thumb-pny.jpg';

import { IconDownload } from '../components/icons';

const projects = [
  {
    title: 'Belinker Cloud Service',
    from: 'From Work',
    tags: ['UX/UI'],
    description: 'Improving the permission control for manufacturing document management system.',
    image: project1,
    link: '/project-1',
  },
  {
    title: 'ai.sell',
    from: 'School Project',
    tags: ['UX/UI'],
    description: 'An A.I. tool that provides better B2B sales experience for B2B sellers',
    image: project2,
    link: '/project-2',
  },
  {
    title: 'PNY Website',
    from: 'From Work',
    tags: ['Web Design'],
    description: 'Designing official website for PNY Technologies.',
    image: project3,
    link: '/project-3',
  },
];

// const cards = [
//   {
//     imageOne: project1,
//     titleOne: 'Illustration',
//     descOne: 'Personal illustrations including digital and traditional arts.',
//     linkOne: 'https://jueunjeon.work/art/',
//     imageTwo: project2,
//     titleTwo: 'Behance',
//     descTwo: 'Mainly focused on graphic design works from school projects.',
//     linkTwo: 'https://www.behance.net/jueunjeon',
//   },
// ]

function Home() {
  return (
    <main>
      <div className="nav-gap"></div>
      <header className="home-header">
        <div className="home-title-header">
          <div className="home-title-content">
            <div className="text-wrapper-xs">
              <h2>Hi! This is Jueun Jeon and I'm a UX/UI designer</h2>
              <p>I believe design is about thinking beyond what we <span className="home-grey-text">don't see</span>.</p>
            </div>
            <button className="btn-secondary btn-size-lg" onClick={() => window.open(process.env.PUBLIC_URL + '/resume_jueun-jeon.pdf', '_blank')}>
              Download Resume
              <IconDownload />
            </button>
          </div>
            <div className="home-title-img-wrapper">
              <img src={arrow} alt="cursor symbol" class="home-cursor"/>
            </div>
        </div>
      </header>
      <section>
        <h2 className="work-section-title">Featured Works</h2>
        <div className="work-list">
            {projects.map(project => (
              <WorkCard key={project.title} {...project} />
            ))}
        </div>
      </section>

      {/* <section>
        <h2 className="center card-title">Other Works</h2>
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </section> */}

    </main>
  );
}

export default Home;
