import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY ="AIzaSyC9xmW8y9sU8YCZrZzNLm0zw65KNkUvqNQ"

const App = ()=>{
    return (
        <div>
            <SearchBar />
        </div>
    );
}
const rootDir = document.querySelector(".container")
ReactDOM.render(<App />, rootDir);