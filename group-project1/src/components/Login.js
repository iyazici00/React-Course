import React, { Component } from 'react'
import { Form, Label, FormGroup, Input, Button } from 'reactstrap'


export default class Login extends Component {
    render() {
        return (
            <Form style={{ width: 250 }}>
                <FormGroup>
                    <Label for="username">
                        Email
                    </Label>
                    <Input
                        id="username"
                        name="username"
                        placeholder="username"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="password"
                        type="text"
                    />
                </FormGroup>

                <Button>
                    Giriş Yap
                </Button>
            </Form>
        )
    }
}
