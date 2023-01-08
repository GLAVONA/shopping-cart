import Navbar from "./components/Navbar";
import logo from "./imgs/Avalanche.jpg";

const Home = ()=>{

  return(
    <>
    <Navbar/>

      <div className="main-img"><img src={logo} alt="" /></div>
    </>
  )

}

export default Home;
