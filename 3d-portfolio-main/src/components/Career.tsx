import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&amp;</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Global Quest Technologies (GQT) · Bengaluru</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Feb 2026 &ndash; Apr 2026. Conducted in-depth exploratory data analysis
              (EDA) on 10+ enterprise business datasets using Python and SQL to uncover
              trends and optimize business operations. Built 5+ interactive dashboards
              in Power BI and Tableau, automating departmental reporting workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Virtual Intern</h4>
                <h5>Deloitte (Forage) · Simulation</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Mar 2026. Completed end-to-end analytics simulations covering data hygiene
              auditing, missing value imputation, dimensional data modeling, and interactive
              visualization across 3 business scenarios to support simulated executive decisions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Power BI Intern</h4>
                <h5>Cognifyz Technologies · Remote</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Jun 2025 &ndash; Jul 2025. Engineered 4+ interactive Power BI dashboards
              integrating data from multiple sources. Standardized data cleaning pipelines
              across 3 projects using Power Query to eliminate manual reporting errors
              and improve data consistency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Robotics &amp; AI</h4>
                <h5>JNNCE · Shivamogga (CGPA: 8.73)</h5>
              </div>
              <h3>2022&ndash;26</h3>
            </div>
            <p>
              Academic Merit Award recipient with 8.73 CGPA. Specialized in data
              structures, machine vision, AI algorithms, and control systems. Completed
              applied engineering projects in computer vision defect detection and process
              optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;