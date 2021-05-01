import React from 'react';

import './mascotas-row.style.css';

const MascotasRow = (props) => {
    return (
        
        <div className="mascotas-row-container">
         {
           props.mascotas.unidad <2
           ? 
           <span className="mascotas-without-stock">{props.mascotas.name}</span>
           ://
           
           <span>{' '}{Text}{props.mascotas.name}</span>
         }
        
         {' '}{props.mascotas.telefono}
      
      
         {' '}{props.mascotas.unidad}
        
      
         {' '}{props.mascotas.precio}
      
        </div>
    ); 
}

export default MascotasRow;