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

        {/* --- CÓDIGO UNIFICADO GOOGLE ADS E ANALYTICS --- */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17556512941"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              // Configuração para o Google Ads
              gtag('config', 'AW-17556512941');
              
              // Configuração para o Google Analytics
              gtag('config', 'G-3H9BSCS7WX');

              // Evento de conversão (envio de formulário)
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
