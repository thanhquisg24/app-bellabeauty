import React from 'react';
import './ContactUs.css';
import img1 from './agency_image.jpg'
class ContactUs extends React.Component {
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
            return <div class="container box-section-contact-us">
            <div class="row">
                <div class="col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="home-contact-us">
                                <div class="ct-image col-lg-6 col-md-6 col-xs-6 ">
                                    <img src={img1} alt="" tittle=""/>
                                </div>
                                <div class="ct-content col-lg-6 col-md-6 col-xs-12 col-last">
                                    <span class="heading">Cơ hội thành công cùng Bella Beauty</span>
                                    <h2 class="subheading" >Làm việc, kiếm tiền và vui vẻ cùng Bella Beauty</h2>
                                    
                                    <div class="ct-controls">
                                        <a class="button k-button g-center" href="#01" target="_self" title="Tìm hiểu thêm" type="button">Tìm hiểu thêm</a>  
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        }
    }

    export default ContactUs