export function TwitterFollow({ children="Default", formatUserName, userName="Default", isFollowing }) {
// los props deben llevar valores por defecto en linea a la funcion userName="Default"

    return (
        //los estilos en linea se ponen como un objecto <article style={{display : "flex"}}>
        //las variables deben enncerrarse entre {} para ser interpretadas como codigo js   
        //se utiliza className en lugar de class para declarar una clase ya que class es reservada 
        //usar gap en lugar de margin
        //por medio de los parametros puedo pasar elementos array html y funciones para que sean ejecutadas en el componente
        //un componente es la funcion creadora de elmentos html
        //nunca modificar o asignar valor a una props (propiedades), es mejor crear una const
        // un props es un parametro de un componente
        // la props children sirve para tomar el valor de hijo puede ser text o html
        <article className="tw-followCard" style={{ display: "flex", color: "#fff", alignItems: "center", }}>
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={"https://unavatar.io/" + userName} //
                    alt="avatar dudev" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    {isFollowing}

                </button>
            </aside>
        </article>
    )
}