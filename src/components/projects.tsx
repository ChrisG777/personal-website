import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";
import toneme from "../../public/Tone-Me.png";
import personalweb from "../../public/Personal-website.png";
import softblocker from "../../public/Softblocker.png";
import estimathon from "../../public/Estimathon.png";
import wordcount from "../../public/wordcount.png";
import automail from "../../public/AutoMail.png";

const projects = () => {
  return (
    <>
      <div className="m-5">
        <h1 style={{ color: "#ec8af9" }}>Projects</h1>
        <p className="h5 text-white mt-4">
          Click on any project to see more about it!
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
            <div className={`card ${styles.projectscard}`}>
              <div className="card-body">
                <h4 className="card-title"> Tone-Me </h4>
                <div className="embed-responsive embed-responsive-16by9 mb-4">
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
              <div className="card-footer d-flex justify-content-start">
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Next.js
                  </p>
                </span>
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    React.js
                  </p>
                </span>
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Flask
                  </p>
                </span>
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Hugging Face
                  </p>
                </span>
              </div>
              <a
                href="https://github.com/tone-me/tone-me?tab=readme-ov-file"
                className="btn btn-primary stretched-link"
                style={{ opacity: "0" }}
              >
                Github
              </a>
            </div>
          </div>
          <div className="col-md-6 my-4">
            <div className={`card ${styles.projectscard}`}>
              <div className="card-body">
                <h4 className="card-title"> Personal website </h4>
                <div className="embed-responsive embed-responsive-16by9 mb-4">
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
              <div className="card-footer d-flex justify-content-start">
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Next.js
                  </p>
                </span>
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    React.js
                  </p>
                </span>
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Bootstrap
                  </p>
                </span>
              </div>
              <a
                href="#"
                className="btn btn-primary stretched-link"
                style={{ opacity: "0" }}
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-4">
            <div className={`card ${styles.projectscard}`}>
              <div className="card-body">
                <h4 className="card-title"> Softblocker </h4>
                <div className="embed-responsive embed-responsive-16by9 mb-4">
                  <Image
                    className="card-img-top"
                    alt="tone me demo"
                    src={softblocker}
                    style={{ height: "25vw", objectFit: "contain" }}
                  ></Image>
                </div>
                <p className="card-text" style={{ color: "#BEBEBE" }}>
                  A productivity chrome extension. You choose a list of websites
                  to mark as unproductive. Then, whenever you go to an
                  unproductive website, the extension will start a timer - once
                  it's up, the page will freeze for an adjustible period of
                  time. After the countdown is over, the normal tab resumes, and
                  the timer is started again.
                </p>
                <p className="card-text" style={{ color: "#BEBEBE" }}>
                  100 installs on Chrome web store.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-start">
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    JavaScript
                  </p>
                </span>
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    HTML
                  </p>
                </span>
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    CSS
                  </p>
                </span>
              </div>
              <a
                href="https://chromewebstore.google.com/detail/softblocker/gkcaacfdeihmjefmgedholhlihbljjfo"
                className="btn btn-primary stretched-link"
                style={{ opacity: "0" }}
              >
                Github
              </a>
            </div>
          </div>
          <div className="col-md-6 my-4">
            <div className={`card ${styles.projectscard}`}>
              <div className="card-body">
                <h4 className="card-title"> Estimathon </h4>
                <div className="embed-responsive embed-responsive-16by9 mb-4">
                  <Image
                    className="card-img-top"
                    alt="personal website"
                    src={estimathon}
                    style={{ height: "25vw", objectFit: "contain" }}
                  ></Image>
                </div>
                <p className="card-text" style={{ color: "#BEBEBE" }}>
                  The Estimathon is a competition created by Jane Street, where
                  competitors estimate an interval in which they believe the
                  answer lies. I made an open source version of their
                  live-updating leaderboard for hosting Estimathon competitions.
                </p>
                <p className="card-text" style={{ color: "#BEBEBE" }}>
                  Used by MSJ Math Club for Mission Math Tournament and Summer
                  Mission Math Tournament (200 competitors), as well as MIT
                  Undergraduate Math Association
                </p>
              </div>
              <div className="card-footer d-flex justify-content-start">
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Google Spreadsheets
                  </p>
                </span>
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Apps Script
                  </p>
                </span>
              </div>
              <a
                href="https://github.com/ChrisG777/Estimathon"
                className="btn btn-primary stretched-link"
                style={{ opacity: "0" }}
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-4">
            <div className={`card ${styles.projectscard}`}>
              <div className="card-body">
                <h4 className="card-title"> AutoCounts </h4>
                <div className="embed-responsive embed-responsive-16by9 mb-4">
                  <Image
                    className="card-img-top"
                    alt="tone me demo"
                    src={wordcount}
                    style={{ height: "25vw", objectFit: "contain" }}
                  ></Image>
                </div>
                <p className="card-text" style={{ color: "#BEBEBE" }}>
                  A tool for Google Docs. With a single click, it generates
                  cumulative line-by-line word counts in the margins. Used for
                  and shared with Mr. Bellotti's APUSH class (which required the
                  word counts).
                </p>
              </div>
              <div className="card-footer d-flex justify-content-start">
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Google Docs
                  </p>
                </span>
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Apps Script
                  </p>
                </span>
              </div>
              <a
                href="https://github.com/ChrisG777/line-word-counts"
                className="btn btn-primary stretched-link"
                style={{ opacity: "0" }}
              >
                Github
              </a>
            </div>
          </div>
          <div className="col-md-6 my-4">
            <div className={`card ${styles.projectscard}`}>
              <div className="card-body">
                <h4 className="card-title"> AutoMail </h4>
                <div className="embed-responsive embed-responsive-16by9 mb-4">
                  <Image
                    className="card-img-top"
                    alt="personal website"
                    src={automail}
                    style={{ height: "25vw", objectFit: "contain" }}
                  ></Image>
                </div>
                <p className="card-text" style={{ color: "#BEBEBE" }}>
                  AutoCount is a scripted Google Form template where every time
                  someone fills out the Google Form, it adds their information
                  to a Google Contacts group.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-start">
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Google Forms
                  </p>
                </span>
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Google Spreadsheets
                  </p>
                </span>
                <span
                  className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                >
                  <p className="m-0" style={{ color: "#E5E4E2" }}>
                    Apps Script
                  </p>
                </span>
              </div>
              <a
                href="https://github.com/ChrisG777/Mailing-List"
                className="btn btn-primary stretched-link"
                style={{ opacity: "0" }}
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
