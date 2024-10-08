import React from 'react';
import {social} from "./data";
function Socialbar(){
    return(
        <ul className='social-icons'>
            {social.map((icon)=>{
                return (
                    <li key={icon.id}>
                        <a href={icon.url}>{icon.icon}</a>
                    </li>
                );
            })}
        </ul>
    );
}
export default Socialbar;
