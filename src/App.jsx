import { useState } from "react";
import { FormApp } from "./components/FormApp"
import { ListApp } from "./components/ListApp"

export const App = () => {

    const [Person, setPerson] = useState([{ "nombre": "Hola", "Telefono": "123", "Tipo": "Empresa" },
    {
        "nombre": "Mundo",
        "Telefono": "132456",
        "Tipo": "Persona"
    }]);
    const onAddPerson = (event) => {


        setPerson([event, ...Person])
    }
    return (
        <>
            <div className="principal">
                <div>
                    <FormApp onAddPerson={e => onAddPerson(e)} />
                </div>
                <div>
                    {Person.map(p => (
                        <ListApp key={p.nombre} person={p} />
                    ))
                    }
                </div>
            </div>
        </>
    )
}
