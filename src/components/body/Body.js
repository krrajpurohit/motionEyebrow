import "./Body.css";
import Header from '../header/Header';
import Main from '../main/Main';
import SideBar from '../sideBar/SideBar';
import Footer from '../footer/Footer';

const Body = () => {
  return (
    <div>
      <SideBar></SideBar>
     
      <Main><Header/></Main>
    
      <Footer></Footer>
    </div>
  );
};

export default Body;
