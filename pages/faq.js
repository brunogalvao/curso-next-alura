// import Link from 'next/link';

import { useEffect, useState } from 'react'
import Link from '../src/components/Link'
import Head from 'next/head'

/*

    SSG -> Static Site Generation
    SSR -> Server Side Rendering
    ISG -> Incremental Static Generation (mistura dos dois primeiros).

    getStaticProps ==> Somente em Build time
        -> Forma mais rápida para o usuário
    getServerSideProps ==> Roda sempre que houver uma requisição da API
        -> Páginas onde a atualização com a API for de suma importancia

    metodo sem load da página
    usado para página que tem pouca alteração (páginas estaticas)

    em Modo DEV sempre roda a cada acesso!

    "SSG é a entrega rápida de conteúdos estáticos, então ele é a melhor estratégia
    para a página inicial. Com o SSR, você poderá construir um
    painel de controle personalizado e atualizado para cada requisição."
*/
export async function getStaticProps() {

    // console.log('Funciona a cada acesso que você recebe')

    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'

    const faq = await fetch(FAQ_API_URL)
        .then(resp => {
            return resp.json();
        })
        .then((resp) => {
            return resp
    })

    return{
        props: {
            testando: "aqui será um teste do props",
            faq,
        }
    }

}

export default function FaqPage({ faq, cliR }) {
    
    console.log(cliR)

    // function selecionar() {
    //     alert(this.nome);
    // }

    return(
        <div>
            <Head>
                <title>FAQ - Alura Case Campanha</title>
            </Head>
            <h1>Alura Case - Faq Page</h1>

            <Link href="/">
                Home
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}> 
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>

        </div>
    )
}