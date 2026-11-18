import "./styles/SkillsCertifications.css";
import {
  MdOutlineBarChart,
  MdOutlineCode,
  MdOutlineAnalytics,
  MdOutlineAutoAwesome,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";

const skillCategories = [
  {
    icon: <MdOutlineBarChart className="skill-card-icon" style={{ color: "#38bdf8" }} />,
    title: "BI & Data Visualization",
    skills: ["Power BI", "DAX Measures", "Power Query (M)", "Tableau", "Advanced MS Excel", "Data Storytelling"],
  },
  {
    icon: <MdOutlineCode className="skill-card-icon" style={{ color: "#34d399" }} />,
    title: "Programming & Databases",
    skills: ["Python", "SQL (MySQL)", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Window Functions"],
  },
  {
    icon: <MdOutlineAnalytics className="skill-card-icon" style={{ color: "#fbbf24" }} />,
    title: "Data Analytics & Engineering",
    skills: ["Exploratory Data Analysis (EDA)", "Star & Snowflake Schemas", "ETL Pipelines", "Data Cleaning", "Statistical Modeling"],
  },
  {
    icon: <MdOutlineAutoAwesome className="skill-card-icon" style={{ color: "#c084fc" }} />,
    title: "AI & Computer Vision",
    skills: ["Generative AI", "Natural Language Processing (NLP)", "Computer Vision", "OpenCV", "Image Processing"],
  },
  {
    icon: <MdOutlineMiscellaneousServices className="skill-card-icon" style={{ color: "#f87171" }} />,
    title: "IT Support & Engineering Tools",
    skills: ["ServiceNow (L2 & L3 Support)", "Incident & SLA Tracking", "Git & GitHub", "Fusion 360 CAD", "PLC & Control Basics"],
  },
];

const certifications = [
  {
    title: "Academic Merit Award",
    issuer: "Jawaharlal Nehru New College of Engineering",
    desc: "Awarded for exceptional academic excellence in Robotics & AI Engineering (CGPA 8.73).",
  },
  {
    title: "IBM Data Analytics with Python",
    issuer: "IBM Credential",
    desc: "Rigorous coursework and project covering data wrangling, exploratory data analysis, and modeling.",
  },
  {
    title: "Power BI: Data & Analytics Workshop",
    issuer: "Industry Workshop Certification",
    desc: "Hands-on data modeling, DAX measures, relational schemas, and executive dashboard design.",
  },
  {
    title: "Deloitte Data Analyst Virtual Internship",
    issuer: "Deloitte (Forage)",
    desc: "End-to-end data auditing, modeling, and visualization simulations across 3 business scenarios.",
  },
  {
    title: "Power BI Internship Certification",
    issuer: "Cognifyz Technologies",
    desc: "Engineered 4+ interactive dashboards and standardized multi-source ETL pipelines.",
  },
  {
    title: "Data Analyst Internship Certificate",
    issuer: "Global Quest Technologies (GQT)",
    desc: "Conducted EDA on 10+ business datasets using Python and SQL; deployed 5+ BI dashboards.",
  },
];

const SkillsCertifications = () => {
  return (
    <div className="skills-cert-section section-container" id="skills-overview">
      <h2>
        Core <span>Competencies</span>
      </h2>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-card-header">
              {cat.icon}
              <h3>{cat.title}</h3>
            </div>
            <div className="skill-badge-list">
              {cat.skills.map((skill, sIdx) => (
                <span className="skill-badge" key={sIdx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="cert-section-title">Verified Certifications &amp; Honors</h3>
      <div className="cert-grid-cards">
        {certifications.map((cert, cIdx) => (
          <div className="cert-card" key={cIdx}>
            <h4>{cert.title}</h4>
            <p style={{ color: "var(--accentColor)", fontWeight: 500, marginBottom: "4px" }}>
              {cert.issuer}
            </p>
            <p>{cert.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCertifications;