import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from 'react';
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({onSearchChange}) => {

    //Hook that is used whenever a component is updated a lot. The setter will be used to update the search variable.
    const [search, setSearch] = useState(null);

    //Load options function that is called whenever the search bar is updated
    const loadOptions = (inputValue) => {
        //Retrieves the options from the cities API. Fetches cities that have the prefix of what is currently in the search bar and also cities with a population over one million
        //The response is them formatted in JSON form where it is then returned into the options array
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
            geoApiOptions
        )
        .then((response) => response.json())
        .then((response) => {
            return{
                //options is an array of object maps with all the values and labels. These options are then returned back to the loadingOptions which is what gives you the autofill dropdown
                options: response.data.map((city) => {
                    return{
                        //only labels get displayed in the dropdown
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`
                    };
                })
            };
        });
    };
    
    //This is called whenever an option is finally selected
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        //Search Bar
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}

            //The value is set to the search query
            value={ search }

            //Whenever a search is selected, this is called
            onChange = {handleOnChange}

            //Everytime the user changes the state of the searhc bar, it calls the loadOptions function and gives the parameter of the search bar
            loadOptions= { loadOptions }
        />
            
    )
}

export default Search;