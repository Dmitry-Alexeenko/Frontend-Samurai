import React from 'react';

class ProfileStatus extends React.Component {
    /*локальный state с приходящими пропсами синхринизируется единожды в самом начале запуска компоненты, когда формируется
    объект на основе классовой компоненты. При последующих
    * перерисовках компоненты локальный state синхронизироваться больше не будет и локальный state может отличаться
    * от глобального state. И если в пропсах статус пришел позже чем
    * профиль, то первое значение статуса(пустая строка) запишется в локальный state, потом, конечно и сам статус придет
    * и компонента перерисуется, но в локальном state останется первый вариант*/
    state = {
        editMode: false,
        status: this.props.status
    };
    activateEditMode = () => {
        this.setState({ //React.Component возьмет этот объект и склеит его с первоначальным state
            editMode: true
        }); //берется из React.Component и перезаписывает элементы которые указаны выше в state
        /* this.forceUpdate(); //для того что бы перерисовать локальный state. Но лучше не использовать*/
    };

    deactivateEditMode = () => {
        this.setState({ //React.Component возьмет этот объект и склеит его с первоначальным state
            editMode: false
        }); //берется из React.Component и перезаписывает элементы которые указаны выше в state
        /* this.forceUpdate(); //для того что бы перерисовать локальный state. Но лучше не использовать*/
        this.props.UpdateUserStatusThunkCreator(this.state.status);
    };

    onChahangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState) {//в prevProps, prevState приходят предыдущие значения до момента обновления
        //componentDidUpdate вызывается когда идет перерисовка компоненты извне и приходят новые пропсы, либо перерисовывается когда меняется локальный State
        if (prevProps.status !== this.props.status) { //предыдущий статус- это статус с которым отрисовалась компонента, и если статус пришел после отрисовки, то они будут различаться
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span
                            onDoubleClick={this.activateEditMode}>{this.props.status || "type text"}</span> {/*надо следать .bind(this) иначе this будет ссылаться на onDoubleClick*/}
                    </div>
                    : <div>
                        <input onChange={this.onChahangeStatus} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/> {/*onBlur работает на фокус*/}
                    </div>
                }
            </div>
        )
    };
}

export default ProfileStatus;