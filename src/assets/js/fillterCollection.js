
//fix push parram filter file update : collection,collection.filter-collection,search.filter :icon-loading
// Event check filter destop or ipad
if ( jQuery(window).width() >= 1200 ) {
	jQuery('.wrapper-filter').html('');
} else {
	jQuery('.filter-destop').html('');
	jQuery('.wrapper-filter').on("click",".filter-box p",function(){
		if ( $(this).attr('aria-expanded') == 'true' ) {
			$(this).attr('aria-expanded','false');
			$(this).parent().children('ul').slideUp();
		} else {
			$(this).attr('aria-expanded','true');
			$(this).parent().children('ul').slideDown();
		}
	});
}
// Event open filter on mobile and ipad
jQuery(document).on("click", '.btn-filter-mobile, .btn-close-filter-mobile', function(){
	jQuery('.wrapper-filter').toggleClass('filter-visible');
	jQuery('.wrapper-filter .filter-box-scroll').css('max-height',jQuery(window).height() - 38);
});
// Biến global
var check_slided_price = false; // Nếu click mới bắt đầu filter price
var collection_handle = 'all';
var collectionid = '0';
var query = '';
if ( collectionid == 0 ) {
	query = "(collectionid:product>" + collectionid + ')';
} else {
	query = "(collectionid:product=" + collectionid + ')';
} 
var total_page = 3 // Tổng trang
var cur_page = 1; // Trang hiện tại
var total_num = parseInt(30); // Số lượng sản phẩm của nhóm
var num_per = 12; // Số lượng sản phẩm trên một trang
var check_get_totalnum = true;
var count_product = function(total){
	var number_product = total - cur_page * num_per;
	$('.btn-loading > span').html(number_product);
	if(number_product <= 0){
		$('.loadmore').hide();
	} else {
		$('.loadmore').show();
	}
}
var loadingcomplete = true;
var isloading = false;
var pos_scrollTop = 0;
var check_collection = true;

var timeOutFilter;
var genQuery = function(){

	_query = query ;
	price = '',vendor = '',color = '',size = '';


	if ( check_slided_price ) {
		price = jQuery('.filter-price input[type=radio]:checked').val();

		_query = _query + '&&' + price;
	}

	if ( jQuery('.filter-vendor input:checked').length > 0 ) {
		jQuery('.filter-vendor li').each(function(){
			if ( jQuery(this).find('input').is(':checked') ) {				
				vendor = vendor + jQuery(this).find('input').val() + '||';

			}
		});
		vendor = vendor + '####';
		vendor = '(' + vendor.split('||####')[0] + ')';

		_query = _query + '&&' + vendor;
	} 
	if ( jQuery('.filter-color input:checked').length > 0 ) {
		jQuery('.filter-color li').each(function(){
			if ( jQuery(this).find('input').is(':checked') ) {
				color = color + jQuery(this).find('input').val() + '||';	

			}
		});
		color = color + '####';
		color = '(' + color.split('||####')[0] + ')';
		_query = _query + '&&' + color;
	} 
	if ( jQuery('.filter-size input:checked').length > 0 ) {
		jQuery('.filter-size li').each(function(){
			if ( jQuery(this).find('input').is(':checked') ) {
				size = size + jQuery(this).find('input').val() + '||';

			}
		});
		size = size + '####';
		size = '(' + size.split('||####')[0] + ')';

		_query = _query + '&&' + size;
	}
	var query_final = '/search?q=filter=(' + encodeURIComponent(_query) + ')';
	if ( jQuery('.filter-color input:checked').length == 0 && check_slided_price == false && jQuery('.filter-size input:checked').length == 0 && jQuery('.filter-vendor input:checked').length == 0 ) {
		filter_collection = '';
		if ( collectionid == 0 ) {
			filter_collection = 'collectionid:product>' + collectionid;
		} else {
			filter_collection = 'collectionid:product=' + collectionid;
		} 
		query_final = "/search?q=filter=(" + encodeURIComponent(filter_collection) + ")";

	}
	console.log(query_final);
	//return query_final;
	//remove sample heere
	return "file:///D:/web%20template/Maked-BOOTSTRAP-LAYOUT/bikini-beach.myharavan.com/bikini-beach.myharavan.com/collections/fillterCollectionData.html"
	
}


var filter_append_product = function(){
	clearTimeout(timeOutFilter);

	$('.empty').remove();
	$('.box-product-lists > div:not(.icon-loading)').hide();
	$('.loadmore').hide();
	$('.icon-loading').show();
	timeOutFilter = setTimeout(function(){		
		check_collection = false,total_page = 0,cur_page = 1;			
		url = genQuery();
		jQuery.ajax({
			url: url + '&view=pagesize',
			success:function(data){
				total_page = parseInt(data);
				if ( total_page > 1 ) {
					setTimeout(function(){
						$('.loadmore').show();
					},1000);
				}
			}
		});
		jQuery.ajax({
			url: url + '&view=total-products',
			success:function(data){
				total_num = parseInt(data);
			
			}
		});
		//lay trang dau tien
		jQuery.ajax({
			url: url + '&view=filter',
			success:function(data){				
				loadingcomplete = true;				
				jQuery('.product-lists .clear-ajax').remove();		
				jQuery('.product-lists .empty').remove();
				$('.product-lists').append(data);		
				jQuery('.product-lists').imagesLoaded(function() {
					$('.box-product-lists > div').removeClass('hide');
					jQuery(window).resize();	
					count_product(total_num);		
					jQuery('.product-lists .pagination-default').show();						
		});						
			}
		});
	},1000);
}
var getProduct = function(page){
	jQuery.ajax({
		url: genQuery() + '&view=filter&page=' + page,
		success:function(data){
			jQuery('.product-lists .clear-ajax').remove();
			jQuery('.product-lists .empty').remove();					
			jQuery('.product-lists').html(data);					
			jQuery('.product-lists').imagesLoaded(function() {
				$('.box-product-lists > div').removeClass('hide');
				jQuery(window).resize();				
				setTimeout(function(){
					jQuery('body').animate({scrollTop: (0)}, 500);
				},1000);
			});	
		}
	});
}
// Xữ lý click
jQuery(document).ready(function(){
	count_product(total_num);
	jQuery('.filter-vendor input, .filter-color input, .filter-size input, .filter-price input').change(function(){		
		filter_append_product();
	});
	jQuery('.filter-price input').change(function(){		
		check_slided_price = true;
		filter_append_product();
	});
});
jQuery(document).on("click",'.btn-loading',function(){
	// Khi filter
	if(check_collection == false){
		loadingcomplete = false;
		var html_loadmore = jQuery('.btn-loading').html();
		jQuery('.btn-loading').html("<i class='fa fa-refresh fa-spin'></i> Vui lòng đợi trong giây lát...");
		if(!isloading && cur_page < total_page ){
			isloading = true;
			cur_page++;			
			$.ajax({
				url: genQuery() + '&view=filter&page=' + cur_page,
				success:function(data){
					pos_scrollTop = jQuery(window).scrollTop();
					jQuery('.product-lists .clear-ajax').remove();
					jQuery('.product-lists .empty').remove();					
					jQuery('.product-lists').append(data);					
					jQuery('.product-lists').imagesLoaded(function() {
						$('.box-product-lists > div').removeClass('hide');
						jQuery(window).resize();
						jQuery(window).scrollTop(pos_scrollTop);	
						isloading = false;
						loadingcomplete = true;	
						jQuery('.btn-loading').html(html_loadmore);
						count_product(total_num);
					});	
				}
			});
		}
	}
	else {
		// Khi load collection
		loadingcomplete = false;	
		var html_loadmore = jQuery('.btn-loading').html();
		jQuery('.btn-loading').html("<i class='fa fa-refresh fa-spin'></i> Vui lòng đợi trong giây lát...");
		if(!isloading && cur_page < total_page){
			isloading = true;
			cur_page++;
			jQuery.ajax({
				url: '/collections/all?view=filter-collection&page=' + cur_page,
				success:function(data){
					pos_scrollTop = jQuery(window).scrollTop();
					window.history.pushState('/collections/all?page='+ (cur_page - 1), document.title, '/collections/all?page=' + cur_page);
					jQuery('.product-lists .clear-ajax').remove();
					jQuery('.product-lists .empty').remove();
					jQuery('.product-lists').append(data);
					jQuery('.product-lists').imagesLoaded(function() {
						$('.box-product-lists > div').removeClass('hide');
						jQuery(window).resize();
						jQuery(window).scrollTop(pos_scrollTop);	
						isloading = false;
						loadingcomplete = true;	
						jQuery('.btn-loading').html(html_loadmore);						
						count_product(total_num);
					});	
				}
			});
		}
	}
})


