# Jogo de Adivinhação

### Lógica de Programação com JavaScript

### Construa um jogo de adivinhar o número em 11 etapas, usando JavaScript puro com `alert()`, `prompt()` e `confirm()`.

> **Regra:** só avance quando todo o resultado esperado da etapa estiver funcionando.

---

## Sumário

- [Como começar](#como-começar)
- [Como entregar](#como-entregar)
- [Etapa 1: Boas-vindas](#etapa-1-boas-vindas)
- [Etapa 2: Nome do jogador](#etapa-2-nome-do-jogador)
- [Etapa 3: Tipos de dados](#etapa-3-tipos-de-dados)
- [Etapa 4: Quer jogar?](#etapa-4-quer-jogar)
- [Etapa 5: O primeiro chute](#etapa-5-o-primeiro-chute)
- [Etapa 6: Validação](#etapa-6-validação)
- [Etapa 7: Três chances](#etapa-7-três-chances)
- [Etapa 8: Tente até acertar](#etapa-8-tente-até-acertar)
- [Etapa 9: Limite de tentativas](#etapa-9-limite-de-tentativas)
- [Etapa 10: Número aleatório](#etapa-10-número-aleatório)
- [Etapa 11: Jogar de novo](#etapa-11-jogar-de-novo)
- [Desafios extras](#desafios-extras)
- [Referência rápida](#referência-rápida)
- [Erros comuns](#erros-comuns)
- [Documentação MDN](#documentação-mdn)

---

## Como começar

1. Faça um **fork** deste repositório (botão **Fork** no canto superior direito do GitHub).
2. **Clone** o seu fork para o seu computador:

   ```bash
   git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git
   ```
3. Abra a pasta no VS Code.
4. Crie os arquivos do projeto:
   - Crie o arquivo **`index.html`** com a estrutura básica de uma página HTML
   - Crie o arquivo **`script.js`**. É nele que você vai programar
   - No `index.html`, adicione a tag `<script>` carregando o `script.js` **logo antes do fechamento da tag `</body>`**
   - Para testar a ligação, escreva `alert("funcionou!")` no `script.js` e abra a página. Se a mensagem aparecer, está tudo certo (depois apague essa linha)
5. Abra o `index.html` no navegador (dois cliques no arquivo ou use a extensão **Live Server** do VS Code).
6. A cada alteração no `script.js`: **salve** (Ctrl+S) e **recarregue** a página (F5).

> Abra o **console do navegador** (F12 → aba *Console*) para ver mensagens de erro e usar `console.log()`.

---

## Como entregar

Faça **um commit por etapa concluída**, com uma mensagem clara:

```bash
git add .
git commit -m "etapa 1: mensagem de boas-vindas"
git push
```

---

## Etapa 1: Boas-vindas

**Tarefa:** com `alert()`, mostre uma mensagem de boas-vindas e, em seguida, uma mensagem com as regras do jogo.

**Resultado esperado:**

- Ao abrir a página, aparece a mensagem de boas-vindas
- Ao fechá-la, aparece a mensagem com as regras

---

## Etapa 2: Nome do jogador

**Tarefa:** peça o nome do jogador com `prompt()`, guarde em uma variável e mostre uma mensagem com o nome usando template string.

**Resultado esperado:**

- O jogo pede o nome do jogador
- Aparece *"Boa sorte, Maria!"* com o nome digitado

---

## Etapa 3: Tipos de dados

**Tarefa:** peça um número com `prompt()` e mostre esse número + 10. Depois, corrija o resultado convertendo o valor com `Number()`.

**Resultado esperado:**

- Digitando `5`, aparece `15` (e não `510`)
- Digitando uma letra, aparece `NaN`

---

## Etapa 4: Quer jogar?

**Tarefa:** pergunte com `confirm()` se o jogador quer jogar e use `if` / `else` para responder.

**Resultado esperado:**

- Clicando em **OK**, aparece *"Vamos lá!"*
- Clicando em **Cancelar**, aparece *"Que pena! Até a próxima."*

---

## Etapa 5: O primeiro chute

**Tarefa:** crie uma constante com o número secreto `7`. Peça um chute e informe se o jogador acertou, se o número é maior ou se é menor.

**Resultado esperado:**

- Chutando `7`, aparece *"Parabéns, você acertou!"*
- Chutando `9`, aparece *"É menor!"*
- Chutando `3`, aparece *"É maior!"*

---

## Etapa 6: Validação

**Tarefa:** antes de comparar, valide o chute. Letra, campo vazio ou número fora de 1 a 10 é inválido.

**Resultado esperado:**

- Digitando `abc`, `0`, `11` ou nada, aparece *"Número inválido! Digite de 1 a 10."*
- Números de 1 a 10 continuam funcionando

---

## Etapa 7: Três chances

**Tarefa:** sem usar laço de repetição, dê ao jogador 3 chances copiando e colando o código do chute. Depois, aumente para 5 chances.

**Resultado esperado:**

- O jogador tem até 3 chutes, com a dica a cada erro
- Se acertar antes, o jogo não pede mais chutes
- Depois de 3 erros, aparece *"Fim de jogo! O número era 7."*
- Com 5 chances, o jogo continua funcionando do mesmo jeito

---

## Etapa 8: Tente até acertar

**Tarefa:** troque o código repetido da etapa anterior por um `while` que continua pedindo chutes até o jogador acertar. Conte as tentativas.

**Resultado esperado:**

- O jogo só termina quando o jogador acerta
- Cada chute errado mostra a dica (maior ou menor)
- Ao acertar, aparece *"Acertou em 3 tentativas!"*
- Chutes inválidos não contam como tentativa

---

## Etapa 9: Limite de tentativas

**Tarefa:** limite o jogo a 5 tentativas.

**Resultado esperado:**

- A cada erro, o jogo mostra quantas tentativas restam
- Depois de 5 erros, aparece *"Fim de jogo! O número era 7."*
- Acertando antes do limite, aparece a mensagem de vitória

---

## Etapa 10: Número aleatório

**Tarefa:** troque o `7` por um número sorteado de 1 a 10 usando `Math.random()` e `Math.floor()`.

**Resultado esperado:**

- A cada F5, o número secreto muda
- O número sorteado está sempre entre 1 e 10

---

## Etapa 11: Jogar de novo

**Tarefa:** ao fim de cada partida, pergunte com `confirm()` se o jogador quer jogar de novo. Use `while` para repetir a partida.

**Resultado esperado:**

- Clicando em **OK**, começa uma nova partida com novo número e tentativas zeradas
- O nome do jogador é pedido só uma vez
- Clicando em **Cancelar**, aparece *"Obrigado por jogar, Maria!"*

---

## Desafios extras

### Desafio A: Dificuldade

**Tarefa:** antes do jogo, pergunte a dificuldade: 1 (1 a 10), 2 (1 a 50) ou 3 (1 a 100).

**Resultado esperado:**

- O sorteio, a validação e as mensagens usam o intervalo escolhido
- Um nível inválido faz o jogo perguntar de novo

### Desafio B: Par ou ímpar

**Tarefa:** a partir do 3º erro, pergunte com `confirm()` se o jogador quer uma dica. Se ele aceitar, diga se o número secreto é par ou ímpar.

**Resultado esperado:**

- Nos dois primeiros erros, aparece só a dica de maior ou menor
- A partir do 3º erro, o jogo pergunta *"Quer uma dica?"*
- Clicando em **OK**, aparece *"Dica: o número é par"* (ou ímpar)
- Clicando em **Cancelar**, o jogo continua sem a dica

### Desafio C: Desistir

**Tarefa:** se o jogador clicar em **Cancelar** no `prompt` do chute, pergunte com `confirm()` se ele quer mesmo desistir.

**Resultado esperado:**

- Confirmando, aparece *"Você desistiu! O número era 7."* e a partida termina
- Não confirmando, o jogo continua sem contar a tentativa

### Desafio D: Mensagem por desempenho

**Tarefa:** ao acertar, mostre uma mensagem diferente conforme o número de tentativas.

**Resultado esperado:**

- 1 tentativa: *"Incrível, de primeira!"*
- 2 ou 3 tentativas: *"Muito bem!"*
- 4 ou 5 tentativas: *"Ufa, foi por pouco!"*

### Desafio E: Pontuação

**Tarefa:** comece cada partida com 100 pontos e tire 20 a cada erro.

**Resultado esperado:**

- Ao acertar, o jogo mostra a pontuação da partida

### Desafio F: Recorde

**Tarefa:** guarde o menor número de tentativas entre as partidas.

**Resultado esperado:**

- Ao bater o recorde, aparece *"Novo recorde!"*
- Ao sair do jogo, aparece o recorde final

### Desafio G: Chute repetido

**Tarefa:** avise quando o jogador repetir um número que já chutou.

**Resultado esperado:**

- Aparece *"Você já chutou esse número!"*
- O chute repetido não conta como tentativa

---

## Referência rápida

| Função | O que faz | Devolve |
| --- | --- | --- |
| [`alert("texto")`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert) | Mostra uma mensagem | nada (`undefined`) |
| [`prompt("pergunta")`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt) | Pede que o usuário digite algo | `string`, ou `null` se cancelar |
| [`confirm("pergunta")`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/confirm) | Pergunta sim ou não | `true` (OK) ou `false` (Cancelar) |
| [`Number(valor)`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number) | Converte para número | `number` ou `NaN` |
| [`isNaN(valor)`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN) | Verifica se **não** é um número | `true` ou `false` |
| [`Math.random()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random) | Número aleatório entre 0 e 0,999... | `number` |
| [`Math.floor(n)`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) | Arredonda para baixo | `number` |
| [`typeof valor`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof) | Mostra o tipo do valor | `"string"`, `"number"`, `"boolean"`... |
| [`console.log(valor)`](https://developer.mozilla.org/pt-BR/docs/Web/API/console/log_static) | Mostra o valor no console (F12) | nada |

### Operadores

| Tipo | Operadores |
| --- | --- |
| Aritméticos | `+` `-` `*` `/` `%` |
| Comparação | `===` `!==` `>` `<` `>=` `<=` |
| Lógicos | `&&` (E) `\|\|` (OU) `!` (NÃO) |
| Incremento | `++` `--` `+=` `-=` |

---

## Erros comuns

| Problema | Provável causa |
| --- | --- |
| A soma junta os números (`"5" + 10 = "510"`) | Esqueceu de converter o valor do `prompt()` com `Number()` |
| O jogo nunca reconhece o acerto | Comparou um texto com um número, ou usou `=` em vez de `===` |
| A página travou e o `prompt` não para de aparecer | Loop infinito: a condição do `while` nunca fica falsa |
| Nada acontece ao abrir a página | Erro de digitação no código. Abra o console (F12) e leia a mensagem em vermelho |
| `Uncaught ReferenceError: x is not defined` | Usou uma variável que não foi criada, ou escreveu o nome errado |
| `Uncaught TypeError: Assignment to constant variable` | Tentou mudar o valor de uma `const`. Use `let` |
| O número sorteado às vezes é 0 | Faltou o `+ 1` no sorteio |

---

## Documentação MDN

- [Variáveis e tipos de dados](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)
- [`let`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let) e [`const`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)
- [Template strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals)
- [Expressões e operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [`if...else`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)
- [`while`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while)
- [O que deu errado? Resolvendo problemas no JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_went_wrong)
