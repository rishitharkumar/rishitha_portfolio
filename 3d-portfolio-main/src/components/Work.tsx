import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Hospital Patient Analytics",
    category: "Healthcare Business Intelligence",
    tools: "Power BI, Advanced DAX, Power Query ETL, 55,500+ Records",
    image: "/images/hospital_analytics.png",
    link: "https://github.com/rishitharkumar",
  },
  {
    title: "Customer Sales Analytics",
    category: "Commercial Sales Intelligence",
    tools: "Power BI, Dynamic Cross-Filtering, Ribbon & KPI Charts",
    image: "/images/sales_analytics.png",
    link: "https://github.com/rishitharkumar",
  },
  {
    title: "Google Play Store Analytics",
    category: "Mobile Market Intelligence",
    tools: "Power BI, Python, 10,000+ Applications, Treemaps & Funnels",
    image: "/images/playstore_analytics.png",
    link: "https://github.com/rishitharkumar",
  },
  {
    title: "AI Robotics Vision Defect Detection",
    category: "Industrial Computer Vision",
    tools: "Python, OpenCV, Automated Inspection, Contour Filtering",
    image: "/images/robotics_vision.png",
    link: "https://github.com/rishitharkumar",
  },
  {
    title: "Forced Convection Drying System",
    category: "Applied Robotics & Thermal Systems",
    tools: "Thermal Engineering, Sensor Gradients, Process Analytics",
    image: "/images/drying_system.png",
    link: "https://github.com/rishitharkumar",
  },
  {
    title: "Agricultural Image Processing",
    category: "AgriTech Vision & Automation",
    tools: "Python, OpenCV, Foliage Pest Detection, HSV Segmentation",
    image: "/images/agri_pest.png",
    link: "https://github.com/rishitharkumar",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Technologies &amp; Architecture</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;