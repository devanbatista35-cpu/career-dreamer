# Issues do cliente — Career Dreamer

> **De:** Mariana Couto, coordenadora do Núcleo de Carreiras
> **Para:** equipe de desenvolvimento
> **Assunto:** problemas encontrados na versão que vocês entregaram

Pessoal, testamos a página com alguns alunos e professores e apareceram vários problemas.
Separei tudo em itens para facilitar. Não entendo de programação, então descrevi o que
**eu vejo** acontecendo. Preciso de tudo resolvido antes de abrir para as turmas.

Sugestão de ordem: comecem pelo **#01** — sem ele, vários outros nem aparecem.

---

## #01 — O botão "Descobrir minha carreira" não faz nada
`bug` `prioridade: alta` `dificuldade: fácil`

Preencho tudo, clico no botão e... nada. Nenhuma mensagem, nenhuma mudança.

**Como reproduzir:** abrir `index.html`, preencher os campos e clicar no botão.

**O que eu espero:** que o botão envie o formulário.

---

## #02 — Não consigo digitar meu nome
`bug` `prioridade: alta` `dificuldade: fácil`

No campo **Nome**, quando digito "Aline", não aparece nada. Só aceita números!
No celular, ainda abre aquele teclado numérico. Ninguém se chama 12345.

Outra coisa: dá para enviar o nome vazio ou com uma letra só.

**O que eu espero:** que o campo aceite texto, que seja obrigatório e que tenha
um tamanho mínimo e máximo razoável (de 2 a 60 letras está ótimo).

---

## #03 — O formulário está todo espremido
`bug` `prioridade: alta` `dificuldade: fácil`

Os campos aparecem **um do lado do outro**, todos apertados, e o botão ficou
gigante e redondo do lado. Não dá para ler o que estou escrevendo nos hobbies.

**O que eu espero:** os campos **um embaixo do outro**: Nome, depois Hobbies,
depois Áreas de interesse e, por último, o botão ocupando a largura do cartão.

---

## #04 — No celular a página está horrível
`bug` `prioridade: alta` `dificuldade: média`

Abri no meu celular e:
1. a página aparece **minúscula**, preciso dar zoom com os dedos para ler;
2. mesmo com zoom, a página **arrasta para os lados** (tem rolagem horizontal).

Metade dos nossos alunos vai acessar pelo celular.

**O que eu espero:** que a página se ajuste à tela do celular, sem zoom e sem
rolagem para os lados. Testem na largura de um celular comum (uns 360 px).

> Dica do cliente: um sobrinho meu disse que existem **duas causas diferentes** aqui.

---

## #05 — O Chrome quer traduzir a página do inglês
`bug` `prioridade: média` `dificuldade: fácil`

Toda vez que abro, o Google Chrome pergunta se eu quero **traduzir do inglês**.
Mas a página está em português! Uma aluna que usa leitor de tela disse que
o programa **lê os textos com sotaque americano**, e fica incompreensível.

**O que eu espero:** que o navegador reconheça a página como português do Brasil.

---

## #06 — Erros de português
`bug` `prioridade: média` `dificuldade: fácil`

Um professor de Língua Portuguesa achou erros na página inicial:
- "Mapeamento **Vocasional**"
- "**interêsses**" (aparece mais de uma vez)

Fica feio para uma instituição de ensino.

**O que eu espero:** revisão de todos os textos da página.

---

## #07 — Não consigo ler os nomes dos campos
`bug` `prioridade: média` `dificuldade: fácil`

Os títulos "Nome", "Hobbies" e "Áreas de interesse" estão **quase brancos** em
cima do fundo branco. Com o sol batendo na tela do celular, some tudo.

**O que eu espero:** textos legíveis para qualquer pessoa, inclusive quem tem
baixa visão. Ouvi falar que existe uma regra de **contraste mínimo** (WCAG) — sigam ela.

---

## #08 — Problemas para quem usa teclado
`bug` `acessibilidade` `prioridade: média` `dificuldade: média`

Duas reclamações de usuários:
1. "Quando eu **clico no nome do campo** (por exemplo, em 'Hobbies'), o cursor
   não vai para a caixa de texto. Em outros sites isso funciona."
2. "Eu navego só com a tecla **Tab** porque tenho dificuldade motora. Nesta página
   eu **não sei onde estou**: nada fica destacado quando passo pelos campos."

**O que eu espero:** clicar no rótulo deve levar ao campo, e quem usa Tab deve
sempre enxergar qual campo/botão está selecionado.

---

## #09 — Relatório de acessibilidade: "página sem estrutura"
`bug` `acessibilidade` `prioridade: média` `dificuldade: média`

A equipe de TI rodou uma ferramenta de auditoria (Lighthouse) e mandou isto:

> "A página não possui título principal (`h1`), não possui regiões de cabeçalho,
> conteúdo principal e rodapé, e a lista de passos não é reconhecida como lista.
> Leitores de tela não conseguem navegar por seções."

Não sei o que significa, mas eles disseram que é "excesso de `div`".

**O que eu espero:** que o relatório não acuse mais esses problemas e que
o visual continue igual ao de hoje.

---

## #10 — O formulário aceita ser enviado vazio
`bug` `prioridade: alta` `dificuldade: média`

Depois que o botão voltou a funcionar (#01), testei enviar com os hobbies **em branco**,
e também só com vírgulas (`, , ,`). A página aceitou como se estivesse tudo certo!

No console (meu sobrinho abriu o F12) apareceu algo assim:
`hobbies: ["", " ", " ", ""]`

**O que eu espero:**
- Nome, Hobbies e Áreas de interesse obrigatórios;
- cada hobby/interesse sem espaços sobrando no começo e no fim;
- itens vazios ignorados; se não sobrar nenhum, avisar a pessoa no próprio campo.

---

## #11 — Aquela janelinha feia do navegador
`bug` `prioridade: média` `dificuldade: média`

Quando clico no botão aparece a caixinha cinza padrão do navegador escrito
"Tente mais tarde", e ainda com o endereço do arquivo em cima. Parece golpe.

**O que eu espero:** uma **janela (modal) com a cara do site**, com o título
"Tente mais tarde", uma frase explicando que o serviço ainda não está disponível
e um botão "Entendi" para fechar. Deve fechar também com a tecla **Esc**.

---

## #12 — Conectar o formulário ao sistema de análise (API)
`funcionalidade` `prioridade: alta` `dificuldade: difícil`

O pessoal do backend vai nos passar o endereço da API. Quando tivermos, quero
que o formulário **envie os dados de verdade** e mostre o resultado.

**Regras que combinamos:**
- O endereço da API fica em **um único lugar** (`js/config.js`), para cada grupo
  configurar o seu.
- **Enquanto o endereço estiver vazio**, o botão mostra o modal "Tente mais tarde" (#11).
- Durante o envio, o botão deve mostrar que está carregando e **não pode ser
  clicado duas vezes** (teve aluno que clicou 10 vezes).
- Se a API demorar demais ou der erro, mostrar o modal "Tente mais tarde" com
  uma mensagem clara. **Não apagar** o que a pessoa digitou.
- Se der certo, guardar a resposta e levar a pessoa para `resultado.html`.

O formato do envio e da resposta está no `README.md` (seção **Contrato da API**).

---

## #13 — A página de resultado fica em branco
`funcionalidade` `prioridade: alta` `dificuldade: difícil`

Cliquei em "Ver um resultado de exemplo" no rodapé e a página abriu **vazia**,
só com o cabeçalho e o rodapé.

**O que eu espero ver:**
- "Perfil de **(nome da pessoa)**" e o texto de síntese do perfil;
- as carreiras recomendadas, **da mais compatível para a menos compatível**, cada uma com:
  título, porcentagem de compatibilidade (com uma barrinha), resumo,
  competências-chave (como etiquetas) e roteiro de estudos numerado;
- a primeira carreira destacada como **"Melhor combinação"**;
- se alguém abrir `resultado.html` direto, sem ter preenchido nada, uma mensagem
  amigável com um botão para voltar ao formulário.

Para testar sem o backend: `resultado.html?exemplo`.

---

Obrigada! Qualquer dúvida, me chamem.
**Mariana**
