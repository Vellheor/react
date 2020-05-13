export const requiredField = (value) =>{
   if(value) return undefined;
   else{ return "Поле обязательно!"};
}

export const maxLengthCreator = (maxLegth) => (value = "") =>{
   if(value.length > maxLegth) return `Максимальная длинна ${maxLegth}`;
   return undefined;
}