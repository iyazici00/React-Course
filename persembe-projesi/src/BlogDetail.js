import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardGroup, Col
} from 'reactstrap';

export default class BlogDetail extends Component {



    render() {



        const { currentBlogs } = this.props;
        const { blogs } = this.props;
        return (
            <div>
                {/* <h2>{this.props.currentCategory}</h2> */}
                <h2>BLOGS</h2>

                <CardGroup>
                    {currentBlogs.map((blog) => (

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
                                    src={blog.img}
                                    top
                                    width="100%"


                                />
                                <CardBody>

                                    <CardText>Blog Id: {blog.id}</CardText>
                                    <CardTitle>Title: {blog.title} </CardTitle>

                                    <CardText>Content: {blog.content} </CardText>

                                </CardBody>
                            </Card>
                        </Col>

                    ))}

                </CardGroup>
            </div>
        )
    }
}

