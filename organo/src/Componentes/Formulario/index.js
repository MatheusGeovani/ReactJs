import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {

    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    label="Nome"
                    // valor={nome}
                    placeholder="Digite seu nome"
                />
                <CampoTexto
                    label="Cargo"
                    // valor={nome}
                    placeholder="Digite seu nome"
                />
                <CampoTexto
                    label="Imagem"
                    // valor={nome}
                    placeholder="Digite seu nome"
                />
                
            </form>
        </section>
        
    )
}

export default Formulario