import React, { Component } from 'react'
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import alertifyjs from 'alertifyjs';

export default class FormDemo2 extends Component {
    state = { email: '', password: '', city: '', description: '' }

    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }
    handleSubmit = event => {
        event.preventDefault();
        alertifyjs.success(this.state.email + "Added to db");
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter Email" onChange={this.handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Email</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter password" onChange={this.handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" id="city" onChange={this.handleChange} >
                          <option >istanbul</option>
                          <option >Ankara</option>
                          <option >İzmir</option>
                          <option >Sakarya</option>

                            </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" row="3" name="description" id="description" placeholder="Enter description" onChange={this.handleChange} required />
                    </FormGroup>
                    <Button type="sbumit"> SAVE </Button>
                </Form>

            </div>
        )
    }
}
