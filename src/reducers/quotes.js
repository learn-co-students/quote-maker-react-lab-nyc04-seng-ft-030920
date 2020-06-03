export default function quoteReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return [...state.filter(quote => quote.id !== action.quote.id)]
    default:
    return state;
  }
}

