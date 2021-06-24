import React , {useState , useEffect} from 'react';
import { UseEmployeeConText } from '../ConText/ConText';
import './From.css'





export default function Form() {

    const get = UseEmployeeConText();
    const [inputValue, setInputValue] = useState({})
    function ValueChang(e) {
       setInputValue({...inputValue ,[e.target.name]: e.target.value });
       console.log(inputValue);
   }

   const [allMessage, setAllMessage] = useState();
   useEffect(() => {
       setAllMessage(`
       Firs name: ${inputValue.Name}
       Last name: ${inputValue.Last}
       Birth: ${inputValue.Birth}
       Phone number: ${inputValue.Phone}
       Email: ${inputValue.Email}
       Message: ${inputValue.message}`);
   }, [inputValue])

    return (
  

        <div className="divFrom">
                <h5>Dear employee</h5>
                <h6>to send the message please enter details</h6>
            <form  className="From">

            <label htmlFor="">First Name</label>
            <input type="text" name="Name" value={inputValue.Name} required onChange={ValueChang}/>

            <label htmlFor="">Last Name</label>
            <input type="text" name="Last" value={inputValue.Last} required onChange={ValueChang}/>

            <label htmlFor="">Yer of Birth</label>
            <input type="number" name="Birth" value={inputValue.Birth} required onChange={ValueChang}/>

            <label htmlFor="">Phone Number</label>
            <input type="phone" name="Phone" value={inputValue.Phone} required onChange={ValueChang}/>

            <label htmlFor="">Email</label>
            <input type="email" name="Email" value={inputValue.Email} required onChange={ValueChang}/>
            <textarea name="message" value={inputValue.message} placeholder="Write your message..." required onChange={ValueChang}>
               
            </textarea>
            <div className="btnDiv">
            <a id="aId" href={`mailto:shuanesh1817@gmail.com?subject=Big%20News&body=${allMessage}`}>link</a>
            <button type="submit" onClick={()=>{alert(`mailto:shuanesh1817@gmail.com?subject=Big%20News&body=${allMessage}`);}}>submit</button>
           
            </div>

            </form>            
        </div>


    )
}
