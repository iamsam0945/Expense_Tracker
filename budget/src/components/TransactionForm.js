import React, { useState } from 'react';
import { uniqueId } from '../utils';

function TransactionForm({ onNewTransaction }) {
    const [nameValue, setNameValue] = useState('');
    const [amountValue, setAmountValue] = useState('');

    const addTransaction = (type, evt) => {
        evt.preventDefault();

        const data = { id: uniqueId(), name: nameValue, 
                amount: parseInt(amountValue), type: type };

        onNewTransaction(data);

        setNameValue('');
        setAmountValue('');
    }

    return (
        <div>
            <h3>Add New Transactions</h3>
            <form className='transaction-form'>
                <label class="nme">
                    Name
                    <div>
                        <input type="text" value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)} />
                    </div>
                </label>
                <label class="amount">
                    Amount
                    <div>
                        <input type="number" value={amountValue}
                            onChange={(e) => setAmountValue(e.target.value)} />
                    </div>
                </label>
                <div>
                    <button className='income-btn' onClick={(e) => addTransaction('income', e)}>Add Income</button>
                    <button className='expense-btn' onClick={(e) => addTransaction('expense', e)}>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default TransactionForm;