import React from 'react';
import 'jquery/src/jquery';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import './ThreeBanner.css';

import img1 from './img_banner_1.jpg'
import img2 from './img_banner_2.jpg'
import img3 from './img_banner_3.jpg'
class ThreeBanner extends React.Component {
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
            return 					<div class="container">
            <div class="row">
                
                
                
                
                
                <div class="col-md-4 col-sm-4 hidden-xs banner">
                    <a href="http://haravan.com/?ref=nobita-1">
                            <img src={img1} class="img-responsive" />
                    </a>
                </div>
                
                
                
                
                
                
                <div class="col-md-4 col-sm-4 hidden-xs banner">
                    <a href="http://haravan.com/?ref=nobita-1">
                        <img src={img2}  class="img-responsive" />
                    </a>
                </div>
                
                
                
                
                
                
                <div class="col-md-4 col-sm-4 hidden-xs banner">
                    <a href="http://haravan.com/?ref=nobita-1">
                        <img src={img3}  class="img-responsive" />
                    </a>
                </div>
                
                
            </div>
        </div>
        }
    }

    export default ThreeBanner