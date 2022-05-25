import Head from 'next/head'
import GlobalStyle from '../src/theme/GlobalStyle'

function MyApp({ Component, pageProps }) {
    return(
        <>  
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,800;1,500;1,700&display=swap" rel="stylesheet" />

                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-TKDQ2NR29V"></script>
                <script 
                    dangerouslySetInnerHTML={{
                        __html:`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-TKDQ2NR29V');
                        `}}
                />
                

            </Head>
            <GlobalStyle />
            <Component { ...pageProps } />
        </>
    )
}

export default MyApp