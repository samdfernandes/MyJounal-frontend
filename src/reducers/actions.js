import axios from 'axios'

export const getPosts = () => async dispatch => {
    dispatch({type: 'LOADING'})
    try {
      const response = await axios.get('http://localhost:3000/users/1/entries');
      const posts = response.data;
      dispatch({
        type: 'GET_POSTS',
        payload: posts
      });
    } catch(err) {
      console.log(err);
      dispatch({type: 'FAILED_INIT'})
    }
};

export const addPost = (newPost) => async dispatch => {
    dispatch({type: 'LOADING'})
    try {
      const response = await axios.post('http://localhost:3000/users/1/entries', newPost);
      const addedPost = response.data;
      dispatch({
        type: 'ADD_POST',
        payload: addedPost
      });
    } catch(err) {
      console.log(err);
      dispatch({type: 'FAILED_INIT'})
    }
};

// export const startEditing = (id) => (dispatch) => {
//     try {
//         dispatch({
//             type:'EDIT_POST', 
//             payload: id
//         })
//     } catch(err) {
//         console.log(err);
//         dispatch({type: 'FAILED_INIT'})   
//     }
// };

export const updatePost = (id, updatedPost) => async dispatch => {
    dispatch({type: 'LOADING'})
    try {
      const response = await axios.put(`http://localhost:3000/users/1/entries/${id}`, updatedPost);
      const editedPost = response.data;
      console.log(editedPost)
      dispatch({
        type: 'UPDATE',
        payload: editedPost
      });
    } catch(err) {
      console.log(err);
      dispatch({type: 'FAILED_INIT'})
    }
};

export const deletePost = (id) => async dispatch => {
    dispatch({type: 'LOADING'})
    try {
      await axios.delete(`http://localhost:3000/users/1/entries/${id}`);
      dispatch({
        type: 'DELETE_POST',
        payload: id
      });
    } catch(err) {
      console.log(err);
      dispatch({type: 'FAILED_INIT'})
    }
};