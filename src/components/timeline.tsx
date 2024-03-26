import React from "react";
import Image from "next/image";
import styles from "./timeline.module.css";
import Link from "next/link";

const Timeline = () => {
  const timelineData = [
    {
      logo: "/Intersystems.png",
      title: "InterSystems",
      positionTitle: "Software Engineering Intern",
      description:
        "Software Engineering Intern on the Application Services Team.",
      date: "June 2024 - (not started)",
      href: "https://www.intersystems.com/",
    },
    {
      logo: "/MediaLab.png",
      title: "MIT Media Lab",
      positionTitle: "Undergraduate Researcher",
      description:
        "I helped create a battery-free 3D underwater localization system (3D-BLUE) for real-time tracking of mobile targets with the Signal Kinetics Group at the MIT Media Lab.",
      date: "December 2023 - March 2024",
      href: "https://signal-kinetics.media.mit.edu/",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5" style={{ color: "#6c5ce7" }}>
        My Timeline
      </h2>
      <div className="row justify-content-start position-relative">
        <div className={`col-md-10 ${styles.timelineContainer}`}>
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
                      style={{ borderRadius: "50%" }}
                    />
                  </Link>
                </div>
                <div className={`${styles.timelineContent}`}>
                  <div className={`${styles.textContainer}`}>
                    <h3 style={{ color: "#6c5ce7" }}>{item.title}</h3>
                    <h4 style={{ color: "#d3d3d3" }} className="mb-4">
                      {item.positionTitle}
                    </h4>
                    <p style={{ color: "#d1d1d1" }}>{item.description}</p>
                    <p
                      className={`${styles.timelineDate}`}
                      style={{ color: "#6c5ce7" }}
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
