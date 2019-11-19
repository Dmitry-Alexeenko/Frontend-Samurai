import React from 'react';
import c from './FormsControls.module.scss';
//в mata хранятся данные типа error, touched или warning, это данные о состоянии поля, введена ли инфа, тронуто ли поле юзером
export const Textarea = ({input, meta, ...props}) => { //rest оператор
    return (
        <div>
            <div>
                <textarea   {...input}{...props}/>
            </div>
            {meta.error && meta.touched && <span>{meta.error}</span>} {/*если элемент был тронут и  meta.error - true то вылезает спан*/}
        </div>
    )
};

export const LoginInput = ({input, meta, ...props}) => { //rest оператор
    return (
        <div>
            <div>
                <input {...input}{...props}/>
            </div>
            {meta.error && meta.touched && <span>{meta.error}</span>} {/*если элемент был тронут и  meta.error - true то вылезает спан*/}
        </div>
    )
};