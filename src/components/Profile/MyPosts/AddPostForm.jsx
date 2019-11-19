import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requireField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import c from './AddPostForm.module.scss';

//const maxLength10 = maxLengthCreator(30);
const AddPostForm = (props) => {
    return (
        <form className={c.formControl} onSubmit={props.handleSubmit}>
            <Field className={c.formControl__text} component={Textarea} name={"newPostText"}
                   placeholder="Enter your post"/>
            <button className={c.formControl__btn}>Add post</button>
        </form>
    )
};

export default reduxForm({form: "profileAddNewPostForm"})(AddPostForm);