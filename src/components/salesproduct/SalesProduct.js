import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './SalesProduct.css';
import BoxProduct from '../product/BoxProduct'

const data = {
    products: [{
        "id":1,
        "alt": "Bộ dưỡng da isoi Bulgarian Rose Blemish",
        "url": "/products/bo-duong-da-isoi-bulgarian-rose-blemish",
        "img": "/assets/images/product/1441882343_keratinnailcareset-min_medium.jpg",
        "name": "Bộ dưỡng da isoi Bulgarian Rose Blemish ",
        "discount_rate": 8,
        "price":1000000,
        "old_price":  1269000
        },
        {
            "id":2,
            "alt": "Bộ dưỡng da isoi Bulgarian Rose Blemish",
            "url": "/products/bo-duong-da-isoi-bulgarian-rose-blemish",
            "img": "assets/images/product/1441882343_keratinnailcareset-min_medium.jpg",
            "name": "Bộ dưỡng da isoi Bulgarian Rose Blemish ",
            "discount_rate": 8,
            "price":1000000,
            "old_price":  1269000
            }

    ]
}


class SalesProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    };
        componentWillMount() {
            //truoc khi render
            this.setState(data);
        };
        componentDidMount() {
            //sau khi render
            // Jquery here $(...)...

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
                        <BoxProduct  items={this.state} ></BoxProduct>
                    </div>
                </div>
            </div>
        </div>
        
        }
    }
    export default SalesProduct