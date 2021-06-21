import React from 'react';
import styles from './Counter.module.css';
import {CountContainer} from "../../containers/countContainer";

export function Counter() {
    // const count = useAppSelector(selectCount);
    // const dispatch = useAppDispatch();
    // const [incrementAmount, setIncrementAmount] = useState('2');
    //
    // const incrementValue = Number(incrementAmount) || 0;

    const {count,incrementAmount,setIncrementAmount,onDecrement,onIncrement,onIncrementByAmount,onIncrementAsync,onIncrementIfOdd} = CountContainer();

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={onDecrement}
                >
                    -
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={onIncrement}
                >
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={onIncrementByAmount}
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={onIncrementAsync}
                >
                    Add Async
                </button>
                <button
                    className={styles.button}
                    onClick={onIncrementIfOdd}
                >
                    Add If Odd
                </button>
            </div>
        </div>
    );
}
