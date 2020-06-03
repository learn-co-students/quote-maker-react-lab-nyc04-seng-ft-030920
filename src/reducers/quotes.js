export default function quoteReducer(state = [], action) {
  let idx
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      debugger
      idx = state.findIndex(quote => quote.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    // case 'UPVOTE_QUOTE':
    //   let quoteVote = {...state.filter(quote => quote.id === action.quoteId)}
    //   return [...state, quoteVote]
    // case 'DOWNVOTE_QUOTE':
    //   let quoteVote = {...state.filter(quote => quote.id === action.quoteId)}
    //   return [...state, quoteVote]
    default:
      return state;
  }
}