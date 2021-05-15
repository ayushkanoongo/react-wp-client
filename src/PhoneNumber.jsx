import './App.css';
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button} from 'reactstrap';

class PhoneNumber extends React.Component {
  constructor() {
    super();
    this.state = {value: "", disabled: true};
  }

  handleChange = (e) => {
    const {value} = this.state
    const disabled = value.length === 10 ? false : true
    this.setState({value: e.target.value, disabled: disabled})
  }

  handleSubmit = () => {
    const newPageUrl = `http://api.whatsapp.com/send?phone=91${this.state.value}`
    window.open(newPageUrl, "_blank")
  }

  render() {
    const {value, disabled} = this.state
    if(value && value.length === 10){
      return(
        <Form>
          <FormGroup>
            <Label for="exampleEmail">
              Phone Number
            </Label>
            <Input
              autoFocus="autofocus"
              valid
              value={value}
              onChange={this.handleChange}
            />
            <FormText>Number Count - {value.length || 0}</FormText>
            <FormFeedback valid>Sweet! You are good to go</FormFeedback>
          </FormGroup>
          <Button color="success" onClick={this.handleSubmit}>Submit</Button>
        </Form>
      )}
    else {
      return(
        <Form>
          <FormGroup>
            <Label for="exampleEmail">
              Phone Number
            </Label>
            {value.length === 0 ?
              <React.Fragment>
                <Input 
                  autoFocus="autofocus"
                  value={value}
                  onChange={this.handleChange}
                />
                <FormText>Number Count - {value.length || 0}</FormText>
              </React.Fragment>
            :
              <React.Fragment>
                <Input 
                  autoFocus="autofocus"
                  invalid
                  value={value}
                  onChange={this.handleChange}
                />
                <FormText>Number Count - {value.length || 0}</FormText>
                <FormFeedback>Oh noes! check the number again</FormFeedback>
              </React.Fragment>
            }
          </FormGroup>
          <Button color="success" disabled={disabled} onClick={this.handleSubmit}>Submit</Button>
        </Form>
      )
    }
  }
}

export default PhoneNumber

