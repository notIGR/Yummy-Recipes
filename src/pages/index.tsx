import { useSession } from "next-auth/react";

function Home() {

  return (

    <main className="p-2">
      <h1 className="text-center font-bold">Recipes made just for you, by you!</h1>
        <h2>Welcome to a website sponsered by user recipies. Here you will find a collection of recipes created by users. Cant find what your looking for or think you have a better way of cooking a certian dish? Perfect you can also upload you own recipes!</h2>
          <section>
           <form className="text-center">
            <input  type="text" placeholder="Yo Hambre..." name="search" />
            <button type="submit" className="border-2">Look Up Recipes</button>
           </form>
          </section>
    </main>


  );
}

export default Home;
