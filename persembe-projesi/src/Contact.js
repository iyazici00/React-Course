import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, Button, CardGroup, Col
// } from 'reactstrap';


var usrid = 0
export default class Contact extends Component {


    render() {


        const GetUserArray = (event) => {
            event.preventDefault();
            usrid = usrid + 1;

            const isim = event.target.elements.name.value;
            const soyisim = event.target.elements.surname.value;
            const tel = event.target.elements.tel.value;
            const img = event.target.elements.imag.value;
            const desc = event.target.elements.desc.value;


            let user = {
                id: usrid,
                name: isim,
                surname: soyisim,
                telp: tel,
                imag: img,
                desc: desc

            }
            this.props.addToUserArray(user)
            // console.log(user.name)
        };


        return (
            <div>
                <Form onSubmit={GetUserArray} >
                    <FormGroup>
                        <Label for="name">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="inputName"
                            placeholder="isim"
                            type="text"
                        />
                        <Label for="surname">
                            Surname
                        </Label>
                        <Input
                            id="surname"
                            name="inputSurname"
                            placeholder="soyisim"
                            type="text"
                        />
                        <Label for="tel">
                            Tel
                        </Label>
                        <Input
                            id="tel"
                            name="inputTel"
                            placeholder="tel"
                            type="text"
                        />

                        <Label for="imag">
                            Image
                        </Label>
                        <Input
                            id="imag"
                            name="inputImag"
                            placeholder="image url"
                            type="text"
                        />

                        <Label for="inputText">Hakkında Yazısı</Label>
                        <Input type="textarea" name="desc" id="inputText" />
                    </FormGroup>


                    <Button >
                        Submit
                    </Button>


                </Form>
                {/*                 
                <CardGroup>
                    {users.map((user) => (

                        <Col xs="3">
                            <Card

                                color="light"
                                style={{
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                }}
                            >
                                <CardImg
                                    top
                                    width="100%"


                                />
                                <CardBody>
                                    <CardTitle>{user.name} {user.surname}</CardTitle>
                                    <CardText>TEXT</CardText>
                                    <Button color="warning">Details</Button>
                                </CardBody>
                            </Card>
                        </Col>

                    ))}

                </CardGroup> */}
            </div>


        )
    }
}
