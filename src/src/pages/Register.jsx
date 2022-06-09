import React,{ useState } from "react";
import { request } from "../utilities/request";
import Footer from "../layouts/Footer";
import Nav from "../layouts/Nav/Nav";
import register from './register.module.css'
function Register(){

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [Email,setEmail]=useState('')
    const [Phone,setPhone]=useState('')
    const [Password,setPassword]=useState('')
    console.log(firstName,lastName,Email,Phone,Password)

    function reg(firstName,lastName,Email,Phone,Password){
        var formdata = new FormData();
        const Name=`${firstName} ${lastName}`
        formdata.append("Name", Name);
        formdata.append("Email", Email);
        formdata.append("Phone", Phone);
        formdata.append("Password", Password);

    const url="https://ebankingsystem.herokuapp.com/api/identity/register"
    fetch(url,{
        method:'POST',
        headers: {
            mode: "cors",
          },
        body:formdata
    }).then(res=>res.text())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))   
    }

    return(
        <>
        <Nav/>
        <div className={register.sign}>
  
        <main className={register.form}>
            <form action="post" className={register.form_body}>
                <h1>Registration</h1>
                <div className={register.input}>
                    <div className={register.input_items}>
                        <div className={register.input_item}>
                            <label for="first-name">First Name</label>
                            <input type="text" name="first-name" id="first-name" required value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                        </div>
                        <div className={register.input_item}>
                            <label for="last-name">Last Name</label>
                            <input type="text" name="last-name" id="last-name" required value={lastName} onChange={e=>setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className={register.input_items}>
                        <div className={register.input_item}>
                            <label for="email">Email Address</label>
                            <input type="email" name="email" id="email" required value={Email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div className={register.input_item}>
                            <label for="phone-number">Contact Number</label>
                            <input type="tel" id="phone-number" name="phone-number" pattern="[0-5]{3}[0-9]{8}" required value={Phone} onChange={e=>setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className={register.input_items}>
                        <div className={register.input_item}>
                            <label for="password">Password (8 characters)</label>
                            <input type="password" name="password" id="password" pattern="[0-9-a-z]{8,20}[A-Z]{1}[*-+-?-!]{1}" required
                                minlength="8" value={Password} onChange={e=>setPassword(e.target.value)}/>
                          {/*}  {Password!==''&&(
                                <div className={register.checking}>
                                 Password should be have one at least uppercase
                                 Password should be have one at least number 
                                 Password should be have one at least symbolic
                                 Password should be at least 8 letter and maxmum 20
                                </div>
                          )}{*/}
                        </div>
                        <div className={register.input_item}>
                            <label for="confirm password">Confirm Password</label>
                            <input type="password" name="confirm-password" id="confirm-password" required minlength="8"/>
                        </div>
                    </div>
                </div>
                <div className={register.flex}>
                    <button style={{'margin-bottom':'10px','margin-top': '25px:'}} className={register.btn_sign} type="button" onClick={()=>reg(firstName,lastName,Email,Phone,Password)}>Sign Up</button>
                    <a className={register.new_account} href="sign-in.html">Have an Account?</a>
                </div>
            </form>
        </main>
    </div>
    <Footer/>
    </>
    )
}
export default Register