import React from 'react';
import { UseEmployeeConText } from '../ConText/ConText';
import Input from '../Input/Input';
import {BrowserRouter as Router,  Switch, Route , Link} from 'react-router-dom';
import './Table.css'


export default function Table() {
    const get = UseEmployeeConText();
    const tHeder = ["FALL NAME", "AGE"];
    const data = new Date();

    return (
        <div className="flexAll">
            <div className="TableDivContinuer">
            <div id="tableDiv" className="table table-dark table-hover">
            <table className="TableFlex">
                <tr>
                    {
                      tHeder.map((Headlines ,index)=>{
                          return  <th className="thTable" key={index}>{Headlines}</th>
                      })  
                    }
                </tr>
                {
                    get.EmployeeInfo.map((info, index)=>{
                        return <tr key={index} className="trTable">
                                   <td><Link className="linkTable" to={{pathname:`/EmployeeTest/${info.id}`}}>{info.Name} {info.Last}</Link></td>
                                   <td>{data.getFullYear()- info.Birth}</td>
                                   <span id="spanIdInTable">{info.Phone} {info.Email}</span>
                                   {/* <td className="phone">{info.Phone}</td>
                                   <td className="email">{info.Email}</td> */}
                               </tr>

                    })
                }
               
            </table>
            </div>
            <Input/>
            </div>
           
        </div>
    )
}
