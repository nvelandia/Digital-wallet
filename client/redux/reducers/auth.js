const initialState = {
    token: null,
    user: {
        id: null,
        email: null,
        name: null,
        surname: null,
        avatar: null,
        emailVerifiedAt: null,
        dataCompletedAt: null,
        recharge_code: null,
        balance: null
    }
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            };
        case 'EMAIL_VERIFIED':
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            };
        case 'REGISTER':
            return {
                ...state,
                user: action.payload
            };
        case 'REGISTER_CONFIRMATION':
            console.log(action.payload);
            return {
                ...state,
                user: action.payload.user
            };
        case 'LOGOUT':
            return initialState
        default:
            return state;
    }
}