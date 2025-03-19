async function getPokemon(id:string){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.json();
}

export default async function PokemonPage({params}: {params:{id:string}}){
    const pokemon = await getPokemon(params.id);
    return (
        <div className="text-center">
          <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto" />
          <p>Poids : {pokemon.weight}</p>
          <p>Taille : {pokemon.height}</p>
        </div>
      );
}