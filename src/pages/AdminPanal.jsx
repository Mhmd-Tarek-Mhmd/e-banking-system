import React,{useState} from 'react'
import { Menu,Icon } from 'semantic-ui-react'
import Active_Account from './admin component/Active_Account'
import Blocked_Account from './admin component/Blocked_Account'
import Blocked_Account_Bank from './admin component/Blocked_Account-Bank'
import Closed_Account from './admin component/Closed_Account'
import Closed_Account_Bank from './admin component/Closed_Account-Bank'
import Open_Account from './admin component/Open_Account'
import Open_Account_Bank from './admin component/Open_Account-Bank'
import Process from './admin component/Process'
import Suspend_Account from './admin component/Suspend_Account'
import Transaction from './admin component/Transaction'

function AdminPanal(){
    const [activeItem,setActiveItem] = useState('Process log')
    const [barActive,setBarActive]=useState(false)
    const handleItemClick = (e, { name }) => setActiveItem(name)

    return(
        <div style={{height:'1000px'}}>
        <Menu stackable inverted fixed='top'>
        <h3 style={{marginTop:'10px',marginLeft:'30px',color:'white'}}>Admin Panal</h3>
        <Menu.Item position='right'>
        <Icon name='bars' style={{cursor:'pointer'}} onClick={()=>setBarActive(!barActive)}></Icon>
        </Menu.Item>
         </Menu>
         {barActive===false&&(
         <Menu vertical fixed='right' style={{marginTop:'50px',minHeight:'610px'}}>
        <Menu.Item>
          <Menu.Header>Activeties</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Transaction log'
              active={activeItem === 'Transaction log'}
              onClick={handleItemClick}
              
            />
            <Menu.Item
              name='Process log'
              active={activeItem === 'Process log'}
              onClick={handleItemClick}
              
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Account requests</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Open'
              active={activeItem === 'Open'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Closed'
              active={activeItem === 'Closed'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Blocked'
              active={activeItem === 'Blocked'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Bank-Account requests</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Open_account_bank'
              active={activeItem === 'Open_account_bank'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Closed_account_bank'
              active={activeItem === 'Closed_account_bank'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Blocked_account_bank'
              active={activeItem === 'Blocked_account_bank'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Accounts_state</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Active_Accounts'
              active={activeItem === 'Active_Accounts'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Suspend_Accounts'
              active={activeItem === 'Suspend_Accounts'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

      </Menu>
              )} 
              {activeItem==='Active_Accounts'&&(
                  <Active_Account/>
              )}
              {activeItem==='Suspend_Accounts'&&(
                  <Suspend_Account/>
              )}
              {activeItem==='Blocked'&&(
                  <Blocked_Account/>
              )}
              {activeItem==='Closed_account_bank'&&(
                  <Closed_Account_Bank/>
              )}
              {activeItem==='Blocked_account_bank'&&(
                  <Blocked_Account_Bank/>
              )}
              {activeItem==='Closed'&&(
                <Closed_Account/>
              )}
              {activeItem==='Open_account_bank'&&(
                <Open_Account_Bank/>
              )}
              {activeItem==='Open'&&(
                <Open_Account/>
              )}
              {activeItem==='Transaction log'&&(
                <Transaction/>
              )}
              {activeItem==='Process log'&&(
                <Process/>
              )}
         </div>
    )
}

export default AdminPanal