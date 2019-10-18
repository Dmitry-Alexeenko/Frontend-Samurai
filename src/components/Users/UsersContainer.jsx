import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching,
    unFollow
} from '../../Redux/users-reducer';
import * as axios from 'axios/index';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    /*constructor(props) {   //конструктор сформировыввется только один раз
        super(props); } //и даже если будут изм в рамках этой страницы, то constructor перерисовываться не будет
        но если constructor не делает ничего кроме как перебрасывает props в super, то его можно удалить, он это делает
        автоматом*/

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
            &count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        });
    }

    onPageChanget = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
            &count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });

    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanget={this.onPageChanget}
                follow={this.props.follow}
                unFollow={this.props.unFollow}/>
        </>
    }  //у класовой компоненты обязательно есть метод render()
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    };
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreater(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCarrentPageCreater(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountCreater(totalCount))
        },
        toggleIsFetching: (IsFetching) => {
            dispatch(toggleIsFetchingCreater(IsFetching))
        }

    }
};*/
//Заменили f mapDispatchToProps на ссылки АС которые ниже

export default connect(mapStateToProps, {
    /*делаю ссылки на мои АС и connect автоматически обворачивает значения
   этого обекта в коллбэки и добавляет dispatch*/
    follow, //если follow: follow, то можно записать просто follow
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
})(UsersContainer);

