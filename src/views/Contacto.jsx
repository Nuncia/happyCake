import { useState } from "react"
import Mensaje from "../components/Mensaje"

const Contacto = () => {
  const [correo, setCorreo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [mensaje,setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(correo.trim() && descripcion.trim()){
      setMensaje('Nos contactaremos con ud.')
    } else{
      setMensaje('Faltan campos por completar.')
    }
  }

  return (
    <div style={{width: '700px', marginTop: '60px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
      <h2>Cuéntanos, ¿en qué podemos ayudarte?</h2>
      <div className="mb-3 mt-5">
        <label className="form-label">Correo</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} className={`form-control`} id="exampleFormControlInput1" placeholder="correo@ejemplo.com"/>
      </div>
      <div className="mb-3 f">
        <label className="form-label">Descripción</label>
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className={'form-control'} id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button onClick={handleSubmit} className="boton">Enviar</button>
      <br />
      <br />
      <Mensaje mensaje={mensaje}/>
    </div>
  )
}

export default Contacto