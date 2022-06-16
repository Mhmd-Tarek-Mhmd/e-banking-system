import React,{useState,useEffect} from 'react'
import side from './Sidebar.module.css'
function Sidebar(props){

    function handleItems(){
        const ele=document.getElementById(`${props.active}`)
        ele.classList.add(side.actives)
        ele.classList.remove(side.li)
    }
   async function handlename(e){
     if(props.active!==''){
        const ele=document.getElementById(`${props.active}`)
        ele.classList.remove(side.actives)
        props.setActive(e.target.value)
    }else if(props.active===''){
      props.setActive(e.target.value)
    }
    }
    if(props.active!==''){
    handleItems()
    }
    
return(
    <>
    {props.disable===true&&(
        <div>
            <div className={side.disable}>
        {/*}profile image & text{*/}
        <div className={side.disable}>
            <img src="/admin.png" alt="profile_picture"/>
            <h3>Mohamed</h3>
            <p>User</p>
        </div>
        {/*} menu item {*/}
        <div>
            <ul>
                <li id='Home' className={side.disable}>
                        {/*} className="active" {*/}
                        <span className={side.disable}><i className="fas fa-home"></i></span>
                        <span><input type='button' disable={true} value='Home' onClick={handlename}/></span>
                </li>
                <li id='My_Dashboard' className={side.disable}>
                        <span className={side.icon}><i className="fas fa-desktop"></i></span>
                        <span><input type='button' disable={true} value='My_Dashboard' onClick={handlename}/></span>
                </li>
                <li id='Transactions' className={side.disable}>
                        <span className={side.icon}><i classNameName="fa-solid fa-money-bill-transfer"></i></span>
                        <span><input type='button' disable={true} value='Transactions' onClick={handlename}/></span>
                </li>
                <li id='Withdraw' className={side.disable}>
                        <span className={side.disable}><i className="fa-solid fa-down-long"></i></span>
                        <span><input type='button' disable={true} value='Withdraw' onClick={handlename}/></span>
                </li>
                <li id='Recharge' className={side.disable}>
                        <span className={side.disable}><i className="fa-solid fa-arrow-up-long"></i></span>
                        <span><input type='button' disable={true} value='Recharge' onClick={handlename}/></span>
               </li> 
                <li id='Settings' className={side.disable}>
                        <span className={side.disable}><i className="fas fa-cog"></i></span>
                        <span id="Settings"><input type='button' disable={true} value='Settings' onClick={handlename}/></span>
                </li>
                <li id='Log_Out' className={side.disable}>
                        <span className={side.disable}><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                        <span><input type='button' disable={true} value='Log_Out' onClick={handlename}/></span>
                </li>
            </ul>
        </div>
    </div>
        </div>
    )}
    {props.disable!==true&&(
    <div className={side.sidebar} >
        {/*}profile image & text{*/}
        <div className={side.profile}>
            <img src="/admin.png" alt="profile_picture"/>
            <h3>Mohamed</h3>
            <p>User</p>
        </div>
        {/*} menu item {*/}
        <div>
            <ul>
                <li id='Home' className={side.li}>
                        {/*} className="active" {*/}
                        <span className={side.icon}><i className="fas fa-home"></i></span>
                        <span><input type='button' disable={true} value='Home' onClick={handlename}/></span>
                </li>
                <li id='My_Dashboard' className={side.li}>
                        <span className={side.icon}><i className="fas fa-desktop"></i></span>
                        <span><input type='button' disable={true} value='My_Dashboard' onClick={handlename}/></span>
                </li>
                <li id='Transactions' className={side.li}>
                        <span className={side.icon}><i classNameName="fa-solid fa-money-bill-transfer"></i></span>
                        <span><input type='button' disable={true} value='Transactions' onClick={handlename}/></span>
                </li>
                <li id='Withdraw' className={side.li}>
                        <span className={side.icon}><i className="fa-solid fa-down-long"></i></span>
                        <span><input type='button' disable={true} value='Withdraw' onClick={handlename}/></span>
                </li>
                <li id='Recharge' className={side.li}>
                        <span className={side.icon}><i className="fa-solid fa-arrow-up-long"></i></span>
                        <span><input type='button' disable={true} value='Recharge' onClick={handlename}/></span>
               </li> 
                <li id='Settings' className={side.li}>
                        <span className={side.icon}><i className="fas fa-cog"></i></span>
                        <span id="Settings"><input type='button' disable={true} value='Settings' onClick={handlename}/></span>
                </li>
                <li id='Log_Out' className={side.li}>
                        <span className={side.icon}><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                        <span><input type='button' disable={true} value='Log_Out' onClick={handlename}/></span>
                </li>
            </ul>
        </div>
    </div>
    )}
    </>
)
}
export default Sidebar