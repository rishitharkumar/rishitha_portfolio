import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:rishithar282004@gmail.com"
                data-cursor="disable"
              >
                rishithar282004@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+918904355318" data-cursor="disable">
                +91 8904355318
              </a>
            </p>
            <p>Shivamogga, Karnataka, India</p>

            <h4>Education</h4>
            <p>
              <strong>B.E. Robotics &amp; AI Engineering</strong>
              <br />
              Jawaharlal Nehru New College of Engineering (2022–2026) · CGPA: 8.73
            </p>
            <p>
              <strong>PUC (Class XII Science / PCMB)</strong>
              <br />
              Adhichunchanagiri Independent PU College (2020–2022) · 91.83%
            </p>
            <p>
              <strong>SSLC (Class X)</strong>
              <br />
              Saandeepani English High School (2017–2020) · 90.40%
            </p>
          </div>

          <div className="contact-box">
            <h4>Social &amp; Links</h4>
            <a
              href="https://linkedin.com/in/rishitha-r-kumar"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://github.com/rishitharkumar"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="/Rishitha_R_Kumar_Resume.pdf"
              download="Rishitha_R_Kumar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Download Resume (PDF) <MdArrowOutward />
            </a>
            <a
              href="/Rishitha_R_Kumar_Resume.docx"
              download="Rishitha_R_Kumar_Resume.docx"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Download Resume (DOCX) <MdArrowOutward />
            </a>

            <h4 style={{ marginTop: "24px" }}>Certifications &amp; Honors</h4>
            <p style={{ fontSize: "14px", lineHeight: "1.6", opacity: 0.85 }}>
              • Academic Merit Award
              <br />
              • IBM Data Analytics with Python
              <br />
              • Deloitte Data Analyst Virtual Internship
              <br />
              • Cognifyz Technologies Power BI Internship
              <br />
              • Global Quest Technologies Internship
              <br />
              • Power BI: Data &amp; Analytics Workshop
            </p>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> for <span>Rishitha R Kumar</span>
            </h2>
            <p style={{ marginTop: "12px", opacity: 0.7, fontSize: "14px" }}>
              Aspiring Data Analyst &amp; Business Intelligence Specialist
            </p>
            <h5>
              <MdCopyright /> 2026 Rishitha R Kumar
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;