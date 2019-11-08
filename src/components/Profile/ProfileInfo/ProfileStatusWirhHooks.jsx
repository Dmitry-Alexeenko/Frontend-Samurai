import React, {useState} from 'react';

/*useState возвращает массив. В массиве 1 элементом сидит само значение(т.е. false),
* вторым элементом в массиве будет функция, которая меняет значение
* let stateWithSetState = useState(false); -useState изначально по умолчанию будет равен false
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1];
    но так никто не пишет, лучше пользоваться деструктуризацией
    let [editMode, setEditMode] = useState(false); в первую перем пишется значение, во вторую перем. функция
   */

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    //если статус в пропсах придет позже чем профиль, то будет так же как и с классовыми компонентами. Запишется пустая строка
    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.UpdateUserStatusThunkCreator(status);
    };

    const onChangeStatus = (e) => {
        setStatus( e.currentTarget.value)
    };

   /* первая отрисовка произошла после того как в editMode вернулся false, и компонента отрисовалась со значением false
   * вторая отрисовка будет после того как выполнится функция setEditMode(true) и компонента отрисуется со зданчением true*/

    return (
        <div>
            { !editMode &&
            <div>
                <span  onDoubleClick={activateEditMode}> {props.status || "type text"} </span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onChangeStatus} value={status}/>
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;