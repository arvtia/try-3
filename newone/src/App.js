import Navbar  from "./assests/components/navbar";
import Hero1 from "./assests/components/heros1";
import Hero2 from "./assests/components/hero2";
import Carousal from "./assests/components/carousel";
import {Aboutus, AboutHome} from "./assests/components/about";
import Footer from "./assests/components/footer";
import Form1 from "./assests/components/form1";


function App() {
  return (
    <>
        <Navbar/>
        <Hero1/>
        <Carousal/>
        <Hero2/>
        <Aboutus/>
        <AboutHome/>
        <Form1/>
        <Footer/>
    </>
  );
}

export default App;
