import Link from 'next/link';

export default function Home() {
  return (
      <div>
         <Link href="/pokemons">pokemons</Link>{" "}
          <Link href="/pokemons/bulbasaur">bulbasaur</Link>{" "}
          <Link href="/auto-static-optimization">auto-static-optimization</Link>{" "}
          <Link href="/without-redux">without-redux</Link>
      </div>
  )
}
