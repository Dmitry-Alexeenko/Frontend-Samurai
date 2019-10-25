import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };
    activateEditMode =  () => {
        console.log("this:", this);
        this.setState({ //React.Component возьмет этот объект и склеит его с первоначальным state
            editMode: true
        }); //берется из React.Component и перезаписывает элементы которые указаны выше в state
       /* this.forceUpdate(); //для того что бы перерисовать локальный state. Но лучше не использовать*/
    };

    deactivateEditMode  =  () => {
        this.setState({ //React.Component возьмет этот объект и склеит его с первоначальным state
            editMode: false
        }); //берется из React.Component и перезаписывает элементы которые указаны выше в state
        /* this.forceUpdate(); //для того что бы перерисовать локальный state. Но лучше не использовать*/
    };

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span> {/*надо следать .bind(this) иначе this будет ссылаться на onDoubleClick*/}
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/> {/*onBlur работает на фокус*/}
                    </div>
                }
            </div>
        )
    };
}

export default ProfileStatus;