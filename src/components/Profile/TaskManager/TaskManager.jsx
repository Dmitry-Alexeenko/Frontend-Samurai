import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {createNewFolderList, showFolderList} from "../../../Redux/reducers/taskManager-reducer";
import AddFolderForm from "./AddFolderForm";
import {reset} from "redux-form";


const TaskManager = React.memo((props) => {

    const taskFolders = useSelector(state => state.taskManager.taskFolders);
    const dispatch = useDispatch();

    let folders = taskFolders.map(item => (
        <div key={item.id}>
            <span>{item.addedDate}</span><br/>
            <span>{item.id}</span><br/>
            <span>{item.order}</span><br/>
            <span>{item.title}</span>
        </div>));

    useEffect(() => {
        dispatch(showFolderList());
    }, [dispatch]);


    const onSubmit = (formData) => {
        console.log(formData.newFolder)
        //dispatch(createNewFolderList('Планы доработок'))
    };

    return (
        <div>
            <AddFolderForm onSubmit={onSubmit}/>
            {folders}
        </div>
    )
});

export default TaskManager;