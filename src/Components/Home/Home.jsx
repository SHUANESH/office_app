import React from 'react';
import {UseEmployeeConText} from '../ConText/ConText';
import './Home.css';

export default function Home(){
    const getPhoto = UseEmployeeConText();
    return(
        <div>
            <h1>Welcome</h1>
            <h6>A journey of a thousand miles begins in one step</h6>
            
            <div className="homeDiv">
            {
                getPhoto.officeStet.map((info, index)=>{
                    return <div key={index} className="DivContainer">
                               <div className="divCard">
                                   <div className="divImg">
                                      <p>{info.photo}</p>
                                   </div>
                                   <div>
                                   <p>{info.paragraph}</p>
                                   </div>
                               </div>
                            </div>
                })
            }
             <p>An office is generally a building, room or other area where an organization's employees perform administrative work in order to support and realize objects and goals of the organization. The word "office" may also denote a position within an organization with specific duties attached to it</p>
                           
            </div>

        </div>
    )
}