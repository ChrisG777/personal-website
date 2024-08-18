import React from "react";
import styles from "./AboutMe.module.css";
import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */

const AboutMe = () => {
  return (
    <div className={`my-5 ${styles.AboutMe}`} id="AboutMe">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex flex-column">
            <Image
              className={`${styles.pfp}`}
              alt="card image"
              src="/Newer_pfp.jpg"
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            ></Image>
            <div className="d-flex justify-content-center px-2">
              <a href="https://www.facebook.com/chris.ge.1088">
                <i className={`bi bi-facebook ${styles.icon}`}></i>
              </a>
              <a href="https://github.com/ChrisG777">
                <i className={`bi bi-github ${styles.icon}`}></i>
              </a>
              <a href="https://www.linkedin.com/in/chris-ge-1274601b0/">
                <i className={`bi bi-linkedin ${styles.icon}`}></i>
              </a>
              <a href="https://www.instagram.com/chrisge05/">
                <i className={`bi bi-instagram ${styles.icon}`}></i>
              </a>
              <a href="mailto:cge7@mit.edu">
                <i className={`bi bi-envelope ${styles.icon}`}></i>
              </a>
            </div>
          </div>
          <div className="col-md-8 my-4" style={{ color: "#B8B8B8" }}>
            <h2>Chris Ge</h2>
            <p className="h6">MIT '27, Software Developer, CS Researcher</p>
            <p className="mt-4">
              I'm a sophomore at MIT pursuing a double major in Computer Science
              and Mathematics. My interests include machine learning (NLP) and
              software development (backend). Recently in summer 2024, I was a
              software engineering intern at{" "}
              <a
                href="https://www.intersystems.com/"
                className={`${styles.link}`}
              >
                InterSystems.
              </a>{" "}
            </p>

            <p>
              <strong>Achievements: </strong> 2x USAMO{" "}
              <span style={{ color: "#CD7F32" }}>Bronze</span>, 2x USAPhO{" "}
              <span style={{ color: "#F5F5F5" }}>Silver</span>, USACO{" "}
              <span style={{ color: "#FFD700" }}>Gold</span>, USNCO Honors
            </p>
            <p>
              <strong>Skills:</strong> C++, Python, Angular, React, Flask, SQL,
              Next.js, HTML, CSS, JavaScript, MATLAB
            </p>
            <a
              className="btn btn-outline-primary"
              href="Chris_Ge_Resume.pdf"
              download="Chris_Ge_Resume.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
