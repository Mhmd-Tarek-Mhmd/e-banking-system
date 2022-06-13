import React,{useState} from 'react'
import { Item,Button,Icon,Popup} from 'semantic-ui-react'

function Suspend_Account(){
    const [active,setActvie]=useState(false)
    return(
     <div style={{marginTop:'100px'}}>
    <Item.Group  link style={{alignItems:'center',width:'60%',marginLeft:'100px',border:'solid 1px black',padding:'10px',borderRadius:'10px'}}>
    <Item>
      <Icon name='user circle' size='huge' color='teal'/>

      <Item.Content>
        <Item.Header>Stevie Feliciano</Item.Header>
        <Item.Description>This Account was activated</Item.Description>
        {/*}This Account was wating to take action with it{*/}
            <Popup
            trigger={
                <Button positive style={{float:'right'}} onClick={()=>setActvie(true)}>Reactivate</Button>
            }
            content={<Button color='green' content='Are you sure' />}
            on='click'
            position='top right'
          />
      </Item.Content>
    </Item>
    </Item.Group>
     </div>
    )
}

export default Suspend_Account