import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

class SongCreate extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.props)
        this.props.mutate({
            variables: {
                title: this.state.title
            }
        }).then(_ => hashHistory.push("/"))
    }
    render() {
        return (
            <div>
                <Link to='/'>Back</Link>
                <h3>Create New Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="songTitle">Enter Title</label>
                    <input onChange={(e) => this.setState({ title: e.target.value })}
                        type="text" value={this.state.title} />
                    <input type="submit" value="Submit" className='btn red right' />
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation AddSong($title:String){
        addSong(title:$title){
            title
        }
    }
`


export default graphql(mutation)(SongCreate);