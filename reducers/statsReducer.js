const initialState = {
  data: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    
    case 'STAT_FETCH':
    return {
      ...state,
      data: action.payload
    };
    default:
      return state;
  }
}
