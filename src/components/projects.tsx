import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";
import toneme from "../../public/Tone-Me.png";
import personalweb from "../../public/Personal-website.png";

const projects = () => {
  return (
    <>
      <div className="m-5">
        <h1 style={{ color: "#ec8af9" }}>Projects</h1>
        <p className="h5 text-white mt-4">
          {" "}
          Click on any project to see more!{" "}
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
            <div className={`card ${styles.projectscard}`}>
              <div className="card-body">
                <h4 className="card-title"> Tone-Me </h4>
                <div className="embed-responsive embed-responsive-16by9">
                  <Image
                    className="card-img-top"
                    alt="tone me demo"
                    src={toneme}
                    style={{ height: "25vw", objectFit: "contain" }}
                  ></Image>
                </div>
                <p className="card-text" style={{ color: "#BEBEBE" }}>
                  Tone.me is a Mandarin Chinese pronunciation corrector. It
                  accepts a Chinese voice recording, determines the tones for
                  each word in the recording, and returns feedback on the
                  correctness of the tones.
                </p>
              </div>
              <div
                className="card-footer d-flex justify-content-start"
                style={{ color: "#BEBEBE" }}
              >
                <span className="border border-white rounded px-2 me-2 d-inline-flex justify-content-center">
                  Next.js
                </span>
                <span className="border border-white rounded px-2 mx-2 d-inline-flex justify-content-center">
                  React.js
                </span>
                <span className="border border-white rounded px-2 mx-2 d-inline-flex justify-content-center">
                  Flask
                </span>
                <span className="border border-white rounded px-2 mx-2 d-inline-flex justify-content-center">
                  Hugging Face
                </span>
              </div>
              <a
                href="https://github.com/tone-me/tone-me?tab=readme-ov-file"
                className="btn btn-primary stretched-link"
                style={{ display: "none" }}
              >
                Github
              </a>
            </div>
          </div>
          <div className="col-md-6 my-4">
            <div className={`card ${styles.projectscard}`}>
              <div className="card-body">
                <h4 className="card-title"> Personal website </h4>
                <div className="embed-responsive embed-responsive-16by9">
                  <Image
                    className="card-img-top"
                    alt="personal website"
                    src={personalweb}
                    style={{ height: "25vw", objectFit: "contain" }}
                  ></Image>
                </div>
                <p className="card-text" style={{ color: "#BEBEBE" }}>
                  My personal website!
                </p>
              </div>
              <a
                href="https://github.com/tone-me/tone-me?tab=readme-ov-file"
                className="btn btn-primary stretched-link"
                style={{ display: "none" }}
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
