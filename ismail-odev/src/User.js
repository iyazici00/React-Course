import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, CardGroup, Col
} from 'reactstrap';

export default class User extends Component {


    changeGroup = (user) => {
        this.setState({
            currentUser: user.userName
        });
    };

    render() {
        const { users } = this.props;
        return (
            <div>
                <h1>Developers</h1>
                <h2>{this.props.currentGroup}</h2>

                <CardGroup>
                    {users.map((user) => (
                        <Col xs="3">
                            <Card
                                key={user.id}
                                color="light"
                                style={{

                                    marginLeft: '10px',
                                    marginRight: '10px',
                                }}
                            >
                                <CardImg
                                    top
                                    height="250px"
                                    src={user.image}
                                    alt={user.userName}
                                />
                                <CardBody>
                                    <CardTitle><b>{user.userName} {user.userSurname}</b></CardTitle>
                                    <CardText>{user.desc}</CardText>
                                    <Button href="https://github.com/iyazici00" color="warning">Detaylar</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </CardGroup>
            </div>
        )
    }
}
