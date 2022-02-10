import React from 'react';
import "./Character.css"
import {useCharacter} from "../hooks/useCharacter";
import {useNavigate, useParams} from "react-router-dom";

const Character = () => {

    const nav = useNavigate()
    const {id} = useParams()

    const {data, loading, error} = useCharacter(id)

    if (error) return <div>something went wrong...</div>
    if (loading) return <div>spinner...</div>

    return (
        <div className="character">
            <img src={data.character.image} width={750} height={750} alt=""/>
            <div className="character-content">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className="character-episode">
                    {data.character.episode.map((episode, i) => {
                      return <div key={i}>
                          {episode.name} - <b>{episode.episode}</b>
                      </div>
                    })}
                    <button onClick={() => nav(-1)}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default Character;