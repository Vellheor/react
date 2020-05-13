import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import { Input } from '../common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators/validators';

let LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={s.form}>
         <div>
            <Field placeholder={"LOGIN"} component={Input} name={"login"} validate={[requiredField]}/>
         </div>
         <div>
            <Field placeholder={"PASS"} component={Input} name={"pass"} validate={[requiredField]}/>
         </div>
         <div className={s.check}>
            <Field component={Input} type={"checkbox"} name={"rememberMe"} />Remember me
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