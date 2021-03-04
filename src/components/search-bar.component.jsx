import React from "react";

class SearchBar extends React.Component {
  state = { userInput: "" };
  onInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.userInput);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="">Search Bar</label>
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
