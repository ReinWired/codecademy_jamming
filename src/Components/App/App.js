import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {id: 457, name: "Allumer le feu", artist: "Johnny Hallyday", album: "Best on-tours Hallyday", uri: "spotify:track:1rqhFgbbKwnb9MLmUQDhG6"},
        {id: 123, name: "Soleil", artist: "Aznavour", album: "Biggest dancefloor hits", uri: "spotify:track:2rqhFgbbKwnb9MLmUQDhG6"},
        {id: 893, name: "Le tortue et la lièvre", artist: "PNL", album: "NTM", uri: "spotify:track:3rqhFgbbKwnb9MLmUQDhG6"}
      ],
      playlistName: "My Playlist",
      playlistTracks: [
        {id: 134, name: "Mon grand poney", artist: "Eddie Malou", album: "Le rap congolais", uri: "spotify:track:7rqhFgbbKwnb9MLmUQDhG6"},
        {id: 12, name: "Press F", artist: "Call of Duty", album: "Your mom is", uri: "spotify:track:8rqhFgbbKwnb9MLmUQDhG6"},
        {id: 997, name: "Wrap god", artist: "Emi's nems", album: "Quick & healthy food", uri: "spotify:track:9rqhFgbbKwnb9MLmUQDhG6"}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (!this.state.playlistTracks.find( savedTrack => savedTrack.id === track.id)) {
      const newPlaylistTracks = this.state.playlistTracks;
      newPlaylistTracks.push(track);
      this.setState({ playlistTracks: newPlaylistTracks });
    }
  }

  removeTrack(track) {
    const indexTrackRemove = this.state.playlistTracks.findIndex( savedTrack => savedTrack.id === track.id);
    const newPlaylistTracks = this.state.playlistTracks;
    newPlaylistTracks.splice(indexTrackRemove, 1);
    this.setState({ playlistTracks: newPlaylistTracks });
  }

  updatePlaylistName(newName) {
    this.setState({ playlistName: newName });
  }

  savePlaylist() {
    this.state.trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} onSearch={this.search} />
          <Playlist playlistName={this.state.playlistName} onNameChange={this.updatePlaylistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onSave={this.savePlaylist} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
