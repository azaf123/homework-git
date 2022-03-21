import { Component, Fragment } from 'react';

class CreatePlaylist extends Component {
    render() {
        return (
            <Fragment>
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
            </Fragment>
        )
    }
}

export default CreatePlaylist

