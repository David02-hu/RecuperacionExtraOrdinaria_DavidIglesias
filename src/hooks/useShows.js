import { useState, useEffect } from "react";

function useShows() {
const [shows, setShows] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const controller = new AbortController();

const fetchShows = async () => {
try {
setLoading(true);
setError(null);

const response = await fetch(
"https://api.tvmaze.com/shows",
{ signal: controller.signal }
);

if (!response.ok) {
throw new Error(
"No se pudieron obtener las series."
);
}

const data = await response.json();

setShows(data);
} catch (err) {
if (err.name !== "AbortError") {
setError(err.message);
}
} finally {
if (!controller.signal.aborted) {
setLoading(false);
}
}
};

fetchShows();

return () => controller.abort();
}, []);

return { shows, loading, error };
}

export default useShows;