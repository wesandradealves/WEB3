import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface MediaProp {
    id: number;
    title: string;
    body?: string;          // Texto resumido para a listagem
    noticeText?: string;    // Texto completo para a página individual da notícia
    thumbnail?: string;
    date?: string;
    author?: string;
    category?: string;
    readTime?: string;
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
            thumbnail: '/img/thumb.png',
            date: '2022-04-20',
            author: 'BM&C News',
            category: 'Mercados',
            readTime: '5 min de leitura',
            noticeText: `
            <p> Com estreia marcada para o segundo semestre deste ano nas operadoras de TV a cabo, a BM&C News, que surgiu há pouco mais de um ano nas plataformas de streaming – com quase 300 mil inscritos – já ultrapassou todos os canais do mesmo segmento e se tornou o maior canal de notícias do mercado financeiro do Brasil, em número de visualizações no Youtube.
<br><br>
O canal teve grande destaque na cobertura dos conflitos entre Rússia e Ucrânia, trazendo as informações em tempo real e os impactos na economia e nos investimentos, através das opiniões de grandes especialistas. A BM&C superou a audiência da Jovem Pan na maior parte do tempo e ficou em muitos momentos em primeiro lugar de um canal ao vivo no país.
<br><br>
No segmento de finanças, canal deixou para trás seus principais concorrentes como: InfoMoney (29 milhões de visualizações) Exame (33 milhões) e InvestNews, de Dony De Nuccio e Samy Dana, que registravam, na segunda-feira (7) 35 milhões de visualizações.
<br><br>
Reflexos da guerra nos mercados
<br><br>
O diretor de Jornalismo do Grupo, Rodrigo Mariz, ressalta que os resultados são reflexo de um grande trabalho de toda a equipe e que as perspectivas para os próximos meses são muito positivas. “Em vários momentos a BM&C News teve mais audiência que a CNN e a Band, mesmo não sendo do mesmo segmento, isso demonstra que estamos no caminho certo”, afirma Mariz.
<br><br>
A BM&C News vem ganhando muita relevância também fora do Youtube. O crescimento ultrapassou as barreiras do streaming e alavancou também o portal de notícias da BM&C News,Telegram e redes sociais.
<br><br>
Neste sentido, o conteúdo digital atrelado ao portal e as demais redes também foram destaque nesta cobertura. Para Marianne Paim, Head de Conteúdo Digital, os momentos de apreensão nos mercados exige rapidez e atenção para informar corretamente o leitor e os usários das demais plataformas.
<br><br>
“Em um momento de incerteza, a cobertura jornalística deve ser precisa e atenta aos fatos. Além disso, o timing certo e análises bem realizadas completam o ciclo de uma audiência qualificada, que é nosso caso. Estamos em todos os lugares”, avaliou.
<br><br>
A COO e âncora do canal, Paula Moraes, destacou que o resultado mostra uma grande virada da BM&C News, que nasceu há pouco mais de um ano e hoje se consolida como um importante canal de notícias. A jornalista ainda lembra que o veículo é um dos únicos do mercado financeiro que não é plugado em bancos ou corretoras, o que não gera nenhum conflito de interesse, diferentes de concorrentes como InfoMoney, Exame e InvestNews .
<br><br>
“O público merece um canal com credibilidade, opinião dos melhores profissionais especialistas, debates e dinâmica de informações com independência que gere valor para quem investe”, reforça Paula.
<br><br>
O Head da TV e também apresentador Felipe Nascimento contou que esse sucesso mostra que a BM&C News está pronta pra estrear nos canais fechados.“O que fazemos, pode ter certeza que é o modelo mais diferenciado de se fazer um televisão. Levamos as informações com credibilidade, mas também de uma forma muito natural e com opinião de grandes especialistas. Além de interagirmos muito com nosso público nas redes sociais, atendendo inclusive a sugestão de pautas e entrevistados”, afirma.
<br><br>
Paralelamente aos números do streaming, ainda há outros números expressivos. Recentemente, a BM&C News entrou para o Profit Pro, Nelogica, com o seu sinal divulgado na maior plataforma de investidores do Brasil. Atualmente cerca de 1 milhão de investidores operam diariamente atraves da plataforma. Agora, todos os usuários ativos por lá também têm acesso às notícias em tempo real e ao canal ao vivo.
<br><br>
E as novidades não param por aí, em breve novas frentes serão anunciadas.
</p`
        },
        {
            id: 1,
            title: 'Na vanguarda do setor, BDM, a "moeda de zigurats", será beneficiada com nova "lei das criptomoedas"',
            body: 'Com diversos estabelecimentos e serviços utilizando BDM Digital como forma de pagamento, o giro da economia local gera prosperidade financeira para a população.',
            thumbnail: '/img/thumb-2.png',
            date: '2022-12-22',
            author: 'Correio do Estado',
            category: 'Ativos Digitais',
            readTime: '5 min de leitura',
            noticeText: `
    <h1>BDM Digital: a Moeda que Está Mudando a Vida de Muitas Pessoas</h1>
    <br><br>
    <p>Vanguarda no setor de ativos virtuais, a BDM Digital - conhecida por ser a "moeda de Zigurats", como parte do Ecossistema Dakila - deve ser amplamente beneficiada com a nova Lei das Criptomoedas, que foi sancionada ontem (21) e publicada na manhã desta quinta-feira (22) em Diário Oficial. 
<br><br>
"Esta regulamentação delimitou conceitos, processos e também disciplinou assuntos que já vinham sendo trabalhados nas diretrizes de compliance, prevenção e combate à lavagem de dinheiro na gestão dos ativos BDM DIGITAL", comenta Enrico Batoni, advogado com pós-graduando em Direito dos Criptoativos e Blockchain pela ESMAFE (Escola da Magistratura Federal do Paraná).
<br><br>
Sócio proprietário do escritório Miranda & Batoni Advogados Associados - que atua especialmente na organização societária, gestão de patrimônio, regulamentação de fintechs e análise de risco fiscal de investimentos -, ele explica ser um processo já demorado, que ainda levará um tempo para entrar em prática. 
<br><br>
Para ele, como a lei entra em vigor dentro de seis meses, as corretoras, empresas de gestão de ativos digitais, além dos bancos que atuam no segmento de criptomoedas e criptoativos, terão um prazo razoável para adaptação das políticas de gestão interna. 
<br><br>
"Essa nova lei é fruto de um longo debate entre legisladores e atores do mercado financeiro, de modo a acrescentar maior segurança jurídica, confiança e credibilidade para quem investe em criptoativos no Brasil", comenta ele, dizendo que a BDM será "amplamente beneficiada". 
<br><br>
Segundo a Associação Brasileira de Internet (Abranet), a aprovação do projeto de lei representa um avanço para toda a população, não somente para quem trabalha diretamente com finanças. 
<br><br>
“A Lei das Criptomoedas é um marco para o setor financeiro brasileiro e insere o Brasil em um grupo seleto de países que contam legislação específica para regulamentar... com a entrada em vigor da lei, esperamos que o regulador atue ativamente na elaboração das diretrizes mais detalhadas sobre o tema”, frisa o presidente da Abranet, Eduardo Neger.
<br><br>
Desafios para criptoativos
<br><br>
Como explica Batoni, O setor das criptomoedas sofria com a falta de uma lei específica que regularizasse a prestação de serviços na gestão dos ativos virtuais, trazendo "sanção penal decorrente da má conduta de agentes financeiros". 
<br><br>
Garantida essa legislação, segundo o advogado, o maior desafio agora fica por conta do combate à desinformação e adaptação ao processo de digitalização do conceito de propriedade, seja com tokens, NFTs e demais ativos digitais. 
<br><br>
"O BDM DIGITAL já vem sendo reconhecido por seus parceiros, usuários e até concorrentes como referência no setor dos criptoativos e vetor de transformação econômica nos estados (como MS, RJ, SP, PB, e RS), por adotar estratégias 'test & learn' na condução dos seus ativos, trazendo produtos e serviços que atraiam sempre novos usuários para experimentar nossa plataforma de modo a garantir crescimento sustentável, lastreado e inteligente", diz. 
<br><br>
Conforme o advogado, nesse período de três anos o BDM Digital aprendeu e refinou suas estratégias de expansão. 
<br><br>
Enrico fala que, entre as estratégias está a observação das "dores" e impactos, que são sociais, políticos e econômicos do país na vida dos usuários, principalmente após a pandemia. 
<br><br>
"Neste sentido, as criptomoedas se tornaram alternativas válidas para driblar taxas de juros e tarifas bancárias elevadas, deterioração do sistema econômico global e aumento da inflação, sendo o BDM DIGITAL um modelo de gestão de ativos digitais que conseguiu trazer segurança, controle e proteção de dados ao seu público consumidor", salienta o profissional. 
<br><br>
Caminhos futuros
<br><br>
Ainda, a diversificação dos investimentos dos usuários está entre os trabalhos do BDM, que não deixa de contribuir com a educação financeira. 
<br><br>
Através de seus canais de comunicação, o BDM trata sobre reservas de emergência, planejamento e gestão de crise, entre outros. O grupo ainda cita seu "compliance regulatório", como meio de apresentar soluções para armazenagem, movimentação/ transferência e utilização de ativos digitais de maneira fácil e segura.
<br><br>
"Deste modo, o BDM DIGITAL já se encontra devidamente adaptado às diretrizes e normativas deste marco histórico e regulatório que significa a nova Lei das Criptomoedas, trazendo maior segurança e oportunidades para quem quiser investir nesse ramo tão atrativo", afirma. 
<br><br>
Por fim, é importante frisar que essa nova lei cria uma nova tipologia penal, incluindo ao Código Penal (artigo 171-A) a pena de reclusão de 04 a 08 anos e multa. 
<br><br>
Essas penas serão devidamente aplicadas para aqueles agentes e prestadoras de serviços que praticarem fraudes e esquemas com a utilização de ativos virtuais, valores mobiliários e ativos financeiros.

 </p>
    `
        },
        {
            id: 2,
            title: 'BDM Digital: conheça a moeda que está mudando a vida de muitas pessoas',
            body: 'Com diversos estabelecimentos e serviços utilizando BDM Digital como forma de pagamento, o giro da economia local gera prosperidade financeira para a população.',
            thumbnail: '/img/thumb-3.png',
            date: '2021-09-06',
            author: 'G1 - Globo',
            category: 'Mercados',
            readTime: '10 min de leitura',
            noticeText: `
    <h1>BDM Digital: a Moeda que Está Mudando a Vida de Muitas Pessoas</h1>
    <br>
    <p>Um dinheiro digital que nasceu em Mato Grosso do Sul, e hoje segue em grande expansão em diversos estados do Brasil e até em outros países, está mudando a vida de muitas pessoas que estão utilizando-a. Diferente de outras moedas, o BDM Digital (Bônus Dourado Mercantil) serve tanto para investir quanto para aplicar no dia a dia, colocando o real poder de compra na mão de quem a utiliza.
<br><br>
Com diversos estabelecimentos comerciais e prestadores de serviço já utilizando o BDM Digital como forma de pagamento, o giro da economia local resulta em prosperidade financeira à população. Leninha Conceição da Silva mora em Rochedo e logo após participar da ação sustentável realizada pela equipe do BDM Digital, onde foi possível trocar lixo reciclável ou artesanato pela moeda, foi direto ao supermercado fazer as compras da semana. Ao voltar para sua casa, passou em frente ao ponto de coleta transcendendo a felicidade e enaltecendo que realizou as compras com BDM Digital.
<br><br>
Até quem ainda não é muito habitual com a tecnologia está aderindo ao BDM Digital, pois já viu com amigos, vizinhos ou conhecidos o verdadeiro poder da moeda, onde além de ver os investimentos crescerem é possível fazer compras e pagar contas.
<br><br>
“Eu já tinha o aplicativo, mas essa é a primeira vez que faço uso. Não sou tão habitual com a tecnologia, mas decidi inovar, afinal tudo hoje é digital e o BDM é pura inovação, além disso é valorização também. Meu dinheiro em BDM está rendendo muito mais do que se fosse deixar em outra conta, valeu super a pena investir”, afirma Vilmar Florêncio dos Santos.
<br><br>
A moradora de Corguinho, Sueli Silva, não conhecia o BDM Digital, mas ficou sabendo da moeda por meio de um amigo. “Eu não tinha nem o aplicativo instalado, mas procurei saber mais informações e os representantes do BDM me auxiliaram em todo o processo, desde aprender a usar o sistema como também a fazer pagamento e transferência, inclusive estou com 8 BDM na conta. Agora é gastar, ou melhor, poupar, pois do jeito que a moeda está cada dia mais valorizada acho melhor deixar um pouco na conta”, comenta. </p>
<br><br>
<h1>BDM Digital para todos</h1>
<br><br>
<p>Conforme explica André Barbosa, representante do Bônus Dourado Mercantil, o movimento da moeda digital fortalece a economia local, gera rendimento e preserva o meio ambiente, resultando em um desenvolvimento socioeconômico e sustentável de grande eficiência.
<br><br>
“O BDM Digital é para a dona de casa, padeiro, autônomo, pequeno, médio e grande empresário, é para o investidor, enfim para qualquer pessoa porque ele tem o real poder de compra. Com o BDM você consegue abastecer o seu veículo, pedir um gás de cozinha novo, fazer compras em supermercados, farmácia, adquirir calçado, roupas, até mesmo comprar ou alugar imóveis”, comenta.
<br><br>
“Onde o BDM está presente e acontece a sua movimentação todos ficam mais próspero financeiramente, porque começa a ter um giro financeiro mais rentável entre as pessoas. Além disso, sua rentabilidade é muito maior do que a poupança de outros bancos”, conclui o representante.</p>
<br><br>
<h1>Como surgiu o BDM Digital</h1>
<br><br>
<p>Durante anos a Associação Dakila Pesquisas elaborou e implementou diversos mecanismos para desenvolver uma economia independente e auto sustentável que pudesse ser expandida para toda a população e com isso beneficiar o maior número de pessoas no mundo inteiro.
<br><br>
Sempre contando com a colaboração e a união de seus milhares de associados no Brasil e em diversos outros países, criaram o (BDM) Bônus Dourado Mercantil, uma moeda social na versão física (papel) já utilizada em algumas cidades.
<br><br>
Os BDM físicos logo nas primeiras semanas de circulação, fizeram com que a economia local prosperasse e abriram novas possibilidades de negociações entre a população, comerciantes e empresários.
<br><br>
Visando o objetivo original do grupo de expandir esta implementação até mesmo em outros países, a equipe técnica de Dakila Pesquisas desenvolveu a Blockchain BDM, uma plataforma 100% nacional e com a moeda digital criptografada BDM Digital.
<br><br>
Graças à esta constante busca pela evolução, principalmente em relação ao mercado mundial, todos podem usufruir desta tecnologia que permite o envio e recebimento de valores ilimitados e sem fronteiras.
<br><br>
Instale o aplicativo gratuitamente que está disponível no site bdmercantil.com.br e comece a usar as moedas digitais em qualquer estabelecimento comercial da sua cidade que receba em BDM Digital.
<br><br>
Não sabe aonde usar? Acesse o site https://bdmap.cash, baixe o aplicativo em seu aparelho celular (disponível para Android e Iphone), selecione a categoria e obtenha acesso aos parceiros do BDM Digital. Em breve, também será possível ver todas as cidades do Brasil e do mundo onde a criptomoeda está presente.</p>`,
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