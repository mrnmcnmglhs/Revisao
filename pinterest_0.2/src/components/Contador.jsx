import '../styles/contador.css'

export default function Contador({total}) {
    /* Aqui o componente Contador irá receber apenas a quantidade
       de itens que foram favoritados e mudando tbm caso algum item seja
       desfavoritado.
    */
    return (
        <>
            <section className='containerContador'>
                <h1 className='tituloComponente'>Favoritos</h1>
                <div className='resultado'>{total}</div>
            </section>
        </>
    )
}