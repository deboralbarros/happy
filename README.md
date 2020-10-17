# 😀 Happy

Aplicação desenvolvida durante a 3ª Edição da Next Level Week, promovida pela <a href="https://rocketseat.com.br">Rocketseat</a>.

Aplicação sem fins comerciais, apenas didáticos.

#

## ❓ O que é?

O Happy é uma aplicação com o objetivo de agregar informações sobre Orfanatos, para que as pessoas possam visitar, e levar alegria para as crianças.

#

## 🖼️ Layout

Você pode conferir o Layout desenvolvido por <a href="https://www.instagram.com/tiagoluchtenberg/">Tiago Luchtenberg</a>, no <a href="https://figma.com">Figma</a>:

<ul>
<li><a href="https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web">Web</a></li>

<li><a href="https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Hap/duplicatepy-Mobile">Mobile</a></li>
</ul>

#

## 💿 Instalação

⚠️ Você deve ter o <a href="https://git-scm.com/downloads">Git</a> instalado em sua máquina

⚠️ Você deve ter o <a href="https://nodejs.org/en/download/package-manager/">Node</a> instalado em sua máquina

⚠️ Você deve ter o <a href="https://docs.expo.io/workflow/expo-cli/">Expo Cli</a> instalado em sua máquina

Caso, você queira, você pode instalar o <a href="https://yarnpkg.com/getting-started/install">Yarn</a> em sua máquina

#

### <li> Back-end

1. Primeiramente, você deve clonar este repositório para sua máquina, com o seguinte comando, no terminal:

```
git clone https://github.com/deboralbarros/happy
```

2. Entre na pasta **backend** e instale as dependências:

```
cd backend
```

```
npm install
```

ou, caso você tenha instalado o Yarn:

```
yarn install
```

3. Inicie o banco de dados, com o seguinte comando:

```
npx typeorm migration:run
```

ou, caso você tenha instalado o Yarn:

```
yarn typeorm migration:run
```

4. Troque o ip que está no arquivo **ImagesView.ts**, (backend/src/views/ImagesView.ts) na linha 7, pelo ip da sua máquina.

Caso você não saiba o seu ip, você pode seguir as seguintes instruções:

<ul>
<li><a href="https://sempreupdate.com.br/6-maneiras-de-encontrar-o-seu-endereco-ip-no-linux/">Linux</a>, na seção 2 (Comando hostname)</li>

<li><a href="https://www.techtudo.com.br/dicas-e-tutoriais/noticia/2014/03/como-descobrir-o-ip-interno-e-externo-do-seu-computador-entenda.html#:~:text=Na%20janela%20do%20%E2%80%9CPromt%20de,exibido%20em%20%E2%80%9CEndere%C3%A7o%20IPv4%E2%80%B3.">Windows e Mac</a></li>
</ul>

#

### <li> Front-end

1. Entre na pasta **web** e instale as dependências:

```
cd ../web
```

```
npm install
```

ou, caso você tenha instalado o Yarn:

```
yarn install
```

#

### <li> Mobile

1. Entre na pasta **mobile** e instale as dependências:

```
 cd ../mobile
```

```
npm install
```

ou, caso você tenha instalado o Yarn:

```
yarn install
```

#

## 🚀 Rodando

1.  Para rodar o back-end, execute:

```
cd ../backend
```

```
npm run dev
```

ou, caso você tenha instalado o Yarn:

```
yarn dev
```

#

2.  Para rodar o front-end: em outro terminal, na pasta raiz do projeto, execute:

```
cd web
```

```
npm run start
```

ou, caso você tenha instalado o Yarn:

```
yarn start
```

#

3. Para rodar o projeto no seu celular, você deve instalar o Expo, no seu celular:

<li><a href="https://play.google.com/store/apps/details?id=host.exp.exponent">No Android</a></li>
<li><a href="https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?path=apps%2fexponent">No iOS</a></li>

#

4. Em outro terminal, na pasta raiz do projeto, execute:

```
cd mobile
```

```
npm run start
```

ou:

```
expo start
```

ou, se preferir usar o Yarn:

```
yarn start
```

#

5. Em seu celular, no aplicativo Expo, aperte em 'Scan QR Code' e escaneie o QR Code que aparecer no terminal, ou na página que abriu em seu navegador.

#

## 👩‍💻 Tecnologias utilizadas
<ul>
<li><a href="https://www.typescriptlang.org/">Typescript</a> - Superset do Javascript, adicionando tipagem estática e outros benefícios</li>

<li><a href="https://pt-br.reactjs.org/">ReactJs</a> - Biblioteca para desenvolvimento do front-end web</li>

<li><a href="https://reactnative.dev/">React Native</a> - Biblioteca para desenvolvimento de aplicativos mobile</li>

<li><a href="https://expo.io/">Expo</a> - Ferramenta para auxiliar no desenvolvimento do app mobile</li>

<li><a href="https://nodejs.org/en/">NodeJs</a> - Ambiente de execução Javascript fora do navegador</li>

<li><a href="https://expressjs.com/pt-br/">ExpressJs</a> - Framework para aplicações web NodeJs</li>

<li><a href="https://www.sqlite.org/index.html">SQLite</a> - Banco de Dados</li>

<li>Entre outras</li>
</ul>