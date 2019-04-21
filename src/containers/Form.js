import React, { Component } from 'react';
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import Select from '../components/Select';

class Form extends Component {
    state = {
        formElements: {
            firstName: {
                name: 'First name',
                id: 'firstName',
                className: 'form-control textbox-firstName',
                value: '',
                placeholder: 'First Name'
            },
            lastName: {
                name: 'Last name',
                id: 'lastName',
                className: 'form-control textbox-lastName',
                value: '',
                placeholder: 'Last Name'
            },
            address: {
                name: 'Address',
                id: 'address',
                className: 'form-control textbox-address',
                value: '',
                placeholder: 'Address'
            },
            city: {
                name: 'City',
                id: 'city',
                className: 'form-control textbox-city',
                value: '',
                placeholder: 'City'
            },
            province: {
                name: 'Province',
                id: 'province',
                className: 'form-control select-province',
                value: '',
                options: [
                    { value: '', displayValue: 'Choose a Province or Territory', disabled: true },
                    { value: 'AB', displayValue: 'Alberta' },
                    { value: 'BC', displayValue: 'Britsh Columbia' },
                    { value: 'MB', displayValue: 'Manitoba' },
                    { value: 'NB', displayValue: 'New Brunswick' },
                    { value: 'NL', displayValue: 'Newfoundland and Labrador' },
                    { value: 'NS', displayValue: 'Nova Scotia' },
                    { value: 'ON', displayValue: 'Ontario' },
                    { value: 'PE', displayValue: 'Prince Edward Island' },
                    { value: 'QC', displayValue: 'Quebec' },
                    { value: 'SK', displayValue: 'Saskatchewan' },
                    { value: 'NU', displayValue: 'Nunavut' },
                    { value: 'NT', displayValue: 'Northwest Territories' },
                    { value: 'YU', displayValue: 'Yukon' }
                ]
            },
            postalCode: {
                name: 'Postal code',
                id: 'postalCode',
                className: 'form-control textbox-postalCode',
                value: '',
                placeholder: 'A1A1A1'
            },
        },
        submit: {
            name: 'Submit',
            id: 'submit',
            className: 'btn btn-primary button-submit mr-2',
            value: 'Submit'
        },
        reset: {
            name: 'Reset',
            id: 'reset',
            className: 'btn btn-secondary button-reset',
            value: 'Reset'
        }
    };

    handleChange = ( event ) => {
        const id = event.target.id;
        const value = event.target.value;
        let update = { ...this.state.formElements[ id ], value };

        this.setState( { formElements: { ...this.state.formElements, [ id ]: update } } );
    };

    handleSubmit = ( event ) => {
        const formElements = this.state.formElements;
        let submit = {};

        for ( let id in formElements ) {
            submit = { ...submit, [ id ]: formElements[ id ][ 'value' ] };
        }
        console.log( submit );
    };

    handleReset = ( event ) => {
        const formElements = this.state.formElements;
        let reset = { ...formElements };

        for ( let id in formElements ) {
            reset[ id ] = { ...reset[ id ], value: '' };
        }

        this.setState( { formElements: reset } );
    }

    render(){
        return(
            <div className="container mt-4">
                <h2 className="mb-3">Your Information</h2>
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="firstName">First Name</label>
                        <Textbox { ...this.state.formElements.firstName }  onChange={ ( event ) => { this.handleChange( event ); } }/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="lastName">Last Name</label>
                        <Textbox { ...this.state.formElements.lastName }  onChange={ ( event ) => { this.handleChange( event ); } }/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="address">Address</label>
                        <Textbox { ...this.state.formElements.address }  onChange={ ( event ) => { this.handleChange( event ); } }/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="city">City</label>
                        <Textbox { ...this.state.formElements.city }  onChange={ ( event ) => { this.handleChange( event ); } }/>
                    </div>
                    <div className="form-group col-12 col-md-4">
                        <label htmlFor="province">Province / Territory</label>
                        <Select { ...this.state.formElements.province }  onChange={ ( event ) => { this.handleChange( event ); } }/>
                    </div>
                    <div className="form-group col-12 col-md-4 ">
                        <label htmlFor="postalCode">Postal Code</label>
                        <Textbox { ...this.state.formElements.postalCode }  onChange={ ( event ) => { this.handleChange( event ); } }/>
                    </div>
                </div>
                <Button { ...this.state.submit } onClick={ ( event ) => { this.handleSubmit( event ); } } />
                <Button { ...this.state.reset } onClick={ ( event ) => { this.handleReset( event ); } } />
            </div>
        );
    }
}

export default Form;