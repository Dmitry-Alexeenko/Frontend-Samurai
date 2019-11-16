import React from 'react';


export const WithSuspense = (Component) => {  //4  принимает компонету и все предыдущие пропсы
    const AddSuspenseContainer = (props) => { //Component c большой буквы
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component{...props}/>
        </React.Suspense>
    };
    return AddSuspenseContainer;
};


