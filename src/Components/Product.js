import React from "react";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";
import Head from "./Head";

const Product = () => {

    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {id} = useParams();
    
    React.useEffect(() => {
        async function fetchProduct(url){
            try {
                setLoading(true);

                const response = await fetch(url);
                const json = await response.json();
                setProduct(json);
            } catch(e){
                setError('An error has ocorred')
            } finally {
                setLoading(false);
            }
        }
        fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }, [id]);

    if(loading) return <div>Loading...</div>
    if(error) return <p>{error}</p>
    if(product === null) return null;
    
    return (
        <section className={styles.product + " animationComingFromTheLeft"}>
            <Head title={`appReact | ${product.nome}`} description={`appReact | ${product.description}`} />
            {product.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo} />)}
            <div>
                <h1>{product.nome}</h1>
                <span className={styles.price}>€ {product.preco}</span>
                <p className={styles.description}>{product.descricao}</p>
            </div>
        </section>
    )
};

export default Product;