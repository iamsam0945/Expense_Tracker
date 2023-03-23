import React from 'react';

function TransactionHistory({ transactions, onDeleteTransaction }) {
    return (
        <div>
            <h2><u>Transaction History</u></h2>
            <ul className='transactions'>
                {
                    transactions.map((data) => 
                        <li class="list" key={data.id}>
                            <div class="name">{data.name}</div>
                            <div class="amt">
                                <span>₹{data.amount}</span>
                                <button onClick={() => onDeleteTransaction(data.id)}>x</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TransactionHistory;