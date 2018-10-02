const initialState = {
  today: [],
  yesterday: [],
  tomorrow: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    
    case 'TODAY':
    return {
      ...state,
      today: action.payload
    };
    case 'YESTERDAY':
    return {
      ...state,
      yesterday: action.payload
    };
    case 'TOMORROW':
    return {
      ...state,
      tomorrow: action.payload
    };
    default:
      return state;
  }
}
