import React ,{ useState} from "react";
import { Link  } from "react-router-dom";

const ProductList = () => {
    const [products] = useState([
        { id: 1, name: 'Produit1',description:'Description du produit1',image:'https://static.wikia.nocookie.net/onepiece/images/b/b7/Edward_Newgate_Anime_Infobox.png/revision/latest/scale-to-width/360?cb=20220926165737'},
        { id: 2, name: 'Produit2',description:'Description du produit2',image:'https://static.wikia.nocookie.net/onepiece/images/b/b7/Edward_Newgate_Anime_Infobox.png/revision/latest/scale-to-width/360?cb=20220926165737'},
        { id: 3, name: 'Produit3',description:'Description du produit3',image:'https://static.wikia.nocookie.net/onepiece/images/b/b7/Edward_Newgate_Anime_Infobox.png/revision/latest/scale-to-width/360?cb=20220926165737'}
    ]);

    return(
        <div>
            <h1>Listedes Produits</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            style={{ width: '200px', height: '200px', objectFit: 'cover' }}  />
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default ProductList;