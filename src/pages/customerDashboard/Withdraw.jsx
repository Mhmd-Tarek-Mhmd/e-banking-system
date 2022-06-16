import React,{useState} from 'react'
import Loading from '../Loading'
import { Form, Input, Label,Button,Progress,Feed} from 'semantic-ui-react'
import main from './main.module.css'

function Withdraw(){
    const [loading,setLoading]=useState(true)
    const [step1,setStep1]=useState(true)
    const [step2,setStep2]=useState(false)
    const [step3,setStep3]=useState(false)

    const handleClick1=()=>{
        setStep1(false)
        setStep2(true)
    }

    const stoploading=()=>{
        setTimeout(()=>{
            setLoading(false)
        },500)
    }
    stoploading()
return(
    <div style={{marginTop:'100px'}}>
        <Feed style={{marginTop:'100px',backgroundColor:'white',height:'500px'}}>
        <Feed.Content>
            {loading===true&&(
            <div className='loading' style={{paddingTop:'250px'}}>
            <Loading/>
            </div>
            )}
            {loading===false&&(
                step1===true&&(
                <div style={{paddingTop:'50px',transition:'all .9s ease'}}>
                    <h2 style={{textAlign:'center'}}>Step 1</h2>
                    <Form className={main.formWithDraw} style={{width:'50%',marginTop:'100px'}}>
                        <Form.Field>
                        <Input placeholder='Customer Id' required/>
                        <Label pointing color='red'>
                            Please enter a Customer Id
                        </Label>
                        </Form.Field>

                        <Button color='green' style={{marginTop:'50px'}} onClick={()=>handleClick1()}> Step 2</Button>
                        <Progress percent={50} success style={{width:'80%',marginTop:'30px'}}>
                    </Progress>
                    </Form>
                </div>
                )
            )}
           {step2===true&&(
                <div style={{paddingTop:'50px',transition:'all .9s ease'}}>
                    <h2 style={{textAlign:'center'}}>Step 2</h2>
                    <Form style={{width:'50%',marginLeft:'350px',marginTop:'100px'}}>
                        <Form.Field>
                        <Input placeholder='Amount' required/>
                        <Label pointing color='red'>
                            Enter amount
                        </Label>
                        </Form.Field>

                        <Button color='green' style={{marginTop:'50px'}}>submit</Button>

                        <Progress percent={90} success style={{width:'80%',marginTop:'30px'}}>
                    </Progress>
                    </Form>
                </div>
            )}
        </Feed.Content>
        </Feed>
    </div>
)
}

export default Withdraw