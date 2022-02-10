import React, {useState} from 'react';
import {gql, useLazyQuery} from "@apollo/client";
import {useNavigate} from "react-router-dom";

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!){
  characters (filter: {
    name: $name
  }) {
    results {
      location {
        name
      }
    }
  }
}
`

const Search = () => {

    const nav = useNavigate()

    const [name, setName] = useState("")

    const [getLocations, {loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })
    console.log({loading, error, data, called})
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
            <button onClick={() => getLocations()}>Search</button>
            <button onClick={() => nav(-1)}>Go Back</button>
            {loading && <div>spinner...</div>}
            {error && <div>something went wrong...</div>}
            {data && (
                <ul>
                    {data.characters.results.map((character, i) => {
                        return <li key={i}>{character.location.name}</li>
                    })}
                </ul>
            )}
        </div>
    );
};

export default Search;