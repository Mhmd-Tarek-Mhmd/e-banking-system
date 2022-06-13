import React,{useState} from 'react'
import { Search,Feed, Icon} from 'semantic-ui-react'

function Transaction(){
const image = 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg'
const image2 = 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
const date = '3 days ago'


return(
    <div style={{marginTop:'100px'}}>
        <Search
          placeholder='Enter Transaction Id'
          style={{marginLeft:'50px'}}
          size='massive'
        />

<Feed style={{border:'solid 1px black',width:'80%',marginTop:'40px',marginLeft:'40px',borderRadius:'10px',padding:'10px'}}>
    <h3>Transaction id 3</h3>
    <Feed.Event image={image} date={date} summary='user1 sent to user2 100$' />

    <Feed.Event>
      <Feed.Label image={image2} />
      <Feed.Content date={date} summary='user2 receive from user1 100$' />
    </Feed.Event>
    <Icon name='exchange' style={{float:'right',marginTop:'-30px'}} size='big' color='blue'/>
  </Feed>

  <Feed style={{border:'solid 1px black',width:'80%',marginTop:'40px',marginLeft:'40px',borderRadius:'10px',padding:'10px'}}>
    <h3>Transaction id 2</h3>
    <Feed.Event image={image} date={date} summary='user1 charge 100$' />

    <Icon name='arrow right' style={{float:'right',marginTop:'-30px'}} size='big'  color='green'/>
  </Feed>

  <Feed style={{border:'solid 1px black',width:'80%',marginTop:'40px',marginLeft:'40px',borderRadius:'10px',padding:'10px'}}>
    <h3>Transaction id 1</h3>
    <Feed.Event image={image} date={date} summary='user1 withdraw 100$' />

    <Icon name='arrow left' style={{float:'right',marginTop:'-30px'}} size='big' color='red'/>
  </Feed>
    </div>
)
}

export default Transaction