import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requireField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
const maxLength10 =maxLengthCreator(10);
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"}  placeholder="Enter your post"
                validate={[requireField, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

export default reduxForm({form:"profileAddNewPostForm"})(AddPostForm);