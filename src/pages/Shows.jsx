import { Link } from "react-router-dom";
import useShows from "../hooks/useShows";
import ShowCard from "../components/ShowCard";
import Loading from "../components/Loading";

function Shows() {
const { shows, loading, error } = useShows();

return (
<main className="shows-page">
<div className="shows-container">

<header className="shows-header">
<div>
<h1>Catálogo de Series</h1>
<p>
Explora las series disponibles
mediante la API de TVMaze.
</p>
</div>

<Link to="/" className="back-button">
Volver al inicio
</Link>
</header>

{loading && <Loading />}

{error && (
<div className="error-message">
<h2>Ocurrió un error</h2>
<p>{error}</p>
</div>
)}

{!loading && !error && (
<>
<div className="shows-count">
<p>
Series encontradas:
<strong> {shows.length}</strong>
</p>
</div>

<div className="shows-grid">
{shows.map((show) => (
<ShowCard
key={show.id}
show={show}
/>
))}
</div>

{shows.length === 0 && (
<p className="empty-message">
No se encontraron series.
</p>
)}
</>
)}

</div>
</main>
);
}

export default Shows;