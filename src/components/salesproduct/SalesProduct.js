import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './SalesProduct.css';

const displayNone = { display: 'none' };
const margin1 = {margin: '1px 0px'}
class SalesProduct extends React.Component {
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
          
           
        };
        render() {
            return <div class="container home-collection">
            <div class="row">
                <div class="col-xs-12">
                    <h2 class="headline-serif headline-separator-holder">
                        <span class="headline-separator">Sản phẩm bán chạy</span>
                    </h2>
                </div>
                <div class="clearfix">
                    <div class="box-product-lists">
        
                        <div class="col-lg-20 col-md-3 col-sm-4 col-xs-6 product-item animated zoomIn">
        
                            <div class="product-wrapper product-resize">
                                <div class="product-information">
                                    <div class="product-detail">
                                        <div class="product-image image-resize">
                                            <a href="products/a-tet.html" title="a tét">
        
                                                <img src="assets/images/product/banner_qc_medium.jpg" alt="a tét" />
        
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
        
                        <div class="col-lg-20 col-md-3 col-sm-4 col-xs-6 product-item animated zoomIn">
        
                            <div class="product-wrapper product-resize">
                                <div class="product-information">
                                    <div class="product-detail">
                                        <div class="product-image image-resize">
                                            <a href="products/bo-duong-cung-mong-joycos-keratin-nail.html" title="Bộ dưỡng cứng móng Joycos Keratin Nail">
        
                                                <img src="assets/images/product/1441882343_keratinnailcareset-min_medium.jpg" alt="Bộ dưỡng cứng móng Joycos Keratin Nail" />
        
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
        
                                                    <small>Gía trị thực 7,000,000₫</small>
        
                                                </div>
                                            </div>
        
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                        </div>
        
                        <div class="col-lg-20 col-md-3 col-sm-4 col-xs-6 product-item animated zoomIn">
        
                            <div class="product-wrapper product-resize">
                                <div class="product-information">
                                    <div class="product-detail">
                                        <div class="product-image image-resize">
                                            <a href="products/son-mong-revlon-colorstay-gel.html" title="Sơn móng Revlon Colorstay Gel">
        
                                                <img src="assets/images/static/569/1000080569/1/2016/5-13/1461809816619_7078406_medium.jpg" alt="Sơn móng Revlon Colorstay Gel" />
        
                                            </a>
                                            <div class="field-new countdown_1002252156" style={displayNone}>
                                                <span>new</span>
                                            </div>
        
                                            <div class="pos-img">
                                                <a href="#" class="box_designer">
                                                    <img alt='' src="assets/images/static/569/1000080569/1000123460/mongtay_thumb.jpg" />
                                                </a>
                                            </div>
        
                                            <div class="btn-cart-product">
                                                <a href="javascript:void(0);" onclick="add_item_show_modalCart(1006890666)"><i class="fa fa-shopping-cart"></i></a>
                                            </div>
                                            <div class="btn-quickview-product">
                                                <a href="javascript:void(0);" class="quickview" data-handle="/products/son-mong-revlon-colorstay-gel"><i class="fa fa-search"></i></a>
                                            </div>
                                            <div class="btn-wishlist-product">
                                                <a href="#"><i class="fa fa-heart-o"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <a href="products/son-mong-revlon-colorstay-gel.html" title="Sơn móng Revlon Colorstay Gel">
                                                <h2>
                                Sơn móng Revlon Colorstay Gel
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
        
                        <div class="col-lg-20 col-md-3 col-sm-4 col-xs-6 product-item animated zoomIn">
        
                            <div class="product-wrapper product-resize">
                                <div class="product-information">
                                    <div class="product-detail">
                                        <div class="product-image image-resize">
                                            <a href="products/son-mong-tay-barielle" title="Sơn móng tay Barielle">
        
                                                <img src="assets/images/static/569/1000080569/1/2016/5-13/1456281637259_7498225_medium.jpg" alt="Sơn móng tay Barielle" />
        
                                            </a>
                                            <div class="field-new countdown_1002252148" style={displayNone}>
                                                <span>new</span>
                                            </div>
        
                                            <div class="field-sale">
                                                <span>-3%</span>
                                            </div>
        
                                            <div class="pos-img">
                                                <a href="#" class="box_designer">
                                                    <img alt='' src="assets/images/static/569/1000080569/1000123460/mongtay_thumb.jpg" />
                                                </a>
                                            </div>
        
                                            <div class="btn-cart-product">
                                                <a href="javascript:void(0);" onclick="add_item_show_modalCart(1006890654)"><i class="fa fa-shopping-cart"></i></a>
                                            </div>
                                            <div class="btn-quickview-product">
                                                <a href="javascript:void(0);" class="quickview" data-handle="/products/son-mong-tay-barielle"><i class="fa fa-search"></i></a>
                                            </div>
                                            <div class="btn-wishlist-product">
                                                <a href="#"><i class="fa fa-heart-o"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <a href="products/son-mong-tay-barielle" title="Sơn móng tay Barielle">
                                                <h2>
                                Sơn móng tay Barielle
                            </h2>
                                            </a>
        
                                            <div class="price-info clearfix">
                                                <div class="price-new-old">
                                                    <span>1,560,000₫</span>
        
                                                    <small>Gía trị thực 1,600,000₫</small>
        
                                                </div>
                                            </div>
        
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                        </div>
        
                        <div class="col-lg-20 col-md-3 col-sm-4 col-xs-6 product-item animated zoomIn">
        
                            <div class="product-wrapper product-resize">
                                <div class="product-information">
                                    <div class="product-detail">
                                        <div class="product-image image-resize">
                                            <a href="products/son-mong-tay-barielle-red.html" title="Sơn móng tay Barielle Red">
        
                                                <img src="assets/images/static/569/1000080569/1/2016/5-13/1456127414997_4400263_medium.jpg" alt="Sơn móng tay Barielle Red" />
        
                                            </a>
                                            <div class="field-new countdown_1002252151" style={displayNone}>
                                                <span>new</span>
                                            </div>
        
                                            <div class="field-sale">
                                                <span>-28%</span>
                                            </div>
        
                                            <div class="pos-img">
                                                <a href="#" class="box_designer">
                                                    <img alt='' src="assets/images/static/569/1000080569/1000123460/mongtay_thumb.jpg" />
                                                </a>
                                            </div>
        
                                            <div class="btn-cart-product">
                                                <a href="javascript:void(0);" onclick="add_item_show_modalCart(1006890661)"><i class="fa fa-shopping-cart"></i></a>
                                            </div>
                                            <div class="btn-quickview-product">
                                                <a href="javascript:void(0);" class="quickview" data-handle="/products/son-mong-tay-barielle-red"><i class="fa fa-search"></i></a>
                                            </div>
                                            <div class="btn-wishlist-product">
                                                <a href="#"><i class="fa fa-heart-o"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <a href="products/son-mong-tay-barielle-red.html" title="Sơn móng tay Barielle Red">
                                                <h2>
                                Sơn móng tay Barielle Red
                            </h2>
                                            </a>
        
                                            <div class="price-info clearfix">
                                                <div class="price-new-old">
                                                    <span>2,100,000₫</span>
        
                                                    <small>Gía trị thực 2,900,000₫</small>
        
                                                </div>
                                            </div>
        
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                        </div>
        
                        <div class="col-lg-20 col-md-3 col-sm-4 col-xs-6 product-item animated zoomIn">
        
                            <div class="product-wrapper product-resize">
                                <div class="product-information">
                                    <div class="product-detail">
                                        <div class="product-image image-resize">
                                            <a href="products/son-mong-tay-vacosi-nail-professional.html" title="Sơn móng tay Vacosi Nail Professional">
        
                                                <img src="assets/images/static/569/1000080569/1/2016/5-13/1459135100742_5712197_medium.jpg" alt="Sơn móng tay Vacosi Nail Professional" />
        
                                            </a>
                                            <div class="field-new countdown_1002252279" style={displayNone}>
                                                <span>new</span>
                                            </div>
        
                                            <div class="field-sale">
                                                <span>-7%</span>
                                            </div>
        
                                            <div class="pos-img">
                                                <a href="#" class="box_designer">
                                                    <img alt='' src="assets/images/static/569/1000080569/1000123460/mongtay_thumb.jpg" />
                                                </a>
                                            </div>
        
                                            <div class="btn-cart-product">
                                                <a href="javascript:void(0);" onclick="add_item_show_modalCart(1006891015)"><i class="fa fa-shopping-cart"></i></a>
                                            </div>
                                            <div class="btn-quickview-product">
                                                <a href="javascript:void(0);" class="quickview" data-handle="/products/son-mong-tay-vacosi-nail-professional"><i class="fa fa-search"></i></a>
                                            </div>
                                            <div class="btn-wishlist-product">
                                                <a href="#"><i class="fa fa-heart-o"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <a href="products/son-mong-tay-vacosi-nail-professional.html" title="Sơn móng tay Vacosi Nail Professional">
                                                <h2>
                                Sơn móng tay Vacosi Nail Professional
                            </h2>
                                            </a>
        
                                            <div class="price-info clearfix">
                                                <div class="price-new-old">
                                                    <span>1,490,000₫</span>
        
                                                    <small>Gía trị thực 1,600,000₫</small>
        
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
        </div>
        
        }
    }
    export default SalesProduct