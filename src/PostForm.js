import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from './reducers/actions'

class PostForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.getTitle.value;
        const text = this.getMessage.value;
        const data = {
            title,
            text,
            editing: false
        }
        this.props.addPost(data)
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render(){
        return(
            <div className='post-container'>
                <h1 className='post_heading'>Create Post</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                <input required type="text" ref={(input) => this.getTitle = input} placeholder="Your Post Title" /><br/><br />
                <textarea required rows="25" cols="150" ref={(input) => this.getMessage = input} placeholder="Write your post entry here" /><br/><br/>
                <button>Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newPost: state
    }
}


const mapDispatchToProps = ({ addPost })


export default connect(mapStateToProps, mapDispatchToProps)(PostForm)