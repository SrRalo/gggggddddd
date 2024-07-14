import React, { useState } from 'react'
import './SignForm.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";


const SignForm = () => {
//animacion de traslado entre login y register
  const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };




  return (


    <div className={`wrapper${action}`}>
      <div className='form-box login'>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6f2a7a497c173bef046bcf02d4e4f2e1eaa87849764b895623dd135fbd267?"
        class="img"/>
        <form id=''>
          <h1>Ingresar</h1>
          <div className='input-box'>
          <MdEmail className='icon' />
          <input type="email" placeholder='Correo' required/>
          </div>
          <div className='input-box'>
          <RiLockPasswordLine className='icon'/>
          <input type="password" placeholder='Contraseña' required/>
          </div>
          <button type='submit'>Ingresar</button>
          <div className='register-link'>
            <p>Aún no tienes una Cuenta?<a href="#" onClick={registerLink}> Registrarse</a></p>
          </div>
        </form>
      </div>
      <div className='form-box register'>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6f2a7a497c173bef046bcf02d4e4f2e1eaa87849764b895623dd135fbd267?"
        class="img"/>
        <form action=""  id='register-form'>
          <h1>Registro</h1>
          <div className='input-box'>
          <FaUser className='icon'/>
          <input type="text" id='nombres' placeholder='Nombres' required/>
          </div>
          <div className='input-box'>
          <MdEmail className='icon' />
          <input type="email" id='email' placeholder='Correo' required/>
          </div>
          <div className='input-box'>
          <RiLockPasswordLine className='icon'/>
          <input type="password" id='contraseña' placeholder='Contraseña' required/>
          </div>
          <button type='submit'>Registrarse</button>
          <div className='register-link'>
            <p>Ya tienes una Cuenta?<a href="#" onClick={loginLink}> Ingresar</a></p>
          </div>
        </form>
      </div>    
    </div>

  )
}

export default SignForm;

























































