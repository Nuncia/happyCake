import { useState } from "react"

const Contacto = () => {
 

  return (
    <div style={{width: '700px', marginTop: '60px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
      <h2>¿En qué podemos ayudarte?</h2>
      <div className="mb-3 mt-5">
        <label className="form-label">Correo</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="correo@ejemplo.com"/>
      </div>
      <div className="mb-3 f">
        <label className="form-label">Descripción</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </div>
  )
}

export default Contacto