import React, {useEffect} from 'react';
import styles from '../../styles/Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DIalogItem";
import {useDispatch, useSelector} from "react-redux";
import {getAllDialogs} from "../../Redux/reducers/dialogs-reducer";
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


let Dialogs = (props) => {

    const listAllDialogs = useSelector(state => state.dialogsPage.listAllDialogs);
    const {startDialog} = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDialogs())
    }, [dispatch]);



    console.log(listAllDialogs)

    if (listAllDialogs === null) return <Preloader/>;

    return (
        <div>
            {
                listAllDialogs.length > 0 &&
                <div className={styles.dialogs}>
                    <div className={styles.dialogsItems}>
                        {listAllDialogs.map(user => (
                            <DialogItem name={user.userName} key={user.id} id={user.id} startDialog={startDialog}
                                        photo={user.photos.small}/>))}
                    </div>

                    <Messages {...listAllDialogs[0]}/>
                </div>
            }
            {
                listAllDialogs.length < 1 &&
                <div className={styles.dialogs}>
                    У вас еще нет начатых диалогов. Нажмите
                    <NavLink to={"/users"}>сюда</NavLink>
                    что бы выбрать пользователя
                </div>
            }
        </div>
    )
};


export default Dialogs;