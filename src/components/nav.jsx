import { useSession } from "next-auth/react";
import Link from "next/link"

const Navbar = () => {
    const { data: session, status } = useSession()
    let logInOut = "";
  
    if (status === "authenticated") {
      logInOut = <section>Signed in as {session.user.email} </section>
    }

    return (
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div>
          <span>
          <h1 className="text-3xl font-bold font-mono">  <Link href="/"> Yummy Recipes </Link> </h1> 
          </span>
        </div>

        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto
        md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-4 my-6 md:my-0">
            <Link href="/breakfast" className="text-xl hover:text-yellow-300 duration-500">Breakfast</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="/lunch" className="text-xl hover:text-orange-500 duration-500">Lunch</Link>
          </li>          
          <li className="mx-4 my-6 md:my-0"> 
            <Link href="/dinner" className="text-xl hover:text-rose-800 duration-500">Dinner</Link>
          </li>
        </ul>
        <button className="mx-4 my-6 md:my-0">
          <Link href="/recipeForm" className="text-xl hover:text-rose-800 duration-500">Add Recipe! </Link>
          </button>
        { logInOut }

      </nav>
    )
    }

export default Navbar