import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';

let LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={s.form}>
         <div>
            <Field placeholder={"LOGIN"} component={"input"} name={"login"} />
         </div>
         <div>
            <Field placeholder={"PASS"} component={"input"} name={"pass"}/>
         </div>
         <div className={s.check}>
            <Field component={"input"} type={"checkbox"} name={"rememberMe"} />Remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>

   )
};

const LoginReduxForm = reduxForm({
   form: 'login'
 })(LoginForm);

let Login = (props) => {

   let onSubmit = (FormData) => {
      console.log(FormData);
   }

   return <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
      </div>
};

export default Login;