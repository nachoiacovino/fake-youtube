import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }} className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search-input">Video Search</label>
            <input
              value={this.state.term}
              id="search-input"
              type="text"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
