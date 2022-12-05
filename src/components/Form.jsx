import React from 'react';
import './Form.css'

const Form = ()=>{
    return (
        <form>
            <input type="text" placeholder='Full Name'/>
            <input type="text" placeholder='Your Email'/>
            <input type="text" placeholder='Age'/>
            <input type="password" placeholder='Enter your password' />
            <input type="text"  placeholder='Confirm your password'/>
            <input type="submit" />
        </form>
    );
}
export default Form;
