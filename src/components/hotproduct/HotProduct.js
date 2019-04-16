import React from 'react';

import 'jquery/src/jquery';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './HotProduct.css';

const displayNone = { display: 'none' };
const margin1 = {margin: '1px 0px'}
class HotProduct extends React.Component {
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
            // Check owl item next/prev show or hide
            var item = null;
            function checkItemOwlShow(object, tab, a, b, c, d) {
                        
                        if ( tab == 'tab' ) {
                            item = object.find('.active').find('.owl-carousel');
                        } else {
                            item = object.find('.owl-carousel');
                        }	
                        if ( item.find('.owl-item.active').length < a && $(window).width() >= 1200 ) {
                            item.find('.owl-controls').hide();
                        }
                        if ( item.find('.owl-item.active').length < b && $(window).width() >= 992 && $(window).width() < 1199 ) {
                            item.find('.owl-controls').hide();
                        }
                        if ( item.find('.owl-item.active').length < c && $(window).width() >= 768 && $(window).width() < 991 ) {
                            item.find('.owl-controls').hide();
                        }
                        if ( item.find('.owl-item.active').length < d && $(window).width() < 768 ) {
                            item.find('.owl-controls').hide();
                        }
                    }

                                        jQuery.ready(function(){			
                                            var owl_tab = $('.tabs-products .tab-item.active .owl-carousel');
                                            owl_tab.owlCarousel({
                                                items:5,
                                                nav:true,
                                                loop: true,
                                                margin: 20,
                                                responsive:{
                                                    0:{
                                                        items:2								
                                                    },
                                                    768:{
                                                        items:3
                                                    },
                                                    992:{
                                                        items:5
                                                    },
                                                    1200:{
                                                        items:5
                                                    }
                                                }
                                            });
                                            owl_tab.find('.owl-next').css({"position":"absolute","right":"5px","top":"40%"}).html("<svg class='svg-next-icon svg-next-icon-size-32' style='fill:#e5e5e5'><use xlink:href='#icon-right-owlCarousel'></use></svg>");
                                            owl_tab.find('.owl-prev').css({"position":"absolute","left":"5px","top":"40%"}).html("<svg class='svg-next-icon svg-next-icon-size-32' style='fill:#e5e5e5'><use xlink:href='#icon-left-owlCarousel'></use></svg>");								
                                            checkItemOwlShow($('.tabs-products'),'tab',5,5,3,2);	
                                            $(window).resize();
                                        });		
                                      
           
        };
        render() {
            return <div class="container box-section-collection">
            <div class="row">
                <div class="col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <h2 class="headline-serif headline-separator-holder">
                                        <span class="headline-separator">SẢN PHẨM NỔI BẬT</span>
                                    </h2>
        
                        </div>
                        <div class="col-xs-12">
                            <div class="wrap-tabs">
                                <div class="menu-slider swiper-container">
                                    <ul class="box-tabs nav nav-tabs clearfix" id="ajax-tab-collection">
        
                                        <li class="active">
                                            <a href="#tab1" data-toggle="tab" data-handle="hot-products">Đang giảm giá</a>
                                        </li>
        
                                        <li>
                                            <a href="#tab2" data-toggle="tab" data-handle="hot-products">Hot nhất</a>
                                        </li>
        
                                        <li>
                                            <a href="#tab3" data-toggle="tab" data-handle="frontpage">Quan tâm nhất</a>
                                        </li>
        
                                    </ul>
                                </div>
                                <div class="tab-content tabs-products">
                                    <div class="tab-item active" id="tab1" data-get="true">
        
                                        <div class="owl-carousel product-lists owl-theme owl-loaded">
        
                                            <div class="item product-item box-product-lists">
        
                                                <div class="product-wrapper product-resize" style={margin1}>
                                                    <div class="product-information">
                                                        <div class="product-detail">
                                                            <div class="product-image image-resize">
                                                                <a href="products/a-tet.html" title="a tét">
        
                                                                    <img class="respon-owlCarousel" src="../assets/images//product/banner_qc_medium.jpg" alt="a tét" />
        
                                                                </a>
                                                                <div class="field-new countdown_1006011842" style={displayNone}>
                                                                    <span>new</span>
                                                                </div>
        
                                                                <div class="btn-cart-product">
                                                                    <a href="javascript:void(0);" onclick="add_item_show_modalCart(1014301558)"><i class="fa fa-shopping-cart"></i></a>
                                                                </div>
                                                                <div class="btn-quickview-product">
                                                                    <a href="javascript:void(0);" class="quickview" data-handle="/products/a-tet"><i class="fa fa-search"></i></a>
                                                                </div>
                                                                <div class="btn-wishlist-product">
                                                                    <a href="#"><i class="fa fa-heart-o"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="product-info">
                                                                <a href="products/a-tet.html" title="a tét">
                                                                    <h2>
                                        a tét
                                    </h2>
                                                                </a>
        
                                                                <div class="price-info clearfix">
                                                                    <div class="price-new-old">
                                                                        <span>1,000,000₫</span>
        
                                                                    </div>
                                                                </div>
        
                                                            </div>
                                                        </div>
                                                    </div>
        
                                                </div>
                                            </div>
        
                                            <div class="item product-item box-product-lists">
        
                                                <div class="product-wrapper product-resize" style={margin1}>
                                                    <div class="product-information">
                                                        <div class="product-detail">
                                                            <div class="product-image image-resize">
                                                                <a href="products/bo-duong-cung-mong-joycos-keratin-nail.html" title="Bộ dưỡng cứng móng Joycos Keratin Nail">
        
                                                                    <img class="respon-owlCarousel" src="../assets/images//product/1441882343_keratinnailcareset-min_medium.jpg" alt="Bộ dưỡng cứng móng Joycos Keratin Nail" />
        
                                                                </a>
                                                                <div class="field-new countdown_1002252127" style={displayNone}>
                                                                    <span>new</span>
                                                                </div>
        
                                                                <div class="field-sale">
                                                                    <span>-8%</span>
                                                                </div>
        
                                                                <div class="pos-img">
                                                                    <a href="#" class="box_designer">
                                                                        <img alt='' src="assets/images/static/569/1000080569/1000123460/mongtay_thumb.jpg" />
                                                                    </a>
                                                                </div>
        
                                                                <div class="btn-cart-product">
                                                                    <a href="javascript:void(0);" onclick="add_item_show_modalCart(1006890619)"><i class="fa fa-shopping-cart"></i></a>
                                                                </div>
                                                                <div class="btn-quickview-product">
                                                                    <a href="javascript:void(0);" class="quickview" data-handle="/products/bo-duong-cung-mong-joycos-keratin-nail"><i class="fa fa-search"></i></a>
                                                                </div>
                                                                <div class="btn-wishlist-product">
                                                                    <a href="#"><i class="fa fa-heart-o"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="product-info">
                                                                <a href="products/bo-duong-cung-mong-joycos-keratin-nail.html" title="Bộ dưỡng cứng móng Joycos Keratin Nail">
                                                                    <h2>
                                        Bộ dưỡng cứng móng Joycos Keratin Nail
                                    </h2>
                                                                </a>
        
                                                                <div class="price-info clearfix">
                                                                    <div class="price-new-old">
                                                                        <span>6,500,000₫</span>
        
                                                                        <small>Giá trị thực 7,000,000₫</small>
        
                                                                    </div>
                                                                </div>
        
                                                            </div>
                                                        </div>
                                                    </div>
        
                                                </div>
                                            </div>
        
                                            <div class="item product-item box-product-lists">
        
                                                <div class="product-wrapper product-resize" style={margin1}>
                                                    <div class="product-information">
                                                        <div class="product-detail">
                                                            <div class="product-image image-resize">
                                                                <a href="products/bo-duong-da-isoi-bulgarian-rose-blemish.html" title="Bộ dưỡng da isoi Bulgarian Rose Blemish">
        
                                                                    <img class="respon-owlCarousel" src="assets/images/static/569/1000080569/1/2016/5-12/30670_wgjb7gvptp_medium.jpg" alt="Bộ dưỡng da isoi Bulgarian Rose Blemish" />
        
                                                                </a>
                                                                <div class="field-new countdown_1002249317" style={displayNone}>
                                                                    <span>new</span>
                                                                </div>
        
                                                                <div class="field-sale">
                                                                    <span>-22%</span>
                                                                </div>
        
                                                                <div class="pos-img">
                                                                    <a href="#" class="box_designer">
                                                                        <img alt='' src="assets/images/static/569/1000080569/1000123460/duongda_thumb.jpg" />
                                                                    </a>
                                                                </div>
        
                                                                <div class="btn-cart-product">
                                                                    <a href="javascript:void(0);" onclick="add_item_show_modalCart(1006885195)"><i class="fa fa-shopping-cart"></i></a>
                                                                </div>
                                                                <div class="btn-quickview-product">
                                                                    <a href="javascript:void(0);" class="quickview" data-handle="/products/bo-duong-da-isoi-bulgarian-rose-blemish"><i class="fa fa-search"></i></a>
                                                                </div>
                                                                <div class="btn-wishlist-product">
                                                                    <a href="#"><i class="fa fa-heart-o"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="product-info">
                                                                <a href="products/bo-duong-da-isoi-bulgarian-rose-blemish.html" title="Bộ dưỡng da isoi Bulgarian Rose Blemish">
                                                                    <h2>
                                        Bộ dưỡng da isoi Bulgarian Rose Blemish
                                    </h2>
                                                                </a>
        
                                                                <div class="price-info clearfix">
                                                                    <div class="price-new-old">
                                                                        <span>1,000,000₫</span>
        
                                                                        <small>Giá trị thực 1,269,000₫</small>
        
                                                                    </div>
                                                                </div>
        
                                                            </div>
                                                        </div>
                                                    </div>
        
                                                </div>
                                            </div>
        
                                            <div class="item product-item box-product-lists">
        
                                                <div class="product-wrapper product-resize" style={margin1}>
                                                    <div class="product-information">
                                                        <div class="product-detail">
                                                            <div class="product-image image-resize">
                                                                <a href="products/bo-qua-tang-guerlain-insolence-eau-de.html" title="Bộ quà tặng Guerlain Insolence Eau de">
        
                                                                    <img class="respon-owlCarousel" src="../assets/images//product/1457929027967_8564371-min_medium.jpg" alt="Bộ quà tặng Guerlain Insolence Eau de" />
        
                                                                </a>
                                                                <div class="field-new countdown_1002252139" style={displayNone}>
                                                                    <span>new</span>
                                                                </div>
        
                                                                <div class="field-sale">
                                                                    <span>-8%</span>
                                                                </div>
        
                                                                <div class="btn-cart-product">
                                                                    <a href="javascript:void(0);" onclick="add_item_show_modalCart(1006890636)"><i class="fa fa-shopping-cart"></i></a>
                                                                </div>
                                                                <div class="btn-quickview-product">
                                                                    <a href="javascript:void(0);" class="quickview" data-handle="/products/bo-qua-tang-guerlain-insolence-eau-de"><i class="fa fa-search"></i></a>
                                                                </div>
                                                                <div class="btn-wishlist-product">
                                                                    <a href="#"><i class="fa fa-heart-o"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="product-info">
                                                                <a href="products/bo-qua-tang-guerlain-insolence-eau-de.html" title="Bộ quà tặng Guerlain Insolence Eau de">
                                                                    <h2>
                                        Bộ quà tặng Guerlain Insolence Eau de
                                    </h2>
                                                                </a>
        
                                                                <div class="price-info clearfix">
                                                                    <div class="price-new-old">
                                                                        <span>6,900,000₫</span>
        
                                                                        <small>Giá trị thực 7,500,000₫</small>
        
                                                                    </div>
                                                                </div>
        
                                                            </div>
                                                        </div>
                                                    </div>
        
                                                </div>
                                            </div>
        
                                            <div class="item product-item box-product-lists">
        
                                                <div class="product-wrapper product-resize" style={margin1}>
                                                    <div class="product-information">
                                                        <div class="product-detail">
                                                            <div class="product-image image-resize">
                                                                <a href="products/bo-san-pham-cham-soc-da-nhay-cam-va-da-kho.html" title="Bộ sản phẩm chăm sóc da nhạy cảm và da khô">
        
                                                                    <img class="respon-owlCarousel" src="../assets/images//product/1452760758819_6381400-min_medium.jpg" alt="Bộ sản phẩm chăm sóc da nhạy cảm và da khô" />
        
                                                                </a>
                                                                <div class="field-new countdown_1002251497" style={displayNone}>
                                                                    <span>new</span>
                                                                </div>
        
                                                                <div class="field-sale">
                                                                    <span>-15%</span>
                                                                </div>
        
                                                                <div class="pos-img">
                                                                    <a href="#" class="box_designer">
                                                                        <img alt='' src="assets/images/static/569/1000080569/1000123460/duongda_thumb.jpg" />
                                                                    </a>
                                                                </div>
        
                                                                <div class="btn-cart-product">
                                                                    <a href="javascript:void(0);" onclick="add_item_show_modalCart(1006889244)"><i class="fa fa-shopping-cart"></i></a>
                                                                </div>
                                                                <div class="btn-quickview-product">
                                                                    <a href="javascript:void(0);" class="quickview" data-handle="/products/bo-san-pham-cham-soc-da-nhay-cam-va-da-kho"><i class="fa fa-search"></i></a>
                                                                </div>
                                                                <div class="btn-wishlist-product">
                                                                    <a href="#"><i class="fa fa-heart-o"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="product-info">
                                                                <a href="products/bo-san-pham-cham-soc-da-nhay-cam-va-da-kho.html" title="Bộ sản phẩm chăm sóc da nhạy cảm và da khô">
                                                                    <h2>
                                        Bộ sản phẩm chăm sóc da nhạy cảm và da khô
                                    </h2>
                                                                </a>
        
                                                                <div class="price-info clearfix">
                                                                    <div class="price-new-old">
                                                                        <span>590,000₫</span>
        
                                                                        <small>Giá trị thực 690,000₫</small>
        
                                                                    </div>
                                                                </div>
        
                                                            </div>
                                                        </div>
                                                    </div>
        
                                                </div>
                                            </div>
        
                                            <div class="item product-item box-product-lists">
        
                                                <div class="product-wrapper product-resize" style={margin1}>
                                                    <div class="product-information">
                                                        <div class="product-detail">
                                                            <div class="product-image image-resize">
                                                                <a href="products/bo-san-pham-cham-soc-da-thuong-va-da-hon-hop" title="Bộ sản phẩm chăm sóc da thường và da hỗn hợp">
        
                                                                    <img class="respon-owlCarousel" src="../assets/images//product/1452759403145_7027269-min_medium.jpg" alt="Bộ sản phẩm chăm sóc da thường và da hỗn hợp" />
        
                                                                </a>
                                                                <div class="field-new countdown_1002251513" style={displayNone}>
                                                                    <span>new</span>
                                                                </div>
        
                                                                <div class="field-sale">
                                                                    <span>-40%</span>
                                                                </div>
        
                                                                <div class="pos-img">
                                                                    <a href="#" class="box_designer">
                                                                        <img alt='' src="assets/images/static/569/1000080569/1000123460/duongda_thumb.jpg" />
                                                                    </a>
                                                                </div>
        
                                                                <div class="btn-cart-product">
                                                                    <a href="javascript:void(0);" onclick="add_item_show_modalCart(1006889269)"><i class="fa fa-shopping-cart"></i></a>
                                                                </div>
                                                                <div class="btn-quickview-product">
                                                                    <a href="javascript:void(0);" class="quickview" data-handle="/products/bo-san-pham-cham-soc-da-thuong-va-da-hon-hop"><i class="fa fa-search"></i></a>
                                                                </div>
                                                                <div class="btn-wishlist-product">
                                                                    <a href="#"><i class="fa fa-heart-o"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="product-info">
                                                                <a href="products/bo-san-pham-cham-soc-da-thuong-va-da-hon-hop" title="Bộ sản phẩm chăm sóc da thường và da hỗn hợp">
                                                                    <h2>
                                        Bộ sản phẩm chăm sóc da thường và da hỗn hợp
                                    </h2>
                                                                </a>
        
                                                                <div class="price-info clearfix">
                                                                    <div class="price-new-old">
                                                                        <span>600,000₫</span>
        
                                                                        <small>Giá trị thực 1,000,000₫</small>
        
                                                                    </div>
                                                                </div>
        
                                                            </div>
                                                        </div>
                                                    </div>
        
                                                </div>
                                            </div>
        
                                            <div class="item product-item box-product-lists">
        
                                                <div class="product-wrapper product-resize" style={margin1}>
                                                    <div class="product-information">
                                                        <div class="product-detail">
                                                            <div class="product-image image-resize">
                                                                <a href="products/combo-3-mat-na-lua-butybuty-usa-sach-nhon.html" title="Combo 3 Mặt nạ lụa BUTYBUTY USA sạch nhờn">
        
                                                                    <img class="respon-owlCarousel" src="assets/images/static/569/1000080569/1/2016/5-12/1453870404815_1340867_medium.png" alt="Combo 3 Mặt nạ lụa BUTYBUTY USA sạch nhờn" />
        
                                                                </a>
                                                                <div class="field-new countdown_1002249312" style={displayNone}>
                                                                    <span>new</span>
                                                                </div>
        
                                                                <div class="field-sale">
                                                                    <span>-10%</span>
                                                                </div>
        
                                                                <div class="pos-img">
                                                                    <a href="#" class="box_designer">
                                                                        <img alt='' src="assets/images/static/569/1000080569/1000123460/duongda_thumb.jpg" />
                                                                    </a>
                                                                </div>
        
                                                                <div class="btn-cart-product">
                                                                    <a href="javascript:void(0);" onclick="add_item_show_modalCart(1006885189)"><i class="fa fa-shopping-cart"></i></a>
                                                                </div>
                                                                <div class="btn-quickview-product">
                                                                    <a href="javascript:void(0);" class="quickview" data-handle="/products/combo-3-mat-na-lua-butybuty-usa-sach-nhon"><i class="fa fa-search"></i></a>
                                                                </div>
                                                                <div class="btn-wishlist-product">
                                                                    <a href="#"><i class="fa fa-heart-o"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="product-info">
                                                                <a href="products/combo-3-mat-na-lua-butybuty-usa-sach-nhon.html" title="Combo 3 Mặt nạ lụa BUTYBUTY USA sạch nhờn">
                                                                    <h2>
                                        Combo 3 Mặt nạ lụa BUTYBUTY USA sạch nhờn
                                    </h2>
                                                                </a>
        
                                                                <div class="price-info clearfix">
                                                                    <div class="price-new-old">
                                                                        <span>190,000₫</span>
        
                                                                        <small>Giá trị thực 210,000₫</small>
        
                                                                    </div>
                                                                </div>
        
                                                            </div>
                                                        </div>
                                                    </div>
        
                                                </div>
                                            </div>
        
                                        </div>
        
                                    </div>
        
                                    <div class="tab-item" id="tab2" data-get="false">
                                        <div class="owl-carousel product-lists"></div>
                                        <div class="icon-loading tab-index" style={displayNone}>
                                            <div class="uil-ring-css">
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="tab-item" id="tab3" data-get="false">
                                        <div class="owl-carousel product-lists"></div>
                                        <div class="icon-loading tab-index" style={displayNone}>
                                            <div class="uil-ring-css">
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="tab-item" id="tab4" data-get="false">
                                        <div class="owl-carousel product-lists"></div>
                                        <div class="icon-loading tab-index" style={displayNone}>
                                            <div class="uil-ring-css">
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="tab-item" id="tab5" data-get="false">
                                        <div class="owl-carousel product-lists"></div>
                                        <div class="icon-loading tab-index" style={displayNone}>
                                            <div class="uil-ring-css">
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="tab-item" id="tab6" data-get="false">
                                        <div class="owl-carousel product-lists"></div>
                                        <div class="icon-loading tab-index" style={displayNone}>
                                            <div class="uil-ring-css">
                                                <div></div>
                                            </div>
                                        </div>
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
    export default HotProduct