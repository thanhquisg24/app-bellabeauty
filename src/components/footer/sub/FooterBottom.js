import React from 'react';

class FooterBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    };
        componentWillMount() {
            //truoc khi render
        
        };
        render() {
            return<div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="footer-bottom-wrap clearfix">
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 wow animated fadeInLeft" data-wow-delay="150ms">
    
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 border-left wow animated fadeInUp" data-wow-delay="150ms">
                            
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right wow animated fadeInRight" data-wow-delay="150ms">
                            <div class="copyright">
                                <p>&copy; Bản quyền thuộc về <a href="http://nobita.myharavan.com/" target="_blank">Nobita</a>. Cung cấp bởi <a href="http://haravan.com/" target="_blank">Haravan</a>.</p>                
                            </div>
                            
                        </div>            
                    </div>
                </div>
            </div>
        </div>
            
       
        }
    }

    export default FooterBottom