import React from 'react';

import './mascotas-category-row.style.css';

const MascotasCategoryRow = (props) => {
    return (
        
        <div className="mascotas-category-row-container">
             {props.descripcionName} 
        </div>

    ); 
        
}



export default MascotasCategoryRow;