interface CountState {
    value: number,
    status: string,
    error: any,
}

export const initialState: CountState = {
    value: 0,
    status: 'idle',
    error: null,
}
