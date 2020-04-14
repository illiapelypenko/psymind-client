export default (state, action) => {
	switch (action.type) {
		case 'GET_TABLE':
			return { ...state, table: 'get table' };
		case 'POST_TABLE':
			return { ...state, table: 'post table' };
		default:
			return state;
	}
};
