import React, { useState } from 'react'
import './Pag_oração.css'

function Pag_oração() {
    const [tituloOracao, setTituloOracao] = useState('')
    const [oracao, setOracao] = useState('')


    return (
        <div class='container'>


            <div class='botoes'>
                <button class='bnt-escolher-Oracao' onClick={(event) => setOracao(
                    <h1>{setTituloOracao('Oração do Programador')}</h1> +
                    "O Senhor é meu debug, nada me faltará. Em loops tranquilos me faz deitar," +
                    " e me guia pelas threads seguras da lógica. Ainda que eu ande pelo vale dos sistemas legados, não temerei o código antigo, pois tu estás comigo: " +
                    "tua stack e teu terminal me consolam. Preparas um café diante de mim na presença dos meus erros. Unge minha cabeça com boas práticas, e o meu Git transborda. " +
                    "Certamente a sintaxe limpa e o deploy estável me seguirão todos os commits da minha vida, e habitarei no repositório sagrado para todo o sempre. " +
                    "**Ctrl + S. Amém.**"
                )}>Oração do Programador</button>


                <button class='bnt-escolher-Oracao' onClick={(event) => setOracao(
                    <h1>{setTituloOracao('Oração do Estudante')}</h1> +
                    "Senhor dos Códigos, Concede-me memória RAM e memória humana. Faze com que os bugs da aula não se repliquem na minha cabeça," +
                    "e que o VS Code não trave quando eu mais precisar. Livrai-me das provas de múltipla escolha com alternativas parecidas," +
                    "dos professores que trocam tudo na véspera, e dos colegas que sabem colar melhor do que estudar." +
                    "Dai-me coragem para levantar a mão, e sabedoria para não deletar a pasta errada. **Amém, compila.**"
                )}>Oração do Estudante</button>

                <button class='bnt-escolher-Oracao' onClick={(event) => setOracao(
                    <h1>{setTituloOracao('Oração do Frontend')}</h1> +
                    "Ave CSS, cheia de bugs, O framework é convosco, Bendita sois vós entre as telas, " +
                    "E bendito é o fruto do vosso DOM: o pixel perfeito. Santa Documentação, mãe da UI," +
                    "Rogai por nós, devs visuais, Agora e na hora do push final. Hover."
                )}>Oração do Frontend</button>

                <button class='bnt-escolher-Oracao' onClick={(event) => setOracao(
                    <h1>{setTituloOracao('Oração do Backend')}</h1> +
                    "Nosso código que está no servidor, Santificado seja o teu endpoint, Venha a nós o teu JSON, Seja feita tua lógica," +
                    "Assim na API como no banco. O token nosso de cada dia nos dai hoje, Perdoai nossas queries mal otimizadas," +
                    "Assim como nós perdoamos quem nos envia POST sem body. E não nos deixes cair em loops infinitos, Mas livrai-nos do downtime. Amém, amém, status 200."
                )}>Oração do Backend</button>

                <button class='bnt-escolher-Oracao' onClick={(event) => setOracao(
                    <h1>{setTituloOracao('Oração do Fullstack')}</h1> +
                    "Senhor Git, dai-me forças para subir a branch certa, Coragem para lidar com o merge," +
                    "E sabedoria para entender o código que eu mesmo escrevi ontem. Concedei-me domínio sobre o front, o back, e o café." +
                    "Protegei minha stack das atualizações quebradoras, E dai-me fé nos testes automatizados. Pois teu é o commit, O build e a glória do log," +
                    " Agora e para sempre, `npm run dev`."
                )}>Oração do Fullstack</button>


            </div>

            <div class='oracoes'>
                <div>
                    <h1>{tituloOracao}</h1>
                </div>

                <div id='mostrar-oracao'>
                <p >{oracao}</p>
                </div>
                
            </div>

        </div>
    )
}

export default Pag_oração