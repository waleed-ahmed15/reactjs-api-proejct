import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onsubmitting(this.state.term);
  };
  state = { term: "" };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Image Search:</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
                // this.change();
              }}
            />
          </div>
        </form>
      </div>
    );
  }
  //   change(){
  //     console.log(this.state.term);

  //     }
}
export default SearchBar;
