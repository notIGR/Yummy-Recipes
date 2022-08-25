import { useSession } from "next-auth/react";

function Home() {
  const { data: session, status } = useSession()
  let logInOut = "";

  if (status === "authenticated") {
    logInOut = <section>Signed in as {session.user.email} </section>
  }

  return (
    <>
    <header>
      <nav>
        <ul>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
        { logInOut }
      </nav>
      <h1>Yummy Recipes</h1>
    </header>
    <main>
      This is the home page
    </main>
    </>
  );
}

export default Home;
