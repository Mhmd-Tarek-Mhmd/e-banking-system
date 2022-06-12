import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

function Process(){
return(
    <div style={{marginTop:'100px'}}>
    <Feed style={{border:'solid 1px black',width:'50%',marginLeft:'40px',borderRadius:'10px',padding:'10px'}}>
    <Feed.Event>
      <Feed.Label>
        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      </Feed.Label>
      <Feed.Content>
        You approve user account <a>Elliot Fu </a>
      </Feed.Content>
      <Icon name='check circle' color='green' size='big'/>
    </Feed.Event>
  </Feed>
  <Feed style={{border:'solid 1px black',width:'50%',marginLeft:'40px',borderRadius:'10px',padding:'10px'}}>
    <Feed.Event>
      <Feed.Label>
        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      </Feed.Label>
      <Feed.Content>
        You rejected user account <a>Max Le</a>
      </Feed.Content>
      <Icon name='ban' color='red' size='big'/>
    </Feed.Event>
  </Feed>
    </div>
)
}

export default Process