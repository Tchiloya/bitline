# Publicação, fontes e checklist

## Publicar

O site é estático e usa HTML, CSS e JavaScript sem processo de build.

### Vercel

1. Coloca os ficheiros desta pasta num repositório Git.
2. Importa o repositório na Vercel.
3. Define a pasta raiz como `bitline-angola` (ou a raiz do repositório, se esta pasta for a raiz) e deixa o build command vazio.
4. Publica. Para domínio próprio, configura-o em Project Settings → Domains.

### Netlify

1. Liga o repositório ou arrasta a pasta `bitline-angola` para o Netlify Drop.
2. Não é necessário build command; a pasta publicada deve conter `index.html`.
3. Configura o domínio em Domain management.

### GitHub Pages

1. Envia o conteúdo desta pasta para a raiz de um repositório GitHub.
2. Em Settings → Pages, escolhe a branch e a pasta raiz como origem.
3. Guarda e aguarda a publicação. Se estiver numa subpasta, confirma que o URL relativo dos assets continua correcto.

### cPanel / FTP

1. Abre o File Manager do cPanel ou liga por FTP/SFTP.
2. Envia todos os ficheiros e a pasta `assets` para `public_html` (ou para a pasta do domínio).
3. Confirma que `index.html` está na raiz publicada e testa a página, o menu e os links.

## Ligar o formulário

O formulário valida os campos no navegador e abre um rascunho por `mailto:`. Para receber pedidos sem depender do programa de e-mail do visitante, configura um endpoint de Formspree ou um backend PHP/MySQL, substitui o handler `submit` em `script.js`, define protecção contra spam e publica a política de privacidade correspondente. Não introduzas credenciais de servidor no JavaScript público.

## Fontes, ícones e imagens

- **Logótipo:** fornecido pela Bitline, colocado em `assets/bitline-logo.png`. Usado em contentor claro por ter fundo branco incorporado.
- **Manrope:** Google Fonts, família tipográfica principal. SIL Open Font License 1.1. [Google Fonts — Manrope](https://fonts.google.com/specimen/Manrope) · [Licença OFL](https://openfontlicense.org/)
- **DM Mono:** Google Fonts, rótulos e pequenos metadados. SIL Open Font License 1.1. [Google Fonts — DM Mono](https://fonts.google.com/specimen/DM+Mono) · [Licença OFL](https://openfontlicense.org/)
- **Ícones:** símbolos Unicode e CSS desenhados no próprio site; não há pacote de ícones externo nem dependência Lucide. Se a equipa preferir ícones Lucide, usar a biblioteca oficial sob licença ISC e conservar o aviso de licença. [Lucide](https://lucide.dev/) · [Repositório e licença](https://github.com/lucide-icons/lucide)
- **Imagens:** não foram usadas fotografias externas. Os avatares são composições CSS com iniciais para evitar imagens de pessoas sem autorização.
- **Conteúdo Bitline consultado:** publicações da página oficial no LinkedIn sobre [phishing](https://pt.linkedin.com/posts/bitline-angola_phishing-phishing-phishing-activity-7503081392273244161-gb0t), [boas práticas de TI](https://pt.linkedin.com/posts/bitline-angola_5-erros-de-ti-que-as-empresas-angolanas-cometem-activity-7503810787036119040-jUI5) e [tendências tecnológicas em Angola](https://pt.linkedin.com/posts/bitline-angola_ofuturodatecnologiaemangola-conectividadeinteligente-activity-7494731803316944897-ACJz). Consulta feita em 9 de Outubro de 2026. O site e perfis de Instagram/Facebook não foram acessíveis na consulta; não foram usados para sustentar afirmações.

## Checklist antes da publicação

- [ ] Substituir os avatares CSS por fotografias autorizadas, se desejado.
- [ ] Confirmar a grafia pública de nomes e cargos da equipa.
- [ ] Confirmar números, e-mail, redes sociais, horário e área de atendimento.
- [ ] Adicionar casos de portfólio reais e aprovados para divulgação; a lista de projectos não constava no briefing recebido. A página apresenta publicações públicas do LinkedIn enquanto conteúdo técnico.
- [ ] Activar a secção de histórias reais apenas quando existirem depoimentos aprovados para divulgação.
- [ ] Rever a política de privacidade com os dados do responsável e as práticas efectivas, sobretudo depois de ligar um serviço de formulário.
- [ ] Ligar e testar um serviço de submissão do formulário; o modo actual abre um rascunho de e-mail no dispositivo.
- [ ] Definir URL final e actualizar `og:image`/metadados sociais com uma imagem de partilha adequada, se necessário.
- [ ] Confirmar que o domínio usa HTTPS e testar a versão móvel.
