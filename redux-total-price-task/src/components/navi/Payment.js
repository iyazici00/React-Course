import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";
import "./payment.css"



class Payment extends Component {

    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " removed from cart!");
    }


    render() {


        const totalPrice = () => {

            let toplamTutar = 0;

            {
                this.props.cart.map((item) =>
                    toplamTutar += Number(item.product.price) * Number(item.quantity)

                )
            }
            return toplamTutar;
        }
        return (
            <div style={{ marginLeft: 350 }}>
                <h1 style={{ marginLeft: 100 }}>PAYMENT PAGE</h1>

                <Form style={{ width: 500 }}>
                    <FormGroup>
                        <Label id="nameSurname" for="nameSurname" >Ad Soyad:</Label>
                        <Input type="text" name="nameSurname" placeholder="isim ve soyisim giriniz" />
                    </FormGroup>
                    <FormGroup>
                        <Label id="cardNumbers" for="cardNumbers">Kredi Kart No:</Label>
                        <Input type="number" name="cardNumbers" placeholder="kart numarasını giriniz" />
                    </FormGroup>


                    <FormGroup>
                        <Label for="cvv" id="cvv">CVV</Label>
                        <Input type="number" name="cvv" placeholder="cvv giriniz" />
                    </FormGroup>



                    <Button>Bilgileri Onayla</Button>
                </Form>
                <br />
                <h3>Toplam Tutar: {totalPrice()} TL</h3>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);