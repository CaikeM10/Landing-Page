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
                    content="Descubra o mundo da tecnologia e desenvolvimento web com o Rei dos Sites. Aprenda a criar sites do zero e transforme suas ideias em realidade."
                />
                <meta
                    name="og:description"
                    content="Descubra o mundo da tecnologia e desenvolvimento web com o Rei dos Sites. Aprenda a criar sites do zero e transforme suas ideias em realidade."
                />
                <meta
                    property="og:image"
                    content="https://firebasestorage.googleapis.com/v0/b/nextgain-37481.appspot.com/o/Screenshot%202024-04-01%20at%2022.58.47.png?alt=media&token=c87429da-d568-4acc-9b39-e4cb579bb9ac"
                />
                <title>Caike Marinho</title>
            </Head>
            <SmoothScroll />
            <GoogleAnalytics gaId="G-32JCH9GGY4" />
            <Component {...pageProps} />
        </>
    );
}
