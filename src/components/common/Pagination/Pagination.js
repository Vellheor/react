import React, { useState } from 'react';
import styles from './Pagination.module.css';
import cn from "classnames";

const Pagination = ({tatolItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10} ) =>{
   
   let pagesCount = Math.ceil( tatolItemsCount / pageSize );
   let pages = [];
   for(let i = 1; i <= pagesCount; i++){
      pages.push(i);
   }

   let portionCount = Math.ceil( pagesCount / portionSize)
   let [portionNumber, setPortionNumber] = useState(1);
   let leftPortionPageNumber = ( portionNumber - 1 ) * portionSize + 1;
   let rightPortionPageNumber = portionNumber * portionSize;
   return (
      <div>
         { portionNumber > 1 && <button onClick={ () => setPortionNumber( portionNumber - 1 )}>Назад</button> }
         {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
               return <span
                            onClick={(e) => {
                                onPageChanged(p);
                            }}>{p}</span>
           })}
         { portionCount > portionNumber && <button onClick={ () => setPortionNumber( portionNumber + 1 )}>Вперед</button> }
      </div>
   )
}

export default Pagination;

