import React, {useState, useEffect} from 'react';
import c from '../../styles/Users.module.scss';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {startDialog} from "../../Redux/reducers/dialogs-reducer";
import {Redirect} from "react-router-dom";

let User = (props) => {

    const dispatch = useDispatch();
    //const [isRedirect, setIsRedirect] = useState(false);
    let userId = props.user.id;
    let {name, status, photos, followed} = props.user;
    let {followingInProgress, unsubscribe, subscribe} = props;

    /*const onFulfilled = () => {
        setIsRedirect(true)
    };

    const onRejected = () => {
        console.log("something wrong")
    };*/

    const startNewDialog = () => {
        dispatch(startDialog(userId));
    };


    return (
        <div className={c.userItem}>

            <div>

                <div className={c.userItem__info}>
                    <NavLink to={'/profile/' + userId}>
                        <img src={photos.small != null ? photos.small : userPhoto} alt="UserPhoto"/>
                    </NavLink>
                    <div className={c.userItem__statusName}>
                        <div className={c.userItem__name}>{name}</div>
                        <div className={c.userItem__status}>{status}</div>
                    </div>
                </div>

                {followed
                    ? <button className={c.userItem__btn} disabled={followingInProgress.some(id => id === userId)}
                              onClick={() => {
                                  unsubscribe(userId);
                              }}>
                        Unsubscribe
                    </button>
                    : <button className={c.userItem__btn} disabled={followingInProgress.some(id => id === userId)}
                              onClick={() => {
                                  subscribe(userId);
                              }}>
                        Subscribe
                    </button>
                }

            </div>

            <div>
                <div>
                    <button onClick={startNewDialog}>
                        <NavLink to={'/dialogs'}>
                            Написать
                        </NavLink>

                    </button>
                </div>

            </div>

        </div>
    )
};

export default User;