import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import { Input } from '../common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css'

let LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={s.form}>
         <div>
            <Field placeholder={"EMAIL"} component={Input} name={"email"} validate={[requiredField]}/>
         </div>
         <div>
            <Field placeholder={"PASS"} component={Input} name={"pass"} validate={[requiredField]} type="password"/>
         </div>
         <div className={s.check}>
            <Field component={Input} type={"checkbox"} name={"rememberMe"} />Remember me
         </div>
         {props.error &&
            <div className={style.formError}>
               <span>{props.error}</span>
            </div>
         }
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
      props.login(FormData.email, FormData.pass, FormData.rememberMe)
   }
   if(props.isAuth) { return <Redirect to="/profile" />}
   return <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
      </div>
};

let mapStateToProps = (state) => (
   {
      isAuth: state.auth.isAuth
   }
)



export default connect(mapStateToProps, {login})(Login);