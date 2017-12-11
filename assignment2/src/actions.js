export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";

export function increaseCounter() {
    return {
        type: INCREASE_COUNTER
    }
}

export function decreaseCounter() {
    return {
        type: DECREASE_COUNTER
    }
}