import React from 'react';
import {addMessage, changeMessage} from '../../Redux/dialogs-reducer';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs
            dialogsPage={this.props.dialogsPage}
            addMessage={this.props.addMessage}
            changeMessage={this.props.changeMessage}/>
    }
}

let mapStateToProps = (state) => { //обрашаемся сразу к стейт, а не к стору благодаря connect
    return {
        dialogsPage: state.dialogsPage //возвращает объект с данными которые мы взяли из стейта

    };
};

export default compose(
    connect(mapStateToProps, {addMessage, changeMessage}), //далее compose берет результат у withAuthRedirect и перекидывает его в след ф-ю
    withAuthRedirect  //ф-я compose автоматически возьмет DialogsContainer и закинет его в вызов функции withAuthRedirect
)(DialogsContainer);  //второй вызов вызывает DialogsContainer. DialogsContainer попадает в withAuthRedirect
/*Смысл работы: берется DialogsContainer и закидывается в withAuthRedirect, потом резулитат закидывается в
connect(mapStateToProps, {addMessage, changeMessage})*/

