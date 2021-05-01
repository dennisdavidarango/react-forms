import React from 'react';
import MascotasTable from '../mascotas-table/mascotas-table.comp';
import SearchBar from '../search-bar/search-bar.comp';

import './lista-mascotas.style.css';

const ListaMascotas = (props) => {
    return (
        
        <div className="lista-mascotas-container">
  
            <SearchBar/>
            <MascotasTable mascotasListas={props.mascotasListas}/>
          
        </div>

        

    ); 
}

export default ListaMascotas;