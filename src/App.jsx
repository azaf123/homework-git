
import './App.css';

import { GiphyFetch } from '@giphy/js-fetch-api'
import { useState } from 'react'
import Axios from 'axios';
// import Spotify from './component/spotifyAPI';
import CreatePlaylist from './component/createpl/createpl'
import Playlist from './component/playlist/playlist';
import Spotify from './component/spotifyAPI';
import Dropdown from './component/dropdown';
import GiphyForm from './pages/home';
import NewsFeedPage from './pages/newsfeed';
const App = () => {
console.log(process.env.REACT_APP_GIPHY_KEY)
  return (
    <div className="App" id='App'>



{/* news feed page */}
<NewsFeedPage />

      {/* component giphy */}
     {/* <GiphyForm /> */}
      {/* <img src='https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif'></img>
      <div className="row">
        <Spotify />
      </div>
      <div className="row">
        <Dropdown />
      </div>
      <div className="row">
        <div className='col'>
          <CreatePlaylist />
        </div>
        <div className='col'>
          <Playlist />
        </div>
      </div> */}
    </div>

  );
}

export default App;
