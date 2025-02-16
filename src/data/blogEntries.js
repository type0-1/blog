export const blogPosts = [
  {
    id: '50',
    title: 'Completing the User Guide',
    author: 'Marjia Siddik',
    date: '20th Feb. 2025',
    topic: '📖 User Documentation',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Completing the User Guide</h2>
      <p>As the final step in our documentation efforts, we have completed the <i>User Guide</i> to help users easily navigate and interact with the platform.</p>

      <ul>
        <li><strong>Step-by-Step Instructions:</strong> Detailed guides on signing up, logging in, managing datasets, and performing operations.</li>
        <li><strong>Visual Walkthroughs:</strong> Included annotated screenshots and examples to make the guide more intuitive.</li>
        <li><strong>Troubleshooting Section:</strong> Added solutions for common issues, such as login failures and permission errors.</li>
        <li><strong>Best Practices:</strong> Provided tips on secure data management and efficient usage of the platform.</li>
      </ul>

      <p>The completion of this guide ensures that both new and experienced users can effectively utilise the system with minimal confusion, improving overall user experience and efficiency.</p>
    `
      ,
},
  {
    id: '49',
    title: 'Finalizing the Technical Specification Document',
    author: 'Marjia Siddik',
    date: '20nd Feb. 2025',
    topic: '📄 Project Documentation',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Finalizing the Technical Specification Document</h2>
      <p>As we near the completion of our project, we have finalized the <i>Technical Specification Document</i>, ensuring it accurately reflects the system architecture, functionality, and implementation details.</p>

      <ul>
        <li><strong>System Architecture:</strong> Detailed the overall structure, including backend, frontend, and database design.</li>
        <li><strong>API Documentation:</strong> Outlined all API endpoints, request parameters, and expected responses.</li>
        <li><strong>Security Measures:</strong> Documented authentication, encryption, and access control mechanisms used for data protection.</li>
        <li><strong>Testing Strategies:</strong> Included an overview of unit, integration, and security testing approaches.</li>
        <li><strong>Deployment & Scalability:</strong> Provided insights into hosting, database management, and future scalability considerations.</li>
      </ul>

      <p>Completing this document ensures that future developers and contributors can easily understand the system’s design, making it a valuable resource for maintenance and expansion.</p>
    `
      ,
},

  {
    id: '48',
    title: 'Showcasing Our Project: Video Walkthrough',
    author: 'Samson Oloruntola',
    date: '19th Feb. 2025',
    topic: '🎥 Project Walkthrough',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Showcasing Our Project: Video Walkthrough & Demonstration</h2>
      <p>To provide a clear and structured overview of our project, we recorded a comprehensive <i>video walkthrough</i>, highlighting key functionalities, UI flow, and backend operations.</p>

      <ul>
        <li><strong>Project Overview:</strong> Explained the purpose of the platform, its core features, and the technologies used.</li>
        <li><strong>Live Demonstration:</strong> Walked through key functionalities such as authentication, dataset management, and access control.</li>
        <li><strong>UI/UX Experience:</strong> Showcased navigation flow, responsiveness, and how different components interact seamlessly.</li>
        <li><strong>Backend Functionality:</strong> Provided insights into how data encryption, ORAM operations, and secure user management work.</li>
        <li><strong>Testing & Validation:</strong> Highlighted the various testing efforts (unit, integration, and security testing) and how they ensure reliability.</li>
      </ul>

      <p>The video serves as a complete guide for anyone exploring our project, giving a detailed breakdown of how the system functions and the improvements made during development.</p>
    `
      ,
},
  {
    id: '47',
    title: 'Seamless Navigation: Frontend Integration Testing for Navbar, Home, Signup & Login',
    author: 'Marjia Siddik',
    date: '18th Feb. 2025',
    topic: '🖥️ Frontend Integration Testing',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Seamless Navigation: Frontend Integration Testing for Navbar, Home, Signup & Login</h2>
      <p>To ensure smooth transitions and functionality between key sections of the platform, we conducted integration testing across the <i>Navbar, Home, Signup, and Login</i> pages.</p>

      <ul>
        <li><strong>Navigation Flow Validation:</strong> Verified that users can seamlessly transition between Home, Signup, and Login pages using the Navbar.</li>
        <li><strong>Signup & Authentication Checks:</strong> Ensured users can register successfully, receive feedback on errors, and log in without issues.</li>
        <li><strong>Session Persistence:</strong> Tested whether logged-in users remain authenticated when navigating between pages.</li>
        <li><strong>UI Consistency:</strong> Confirmed that styles, buttons, and forms render correctly across different screen sizes and devices.</li>
        <li><strong>Error Handling & Redirects:</strong> Simulated failed logins and signups to validate proper error messages and redirections.</li>
      </ul>

      <p>With these tests, we strengthened <i>user experience and authentication flows</i>, ensuring that new and returning users can navigate effortlessly without interruptions.</p>
    `
      ,
},
  {
    id: '46',
    title: 'Ensuring System Reliability with Performance & Stress Testing',
    author: 'Samson Oloruntola',
    date: '17th Feb. 2025',
    topic: '🚀 Performance & Stress Testing',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Ensuring System Reliability with Performance & Stress Testing</h2>
      <p>To evaluate the stability and efficiency of our platform, we conducted rigorous performance and stress testing.</p>

      <ul>
        <li><strong>Load Testing:</strong> Simulated high-traffic scenarios to measure system response time and scalability under normal and peak usage conditions.</li>
        <li><strong>Stress Testing:</strong> Pushed the system beyond its expected capacity to identify breaking points and ensure graceful degradation.</li>
        <li><strong>Database Query Optimization:</strong> Analyzed query execution times and optimized database calls to reduce latency and enhance response speeds.</li>
        <li><strong>API Response Benchmarking:</strong> Measured API endpoint performance, ensuring fast data retrieval and minimal processing delays.</li>
        <li><strong>File Handling Efficiency:</strong> Tested dataset uploads and retrievals with large files to verify encryption speed and storage performance.</li>
      </ul>

      <p>These tests provided valuable insights into <i>system limitations and areas for improvement</i>, ensuring our platform remains efficient and reliable under heavy usage.</p>
    `
      ,
},
  {
    id: '45',
    title: 'Enhancing System Security with Testing',
    author: 'Samson Oloruntola',
    date: '16th Feb. 2025',
    topic: '🔒 Security Testing',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Enhancing System Security with Testing</h2>
      <p>To fortify our system against potential threats, we conducted thorough security testing on both authentication and data access layers.</p>

      <ul>
        <li><strong>Brute Force Prevention:</strong> Tested repeated login attempts to ensure users are protected from credential stuffing attacks.</li>
        <li><strong>Session Security:</strong> Verified that session tokens are securely managed, preventing hijacking and fixation attacks.</li>
        <li><strong>Unauthorized Access Attempts:</strong> Ensured that users cannot access datasets, metrics, or administrative functions without proper permissions.</li>
        <li><strong>Secure File Handling:</strong> Tested dataset upload and retrieval mechanisms to prevent unauthorized access and ensure encryption integrity.</li>
      </ul>

      <p>By implementing these security tests, we have strengthened <i>the overall resilience of our platform</i>, ensuring user data remains protected against vulnerabilities.</p>
    `
      ,
},
  {
    id: '44',
    title: 'Ensuring Frontend Stability with Unit Tests',
    author: 'Marjia Siddik',
    date: '13th Feb. 2025',
    topic: '🖥️ Frontend Testing',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Ensuring Frontend Stability with Unit Tests</h2>
      <p>To enhance the reliability of our frontend, we implemented unit tests to validate core UI components and user interactions.</p>

      <ul>
        <li><strong>Form Validations:</strong> Tested login, signup, and dataset input forms to ensure proper validation and error handling.</li>
        <li><strong>Navigation and Routing:</strong> Verified that users can navigate smoothly between pages without broken links or unintended behavior.</li>
        <li><strong>Component Rendering:</strong> Checked that key UI components, such as buttons, modals, and tables, render correctly across different states.</li>
        <li><strong>State Management:</strong> Ensured that user authentication state, dataset listings, and permissions update correctly in response to actions.</li>
      </ul>

      <p>By covering these areas, we have improved the <i>frontend’s stability and user experience</i>, reducing the likelihood of UI-related issues.</p>
    `
      ,
},
  {
    id: '43',
    title: 'Testing Backend Functionality with Unit Tests',
    author: 'Marjia Siddik',
    date: '11th Feb. 2025',
    topic: '🧪 Backend Testing',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Testing Backend Functionality with Unit Tests</h2>
      <p>To ensure the robustness of our backend, we have implemented unit tests covering key functionalities, improving code reliability and maintainability.</p>

      <ul>
        <li><strong>Authentication Tests:</strong> Verified user registration, login, and logout processes to ensure they function correctly under various conditions.</li>
        <li><strong>Dataset Operations:</strong> Tested dataset uploads, retrieval, and deletion to confirm smooth file handling and database integrity.</li>
        <li><strong>Access Control List (ACL) Management:</strong> Ensured proper assignment and verification of user permissions for managing datasets.</li>
        <li><strong>Metrics Handling:</strong> Checked correct retrieval and processing of dataset usage metrics for analytics and monitoring.</li>
      </ul>

      <p>These unit tests help us <i>identify potential issues early</i> and maintain a stable backend, reducing the risk of unexpected failures.</p>
    `
      ,
},
  {
    id: '42',
    title: 'Replacing Default Popups with Custom UI Alerts',
    author: 'Samson Oloruntola',
    date: '9th Feb. 2025',
    topic: '🎨 UI/UX Improvements',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Replacing Default JavaScript Popups with Custom UI Alerts</h2>
      <p>To enhance the user experience and maintain a consistent UI design, we replaced the default JavaScript popups with custom modal alerts for dataset actions.</p>

      <ul>
        <li><strong>Custom Popups for Dataset Actions:</strong> Instead of browser alert popups when adding or deleting datasets, we introduced in-app modals that provide a more seamless and visually appealing experience.</li>
        <li><strong>Better User Feedback:</strong> The new popups include animations, styling, and clearer messaging to ensure users understand what actions are being performed.</li>
        <li><strong>Improved Confirmation Flow:</strong> Deleting a dataset now presents a well-designed confirmation modal, preventing accidental deletions and enhancing accessibility.</li>
      </ul>

      <p>This update ensures that all interactions within the application feel <i>smooth, modern, and integrated</i>, eliminating jarring browser popups that disrupt the workflow.</p>
    `
},
  {
    id: '41',
    title: 'Streamlining User & Dataset Management for Better Usability',
    author: 'Samson Oloruntola',
    date: '7th Feb. 2025',
    topic: '🛠️ UI/UX Improvements',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Streamlining User & Dataset Management for Better Usability</h2>
      <p>As part of our ongoing UI/UX improvements, we have refined how user and dataset management is accessed, making the system more intuitive and efficient.</p>
  
      <ul>
        <li><strong>Moved "Manage Users" to the Navbar:</strong> Previously, user management was only accessible after uploading a dataset. We have now added a dedicated "Manage Users" option in the navigation bar, allowing administrators to handle user permissions at any time.</li>
        <li><strong>Removed Redundant "Manage Dataset" Button:</strong> After a user uploaded a dataset, they were presented with a "Manage Dataset" button. Since users can already manage datasets from the dataset list, this extra step was unnecessary and has been removed.</li>
      </ul>
  
      <p>These changes improve the <i>flow of dataset and user management</i>, ensuring that necessary actions are accessible in logical locations without redundant UI elements.</p>
    `
      ,
  },
  {
    id: '40',
    title: 'Implementing Role-Based Access Control for Enhanced Security',
    author: 'Marjia Siddik',
    date: '5th Feb. 2025',
    topic: '🔑 Access Control & Security',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Implementing Role-Based Access Control for Enhanced Security</h2>
      <p>To strengthen security and improve dataset management, we have integrated <i>Role-Based Access Control</i>, allowing for fine-grained permission settings across the platform.</p>
  
      <ul>
        <li><strong>Granular User Permissions:</strong> Users can now be assigned <i>READ</i> or <i>MANAGE</i> access levels per dataset, ensuring controlled data governance.</li>
        <li><strong>Secure Access Management:</strong> Implemented a robust permission verification system that restricts unauthorized users from performing sensitive actions.</li>
        <li><strong>Access Logs and Auditing:</strong> Added tracking mechanisms to monitor access events, providing full visibility into dataset interactions.</li>
      </ul>
  
      <p>This update significantly enhanced security by ensuring that <i>only authorized users can modify or access datasets</i>, preventing unauthorized access while improving system transparency.</p>
    `,
  },  
  {
    id: '39',
    title: 'Enhancing Real-Time Encryption and Performance Metrics',
    author: 'Samson Oloruntola',
    date: '1st Feb. 2025',
    topic: '⚡ Encryption & Performance Optimization',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Enhancing Real-Time Encryption and Performance Metrics</h2>
      <p>Recent updates focused on improving <i>real-time encryption monitoring</i> and optimizing <i>performance tracking</i> to ensure system efficiency.</p>
  
      <ul>
        <li><strong>Real-Time Encryption Monitoring:</strong> Introduced live encryption status tracking for datasets, allowing users to see real-time security metrics.</li>
        <li><strong>Reduced Processing Overhead:</strong> Optimized encryption and decryption processes to <i>reduce system load</i>, improving response times for dataset access.</li>
        <li><strong>Performance Dashboard Enhancements:</strong> Upgraded the system monitoring interface, providing real-time visual feedback on <i>encryption overhead, ORAM efficiency, and latency metrics</i>.</li>
      </ul>
  
      <p>These enhancements ensure that users experience <i>faster, more secure, and transparent</i> interactions with their datasets, making encryption processes more efficient while maintaining top-tier security.</p>
    `,
  },
  
      {
        id: '38',
        title: 'Optimizing Secure Data Access with Path ORAM',
        author: 'Samson Oloruntola',
        date: '29th Jan. 2025',
        topic: '🔐 Privacy-Preserving Data Access',
        authorImage: require('../images/Samson.jpeg'),
        content: `
          <h2>Optimizing Secure Data Access with Path ORAM</h2>
          <p>We recently focused on improving <i>secure data access</i> in our platform using <i>Path Oblivious RAM (Path ORAM)</i>. This enhancement ensures that dataset access patterns remain hidden, adding an extra layer of privacy for users.</p>
  
          <ul>
            <li><strong>Path ORAM Implementation:</strong> Integrated an advanced ORAM scheme to obscure data access patterns, preventing leakage of sensitive information.</li>
            <li><strong>Optimized Stash Management:</strong> Improved the efficiency of ORAM operations by reducing excessive stash accumulation, leading to faster data retrieval.</li>
            <li><strong>Performance Monitoring:</strong> Implemented real-time <i>metrics tracking</i> to measure <i>ORAM reshuffling latency, encryption overhead, and bucket utilization</i>.</li>
          </ul>
  
          <p>These improvements significantly enhance the <i>privacy and security</i> of data access within the system, ensuring that sensitive datasets remain protected against inference attacks.</p>
            `,
        },
  
        {
          id: '37',
          title: 'Enhancing Dataset Management and User Authentication',
          author: 'Samson Oloruntola',
          date: '27th Jan. 2025',
          topic: '🔒 Authentication & Dataset Management',
          authorImage: require('../images/Samson.jpeg'),
          content: `
            <h2>Enhancing Dataset Management and User Authentication</h2>
            <p>Significant updates were made to user authentication and dataset management functionalities. Key highlights include:</p>

            <ul>
              <li><strong>Dataset Upload:</strong> Implemented functionality for users to upload datasets seamlessly.</li>
              <li><strong>Signup and Login:</strong> Revamped the signup and login functionalities to utilize backend Flask API routes for better security and reliability.</li>
              <li><strong>Access Control:</strong> Added a feature to fetch all users for managing access control permissions efficiently.</li>
            </ul>

            <p>These updates mark a critical step in enhancing the platform's usability and security.</p>
          `,
      },

      {
        id: '36',
        title: 'User and Access Control Management Enhancements',
        author: 'Marjia Siddik',
        date: '26th Jan. 2025',
        topic: '🔑 Access Control',
        authorImage: require('../images/Marjia.jpeg'),
        content: `
          <h2>User and Access Control Management Enhancements</h2>
          <p>A series of updates were made to improve user management and access control. Key highlights:</p>

          <ul>
            <li><strong>Access Restrictions:</strong> Restricted user management and dataset upload functionalities to authenticated users only.</li>
            <li><strong>ACL Endpoint Fixes:</strong> Resolved issues in the ACL model endpoint for smoother access control management.</li>
            <li><strong>Routing Updates:</strong> Added <code>acl_routes.py</code> and modified <code>app.py</code> and <code>model.py</code> to align with access control needs, followed by a refinement to remove unnecessary routes.</li>
            <li><strong>User Management Interface:</strong> Created a "Manage Users" page with routing and functionality for administrators to oversee user access.</li>
          </ul>

          <p>These improvements enhance security and simplify user and permission management across the platform.</p>
        `,
    },

    {
      id: '35',
      title: 'Refining Requirements and Project Setup',
      author: 'Samson Oloruntola',
      date: '25th Jan. 2025',
      topic: '⚙️ Development Setup',
      authorImage: require('../images/Samson.jpeg'),
      content: `
        <h2>Refining Requirements and Project Setup</h2>
        <p>Focus was placed on improving the project setup and resolving system issues. Key updates:</p>

        <ul>
          <li><strong>Requirements File Updates:</strong> Updated <code>requirements.txt</code> to include the latest dependencies required for development.</li>
          <li><strong>File Cleanup:</strong> Cleared cached files and fixed issues in <code>.gitignore</code> for better repository management.</li>
          <li><strong>Reorganization:</strong> Reorganised models and removed redundant project startup files causing system errors.</li>
          <li><strong>Authentication Improvements:</strong> Implemented the login page, signup, and login functionalities, reorganizing files to align with backend structures.</li>
        </ul>

        <p>These refinements ensure a smoother development workflow and resolve prior system errors.</p>
      `,
  },

  {
    id: '34',
    title: 'Server and Frontend File Organization',
    author: 'Samson Oloruntola',
    date: '21st Jan. 2025',
    topic: '⚙️ Development Streamlining',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Server and Frontend File Organization</h2>
      <p>To streamline development workflows, we added a <code>.gitignore</code> file and organised essential files for running the server, API, and frontend. Key highlights:</p>

      <ul>
        <li><strong>Server Setup:</strong> Simplified backend operations by structuring server files.</li>
        <li><strong>Frontend Workflow:</strong> Established a clear hierarchy for frontend files to enhance maintainability.</li>
      </ul>

    `,
  },
  {
    id: '33',
    title: 'Signup Page Implementation',
    author: 'Samson Oloruntola',
    date: '21st Jan. 2025',
    topic: '🎨 UI Development',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Signup Page Implementation</h2>
      <p>We took a significant step toward user interaction by implementing the signup page. This included:</p>

      <ul>
        <li><strong>Frontend Development:</strong> Designed the signup page UI, enhancing user experience.</li>
        <li><strong>Backend Integration:</strong> Implemented a signup route in Flask’s <code>app.py</code> for seamless registration.</li>
        <li><strong>CSS Adjustments:</strong> Updated <code>index.css</code> to align with the new page design.</li>
      </ul>

      <p>With the signup page complete, users now have a dedicated entry point to the platform.</p>
    `,
  },
  {
    id: '32',
    title: 'Database Cleanup and CSS Adjustments',
    author: 'Marjia Siddik',
    date: '18th Jan. 2025',
    topic: '🗄️ Backend Refinements',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Database Cleanup and CSS Adjustments</h2>
      <p>As part of our ongoing refinement process, we focused on database and UI improvements. Key updates:</p>

      <ul>
        <li><strong>Database Maintenance:</strong> Removed outdated rows and test files to optimize performance.</li>
        <li><strong>CSS Updates:</strong> Enhanced the visual appeal and functionality of the interface.</li>
      </ul>

      <p>These changes ensure a cleaner and more efficient system as we move forward with development.</p>
    `,
  },

  {
    id: '31',
    title: 'Storing Dataset Metadata in Backend',
    author: 'Samson Oloruntola',
    date: '18th Jan. 2025',
    topic: '🗄️ Metadata Management',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Storing Dataset Metadata in Backend</h2>
      <p>We implemented functionality to store dataset metadata directly in the backend. Key highlights:</p>

      <ul>
        <li><strong>Metadata Tracking:</strong> Enhanced our ability to track datasets for seamless data management.</li>
        <li><strong>Server Integration:</strong> Streamlined the process of storing and accessing dataset metadata.</li>
      </ul>

      <p>This development is a critical step in ensuring data consistency across the platform.</p>
    `,
  },

  {
    id: '30',
    title: 'Improved Dataset Storage Path',
    author: 'Marjia Siddik',
    date: '18th Jan. 2025',
    topic: '📂 Storage Optimization',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Improved Dataset Storage Path</h2>
      <p>We revised the database storage paths to improve project structure and enhance accessibility. Key updates include:</p>

      <ul>
        <li><strong>Optimised Structure:</strong> Adjusted storage paths to align with project goals and facilitate easier access.</li>
        <li><strong>Streamlined Workflows:</strong> Reduced complexity in accessing datasets during development.</li>
      </ul>

      <p>This optimization ensures a more efficient development process and better data management practices.</p>
    `,
  },
  {
    id: '29',
    title: 'Access Control Database Implementation',
    author: 'Samson Oloruntola',
    date: '18th Jan. 2025',
    topic: '🔑 Access Control',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Access Control Database Implementation</h2>
      <p>We made significant progress in implementing access control mechanisms within the database. Key achievements include:</p>

      <ul>
        <li><strong>Role-Based Access Control:</strong> Established database structures for managing user roles and permissions.</li>
        <li><strong>Security Enhancements:</strong> Laid the groundwork for secure data operations by restricting unauthorised access.</li>
      </ul>

      <p>This update strengthens the security framework of the Oblivy platform.</p>
    `,
  },
  {
    id: '28',
    title: 'Initial ACL Backend Implementation',
    author: 'Samson Oloruntola',
    date: '18th Jan. 2025',
    topic: '🔒 Security Development',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Initial ACL Backend Implementation</h2>
      <p>We launched the first version of the Access Control List (ACL) backend. Key highlights include:</p>

      <ul>
        <li><strong>ACL Basics:</strong> Designed and implemented foundational logic for data access controls.</li>
        <li><strong>Secure Access:</strong> Established restrictions to ensure only authorised entities can access specific resources.</li>
      </ul>

      <p>This marks a significant step in securing user data and reinforcing the platform’s reliability.</p>
    `,
  },
  {
    id: '27',
    title: 'Basic Stash Class Unit Testing',
    author: 'Marjia Siddik',
    date: '13th Jan. 2025',
    topic: '🧪 Testing Infrastructure',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Basic Stash Class Unit Testing</h2>
      <p>We prioritised quality assurance by developing unit tests for the Stash class. Key activities included:</p>

      <ul>
        <li><strong>Unit Test Creation:</strong> Built comprehensive tests to validate Stash class methods.</li>
        <li><strong>Error Handling:</strong> Ensured the class functions as expected under various conditions.</li>
      </ul>

      <p>These tests are vital for maintaining the integrity and reliability of the system.</p>
    `,
  },

  {
    id: '26',
    title: 'Server File Reorganization',
    author: 'Samson Oloruntola',
    date: '13th Jan. 2025',
    topic: '⚙️ Development Organization',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Server File Reorganization</h2>
      <p>To streamline the project structure, we reorganised server files into dedicated directories. Highlights:</p>

      <ul>
        <li><strong>Directory Setup:</strong> Moved server files into organised directories for better clarity.</li>
        <li><strong>Testing Enhancements:</strong> Added template unit tests to ensure robust functionality.</li>
      </ul>

      <p>This reorganization simplifies development and debugging processes.</p>
    `,
  },

  {
    id: '25',
    title: 'Encryption Integration with Tree Class',
    author: 'Samson Oloruntola',
    date: '12th Jan. 2025',
    topic: '🔐 Encryption Enhancements',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Encryption Integration with Tree Class</h2>
      <p>We enhanced the Tree class by integrating encryption for secure operations. Key updates:</p>

      <ul>
        <li><strong>Read/Write Methods:</strong> Added encryption logic to secure data during read and write operations.</li>
        <li><strong>Data Security:</strong> Ensured data confidentiality and integrity within the Tree structure.</li>
      </ul>

      <p>This integration reinforces the platform's security and prepares it for further cryptographic advancements.</p>
    `,
  },

  {
    id: '24',
    title: 'Pytest Fixtures and Encryption Testing',
    author: 'Marjia Siddik',
    date: '12th Jan. 2025',
    topic: '🧪 Testing Improvements',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Pytest Fixtures and Encryption Testing</h2>
      <p>We implemented foundational tests for encryption functionality, focusing on quality assurance. Key achievements:</p>

      <ul>
        <li><strong>Pytest Fixtures:</strong> Introduced reusable fixtures to simplify testing workflows.</li>
        <li><strong>Encryption Tests:</strong> Validated encryption methods to ensure accuracy and reliability.</li>
      </ul>

      <p>These improvements strengthen the overall testing framework and provide confidence in our cryptographic implementations.</p>
    `,
  },

  {
    
    id: '23',
    title: 'Implementing the Encryption Class with AES-256',
    author: 'Marjia Siddik',
    date: '7th Jan. 2025',
    topic: '🔒 Encryption Development',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Implementing the Encryption Class with AES-256</h2>
      <p>Our security measures took a significant leap as we implemented the Encryption class, a vital component of the Oblivy system. This class provides robust encryption and decryption using AES-256. Here’s an overview of the work completed:</p>

      <ul>
        <li><strong>Encryption Logic:</strong> Developed the Encryption class utilizing <code>Crypto.Cipher</code> for AES-256 and <code>Crypto.Random</code> for generating secure random bytes. The methods include:
          <ul>
            <li><code>encrypt</code>: Encrypts data blocks, returning the ciphertext, nonce, and authentication tag.</li>
            <li><code>decrypt</code>: Decrypts data, verifying integrity with the authentication tag.</li>
            <li><code>re_encrypt</code>: Re-encrypts a decrypted data block for enhanced security.</li>
          </ul>
        </li>
        <li><strong>Exception Handling:</strong> Added comprehensive exception handling to manage invalid data formats and ensure resilience.</li>
        <li><strong>Template Unit Test File:</strong> Created a unit test template for the Encryption class to validate its functionality and robustness.</li>
        <li><strong>Bug Fixes:</strong> Fixed typos and improved code readability to maintain high standards of quality.</li>
      </ul>

      <p>Here’s a snippet of the implemented Encryption class:</p>
      <pre>
      <code>
      from Crypto.Cipher import AES
      from Crypto.Random import get_random_bytes
      import base64

      class Encryption():
          def __init__(self, key=None):
              self.key = key if key else get_random_bytes(32)
          
          def encrypt(self, data):
              if not isinstance(data, bytes):
                  data = data.encode()
              nonce = get_random_bytes(16)
              cipher = AES.new(self.key, AES.MODE_GCM, nonce=nonce)
              ciphertext, tag = cipher.encrypt_and_digest(data)
              return {
                  "ciphertext": base64.b64encode(ciphertext).decode(),
                  "tag": base64.b64encode(tag).decode(),
                  "nonce": base64.b64encode(nonce).decode()
              }
      </code>
      </pre>

      <p>With these advancements, the Encryption class fortifies the security layer of Oblivy, ensuring data protection and integrity. The next steps will involve rigorous testing and integration into other modules.</p>
    `
  },
  {
    id: '22',
    title: 'Unit Testing for the Tree Class and Data Block Refinements',
    author: 'Samson Oloruntola',
    date: '5th Jan. 2025',
    topic: '🧪 Testing and Debugging',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Unit Testing for the Tree Class and Data Block Refinements</h2>
      <p>Ensuring the reliability and maintainability of our Path ORAM implementation took center stage as we focused on unit testing and improving data block structures. Here’s a summary of our progress:</p>

      <ul>
        <li><strong>Tree Class Unit Testing:</strong> Developed a unit test for the Tree class, verifying that all implemented methods function as expected and identifying potential issues early.</li>
        <li><strong>Data Block Refinements:</strong> Updated the structure of data blocks to simplify debugging and improve clarity for future development and testing phases.</li>
        <li><strong>Preparations for Future Implementations:</strong> These refinements lay the groundwork for upcoming work on encryption and protocol modules, ensuring seamless integration.</li>
      </ul>

      <p>With these updates, we’re enhancing both the robustness and scalability of our implementation. Unit tests and streamlined debugging processes will be invaluable as we progress to more complex features.</p>
    `
  },
  {
    id: '21',
    title: 'Creating the Homepage Template and Upload Functionality',
    author: 'Marjia Siddik',
    date: '4th Jan. 2025',
    topic: '🎨 UI Development',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Creating the Homepage Template and Upload Functionality</h2>
      <p>Our UI development took a big step forward as we created a template homepage and tackled core functionality. These updates bring us closer to a polished and interactive user experience. Here’s what we accomplished:</p>

      <ul>
        <li><strong>Template Homepage:</strong> Designed and implemented the basic structure of the homepage, following the UI mockups for a clean and intuitive layout.</li>
        <li><strong>Upload Button Functionality:</strong> Added functionality to the “Upload” button, enabling it to open the user’s desktop folder for file selection.</li>
        <li><strong>Bug Fixes:</strong> Resolved an issue encountered during the initial setup of <a href="https://d3js.org/">D3.js</a> and <a href="https://www.chartjs.org/">Chart.js</a>, ensuring smooth visualization operations.</li>
      </ul>

      <p>These updates enhance both the visual appeal and interactivity of our project’s interface, setting the stage for further UI development and testing.</p>
    `
  },

  {
    id: '20',
    title: 'Advancing Tree Logic and Stash Implementation',
    author: 'Samson Oloruntola',
    date: '4th Jan. 2025',
    topic: '🔒 ORAM Feature Development',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Advancing Tree Logic and Stash Implementation</h2>
      <p>The Path ORAM implementation continues to evolve as we refine its core components and enhance its functionality. Here’s a breakdown of the progress made:</p>

      <ul>
        <li><strong>Stash Class:</strong> Completed the implementation of the stash class, ensuring efficient data handling for temporarily stored blocks.</li>
        <li><strong>Tree Logic:</strong> Made significant advancements in the tree structure, focusing on the data structure of blocks stored inside buckets. This improvement lays the groundwork for robust data storage and retrieval.</li>
        <li><strong>Debugging and Visualization:</strong> Developed a debugging method to visualize the tree, a critical tool for testing and debugging the implementation.</li>
        <li><strong>Helper Methods:</strong> Implemented a <code>get_path</code> method to assist the <code>read_path</code> functionality, streamlining the block retrieval process.</li>
        <li><strong>Position Map:</strong> Initialised a position map for assigning requested blocks to random leaves, a key component of the ORAM logic.</li>
      </ul>

      <p>These developments bring us closer to a fully functional Path ORAM implementation, with a strong focus on efficiency, security, and reliability. The visualization tools and helper methods will prove invaluable in the next stages of testing and refinement.</p>
    `
  },

  {
    id: '19',
    title: 'Organizing and Expanding Path ORAM Modules',
    author: 'Samson Oloruntola',
    date: '3rd Jan. 2025',
    topic: '🔒 ORAM Module Development',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Organizing and Expanding Path ORAM Modules</h2>
      <p>The development of Path ORAM took a significant leap forward as we modularised its directory structure and began implementing foundational methods. This step enhances code organization and sets the stage for more sophisticated features. Here’s what we achieved:</p>

      <ul>
        <li><strong>Module Separation:</strong> Reorganised the Path ORAM structure into distinct modules:
          <ul>
            <li><code>protocol.py</code>: Acts as the main file runner, orchestrating the overall functionality.</li>
            <li><code>encryption.py</code>: Dedicated to AES-256 encryption implementation.</li>
            <li><code>tree.py</code>: Handles the binary tree structure essential for Path ORAM.</li>
            <li><code>stash.py</code>: Manages the stash implementation to support secure data operations.</li>
          </ul>
        </li>
        <li><strong>Template Methods:</strong> Added placeholder methods in each module for future functionality and clear development pathways.</li>
        <li><strong>Tree Module Implementation:</strong> Began work on <code>tree.py</code>, adding methods for:
          <ul>
            <li>Adding nodes and edges to the binary tree.</li>
            <li>Reading and writing paths.</li>
            <li>Defining a constant for bucket capacity.</li>
          </ul>
        </li>
      </ul>

      <p>With this reorganization, the Path ORAM directory is now better equipped for future expansions and feature implementations.</p>
    `
  },
  {
    id: '18',
    title: 'Building the Path ORAM Directory Structure',
    author: 'Samson Oloruntola',
    date: '2nd Jan. 2025',
    topic: '🔒 ORAM Implementation',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Building the Path ORAM Directory Structure</h2>
      <p>We’ve taken a crucial step in our Oblivy project by initiating the development of the Path ORAM directory structure. This serves as the backbone for secure data operations within the system. Here’s an overview of what we accomplished:</p>

      <ul>
        <li><strong>Directory Structure:</strong> Designed and organised the basic framework for the Path ORAM directory structure, setting a foundation for secure data access and storage.</li>
        <li><strong>Main Runner File:</strong> Created the main runner file, <code>path_oram.py</code>, to handle core operations and future functionalities.</li>
        <li><strong>Template Methods:</strong> Implemented placeholder methods for essential Path ORAM operations, including <code>insertion</code>, <code>retrieval</code>, <code>reshuffle</code>, and <code>path_retrieval</code>. These will guide the development of robust functionality in subsequent phases.</li>
      </ul>

      <p>With these steps, we’ve laid the groundwork for implementing Path ORAM in Oblivy, ensuring data security and efficiency in future iterations. Stay tuned for updates as we bring this essential feature to life!</p>
    `
  },
  {
    id: '17',
    title: 'Setting Up the Database',
    author: 'Marjia Siddik',
    date: '1st Jan. 2025',
    topic: '💾 Database Integration',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Setting Up the Database</h2>
      <p>Establishing a solid database foundation is crucial for any project, and that’s exactly what we focused on for Oblivy. With this milestone, we’re ensuring reliable data storage and smooth CRUD operations. Here’s what we achieved:</p>

      <ul>
        <li><strong>Database Framework:</strong> Implemented the database using <a href="https://www.sqlite.org/">SQLite3</a>, a lightweight yet powerful database solution.</li>
        <li><strong>Integration with Python Modules:</strong> Integrated SQLite3 with Python to facilitate seamless communication and database operations.</li>
        <li><strong>CRUD Functionality:</strong> Set up Create, Read, Update, and Delete (CRUD) operations, laying the groundwork for managing user and system data efficiently.</li>
      </ul>

      <p>This database setup marks another milestone in the Oblivy development journey, ensuring a strong backend that supports our growing application needs. We’re excited to build further upon this foundation!</p>
    `
  },
  {
    id: '16',
    title: 'Setting Up the Backend and Frontend',
    author: 'Samson Oloruntola',
    date: '31st Dec. 2024',
    topic: '⚙️ Development Setup',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Setting Up the Backend and Frontend</h2>
      <p>We've setup the project in order to begin development, here's an overview on what we have done:</p>

      <h3>Frontend Framework and Dependencies</h3>
      <ul>
        <li><strong>Framework:</strong> We established the frontend using <a href="https://reactjs.org/">React</a>, ensuring a robust and scalable foundation.</li>
        <li><strong>Visualization Tools:</strong> Integrated <a href="https://d3js.org/">D3.js</a> and <a href="https://www.chartjs.org/">Chart.js</a> to enable metrics feedback and frontend tree visualization.</li>
      </ul>

      <h3>Backend Framework and Tools</h3>
      <ul>
        <li><strong>Framework:</strong> The backend setup leveraged <a href="https://flask.palletsprojects.com/">Flask</a>, providing flexibility and simplicity for rapid development.</li>
        <li><strong>Modules:</strong> We incorporated essential modules such as <a href="https://docs.pytest.org/">Pytest</a> for testing, <a href="https://networkx.org/">NetworkX</a> for graph operations, and <a href="https://www.pycryptodome.org/">PyCryptodome</a> for cryptographic functionalities.</li>
      </ul>

      <h3>Testing Frameworks</h3>
      <ul>
        <li><strong>Frontend:</strong> Integrated <a href="https://jestjs.io/">Jest</a> for frontend testing to ensure code reliability and performance.</li>
        <li><strong>Backend:</strong> Employed Pytest for backend unit tests, fostering high-quality assurance from the start.</li>
      </ul>

      <p>These steps have equipped us with the necessary tools and frameworks to seamlessly move forward with the development phase, ensuring our codebase is well-structured and ready for future iterations.</p>
    `
  },

  {
    id: '15',
    title: 'Finalizing the Functional Specification and Submission',
    author: 'Marjia Siddik',
    date: '25th Nov. 2024',
    topic: '📋 Functional Specification Milestone',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Finalizing the Functional Specification</h2>
      <p>Today marks a major milestone in the Oblivy project—we finalised our functional specification draft and received the go-ahead from our supervisor! This was a critical step in solidifying our project direction and ensuring alignment with the original goals.</p>
      
      <ul>
        <li><strong>Supervisor Approval:</strong> After several iterations and feedback cycles, our supervisor gave the thumbs up, confirming that the functional specification meets all expectations and covers necessary details.</li>
        <li><strong>Markdown Submission:</strong> The finalised document was formatted in markdown for easy readability and version control, then submitted to our GitLab repository for future reference and collaboration.</li>
      </ul>
      
      <p>With the functional specification now complete and approved, we’re ready to dive fully into development. This submission marks the end of one phase and the beginning of an exciting journey to bring Oblivy to life!</p>
    `
  },  
  {
    id: '14',
    title: 'Mapping and Testing: Preparing Oblivy for Robust Development',
    author: 'Marjia Siddik',
    date: '24th Nov. 2024',
    topic: '📋 Functional Specification',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Mapping and Testing Oblivy</h2>
      <p>As we progress in the development phase, our focus has shifted to detailed planning and testing to ensure a smooth implementation for Oblivy. Here’s what we accomplished today:</p>
      
      <ul>
        <li><strong>Testing Ideas:</strong> We evaluated various testing approaches to ensure Oblivy’s reliability and performance, including:
          <ul>
            <li><strong>Stress Testing:</strong> To see how the system handles extreme conditions.</li>
            <li><strong>Performance Testing:</strong> To measure speed and responsiveness under typical loads.</li>
            <li><strong>Unit Testing:</strong> To validate individual components work as intended.</li>
            <li><strong>Integration Testing:</strong> To ensure seamless interaction between different system modules.</li>
          </ul>
        </li>
        <li><strong>Deployment Diagram:</strong> Detailed how Oblivy will be hosted and its deployment strategy, ensuring clarity in infrastructure planning.</li>
        <li><strong>Use Case Diagram:</strong> Illustrated how users will interact with Oblivy, from dataset upload to encrypted file retrieval.</li>
        <li><strong>Data Validation Flowchart:</strong> Mapped out the steps for ensuring input data meets all required criteria.</li>
        <li><strong>Data Flow Diagram:</strong> Highlighted how information moves through Oblivy’s system, from input to output.</li>
        <li><strong>System Interaction Sequence Diagram:</strong> Provided a step-by-step view of the interactions between system components during a typical operation.</li>
        <li><strong>GANTT Chart:</strong> Created a timeline to track tasks and ensure we stay on schedule for delivery.</li>
      </ul>
      
      <p>With these tools in place, we’re confident that Oblivy will meet its functional and performance goals. The diagrams and testing plans ensure a strong foundation for both development and evaluation.</p>
    `
  },  
  {
    id: '13',
    title: 'From Lengthy Documents to Clear Diagrams: Redefining the Functional Specification',
    author: 'Samson Oloruntola',
    date: '23rd Nov. 2024',
    topic: '📋 Functional Specification',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Redefining the Functional Specification</h2>
      <p>We’ve taken the functional specification to the next level, turning it into a concise yet detailed version. This transformation not only streamlines our project documentation but also provides a clearer vision for development. Here’s what we’ve accomplished:</p>
      
      <ul>
        <li><strong>High-Level System Architecture Diagram:</strong> We created a visual representation of how the system’s components will interact, ensuring everyone has a clear understanding of Oblivy’s structure.</li>
        <li><strong>Data Processing Flowchart:</strong> A step-by-step diagram illustrating how data flows through the system, from upload to encryption and output.</li>
        <li><strong>UI Mockups:</strong> Designed interface layouts for key pages, including the hero page, metrics dashboard, file feedback, and dataset download pages. These mockups give us a clear direction for frontend development.</li>
        <li><strong>Deployment Diagram:</strong> Visualised how the system will be deployed, detailing server configurations and hosting requirements.</li>
      </ul>
      
      <p>With these diagrams and mockups, we’ve replaced lengthy text with visuals that communicate our system’s design more effectively. This shift not only helps our team stay aligned but also sets a strong foundation for the implementation phase.</p>
    `
  },  
  {
    id: '12',
    title: 'Refining the Functional Specification After Supervisor Feedback',
    author: 'Samson Oloruntola',
    date: '21st Nov. 2024',
    topic: '📋 Functional Specification Update',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Refining the Functional Specification</h2>
      <p>After our first supervisor meeting, we received valuable feedback on our functional specification. While it was comprehensive, it was also overly detailed and added unnecessary complexity to the project. Simplifying it has not only reduced our workload but has also made our goals more achievable.</p>
      
      <ul>
        <li><strong>Streamlining the Document:</strong> We shortened the specification to focus on the core functionalities of Oblivy, ensuring it’s clear and concise.</li>
        <li><strong>Focus on Usability:</strong> By cutting down on redundant details, we can now prioritize implementing features that matter most to the end user, such as seamless encryption and intuitive interaction.</li>
        <li><strong>Efficient Development:</strong> The revised specification aligns better with our timeline, allowing us to allocate resources effectively without compromising on quality.</li>
      </ul>
      
      <p>This adjustment has set a clearer path for the development phase, and we’re confident it will help us deliver a polished and functional version of Oblivy.</p>
    `
  },  
  {
    id: '11',
    title: 'Redefining Oblivy: From Visualization Tool to Functional System',
    author: 'Marjia Siddik',
    date: '20th Nov. 2024',
    topic: '🔄 Project Evolution',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Transforming Oblivy into a Functional System</h2>
      <p>We’ve made a significant pivot in the project’s direction! Initially, Oblivy was planned as a visualization tool to demonstrate the Path ORAM protocol. However, we’ve now reimagined it as a fully functional system that provides real-world utility to users.</p>
      
      <ul>
        <li><strong>User Dataset Upload:</strong> Oblivy’s frontend will now allow users to upload their own datasets, providing a seamless way for users to interact with the system.</li>
        <li><strong>Encryption Process:</strong> Uploaded datasets will be encrypted using the Path ORAM protocol alongside AES encryption, ensuring both access pattern obfuscation and robust data security.</li>
        <li><strong>File Return:</strong> After processing, Oblivy will return an encrypted version of the user’s dataset, delivering a tangible output that highlights the system’s functionality.</li>
      </ul>
      
      <p>This change not only increases the practicality of Oblivy but also challenges us to expand our development goals and refine the system’s architecture. We’re excited to see this new direction take shape!</p>
    `
  },  
  {
    id: '10',
    title: 'Defining Software Attributes and Organizing Specific Requirements for Oblivy',
    author: 'Samson Oloruntola',
    date: '15th Nov. 2024',
    topic: '📋 Functional Specification',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Software Attributes and Organizing Specific Requirements</h2>
<p>Outlined core software attributes and established an organised structure for Oblivy’s requirements documentation:</p>

<ul>
    <li><strong>Defining Software System Attributes:</strong> Specified key attributes including reliability, availability, security, and maintainability to ensure Oblivy meets performance and operational standards throughout its lifecycle.</li> 
    <li><strong>Organizing Specific Requirements:</strong> Structured Oblivy’s requirements by system elements like system mode, user class, and functional hierarchy to enhance readability and support a streamlined development process.</li> 
    <li><strong>Establishing Requirement Categories:</strong> Used categories like objects, and features (while clarifying why we didn't use others like stimulus and responses) to clarify each requirement’s purpose and relationships, ensuring developers have a clear and detailed blueprint for implementation.</li>
</ul>`

  },
  {
    id: '9',
    title: 'Setting Performance Metrics, Database Needs, and Design Standards for Oblivy',
    author: 'Marjia Siddik',
    date: '14th Nov. 2024',
    topic: '📋 Functional Specification',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Performance Metrics, Database Needs, and Design Standards</h2>
<p>Outlined specific performance expectations, database structure, and design standards to support Oblivy's functionality and user experience goals:</p>

<ul>
    <li><strong>Establishing Performance Benchmarks:</strong> Defined both static and dynamic performance requirements to ensure Oblivy operates efficiently, meeting responsiveness and processing targets during peak simulation loads.</li> 
    <li><strong>Logical Database Structure:</strong> Detailed the structure and access protocols for Oblivy's internal database to manage data blocks, paths, and metrics while supporting real-time simulation needs.</li> 
    <li><strong>Design Constraints and Standards Compliance:</strong> Set clear design limitations and aligned with relevant standards, such as accessibility and security, to ensure Oblivy is both robust and compatible across user environments.</li>
</ul>`

  },
  {
    id: '8',
    title: 'Establishing External Interfaces and Core System Functions for Oblivy',
    author: 'Marjia Siddik',
    date: '13th Nov. 2024',
    topic: '📋 Functional Specification',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>External Interfaces and Core System Functions</h2>
<p>We've pinpointed the key external interfaces and primary system functions necessary for Oblivy’s seamless operation and user interaction:</p>

<ul>
  <li><strong>Defining External System Interfaces:</strong> We outlined necessary connections and integrations, ensuring Oblivy’s internal components work cohesively without relying on external systems.</li> 
  <li><strong>Detailing Core System Functions:</strong> Key functions like data retrieval, visualization, and real-time metric updates were mapped out to ensure each element supports the Path ORAM simulation effectively.</li> 
  <li><strong>Structuring Functional Requirements for Clarity:</strong> Organised each function’s specific requirements to streamline the development process, making it easier to implement and test each feature accurately.</li>
</ul>`

  },
  {
    id: '7',
    title: 'Defining Core Aspects of Development',
    author: 'Samson Oloruntola',
    date: '12th Nov. 2024',
    topic: '📋 Functional Specification',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Core Aspects of Developement for Oblivy</h2>
<p>To ensure a well-rounded approach to Oblivy's design and functionality, we clarified key areas that impact the project's scope and requirements:</p>

<ul>
  <li><strong>Outlining Product Functions:</strong> We specified Oblivy’s essential functions, focusing on the interactive Path ORAM simulation, data visualization, and performance metrics to deliver a valuable educational tool.</li> 
  <li><strong>Understanding User Characteristics:</strong> We analysed our intended user base—students, researchers, and privacy enthusiasts—to design an interface that balances technical depth with accessibility.</li> 
  <li><strong>Clarifying Assumptions and Dependencies:</strong> Documented assumptions around supported web technologies and user devices to guide development, ensuring that our requirements align with expected user environments.</li> <li><strong>Apportioning Requirements for Manageability:</strong> We allocated essential features for the initial version while identifying advanced functionalities for potential future iterations, keeping development feasible within project timelines.</li>
</ul>`

  },
  {
    id: '6',
    title: 'Refining System Requirements and Focusing on Core Essentials',
    author: 'Samson Oloruntola',
    date: '10th Nov. 2024',
    topic: '📋 Functional Specification',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Getting into the Requirements and Essentials</h2>
<p>To streamline Oblivy's requirements and maintain focus on its core educational functions, we refined the document by removing certain non-essential components.</p>

<ul>
  <li><strong>Excluding the Block Diagram:</strong> We decided to remove the block diagram to keep our visuals clear and focused on only the most relevant elements, ensuring straightforward documentation.</li> 
  <li><strong>Refining Interface Requirements:</strong> Removed communication interfaces, memory constraints, and site adaptation requirements, as these do not impact Oblivy’s functionality in a standalone, web-based environment.</li> 
  <li><strong>Streamlining Operational Focus:</strong> By excluding generic operations requirements, we concentrated on Oblivy’s interactive educational features, helping developers stay focused on core functions without unnecessary details.</li>
</ul>`

  },
  {
    id: '5',
    title: 'Continuing on with Section 2 of the Functional Specification',
    author: 'Marjia Siddik',
    date: '7th Nov. 2024',
    topic: '📋 Functional Specification',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Continuing on Section 2 of the Functional Spec</h2>
<p>We are focused on refining Oblivy's design by identifying key system and software interfaces, re-evaluating the block diagram for clarity, and optimizing interface requirements to enhance user experience and usability.</p>

<ul>
  <li><strong>Identifying System & Software Interfaces:</strong> We’re mapping out the necessary interfaces within Oblivy to ensure smooth interactions between different system components. This involves pinpointing all points of interaction to make sure each element communicates effectively and efficiently.</li>

  <li><strong>Re-evaluating the Block Diagram:</strong> Given concerns about the diagram's complexity, we’re revisiting our initial design to simplify and clarify the layout. This will help keep the architecture transparent, making it easier for the development team to maintain.</li>

  <li><strong>Defining Interface Requirements & Optimizations:</strong> To make Oblivy as user-friendly as possible, we’re defining clear interface requirements and optimizing each for usability. These refinements will help ensure that the system is intuitive, reducing learning time for users and improving overall accessibility.</li>
</ul>`

  },
  {
    id: '4',
    title: 'Working on Section 2 of the Functional Specification',
    author: 'Marjia Siddik',
    date: '6th Nov. 2024',
    topic: '📋 Functional Specification',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
      <h2>Working on Section 2 of the Functional Spec</h2>
<p>As we develop Oblivy, we are focused on building a comprehensive functional specification. This includes the creation of a block diagram, analyzing similar software and products, and detailing section 2.1 of the functional specification, which defines the product perspective.</p>

<ul>
  <li><strong>Creation of the Block Diagram:</strong> We’re designing a block diagram to visually map out Oblivy’s system architecture and the interactions between components. This diagram will provide a clear view of how different parts of the software work together, ensuring a well-organised design as we proceed.</li>

  <li><strong>Competitor and Product Analysis:</strong> To refine our design and align with industry standards, we’re researching similar software products. This analysis will help us identify best practices, gain insights into user expectations, and ensure Oblivy meets a high standard of usability and functionality.</li>

  <li><strong>Functional Specification (Product Perspective):</strong> Section 2.1 of the functional specification outlines the product perspective, defining Oblivy’s purpose and target audience. By clarifying the product’s role as a standalone simulation tool, we’re setting a foundation for development and feature prioritisation to meet user needs effectively.</li>
</ul>`

  },
  {
    id: '3',
    title: 'First Steps Into The Functional Specification!',
    author: 'Samson Oloruntola',
    date: '5th Nov. 2024',
    topic: '📋 Functional Specification',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Starting The Functional Spec</h2>
<p>With the proposal behind us, we’re now fully immersed in developing the functional specification for Oblivy. This stage is where we bring structure to our ideas, diving into the details of what the software should do and how everything will fit together.</p>

<ul>
  <li><strong>Standalone Simulation:</strong> Oblivy, as a standalone simulation project brought about a major consideration, which is whether to allow users the option to input custom data for personalised visualizations or to keep it straightforward with predefined choices. This decision will impact both user experience and system complexity, so we’re carefully weighing the pros and cons.</li>
  
  <li><strong>System Interactions:</strong> To ensure clarity, we’re developing a block diagram to show how different parts of the system interact. Even though Oblivy operates independently, a visual overview of its architecture helps us map out each component’s role and connections, keeping the design organised as we move forward.</li>
  
  <li><strong>Constraints and Limitations:</strong> We’re also considering potential constraints that could shape the project. Factors like data handling limitations or technical requirements may influence user interactions and the system's overall functionality.</li>
</ul>
    `
  },
  {
    id: '2',
    title: 'Submitting The Proposal: Race Against Time',
    author: 'Samson Oloruntola',
    date: '14th Oct. 2024',
    topic: '📄 Project Proposal',
    authorImage: require('../images/Samson.jpeg'),
    content: `
      <h2>Proposal Summary</h2>
      <p>Submitting the proposal felt like a race against time, but we finally got it done! Choosing our project, Oblivy, took some serious brainstorming. We wanted to build something impactful, and the idea of creating a privacy-preserving data access system using Path ORAM really resonated with us.

      <h3>What Went Into the Proposal:</h3>
      <ul>
        <li><strong>Defining Oblivy’s Goals:</strong> We started by outlining the main objectives of Oblivy. Our focus was clear: secure data access that keeps sensitive information safe from being inferred through access patterns.</li>
        <li><strong>Choosing the Right Tech Stack:</strong> After careful consideration, we decided on a tech stack that could handle both functionality and visualization. Python and Flask would drive the backend, React for a smooth frontend experience, and D3.js to visualize the Path ORAM protocol in action. This combination gives us the flexibility we need to show how secure data access can be achieved.</li>
      </ul>

      <p>With the proposal now submitted, we’re shifting gears toward the next steps: crafting the functional specs. Exciting times ahead as Oblivy starts to take shape!</p>

    `
  },
  {
    id: '1',
    title: 'Trying To Plan The Project',
    author: 'Marjia Siddik',
    date: '8th Oct. 2024',
    topic: '📄 Project Proposal',
    authorImage: require('../images/Marjia.jpeg'),
    content: `
    <h2>Planning the Project</h2>
    <p>Who knew picking a project idea could be such a journey? We started by exploring different ideas from our supervisors and digging through past projects focused on AI ethics and data protection. After some back-and-forth, we landed on “Oblivy.” It’s a project all about protecting privacy with Path ORAM, tackling issues like access pattern leakage—super relevant for sensitive areas like healthcare.</p>

      <h3>How We’re Tackling It:</h3>
      <ol>
        <li><strong>Breaking It Down:</strong> We split the project into key areas: implementing the ORAM protocol, setting up encryption, and creating visuals. This way, each piece gets the attention it needs.</li>
        <li><strong>Setting Deadlines That Make Sense:</strong> We lined up tasks based on their complexity. We’re diving into the heavy backend work first, saving the fun visuals for later once the foundation is set.</li>
        <li><strong>Staying in Sync:</strong> Regular check-ins are keeping us on track. We each have our own areas to focus on, with some shared tasks like setting up the datasets and testing to bring it all together smoothly.</li>
      </ol>

    <p>Now, we’re ready to jump into building this thing! Each step gets us closer to our goal—a solid, privacy-centered system that really showcases what Path ORAM can do.</p>

    `
  },
];
