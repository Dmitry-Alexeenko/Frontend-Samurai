import React from 'react';
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = (props) => {

    const {profile, error} = props;

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <span>Full name:</span>
                <Field component={'input'} type={'text'} name={"fullName"}
                       placeholder="full name"/>
            </div>

            <div>
                <span>About:</span>
                <Field component={'textarea'} name={"aboutMe"}
                       placeholder="about me"/>
            </div>

            <div>

                <span>Looking for a job:</span>
                <Field component={'input'} type={'checkbox'} name={"lookingForAJob"}/>
            </div>

            <div>
                <span>Description:</span>
                <Field component={'textarea'} name={"lookingForAJobDescription"}/>
            </div>

            {Object.keys(profile.contacts).map(contact => (
                    <div key={contact}>
                        <span>{contact}</span>
                        <Field component={'input'} type={'text'} name={"contacts." + contact}/>
                    </div>
                )
            )}

            <button>save</button>
            {error &&
            <span style={{color: 'red'}}>{error}</span>}
        </form>
    )
};

export default reduxForm({form: "ProfileDataForm"})(ProfileDataForm);