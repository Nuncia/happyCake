import { PropTypes } from "prop-types"

const Mensaje = ({mensaje}) => {
  return (
    <div className="color">
        <h4>{mensaje}</h4>
    </div>
  )
}

export default Mensaje

Mensaje.propTypes = {
    mensaje: PropTypes.string.isRequired
};

