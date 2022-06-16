import React from 'react'
import profile from './profile.module.css'
function Settings(){
    return(
        <div className="wrapper">
        <div className={profile.container}>
            <div className={profile.greating}>
                <h3>Welcome, Mr Mohamed</h3>
                <p>ID Number: 7812459</p>
            </div>

            <div className={profile.flex}>
                <div className={profile.setting}>
                    <div>
                        <h2>General <button>Edit</button></h2>
                    </div>

                    <table className={profile.setting_table}>
                        <tr>
                            <td>Full Name:</td>
                            <td>Mohamed</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>Whatever@exampel.com</td>
                        </tr>
                        <tr>
                            <td>Phone number:</td>
                            <td>01234567890</td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>**********</td>
                        </tr>
                    </table>
                </div>
                <div className={profile.setting}>
                    <h2>Address <button>Edit</button></h2>
                    <table className={profile.setting_table}>
                        <tr>
                            <td>Address:</td>
                            <td>Cairo</td>
                        </tr>
                        <tr>
                            <td>City:</td>
                            <td>Cairo</td>
                        </tr>
                        <tr>
                            <td>Postal code:</td>
                            <td>12345</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>Egypt</td>
                        </tr>
                    </table>
                </div>
            </div>



        </div>
    </div>
    )
}

export default Settings