import React from 'react';

class FooterMail extends React.Component {
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
            return <div class="footer-mailchimp hidden-xs">
            	<div class="container">		
			<div class="footer-mailchimp-wrap col-md-12 col-sm-12 col-xs-12 ">
				<div class="row">
					
					<div class="col-md-12 col-sm-12 col-xs-12 wow animated fadeInUp" data-wow-delay="100ms" >
						<div id="newsletter_block" class="footer-block">
							<div class="des-new-title">    
<svg class='ico-letter-home div-user-control control-4' >
									<use xlinkHref='#icon-letter-home'></use>
								</svg>
								<h4 class="title_newsletter">
									Đăng kí nhận<br/> bảng tin shop
								</h4>
							</div>			
							<div class="des_newsletter">
								 Cập nhật thông tin khuyến mãi nhanh nhất<br/>                     Hưởng quyền lợi giảm giá riêng biệt
							</div>
							<div class="block_content">  
								<form id="mc-embedded-subscribe-form" acceptCharset="UTF-8" action="https://bella-beauty.myharavan.com/account/contact" class="contact-form" method="post">
									<input name="form_type" type="hidden" value="customer"/>
									<input name="utf8" type="hidden" value="✓"/>
									<input type="hidden" id="contact_tags" name="contact[tags]" value="khách hàng tiềm năng,Bản tin"/>
									<input type="hidden" id="newsletter-first-name" name="contact[first_name]" value="Người đăng ký"/>
									<input type="hidden" id="newsletter-last-name" name="contact[last_name]" value=""/>
									<div class="newsletter-form">
										<input type="email" placeholder="Nhập email của bạn.." name="contact[email]" id="mail" class="newsletter-input form-control input-lg" />                
										<button class="btn-newsletter" type="submit">
											<span>Gửi</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					
				</div>
			</div>

		</div>    
        </div>

        }
    }

    export default FooterMail