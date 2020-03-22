import React from 'react';
import {addMessage, startDialog} from '../../Redux/reducers/dialogs-reducer';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const DialogsContainer = React.memo((props) => {

    let {dialogsPage, addMessage, startDialog} = props;

    return <Dialogs dialogsPage={dialogsPage} addMessage={addMessage} startDialog={startDialog}/>
});

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

export default compose(connect(mapStateToProps, {addMessage, startDialog}), withAuthRedirect)(DialogsContainer);


