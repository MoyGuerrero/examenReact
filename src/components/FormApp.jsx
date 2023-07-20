import { useState } from "react"

export const FormApp = ({ onAddPerson }) => {

    const [Nombre, setNombre] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [Tipo, setTipo] = useState('')

    const handleName = ({ target }) => {
        setNombre(target.value);
    }

    const handlePhone = ({ target }) => {
        setTelefono(target.value);
    }

    const handleTipo = ({ target }) => {
        setTipo(target.value);
    }

    const onSave = (e) => {
        e.preventDefault();
        const params = {
            "nombre": Nombre,
            "Telefono": Telefono,
            "Tipo": Tipo
        }
        // console.log(params);
        onAddPerson(params)
        setNombre('');
        setTelefono('')
        setTipo("principal");
    }
    return (
        <form onSubmit={onSave}>
            <input type="text" value={Nombre} onChange={handleName} placeholder="Nombre" />
            <input type="text" value={Telefono} onChange={handlePhone} placeholder="Numero" />
            <select value={Tipo} onChange={handleTipo} >
                <option value="principal">Tipo de contacto</option>
                <option value="Persona">Persona</option>
                <option value="Empresa">Empresa</option>
            </select>
            <button type="submit">Agregar</button>
        </form>
    )
}
