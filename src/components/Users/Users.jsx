import React from 'react';
import c from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
    /*constructor(props) {   //конструктор сформировыввется только один раз
        super(props); } //и даже если будут изм в рамках этой страницы, то constructor перерисовываться не будет
        но если constructor не делает ничего кроме как перебрасывает props в super, то его можно удалить, он это делает
        автоматом*/

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.id}>
                    <div className={c.wrapper}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>)}
            </div>
        )
    }  //у класовой компоненты обязательно есть метод render()
}

export default Users;