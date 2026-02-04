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
import Animer from './assets/imgs/animer.jpg'
import Capitalismo from './assets/imgs/capitalismo.jpg'
import Crazy from './assets/imgs/crazy.jpg'
import Bonito from './assets/imgs/bonito.jpg'
import Mlk from './assets/imgs/desordeiros.jpg'
import Family from './assets/imgs/familiajpg.jpg'
import Ele from './assets/imgs/ele.jpg'
import GizDocinho from './assets/imgs/giz_docinho.jpg'
import Jacks from './assets/imgs/jack.jpg'
import GizLindinha from './assets/imgs/giz_lindinha.jpg'
import GizFlorzinha from './assets/imgs/giz_florzinha.jpg'

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
      titulo: "Lindinha e a noite de sushi",
      descricao:"Lindinha sendo muito fofa e representando varias pessoas, fazendo uma noite de sushi."
    },
    {
      id: 2,
      nome: "Florzinha",
      img: FlorzinhaCaderno,
      alt: "A personagem Florzinha segurando um caderno",
      titulo: "Florzinha sendo fofa",
      descricao:"A MAIOR VIBE DE 2016, bem tumblr. Florzinha sempre divando e arrasando muito."
    },
    { 
      id: 3,
      nome: "Docinho",
      img: DocinhoFofa,
      alt: "A personagem Docinho com expressão de supresa",
      titulo: "Docinho Fofa com Oculos",
      descricao:"Um momento raro em que a Docinho, não esta brava ou querendo socar alguem. O que será que fez ela ficar tão supresa."
    },
    { 
      id: 4, 
      nome: "item 4",
      img: LindinhaMoney,
      alt: "A Lindinha com dinheiro(money) nas mões muito feliz",
      titulo: "Money Money",
      descricao:"O outra representação da maioria das pessoas no MUNDO, a felicidade, até pq, as vezes só o dinheiro pode trazer algumas felicidades."
    },
    { 
      id: 5, 
      nome: "item 5",
      img: TodasDesenho,
      alt: "Todas as personagens juntas",
      titulo: "All Together",
      descricao:"SoMoXX aMiGaXX, sOmOxx IrMãXX, sOmOxx MuLhErExx"
    },
    { 
      id: 6,
      nome: "item 6",
      img: DocinhoPiscina,
      alt: "A Docinho boiando em uma piscina",
      titulo: "Tomando uma vitamina D",
      descricao:"Mais um momento em que a Docinho encontra a paz, e, se disseram que ela estava na pior, e isso é estar na pior?"
    },
    { 
      id: 7, 
      nome: "item 7",
      img: FlorzinhaRock,
      alt: "A Florzinha tocando guitarra rosa",
      titulo: "É O ROCKKKKK",
      descricao:"Crawling in my skin, These wounds, they will not heal, Fear is how I fall, Confusing what is real."
    },
    { 
      id: 8, 
      nome: "item 8",
      img: LindinhaDino,
      alt: "A Lindinha com uma fantasia de dino",
      titulo: "Olha a Onda",
      descricao:"Quando a Lindinha decide trocar o gelo por mordidas imaginárias… mas continua 100% fofa e 0% assustadora."
    },
    { 
      id: 9, 
      nome: "item 9",
      img: Animer,
      alt: "As Meninas Superpoderosas geração Z",
      titulo: "Animerrr",
      descricao:"A melhor versão delas, muito SUPERIOR! Uma coisa bem juvenil tbm."
    },
    { 
      id: 10, 
      nome: "item 10",
      img: Crazy,
      alt: "O personagem Macaco Louco, segurando um coração",
      titulo: "O 'Vilão'",
      descricao:"O personagem mais injustiçado, sendo companheiro do professor Utônio, mas quando as meninas apareceram, além do elemento X cair nele, ele foi sendo totalmente I-G-N-O-R-A-D-O pelo o prof, sendo assim o começo da sua vingança e do fim."
    },
    { 
      id: 11, 
      nome: "item 11",
      img: Bonito,
      alt: "Florzinha, Lindinha e Docinho — voando em formação, com fundo dividido em cores vibrantes.",
      titulo: "GIRLLLL POWERR",
      descricao:"Três personalidades diferentes, um objetivo em comum: resolver tudo na força porque conversar já não é uma opção."
    },
    { 
      id: 12, 
      nome: "item 12",
      img: Capitalismo,
      alt: "A vilã Princesa Mais Grana, lutando com as Meninas Superpoderosas",
      titulo: "O Capitalismo",
      descricao:"Literalmente as Meninas lutando contra o capitalismo e seus tentaculos. E tbm uma versão malvada do Homem de Ferro."
    },
    { 
      id: 13, 
      nome: "item 13",
      img: Family,
      alt: "A Familia das Meninas reunida em um jardim",
      titulo: "Familyy",
      descricao: "Esta família é muito unida, E também muito ouriçada, Brigam por qualquer razão, Mas acabam pedindo perdão."
    },
    { 
      id: 14, 
      nome: "item 15",
      img: Ele,
      alt: "O vilãe, Ele",
      titulo: "Who is this DIVA?",
      descricao:"No matter gay, straight or bi, Lesbian, transgendered life, I'm on the right track, baby, I was born to survive, No matter black, white or beige, Chola or orient made, I'm on the right track, baby, I was born to be brave."
    },
    { 
      id: 16, 
      nome: "item 16",
      img: Jacks,
      alt: "Os ladrões vestidos de Meninas Superpoderosas",
      titulo: "PEGA O JACK PEGA JACK",
      descricao:"Simplesmente os caras se fantasiaram da Meninas Superpoderosas, e, cometeram varios assaltos, e TODO MUNDO acreditou que era eles, mas ninguem achou estranho as meninas estarem com a voz grossa?"
    },
    { 
      id: 17, 
      nome: "item 17",
      img: GizFlorzinha,
      alt: "FanArt da Florzinha feita com giz de cera.",
      titulo: "Fofura",
      descricao:"A mais organizada, a mais estudiosa, a mais mais e a mais controladora."
    },
    { 
      id: 18, 
      nome: "item 18",
      img: GizLindinha,
      alt: "FanArt da Lindinha feita com giz de cera.",
      titulo: "Muito FOFAA",
      descricao:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA. - muita fofura."
    },
    { 
      id: 19, 
      nome: "item 19",
      img: GizDocinho,
      alt: "FanArt da Docinho feita com giz de cera.",
      titulo: "Sad",
      descricao:"O porque da Docinho estar triste, tbm não sei, talvez ela estaja pensando no seu ex? o Ace, da Gangue Gangrena."
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

      <footer>
        <div className='f'></div>
        <div className='l'></div>
        <div className='d'></div>
        <p className='txtFooter'>&copy; Mariana Macena</p>
      </footer>
    </main>
  )
}

export default App
