import React, { Component } from "react";
import QuoteSearcher from "./QuoteSearcher";

class Quote extends Component {
  state = {
    // numLikes: 0
  };

  //style={ someCondition ? { textAlign:'center', paddingTop: '50%'} : {}}

  render() {
    console.log("style", this.props.score);

    return (
      <div>
        {this.props.text}
        <div>
          <p>
            by:{this.props.author}
            <button id="Like" onClick={this.increment}>
              :)
            </button>
            <button id="DisLike" onClick={this.decrement}>
              :(
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Quote;
