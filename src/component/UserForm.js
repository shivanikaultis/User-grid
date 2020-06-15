import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
        this.props.onformSubmit(this.state.rowData, this.state.isDelete);
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
            <Form className="login-form" onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label>Name</Label><br />
                    <Input ref={(ref) => { this.nameInput = ref; }} name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter your name" /><br /><br />
                </FormGroup>
                <FormGroup>
                    <Label>Age</Label><br />
                    <Input name="age" ref={(ref) => { this.ageInput = ref; }} value={this.state.age} onChange={this.handleChange} placeholder="Enter your age" /><br /><br />
                </FormGroup>
                <FormGroup>
                    <Label>Address</Label><br />
                    <Input name="address" ref={(ref) => { this.addressInput = ref; }} value={this.state.address} onChange={this.handleChange} placeholder="Enter your address" /><br /><br />
                </FormGroup>
                <FormGroup>
                    <Label>Pincode</Label><br />
                    <Input name="pincode" value={this.state.pincode} ref={(ref) => { this.pincodeInput = ref; }} onChange={this.handleChange} placeholder="Enter your pincode" /><br /><br />
                </FormGroup>
                <FormGroup>
                    <Label>Country</Label><br />
                    <Input name="country" value={this.state.country} ref={(ref) => { this.countryInput = ref; }} onChange={this.handleChange} placeholder="Enter your country" /><br /><br />
                </FormGroup>
                <Button color="primary">Submit</Button>

            </Form>
        );
    }
}

export default UserForm;