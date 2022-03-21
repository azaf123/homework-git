import { Component } from "react";

class GiphyForm extends Component {
  render() {
    return (
            <div>
            <div className="row">
              <label htmlFor="">
              </label>
            </div>
            <div className="row search-btn">
              <div className='search col-lg-7'>
                <input type="text" placeholder='Search for interesting Giphy image' />
              </div>
              <div className='btn-submit col-lg-4'>
                <button>Submit</button>
              </div>
            </div>
            <div className="row img">
            <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"></img>
            </div>
  
          </div>
            
    )
  }
}
export default GiphyForm