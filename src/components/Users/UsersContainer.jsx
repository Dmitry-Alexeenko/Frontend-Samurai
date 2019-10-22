import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    getUsersThunkCreator,
    unfollowCreator,
    followThunkCreator
} from '../../Redux/users-reducer';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    /*constructor(props) {   //конструктор сформировыввется только один раз
        super(props); } //и даже если будут изм в рамках этой страницы, то constructor перерисовываться не будет
        но если constructor не делает ничего кроме как перебрасывает props в super, то его можно удалить, он это делает
        автоматом*/

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);//закометированный код ниже теперь в getUsersThunkCreator
        /* this.props.toggleIsFetching(true);
         userAPI.getUsers(this.props.currentPage, this.props.pageSize)
             .then(data => {
                 this.props.toggleIsFetching(false);
                 this.props.setUsers(data.items);
                 this.props.setUsersTotalCount(data.totalCount);
             });*/
    }

    onPageChanget = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
                followingInProgress={this.props.followingInProgress}
                unfollowCreator={this.props.unfollowCreator}
                followThunkCreator={this.props.followThunkCreator}/>
        </>
    }  //у класовой компоненты обязательно есть метод render()
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

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
/*делаю ссылки на мои АС и connect автоматически обворачивает значения
этого обекта в коллбэки и добавляет dispatch*/
export default connect(mapStateToProps, {
    setCurrentPage, getUsersThunkCreator, unfollowCreator, followThunkCreator
//если follow: follow, то можно записать просто follow
})(UsersContainer);

