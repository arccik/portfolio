import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import RecentProjects from "./components/RecentProjects";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <RecentProjects />
      <Services />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
