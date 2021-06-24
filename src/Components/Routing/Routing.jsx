import React ,{useState } from 'react';
import {BrowserRouter as Router,  Switch, Route , Link} from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Table from '../Table/Table';
import Form from '../Form/Form';
import Employee from '../Employee/Employee';
import {EmployeeConTextProvider} from '../ConText/ConText';
import EmployeeTest from '../EmployeeTest/EmployeeTest'
export default function Routing() {
    const officeImages = [
       {photo:<img src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/> , paragraph: <p>"One of the first steps in creating a website is adding text. All of Website.com’s templates are pre-populated with sample content, including text"</p> },
       {photo:<img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/> , paragraph: <p>"One of the first steps in</p> },
    ]
    const EmployeeInformation = [
        {Name:"James" , Last:"Smith" , Birth:1988 , Phone:"054879652" , Email:"James3824@gmail.com" , id:0},
        {Name:"William" , Last:"Martinez" , Birth:1978 , Phone:"05845326" , Email:"William3824@gmail.com" , id:1},
        {Name:"Patricia" , Last:"Miller" , Birth:1999 , Phone:"052364587" , Email:"Patricia3824@gmail.com" , id:2},
        {Name:"David" , Last:"Garcia" , Birth:1995 , Phone:"054123654" , Email:"ribovo3824@gmail.com" , id:3},
        {Name:"Thomas" , Last:"Jones" , Birth:1986 , Phone:"0535465897" , Email:"ribovo3824@gmail.com" , id:4},
        {Name:"Linda" , Last:"Williams" , Birth:1998 , Phone:"0508975642" , Email:"ribovo3824@gmail.com" , id:5},
        {Name:"Barbara" , Last:"Gonzales" , Birth:2000 , Phone:"0524569123" , Email:"ribovo3824@gmail.com", id:6},
        {Name:"Steven" , Last:"Thomas" , Birth:2001 , Phone:"0504576321" , Email:"ribovo3824@gmail.com", id:7},
        {Name:"Kevin" , Last:"Jackson" , Birth:1974 , Phone:"0548789632" , Email:"ribovo3824@gmail.com", id:8},
        {Name:"Edward" , Last:"Perez" , Birth:1991 , Phone:"0524569872" , Email:"ribovo3824@gmail.com", id:9},
    ]

    const [EmployeeInfo, setEmployeeInfoStet] = useState(EmployeeInformation)
    const [officeStet, setOfficeStet] = useState(officeImages)
    return (
        <EmployeeConTextProvider value = {{officeStet, setOfficeStet , EmployeeInfo, setEmployeeInfoStet}}>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route  path="/Form">
                    <Form/>
                </Route>
                <Route  path="/Table">
                    <Table/>
                </Route>
                <Route  path="/EmployeeTest/:id">
                    <EmployeeTest/>
                </Route>
            </Switch>
        </EmployeeConTextProvider>
    )
}
