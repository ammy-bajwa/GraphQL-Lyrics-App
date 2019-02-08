import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
    renderSongList() {
        return this.props.data.songs.map(song => <li key={song.id} className='collection-item'>{song.title}</li>)
    }
    render() {
        if (this.props.data.loading) {
            return <div>Loading........</div>
        }
        return (
            <ul className='collection'>
                {this.renderSongList()}
            </ul>
        )
    }
}

const query = gql`
{
    songs {
        id
        title
    }
}
`

export default graphql(query)(SongList);