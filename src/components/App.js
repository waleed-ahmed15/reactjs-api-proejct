import React from "react";
// import axios from "axios";
import unsplash from "../api/unsplash";
import ImagesList from "./imagesList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  onsubmit = async (term) => {
    console.log("term: " + term);
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    });
    // console.log(response.data.results);
    // console.log(this);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onsubmitting={this.onsubmit} />
        {/* Found:{this.state.images.length} images */}
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}
export default App;
