import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Form.css';

const Form = ()=>{
    const schema = yup.object().shape({
        fullName: yup.string().required("full name is required"),
        email: yup.string().email().required("email is required"),
        age: yup.number().positive().integer().min(18).required("age is required"),
        password: yup.string().min(8).max(16).required("password is required"),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required("enter correct password")
    })
    const {register, handleSubmit, formState:{ errors },} = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data)=>{
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Full Name' {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder='Your Email' {...register('email')}/>
            <input type="text" placeholder='Age' {...register('age')}/>
            <input type="password" placeholder='Enter your password' {...register('password')}/>
            <input type="text"  placeholder='Confirm your password' {...register('confirmPassword')}/>
            <input type="submit" />
        </form>
    );
}
export default Form;
