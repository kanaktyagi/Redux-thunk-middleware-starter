export const ageUp = (val) => {
    return {
        type: "AGE_UP", value : val
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