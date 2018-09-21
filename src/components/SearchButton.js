import React from "react";

class SearchButton extends React.Component {
  render() {
    return (
      <div className="open-search">
        <a onClick={this.props.showSearchPage}>Add a book</a>
      </div>
    );
  }
}

export default SearchButton;
