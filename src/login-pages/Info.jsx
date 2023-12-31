/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../login-assets/Logo.svg'
import { Link } from "react-router-dom";
import "../login-styles/App.css"
import { useState } from 'react';
import axios from '../main';


function Info() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: ''
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('/api/register', formData);
          console.log('Registration success:', response.data);
        } catch (error) {
          console.error('Registration error:', error);
        }
    }; 

  return (
    <div className='info'>
        <div className='info-container'>
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className='hidden'>Happyhub</h1>
            <h1 className='info-header'>Sign Up</h1>
            <form>
                <input placeholder='First Name' type='text' name='FirstName' className='fname'></input>
                <input placeholder='Last Name' type='text' name='LastName' className='lname'></input>
                <select name="months" className='month'>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <select name="cars" className='day'>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>                
                <select name="years" className='year'>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                </select>
                
                <div className='radio-male'>
                    <label htmlFor='male'>Male</label>
                    <input type="radio" name='male' id='male'></input>
                </div>
                <div className='radio-female'>
                    <label htmlFor='female'>Female</label>
                    <input type="radio" name='female' id='female'></input>
                </div>
            </form>
            <button className='info-btn'><Link to="/Contact" className='info-link'>Continue</Link></button>
        </div>
    </div>
    
  )
}

export default Info