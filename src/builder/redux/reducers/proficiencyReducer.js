
const initialState = 0
const profReducer = (state = initialState, action) => {
    switch (action.type) {
      case "PROF":
        if(action.value !== {} && !isNaN(+action.value))
          return state = action.value;
        else
          return state
  
      default:
        return state;
    };
  };

  export default profReducer