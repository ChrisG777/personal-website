import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

/* eslint-disable react/no-unescaped-entities */

const projects = () => {
  const data = [
    [
      {
        title: "Tone-Me",
        description:
          "Tone.me is a Mandarin Chinese pronunciation corrector. It accepts a Chinese voice recording, determines the tones for each word in the recording, and returns feedback on the correctness of the tones.",
        techstack: ["Next.js", "React.js", "Flask", "Hugging Face"],
        link: "https://github.com/tone-me/tone-me?tab=readme-ov-file",
        image_src: "/Tone-Me.png",
      },
      {
        title: "Personal website",
        description: "My personal website!",
        techstack: ["Next.js", "React.js", "Bootstrap"],
        link: "https://github.com/ChrisG777/personal-website",
        image_src: "/Personal-website.png",
      },
    ],
    [
      {
        title: "Softblocker",
        description:
          "A productivity chrome extension. You choose a list of websites to mark as unproductive. Then, whenever you go to an unproductive website, the extension will start a timer - once it's up, the page will freeze for an adjustible period of time. After the countdown is over, the normal tab resumes, and the timer is started again.\n\n100 installs on Chrome web store.",
        techstack: ["Javascript", "HTML", "CSS"],
        link: "https://chromewebstore.google.com/detail/softblocker/gkcaacfdeihmjefmgedholhlihbljjfo",
        image_src: "/Softblocker.png",
      },
      {
        title: "Estimathon",
        description:
          "The Estimathon is a competition created by Jane Street, where competitors estimate an interval in which they believe the answer lies. I made an open source version of their live-updating leaderboard for hosting Estimathon competitions.\n\nUsed by MSJ Math Club for Mission Math Tournament and Summer Mission Math Tournament (200 competitors), as well as MIT Undergraduate Math Association",
        techstack: ["Google Spreadsheets", "Apps Script"],
        link: "https://github.com/ChrisG777/Estimathon",
        image_src: "/Estimathon.png",
      },
    ],
    [
      {
        title: "AutoCounts",
        description:
          "A tool for Google Docs. With a single click, it generates cumulative line-by-line word counts in the margins. Used for and shared with Mr. Bellotti's APUSH class (which required the word counts).",
        techstack: ["Google Docs", "Apps Script"],
        link: "https://github.com/ChrisG777/line-word-counts",
        image_src: "/wordcount.png",
      },
      {
        title: "AutoMail",
        description:
          "AutoMail is a scripted Google Form template where every time someone fills out the Google Form, it adds their information to a Google Contacts group.",
        techstack: ["Google Forms", "Google Spreadsheets", "Apps Script"],
        link: "https://github.com/ChrisG777/Mailing-List",
        image_src: "/AutoMail.png",
      },
    ],
  ];
  return (
    <div className={`my-5 ${styles.overall}`} id="Projects">
      <div className="m-5">
        <h1 className="pt-5" style={{ color: "#ec8af9" }}>
          Projects
        </h1>
        <p className="h5 text-white mt-4">
          Click on any project to see more about it!
        </p>
      </div>
      <div className="container">
        {data.map((rowData, id1) => (
          <div className="row" key={id1}>
            {rowData.map((colData, id2) => (
              <div className="col-md-6 my-4" key={id2}>
                <div className={`card ${styles.projectscard}`}>
                  <div className="card-body">
                    <h4 className="card-title my-3"> {colData["title"]} </h4>
                    <div className="embed-responsive embed-responsive-16by9 mb-4">
                      <Image
                        className="card-img-top"
                        alt="card image"
                        src={colData["image_src"]}
                        width={300}
                        height={300}
                        style={{ height: "25vw", objectFit: "contain" }}
                      ></Image>
                    </div>
                    <p className="card-text" style={{ color: "#BEBEBE" }}>
                      {colData["description"]}
                    </p>
                    <div className="card-footer d-flex justify-content-center">
                      {colData["techstack"].map((techItem, id3) => (
                        <span
                          key={id3}
                          className={`px-2 me-2 d-inline-flex justify-content-center ${styles.icon}`}
                        >
                          <p className="m-0" style={{ color: "#E5E4E2" }}>
                            {techItem}
                          </p>
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={colData["link"]}
                    className="btn btn-primary stretched-link"
                    style={{ opacity: "0" }}
                  ></a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
