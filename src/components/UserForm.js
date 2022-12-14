import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalData from './FormPersonalData';
import Confirm from './confirm'

export class UserForm extends Component {
    state ={
        step: 1,
        firstName: "",
        lastName: '',
        email: '',
        occupation: '',
        city: "",
        bio: ""
    }
// proceed to next step 
nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
};

//go back to prev step
prevStep = () => {
    const {step} = this.state;
    this.setState({
        step: step - 1
    });
}
// handle fields change 
handleChange =input =>e =>{
    this.setState({[input]:e.target.value});
}
render(){
    const {step}= this.state;
    const{ firstName, lastName, email, occupation, city, bio}= this.state;
    const values = { firstName, lastName, email, occupation, city, bio};
    switch(step){
        case 1:
            return(
                <FormUserDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values ={values} />
            );
        case 2 :
            return <FormPersonalData 
            prevStep={this.prevStep}
            values ={values}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            />
        case 3 :
            return <Confirm
            prevStep={this.prevStep}
            values ={values}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            />
        case 4: return <h1>
        success
        </h1>;
            
    }
    }
}
export default UserForm