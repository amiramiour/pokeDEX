async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = await res.json();
  return data.results;
}

export default async function Hume() {
  const pokemons = await getPokemons();
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {pokemons.map((pokemon, index) => {
        const id = index + 1;
        return (
          <a
            key={id}
            href={`/pokemon/${id}`}
            className="p-4 bg-gray-200 rounded-lg text-center hover:bg-gray-300"
          >
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
              alt={pokemon.name} 
              className="mx-auto w-20 h-20"
            />
            <p className="font-bold capitalize">{pokemon.name}</p>
          </a>
        );
      })}
    </div>
  );
}
