import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, CardGroup, Col
} from 'reactstrap';

export default class Homepage extends Component {



    componentDidMount() {
        this.props.getKullanicilar();
    }

    render() {


        const { users } = this.props;
        console.log(this.props)
        return (

            <div>
                {/* <h2>{this.props.currentCategory}</h2> */}
                <h2>KULLANICILAR</h2>

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
                                    height={250}
                                    src={user.image}
                                    top
                                    width="100%"


                                />
                                <CardBody>
                                    <CardTitle>{user.name} {user.surname}</CardTitle>
                                    <CardText>{user.desc}</CardText>
                                    <Button color="warning">Details</Button>
                                </CardBody>
                            </Card>
                        </Col>

                    ))}

                </CardGroup>
            </div>
        )
    }
}
