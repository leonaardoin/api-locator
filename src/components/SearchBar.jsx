import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    //component renders search bar form for user query input and a submit button to search
    return (
        //function: handles submission of form
        <form onSubmit={handleSubmit}> 
            <input 
                value={query} //string: current value of input field
                className="form-control"
                placeholder="search keywords"
                name="query"
                disabled={isLoading} //boolean: indicates whether search is loading or not
                onChange={(event) => setQuery(event.target.value)} //function: sets value of input field
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className="btn"
                value="Get Food!"
            />
        </form>
    )
};

export default SearchBar;
