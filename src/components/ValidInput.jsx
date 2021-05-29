import {Input, FormFeedback, FormText} from 'reactstrap';
import React from 'react';

function ValidInput(props) {
	return(
    <React.Fragment>
      <Input
        autoFocus="autofocus"
        valid
        value={props.value}
        onChange={props.handleChange}
      />
      <FormText>Number Count : {props.value.length || 0}</FormText>
      <FormFeedback valid>{props.message}</FormFeedback>
    </React.Fragment>
  )
}

export default ValidInput;