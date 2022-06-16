import React,{useState,useEffect} from 'react'
import { Menu,Icon } from 'semantic-ui-react'
import Home_Dash from './dashboard component/Home'
import Dash_user from './dashboard component/My_Dashboard'
import Sidebar from './dashboard component/Sidebar'
import Transaction from './dashboard component/Transactions'
import Settings from './dashboard component/Settings'
import Withdraw from './dashboard component/Withdraw'
import Recharge from './dashboard component/Recharge'

function UserDashboard(){
    const [barActive,setBarActive]=useState(false)
    const [active,setActive]=useState('')

  
return(
    <>
    <Menu stackable fixed='top'>
    <h3 style={{marginTop:'10px',marginLeft:'30px',color:'white',color:'black'}}>Dashboard</h3>
       <Menu.Item position='right'>
        <Icon name='bars' style={{cursor:'pointer'}} onClick={()=>setBarActive(!barActive)}></Icon>
        </Menu.Item>
         </Menu>
       {barActive===false&&(
        <Sidebar active={active} setActive={setActive} disable={false}/>
       )} 
       {barActive===true&&(
        <Sidebar active={active} setActive={setActive} disable={true}/>
       )} 
        {active==='Home'&&(
          <Home_Dash/>
        )} 
        {active==='My_Dashboard'&&(
        <Dash_user/>
        )} 
        {active==='Transactions'&&(
          <Transaction/>
        )}
        {active==='Settings'&&(
          <Settings/>
        )}
        {active==='Withdraw'&&(
        <Withdraw/>
        )}
        {active==='Recharge'&&(
        <Recharge/>
        )}
    </>
)
}

export default UserDashboard