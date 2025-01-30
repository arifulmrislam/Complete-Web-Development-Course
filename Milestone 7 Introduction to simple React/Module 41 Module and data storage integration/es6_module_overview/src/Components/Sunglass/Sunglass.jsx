import './Sunglass.css'
import Watch from '../../Watch/Watch';
import { add, multiply, dividedTheFirstNumberByTheSecondNumbers as divided } from '../Calculator/Calculator';

const Sunglass = () => {
    const first = 50;
    const second = 30;
    const sum = add(first + second);
    const mul = multiply(first * second);
    const div = divided( first / second);

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;