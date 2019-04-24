import React from 'react';
import CurrencyFormat from 'react-currency-format';
import {Button,Modal} from 'react-bootstrap';
import './ModalCart.css'

class ModalCart extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.handleClose = this.handleClose.bind(this);
      var dataBindToModalCart=props.dataBindToModalCart;
      this.state = { show: dataBindToModalCart.isShow }
    }
    componentWillReceiveProps(nextProps) { 
        if (this.props.show !== nextProps.dataBindToModalCart.isShow) { 
            this.setState({ show: nextProps.dataBindToModalCart.isShow });
          } 
    }
    handleClose() {
      this.setState({ show: false });
    }
  
    render() {
        console.log(this.props);
      return (
        <>
          <Modal bsSize='lg'  aria-labelledby="contained-modal-title-vcenter" show={this.state.show} onHide={this.handleClose} id="myCart">
            <Modal.Header >
                <h4 class="modal-title" >Bạn có 5 sản phẩm trong giỏ hàng.</h4>
            </Modal.Header>
            <Modal.Body>
            <table style={{width: '100%'}} id="cart-table">
        <tbody><tr>
            <th />
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá tiền</th>
            <th />
          </tr>
          <tr className="line-item original">
            <td className="item-image" />
            <td className="item-title">
              <a />
            </td>
            <td className="item-quantity" />
            <td className="item-price" />
            <td className="item-delete text-center" />
          </tr>
          <tr className="line-item">
            <td className="item-image"><img src="//product.hstatic.net/1000080569/product/1452760758819_6381400-min_small.jpg" /></td>
            <td className="item-title">
              <a href="/products/bo-san-pham-cham-soc-da-nhay-cam-va-da-kho">Bộ sản phẩm chăm sóc da nhạy cảm và da khô<br /><span>Hồng</span></a>
            </td>
            <td className="item-quantity"><input id="quantity1" name="updates[]" min={1} type="number" defaultValue={2} className /></td>
            <td className="item-price">1,180,000₫</td>
            <td className="item-delete text-center"><a href="javascript:void(0);" onclick="deleteCart(1006889244)"><i className="fa fa-times" /></a></td>
          </tr><tr className="line-item">
            <td className="item-image"><img src="//product.hstatic.net/1000080569/product/1452759403145_7027269-min_small.jpg" /></td>
            <td className="item-title">
              <a href="/products/bo-san-pham-cham-soc-da-thuong-va-da-hon-hop">Bộ sản phẩm chăm sóc da thường và da hỗn hợp<br /><span>cam</span></a>
            </td>
            <td className="item-quantity"><input id="quantity1" name="updates[]" min={1} type="number" defaultValue={2} className /></td>
            <td className="item-price">1,200,000₫</td>
            <td className="item-delete text-center"><a href="javascript:void(0);" onclick="deleteCart(1006889269)"><i className="fa fa-times" /></a></td>
          </tr><tr className="line-item">
            <td className="item-image"><img src="//hstatic.net/569/1000080569/1/2016/5-12/53996_d64_139_20150305_8809264721261_2_chon_small.jpg" /></td>
            <td className="item-title">
              <a href="/products/bo-duong-da-isoi-bulgarian-rose-blemish">Bộ dưỡng da isoi Bulgarian Rose Blemish<br /><span>Hồng</span></a>
            </td>
            <td className="item-quantity"><input id="quantity1" name="updates[]" min={1} type="number" defaultValue={2} className /></td>
            <td className="item-price">2,000,000₫</td>
            <td className="item-delete text-center"><a href="javascript:void(0);" onclick="deleteCart(1006885195)"><i className="fa fa-times" /></a></td>
          </tr></tbody></table>


            </Modal.Body>
            <Modal.Footer>
            <div className="row">
                <div className="col-sm-6">
                <div className="modal-note">
                    <textarea placeholder="Viết ghi chú" id="note" name="note" rows={5} defaultValue={""} />
                </div>
                </div>
                <div className="col-sm-6">
                <div className="total-price-modal">
                    Tổng cộng : <span className="item-total">4,380,000₫</span>
                </div>
                </div>
            </div>


            <div className="row" style={{marginTop: '10px'}}>
                <div className="col-lg-6">
                    <div className="comeback">
                    <a href="/collections/all">
                        <img src="//hstatic.net/0/0/global/design/theme-default/icon-tieptuc.png" />Tiếp tục mua hàng
                    </a>
                    </div>
                </div>
                <div className="col-lg-6 text-right">
                    <div className="buttons btn-modal-cart">
                    <button type="submit" className="button-default" id="checkout" name="checkout">
                        Đặt hàng
                    </button>
                    </div>
                    <div className="buttons btn-modal-cart">
                    <button type="submit" className="button-default" id="update-cart-modal" name>
                        Cập nhật
                    </button>
                    </div>
                </div>
            </div>

              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
  export default ModalCart