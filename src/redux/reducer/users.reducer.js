import Data from "../../data.json";

export default function reducer(state = [], action) {
    if (action.type === "GET_ALL_DATA") {
        return state = {
            ...state,
            userData: Data
        };
    }
    else if (action.type === "FILTER_BY_NAME") {
        return state = {
            ...state,
            userData: Data.filter(data => data.name.match(action.keywords))
        }
    }
    else if (action.type === "FILTER_BY_EMAIL") {
        return state = {
            ...state,
            userData: Data.filter(data => data.email.match(action.keywords))
        }
    }
    else if (action.type === "FILTER_BY_MOBILE") {
        return state = {
            ...state,
            userData: Data.filter(data => data.mobile.toString().match(action.keywords))
        }
    }
}