import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Spotify from './component/spotifyAPI/spotifyAPI';
// import { useEffect } from 'react';

// const CLIENT_ID = "893fb0a577c746a28a69ea7b6fc0e06b";
// const REDIRECT_URI = "http://localhost:3000";
// const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
// const RESPONSE_TYPE = "token";

const App = () => {
  return (
      
    <div className="App">
       
      <div className="row">
      <Spotify />
        </div>  
    <div className="row">
        <div className='col'>
            <div id="form">
                <div className="header">
                    <h1><u>Create Playlist</u></h1>
                </div>
                <form id="myForm" action="#" method="get">
                    <label>
                        <h3>Title</h3>
                    </label>
                    <input id="input-search-1" className="title-form" type="text" name="title"></input>
                    <label>
                        <h3>Description</h3>
                    </label>
                    <textarea id="input-search-2" className="desc-form" type="text" name="desc"></textarea>

                    <button className="btn" id="add-playlist"><i>add playlist</i></button>

                </form>
            </div>
        </div>
        <div className='col'>
            <div id="card">

                <div className="container">
                    <div>
                        <img src="https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/Lirik-Lagu-Tujuh-Belas-Tulus.jpg"
                            alt="">

                        </img>
                    </div>

                    <div className="title">
                        Hati Hati Dijalan
                    </div>
                    <div className="artist">
                        Tulus
                    </div>

                    <div className="albums">
                        Tujuh Belas
                    </div>

                    <div className="btn">
                        <span>
                            <i> Album Details </i>
                        </span>
                    </div>
                </div>
                <span className="artist-name"></span>
            </div>
        </div>
    </div>
</div>

  );
}

export default App;
