// ACTIONS
const SET_BOARDS = 'SET_GROUPS';
const SET_ONE_BOARD = 'SET_GROUPS';

// ACTION CREATORS
export const setBoards = boards => {
  return {
    type: SET_BOARDS,
    boards
  }
};

export const setOneBoard = board => {
  return {
    type: SET_ONE_BOARD,
    board
  }
};

// ACTION CREATOR - FETCH
export const fetchAllBoards = () => {
  return async (dispatch) => {
    const responseFromDb = await fetch('/api/boards');
    const boards = await responseFromDb.json();
    dispatch(
      setBoards(boards)
    )
  }
};

export const fetchOneBoard = (boardId) => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/boards/${boardId}`);
    const board = await responseFromDb.json();
    dispatch(
      setOneBoard(board)
    )
  }
};

// REDUCER
export default function boardReducer(state = [], action) {
  switch (action.type) {
    case SET_BOARDS:
      newState = action.boards;
      return newState;
    case SET_ONE_BOARD:
      newState = action.board;
      return newState;
    default:
      return state;
  }
};

export default boardReducer;
