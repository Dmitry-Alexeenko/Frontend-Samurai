import React from 'react';
import c from './MyPosts.module.scss';
import Post from './Post/Post';
import AddPostFormReduxForm from "./AddPostForm";

/*Для того что бы компонента не обновлялась когда не нужно (проблему описал в Profile) нужно сделать:
* Если компонента классовая:
*   1) shouldComponentUpdate(nextProps, nexState) {
*       return nextProps != this.props || nexState != this.nexState}
*           толлко что пришедшие пропсы не равны пропсам которые были до этого, или новое состояние != состоянию до этого
*   2) import React, {PureComponent} from 'react';
*       class MyPosts extends React.PureComponent
*           PureComponent уже автоматим учитывает shouldComponentUpdate и его писать не надо
* Если компонента функциональная:
*   const MyPosts = React.memo((props) => {}) наподобие хока*/

const MyPosts = React.memo((props) => {
    let items = props.posts.map(p => (
        <Post message={p.message} key={p.id} like={p.likesCount}/>)
    );
    const onSubmit = (formData) => {  //сюда придут все значения из формы
        props.addPostCreator(formData);
    };
    return (
        <div>
            <AddPostFormReduxForm onSubmit={onSubmit}/>
            <div className={c.myPosts}>
                {items.reverse()}
            </div>
        </div>
    )
});

export default MyPosts;