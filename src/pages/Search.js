import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";


export function Search({apiPath}) {
  const [SearchParams]= useSearchParams();
  const queryTerm = SearchParams.get('q');
  const { data: movies } = useFetch(apiPath, queryTerm);
  const pageTitle= useTitle(`search result for ${queryTerm}/moviepedia`);
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0?`No Result Found "${queryTerm}"`: `Results Found For "${queryTerm}"`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        )) }          
        </div>
      </section>
  </main>
  )
}
