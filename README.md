# Zuarte — Papelaria & Centro Digital

Website institucional responsivo para uma papelaria e centro de serviços digitais, com secções de materiais escolares, impressão, digitalização, fotografia rápida, panfletos, cybercafé e zona de jogos PlayStation.

## O que está incluído

- Página inicial responsiva para telemóveis, tablets e computadores.
- Logótipo provisório em `assets/logo-generated.png` e favicon vetorial.
- Secções de serviços, papelaria, centro digital, gaming e contactos.
- Formulário que prepara um pedido e abre o WhatsApp com a mensagem preenchida.
- Menu móvel e ligações rápidas para os serviços.
- Publicação automática gratuita no GitHub Pages através de GitHub Actions.
- Não requer base de dados nem chaves API para funcionar como site institucional.

## Antes de publicar

1. Abra `config.js`.
2. Troque `244900000000` pelo número real do WhatsApp do estabelecimento, usando indicativo do país e apenas algarismos. Exemplo de formato para Angola: `244923456789`.
3. Confirme o nome comercial, endereço, horário, preços e serviços reais. Não foram inventados preços nem endereço.
4. Substitua o logótipo gerado por uma versão aprovada pelo cliente, se necessário.

## Testar no computador

Pode abrir `index.html` directamente no navegador. Para testar num servidor local, instale o Node.js e execute:

```bash
npx serve .
```

## Criar o repositório no GitHub

Crie um repositório público chamado `zuarte-papelaria-centro-digital`. Depois, dentro desta pasta, execute:

```bash
git init
git add .
git commit -m "Criar website da Zuarte"
git branch -M main
git remote add origin https://github.com/SEU-UTILIZADOR/zuarte-papelaria-centro-digital.git
git push -u origin main
```

Substitua `SEU-UTILIZADOR` pelo nome de utilizador GitHub correcto.

## Activar o website gratuito

1. No GitHub, abra o repositório e entre em **Settings → Pages**.
2. Em **Build and deployment**, seleccione **GitHub Actions** como origem.
3. O workflow `.github/workflows/deploy.yml` publicará o site quando houver um push para `main`.
4. Aguarde a conclusão do workflow na aba **Actions**. O GitHub mostrará o endereço publicado em **Settings → Pages**.

## Imagens e licenças

As fotografias de demonstração são carregadas a partir de URLs do Unsplash. Verifique a imagem escolhida e os termos de utilização antes da publicação comercial; as fotografias podem ser trocadas por imagens reais do estabelecimento. O logótipo foi criado para este projecto e está incluído na pasta `assets`.

## Limites desta versão

Esta é uma montra digital, não um sistema de gestão: não guarda pedidos numa base de dados, não processa pagamentos, não confirma stock e não envia mensagens automaticamente. O cliente revê e envia a mensagem no WhatsApp. Para adicionar encomendas guardadas, contas de utilizador ou painel administrativo será necessário integrar um backend e uma base de dados.
