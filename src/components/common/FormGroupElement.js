import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";

export function FormGroupElement({formGroupInfo,inputId,inputName,inputPlaceholder,inputType,onChange}) {
  return (
    <div>
      <FormGroup floating>
        <Input
          valid={formGroupInfo.isValid === null ? null : formGroupInfo.isValid === true ? true : false}
          invalid={formGroupInfo.isValid === null ? null : formGroupInfo.isValid === false ? true : false}
          id={inputId}
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          onChange = {onChange}
        />
        {formGroupInfo.isValid === null ? null : formGroupInfo.isValid === true ? (
          <FormFeedback tooltip valid>
            Sweet! that name is available
          </FormFeedback>
        ) : formGroupInfo.reasonForInvalid === "empty" ? (
          <FormFeedback tooltip> 
              I am blank!
            </FormFeedback> 
        ):(
          <FormFeedback tooltip> 
             Oh no, That name is already taken
            </FormFeedback> 
        ) }
        <Label for={inputId}>{inputName}</Label>
      </FormGroup>
    </div>
  );
}
