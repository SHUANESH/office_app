import React from 'react';
import {useParams} from 'react-router-dom';
import { UseEmployeeConText } from '../ConText/ConText';
import './EmployeeTest.css';




const EmployeeTest = () => {
     const employees = UseEmployeeConText().EmployeeInfo;
     const {id} = useParams();
     const parsId = parseInt(id);

     const userInfo = employees.find((e)=> e.id === parsId);
    //  const location = useLocation();
    //  console.log(location);
    //  const info = location.state;
    //  const [Employee, setEmployee] = useState(null);
    //  useEffect(() => {
    //     fetch(`Table/${handle}`).then(setEmployee)

    //  }, [handle])
    // const local = localStorage.getItem("Employee");
    // const [info, setInfo] = useState(local);
    const data = new Date();

    return (
        <div class="cardEmployeeTest">
            <h6>First name: {userInfo.Name}</h6>
            <h6>Last name: {userInfo.Last}</h6>
            <h6>Phone number: {userInfo.Phone}</h6>
            <h6>Mail Adress: {userInfo.Email}</h6>

        </div>
    )
}

export default EmployeeTest
