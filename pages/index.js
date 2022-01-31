import Header from "../layout/Header";
import Loading from "../components/Loading";
import Banner from "../components/Banner";

export default function Home(props) {
  return (
    <>
      <Header theme={props.theme} themeToggler={props.themeToggler} />
      <Banner />
    </>
  );
}
