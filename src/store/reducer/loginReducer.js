//초기 상태값 설정
const initialState = {
    loginState: false,
};

//리듀서 설정
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                loginState: action.data.loginState,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default LoginReducer;
