// React And Hooks
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// React And Hooks

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
// Font Awesome

// Extra Library
import data from "./Data";
import code from "../imgs/code.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
// Extra Library

// Pages Section
import Fullinfo from "./Fullinfo";
import Footer from "./Footer";
import Top from "./TopCompanies";
// Pages Section

const Details = () => {
  // Course details
  const history = useHistory();
  const url = history.location.pathname;
  const [courses, setCourses] = useState(data);
  const [course, setCourse] = useState(null);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    const currentCourse = courses.filter(
      (courseState) => courseState.url === url
    );
    setCourse(currentCourse[0]);
  }, [courses, url]);
  // Course details

  // Loading
  const [loading, setLoading] = useState(true);
  const [bg, setBg] = useState(true);
  const styles = {
    background: bg ? "" : "rgba(0,0,0,0.3)",
  };
  useEffect(() => {
    setLoading(true);
    setBg(true);
    setTimeout(() => {
      setLoading(false);
      setBg(false);
    }, 800);
  }, []);
  // Loading

  return (
    <>
      {course && (
        <motion.div
          className="coursedetails"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          {loading ? (
            <div style={styles} className="container">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          ) : (
            <motion.div
              style={styles}
              className="course-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <div className="details">
                <div className="images">
                  <img src={course.devImg} alt="laptop" />
                  <img src={code} alt="laptop" />
                </div>
                <h1>
                  <FontAwesomeIcon className="info-icon" icon={faLaptopCode} />
                  {course.name2}
                </h1>
              </div>
              {course.fullInfos.map((info) => {
                return <Fullinfo info={info} key={course.id} />;
              })}
              <div className="promises">
                <div data-aos="zoom-in" className="promise">
                  <h2>
                    OUR GRADUATES WORK <span>AT THESE COMPANIES</span>
                    <span>and 300+ more great tech companies! </span>
                  </h2>
                </div>
                <div data-aos="zoom-in" className="promise">
                  <h3>
                    We teach and employ globally. Currently, we have students,
                    graduates, and colleagues in
                    <span>
                      Europe, Asia, Africa, the USA, Canada, and Australia.
                    </span>
                  </h3>
                </div>
              </div>
              <Top />
              <Footer />
            </motion.div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Details;
