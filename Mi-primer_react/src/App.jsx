import "./App.css" 

export function App() { //creo una funcion componente para mostrar en main.jsx
  
 
  return (
    //los estilos en linea se ponen como un objecto <article style={{display : "flex"}}>
    //se utiliza className en lugar de class para declarar una clase ya que class es reservada 
    <article className="tw-followCard" style={{display : "flex", color: "#fff", alignItems:"center", }}>
      <header className="tw-followCard-header">
        <img 
        className="tw-followCard-avatar"
        src="https://unavatar.io/midudev" 
        alt="avatar dudev" />
        <div className="tw-followCard-info">
          <strong>Miguel angel</strong>
          <span className="tw-followCard-infoUserName">@midudev</span>
        </div>
      </header>

      <aside>
        <button  className="tw-followCard-button">
          Seguir
        </button>
      </aside>
    </article>
  )
}