import Link from 'next/link';

export default function Home() {
  return (
      <div>
         <Link href="/pokemons">pokemons</Link>{" "}
          <Link href="/pokemons/bulbasaur">bulbasaur</Link>
      </div>
  )
}
