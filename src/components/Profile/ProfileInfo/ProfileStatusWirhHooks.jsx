import React, {useState, useEffect} from 'react';
import c from './ProfileStatus.module.scss';
/*useState возвращает массив. В массиве 1 элементом сидит само значение(т.е. false),
* вторым элементом в массиве будет функция, которая меняет значение
* let stateWithSetState = useState(false); -useState изначально по умолчанию будет равен false
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1];
    но так никто не пишет, лучше пользоваться деструктуризацией
    let [editMode, setEditMode] = useState(false); в первую перем пишется значение, во вторую перем. функция
   */

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false); //в useState данные попадают при первом рендере, потом попадать не будут
    let [status, setStatus] = useState(props.status);
    //если статус в пропсах придет позже чем профиль, то будет так же как и с классовыми компонентами. Запишется пустая строка
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
    /*[] означает что useEffect надо запускать не всегда а только в момент после самого 1 вмонтирования, но это не сработает
    * если нужные мне пропсы не придут к концу первого рендера, поэтому [] не должен быть пустым, там должна быть зависомость
    * если props.status при очередной отрисовке будет не таким каким он был раньшене запустится useEffect т.е если props.status
    * при очередной отрисовке будет не такой, какой он был раньше, запустится useEffect*/
    /*useEffect - это такой хук, который говорит закиньте в меня функцию (в самой простой реализации), которую он
    выполнит когда произойдет уже отрисовка*/

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
        <div className={c.status}>
            { !editMode &&
            <div >
                <span className={c.status__text}  onDoubleClick={activateEditMode}> {props.status || "type text"} </span>
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