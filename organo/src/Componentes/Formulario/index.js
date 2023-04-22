import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {

    const times = [
        "Programação",
        "Qualidade",
        "Suporte",
        "Comercial",
        "Vendedor"
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("sendo salvo => ", nome, cargo, imagem, time)
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
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
                <ListaSuspensa
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao
                    nome="Criar Card"
                />
            </form>
        </section>
        
    )
}

export default Formulario