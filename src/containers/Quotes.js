import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    console.log(this.props.quotes)
    let quotesArray = this.props.quotes.map(quote => {
      return (
        <li key={quote.id}>
          <QuoteCard 
            quote={quote}
            upvote={this.handleUpVote}
            downvote={this.handleDownVote}
            remove={this.handleRemove}
          />
        </li>
      )
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

  handleUpVote = (quoteId) => {
    this.props.upvoteQuote(quoteId)
  }

  handleDownVote = (quoteId) => {
    this.props.downvoteQuote(quoteId)
  }

  handleRemove = (quoteId) => {
    this.props.removeQuote(quoteId)
  }
}

let mapDispatchToProps = {
  upvoteQuote: upvoteQuote,
  downvoteQuote: downvoteQuote,
  removeQuote: removeQuote
}

export default connect(state => ({ quotes: state.quotes }), mapDispatchToProps)(Quotes);
