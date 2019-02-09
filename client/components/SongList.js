import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import query from '../queries/fetchSong';
import delSongMutation from '../queries/deleteSong';

class SongList extends Component {
    onSongDelete(id) {
        this.props.mutate({
            variables: {
                id
            },
            refetchQueries: [{ query }]
        }).then((result) => {
            console.log(result, ' Del success')
        }).catch((err) => {
            console.log(err)
        });
    }
    renderSongList() {
        return this.props.data.songs.map(({ id, title }) => <li key={id} className='collection-item'>
            {title}
            <i className='material-icons right' onClick={() => this.onSongDelete(id)}>delete</i>
        </li>)
    }

    render() {
        if (this.props.data.loading) {
            return <div>Loading........</div>
        }
        return (
            <div>
                <ul className='collection'>
                    {this.renderSongList()}
                </ul>
                <Link
                    to="/create"
                    className='btn-floating btn-large red right'
                >
                    <i className='material-icons'>add</i>
                </Link>
            </div>
        )
    }
}




export default graphql(delSongMutation)(graphql(query)(SongList));