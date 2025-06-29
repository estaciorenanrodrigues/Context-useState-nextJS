# 🏟️ Placar Interativo Brasil x Argentina

Este é um mini-projeto construído com **Next.js 14**, **Tailwind CSS** e **Context API**, simulando um placar de jogo entre Brasil e Argentina usando gerenciador de estados distribuído em toda a aplicação com uso do Context e useState.

---

## ✨ Funcionalidades

- Marcação de gols por botão com atualizações instantâneas
- Armazenamento de estados globais com Context API
- Estilização com Tailwind CSS
- Componente separado para cada placar (Brasil e Argentina)

---

## 🚀 Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🧠 Como funciona

1. Os valores de placar (Brasil e Argentina) são armazenados no `Context`.
2. O componente `Play` consome esse contexto e atualiza os valores com `setBrasil` e `setArgentina`.
3. O fundo é definido dinamicamente com uma imagem do estádio usando Tailwind.
4. Cada botão dispara uma função que incrementa o respectivo placar.

---

## 💻 Como rodar o projeto localmente

1. Clone este repositório:

```bash
git clone https://github.com/estaciorenanrodrigues/Context-useState-nextJS.git
cd Context-useState-nextJS-master
npm install
npm run dev
```
