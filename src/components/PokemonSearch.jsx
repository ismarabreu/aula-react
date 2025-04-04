import { useState } from "react";

function PokemonSearch() {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!name) return;

    setLoading(true);
    setError("");
    setPokemon(null);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      if (!response.ok) throw new Error("Pokémon não encontrado.");

      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🔍 Buscar Pokémon</h2>

      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Digite o nome (ex: pikachu)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Buscar
        </button>
      </div>

      {loading && <p>⏳ Carregando...</p>}
      {error && <p style={styles.error}>❌ {error}</p>}

      {pokemon && (
        <div style={styles.card}>
          <h3>{pokemon.name.toUpperCase()}</h3>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width="100"
          />
          <p>
            <strong>Altura:</strong> {pokemon.height}
          </p>
          <p>
            <strong>Peso:</strong> {pokemon.weight}
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "2rem auto",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  inputGroup: {
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "60%",
  },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1rem",
    backgroundColor: "#f9f9f9",
  },
};

export default PokemonSearch;
