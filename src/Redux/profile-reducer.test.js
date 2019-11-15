import profileReducer, {addPostCreator} from "./profile-reducer";
import React from 'react';

it('new post should be added', () => {

    let state = {
        posts: [
            {id: 1, message: "Dorow, my name is React", likesCount: 1},
            {id: 2, message: "It is first post", likesCount: 16},
            {id: 3, message: "It is thirst post", likesCount: 9},
            {id: 3, message: "yes", likesCount: 111}
        ]
    };
    let newState =  profileReducer(state, {});

    expect(newState.posts.length).toBe(4);
});


