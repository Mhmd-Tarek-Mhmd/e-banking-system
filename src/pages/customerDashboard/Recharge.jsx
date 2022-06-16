import React,{useState} from 'react'
import Loading from '../Loading'
import { Label,Input,Button, Icon } from 'semantic-ui-react'
import main from './main.module.css'


function Recharge(){
    const [loading,setLoading]=useState(true)
    const [value,setValue]=useState('')
    const [loading2,setLoading2]=useState(false)
    const [message,setMessage]=useState(false)

    const stoploading=()=>{
        setTimeout(()=>{
            setLoading(false)
        },500)
    }
    stoploading()
    const handleClick=async()=>{
    new Promise(()=>{
       setTimeout(()=>{
            setLoading2(true)
        },500)
        setTimeout(()=>{
            setLoading2(setLoading2(false))
        },720)
        setTimeout(()=>{
            setLoading2(setMessage(true))
        },830)
     })

    }

    return(
<div style={{marginTop:'100px'}}>
<div style={{marginTop:'100px',backgroundColor:'white',height:'500px'}}>
    {loading===true&&(
    <div className='loading' style={{paddingTop:'250px'}}>
    <Loading/>
    </div>
    )}
    {loading!==true&&(
        message===false&&(  
        <div className={main.formWithDraw} style={{paddingTop:'100px'}}>
        
          <Label.Group tag>
          <Label as='a' size='big' active={value==='100'} onClick={()=>setValue('100')}>$100.00</Label>
          <Label as='a' size='big' active={value==='200'}  onClick={()=>setValue('200')}>$200</Label>
          <Label as='a' size='big' active={value==='300'} onClick={()=>setValue('300')}>$300</Label>
          <Label as='a' size='big' active={value==='500'} onClick={()=>setValue('500')}>$500</Label>
          <Label as='a' size='big' active={value==='1000'} onClick={()=>setValue('1000')}>$1000</Label>
        </Label.Group>
        
        <br/>
        <h2>Or</h2>
        <br/>
        <Input className={main.RechargeInput} onChange={(e)=>setValue(e.target.value)} placeholder='Enter amount' type='number'  required/>
        <br/>
        {loading2===false&&(
        <Button color='green' onClick={()=>handleClick()} style={{marginTop:'50px'}}>submit</Button>
        )}
       {value!==''&&(
     loading2===true&&(
    <Button loading color='green' style={{marginTop:'50px'}}>submit</Button>
    ))}
        </div>
    ))}
    {message===true&&(
        <>
        <div className={main.formWithDraw} style={{paddingTop:'100px'}}>
        <Icon name='check circle' color='green' size='massive'/>
        <br/>
        <h3>the Recharge process has been successfully <p>Your account balance will increase to {value}$</p></h3>
        </div>
        </>
    )}
 </div>           
</div>
    )
}

export default Recharge