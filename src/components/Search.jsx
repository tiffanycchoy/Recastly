class Search extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }
  search(event) {
    this.props.handleSearchTerm(event.target.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input onChange = {this.search} className="form-control" type="text" />
        <button className="btn hidden-sm-down" onClick = {this.props.handleSearchVideoClick}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
