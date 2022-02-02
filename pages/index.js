import Header from "../layout/Header";
import Loading from "../components/Loading";
import Banner from "../components/Banner";
import Slogan from "../components/Slogan";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home(props) {
  return (
    <>
      <Header theme={props.theme} themeToggler={props.themeToggler} />
      <Banner />
      <Slogan />
      <About />
      <Projects />
      <Skills />
    </>
  );
}
