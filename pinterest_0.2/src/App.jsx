import { useState } from 'react'
import './index.css'

// IMPORT COMPONENTES
import Card from './components/Card'
import Contador from './components/Contador'

// IMPORTS DE IMAGENS
import LindinhaSushi from './assets/imgs/lindinha_sushi.jpg'
import FlorzinhaCaderno from './assets/imgs/florzinha-caderno.jpg'
import DocinhoFofa from './assets/imgs/docinho_supresa.jpg'
import LindinhaMoney from './assets/imgs/lidinha_money.jpg'
import TodasDesenho from './assets/imgs/todas_desenho.jpg'
import DocinhoPiscina from './assets/imgs/docinho_piscina.jpg'
import FlorzinhaRock from './assets/imgs/florzinha_rock.jpg'
import LindinhaDino from './assets/imgs/lindinha_dino.jpg'

/* O App, é responsavel por receber todas as interações do usuario,
   com isso mudando o estado e mandando os novos dados as componentes.
*/

function App() {
  // aqui esta a definição dos dados de cada card
  const itens = [
    {
      id: 1,
      nome: "Lindinha",
      img: LindinhaSushi,
      alt: "A Personagem Lindinha comendo Sushi",
      titulo: "Lindinha e a noite de sushi"
    },
    {
      id: 2,
      nome: "Florzinha",
      img: FlorzinhaCaderno,
      alt: "A personagem Florzinha segurando um caderno",
      titulo: "Florzinha sendo fofa"
    },
    { 
      id: 3,
      nome: "Docinho",
      img: DocinhoFofa,
      alt: "A personagem Docinho com expressão de supresa",
      titulo: "Docinho Fofa com Ocúlos"
    },
    { 
      id: 4, 
      nome: "item 4",
      img: LindinhaMoney,
      alt: "A Lindinha com dinheiro(money) nas mões muito feliz",
      titulo: "Money Money"
      
    },
    { 
      id: 5, 
      nome: "item 5",
      img: TodasDesenho,
      alt: "Todas as personagens juntas",
      titulo: "All Together"
      
    },
    { 
      id: 6,
      nome: "item 6",
      img: DocinhoPiscina,
      alt: "",
      titulo: ""
       
    },
    { 
      id: 7, 
      nome: "item 7",
      img: FlorzinhaRock,
      alt: "",
      titulo: ""
       
    },
    { 
      id: 8, 
      nome: "item 8",
      img: LindinhaDino,
      alt: "",
      titulo: ""
       
    }
  ]

  const [favoritos, setFavoritos] = useState([])

  // função que muda o estado do item
  // removendo se já esta favoritado e adiciona se não esta
  function toggleFavs(id) {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    )
  }

  return (
    <main className='container'>
      <h1 className='titulo'>As Meninas Superpoderosas</h1>
      <h2>Escolha as suas imagens favoritas</h2>

      <Contador total={favoritos.length} />

      <section className='boxCards'>
        {itens.map(item => (
          <Card
            key={item.id}
            item={item}              
            img={item.img}
            alt={item.alt}
            titulo={item.titulo}
            descricao={item.descricao}
            favoritado={favoritos.includes(item.id)}
            onToggleFavs={toggleFavs}
          />
        ))}
      </section>

      <footer></footer>
    </main>
  )
}

export default App
