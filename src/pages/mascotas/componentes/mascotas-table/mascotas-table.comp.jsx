import React, { useState } from 'react';
import MascotasCategoryRow from '../mascotas-category-row/mascotas-category-row.comp';
import MascotasRow from '../mascotas-row/mascotas-row.comp';


import './mascotas-table.style.css';


const MascotasTable = (props) => {

    const [descripcion, setDescripcion] = useState('cat1');
    const [name, setName] = useState('');
    const [telefono, setTelefono] = useState(0);
    const [unidad, setUnidad] = useState(0);
    const [precio, setPrecio] = useState(0);

    const agregarCliente = (event)=>{
      event.preventDefault();
      console.log('name ' + name);
      console.log('unidad ' + unidad);
      console.log('precio ' + precio);
    }
    
    return (
        <div className="mascotas-table-container">

          <div>
          {props.mascotasListas.map((descripcion)=>{
            return(
            <React.Fragment key={descripcion.id}>
             <MascotasCategoryRow descripcionName={descripcion.name}/>
             {descripcion.mascotas.map((mascotas )=>{
               return (

                <MascotasRow 
                key={mascotas.id}
                mascotas={mascotas}
                />  
               );
             })}
            </React.Fragment>
            
            );

          })}
          </div>

          <div className="mascotas-form">
           <form>
             <table>
               <tbody>
               <tr>
                  <td>
                     DESCRIPCION
                  </td>
               </tr>
               
               <tr>
                 <td>
                  <select 
                    value={descripcion}
                    onChange={(event)=>{
                      setDescripcion(event.target.value);
                    }}
                  >
                    <option value="cat1">Perros</option>
                    <option value="cat2">Hamsters</option>
                    <option value="cat3">Gatos</option>
                  </select>
                </td>
               </tr>
               <tr>
                    <td>Name</td>    
               </tr>

               <tr>
                     <td><input 
                     type="text"
                     value={name}
                     onChange={(event)=>{
                       setName(event.target.value);
                     }}
                     
                     /></td>
                </tr>
               <tr>
                     <td>Telefono</td>
                </tr>
                <tr>
                <td><input 
                     type="text"
                     value={telefono}
                     onChange={(event)=>{
                       setTelefono(event.target.value);
                     }}
                     
                     /></td>
                </tr>
                <tr>
                      <td>Unidad</td>
                </tr>
                <tr>
                <td><input 
                     type="text"
                     value={unidad}
                     onChange={(event)=>{
                       setUnidad(event.target.value);
                     }}
                     
                     /></td>
                </tr>
                <tr>
                       <td>Precio</td>
                </tr>
                <tr>
                <td><input 
                     type="text"
                     value={precio}
                     onChange={(event)=>{
                       setPrecio(event.target.value);
                     }}
                     
                     /></td>
                </tr>
                
               
                <tr>
                  <button
                       onClick={agregarCliente}
                  >
                    Agregar cliente
                   
                    </button>

                </tr>
                </tbody>
               </table>
           </form>

        </div>
          
        </div>

    ); 
}

export default MascotasTable;