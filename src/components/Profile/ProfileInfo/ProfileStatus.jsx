import React from 'react';

class ProfileStatus extends React.Component {
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
                               value={this.state.status  }/> {/*onBlur работает на фокус*/}
                    </div>
                }
            </div>
        )
    };
}

export default ProfileStatus;