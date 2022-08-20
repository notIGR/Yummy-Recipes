import { useSession } from "next-auth/react";

function Home() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }

  return (
    <>
    <header>
      <h1>Yummy Recipes</h1>
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </nav>
    </header>
    <main>
      This is the home page
    </main>
    </>
  );
}

export default Home;
