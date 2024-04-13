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
              src="/Me_pfp.png"
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
          <div className="col-md-8" style={{ color: "#B8B8B8" }}>
            <h2>Chris Ge</h2>
            <p className="h6">MIT '27, Software Developer, CS Researcher</p>
            <p className="mt-4">
              I'm an undergraduate at MIT pursuing a double major in Computer
              Science and Mathematics. My interests include artificial
              intelligence, software development, and number theory. Recently,
              I've worked with the{" "}
              <a
                href="https://signal-kinetics.media.mit.edu/"
                className={`${styles.link}`}
              >
                MIT Signal Kinetics Group
              </a>{" "}
              on extending underwater backscattering localization to shallow
              water on moving sources, and I'm going to intern at{" "}
              <a
                href="https://www.intersystems.com/"
                className={`${styles.link}`}
              >
                InterSystems
              </a>{" "}
              in Summer 2024.
            </p>

            <p>
              <strong>Achievements: </strong> 2x USAMO{" "}
              <span style={{ color: "#CD7F32" }}>Bronze</span>, 2x USAPhO{" "}
              <span style={{ color: "#F5F5F5" }}>Silver</span>, USACO{" "}
              <span style={{ color: "#FFD700" }}>Gold</span>, USNCO Honors
            </p>
            <p>
              <strong>Skills:</strong> C++, Python, React.js, Flask, MongoDB,
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
