import Footer from "./components/Footer";
import Header from "./components/Header";
import MyInfo from "./components/MyInfo";
import Services from "./components/Services";
import RecentProjects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      {/* <div className="flex-col lg:flex-row flex lg:h-[calc(100%-140px)] bg-base-300"> */}
      <MyInfo />
      <RecentProjects />
      {/* </div> */}
      <Services />
      <Footer />
    </>
  );
}

export default App;
