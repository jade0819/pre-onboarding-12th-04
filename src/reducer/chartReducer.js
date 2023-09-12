export const initialState = {
  isLoading: false,
  error: null,
  datas: [],
};

export const reducer = (state, action) => {
  switch (action?.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action?.payload };
    case 'SET_ERROR':
      return { ...state, datas: [], error: action?.payload };
    case 'SET_DATA':
      return { ...state, error: null, datas: action?.payload };
    default:
      return state;
  }
};
