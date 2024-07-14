import React, { useState } from 'react';
import '../CRUD/crud.css';
import { MdDelete, MdEdit  } from "react-icons/md";


const Crud = () => {
  const [equipos, setEquipos] = useState([]);
  const [equipoActual, setEquipoActual] = useState({});
  const [modo, setModo] = useState('agregar'); // 'agregar', 'editar'

  const handleAgregarEquipo = (equipo) => {
    setEquipos([...equipos, equipo]);
    setEquipoActual({});
    setModo('agregar');
  };

  const handleEditarEquipo = (equipo) => {
    setEquipos(equipos.map((e) => (e.id === equipo.id ? equipo : e)));
    setEquipoActual({});
    setModo('agregar');
  };

  const handleEliminarEquipo = (idEquipo) => {
    setEquipos(equipos.filter((e) => e.id !== idEquipo));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEquipoActual({ ...equipoActual, [name]: value });
  };

  return (
    <div className='crud-container'>
      <h2 className='tittle1'>Inventario de Equipos Informáticos</h2>
      <form className='formulario' onSubmit={(event) => {
        event.preventDefault();
        if (modo === 'agregar') {
          handleAgregarEquipo(equipoActual);
        } else {
          handleEditarEquipo(equipoActual);
        }
      }}>
        <label className='pollo'>Código:</label>
        <input type="text" name="codigo" value={equipoActual.codigo} onChange={handleChange} required />
        <br/><label className='pollo'>Tipo de Equipo:</label>
        <select name="tipo" value={equipoActual.tipo} onChange={handleChange} required>
          <option value="computadora">Computadora</option>
          <option value="monitor">Monitor</option>
          <option value="teclado">Teclado</option>
          <option value="mouse">Mouse</option>
        </select>
        <br/><label className='pollo'>Estado:</label>
        <select name="estado" value={equipoActual.estado} onChange={handleChange} required>
          <option value="prestado">Prestado</option>
          <option value="reparacion">En Reparación</option>
          <option value="disponible">Disponible</option>
        </select>
        <br/><label className='pollo'>Edificio:</label>
        <select name="edificio" value={equipoActual.edificio} onChange={handleChange} required>
          <option value="edificio1">Facultad de Ciencias Administrativas, Contables y Comercio</option>
          <option value="edificio2">Facultad de Ciencias de la Salud</option>
          <option value="edificio3">Facultad de Ciencias Sociales, Derecho y Bienestar</option>
          <option value="edificio4">Facultad de Ciencias de la Vida y Tecnología</option>
          <option value="edificio5">Facultad de Educación, Turismo y Humanidades</option>
          <option value="edificio6">Facultad de Ingeniería, Industria y Arquitectura</option>
        </select>
        <button type="submit" className='button1'>{modo === 'agregar' ? 'Agregar Equipo' : 'Editar Equipo'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Tipo de Equipo</th>
            <th>Estado</th>
            <th>Edificio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map((equipo) => (
            <tr key={equipo.id}>
              <td>{equipo.codigo}</td>
              <td>{equipo.tipo}</td>
              <td>{equipo.estado}</td>
              <td>{equipo.edificio}</td>
              <td>
                <button className='edit' onClick={() => { setEquipoActual(equipo); setModo('editar'); }}><MdEdit className='icon1' /></button>
                <button className='edit2' onClick={() => handleEliminarEquipo(equipo.id)}><MdDelete className='icon1'/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
