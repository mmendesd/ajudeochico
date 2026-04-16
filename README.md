# Landing page solidária do Chico

Projeto em React + Vite + TypeScript para arrecadação da cirurgia, exames e recuperação do gato Chico.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## Como rodar

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Onde editar a campanha

O arquivo principal para manutenção do conteúdo é:

- [src/data/campaignData.ts](/C:/Users/Usuario/Documents/Chico/src/data/campaignData.ts)

Nele você pode editar:

- nome do gato
- títulos e textos da página
- valor da meta, arrecadado e faltante
- link da Vakinha
- chave Pix
- QR Code Pix
- WhatsApp
- Instagram
- clínica
- provas e documentos
- dados da rifa
- timeline de atualizações
- mensagem final

## Onde trocar fotos e documentos

Os placeholders visuais estão em:

- [src/assets/chico-hero.png](/C:/Users/Usuario/Documents/Chico/src/assets/chico-hero.png)
- [src/assets/chico-resting.png](/C:/Users/Usuario/Documents/Chico/src/assets/chico-resting.png)
- [src/assets/chico-closeup.png](/C:/Users/Usuario/Documents/Chico/src/assets/chico-closeup.png)
- [src/assets/doc-report.png](/C:/Users/Usuario/Documents/Chico/src/assets/doc-report.png)
- [src/assets/doc-budget.png](/C:/Users/Usuario/Documents/Chico/src/assets/doc-budget.png)
- [src/assets/doc-xray.png](/C:/Users/Usuario/Documents/Chico/src/assets/doc-xray.png)
- [src/assets/doc-case-photo.png](/C:/Users/Usuario/Documents/Chico/src/assets/doc-case-photo.png)
- [src/assets/pix-qr-placeholder.png](/C:/Users/Usuario/Documents/Chico/src/assets/pix-qr-placeholder.png)

Se quiser usar fotos reais:

1. Substitua os SVGs por imagens reais dentro de `src/assets`.
2. Atualize os imports e os textos alternativos em `src/data/campaignData.ts`.

## Estrutura

```text
src/
  assets/
  components/
  data/
  utils/
  App.tsx
  index.css
  main.tsx
```

## Recursos implementados

- layout mobile-first e responsivo
- navbar com menu mobile
- hero com CTAs e meta visível
- seção de história e acidente
- provas do caso em cards
- barra de progresso calculada automaticamente
- doação por Vakinha
- Pix com cópia para a área de transferência
- QR Code com placeholder pronto para troca
- rifa solidária com CTA para WhatsApp
- timeline de atualizações
- compartilhamento por WhatsApp
- cópia do link da campanha
- animações suaves com Framer Motion
- SEO básico e Open Graph

## Publicação

Você pode publicar facilmente em serviços como Vercel, Netlify ou GitHub Pages após rodar o build.
