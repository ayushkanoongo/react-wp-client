import {Input, FormFeedback, FormText} from 'reactstrap';
import React from 'react';

function InvalidInput(props) {
	return(
    <React.Fragment>
      <Input
        autoFocus="autofocus"
        invalid
        value={props.value}
        onChange={props.handleChange}
      />
      <FormText>Number Count : {props.value.length || 0}</FormText>
      <FormFeedback>{props.message}</FormFeedback>
    </React.Fragment>
  )
}

export default InvalidInput;