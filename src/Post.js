import React, { Component } from 'react'
import { connect } from 'react-redux'
import DeleteButton from './DeleteButton'


class Post extends Component {
    render() {
        return (
            <div className='post'>
                <h2 className='post_title'>{this.props.post.title}</h2>
                <p className='post_message'>{this.props.post.text}</p>
                <div className='control-buttons'>
                    <button className='edit'
                     onClick={() => this.props.dispatch({type:'EDIT_POST', id:this.props.post.id})}>
                     Edit</button>
                    <DeleteButton id={this.props.post.id}/>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

// const mapDispatchToProps = ({ deletePost })

export default connect(mapStateToProps)(Post)