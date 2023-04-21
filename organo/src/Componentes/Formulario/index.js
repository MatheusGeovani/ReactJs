import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const salvar = (evento) => {
        evento.preventDefault()
    }

    return(
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    label="Nome"
                    valor={nome}
                    placeholder="Digite seu nome"
                    aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto
                    label="Cargo"
                    valor={cargo}
                    placeholder="Digite seu nome"
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    valor={imagem}
                    placeholder="Digite seu nome"
                    aoAlterado={valor => setImagem(valor)}
                />
                
            </form>
        </section>
        
    )
}

export default Formulario