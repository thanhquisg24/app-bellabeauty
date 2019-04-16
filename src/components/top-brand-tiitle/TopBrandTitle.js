import React from 'react';
import 'jquery/src/jquery';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import './TopBrandTitle.css';

const style1 = { width: 'calc(100% - 44px)'};
class TopBrandTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    };
        componentWillMount() {
            //truoc khi render
        
        };
        componentDidMount() {
            //sau khi render
            // Jquery here $(...)...
        };
        render() {
            return <div class="bottom-header hidden-xs clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 hidden-xs">
                            <div class="page-header-container">
                                <div class="logo">
                                    
                                    <h1>
                                        <a href="index.html" title="Bella Beauty">
                                            <img src="assets/images/theme/logo324c.png?v=222" alt="Bella Beauty" />
                                        </a>
                                    </h1>
                                    
                                </div>

                                <div class="header-search desktop hidden-xs">
                                    <form action="https://bella-beauty.myharavan.com/search">
                                        <div class="box-search">
                                            <div class="box-input">
                                                <input type="hidden" name="type" value="product" />
                                                <div class="input-group-search" style={style1}>
                                                    <input type="text" name="q" placeholder="Tìm kiếm ..." />
                                                </div>
                                                <button type="submit"><i class="fa fa-search"></i></button>
                                            </div>						
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
        	</div>
        }
    }

    export default TopBrandTitle