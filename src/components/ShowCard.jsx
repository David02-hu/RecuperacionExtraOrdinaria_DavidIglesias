function ShowCard({ show }) {
const {
name,
genres,
premiered,
ended,
image,
summary
} = show;

const cleanSummary = summary
? summary.replace(/<[^>]*>/g, "")
: "Sin descripción disponible.";

return (
<article className="show-card">
<div className="show-image">
<img
src={
image?.medium ||
"https://placehold.co/300x420?text=Sin+imagen"
}
alt={name}
loading="lazy"
/>
</div>

<div className="show-content">
<h2>{name}</h2>

<div className="show-genres">
{genres?.length > 0 ? (
genres.map((genre) => (
<span
key={genre}
className="genre-tag"
>
{genre}
</span>
))
) : (
<span className="genre-tag">
Sin género
</span>
)}
</div>

<div className="show-dates">
<p>
<strong>Inicio:</strong>{" "}
{premiered || "No disponible"}
</p>

<p>
<strong>Finalización:</strong>{" "}
{ended || "En emisión / Sin fecha"}
</p>
</div>

<div className="show-summary">
<h3>Resumen</h3>
<p>{cleanSummary}</p>
</div>
</div>
</article>
);
}

export default ShowCard;
