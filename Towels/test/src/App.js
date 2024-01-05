import Feedback from 'react-bootstrap/esm/Feedback';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Nav/Navbar';
import BootstrapImageCarousel from './Slider/ImageCarousel';
import FeedbackApp from './Feedback/FeedbackApp';
import Choose from './Choose/choose';
import ChooseCard from './Choose/choosefeed';
import CardComponent from './Choose/choose';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import SignUp from './sign up/sign';
import Popular from './Popular/Popular';
import ShopContextProvider from './Context/Context';
function App() {
  return (
    <div >
      <ShopContextProvider>
   <Navbar/>
   <BootstrapImageCarousel/>
   <Popular/>
   <CardComponent/>
   <FeedbackApp/>
   <Footer/>
   </ShopContextProvider>
   
    </div>
  );
}

export default App;
