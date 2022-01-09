//초기 상태값 설정
const initialState = {
    nowCategory: "EXPLOLER",
};

//리듀서 설정
const NowCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CATEGORY": {
            return {
                ...state,
                nowCategory: action.data.nowCategory,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default NowCategoryReducer;
