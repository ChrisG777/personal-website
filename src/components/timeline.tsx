import React from "react";
import Image from "next/image";
import styles from "./timeline.module.css";
import Link from "next/link";

const Timeline = () => {
  const timelineData = [
    {
      logo: "/Intersystems.png",
      title: "InterSystems",
      positionTitle: "Software Engineering Intern on the App Services Team.",
      description: (
        <>
          I extended a unit test coverage measuring tool to track embedded
          Python code and built a new Angular UI for running tests and viewing
          code coverage.
          <br />
          <br />I also wrote an article on the InterSystems Developer Community
          about my (open source) work at{" "}
          <a
            href="https://community.intersystems.com/post/testcoverage-embedded-python-and-ui"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ADD8E6" }} // Lighter blue color
          >
            https://community.intersystems.com/post/testcoverage-embedded-python-and-ui
          </a>
          . A recording of my intern presentation can be found{" "}
          <a
            href="https://www.dropbox.com/scl/fi/vduo4637ie3r144i1rcpt/Chris-Ge-InterSystems-Final-Presentation.mp4?rlkey=g14vr75a9ttva94q9z0msu3cf&st=f55d30te&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ADD8E6" }} // Lighter blue color
          >
            here
          </a>
        </>
      ),
      date: "May 2024 - August 2024",
      href: "https://www.intersystems.com/",
    },
    {
      logo: "/MediaLab.png",
      title: "MIT Media Lab",
      positionTitle: "Undergraduate Researcher",
      description: (
        <>
          I helped create a battery-free 3D underwater localization system
          (3D-BLUE) for real-time tracking of mobile targets with the Signal
          Kinetics Group at the MIT Media Lab.
        </>
      ),
      date: "December 2023 - March 2024",
      href: "https://signal-kinetics.media.mit.edu/",
    },
  ];

  return (
    <div id="Timeline" className="container py-5">
      <h2 className="text-center mb-5" style={{ color: "#ec8af9" }}>
        My Experience
      </h2>
      <div className="row justify-content-center position-relative">
        <div className={`col-sm-11 col-md-10 col-lg-10`}>
          <div className={`${styles.timeline}`}>
            <div className={`${styles.timelineLine}`}></div>
            {timelineData.map((item, index) => (
              <div className={`${styles.timelineItem}`} key={index}>
                <div className={`${styles.timelineIcon}`}>
                  <Link href={item.href} passHref>
                    <Image
                      src={item.logo}
                      alt={`${item.title} Logo`}
                      width={100}
                      height={100}
                      layout="responsive" // This ensures that the image scales with its container
                      style={{ borderRadius: "50%" }}
                    />
                  </Link>
                </div>
                <div className={`card ${styles.timelineContent}`}>
                  <div className={`card-body ${styles.textContainer}`}>
                    <h3 className="card-title" style={{ color: "#fd8af9" }}>
                      {item.title}
                    </h3>
                    <h4 style={{ color: "#d3d3d3" }} className="mb-4">
                      {item.positionTitle}
                    </h4>
                    <p className="card-text" style={{ color: "#d1d1d1" }}>
                      {item.description}
                    </p>
                    <p
                      className={`${styles.timelineDate}`}
                      style={{ color: "#fd8af9" }}
                    >
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
