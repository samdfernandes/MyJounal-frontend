import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPosts } from './reducers/actions'

import Post from './Post'
import EditComponent from './EditComponent'

class AllPost extends Component {
    componentDidMount(){
        this.props.getPosts()
    }

    render() {
        return(
            <div>
                <h1 className='all_post_heading'>All Posts</h1>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                    {post.editing? <EditComponent post={post} key={post.id} />:
                    <Post  post={post} />}
                    </div>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

const mapDispatchToProps = ({ getPosts })

export default connect(mapStateToProps, mapDispatchToProps)(AllPost)