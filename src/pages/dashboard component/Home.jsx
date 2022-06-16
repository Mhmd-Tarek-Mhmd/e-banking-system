import React from 'react'
import main from './main.module.css'
function Home_Dash(){
return(
    <div style={{marginTop:'100px'}}>
    <div className="wrapper">
        <div className={main.container}>

            <div className={main.greating}>
                <h3>Welcome, Mr Mohamed</h3>
                <p>ID Number: 7812459</p>
            </div>
            <div className="accounts-wraaper">
                <h2>Current Accounts (1)</h2>
                <div className={main.accounts}>
                    <div className="current_account">
                        <button><a href="">
                                <i className="fa-solid fa-credit-card"></i>
                                <p>XXXX-XXXX-XXXX-5764</p>
                                </a>
                        </button>
                    </div>
                    <div className={main.add_account}>
                        <button><a href="">
                                <i className="fa-solid fa-plus"></i>
                                <p>Create New Account</p>
                            </a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)
}

export default Home_Dash