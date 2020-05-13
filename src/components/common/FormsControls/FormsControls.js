import React from 'react';
import style from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) =>{

   const showError = meta.error && meta.touched;
   return(
      <div className={style.formControl + " " + (showError ? style.error : "")}>
         <div>
            <textarea {...props} {...input}/>
         </div>
   {showError && <span>{meta.error}</span>}
      </div>
   )
}

export const Input = ({input, meta, ...props}) =>{

   const showError = meta.error && meta.touched;
   return(
      <div className={style.formControl + " " + (showError ? style.error : "")}>
         <div>
            <input {...props} {...input}/>
         </div>
   {showError && <span>{meta.error}</span>}
      </div>
   )
}