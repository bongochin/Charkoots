// ACTIONS
const SET_ITEMS = 'SET_ITEMS';
const SET_ONE_ITEM = 'SET_ONE_ITEM';
const SET_BOARD_ITEMS = 'SET_BOARD_ITEMS';

// ACTION CREATORS
export const setItems = items => {
  return {
    type: SET_ITEMS,
    items
  }
};

export const setOneItem = item => {
  return {
    type: SET_ONE_ITEM,
    item
  }
};

export const setBoardItem = items => {
  return {
    type: SET_BOARD_ITEMS,
    items
  }
};

// FETCHES
export const fetchAllItems = () => {
  return async (dispatch) => {
    const responseFromDb = await fetch('/api/menus');
    const menus = await responseFromDb.json();
    dispatch(
      setItems(menus)
    )
  }
};

export const fetchBoardItems = boardId => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/boards/${boardId}/items`);
    const menus = await responseFromDb.json();
    dispatch(
      setItems(menus)
    )
  }
}

// REDUCERS
