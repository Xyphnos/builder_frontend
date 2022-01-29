
const initialState = {Strength: '', Dexterity: '', Constitution: '', Intelligence: '', Wisdom: '', Charisma: ''}
const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SCORES":
        if(action.value !== {})
          return state = action.value;
        else
          return state
  
      default:
        return state;
    };
  };

  export default scoreReducer