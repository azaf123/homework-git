import { Component,Fragment } from "react";

class Playlist extends Component{
    render(){
        return(
            <Fragment>
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
            </Fragment>
        )
    }
}
export default Playlist