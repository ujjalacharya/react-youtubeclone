import React, {Component} from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY ="AIzaSyCF03_JY4Hy6c9iCSNzq27PGxiFeXeR6Io";



class App extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch("cradle of filth")

    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos)=>{
            //   this.setState({videos});
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                   });
           })
    }
    

    render(){
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {selectedVideo =>this.setState({selectedVideo})}
                videos = {this.state.videos}/>
                </div>
        );
    }
}

const rootDir = document.querySelector(".container")
ReactDOM.render(<App />, rootDir);