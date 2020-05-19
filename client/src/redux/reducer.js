export default (state, action) => {
	switch (action.type) {
		case 'SET_TOKEN':
			return { ...state, token: action.payload.token };
		case 'SET_USERNAME':
			return { ...state, userName: action.payload.userName };
		case 'SET_SIGNIN':
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				signIn: action.payload.signIn,
				token: action.payload.token,
				userName: action.payload.userName,
			};
		case 'SET_BELIEFS':
			return {
				...state,
				beliefs: action.payload,
			};
		case 'SET_THOUGHTS':
			return {
				...state,
				thoughts: action.payload,
			};
		default:
			return state;
	}
};
