import React, { Component } from "react";
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import query from '../queries/fetchSongs';
import delSongMutation from '../queries/deleteSong';

class SongList extends Component {
    onSongDelete(id) {
        this.props.mutate({
            variables: {
                id
            }
        }).then((result) => {
            this.props.data.refetch() //Alternate of refetchQueries property
            console.log(result, ' Del success')
        }).catch((err) => {
            console.log(err)
        });
    }
    renderSongList() {
        return this.props.data.songs.map(({ id, title }) => <li key={id} className='collection-item'>
            <Link to={`/songs/${id}`}>
                {title}
            </Link>
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