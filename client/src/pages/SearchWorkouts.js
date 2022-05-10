import React from "react";


import'./Styles/Pages.css';



function SearchWorkouts() {
  // const [searchTerm, setSearchTerm] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([]);
  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  // React.useEffect(() => {
  //   const results = excercises.filter((exercise) =>
  //     person.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);
  return (

    //drop-down box-listed in the seeds
    //group or groups (muscles)
    //exercises by name
    //to card
    
    <div className="wrapper-search">
      <div className="jumbotron-home">
        <form>
          {/* <input
            type="text"
            placeholder="Search"
            // value={searchTerm}
            // onChange={handleChange} */}
          {/* >  */}
          sdfsafdsdf
          {/* </input> */}
          <ul>
            {/* {searchResults.map((item) => ( */}
          {/* <li>{item}</li>  */}
          </ul>  
        </form>   
      </div>
    </div>
    
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default SearchWorkouts;
