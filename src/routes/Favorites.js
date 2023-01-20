import React, { useContext} from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { FavoritesContext } from "../FavoritesProvider";

import { PokemonCard } from "../components";

function Favorites(){
   

    const {favorites} =useContext(FavoritesContext)

   

      return (
       <Container>
        <Row className='mb-4'>
            {favorites.map((pokemon)=>(
                <Col sm='8' md='6' className='mx-auto' key={pokemon.name}>
                    <PokemonCard name={pokemon}/>
                </Col>
            ))}
            
        </Row>
        </Container>

      )
}






export {Favorites}
