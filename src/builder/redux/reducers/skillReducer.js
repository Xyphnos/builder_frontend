
const initialState = {}
const skillReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SKILLS":
        if(action.value !== {})
          return state = action.value;
        else
          return state
  
      default:
        return state;
    };
  };

  export default skillReducer