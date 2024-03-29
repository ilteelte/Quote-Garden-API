import React, { Component } from "react";
import Quote from "./Quote";

class QuoteSearcher extends Component {
  state = {
    quotes: [],
    loading: false,
    local_state: 0
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(resp => resp.json())
      .then(json => {
        // console.log("componentDidMount", json);
        this.setState({ quotes: json.results, loading: false });
      });
  }

  render() {
    console.log("render of quotes", this.state.quotes);
    if (this.state.loading) {
      return <div> loading...</div>;
    }
    // console.log("this.state.loading", this.state.loading);
    // console.log("this.state.quotes", this.state.quotes);

    return (
      <div>
        <h1>Quotes:</h1>
        {this.state.quotes.map(quote => (
          <Quote
            key={quote._id}
            text={quote.quoteText}
            author={quote.quoteAuthor}
            score={this.score}
          />
        ))}
      </div>
    );
  }
}

export default QuoteSearcher;
