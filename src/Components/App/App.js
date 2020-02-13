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
        {id: null, name: "Allumer le feu", artist: "Johnny Hallyday", album: "Best on-tours Hallyday"},
        {id: null, name: "Soleil", artist: "Aznavour", album: "Biggest dancefloor hits"},
        {id: null, name: "Le tortue et la lièvre", artist: "PNL", album: "NTM"}
      ],
      playlistName: "My Playlist",
      playlistTracks: [
        {id: null, name: "Mon grand poney", artist: "Eddie Malou", album: "Le rap congolais"},
        {id: null, name: "Press F", artist: "Call of Duty", album: "Your mom is"},
        {id: null, name: "Wrap god", artist: "Emi's nems", album: "Quick & healthy food"}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find( savedTrack => savedTrack.id === track.id)) {
      this.setState({ playlistTracks: this.playlistTracks.push(track) });
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
