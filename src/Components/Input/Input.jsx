import React , {useState} from 'react';
import { UseEmployeeConText } from '../ConText/ConText';
import './Input.css';



export default function Input() {
     const get = UseEmployeeConText();
     const [inputValue, setInputValue] = useState({})
     function ValueChang(e) {
        setInputValue({...inputValue ,[e.target.name]: e.target.value });
        console.log(inputValue);
    }
    function AddEmployee(){
        get.setEmployeeInfoStet([...get.EmployeeInfo , inputValue])
    }

    return (
        <div id="BIGdiv">
            <div className="addEmployeeDiv">
            <form id="formStyle">
                <div>
                      <label htmlFor="">First Name:</label>
                      <input type="text" name="Name" id="nameFirst" value={inputValue.Name} required onChange={ValueChang}/> 
                </div>

                <div>
                    <label htmlFor="">Last Name:</label>
                    <input type="text" name="Last" value={inputValue.Last} required onChange={ValueChang}/>
                </div>


                <div>
                   <label htmlFor="">Yer of Birth:</label>
                   <input type="number" name="Birth" value={inputValue.Birth} required onChange={ValueChang}/>
               </div>

               <div>
                  <label htmlFor="">Phone Number:</label>
                  <input type="phone" name="Phone" value={inputValue.Phone} required onChange={ValueChang}/>
               </div>
               <div>
                  <label htmlFor="">Mail Adress:</label>
                  <input type="email" name="Email" value={inputValue.Email} required onChange={ValueChang}/>
            
               </div>
            </form>
            </div >
            <div id="inputIdDiv">
                <button type="button" onClick={AddEmployee}>add to table</button>
                <button onClick={()=>{ document.getElementById("nameFirst").focus()}}>focus on firs name</button>
            </div>

        </div>
    )
}
