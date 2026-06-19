import ProjectHeader from '../components/ProjectHeader';
import Card from '../components/Card';

// PROCESS
import headerImage from './project-2/header-img.webp';
import b2bProcess from './project-2/ai-research-2.webp';
import solutionImage from './project-2/solution-1.webp';

// DESIGN
import mockup from './project-2/mockup.webp';
// BUYER DESIGN
import buyerFlow from './project-2/buyer_user_flow.webp';
import buyer1 from './project-2/buyer_design_01.webp';
import buyer2 from './project-2/buyer_design_02.webp';
import buyer3 from './project-2/buyer_design_03.webp';
import buyer4 from './project-2/buyer_design_04.webp';
import buyer5 from './project-2/buyer_design_05.webp';

// SELLER DESIGN
import sellerFlow from './project-2/seller_user_flow.webp';
import structure from './project-2/structure.webp';
import system from './project-2/system.webp';
import design1One from './project-2/design_1_1.webp'; 
import design1Two from './project-2/design_1_2.webp'; 
import design1Three from './project-2/design_1_3.webp';
import design2 from './project-2/design_2.webp';
import design3One from './project-2/design_3_1.webp';
import design3Two from './project-2/design_3_2.webp';
import design3Three from './project-2/design_3_3.webp';
import design4 from './project-2/design_4.webp';
import design5 from './project-2/design_5.webp';

//CONCLUSION
import mvp from './project-2/mvp_plan.webp';

// OTHER WORKS
import project1 from './project-1/thumb.webp';
import project3 from './project-3/thumb-pny.jpg';


const cards = [
  {
    imageOne: project1,
    titleOne: 'Belinker Cloud Service',
    descOne: 'Improving the permission control for manufacturing document management system.',
    linkOne: '/project-1',
    imageTwo: project3,
    titleTwo: 'PNY Website',
    descTwo: 'Designing official website for PNY Technologies.',
    linkTwo: '/project-3',
  },
]


function Project2() {
  return (
    <>
      <div className="nav-gap"></div>
      <ProjectHeader
        label="2023 Interaction Awards Shortlist"
        title="ai.sell: To help your B2B sales process"
        date={<>Sep 2022 - Dec 2022 <br />Revised in Mar 2026 - Apr 2026</>}
        tags={['User Experience', 'User Interface', 'Design System', 'UX Research']}
        meta={[
          { label: 'Role', value: 'UX / UI Designer' },
          { label: 'Members', value: ['Myself', 'Bashayer Algow', 'Mihira Patel'] },
          { label: 'Sponsor', value: 'Bigtincan' },
        ]}
        image={headerImage}
      />
    <main>
      <section>
        <h2 class="section-title">Project Background</h2>
        <p>
          On the first semester of 2022 in <a class="allow-underline" href="https://sva.edu/academics/graduate/mfa-interaction-design" target="_blank" rel="noopener noreferrer">Interaction Design</a> at School of Visual Arts, 
          out team were given a challenge from <a class="allow-underline" href="https://www.bigtincan.com/" target="_blank" rel="noopener noreferrer">Bigtincan</a>. 
          This project was on the shortlist of Interaction Awards 2023 from <a class="allow-underline" href="https://www.interactionawards.com/" target="_blank" rel="noopener noreferrer">IxDA</a>.
        </p>
        <div class="callout">
          <p>Our Challenge from Bigtincan:</p>
          <h6>
            Design a solution to provide a better environment for sellers to interact with B2B buyers.
          </h6>
        </div>
      </section>

      {/* ============== BIG SECTION DIVIDER ============== */}
      <div class="divider-section"></div>
      <section>
        <h6 class="sub-title">Problem</h6>
        <h2>While B2B sellers need buyer information, B2B buyers are reluctant to provide it.</h2>
        <p>
          B2B sellers needed potential buyer information for successful B2B transactions. However, buyers were reluctant to provide information and tended to look for sellers only after they had already made their decision.
        </p>
      </section>

      <section>
        <table>
          <tr>
            <th colspan="2">User Quote</th>
            <th style={{ width: '50%' }}>Insight</th>
          </tr>
          {/* ===== ROW ===== */}
          <tr>
            <td>
              <span class="badge-size-sm badge-yellow">Seller</span>
              <p>“We try to think from their perspective. They feel more heard, and we understand them better””</p>
            </td>
            <td>
              <span class="badge-size-sm badge-yellow">Seller</span>
              <p>“We first present our service and product to the buyer, understand their needs, and then create a prototype tailored to those needs.”</p>
            </td>
            <td><h6>Sellers need buyer information for successful B2B transactions</h6></td>
          </tr>
          {/* ===== ROW ===== */}
          <tr>
            <td>
              <span class="badge-size-sm badge-yellow">Seller</span>
              <p>“Not many buyers are comfortable with giving data”</p>
            </td>
            <td>
              <span class="badge-size-sm badge-blue">Buyer</span>
              <p>“It's a bit uncomfortable when the sellers that I don't know ask too much (information.)”</p>
            </td>
            <td><h6>Buyers are reluctant to provide information.</h6></td>
          </tr>
          {/* ===== ROW ===== */}
          <tr>
            <td>
              <span class="badge-size-sm badge-yellow">Seller</span>
              <p>“They reach out to our website, submit their contact information, then we contact them to close deals”</p>
            </td>
            <td>
              <span class="badge-size-sm badge-blue">Buyer</span>
              <p>“I compare sellers' websites, compare prices, then I reach out to them.”</p>
            </td>
            <td><h6>Through research, buyers already decide on sellers before reaching out.</h6></td>
          </tr>
        </table>
      </section>


    {/* ============== BIG SECTION DIVIDER ============== */}
      <div class="divider-section"></div>
      <section>
          <h6 class="sub-title">Analysis</h6>
          <h2>B2B sellers prepare product demos for buyers, and B2B buyers complete seller research before meeting them.</h2>
          <p>After analyzing B2B buyers and sellers separately, we summarized their B2B transaction process.</p>
      </section>

      <section>
        <h5>User Analysis</h5>
        <table class="margin-md">
          <tr>
            <th class="th-first">User Type</th>
            <td class="blue-bg">Buyer</td>
            <td class="yellow-bg">Seller</td>
          </tr>
          <tr>
            <th rowspan="2">Difference</th>
            <td>Already knows what they want.</td>
            <td>Have difficulty in recognizing what buyer wants due to lack of information.</td>
          </tr>
          <tr>
            <td>Prefers online meeting.</td>
            <td>Prefers in-person meeting.</td>
          </tr>
          <tr>
            <th>Pain Point</th>
            <td>Don't prefer random sellers reaching out.</td>
            <td>COVID had big impact on their business.</td>
          </tr>
          <tr>
            <th>Key Points</th>
            <td>Price and words of mouth matters.</td>
            <td>COVID had big impact on their business.</td>
          </tr>
          <tr>
            <th>Action</th>
            <td>Visits multiple websites and finish decision before contacting sellers.</td>
            <td>Send demos related to their company's product to persue buyers.</td>
          </tr>
        </table>
      </section>
      
      <section class="max-width-project">
        <h5 class="title">User Flow</h5>
        <img src={b2bProcess} alt="B2B research process" class="margin-md"/>
      </section>
      
       {/* ============== BIG SECTION DIVIDER ============== */}
      <div class="divider-section"></div>
      <section>
          <h6 class="sub-title">Solution</h6>
          <h2>Exploring ways to encourage buyers to provide information: finding solution opportunities on seller websites.</h2>
          <p>
            B2B buyers research information on seller websites in advance before making decisions. Therefore, we concluded that creating opportunities for deals when buyers visit seller websites would be a more intuitive and effective approach.
          </p>
      </section>

      <section class="max-width-project">
        <h5>Insight to Solution</h5>
        <table class="margin-md">
          <tr>
            <th class="th-first">Keyword</th>
            <th class="blue-bg">Buyer Insight</th>
            <th class="yellow-bg">Seller Solution</th>
            <th>Expected Outcome</th>
          </tr>
          <tr>
            <td>Website</td>
            <td>Seller already make decision through seller's website found from google search.</td>
            <td>Focus on the seller's website, which is a first impression from the buyer perspective.</td>
            <td>Improve the first interaction of the B2B process between the seller and the buyer.</td>
          </tr>
          <tr>
            <td>Customize,<br />Lead</td>
            <td>Need customized demo content.</td>
            <td>Provide customized content from the website.</td>
            <td>Generate lead.</td>
          </tr>
          <tr>
            <td>Trust</td>
            <td>Does not like asking for personal information.</td>
            <td>Ask for minimum information for the comfort of sellers.</td>
            <td>Focus on getting important necessary information while maintaining positive first impression.</td>
          </tr>
        </table>
      </section>
      
      <section>
        <h5>
          We planned <span class="blue-text">ai.sell</span>, a service that provides B2B sellers' demo materials tailored to each B2B buyer's needs.
        </h5>
        <p>
          B2B buyers visit sellers' websites to research and make final decisions before contacting sellers.
          Ai.sell utilizes AI to generate customized content for buyers based on the minimum information provided by buyers on the website. Ai.sell is sold to B2B sellers as a plugin for their website builder, which helps them generate leads and provide customized content for buyers.
        </p>
      </section>

      <section class="max-width-project">
        <img src={solutionImage} alt="An infographic of how ai.sell utilizes information and use AI to generate customized content for buyers" class="margin-md" />
      </section>
      
      {/* ============== BIG SECTION DIVIDER ============== */}
    
      <img src={mockup} alt="Mockup of the ai.sell design" class="margin-md"/>

      {/* ==================== BUYER ==================== */}

      <section class="max-width-project">
        <h6 class="sub-title">Design: Buyer Point of View</h6>
        <h2>Buyers can enter minimal information on the seller's website to receive AI-tailored materials.</h2>
      </section>

      <section class="max-width-project">
        <h5>User Flow for B2B Buyers</h5>
        <img src={buyerFlow} alt="User Flow for B2B buyers that approaches B2B Seller's website" class="max-width-img"/>
      </section>

      <section class="max-width-project">
        <h5 class="section-title">Buyer Journey (Design Example)</h5>
        <p>After the seller set up ai.sell on their website, this is the flow that buyers will experience:</p>
      </section>

      {/* BUYER PAGE 1 */}
      <section class="max-width-project">
        <div class="column">
          <div class="column-box-left">
            <h6>1. Get Demo</h6>
            <p>Locate the "Get Demo" button on the seller's website that is most visible such as navigation bar or hero section.</p>
          </div>
          <div class="column-box">
            <img src={buyer1} alt="Buyer getting a demo" class="margin-md img-popup"/>
          </div>
        </div>
      </section>
        
      {/* BUYER PAGE 2 */}
      <section class="max-width-project">
        <div class="column">
          <div class="column-box-left">
            <h6>2. Company Name</h6>
            <p>A buyer need to put their company's name, which will be used to analyze their needs when ai.sell generate demo content. </p>
          </div>
          <div class="column-box">
            <img src={buyer2} alt="Buyer providing information" class="margin-md img-popup"/>
          </div>
        </div>
      </section>

      {/* BUYER PAGE 3 */}
      <section class="max-width-project">
        <div class="column">
          <div class="column-box-left">
            <h6>3. Select Category</h6>
            <p>A buyer need to select a category that best describes their needs, which will be used to generate relevant demo content. </p>
          </div>
          <div class="column-box">
            <img src={buyer3} alt="Buyer selecting a category" class="margin-md img-popup"/>
          </div>
        </div>
      </section>

       {/* BUYER PAGE 4 */}
      <section class="max-width-project">
        <div class="column">
          <div class="column-box-left">
            <h6>4. Select Product</h6>
            <p>A buyer need to select a product that they are looking for, which also will be used to follow up with them after the demo. </p>
          </div>
          <div class="column-box">
            <img src={buyer4} alt="Buyer selecting a product" class="margin-md img-popup"/>
          </div>
        </div>
      </section>

      {/* BUYER PAGE 5 */}
      <section class="max-width-project">
        <div class="column">
          <div class="column-box-left">
            <h6>5. Video Demo & Provide Contact Information</h6>
            <p>A buyer can see the demo and decide to whether leave their contact information. </p>
          </div>
          <div class="column-box">
            <img src={buyer5} alt="Buyer providing contact information" class="margin-md img-popup"/>
          </div>
        </div>
      </section>
      
      {/* ==================== SELLER ==================== */}
      
      <div class="divider-section"></div>
      <section class="max-width-project">
          <h6 class="sub-title">Design: Seller point of view</h6>
          <h2>Generated contents on the website become leads for B2B sellers on ai.sell.</h2>
      </section>

      <section class="max-width-project">
        <h5>User Flow for B2B Sellers</h5>
        <img src={sellerFlow} alt="User Flow for B2B sellers that set up ai.sell on their website" class="margin-md"/>
      </section>
      
      <section class="max-width-project">
        <h5>ai.sell: structure</h5>
        <img src={structure} alt="The structure of ai.sell" class="margin-md"/>    
      </section>
      
      <section class="max-width-project">
        <h5>ai.sell: system</h5>
        <img src={system} alt="The design system of ai.sell" class="margin-md"/>    
      </section>

      <section>
        <h5 class="section-title">ai.sell: prototype</h5>
        <p>This is how a seller will go through the ai.sell prototype when they first approach it:</p>
      </section>
      
      {/* PAGE 1 */}
      <section>
        <h6>1. Setup: To generate target leads, sellers need to set up their website first.</h6>
        <ul>
          <li>Category and Product: Sellers need to define their product offerings and organize them into categories.</li>
          <li>Website: Sellers need to integrate current website builder (Shopify, Wix, etc.) and set up website content and layout. They can also setup video and their contact information.</li>
        </ul>
        <img src={design1One} alt="Setup process for B2B sellers" class="margin-md img-popup"/>
        <img src={design1Two} alt="Setup process for B2B sellers" class="margin-md img-popup"/>
        <img src={design1Three} alt="Setup process for B2B sellers" class="margin-md img-popup"/>
      </section>
      
      {/* PAGE 2 */}
      <section>
        <h6>2. Material: Provide materials for the AI to use in creating AI content.</h6>
        <ul>
          <li>Categorizing: Each file need to be assigned with "category" and "product" tags.</li>
          <li>Folders: Materials can be organized into folders for better management.</li>
          <li>File Format: Images, Texts, Videos, etc.</li>
        </ul>
        <img src={design2} alt="Material management for B2B sellers" class="margin-md img-popup"/>
      </section>
      
      {/* PAGE 3 */}
      <section>
        <h6>3. Leads: Generated contents become leads that connects sellers with buyers.</h6>
        <ul>
            <li>Basic Information</li>
            <ul>
              <li>Potential buyer's information</li>
              <li>Potential buyer's selected options</li>
            </ul>
            <li>Generated Video: Materials used for the video</li>
            <li>Respond back to potential buyer: Contact via email that potential buyer submitted.</li>
        </ul>
        
        <img src={design3One} alt="Generated leads" class="margin-md img-popup"/>
        <img src={design3Two} alt="Generated lead in detail information" class="margin-md img-popup"/>
        <img src={design3Three} alt="Generated lead in detail information" class="margin-md img-popup"/>
      </section>
        
      {/* PAGE 4 */}
      <section>
        <h6>4. Contacts: Buyers information is saved.</h6>
        <ul>
          <li>Seller information extracted from generated leads and contact details left after viewing the content</li>
          <li>Most recent lead status</li>
        </ul>
        <img src={design4} alt="Collected contact information of buyers reached out" class="margin-md img-popup"/>
      </section>
      
      {/* PAGE 5 */}
      <section>
        <h6>5. Dashboard: Generated leads get analyzed</h6>
        <ul>
          <li>Summary of products and product categories with the most leads generated</li>
          <li>Analysis of the number of leads generated by product and product category, including growth and percentages</li>
          <li>Ability to view information limited to a specific period</li>
        </ul>
        <img src={design5} alt="Information of leads analyzed depending on their status during a certain duration of time" class="margin-md img-popup"/>
      </section>

      
      {/* ================= CONCLUSION ================= */}
      
      <div class="divider-section"></div>
      <section>
        <h6 class="sub-title">Conclusion</h6>
        <h2>From the buyer's perspective, ai.sell provides optimized information with minimal input, leading to potential customer acquisition for sellers.</h2>
      </section>

      <section>
        <div class="column">
          <div class="column-box column-box-light gap-sm padding-lg">
            <span class="badge-size-md badge-blue">Buyer</span>
            <h6>Get personalized information generated by AI while sharing less personal data.</h6>
            <p>You do not need to go through complicated sign-up or login processes to view product demos.</p>
          </div>
          <div class="column-box column-box-light gap-sm padding-lg">
            <span class="badge-size-md badge-blue">Buyer</span>
            <h6>The demo lets users enter contact details only if they like what they see.</h6>
            <p>Requesting less information helps create a positive first impression: capturing potential leads for sellers.</p>
          </div>
          <div class="column-box column-box-light gap-sm padding-lg">
            <span class="badge-size-md badge-yellow">Seller</span>
            <h6>Providing a solution optimized for buyers.</h6>
            <p>Offering an optimized solution can attract more interested potential customers.</p>
          </div>
        </div>
      </section>

      <section class="max-width-project">
        <h5>MVP Plan</h5>
        <p>*Calculated in 2022</p>
        <img src={mvp} alt="MVP plan of ai.sell"></img>
      </section>

      <div class="divider-section"></div>
      
      {/* !SEE OTHER WORKS */}
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

export default Project2;
