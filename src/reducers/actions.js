import axios from 'axios'
let baseURL = 'https://myjournalbackend.herokuapp.com/users/1/entries';


export const getPosts = () => async dispatch => {
    dispatch({type: 'LOADING'})
    try {
      const response = await axios.get(`${baseURL}`);
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
      const response = await axios.post(`${baseURL}`, newPost);
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
      const response = await axios.put(`${baseURL}/${id}`, updatedPost);
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
      await axios.delete(`${baseURL}/${id}`);
      dispatch({
        type: 'DELETE_POST',
        payload: id
      });
    } catch(err) {
      console.log(err);
      dispatch({type: 'FAILED_INIT'})
    }
};