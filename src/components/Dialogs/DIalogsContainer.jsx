import React from 'react';
import {addMessage, changeMessage} from '../../Redux/dialogs-reducer';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs
            dialogsPage={this.props.dialogsPage}
            addMessage={this.props.addMessage}
            changeMessage={this.props.changeMessage}/>
    }
}


let AuthRedirectComponent = withAuthRedirect(DialogsContainer);

let mapStateToProps = (state) => { //обрашаемся сразу к стейт, а не к стору благодаря connect
    return {
        dialogsPage: state.dialogsPage //возвращает объект с данными которые мы взяли из стейта

    };
};


export default connect(mapStateToProps, {addMessage, changeMessage})(AuthRedirectComponent);
//вызываем функцию 2 раза (вызываем ф-ю connect, а она вернула другую функцию и я вызываю эту функцию
//и во вторые скобки мы передаем презентационную компоненту
