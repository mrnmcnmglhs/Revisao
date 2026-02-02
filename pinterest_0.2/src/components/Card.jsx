import '../styles/card.css'

export default function Card({img, alt, titulo, descricao, item, favoritado, onToggleFavs}){
    /* No componente Card, temos apenas um botão, que é para sinalizar
       a mudança de estado, favorito e desfavorito.
     */
    return(
        <article className='card'>
            <figure>
                <img src={img} alt={alt} />
            </figure>

            <h1 className='tituloCard'>{titulo}</h1>
            <p className='descricao'>{descricao}</p>

            <div onClick={() => onToggleFavs(item.id)} className='alinharBtns'>
                <button className='btnFav'>
                    {favoritado ? "Desfavoritar" : "Favoritar"}
                </button>
            </div>
        </article>
    )
}