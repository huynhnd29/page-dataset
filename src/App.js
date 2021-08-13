import logo from "./logo.svg";
import "./App.css";
import serviecNew1 from './image/serviecNew1.png'
import serviecNew2 from './image/serviecNew2.png'
import serviecNew3 from './image/serviecNew3.png'

import service1 from './image/service1.png'
import service2 from './image/service2.png'
import service3 from './image/service3.png'
import service4 from './image/service4.png'

import newImg from './image/new.png'
import career1 from './image/career1.png'
import career2 from './image/career2.png'
import career3 from './image/career3.png'
import career4 from './image/career4.png'
import career5 from './image/career5.png'
import logoImg from './image/logo.jpg'
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Serveces } from "./components/Serveces";
import { WhyUs } from "./components/WhyUs";
import { TrustedBby } from "./components/TrustedBby";
import { News } from "./components/News";
import { Careers } from "./components/Careers";
import { ContactSales } from "./components/ContactSales";
import { FooterComponent } from "./components/FooterComponent";



function App() {
  
  return (
    <div className="App" >
      <Header/>
      <Banner/>
      <Serveces/>
      <WhyUs/>
      <TrustedBby/>
      <News/>
      <Careers/>
      <ContactSales/>
      <FooterComponent/>
    </div>
  );
}

export default App;
