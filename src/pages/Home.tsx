import React from "react";
export const Home =() =>{
    return(
        <div>
        <div className="nav-home">
            <h1>Mavaro</h1>
            <a>Home</a>
            <a>Books</a>
            <a>Authors</a>
            <a>Genders</a>
            <a>Contact</a>
        </div>
        <div className="slider-home">
            <button>
                See more
            </button>
        </div>

        <div>
            <a href="https://exemplo.com">
                <img src="caminho/para/sua/imagem.jpg" alt="Descrição da Imagem"/>
            </a>

            <a href="https://exemplo.com">
                <img src="caminho/para/sua/imagem.jpg" alt="Descrição da Imagem"/>
            </a>

        </div>
        </div>
        
    );
}