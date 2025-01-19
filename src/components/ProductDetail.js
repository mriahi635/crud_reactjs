import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () =>{
    const{id}=useParams();
    const product = {
        1: {  name: 'Produit1',description:'Description du produit1',image:'https://static.wikia.nocookie.net/onepiece/images/b/b7/Edward_Newgate_Anime_Infobox.png/revision/latest/scale-to-width/360?cb=20220926165737'},
        2:{ name: 'Produit2',description:'Description du produit2',image:'https://static.wikia.nocookie.net/onepiece/images/b/b7/Edward_Newgate_Anime_Infobox.png/revision/latest/scale-to-width/360?cb=20220926165737'},
        3:{ name: 'Produit3',description:'Description du produit3',image:'https://static.wikia.nocookie.net/onepiece/images/b/b7/Edward_Newgate_Anime_Infobox.png/revision/latest/scale-to-width/360?cb=20220926165737'}
    }[id];

    return(
        <div>
            {product ?(
                <>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                </>
            ):(
                <h2>produit </h2>
            )}
        </div>
    )
}
export default ProductDetail;