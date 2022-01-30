import Header from "../layout/Header";
import Loading from "../components/Loading";

export default function Home(props) {
  return (
    <>
      <Header theme={props.theme} themeToggler={props.themeToggler} />
      <h2>Hey</h2>
    </>
  );
}
