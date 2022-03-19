import { Component, Fragment } from 'react';
import axios from 'axios';
class Spotify extends Component{
    state ={
        post:[]
    }
    componentDidMount(){
    
        const url = "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
        const promise = axios({
        method: 'get',
        url: url,

      })
        
      promise.then((res)=>console.log(res.data))
      promise.then((data)=>{
        this.setState({
            post : data.data
        })
      })
      promise.catch((err) =>alert("Data tidak masuk",err)); 
    }

    render(){
        return(
            <Fragment>
            <h1>Spotify Data API</h1>
            </Fragment>
        )
    }
}
export default Spotify;