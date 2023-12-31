import { useEffect } from "react"
import Error from "../assets/images/pagenotfound.png"
import { Link } from "react-router-dom"

export function PageNotFound() {
  useEffect(()=>{
    document.title = `Page Not Found/Moviepedia`;
  });
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className="text-bold text-8xl text-red-900 my-10 dark:text-white">404, Opps! </p>
          <div className="max-w-lg">
            <img src={Error}  alt="404 page not found" className="rounded-lg"/>  
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 text-xl bg-gradient-to-r from-blue-600 via-blue-300 to-blue-900 rounded-full font-extralight text-white py-2.5 px-5 mr-2 mb-2">Back to Moviepedia</button>
          </Link>
          
        </div>
      </section>
    </main>
  )
}
