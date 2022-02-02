import dynamic from "next/dynamic";

import Header from "../layout/Header";
import Banner from "../components/Banner";
import Slogan from "../components/Slogan";

// import About from "../components/About";
// import Projects from "../components/Projects";
// import Skills from "../components/Skills";
// import Footer from "../components/Footer";
// import Copyright from "../components/Copyright";

const About = dynamic(() => import("../components/About"));
const Projects = dynamic(() => import("../components/Projects"));
const Skills = dynamic(() => import("../components/Skills"));
const Footer = dynamic(() => import("../components/Footer"));
const Copyright = dynamic(() => import("../components/Copyright"));

export default function Home(props) {
  return (
    <>
      <Header theme={props.theme} themeToggler={props.themeToggler} />
      <Banner />
      <Slogan />
      <About />
      <Projects />
      <Skills />
      <Footer />
      <Copyright />
    </>
  );
}
