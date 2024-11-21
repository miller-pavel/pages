import React, { useRef, useLayoutEffect } from "react";
import styles from "./works.module.scss";
import workImg from "../../assets/img/bgWorkNone.png";
import { gsap } from "gsap";

import coffee from "../../assets/img/portfolio/coffeeLight.webp";
import yt from "../../assets/img/portfolio/yt.webp";
import parallax from "../../assets/img/portfolio/parallax.webp";
import joblisting from "../../assets/img/portfolio/JobListing.webp";
import spendtime from "../../assets/img/portfolio/spendtime.webp";
import newsfinder from "../../assets/img/portfolio/newsfinder.webp";
import pizza from "../../assets/img/portfolio/pizza.webp";
import logotype from "../../assets/img/portfolio/logotype.webp";
import mogo from "../../assets/img/portfolio/mogo.webp";
import float from "../../assets/img/portfolio/float.webp";

const Works = () => {
  type Projects = {
    id: number;
    projectName: string;
    aboutProject: string;
    url: string;
    technology: string[];
    repo: string;
    ghPages: string;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classNames =
    // eslint-disable-next-line no-template-curly-in-string
    "`${styles.totalProjects__item} ${styles.totalProjects__item__active}`";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const projects: Projects[] = [
    {
      id: 1,
      projectName: "Pizza",
      aboutProject:
        "In that projects i used actually technology and best practice, i used Typescript with couple of React. That project have React Routes and Redux toolkit async Thunks. ",
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lucidchart.com%2Fblog%2Ffour-diagrams-to-streamline-project-planning&psig=AOvVaw1SXUpze6zzYat3Bu0RmFWz&ust=1675806579170000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjkq4rwgf0CFQAAAAAdAAAAABAE",
      technology: [
        "ReactJs",
        "SCSS",
        "Typescript",
        "Html",
        "Redux Toolkit",
        "MockAPI",
      ],
      ghPages: "#",
      repo: "#",
    },
    {
      id: 2,
      projectName: "YouTube Clone",
      aboutProject: "In that projects i used ReactJS, TailwindCSS.",
      url: "#",
      technology: ["ReactJs", "TailwindCSS", "JavaScript", "Html"],
      ghPages: "#",
      repo: "#",
    },
    {
      id: 3,
      projectName: "MarvelDB",
      aboutProject:
        "In that projects i used API Marvel, AsyncThunk, ReactRouting. I used preloader, errorBoundary, skeleton and custom hooks, services. Used best practice!",
      url: "#",
      technology: ["ReactJs", "Css", "JavaScript", "Html", "Redux"],
      ghPages: "",
      repo: "#",
    },
  ];

  const worksRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline().fromTo(
        "#worksImg img",
        {
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: "#worksImg",
            scrub: 2,
            start: "top 90%",
          },

          y: 0,
          stagger: 0.3,
        }
      );
    }, worksRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="works" ref={worksRef}>
      <div className={styles.myWorks}>
        <h1 className="title">Portfolio</h1>
        <div>
          <ul className={styles.filter}>
            <li className={styles.active}>All</li>
            <li>ReactJS</li>
            <li>Typescript</li>
            <li>Layout</li>
          </ul>
        </div>
        <div className="container">
          <div id="worksImg" className={styles.portfolio_img_wrapper}>
            <img src={spendtime} alt="portfolioWork" />
            <img src={yt} alt="portfolioWork" />
            <img src={pizza} alt="portfolioWork" />
            <img src={newsfinder} alt="portfolioWork" />
            <img src={parallax} alt="portfolioWork" />
            <img src={joblisting} alt="portfolioWork" />
            <img src={coffee} alt="portfolioWork" />
            <img src={mogo} alt="portfolioWork" />
            <img src={logotype} alt="portfolioWork" />
            <img src={float} alt="portfolioWork" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
