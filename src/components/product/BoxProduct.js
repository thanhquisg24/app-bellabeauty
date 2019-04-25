import React from 'react';
import CurrencyFormat from 'react-currency-format';
import ModalCart from '../cart/ModalCart/ModalCart'
import {connect} from 'react-redux';
import {actionTypes} from '../../constants/actionTypes';

class BoxProduct extends React.Component{
    constructor(props) {
        super(props);
        var dataBindToModalCart={'id':0,'quantity':0,'isShow':false}; 
        this.state = {
          'dataBindToModalCart':dataBindToModalCart
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleShowCart = this.handleShowCart.bind(this);
    };
    handleClick(id) {
        console.log('Click happened '+id);
      };
    handleShowCart(id,quatity) {
        console.log(quatity+' Click happened show cart'+id);
        var dataBindToModalCart={'id':id,'quantity':quatity,'isShow':true}; 
          this.props.dispatch({
            type: actionTypes.ADD_CART,
            dataBindToModalCart
          });
        
      };
    render() {
        return (
        <React.Fragment>
     
            {this.props.items.products.map(item => (
                <React.Fragment key={item.id}>
                  <div className="col-lg-20 col-md-3 col-sm-4 col-xs-6 product-item animated zoomIn">
        <div className="product-wrapper product-resize">
          <div className="product-information">
            <div className="product-detail">
              <div className="product-image image-resize">
                <a href={item.url} title={item.name}>
                  <img src={item.img} alt={item.alt} />
                </a>

                <div className="field-sale">
                  <span>-{item.discount_rate}%</span>
                </div>
            
                <div className="btn-cart-product">
                  <a href="javascript:void(0);"  onClick={() => this.handleShowCart(item.id,1)} ><i className="fa fa-shopping-cart" /></a>
                </div>
                <div className="btn-quickview-product">
                  <a  className="quickview"  onClick={() => this.handleClick(item.id)}><i className="fa fa-search" /></a>
                </div>
              </div>
              <div className="product-info">
              <a href={item.url} title={item.name}>
                  <h2>
                  {item.name}
                  </h2>
                </a>
                <div className="price-info clearfix">
                  <div className="price-new-old">
                
                    <span>  <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} suffix={'₫'} /></span>
                  
                    <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} suffix={'₫'} renderText={value => <small>Gía trị thực {value}</small>} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                </React.Fragment>
            ))}
        </React.Fragment>
    )}
}
 export default  connect()(BoxProduct)