import SmoothScroll from '@/components/Portuguese/Lenis';
import '@/styles/globals.scss';
import { GoogleAnalytics } from '@next/third-parties/google';
import 'animate.css/animate.compat.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';

interface UserData {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    gender: string;
    dateOfBirth: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

export default function App({ Component, pageProps }: AppProps) {
    const [userData, setUserData] = useState<UserData | null>(null);

    async function fetchUserDetails(): Promise<UserData> {
        return {
            email: 'user@example.com',
            firstName: 'John',
            lastName: 'Doe',
            phone: '1234567890',
            gender: 'male',
            dateOfBirth: '1990-01-01',
            city: 'CityName',
            state: 'StateName',
            zipCode: '12345',
            country: 'CountryName',
        };
    }

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await fetchUserDetails();
            setUserData(data);
        };

        fetchUserData();
    }, []);


    return (
        <>
          <Head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <meta
        name="description"
        content="Desenvolvedor Web e Front-End focado em React e Next.js. Crio sites e landing pages profissionais para impulsionar o seu negócio. Fale comigo!"
    />

    {/* -- TAGS OPEN GRAPH (PARA PRÉVIA EM REDES SOCIAIS) -- */}
    <meta property="og:title" content="Criação de Sites e Landing Pages | Desenvolvedor Caike Marinho" />
    <meta property="og:description" content="Desenvolvedor Web e Front-End focado em React e Next.js. Crio sites e landing pages profissionais para impulsionar o seu negócio. Fale comigo!" />
    <meta property="og:image" content="https://caikemarinho.com/redes.jpg" /> {/* <--- SUA URL AQUI */}
    <meta property="og:url" content="https://caikemarinho.com" />
    <meta property="og:site_name" content="Caike Marinho" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="website" />
    <title>Criação de Sites e Landing Pages | Desenvolvedor Caike Marinho</title>
</Head>
            <SmoothScroll />
            <GoogleAnalytics gaId="G-32JCH9GGY4" />
            <Component {...pageProps} />
        </>
    );
}
