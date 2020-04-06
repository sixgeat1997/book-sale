import { combineReducers } from 'redux'


const saleForm = {
    bname: "",
    wname: "",
    price: 0,
    tel: "",
    urlimg: "",
}

const bookReducer = (data = saleForm, action) => {
    switch (action.type) {
        case "CHG_BNAME":
            return {
                ...data,
                bname: action.name
            }
        case "CHG_WNAME":
            return {
                ...data,
                wname: action.wame
            }
        case "CHG_PRICE":
            return {
                ...data,
                price: action.price
            }
        case "CHG_TEL":
            return {
                ...data,
                tel: action.tel
            }
        case "CHG_URLIMG":
            return {
                ...data,
                urlimg: action.urlimg
            }

    }
    return data
}

const rootReducer = combineReducers({
    bookForm: bookReducer
})

export default rootReducer
