import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

export default function LandingPage(){
    return  <div>
        <h1> El gym de Juan </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illo odio perspiciatis aut saepe temporibus eligendi molestias, atque ipsa alias voluptatem assumenda nostrum commodi consequuntur velit consequatur autem aperiam! In.</p>
        <img src={process.env.PUBLIC_URL + "/logoJuanGymnasio.png"}/>
        <button> Comenzar </button>
    </div>
}