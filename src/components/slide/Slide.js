import React from 'react';
import 'jquery/src/jquery';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Slide.css';
import 'font-awesome/css/font-awesome.min.css';
const ItemSlides = (props) => {
    return (
        <React.Fragment>
            {props.items.data.map(item => (
                <React.Fragment key={item.id}>
                    <div class="item slide-1">
                        <a href={item.url}>
                            <img src={item.img} alt={item.alt} />
                            <div class="text-desc">
                                <div class="w-content">
                                    <div class="content">
                                        <div class="w-cell-content">
                                            <div class="meta">
                                                <span class="category">{item.title} </span>
                                            </div>
                                            <h3 class="heading ">{item.heading} </h3>
                                            <p>{item.description} </p>
                                            <span class="k-button transparent">{item.textbutton}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </React.Fragment>
            ))}
        </React.Fragment>
    )
};

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    };
        componentWillMount() {
            //truoc khi render
            const data = {
                "data": [
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
            this.setState(data);
        };
        componentDidMount() {
            //sau khi render
            // Jquery here $(...)...
            jQuery(document).ready(function () {
              
                if (jQuery('#home-banner-slider #slider-01 .item').length > 1) {
                    jQuery("#home-banner-slider #slider-01").owlCarousel({
                        items: 1,
                        autoplay: true,
                        autoplayTimeout: 5000,
                        autoplayHoverPause: true,
                        nav: true,
                        loop: true,
                        navText: ["<span class='icon-wrap'></span>", "<span class='icon-wrap'></span>"],
                        mouseDrag: true

                    });
                }
            });
        
        };
        render() {
            return <div class="banner-silder">
                <div id="home-banner-slider">
                    <div class="container">
                        <div class="list-carousel">
                            <div id="slider-01" class=" babyhouse-owl  hide-nav owl-carousel owl-theme owl-loaded">
                            <React.Fragment>
                                <ItemSlides key='itemSlides' items={this.state} />
                             </React.Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    }

    export default Slide