const Recipe = ({ title, type, ingredients, instructions }) => {
        return(
            <section className="flex flex-col bg-blue-500 my-2 text-whit
            ">
                <h2> {title} </h2>
                <h2> {type}</h2>
                <h2> {ingredients}</h2>
                <h2> {instructions}</h2>
            </section>
        )
}

 export default Recipe