import React from 'react';
import Slide from './components/slide/index'
import Intro from './components/wrapper-intro/index'
import Top from './components/top/index'
import TopBrandTitle from './components/top-brand-tiitle/index'
import Nav from './components/nav/index'
import Footer from './components/footer/index'
import ThreeBanner from './components/three-banner/index'
import ContactUs from './components/contactus/index'
import BannerAreaForcus from './components/banner-area-focus/index'
import SalesProduct from './components/salesproduct/index'
import NewProduct from './components/newproduct/index'
import  './assets/js/script.js'

require.context("./assets/images/", true, /\.(png|svg|jpg|gif)$/);


// import HotProduct from './components/hotproduct/index'
class App extends React.Component {
    render() {
        return (
            <div class="mm-page mm-slideout" id="mm-0">	
                <div class="mm-page mm-slideout" id="mm-0">	
                <React.Fragment>
                    <Top />    
                    <TopBrandTitle />   
                    <Nav/>        
                    <Intro />
                    <Slide />
                    <ThreeBanner />    
                        {/* <HotProduct/> */}
                        <BannerAreaForcus />
                        <SalesProduct></SalesProduct>
                        <NewProduct></NewProduct>
                    <ContactUs/>
                    <Footer/>    
                </React.Fragment>  
                </div>
            </div>    
        );
      }

}

export default App;