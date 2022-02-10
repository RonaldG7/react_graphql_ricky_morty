import React from 'react';
import "./CharacterList.css"
import {useCharacters} from "../hooks/useCharacters";
import {Link, useNavigate} from "react-router-dom";

const CharactersList = () => {

    const nav = useNavigate()

    const {error, loading, data} = useCharacters()

    if (loading) return <div>spinner...</div>
    if (error) return <div>something went wrong...</div>

    return (
        <div className="container">
            <button className="searchBtn" onClick={() => nav("/search")}>Go To Character Location Search</button>
            <div className="characterList">
                {data.characters.results.map((character, i) => {
                    return <Link key={i} to={`/${character.id}`}>
                        <img src={character.image} alt=""/>
                        <h2>{character.name}</h2>
                    </Link>
                })}
            </div>
        </div>
    );
};

export default CharactersList;