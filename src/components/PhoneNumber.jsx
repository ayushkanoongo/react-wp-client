import '../App.css';
import React from 'react';
import FormSection from './FormSection'

class PhoneNumber extends React.Component {
  constructor() {
    super();
    this.state = {value: ""};
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = () => {
    const { innerWidth } = window;
    const newPageUrl = innerWidth < 1024 ? `http://api.whatsapp.com/send?phone=91${this.state.value}` : `http://web.whatsapp.com/send?phone=91${this.state.value}`
    window.open(newPageUrl, "_blank")
  }

  render() {
    const {value} = this.state
    const phoneRegEx = new RegExp(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);
    const valid = phoneRegEx.test(value)

    // if(valid){
    //   return(
    //     <Form>
    //       <FormGroup>
    //         <Label for="exampleEmail">
    //           Phone Number
    //         </Label>
    //         <Input
    //           autoFocus="autofocus"
    //           valid
    //           value={value}
    //           onChange={this.handleChange}
    //         />
    //         <FormText>Number Count : {value.length || 0}</FormText>
    //         <FormFeedback valid>Sweet! You are good to go</FormFeedback>
    //       </FormGroup>
    //       <Button color="success" disabled={!valid} onClick={this.handleSubmit}>Send</Button>
    //     </Form>
    //   )}
    // else {
    //   return(
    //     <Form>
    //       <FormGroup>
    //         <Label for="exampleEmail">
    //           Phone Number
    //         </Label>
    //         {value.length === 0 ?
    //           <React.Fragment>
    //             <Input 
    //               autoFocus="autofocus"
    //               value={value}
    //               onChange={this.handleChange}
    //             />
    //             <FormText>Number Count : {value.length || 0}</FormText>
    //           </React.Fragment>
    //         :
    //           <React.Fragment>
    //             <Input 
    //               autoFocus="autofocus"
    //               invalid
    //               value={value}
    //               onChange={this.handleChange}
    //             />
    //             <FormText>Number Count : {value.length || 0}</FormText>
    //             <FormFeedback>Oh noes! check the number again</FormFeedback>
    //           </React.Fragment>
    //         }
    //       </FormGroup>
    //       <Button color="success" disabled={!valid} onClick={this.handleSubmit}>Send</Button>
    //     </Form>
    //   )
    // }
    return (
      <FormSection
        {...this.state}
        valid={valid}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default PhoneNumber