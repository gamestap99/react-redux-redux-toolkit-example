import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectCount} from "../selector/countSelector";
import {useCallback, useState} from "react";
import {increment, decrement, incrementAsync, incrementByAmount} from "../actions/countAction";
import {incrementIfOdd} from "../middleware/countMiddleware";

export function CountContainer() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;


    const onDecrement = () => dispatch(decrement(count));
    const onIncrement = () => dispatch(increment(count));
    const onIncrementByAmount = () => dispatch(incrementByAmount(incrementValue));
    const onIncrementAsync = () => dispatch(incrementAsync(incrementValue));
    const onIncrementIfOdd = () => dispatch(incrementIfOdd(incrementValue));


    return {
        count,
        dispatch,
        incrementValue,
        incrementAmount,
        setIncrementAmount,
        onDecrement,
        onIncrement,
        onIncrementByAmount,
        onIncrementAsync,
        onIncrementIfOdd
    };


}

