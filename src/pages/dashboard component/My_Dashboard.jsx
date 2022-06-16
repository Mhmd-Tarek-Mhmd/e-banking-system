import React from 'react'
import main from './main.module.css'

function Dash_user(){
    return(
        <div className={main.container}>
        <div className={main.greating}>
            <h3>Welcome, Mr Mohamed</h3>
            <p>ID Number: 7812459</p>
        </div>
        <div className={main.dashboard_flex}>
            <div className={main.balance} id="dashboard">
                <h3>Balance</h3>
                <h1>2400.00 EGP</h1>
                <p className={main.active_account}>Active</p>
            </div>

            <div className="cards">
                <h2>Available Cards (3)</h2>
                <table className={main.transaction}>
                    <tr>
                        <th>Card</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>XXXX-XXXX-XXXX-5764</td>
                        <td>Credit</td>
                        <td className={main.active_account}>Active</td>
                    </tr>
                    <tr>
                        <td>XXXX-XXXX-XXXX-2324</td>
                        <td>Depit</td>
                        <td className={main.active_account}>Active</td>
                    </tr>
                    <tr>
                        <td>XXXX-XXXX-XXXX-6324</td>
                        <td>Pre-paid</td>
                        <td className={main.expired_account}>Expired</td>
                    </tr>
                </table>
            </div>

        </div>
    </div>
    )
}

export default Dash_user