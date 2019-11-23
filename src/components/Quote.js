import React, { Component } from "react";
import QuoteSearcher from "./QuoteSearcher";

class Quote extends Component {
  render() {
    console.log("Heloo from Quote: ", this.text);

    // console.log("this.quote_text", this.props);

    return (
      <div>
        {this.props.text}
        <p>by:{this.props.author}</p>
      </div>
    );
  }
}

export default Quote;
