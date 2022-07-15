import recipes from "../../libs/recipes";

const SearchBar = () => (
    <><form action="/" method="get">
        <label htmlFor="header-search">
            {/* <span className="visually-hidden">Search recipes </span> */}
        </label>
        <br></br>
        <input
            type="text"
            id="header-search"
            placeholder="Search recipes"
            name="s" />
        <button type="submit">Search</button>
    </form>
    <ul>
        {recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
        ))}
    </ul></>
);

export default SearchBar;