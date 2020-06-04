export default function quoteReducer(state = [], action) {
  let idx
  let quoteEdit
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      quoteEdit = {...state[idx]}
      console.log(quoteEdit)
      console.log(state)
      if(quoteEdit.votes){
        console.log('hi')
        quoteEdit.votes = quoteEdit.votes + 1
      } else {
        console.log('hahaha')
        quoteEdit = {...quoteEdit, votes: 1}
      }
      // quoteEdit.votes ? (quoteEdit.votes = quoteEdit.votes + 1) : (quoteEdit.votes = 1)
      console.log('this is insane')
      // console.log([...state.splice(idx, 1, quoteEdit)])
      return [...state.splice(idx, 1, quoteEdit)]
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      quoteEdit = {...state[idx]}
        return [...state.splice(idx, 1, quoteEdit)]
    default:
      return state;
  }
}