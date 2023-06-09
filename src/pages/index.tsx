import { IMovieCard } from "@/models/models";
import MovieCard from "../components/MovieCard";
import Head from "next/head";

export default function Home({ movies }: { movies: IMovieCard[] }) {
  return (
    <>
      <Head>
        <title>MovieList</title>
        <meta name="description" content="Список фильмов Наруто" />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-5">
        {movies.map((movie: IMovieCard) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `http://www.omdbapi.com/?s=naruto&apikey=${process.env.APP_KEY}`
  );
  const data = await res.json();
  const movies = data.Search;

  return { props: { movies } };
}
