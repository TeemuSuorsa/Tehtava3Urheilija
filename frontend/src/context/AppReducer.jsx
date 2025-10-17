const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_URHEILIJAT":
      return {
        ...state,
        urheilijat: payload,
      };

    case "GET_URHEILIJA":
      return {
        ...state,
        urheilija: payload, // yksittäinen urheilija
      };

    case "ADD_URHEILIJA":
      return {
        ...state,
        urheilijat: [payload, ...state.urheilijat],
      };

    case "EDIT_URHEILIJA":
      return {
        ...state,
        urheilijat: state.urheilijat.map((u) =>
          u.id === payload.id ? payload : u
        ),
      };

    case "DELETE_URHEILIJA":
      return {
        ...state,
        urheilijat: state.urheilijat.filter((u) => u.id !== payload),
      };

    default:
      return state;
  }
};

export default appReducer;
