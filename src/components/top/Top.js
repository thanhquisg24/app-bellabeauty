import React from 'react';
import 'jquery/src/jquery';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import './Top.css';

const displayInline = { display: 'inline-block' };
const displayNone = { display:'none'};
const ItemKM = (props) => {
    return (
        <React.Fragment>
            {props.items.data.map(item => (
                <React.Fragment key={item.id}>

                </React.Fragment>
            ))}
        </React.Fragment>
    )
};

class Top extends React.Component {
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
            jQuery(document).ready(function($) {

                $("#offer-slider").owlCarousel({
                    navigation: false,
                    pagination: false,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    items: 1,
                    autoplay: true,
                    loop: true,
                });

            });
        
        };
        render() {
            return <div class="top-header hidden-xs clearfix">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-7 col-sm-7 sl-header-text">
                <div class="label-offer-slider">Khuyến mãi</div>
                <div class="offer-wrapper">
                    <div class="offer-header">
                        <ul id="offer-slider" class="owl-carousel owl-theme owl-loaded">
                            <li><a href="http://haravan.com/?ref=nobita-1">Khuyến mãi khủng giảm tới 80% giá niêm yết</a> </li>

                            <li><a href="http://haravan.com/?ref=nobita-1">Thông báo lịch nghỉ lễ 2-9</a> </li>

                            <li><a href="http://haravan.com/?ref=nobita-1">Hướng dẫn chọn sản phẩm dưỡng da tốt</a> </li>

                            <li><a href="http://haravan.com/?ref=nobita-1">Thứ 3 Happy day giảm 5% mỗi đơn hàng</a> </li>
                        </ul>
                        
                    </div>
                </div>

            </div>

            <div class="col-lg-5 col-md-5 col-sm-5 hidden-xs">
                <ul class="log-cart hidden-xs">
                    <li class="cart-info hidden-xs">
                        <a class="cart-link" href="cart.html">
							Giỏ hàng
							<span class="icon-cart">	
								<svg class="icon-bag-cart">
									<use xlinkHref="#ico-bag-cart"/>
								</svg>					
							</span>
							<div class="cart-number">0</div>
						</a>
                        <div class="cart-view clearfix" style={displayNone}>
                            <table id="clone-item-cart" class="table-clone-cart">
                                            <thead><tr><td></td></tr></thead>       

                                            <tbody>
                                <tr class="item_2 hidden">
                                    <td class="img">
                                        <a href="#" title=""><img src="#" alt="" /></a>
                                    </td>
                                    <td>
                                        <a class="pro-title-view" href="#" title=""></a>
                                        <span class="pro-quantity-view"></span>
                                        <span class="pro-price-view"></span>
                                    </td>
                                </tr>
                                            
                                            </tbody>            
                            </table>
                            <table id="cart-view">
                                            <thead></thead>
                                            <tbody>

                                <tr>
                                    <td>Hiện chưa có sản phẩm</td>
                                </tr>
                                            </tbody>

                            </table>
                            <span class="line"></span>
                                        <table class="table-total">
                                            <thead></thead>
                                            <tbody>

                                <tr>
                                    <td align="left">TỔNG TIỀN:</td>
                                    <td align="right" id="total-view-cart">0₫</td>
                                </tr>
                                <tr>
                                    <td><a href="cart.html" class="linktocart">Xem giỏ hàng</a></td>
                                    <td><a href="cart.html" class="linktocheckout">Thanh toán</a></td>
                                </tr>
                                            </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
        }
    }

    export default Top