# BDM Digital - Frontend (Next.js)

Este projeto é o frontend da aplicação web do BDM Digital, desenvolvido em ReactJS com Next.js, consumindo uma API REST headless do WordPress/ACF.

- [Backend](https://github.com/Dourado-Cash/bdm-web3-frontend)

## Stack Tecnológica

- **Framework:** Next.js 15.3.3 + React 19.0.0
- **TypeScript:** 5.x
- **Estilização:** Styled Components 6.1.16 + Tailwind CSS 3.4.1
- **Animações:** Framer Motion 11.5.4
- **HTTP Client:** Axios 1.8.4
- **UI Components:** Material-UI 7.0.0
- **Ícones:** React Icons 5.5.0 + Heroicons 2.2.0
- **Gerenciamento de Estado:** Context API
- **Multi-idioma:** Sistema próprio com cache + Google Translate

## Sumário
- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Rodando com Docker](#rodando-com-docker)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Serviços Disponíveis](#serviços-disponíveis)
- [Context API](#context-api)
- [Hooks Úteis](#hooks-úteis)
- [Renderização Dinâmica de Páginas e Blocks](#renderização-dinâmica-de-páginas-e-blocks)
- [Criando Novos Componentes](#criando-novos-componentes)
- [Padrões de Código](#padrões-de-código)

---

## Visão Geral

- **Framework:** Next.js (React)
- **Estilização:** TailwindCSS, StyledComponents
- **Integração:** Consome API REST do WordPress (headless, ACF)
- **Renderização Dinâmica:** Páginas e blocos são renderizados dinamicamente a partir dos dados vindos do backend.

## Requisitos
- Node.js >= 18.x
- npm, yarn, pnpm ou bun
- Docker (opcional, para rodar em container)

## Instalação e Execução

```bash
# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install

# Execute em modo desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Rodando com Docker

```bash
docker build -t bdm-web3 .
docker compose up
```

> O Dockerfile e o docker-compose.yml já estão configurados para rodar a aplicação em ambiente containerizado.

## Estrutura de Pastas

```
src/
  app/                # Páginas e rotas Next.js
    [...slug]/page.tsx    # Página dinâmica que renderiza blocks vindos da API
    media/[...slug]/      # Rota para notícias (single), também renderiza blocks
  components/         # Componentes reutilizáveis (cards, boxes, timeline, etc)
  context/            # Context API (auth, media, settings, spinner)
  hooks/              # Hooks customizados (ex: useMetadata)
  services/           # Serviços para consumo da API REST
  utils/              # Funções utilitárias
  middleware.ts       # Middleware para redirecionamento
```

## Serviços Disponíveis

Todos os serviços estão em `src/services/` e utilizam Axios para consumir APIs REST.

### 1. Clientes HTTP Base

- **api.ts**: Cliente HTTP para WordPress
  - BaseURL dinâmica (HML/DEV)
  - Timeout: 120 segundos
  - Interceptors automáticos para loading states
  - Header `X-Language` automático
  - Autenticação JWT via Bearer token

- **dashboardApi.ts**: Cliente HTTP para Dashboard externo
  - Configuração similar ao api.ts
  - Locale padrão: 'pt-BR'

### 2. Serviços WordPress

- **ContentService.ts**: Busca posts, páginas e conteúdos customizados
  - Retry automático (3 tentativas)
  - Suporte a tipos customizados
  - Interface `ContentItem` completa

- **mediaService.ts**: Busca dados de mídia por ID
  - Retry automático com delay de 2s
  - Retorna `undefined` em caso de erro
  - Interface `MediaItem`

- **navigationService.ts**: Busca menus de navegação
  - Suporte a submenus (children)
  - Campos ACF nos itens de menu
  - Interface `MenuItem`

- **pageService.ts**: Busca páginas por slug
  - Retorna blocks ACF
  - Interface `Page`

- **postService.ts**: Busca posts flexível
  - Parâmetros: slug, id ou type
  - Versão estendida do pageService

- **settingsService.ts**: Configurações globais
  - Logo, favicon, redes sociais
  - Informações do blog

- **TaxonomyService.ts**: Busca taxonomias
  - Cache local implementado
  - Suporte a categorias e tags customizadas
  - Interface `Taxonomy`

- **languageService.ts**: Idiomas disponíveis
  - Integração com Polylang
  - Retorna array de códigos de idioma

- **userService.ts**: Autenticação e usuários
  - Login JWT (`/jwt-auth/v1/token`)
  - Busca dados de usuário
  - Token armazenado no localStorage

### 3. Serviços Dashboard

- **dashboardService.ts**: Serviço genérico do dashboard
  - Método GET com retry automático
  - Interface `DashboardErrorResponse`

- **dashboardCategoriesService.ts**: Categorias hierárquicas
  - Árvore de categorias com children
  - Suporte multi-idioma (7 idiomas)
  - Interfaces `CategoryTreeNode` e `DashboardCategoriesResponse`

### 4. Sistema de Tradução

- **API Route** (`/api/translate`): Endpoint de tradução
  - Usa biblioteca `translate-google`
  - Query params: `text` e `to`
  - Retorna: `{ translated: string }`

- **Hook useTranslate**: Hook para traduções
  ```ts
  const { translate } = useTranslate(language);
  const translated = await translate('texto');
  ```
  - Cache local por idioma
  - Fallback para texto original

### Exemplo de Consumo
```ts
// Buscar conteúdo
import { ContentService } from '@/services/ContentService';
const posts = await ContentService('posts');

// Buscar página específica
import { PageService } from '@/services/pageService';
const page = await PageService('sobre-nos');

// Traduzir texto
const { translate } = useTranslate('en');
const translated = await translate('Olá mundo');
```

## Context API

Os contextos ficam em `src/context/` e centralizam estados globais:

- **auth.tsx**: Autenticação de usuário
  - Login automático com credenciais do .env
  - Estado `isAuthenticated`
  - Token JWT no localStorage

- **language.tsx**: Sistema multi-idioma
  - Idiomas suportados: `pt` e `en`
  - Persistência via Cookies e localStorage
  - Hook `useLanguage()` para acesso

- **media.tsx**: Cache de mídia global
  - Array de `ContentItem`
  - Evita requisições duplicadas

- **settings.tsx**: Configurações globais
  - Logo, favicon, redes sociais
  - Informações do blog
  - Carregamento único na inicialização

- **spinner.tsx**: Controle de loading global
  - Estado `isLoading`
  - Integrado com interceptors do Axios

## Hooks Úteis

- **useMetadata**: Atualização dinâmica de meta tags
  ```ts
  useMetadata({
    title: 'Título da Página',
    description: 'Descrição SEO',
    keywords: 'palavras, chave',
    ogTitle: 'Título Open Graph',
    ogImage: 'https://site.com/image.jpg',
    favicon: 'https://site.com/favicon.ico'
  });
  ```

- **useTranslate**: Sistema de tradução com cache
  ```ts
  const { translate } = useTranslate('en');
  const translated = await translate('Texto para traduzir');
  ```
  - Cache local por sessão
  - Integração com Google Translate
  - Fallback para texto original

## Renderização Dinâmica de Páginas e Blocks

- A página `src/app/[...slug]/page.tsx` é responsável por buscar e renderizar dinamicamente os blocks definidos no backend WordPress/ACF.
- A rota `src/app/media/[...slug]/page.tsx` faz o mesmo para o content type POST (notícias/single).
- Os blocks são renderizados como componentes React, de acordo com o tipo e dados vindos da API. Note que o id/machine_name do block **deve** ser o mesmo
do componente que você deseja renderizar em `src/components/`.

## Como criar um Block

```
    git clone git@github.com:wesandradealves/WEB3-api.git
```

- Acesse o tema `bdm-digital-website-api-theme`.
- Edite `bdm-digital-website-api-theme\functions.php`

Nesse snippet, registre um novo block onde `name`, deve ser o mesmo nome do componente criado em `\src\components` (Note que para ser um **bloco** vindo da api crie a pasta com o seguinte formato: `\src\components\{{name}}\index.tsx`).

- A lógica para renderizaçao dinamica desses blocos pode ser encontrada em `src\components\DynamicComponent`

```
    function my_acf_blocks_init() {
        if( function_exists('acf_register_block_type') ) {
            $blocks = [
                ... (demais objetos de block)

                (object) [
                    'name'        => 'hero',
                    'title'       => __('Hero'),
                    'description' => __('Hero Component'),
                    'category'    => 'rest-api',
                    'icon'        => '',
                    'keywords'    => ['hero', 'acf', 'rest'],
                    'supports'    => [
                        'align' => true,
                        'jsx'   => true, 
                    ],
                ],

                ... (demais objetos de block)
            ];

            foreach ($blocks as $block) {
                acf_register_block_type(array(
                    'name'              => $block->name,
                    'title'             => $block->title,
                    'description'       => $block->description,
                    'render_template'   => get_template_directory() . '/templates/blocks.php',
                    'category'          => $block->category,
                    'icon'              => $block->icon,
                    'keywords'          => $block->keywords,
                    'supports'          => $block->supports,
                ));
            }
        }
    }
```

- Os campos customizados devem ser registrados em ([http://localhost:8000/wp-admin/edit.php?post_type=acf-field-group])
- Adicionar novo
- Regras - `contexto` mostrar este grupo de campos se `condicao` `valor`.

Escolha o contexto se for aparecer em Bloco, Menu, Pages, Etc.
Para adicionar a um novo componente `(block)`, escolha Bloco.

**De preferencia ao tipo de campo `clone`, e em Campos, escolha fields já criados, para reutilizar campos já criados e nao criar novas nomenclaturas sem necessidade.**

Crie somente campos novos se houver necessidade.

## Criando Novos Componentes

1. Crie uma nova pasta em `src/components/` com o nome do componente.
2. Siga o padrão dos componentes existentes: arquivo principal (index.tsx), arquivo de estilos (styles.tsx), tipagem (typo.ts) se necessário.
3. Use props tipadas e, se necessário, integre com os serviços ou contextos.
4. Exporte o componente por padrão.

### Exemplo de Estrutura
```
components/
  meucomponente/
    index.tsx
    styles.tsx
    typo.ts
```

## Padrões de Código

### Regras Obrigatórias

1. **ZERO comentários no código** - Código deve ser autoexplicativo
2. **TypeScript rigoroso** - Evite `any`, use tipagem completa
3. **Componentes funcionais apenas** - Sem classes
4. **Hooks para lógica** - useState, useEffect, custom hooks
5. **Context API para estado global** - Nunca prop drilling
6. **Importação absoluta** - Use `@/services/`, `@/components/`
7. **ESLint e Prettier** - Código deve passar sem erros

### Padrões de Estilização

- **Tailwind CSS** para utilidades e layout
- **Styled Components** para componentes complexos
- **Mobile-first** - Sempre pensar em responsividade
- **Tema centralizado** - Cores e breakpoints no theme

### Estrutura de Componente

```
componente/
├── index.tsx          # Lógica principal
├── styles.tsx         # Styled Components
├── typo.ts           # TypeScript interfaces
└── [Nome]Skeleton.tsx # Loading state (opcional)
```

### Git e Commits

- **Commits em português**: `[TICKET] tipo: descrição`
- **Tipos**: feat, fix, refactor, chore, docs, style
- **Husky**: Todos os commits passam por lint automático
- **Build obrigatório**: `npm run build` antes de commitar

**⚠️ Este projeto usa Husky para validar commits. Certifique-se que o código passe no lint antes de commitar.**

## Variáveis de Ambiente

Crie um arquivo `.env.local` com as seguintes variáveis:

```env
# API WordPress
NEXT_PUBLIC_API_URL_DEV=http://localhost:8000
NEXT_PUBLIC_API_URL_HML=https://api-hml.exemplo.com
NEXT_PUBLIC_API_BASE_URL=/wp-json

# API Dashboard (opcional)
NEXT_PUBLIC_DASHBOARD_API_URL_DEV=http://localhost:8001
NEXT_PUBLIC_DASHBOARD_API_URL_HML=https://dashboard-hml.exemplo.com
NEXT_PUBLIC_DASHBOARD_API_BASE_URL=/api

# Autenticação (para desenvolvimento)
NEXT_PUBLIC_API_USERNAME=admin
NEXT_PUBLIC_API_PWD=admin
```

---

## Performance e Otimizações

- **Lazy Loading**: Componentes carregados sob demanda
- **Image Optimization**: Next.js Image com lazy loading
- **Code Splitting**: Divisão automática de código
- **Cache Strategy**: Cache local para traduções e taxonomias
- **Retry Logic**: Retry automático em serviços críticos
- **Debouncing**: Otimização de eventos de resize

---

## Observações

- O projeto está preparado para integração contínua e deploy em ambiente Docker
- O consumo da API REST do WordPress é feito de forma desacoplada
- Sistema de tradução usa Google Translate com cache local
- Multi-idioma integrado com header `X-Language` na API
- Para dúvidas sobre blocks ou integração com o backend, consulte o README do projeto WordPress
