import Head from "next/head";

const ThankYouPage = () => {
  return (
    <>
      <Head>
        <title>Obrigado pelo seu Contato!</title>
        <meta
          name="description"
          content="Sua solicitação de orçamento foi enviada com sucesso. Em breve entraremos em contato."
        />

        {/* --- CÓDIGO DA TAG DE CONVERSÃO DO GOOGLE ADS --- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-17556512941/hLvjCKeG9ZsbEK3BzLNB'});
            `,
          }}
        />
        {/* --- FIM DO CÓDIGO --- */}
      </Head>
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Obrigado!</h1>
        <p>
          Sua solicitação de orçamento foi enviada com sucesso. Em breve
          entraremos em contato.
        </p>
      </div>
    </>
  );
};

export default ThankYouPage;
