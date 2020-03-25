import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import c from '../../../styles/DialogsForm.module.scss';

/*const maxLength100 =maxLengthCreator(5);  validate={[requireField, maxLength100]}*/
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={c.contentMessage}>
                <Field className={c.dialogForm} component={Textarea} name={"newMessageBody"}
                       placeholder="Введите ваше сообщение"
                />
            </div>
            <div>
                <button className={c.dialogFormBtn}>Отправить сообщение</button>
            </div>
        </form>
    )
};

export default reduxForm({form: "dialogsAddMessageForm"})(AddMessageForm);
