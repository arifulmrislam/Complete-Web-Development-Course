import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";
import { useContext } from 'react';

const Aunt = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <Cousin name={'Mamshad'}></Cousin>
                <Cousin name={'Mia'}></Cousin>
            </section>
            <p>Money: {money} $</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 $</button>
        </div>
    );
};

export default Aunt;