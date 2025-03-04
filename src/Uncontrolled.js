import { useRef , useState } from "react";

export default function AddNumbers() {
    const num1 = useRef(null);
    const num2 = useRef(null);
    const [sum , setSum] = useState(null);

    const calculateSum = () => {
        const n1 = parseFloat(num1.current.value);
        const n2 = parseFloat(num2.current.value)
        setSum(n1 + n2);
    };

    return (
        <div>
        <input ref={num1} type="number" placeholder="Enter the first number" />
        <input ref={num2} type="number" placeholder="Enter the second number" />
        <button onClick={calculateSum}>
            Add
        </button>
        <p>Sum: {sum}</p>
        </div>
    );
}