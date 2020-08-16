export const ageUpAysnc = (val) => {
    return {
        type: "AGE_UP", value : val
    }
}

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const ageUp = (val) => {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            dispatch(ageUpAysnc(val));
        }, 3000)
    }
}

export const ageDown = (val) => {
    return {
        type: "AGE_DOWN", value : val
    }
}

export const delItem = (id) => {
    return {
        type: "DEL_ITEM", value: id
    }
}