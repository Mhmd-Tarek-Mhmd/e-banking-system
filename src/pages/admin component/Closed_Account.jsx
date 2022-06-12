import React,{useState} from 'react'
import { Item,Button,Icon,Popup} from 'semantic-ui-react'

function Closed_Account(){
    const [active,setActvie]=useState(false)
    return(
     <div style={{marginTop:'100px'}}>
    <Item.Group  link style={{alignItems:'center',width:'60%',marginLeft:'100px',border:'solid 1px black',padding:'10px',borderRadius:'10px'}}>
    <Item>
      <Icon name='user circle' size='huge' color='teal'/>

      <Item.Content>
        <Item.Header>Stevie Feliciano</Item.Header>
        <Item.Description>This account is active</Item.Description>
        {/*}This Account was wating to take action with it{*/}
        <Button positive disabled={true} style={{float:'right'}} onClick={()=>setActvie(true)}>This account is active</Button>

      </Item.Content>
    </Item>
    </Item.Group>

    <Item.Group  link style={{alignItems:'center',width:'60%',marginLeft:'100px',border:'solid 1px black',padding:'10px',borderRadius:'10px'}}>
    <Item>
      <Icon name='user circle' size='huge' color='teal'/>

      <Item.Content>
        <Item.Header>Stevie Feliciano</Item.Header>
        <Item.Description>This user was blocked</Item.Description>
        {/*}This Account was wating to take action with it{*/}
        <Button negative disabled={true} style={{float:'right'}} onClick={()=>setActvie(true)}>This user was blocked</Button>

      </Item.Content>
    </Item>
    </Item.Group>
     </div>
    )
}

export default Closed_Account