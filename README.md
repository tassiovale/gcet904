# GCET904 — Desenvolvimento de Software I

Repositório de atividades práticas desenvolvidas ao longo da disciplina **GCET904 — Desenvolvimento de Software I**, ofertada pela Universidade Federal do Recôncavo da Bahia (UFRB). O projeto abrange desde os fundamentos de HTML e CSS até a introdução ao desenvolvimento de aplicações com React.

**Autor:** Tassio Valle  
**Disciplina:** GCET904 — Desenvolvimento de Software I  
**Instituição:** UFRB — Universidade Federal do Recôncavo da Bahia

---

## Tecnologias utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| HTML5 | — | Estruturação das páginas |
| CSS3 | — | Estilização e layout |
| JavaScript (ES6+) | — | Interatividade e consumo de APIs |
| React | ^19.2.6 | Interface do subprojeto `meu-app` |
| Vite | ^8.0.12 | Ferramenta de build do subprojeto React |
| Node.js / npm | — | Gerenciamento de dependências |
| Google Fonts | — | Tipografia (Montserrat, Finlandica Text) |
| Open-Meteo API | — | Dados de previsão do tempo |

---

## Estrutura de diretórios

```
gcet904/
└── pagina_pessoal/          # Site pessoal em HTML/CSS/JS puro
    ├── index.html
    ├── sobre.html
    ├── curriculo.html
    ├── contato.html
    ├── diversao.html
    ├── noticias_ufrb.html
    ├── apis.html
    ├── previsao_tempo.html
    ├── resultado.html
    ├── testes_javascript.html
    ├── exemplo_formulario.html
    ├── exemplo_inputs.html
    ├── exemplo_tabela.html
    ├── exemplo_validacao.html
    ├── box_model.html
    ├── styles.css
    ├── box_model.css
    ├── styles/
    │   ├── apis.css
    │   ├── diversao.css
    │   ├── noticias_ufrb.css
    │   └── previsao_tempo.css
    ├── scripts/
    │   ├── apis.js
    │   ├── diversao.js
    │   ├── noticias_ufrb.js
    │   ├── previsao_tempo.js
    │   └── testes_javascript.js
    ├── imagens/
    └── meu-app/             # Subprojeto React/Vite
        ├── package.json
        ├── vite.config.js
        └── src/
            ├── main.jsx
            ├── App.jsx
            ├── App.css
            ├── index.css
            └── components/
                ├── MeuBotao.jsx
                ├── MeuBotao.css
                ├── Personagens.jsx
                └── Personagens.css
```

---

## Descrição das páginas e funcionalidades

### Site pessoal (HTML/CSS/JS puro)

#### Páginas principais

**`index.html` — Página inicial**  
Ponto de entrada do site pessoal. Apresenta uma mensagem de boas-vindas com o nome do autor e convida o visitante a explorar as demais seções. Contém navegação global com links para Início, Sobre mim, Currículo e Contato, além de rodapé com indicação de direitos autorais.

**`sobre.html` — Sobre mim**  
Página dedicada à apresentação do autor, com espaço para informações biográficas e descrição pessoal.

**`curriculo.html` — Currículo**  
Página reservada para a exibição do currículo do autor, seguindo a mesma estrutura de navegação do restante do site.

**`contato.html` — Contato**  
Página de contato com o autor, mantendo a identidade visual do site pessoal.

**`resultado.html` — Resultado de formulário**  
Página de destino (action) dos formulários HTML do projeto. Exibe a mensagem "Formulário processado com sucesso!" após o envio, demonstrando o fluxo básico de submissão de formulários no navegador.

---

#### Páginas de experimentos e aprendizado

**`diversao.html` — Diversão com JavaScript**  
Demonstra conceitos fundamentais de manipulação do DOM com JavaScript. O usuário digita seu nome em um campo de texto e clica em um botão para receber uma mensagem personalizada. O script associado (`scripts/diversao.js`) ilustra:

- Seleção de elementos com `getElementById` e `querySelector`
- Registro de eventos com `addEventListener` (eventos de `input`, `click`, `focus`, `blur`, `mouseover`, `mouseout` e `keydown`)
- Alteração dinâmica de estilos e conteúdo de elementos
- Uso de template literals

**`noticias_ufrb.html` — Notícias UFRB**  
Página com três seções distintas, utilizada para praticar diferentes recursos:

- Exibição de cartões de notícias com imagem e texto, demonstrando estrutura semântica com `<img>`, `<small>` e `<span>`
- Grid CSS com seis itens, aplicando o layout `grid` do CSS3
- Botão com evento inline `onclick` exibindo um `alert`

O script associado (`scripts/noticias_ufrb.js`) demonstra conceitos de variáveis em JavaScript: declaração com `let` e `const`, convenção camelCase e uso dos métodos `console.log`, `console.warn` e `console.error`.

**`apis.html` — Demonstração de APIs**  
Página introdutória ao consumo de APIs assíncronas. O script (`scripts/apis.js`) demonstra a criação e o encadeamento de Promises com `.then()` e `.catch()`, além de simular uma operação assíncrona com `setTimeout`, ilustrando o modelo de execução não bloqueante do JavaScript.

**`previsao_tempo.html` — Previsão do tempo**  
Página funcional que consome a API pública [Open-Meteo](https://open-meteo.com/) para exibir a temperatura atual de qualquer localidade. O usuário informa latitude e longitude, e o script (`scripts/previsao_tempo.js`) realiza uma requisição HTTP com `fetch`, processa a resposta em JSON e exibe a temperatura em graus Celsius na página. Demonstra o uso de funções `async/await`.

**`testes_javascript.html` — Testes JavaScript**  
Página utilizada como caderno de estudos para os fundamentos da linguagem JavaScript. O arquivo `scripts/testes_javascript.js` contém exemplos comentados sobre:

- Tipos e declaração de variáveis (`let`, `const`)
- Operadores aritméticos, de comparação (com destaque para `===` e `!==`) e lógicos
- Estruturas condicionais (`if/else if/else`, operador ternário, `switch`)
- Estruturas de repetição (`for`, `while`, `for...of`, `forEach`)
- Declaração e chamada de funções

---

#### Páginas de exemplos de formulários e CSS

**`exemplo_formulario.html` — Exemplo de formulário**  
Formulário completo com estilização aplicada via `styles.css` (que importa a fonte Finlandica Text do Google Fonts). Contém dois `fieldset`: um para informações pessoais (nome e e-mail) e outro para mensagem (assunto via `<select>` e texto via `<textarea>`). Todos os campos possuem atributo `required`. Demonstra o uso semântico de `<label>`, `<fieldset>` e `<legend>`.

**`exemplo_inputs.html` — Exemplo de inputs**  
Catálogo dos principais tipos de `<input>` disponíveis no HTML5, organizado em três grupos:

- **Tipos de input:** `text`, `email`, `password`, `tel`, `number` (com `min`/`max`), `date`, `time`, `datetime-local`, `range`, `file` e `color`
- **Checkboxes:** dois exemplos de seleção múltipla
- **Radio buttons:** três opções de seleção exclusiva

**`exemplo_tabela.html` — Exemplo de tabela**  
Demonstra a criação de tabelas HTML semânticas com `<caption>`, `<thead>`, `<tbody>`, `<th>` e `<td>`. A tabela exibe as notas de três alunos fictícios da disciplina GCET904 com cálculo de média individual e média da turma, utilizando `colspan` para mesclar células.

**`exemplo_validacao.html` — Exemplo de validação**  
Formulário que demonstra os recursos de validação nativa do HTML5 nos campos de entrada:

- `required` — campo obrigatório
- `minlength` / `maxlength` — comprimento mínimo e máximo de texto
- `min` / `max` / `step` — intervalo numérico com incremento definido
- `pattern` — validação por expressão regular (exemplo: placa de veículo no formato `AAA9999`)

**`box_model.html` — Box Model CSS**  
Página didática que explica e demonstra visualmente o Box Model do CSS, composto por conteúdo, `padding`, `border` e `margin`. Utiliza três `<div>` com classes distintas estilizadas em `box_model.css` para ilustrar as diferenças entre as camadas do modelo.

---

### Subprojeto React — `meu-app/`

Aplicação React inicializada com Vite que demonstra conceitos fundamentais do framework, como componentização, props e gerenciamento de estado com hooks.

#### Componentes

**`App.jsx` — Componente raiz**  
Gerencia o estado da aplicação com dois `useState`:

- `personagens` — lista de personagens exibidos, iniciada com três entradas (Hedy Lamarr, Freddy Nelson e XPTO)
- `numeroPersonagens` — contador para geração de nomes únicos ao adicionar novos personagens

Disponibiliza a função `adicionarPersonagem`, que insere um novo personagem à lista usando spread operator (`[...personagens, novoPersonagem]`), e renderiza os componentes `MeuBotao` e `Personagens`.

**`MeuBotao.jsx` — Componente de botão**  
Componente reutilizável que recebe a prop `onClick` e renderiza um botão estilizado com o texto "Adicionar novo personagem". Separa a lógica de apresentação da lógica de negócio.

**`Personagens.jsx` — Componente de lista**  
Recebe a prop `personagens` (array de objetos) e renderiza cada personagem com sua imagem e nome, utilizando o método `.map()` e a prop `key` para o controle de reconciliação do React.

---

## Como executar o projeto

### Site estático (HTML/CSS/JS)

O site em HTML puro não requer instalação de dependências nem servidor de build. Para visualizá-lo, abra diretamente qualquer arquivo `.html` no navegador:

```bash
# Exemplo: abrir a página inicial no navegador padrão do sistema
xdg-open /home/tassio/Documents/gcet904/pagina_pessoal/index.html
```

Alternativamente, utilize a extensão **Live Server** do VS Code para servir os arquivos com recarregamento automático.

> **Observação:** a página `previsao_tempo.html` realiza requisições HTTP para a API Open-Meteo. Alguns navegadores bloqueiam requisições de `fetch` em arquivos abertos diretamente pelo protocolo `file://`. Recomenda-se utilizar um servidor local (como o Live Server) ao testar essa página.

---

### Subprojeto React (`meu-app/`)

O subprojeto utiliza Node.js e npm. Certifique-se de ter o Node.js instalado (versão 18 ou superior recomendada).

**1. Acesse o diretório do subprojeto:**

```bash
cd /home/tassio/Documents/gcet904/pagina_pessoal/meu-app
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

O Vite iniciará o servidor e exibirá no terminal o endereço local, geralmente `http://localhost:5173`. Abra esse endereço no navegador para visualizar a aplicação.

**Outros comandos disponíveis:**

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Serve localmente a versão de produção gerada pelo build |
| `npm run lint` | Executa o ESLint para análise estática do código |
