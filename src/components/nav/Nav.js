import React from 'react';
import 'jquery/src/jquery';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery.mmenu/dist/jquery.mmenu.all.css';
import 'jquery.mmenu/dist/jquery.mmenu.all.js';
import './Nav.css';

class Nav extends React.Component {
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
            $(window).resize(function(){
                $('li.dropdown li.active').parents('.dropdown').addClass('active');
                if($('.right-menu').width() + $('#navbar').width() > $('.check_nav.nav-wrapper').width() - 40)
                {
                    $('.container-mp.nav-wrapper').addClass('responsive-menu');
                }
                else{
                    $('.container-mp.nav-wrapper').removeClass('responsive-menu');
                }
            })
            $(document).on("click", "ul.mobile-menu-icon .dropdown-menu ,.drop-control .dropdown-menu, .drop-control .input-dropdown", function (e) {
                e.stopPropagation();
            });
        jQuery(document).ready(function(){
	var check_drop = true;
	var timeOutMenu;

	$('.menu-top > li > a').hover(
		function(){
			clearTimeout(timeOutMenu);
			$('.menu-top > li > a:not(.main)').removeClass('active');
			$(this).addClass('active');
			$('.drop-menu').stop().slideUp(200);
			$(this).parent('li').addClass('drop').children('.drop-menu').slideDown(200);		
		},
		function(){
			if ( $('.menu-top > li > a.main').length == 0 && $(this).parent('li.hasChild').length == 0 ) {
				$(this).removeClass('active');
			}
			if ( $(this).parent('li:not(.hasChild)').length == 1 && $('.menu-top > li > a.main').length == 1 ) {
				$(this).not('.main').removeClass('active');
			}
			timeOutMenu = setTimeout(function(){
				if (check_drop) {
					$('.drop-menu').stop().slideUp(200);
					//$(this).removeClass('active');
					//$(this).parent('li').removeClass('drop').children('.drop-menu').stop().slideUp(200);
				}
			},500);
		}
	);
	$('.drop-menu').hover(
		function() {
			check_drop = false;
		},
		function() {
			if ( $(this).parent('li').children('a:not(.main)') ) {
				$(this).parent('li').children('a:not(.main)').removeClass('active');
			}
			check_drop = true;
			$(this).stop().slideUp(200);
		}
	);
})
$(function() {
	$('nav#menu-mobile').mmenu();
});
$(document).ready(function(){
	var flagg = true;
	if(flagg){
		$('.click-menu-mobile a').click(function(){
			$('#menu-mobile').removeClass('hidden');
			flagg = false;
		})
	}
})
jQuery(document).ready(function(){
	var check_drop = true;
	var timeOutMenu;

	$('.menu-top > li > a').hover(
		function(){
			clearTimeout(timeOutMenu);
			$('.menu-top > li > a:not(.main)').removeClass('active');
			$(this).addClass('active');
			$('.drop-menu').stop().slideUp(200);
			$(this).parent('li').addClass('drop').children('.drop-menu').slideDown(200);		
		},
		function(){
			if ( $('.menu-top > li > a.main').length == 0 && $(this).parent('li.hasChild').length == 0 ) {
				$(this).removeClass('active');
			}
			if ( $(this).parent('li:not(.hasChild)').length == 1 && $('.menu-top > li > a.main').length == 1 ) {
				$(this).not('.main').removeClass('active');
			}
			timeOutMenu = setTimeout(function(){
				if (check_drop) {
					$('.drop-menu').stop().slideUp(200);
					//$(this).removeClass('active');
					//$(this).parent('li').removeClass('drop').children('.drop-menu').stop().slideUp(200);
				}
			},500);
		}
	);
	$('.drop-menu').hover(
		function() {
			check_drop = false;
		},
		function() {
			if ( $(this).parent('li').children('a:not(.main)') ) {
				$(this).parent('li').children('a:not(.main)').removeClass('active');
			}
			check_drop = true;
			$(this).stop().slideUp(200);
		}
	);
})
$(function() {
	$('nav#menu-mobile').mmenu();
});
$(document).ready(function(){
	var flagg = true;
	if(flagg){
		$('.click-menu-mobile a').click(function(){
			$('#menu-mobile').removeClass('hidden');
			flagg = false;
		})
	}
})
            
        
        };
        render() {
            return<nav class="navbar-main navbar navbar-default cl-pri">
  
            <div class="container nav-wrapper">
                <div class="row">
                    <div class="navbar-header">
                    <div class="menu-btn click-menu-mobile "><a href="#menu-mobile" class="">
                                
                                <span class="icon-menu"></span>
                                
                                </a>
                            </div>
                        <div class="pull-right mobile-menu-icon-wrapper">					
                            <div class="logo logo-mobile">
                                <a href="index.html" title="Bella Beauty">
                                    <img src="assets/images/theme/logo324c.png?v=222" alt="Bella Beauty" />
                                </a>
                            </div>
                            <ul class="mobile-menu-icon clearfix">
                                <li class="search">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-default dropdown-toggle icon-search" data-toggle="dropdown" aria-expanded="false"></button>
                                        <div class="dropdown-menu" role="menu">
                                            <div class="search-bar">
                                                <div class="">
                                                    <form class="col-md-12" action="https://bella-beauty.myharavan.com/search">
                                                        <input type="hidden" name="type" value="product" />
                                                        <input type="text" name="q" placeholder="Tìm kiếm..." />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li id="cart-target" class="cart">
                                    <a href="cart.html" class="cart " title="Giỏ hàng">
                                        <span class="icon-cart">	
                                                <svg class="icon-bag-cart">
                                            <use xlinkHref="#ico-bag-cart"></use>
                                        </svg>								
                                        </span>		
                                        <span id="cart-count">0</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div id="header">
                        <div class="menu-desktop hidden-xs">
            <ul class="menu-top clearfix">
                
                
                
                        
                
                <li class="fix-icon-coll">
                    <a href="index.html" class="maxi-menu-link  current" title="Trang chủ">
                        <span>Trang chủ</span>
                    </a>
                </li>
                
                
                
                
                
                        
                
                
                <li class="hasChild fix-icon-coll" >
                    <a href="collections/all.html" title="Trang điểm" class="maxi-menu-link ">
                        <span>Trang điểm</span>
                    </a>
                    
                    <div class="submenu menu-col-2">
                        <div class="submenu-col">
                            <ul >		
                                
                                <li>
                                    <a href="index.html" class="current" title="Son môi">Son môi</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="BB Cream - C Cream">BB Cream - C Cream</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Chì kẻ mày - Chì kẻ mắt">Chì kẻ mày - Chì kẻ mắt</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Phấn má hồng">Phấn má hồng</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Phấn phủ - Phấn tươi">Phấn phủ - Phấn tươi</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Mascara">Mascara</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Nước tẩy trang">Nước tẩy trang</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="hidden-xs submenu_img">
                            
                            
                            
                            <h3> Kem BB Cream trắng da đa tác dụng</h3>
                            <div class="featured-img">
                                <a href="#">
                                    <img src="assets/images/theme/menu_index_img_1324c.jpg?v=222"  alt=" Kem BB Cream trắng da đa tác dụng" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </li>
                
                
                
                
                
                        
                
                
                <li class="hasChild fix-icon-coll" >
                    <a href="collections/cham-soc-da.html" title="Chăm sóc da" class="maxi-menu-link ">
                        <span>Chăm sóc da</span>
                    </a>
                    
                    <div class="submenu menu-col-2">
                        <div class="submenu-col">
                            <ul >		
                                
                                <li>
                                    <a href="index.html" class="current" title="Sữa rửa mặt">Sữa rửa mặt</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Dưỡng mắt">Dưỡng mắt</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Chăm sóc mũi">Chăm sóc mũi</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Mặt nạ">Mặt nạ</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Sản phẩm dưỡng da mặt">Sản phẩm dưỡng da mặt</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Tẩy tế bào chết">Tẩy tế bào chết</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Kem chống nắng">Kem chống nắng</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="hidden-xs submenu_img">
                            
                            
                            
                            <h3>Sửa rửa mặt chiết xuất hoa anh đào KMA</h3>
                            <div class="featured-img">
                                <a href="#">
                                    <img src="assets/images/theme/menu_index_img_2324c.jpg?v=222"  alt="Sửa rửa mặt chiết xuất hoa anh đào KMA" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </li>
                
                
                
                
                
                        
                
                
                <li class="hasChild fix-icon-coll" >
                    <a href="collections/cham-soc-toc" title="Chăm sóc tóc" class="maxi-menu-link ">
                        <span>Chăm sóc tóc</span>
                    </a>
                    
                    <div class="submenu menu-col-2">
                        <div class="submenu-col">
                            <ul >		
                                
                                <li>
                                    <a href="index.html" class="current" title="Dầu gội">Dầu gội</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Dầu xả">Dầu xả</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Kem ủ tóc">Kem ủ tóc</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Thuốc nhuộm tóc">Thuốc nhuộm tóc</a>
                                </li>
                                
                                <li>
                                    <a href="index.html" class="current" title="Bộ chăm sóc tóc">Bộ chăm sóc tóc</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="hidden-xs submenu_img">
                            
                            
                            
                            <h3>Bộ sản phẩm chăm sóc tóc L'Oreal Mythic Oil</h3>
                            <div class="featured-img">
                                <a href="#">
                                    <img src="assets/images/theme/menu_index_img_3324c.jpg?v=222"  alt="Bộ sản phẩm chăm sóc tóc L'Oreal Mythic Oil" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </li>
                
                
                
                
                
                        
                
                
                <li class="hasChild fix-icon-coll" >
                    <a href="collections/trang-tri-moc.html" title="Trang trí móng" class="maxi-menu-link ">
                        <span>Trang trí móng</span>
                    </a>
                    
                    <ul >		
                        
                        <li>
                            <a href="index.html" class="current" title="Miếng dán móng tay">Miếng dán móng tay</a>
                        </li>
                        
                        <li>
                            <a href="index.html" class="current" title="Móng giả">Móng giả</a>
                        </li>
                        
                        <li>
                            <a href="index.html" class="current" title="Hình săm">Hình săm</a>
                        </li>
                        
                        <li>
                            <a href="index.html" class="current" title="Dụng cụ trang trí móng">Dụng cụ trang trí móng</a>
                        </li>
                        
                    </ul>
                    
                </li>
                
                
                
                
                
                        
                
                <li class="fix-icon-coll">
                    <a href="blogs/news" class="maxi-menu-link " title="Blog">
                        <span>Blog</span>
                    </a>
                </li>
                
                
                
                
                
                        
                
                <li class="fix-icon-coll">
                    <a href="pages/about-us.html" class="maxi-menu-link " title="Giới thiệu">
                        <span>Giới thiệu</span>
                    </a>
                </li>
                
                
                
                
                
                        
                
                <li class="fix-icon-coll">
                    <a href="pages/lien-he.html" class="maxi-menu-link " title="Liên hệ">
                        <span>Liên hệ</span>
                    </a>
                </li>
                
                
                
                
                
                        
                
                <li class="fix-icon-coll">
                    <a href="pages/mot-so-cau-hoi-thuong-gap.html" class="maxi-menu-link " title="Câu hỏi thường gặp">
                        <span>Câu hỏi thường gặp</span>
                    </a>
                </li>
                
                
            </ul>
        </div>
        
                    </div>
        
        
                </div>
            </div>
        </nav>
  
        }
    }

    export default Nav