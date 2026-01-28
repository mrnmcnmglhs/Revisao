import '../styles/card.css'

export default function Card({img, alt, titulo, descricao}){
    return(
        <article className='card'>
            <figure>
                <img src={img} alt={alt} />
            </figure>

            <h1 className='tituloCard'>{titulo}</h1>
            <p className='descricao'>{descricao}</p>

            <div className='alinharBtns'>
                <button className='btnFav'>Favoritar</button>
                <button className='btnDesfav'>Desfavoritar</button>
            </div>

        </article>
    )
}