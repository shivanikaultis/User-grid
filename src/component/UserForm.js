import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: {
                name: "", age: "", address: '', pincode: '', country: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.onformSubmit(this.state.rowData);
    }

    handleChange(evt) {
        const { value, name } = evt.target;
        this.setState(prevState => ({
            rowData: {
                ...prevState.rowData,
                [name]: value
            }
        }))

    }


    render() {
        return (
            <div className="form-container">
                <Form className="login-form" onSubmit={this.handleFormSubmit}>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter your name" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Age</Label>
                        <Input type='number' name="age" value={this.state.age} onChange={this.handleChange} placeholder="Enter your age" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Address</Label>
                        <Input  name="address" value={this.state.address} onChange={this.handleChange} placeholder="Enter your address" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Pincode</Label>
                        <Input type='number' name="pincode" value={this.state.pincode} onChange={this.handleChange} placeholder="Enter your pincode" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Country</Label>
                        <Input name="country" value={this.state.country} onChange={this.handleChange} placeholder="Enter your country" />
                    </FormGroup>
                    <Button>Submit</Button>

                </Form>
            </div>
        );
    }
}

export default UserForm;