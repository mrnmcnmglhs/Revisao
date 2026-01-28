import Card from './components/Card'
import Contador from './components/Contador'

// IMPORTS DE IMAGENS
import LindinhaSushi from './assets/imgs/lindinha_sushi.jpg'
import FlorzinhaCaderno from './assets/imgs/florzinha-caderno.jpg'

function App() {

  return (
    <main className='container'>
      <h1 className='titulo'>As Meninas Superpoderosas</h1>
      <h2>Escolha as suas imagens favoritas</h2>

      <Contador />

      <section>
        <Card 
          img={LindinhaSushi}
          alt="A Personagem Lindinha comendo Sushi"
          titulo='Lindinha e a noite de sushi'
          descricao='nfnfkininfnfinkefkefkeknkenkkkkkkkkkkkkkkkkkkk vkkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkk'
        /> 

        <Card 
          img={FlorzinhaCaderno}
          alt="A personagem Florzinha segurando um caderno com um rostinho desenhado"
          titulo="Flozinha Sendo Fofa"
          
        />
      </section>
    </main>
  )
}

export default App
