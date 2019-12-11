import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requireField} from "../../../utils/validators/validators";
import c from './DialogsForm.module.scss';

/*const maxLength100 =maxLengthCreator(5);  validate={[requireField, maxLength100]}*/
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={c.dialogForm} component={Textarea} name={"newMessageBody"} placeholder="Enter your message"
                />
            </div>
            <div>
                <button className={c.dialogFormBtn}>Send message</button>
            </div>
        </form>
    )
};

export default reduxForm({form:"dialogsAddMessageForm"})(AddMessageForm);
