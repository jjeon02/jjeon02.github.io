import ProjectHeader from '../components/ProjectHeader';
import Card from '../components/Card';

// HEADER
import headerImage from './project-1/header-img.webp';

// INTRO
import introMainOne from './project-1/intro_cloud_main_01.webp';
import introMainTwo from './project-1/intro_cloud_main_02.webp';
import introCloudOne from './project-1/intro_cloud_01.webp';
import introCloudTwo from './project-1/intro_cloud_02.webp';
import introCloudThree from './project-1/intro_cloud_03.webp';
import introCloudFour from './project-1/intro_cloud_04.webp';

//PROBLEM
import problemMain from './project-1/prev_cloud_main.webp';
import problemOne from './project-1/problem_cloud_01.webp';
import problemTwo from './project-1/problem_cloud_02.webp';

// DESIGN
import designOne from './project-1/design_01.webp';
import designTwo from './project-1/design_02.webp';
import designThree from './project-1/design_03.webp';
import designFour from './project-1/design_04.webp';
import designFive from './project-1/design_05.webp';

import iconOnOne from './project-1/icon_on_01.webp';
import iconOnTwo from './project-1/icon_on_02.webp';
import iconOnThree from './project-1/icon_on_03.webp';
import iconOnFour from './project-1/icon_on_04.webp';
import iconOnFive from './project-1/icon_on_05.webp';

import iconOffOne from './project-1/icon_off_01.webp';
import iconOffTwo from './project-1/icon_off_02.webp';
import iconOffThree from './project-1/icon_off_03.webp';
import iconOffFour from './project-1/icon_off_04.webp';
import iconOffFive from './project-1/icon_off_05.webp';

import tooptipOne from './project-1/tooltip_01.webp';
import tooptipTwo from './project-1/tooltip_02.webp';
import tooptipThree from './project-1/tooltip_03.webp';
import tooptipFour from './project-1/tooltip_04.webp';
import tooptipFive from './project-1/tooltip_05.webp';

// NEXT STEPS
import nextStepOne from './project-1/next_step_01.webp';
import nextStepTwo from './project-1/next_step_02.webp';
import nextStepThree from './project-1/next_step_03.webp';
import nextStepFour from './project-1/next_step_04.webp';

// OTHER WORKS
import project2 from './project-2/thumb.jpg';
import project3 from './project-3/thumb-pny.jpg';


const cards = [
  {
    imageOne: project2,
    titleOne: 'ai.sell',
    descOne: 'An A.I. tool that provides better B2B sales experience for B2B sellers',
    linkOne: '/project-2',
    imageTwo: project3,
    titleTwo: 'PNY Website',
    descTwo: 'Designing official website for PNY Technologies.',
    linkTwo: '/project-3',
  },
]

function Project1() {
  return (
    <>
      <div className="nav-gap"></div>
      <ProjectHeader
        label="Belinker Cloud Service"
        title="Improving the permission control for manufacturing document management system."
        date="May 2025 - Jun 2025"
        tags={['User Experience', 'User Interface', 'Design System', 'UX Research']}
        meta={[
          { label: 'Role', value: 'UX / UI Designer' },
          { label: 'Members', value: ['Myself', 'Leehyun Moon', 'Yeonkyu Kim'] },
          { label: 'Company', value: 'Belinker Inc.' },
        ]}
        image={headerImage}
      />
      <main>

        {/* ============== BIG SECTION DIVIDER ============== */}


        <section>
          <h6 class="sub-title">About</h6>
          <h2>
            Belinker Cloud Service is a cloud-based file management system targeting small to mid-sized manufacturing companies in Korea.
          </h2>
        </section>

        <section>
          <h5>Belinker Cloud Service</h5>
          <ul>
            <li>Type: Open service, Web based</li>
            <li>Target Audience: Small to mid-sized manufacturing companies — around 50 employees — in South Korea</li>
          </ul>

          <img src={introMainOne} alt="Belinker Cloud Service - Main Page: Grid View" class="margin-sm img-popup" />
          <img src={introMainTwo} alt="Belinker Cloud Service - Main Page: Detail View" class="margin-sm img-popup" />
        </section>

        <section>
          <h5>Key Features</h5>
          <div class="column-wrapper margin-md">
            <div class="column">
              <div class="column-box-img-txt">
                <img src={introCloudOne} alt="Project and Folder"/>
                <p>Under the project, users can manage their files and folders.</p>
              </div>
            <div class="column-box-img-txt">
                <img src={introCloudTwo} alt="Click to Download" />
                <p>Users can set download file in both original and PDF format.</p>
              </div>
            </div>
            <div class="column">
              <div class="column-box-img-txt">
                <img src={introCloudThree} alt="File Versions and Information" />
                <p>Each file can have multiple versions and store information in chart.</p>
              </div>
              <div class="column-box-img-txt">
                <img src={introCloudFour} alt="DWG File Support"/>
                <p>DWG file formats are supported and shown in img files.</p>
              </div>
            </div>
          </div>

        </section>

      {/* ============== BIG SECTION DIVIDER ============== */}
      <div class="divider-section"></div>
      <section>
        <h6 class="sub-title">Problem</h6>
        <h2>Previous project permission control was not detailed enough and hard for users to find.</h2>
        <p>There have been constant requests from Belinker's clients — whom were using Belinker Cloud Service — for improvements to the permission control system.</p>
      </section>

      <section>
        <h5>Previous Project Permission Control</h5>
        <img src={problemMain} alt="Previous Permission Control System" class="margin-sm img-popup" />
        <table class="margin-md">
          <tr>
            <th>Basic Permission</th>
            <th>Download Permission</th>
            <th>Edit Permission</th>
          </tr>
          
          <tr>
            {/* 1 */}
            <td>
              <ul>
                <li>PDF Export</li>
                <li>Print</li>
              </ul>
            </td>
            {/* 2 */}
            <td>Original DWG Download</td>
            {/* 3 */}
            <td>
              <ul>
                <li>Edit file name</li>
                <li>Edit file information</li>
                <li>Upload</li>
                <li>Delete</li>
              </ul>
            </td>
          </tr>
        </table>

      </section>
      
      <section>
        <h5>Problem Areas</h5>
        <div class="column margin-md">
          <div class="column-box-img-txt">
            <img src={problemOne} alt="Manage Project Button - Manage Member Option, Delete Project Option" />
            <div class="text-wrapper-xs">
              <h6>1. Words Unclear</h6>
              <p>The term "Manage Project" and "Manage Members" does not indicate the access / permission control function and is not a direct indication of the feature.</p>
            </div>
          </div>
          <div class="column-box-img-txt">
            <img src={problemTwo} alt="Icon button for managing permissions" />
            <div class="text-wrapper-xs">
              <h6>2. Confusing UI</h6>
              <p>The user interface for managing permissions is not intuitive and does not provide clear guidance to users.</p>
            </div>
          </div>
        </div>

        <div class="divider-space"></div>
        
        <div class="text-wrapper-xs">
          <h6>3. Everyone have access to print and download PDF - although it shouldn't be.</h6>
          <ul>
            <li>The "Edit" permission have too many types of permission control at once.</li>
            <li>PDF Export and Print should be its own distinct permissions, and not be available for all users.</li>
          </ul>
        </div>
      </section>

      {/* ============== BIG SECTION DIVIDER ============== */}
      <div class="divider-section"></div>
      <section>
        <h6 class="sub-title">Research to Insight</h6>
        <h2>More detailed permission control and log function are needed.</h2>
        <p>We conducted user interviews and analysis of current permission systems to figure out the needs.</p>
      </section>

      <section>
        <table>
          <tr>
            <th colspan="2" style={{ width: '66.6%' }}>User Quotes</th>
            <th style={{ width: '33.4%' }}>Insight</th>
          </tr>
          <tr>
            <td>Leaking original drawings is usually done intentionally.</td>
            <td>Managing 3D original file is important — which is why we give STP to clients.</td>
            <td class="blue-bg">
              <h6>Original 3D file download permission should be seperate</h6>
            </td>
          </tr>
          <tr>
            <td>When taking drawings outside, printing is common. The factory floor can be dirty, but paper can get dirty and that's fine.</td>
            <td>It would be good if prints automatically included a watermark / the name of the person who printed.</td>
            <td class="blue-bg">
              <h6>Print Permission should be seperate.</h6>
            </td>
          </tr>
          <tr>
            <td>It's important to check who uploaded the drawing when.</td>
            <td>It would be good if there was a way to track who uploaded and deleted the drawing.</td>
            <td class="blue-bg">
              <h6>Additional necessary permissions: Upload and Delete</h6>
            </td>
          </tr>
          <tr>
            <td>Leaving log is one of many important tasks.</td>
            <td>(The current cloud) seems to lack sufficient security measures.</td>
            <td class="blue-bg">
              <h6>Log History: implement current security measures of manufacturers.</h6>
              <p>Implementing log history can provide assurance to users that the cloud-based storage is secure as well.</p>
            </td>
          </tr>
        </table>
      </section>


      {/* ============== BIG SECTION DIVIDER ============== */}
      <div class="divider-section"></div>
      <section>
        <h6 class="sub-title">Solution: Project Permissions</h6>
        <h2>Project permissions were expanded from 2 to 5 types based on insights.</h2>
        <p>"Edit" permissions have been refined to include more specific controls.</p>
      </section>

      <section>
        <h5>Expanding Project Permissions</h5>
        <table class="margin-md">
          <thead>
            <tr>
              <th class="th-first-lg">Before</th>
              <th>After</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1: Original Download */}
            <tr>
              <td>
                <span class="badge badge-yellow">Original Download</span>
                <p>3D Orignial DWG file download</p>
              </td>
              <td>
                <span class="badge badge-yellow">Original Download</span>
                <p>3D Orignial DWG file download</p>
              </td>
              <td>
                <h6>Preventing DWG file leaks is important</h6>
                <p>Keep as is.</p>
              </td>
            </tr>
            {/* Row 2: Edit → Export — Before Edit spans 4 rows */}
            <tr>
              <td rowspan="4">
                <span class="badge badge-blue">Edit</span>
                <ul>
                  <li>Edit file information</li>
                  <li>Edit file Name</li>
                  <li>Upload</li>
                  <li>Delete</li>
                </ul>
              </td>
              <td>
                <span class="badge badge-blue">Export</span>
                <p>PDF Export / Print</p>
              </td>
              <td>
                <h6>PDF conversion incurs cost per conversion</h6>
                <p>Depending on the purchased plan, the number of DWG → PDF conversions varies: member limits are needed to enforce usage limits</p>
                <div class="divider-space"></div>
                <h6>PDF conversion permission = Print permission</h6>
                <p>If PDF conversion is allowed, printing is also possible: printing allows saving as PDF</p>
              </td>
            </tr>
            {/* Row 3 */}
            <tr>
              <td>
                <span class="badge badge-blue">Edit</span>
                <ul>
                  <li><span className="blue-text">Attributes (=file info) management:</span> Add, edit, or delete</li>
                  <li><span className="blue-text">Version control:</span> Add versions, set main version</li>
                  <li><span className="blue-text">File management:</span> Rename, move</li>
                 <li><span className="blue-text">Folder management:</span> Create new folder, rename, move</li>
                </ul>
              </td>
              <td>
                <h6>Important information tend to change fast</h6>
                <p>The ability to modify various information should be controlled by member permissions</p>
              </td>
            </tr>
            {/* Row 4 */}
            <tr>
              <td>
                <span class="badge badge-blue">Upload</span>
                <p>Upload File / Folder</p>
              </td>
              <td>
                <p>Upload information and restrictions are important to administrators to the extent that tracking uploading members is requested.</p>
              </td>
            </tr>
            {/* Row 5 */}
            <tr>
              <td>
                <span class="badge badge-blue">Delete</span>
                <p>Delete File / Folder</p>
              </td>
              <td>There are cases where employees delete files maliciously</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h5>Project Admin and Member</h5>
        <table class="margin-md">
          <tr>
            <th><h6>Project Role</h6></th>
            <th><h6>Available Features</h6></th>
          </tr>
          <tr>
            <td><h6>Project Admin</h6></td>
            <td>
            <ul>
                <li>Five project permissions (see above)</li>
                <li>Add members to the project</li>
                <li>Rename project</li>
                <li>Delete project</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><h6>Project Member</h6></td>
            <td>
              <ul>
                <li>Can only use features allowed by the project admin</li>
                <li>Can view other members in the project</li>
              </ul>
            </td>
          </tr>
        </table>

      </section>

      <div class="divider-section"></div>
      <section>
        <h6 class="sub-title">Solution: Prototype</h6>
        <h2>Members can have 5 types of permissions per project.</h2>
      </section>

      <section>
        <h5>Project permissions have been changed to be managed in settings for better intuitiveness.</h5>
        <p>We moved the permission management adjustment function to settings following common UI conventions and used the term “Permission Management.”</p>
        <img src={designOne} alt="Setting Button Clicked" class="margin-sm img-popup" />
        <img src={designTwo} alt="Permission Side Modal Popup" class="margin-sm img-popup" />
      </section>

      <section>
        <h5>The five project permissions can be managed per member.</h5>
        <p>Admin can click the icon button to adjust permissions for each member. They can also use filters to grant or exclude permissions by group.</p>
        <img src={designThree} alt="Member Permission Management" class="margin-sm img-popup" />
        <table>
          <tr>
            <th>Type</th>
            <th>Download Original</th>
            <th>Export File</th>
            <th>Manage Files</th>
            <th>Upload</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>Active</td>
            <td><img src={iconOnOne} alt="Download Icon" class="table-icon"/></td>
            <td><img src={iconOnTwo} alt="Export Icon" class="table-icon" /></td>
            <td><img src={iconOnThree} alt="Manage Files Icon" class="table-icon" /></td>
            <td><img src={iconOnFour} alt="Upload Icon" class="table-icon" /></td>
            <td><img src={iconOnFive} alt="Delete Icon" class="table-icon" /></td>
          </tr>
          <tr>
            <td>Inactive</td>
            <td><img src={iconOffOne} alt="Download Icon" class="table-icon"/></td>
            <td><img src={iconOffTwo} alt="Export Icon" class="table-icon" /></td>
            <td><img src={iconOffThree} alt="Manage Files Icon" class="table-icon" /></td>
            <td><img src={iconOffFour} alt="Upload Icon" class="table-icon" /></td>
            <td><img src={iconOffFive} alt="Delete Icon" class="table-icon" /></td>
          </tr>
        </table>
      </section>

      <section>
        <h5>Descriptions of the five project permissions are available.</h5>
        <p>On hover, a tooltip with a description of the permission appears below the icon.</p>
        <img src={designFour} alt ="Description tooltip popup" class="margin-sm img-popup" />
        <div class="column margin-sm">
          <div class="column-box">
            <img src={tooptipOne} alt="Download Original Permission Tooltip" class=" img-popup" />
          </div>
          <div class="column-box">
            <img src={tooptipTwo} alt="Export File Permission Tooltip" class="img-popup" />
          </div>
          <div class="column-box">
            <img src={tooptipThree} alt="Manage Files Permission Tooltip" class="img-popup" />
          </div>
          <div class="column-box">
            <img src={tooptipFour} alt="Upload Permission Tooltip" class=" img-popup" />
          </div>
          <div class="column-box">
            <img src={tooptipFive} alt="Delete Permission Tooltip" class="img-popup" />
          </div>
        </div>

      </section>

      <section>
        <h5>Added a log tracking feature that records changes using the traditional manufacturing method.</h5>
        <p>It was important to reflect the traditional security methods used in manufacturing so that users could feel familiar with and trust the new product, Belinker Cloud Service.</p>
        <img src={designFive} alt="Log Tracking Feature" class="margin-sm img-popup" />
      </section>

      {/* ============== BIG SECTION DIVIDER ============== */}
      <div class="divider-section"></div>
      <section>
        <h6 class="sub-title">Next Steps</h6>
        <h2>We continued to improve and expand the permission management features thereafter.</h2>
        <p>Since the official launch of Belinker Cloud Service in June 2025, we have continued to listen to users and make improvements.</p>
      </section>
      
      <section>
        <h5>User Feedback</h5>
        <div class="column margin-md">
          <p class="column-box column-box-light padding-md">We received positive feedback from the client that feedback was generally reflected well.</p>
          <p class="column-box column-box-light padding-md">There was still a learning curve in terms of the UI design.</p>
        </div>
      </section>


      <section>
        <h5>Improvements in function</h5>
        <div class="column margin-md">
          <div class="column-box column-box-img-txt">
            <img src={nextStepOne} alt="Next Step 1"/>
            <div class="txt-wrapper">
              <h6>IP Address Restriction</h6>
              <p>Restrict access so only specific IP addresses can connect</p>
            </div>
          </div>
          <div class="column-box column-box-img-txt">
            <img src={nextStepTwo} alt="Next Step 2"/>
            <div class="txt-wrapper">
              <h6>Added Member Pending/Inactive Status</h6>
              <p>Even if a member signs in, cloud access requires admin approval</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h5>Improvements in Work Process</h5>
        <div class="column margin-md">
          <div class="column-box column-box-img-txt">
            <img src={nextStepThree} alt="Previous working process"/>
            <div class="txt-wrapper">
              <h6>Before: Implementing requests as they came in</h6>
              <p>Features were added immediately without time to identify core needs: the service became more complex and the learning curve increased</p>
            </div>
          </div>
          <div class="column-box column-box-img-txt">
            <img src={nextStepFour} alt="Improved working process"/>
            <div class="txt-wrapper">
              <h6>After: Introduced a process for organizing and analyzing user requests</h6>
              <p>Collected and analyzed user requests to solve the fundamental needs of most users with the minimum necessary features: minimized the learning curve</p>
            </div>
          </div>
        </div>
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

export default Project1;