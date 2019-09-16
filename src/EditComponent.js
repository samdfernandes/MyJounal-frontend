import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePost } from './reducers/actions'

class EditComponent extends Component {
    handleEdit = (event) => {
        event.preventDefault();
        const title = this.getTitle.value;
        const text = this.getMessage.value;
        const data = {
            title: title,
            text: text,
            id: this.props.post.id
        }
        this.props.updatePost(this.props.post.id, data)
        this.props.post.editing=!this.props.post.editing
    }

    render(){
        return (
            <div key={this.props.post.id} className='post'>
                <form onSubmit={this.handleEdit} className='form'>
                    <input required type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="Your Post Title" /><br/><br />
                    <textarea required rows="25" cols="150" ref={(input) => this.getMessage = input} defaultValue={this.props.post.text} placeholder="Write your post entry here" /><br/><br/>
                    <button>Update</button>
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

const mapDispatchToProps = ({ updatePost })

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent)