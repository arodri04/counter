export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";


export const increment = () => {
    console.log("IN INCREMENT!")
    return{type: INCREMENT}
}

export const decrement = () => {
    return{type: DECREMENT}
}