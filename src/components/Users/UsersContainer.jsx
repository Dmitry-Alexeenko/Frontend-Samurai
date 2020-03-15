import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {setCurrentPage, getUsers, unsubscribe, subscribe} from '../../Redux/reducers/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import {usersSelectors} from "../../Redux/users-selectors";
import styles from './Users.module.scss';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {

        let {
            isFetching, users, totalUsersCount, pageSize, currentPage, followingInProgress,
            unsubscribe, subscribe, portionSize
        } = this.props;

        return <>
            {isFetching
                ? <div className={styles.usersPreloader}>
                    <Preloader/>
                </div>
                : null
            }
            <Users users={users} totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChanged={this.onPageChanged} followingInProgress={followingInProgress}
                   unsubscribe={unsubscribe}
                   subscribe={subscribe} portionSize={portionSize}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: usersSelectors.getUsersData(state),
        pageSize: usersSelectors.getPageSize(state),
        totalUsersCount: usersSelectors.getTotalUsersCount(state),
        currentPage: usersSelectors.getCurrentPage(state),
        isFetching: usersSelectors.getIsFetching(state),
        followingInProgress: usersSelectors.getFollowingInProgress(state),
        portionSize: state.usersPage.portionSize
    };
};

export default connect(mapStateToProps, {setCurrentPage, getUsers, unsubscribe, subscribe})(UsersContainer);

