import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta property="og:title" content="Undangan Pernikahan Sherly ❤️ Dany"></meta>
                    <meta
                        name="description"
                        content="Selamat datang di undangan pernikahan kami! Bergabunglah dengan kami dalam momen istimewa ini saat kami merayakan cinta dan kebahagiaan. Tanggal, waktu, dan tempat telah kami persiapkan dengan penuh kasih untuk Anda."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:description"
                        content="Selamat datang di undangan pernikahan kami! Bergabunglah dengan kami dalam momen istimewa ini saat kami merayakan cinta dan kebahagiaan. Tanggal, waktu, dan tempat telah kami persiapkan dengan penuh kasih untuk Anda."
                    />
                    <meta
                        property="twitter:description"
                        content="Selamat datang di undangan pernikahan kami! Bergabunglah dengan kami dalam momen istimewa ini saat kami merayakan cinta dan kebahagiaan. Tanggal, waktu, dan tempat telah kami persiapkan dengan penuh kasih untuk Anda."></meta>
                    <meta property="og:locale" content="id_ID" />
                    <meta property="og:site_name" content="Undangan Pernikahan" />
                    <meta property="og:url" content="https://serlydany.vercel.app" />
                    <meta property="og:image" content="https://serlydany.vercel.app/covericon.png" />
                    <meta property="twitter:image" content="https://serlydany.vercel.app/covericon.png" />
                    <meta property="twitter:card" content="summary_large_image"></meta>
                    <meta property="twitter:title" content="Undangan Pernikahan Sherly ❤️ Dany"></meta>
                    <meta property="og:image:width" content="500" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image:height" content="500" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
