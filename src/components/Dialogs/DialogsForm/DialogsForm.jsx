import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requireField} from "../../../utils/validators/validators";

const maxLength100 =maxLengthCreator(5);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder="Enter your message"
                validate={[requireField, maxLength100]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
};

export default reduxForm({form:"dialogsAddMessageForm"})(AddMessageForm);
