import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import c from '../../../styles/AddPostForm.module.scss';

const maxLength100 = maxLengthCreator(6);
const minLength1 = minLengthCreator(1);

const AddFolderForm = (props) => {
    const {valid} = props;
    return (
        <form className={c.formControl} onSubmit={props.handleSubmit}>
            <Field className={c.formControl__text} component={Textarea} name={"newFolder"}
                   placeholder="Создать папку" validate={[maxLength100, minLength1]}/>
            <button className={c.formControl__btn} >Создать папку</button>
        </form>
    )
};

export default reduxForm({form: "taskManagerAddNewFolder"})(AddFolderForm);