import React from 'react';

class FooterInfo extends React.Component {
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
            return <div class="footer-info">
            <div class="container">		
                <div class="row">
                    
                    <div class="col-md-4" id="company_info">
                        <h4 class="small-title">CÔNG TY TNHH Haravan</h4>
                        <p class="mst">Haravan.com - GPKD số 0312662961 - Cấp ngày 27.02.2014 - Sở KHĐT Tp. Hồ Chí Minh</p>
                    </div>
                    
                    
                    <div class="col-md-4" id="social_links">
                        <h4 class="small-title">Kết nối chúng tôi qua </h4>
                        <div>
                            
                            <a href="#01"  target="_blank">
                                <i class="fa fa-facebook"></i>
                            </a>
                            
                            
                            <a href="#02"   target="_blank">
                                <i class="fa fa-twitter"></i>
                            </a>
                            
                            
                            <a href="#03" target="_blank">
                                <i class="fa fa-google-plus"></i>
                            </a>
                            
                            
                            <a href="#04" target="_blank">
                                <i class="fa fa-youtube"></i>
                            </a>
                            
                        </div>
                    </div>
                    
                    
                    <div class="col-md-4" id="hotline">
                        <h4 class="small-title">HOTLINE HỖ TRỢ</h4>
                        <div class="phone">
                            <img src="assets/images/theme/icon_call324c.png?v=222" alt="Icon call"/>
                            <a href="tel:1900603969">1900603969</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        }
    }

    export default FooterInfo