import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, CardGroup, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Homepage extends Component {



    // componentDidMount() {
    //     this.props.getKullanicilar();
    // }

    getDesc = (user) => {
        var dsc = document.getElementById("desc")
        dsc.innerHTML = user.desc

    }


    render() {


        const { kullanicilar } = this.props;

        console.log(this.props)
        return (

            <div>
                {/* <h2>{this.props.currentCategory}</h2> */}
                <h2>KULLANICILAR</h2>

                <CardGroup>
                    {kullanicilar.map((user) => (

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
                                    src={user.imag}
                                    top
                                    width="100%"


                                />
                                <CardBody>
                                    <CardText>Id: {user.id}</CardText>
                                    <CardTitle>{user.name} {user.surname}</CardTitle>
                                    <CardText>Tel: {user.telp}</CardText>

                                    <CardText>Hakkında: <p id="desc"></p> </CardText>



                                    <Button onClick={() => this.getDesc(user)} color="warning">Details</Button>

                                    <Link onClick={() => this.props.currentUserIdForBlog(user.id)} style={{ marginLeft: 10, backgroundColor: 'green', color: 'white' }} to="/addblog" color="primary">Add Blog</Link>
                                    <Link onClick={() => this.props.currentUserIdForBlog(user.id)} style={{ marginLeft: 10, backgroundColor: 'green', color: 'white' }} to="/blogdetail" color="primary">Go Blogs</Link>
                                </CardBody>
                            </Card>
                        </Col>

                    ))}

                </CardGroup>
            </div>
        )
    }
}
