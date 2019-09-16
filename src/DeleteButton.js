import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from './reducers/actions'

class DeleteButton extends Component {
    render () {
        return (
            <button className='delete'
            onClick={() => this.props.deletePost(this.props.id)}>
            Delete</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state
    }
}

const mapDispatchToProps = ({ deletePost })

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)