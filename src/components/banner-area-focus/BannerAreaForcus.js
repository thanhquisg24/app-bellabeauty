import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './BannerAreaForcus.css';

const displayNone = { display: 'none' };
const margin1 = {margin: '1px 0px'}
class BannerAreaForcus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    };
        componentWillMount() {
            //truoc khi render
            const km = {
                "km": [
                    {
                        "id":1,
                        "alt": "Reactjs",
                        "url": "https://reactjs.org",
                        "img": "https://picsum.photos/1200/498/?random",
                        "title": "this is title 1 ",
                        "heading": "this is heading 1 ",
                        "textbutton": "this is textbuuton 1 ",
                        "description": "A JavaScript library for building user interfaces"
                    },
                    {
                        "id":2,
                        "alt": "Reactjs",
                        "url": "https://reactjs.org",
                        "img": "https://picsum.photos/1200/498/?random",
                        "title": "this is title 2 ",
                        "heading": "this is heading 2 ",
                        "textbutton": "this is textbuuton 2 ",
                        "description": "A JavaScript library for building user interfacesaaa aaa"
                    },
                    {
                        "id":3,
                        "alt": "Reactjs",
                        "url": "https://reactjs.org",
                        "img": "https://picsum.photos/1200/498/?random",
                        "title": "this is title 3 ",
                        "heading": "this is heading 3 ",
                        "textbutton": "this is textbuuton 3 ",
                        "description": "A JavaScript library for building user interfaces bbbb"
                    }
                ]
            };
            const cart = {}
            //this.setState(data);
        };
        componentDidMount() {
            //sau khi render
            // Jquery here $(...)...
                      
        };
        render() {
            return <div class="container box-section-focus banner-area-focus">
            <div class="row">
                <div class="col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <h2 class="headline-serif headline-separator-holder">
                                <span class="headline-separator">Tâm điểm</span>
                            </h2>	
                        </div>
                        <div class="col-xs-12">
                            <div class="wrap-tabs home-focus row">		
                                
                                <div class="banner-item-medium col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                    <a class="banner"  href="#01" title="The ONE Lip Palette"> 
                                        <div class="image image-ratio">
                                            
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/8DeBuRrr3Qg" frameborder="0" allowfullscreen></iframe>
                                                                        
                                        </div>
                                        <div class="content">
                                            <div class="banner-meta">
                                                <span>The ONE Lip Palette </span>
                                            </div>
                                            <h2 class="heading" >Hộp son nhỏ gọn, tiện lợi	</h2>
                                                    <strong class="common-link v-icon-arrow-double-right">Xem sản phẩm</strong> 
                                        </div>
                                    </a>
                                </div>
                                
                                
                                <div class="banner-item-medium col-lg-6 col-md-6 col-sm-6  col-xs-6 col-last">
                                    <a class="banner"  href="#02" title="Kiến thức làm đẹp"> 
                                        <div class="image image-ratio">
                                            
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/HN8PtSpB23Y" frameborder="0" allowfullscreen></iframe>
                                                                        
                                        </div>
                                        <div class="content">
                                            <div class="banner-meta">
                                                <span>Kiến thức làm đẹp</span>
                                            </div>
                                            <h2 class="heading" >5 "thủ thuật hô biến" làn môi căng mọng </h2>
                                                <strong class="common-link v-icon-arrow-double-right">Xem hướng dẫn</strong> 
                                        </div>
                                    </a>
                                </div>
                                
                                
                                <div class="banner-item-small col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
                                    <a class="banner"   href="#03" title="Diamond Cellular Multi-Perfection Eye"> 
                                        <div class="image image-ratio">
                                            
                                            <img src="assets/images/theme/focus_3324c.jpg?v=222" alt="" title=""/>
                                                                        
                                        </div>
                                        <div class="content">
                                            <div class="banner-meta">
                                                <span>Diamond Cellular Multi-Perfection Eye</span>
                                            </div>
                                            <h2 class="heading" >Tinh chất dưỡng da vùng mắt</h2>
                                                <strong class="common-link v-icon-arrow-double-right">Mua ngay</strong> 
                                        </div>
                                    </a>
                                </div>
                                
                                
                                <div class="banner-item-small col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
                                    <a class="banner"   href="#04" title="Bộ Time Reversing SkinGenist"> 
                                        <div class="image image-ratio">
                                            
                                            <img src="assets/images/theme/focus_4324c.jpg?v=222" alt="" title=""/>
                                                                        
                                        </div>
                                        <div class="content">
                                            <div class="banner-meta">
                                                <span>Bộ Time Reversing SkinGenist</span>
                                            </div>
                                            <h2 class="heading" >Làn da trông trẻ trung hơn</h2>
                                            <strong class="common-link v-icon-arrow-double-right">Tìm hiểu thêm</strong> 
                                        </div>
                                    </a>
                                </div>
                                
                                
                                <div class="banner-item-small col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
                                    <a class="banner"   href="#05" title="Power Musk Eau de Toilette"> 
                                        <div class="image image-ratio">
                                            
                                            <img src="assets/images/theme/focus_5324c.jpg?v=222" alt="" title=""/>
                                                                        
                                        </div>
                                        <div class="content">
                                            <div class="banner-meta">
                                                <span>Power Musk Eau de Toilette</span>
                                            </div>
                                            <h2 class="heading" >Hộp son nhỏ gọn, tiện lợi</h2>
                                                    <strong class="common-link v-icon-arrow-double-right">Xem sản phẩm</strong> 
                                        </div>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
          
        }
    }
    export default BannerAreaForcus