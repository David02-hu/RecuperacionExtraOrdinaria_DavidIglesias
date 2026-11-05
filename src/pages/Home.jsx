import { Link } from "react-router-dom";

function Home() {
return (
<main className="home">
<div className="home-container">
<div className="home-badge">
Evaluación Extraordinaria
</div>

<h1>Recuperación React JS</h1>

<p className="home-description">
Aplicación desarrollada con React JS y Vite,
utilizando la API de TVMaze para consultar
información de series de televisión.
</p>

<div className="student-card">
<h2>Información del estudiante</h2>

<div className="student-info">
<p>
<strong>Nombre:</strong> David Iglesias
</p>

<p>
<strong>Carnet:</strong> 20240430
</p>

<p>
<strong>Sección:</strong> A3
</p>

<p>
<strong>Grupo:</strong> 1
</p>

<p>
<strong>Módulo:</strong> 8
</p>
</div>
</div>

<Link to="/shows" className="home-button">
Explorar series
</Link>

<p className="home-footer">
Desarrollado con React JS | TVMaze API
</p>
</div>
</main>
);
}

export default Home;