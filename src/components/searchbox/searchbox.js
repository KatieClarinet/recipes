import recipes from "../../libs/recipes";
import {React, useState} from 'react';

const SearchBar = () => {
    const { search } = window.location;
    console.log(search)
    
    const query = new URLSearchParams(search).get('s');
    console.log(query)
    const [searchQuery, setSearchQuery] = useState(query || '');
    // const [recipeShown, setRecipeShown] = useState(false);

    const filterdRecipes = (recipes, query) => {
    if (!query) {
        return recipes;
    }

    return recipes.filter((recipe) => {
        const recipeTitle = recipe.title.toLowerCase();
        return recipeTitle.includes(query);
    });
};
    const filteredRecipes = filterdRecipes (recipes, searchQuery);
    return (
    <>
    <form action="/" method="get">
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
        {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
        ))}
    </ul>
    </>

);
}

export default SearchBar;