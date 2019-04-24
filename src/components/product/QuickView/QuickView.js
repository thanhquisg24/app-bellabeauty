import React from 'react';
import  './QuickView.css';
import CurrencyFormat from 'react-currency-format';



class QuickView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    };
    render() {
        return (
            <div className="wrapper-quickview">
              <div className>
                <div className="quickview-image">
                  <img src="#" alt />
                </div>
                <div id="quickview-sliderproduct">
                  <div className="quickview-slider owl-carousel">
                  </div>			
                </div>
              </div>
              <div className>
                <form id="form-quickview" method="post" action="https://bella-beauty.myharavan.com/cart/add">
                  <div className="quickview-information">
                    <div className="quickview-close">
                      <a href="javascript:void(0);"><i className="fa fa-times" /></a>
                    </div>
                    <a href="#" className="quickview-title" title><h2 /></a>
                    <div className="quickview-price">
                      <span /><del />
                    </div>
                    <div className="quickview-variants variant-style clearfix">
                      <div className="selector-wrapper opt1-quickview">
                        <label />
                        <ul className="data-opt1-quickview clearfix style-variant-template">
                        </ul>
                      </div>
                      <div className="selector-wrapper opt2-quickview">
                        <label />
                        <ul className="data-opt2-quickview clearfix style-variant-template">
                        </ul>
                      </div>
                      <div className="selector-wrapper opt3-quickview">
                        <label />
                        <ul className="data-opt3-quickview clearfix style-variant-template">
                        </ul>
                      </div>
                     
                      <select name="id" className id="quickview-select" />
                      <div className="clearfix">
                        <button className="btn-style-add">Thêm vào giỏ</button>	
                      </div>
                    </div>
                    <div className="quickview-description" />
                  </div>
                </form>
              </div>
            </div>
        )};
}
export default QuickView