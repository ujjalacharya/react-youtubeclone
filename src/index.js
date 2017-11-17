import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
const API_KEY ="AIzaSyC9xmW8y9sU8YCZrZzNLm0zw65KNkUvqNQ";



class App extends Component{
    constructor(props){
        super(props);
        
        this.state = {videos: []}

        YTSearch({key: API_KEY, term: "surfboards"}, (videos)=>{
            this.setState({videos});
            // this.setState({videos: videos});
        })
    }
    render(){
        return(
            <div>
                <SearchBar />
                <VideoList videos = {this.state.videos}/>
                </div>
        );
    }
}

const rootDir = document.querySelector(".container")
ReactDOM.render(<App />, rootDir);