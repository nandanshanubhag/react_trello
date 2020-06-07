export const BoardActions = {
  SHOW_CREATE_NEW: 'SHOW_CREATE_NEW',
  HIDE_CREATE_NEW: 'HIDE_CREATE_NEW'
};

export const board = (state = {}, action) => {
  switch (action.type) {
    case BoardActions.SHOW_CREATE_NEW:
      return {
        showCreateNew: true
      };
    case BoardActions.HIDE_CREATE_NEW:
      return {
        showCreateNew: false
      };
    default:
      return state;
  }
};
