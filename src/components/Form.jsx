import React from 'react'

const Form =()=>(
<div className="form">
    <div className="form-head">
        <h2>Agregar</h2>
    </div>
    <div className="form-item">
        <form>
            <input name="name" type="text" placeholder="Nombre"/>
            <input name="description" type="text" placeholder="description"/>
                
                <select name="type">
                    <option disable selected>Seleccionar</option>
                    <option value="public">Publico</option>
                    <option value="private">Publico</option>
                </select>

                <select name="gender">
                    <option disable selected>Genero</option>
                    <option value="male">hombre</option>
                    <option value="female">mujer</option>
                </select>

                <select name="adopt">
                    <option disable selected>Seleccionar</option>
                    <option value="true">Si</option>
                    <option value="false">No</option>
                </select>

            <input type="file" name="photo" />
            <button>Enviar</button>

        </form>
    </div>
</div>
);

export default Form

// cat 