import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface MediaProp {
    id: number;
    title: string;
    body?: string;
    thumbnail?: string;
}

interface Props {
    media: MediaProp[];
    setMediaData: React.Dispatch<React.SetStateAction<MediaProp[]>>;
}

const MediaContext = createContext<Props | undefined>(undefined);

export const MediaProvider = ({ children }: { children: ReactNode }) => {
    const [media, setMediaData] = useState<MediaProp[]>([
        {
            id: 0,
            title: 'Após ultrapassar InfoMoney, Exame e InvestNews, BM&C News é o maior canal brasileiro sobre notícias do mercado',
            body: 'No segmento de finanças, canal deixou para trás seus principais concorrentes como: InfoMoney (29 milhões de visualizações) Exame (33 milhões) e InvestNews, de Dony De Nuccio e Samy Dana, que registravam, na segunda-feira (7) 35 milhões de visualizações.',
            thumbnail: '/img/thumb.png'
        },
        {
            id: 1,
            title: 'Na vanguarda do setor, BDM, a "moeda de zigurats", será beneficiada com nova "lei das criptomoedas"',
            body: 'Com diversos estabelecimentos e serviços utilizando BDM Digital como forma de pagamento, o giro da economia local gera prosperidade financeira para a população.',
            thumbnail: '/img/thumb-2.png'
        },
        {
            id: 2,
            title: 'BDM Digital: conheça a moeda que está mudando a vida de muitas pessoas',
            body: 'Com diversos estabelecimentos e serviços utilizando BDM Digital como forma de pagamento, o giro da economia local gera prosperidade financeira para a população.',
            thumbnail: '/img/thumb-3.png'
        }
    ]);

    return (
        <MediaContext.Provider value={{ media, setMediaData }}>
            {children}
        </MediaContext.Provider>
    );
};

export const useMedia = () => {
    const context = useContext(MediaContext);
    if (!context) {
        throw new Error('useMedia must be used within a provider');
    }
    return context;
};