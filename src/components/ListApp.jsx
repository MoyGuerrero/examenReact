import { useState } from "react"


export const ListApp = ({ person }) => {


    return (
        // <div>ListApp</div>
        <>
            <div className="principal">
                <div>
                    {person.nombre} <br />
                    {person.Telefono}
                </div>
                <div>
                    {/* <button onClick={eliminar(person.nombre)}>Eliminar</button> */}
                    <button >Eliminar</button>
                </div>
            </div>

        </>
    )
}
