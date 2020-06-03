import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  handleUpvote = (quoteId) => {
    
  }

  handleDownvote = (quoteId) => {

  }

  handleRemove = (quoteId) => {

  }

  render() {
    let quotesArray = this.props.quotes.map(quote => {
      return <li key={quote.id}><QuoteCard quote={quote} /></li>
    })
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul>
                {quotesArray}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ quotes: state.quotes }))(Quotes);
