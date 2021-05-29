import '../App.css';
import React from 'react';
import InvalidInput from './InvalidInput'
import ValidInput from './ValidInput'
import { Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';

class FormSection extends React.Component {

  render() {
    const {value, valid} = this.props

    return(
      <Form>
        <FormGroup>
          <Label for="exampleEmail">
            Phone Number
          </Label>
          { value.length === 0 &&
            <React.Fragment>
              <Input autoFocus="autofocus" value={value} onChange={this.props.handleChange} />
              <FormText>Number Count : {value.length || 0}</FormText>
            </React.Fragment>
          }
          { value.length > 0 && valid === true &&
            <ValidInput {...this.props} message="Sweet! You are good to go"/>
          }
          { value.length > 0 && valid === false &&
            <InvalidInput {...this.props} message="Oh noes! check the number again"/>
          }
        </FormGroup>
        <Button color="success" disabled={!valid} onClick={this.props.handleSubmit}>Send</Button>
      </Form>
    )
  }
}

export default FormSection