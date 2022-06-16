import React from 'react'
import profile from './profile.module.css'
function Transaction(){
return(
    <div className="wrapper">
    <div className={profile.container}>
        <div className={profile.greating}>
            <h3>Welcome, Mr Mohamed</h3>
            <p>ID Number: 7812459</p>
        </div>
        <h1>Transactions</h1>

        <table className={profile.transaction}>
            <tr>
                <th>Date</th>
                <th>Particulars</th>
                <th>Dr.</th>
                <th>Cr.</th>
                <th>Balance</th>
            </tr>
            <tr>
                <td>01/05</td>
                <td>Withdraw</td>
                <td>300,0</td>
                <td>0,0</td>
                <td>2000,0</td>
            </tr>
            <tr>
                <td>02/05</td>
                <td>Diposit</td>
                <td>0,0</td>
                <td>500,0</td>
                <td>2500,0</td>
            </tr>
            <tr>
                <td>03/05</td>
                <td>Withdraw</td>
                <td>300,0</td>
                <td>0,0</td>
                <td>2200,0</td>
            </tr>
            <tr>
                <td>04/05</td>
                <td>Diposit</td>
                <td>0,0</td>
                <td>500,0</td>
                <td>2700,0</td>
            </tr>

            <tr>
                <td>01/05</td>
                <td>Send</td>
                <td>300,0</td>
                <td>0,0</td>
                <td>1700,0</td>
            </tr>
            <tr>
                <td>02/05</td>
                <td>Receive</td>
                <td>0,0</td>
                <td>500,0</td>
                <td>2200,0</td>
            </tr>
            <tr>
                <td>03/05</td>
                <td>Send</td>
                <td>300,0</td>
                <td>0,0</td>
                <td>1900,0</td>
            </tr>
            <tr>
                <td>04/05</td>
                <td>Receive</td>
                <td>0,0</td>
                <td>500,0</td>
                <td>2400,0</td>
            </tr>
        </table>
    </div>
</div>
)
}

export default Transaction