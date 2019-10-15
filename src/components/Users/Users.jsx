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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
            &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanget = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
            &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });

    };

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && c.selectPage}
                                     onClick={(e) => {this.onPageChanget(p)}}>{p}</span>
                    })}
                </div>
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