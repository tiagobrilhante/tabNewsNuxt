# TabNews Nuxt

Uma reimplementação moderna do [TabNews](https://www.tabnews.com.br/) utilizando Vue.js, Nuxt 4 e TypeScript com uma stack robusta e ferramentas de desenvolvimento modernas.

## 🚀 Sobre o Projeto

Este projeto é uma iniciativa dos alunos do [Curso.dev](https://curso.dev) para apresentar uma nova abordagem ao TabNews, mantendo a mesma lógica e funcionalidades do [projeto original](https://github.com/filipedeschamps/tabnews.com.br), mas explorando uma stack tecnológica diferente.

### Por que uma nova implementação?

- **Exploração de tecnologias**: Demonstrar como a mesma aplicação pode ser construída com diferentes ferramentas
- **Aprendizado prático**: Aplicar conhecimentos adquiridos no curso em um projeto real e significativo
- **Contribuição para a comunidade**: Oferecer uma alternativa para desenvolvedores que preferem o ecossistema Vue.js
- **Experimentação**: Testar novas abordagens arquiteturais e de desenvolvimento

## 🛠️ Stack Tecnológica

### Frontend
- **[Vue.js](https://vuejs.org/)** - Framework progressivo para interfaces de usuário
- **[Nuxt 4](https://nuxt.com/)** - Framework full-stack para Vue.js com SSR/SSG
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Vuetify](https://vuetifyjs.com/)** - Framework de componentes Material Design para Vue.js
- **[Vue Router](https://router.vuejs.org/)** - Roteamento oficial para Vue.js

### Estado e Utilidades
- **[Pinia](https://pinia.vuejs.org/)** - Store oficial do Vue.js com persistência
- **[VueUse](https://vueuse.org/)** - Coleção de utilitários composables para Vue
- **[@nuxt/image](https://image.nuxt.com/)** - Otimização automática de imagens
- **[@nuxt/icon](https://nuxt.com/modules/icon)** - Sistema de ícones unificado
- **[@nuxt/fonts](https://fonts.nuxt.com/)** - Otimização automática de fontes
- **[@nuxtjs/i18n](https://i18n.nuxtjs.org/)** - Internacionalização

### Banco de Dados
- **[Neon Database](https://neon.tech/)** - PostgreSQL serverless moderno
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript-first leve e performático
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Ferramentas de migração e introspection

### Desenvolvimento e Qualidade
- **[ESLint 9](https://eslint.org/)** com **[@nuxt/eslint](https://eslint.nuxt.com/)** - Linter configurado para Nuxt
- **[Prettier](https://prettier.io/)** - Formatador de código
- **[Commitlint](https://commitlint.js.org/)** - Padronização de mensagens de commit
- **[Husky](https://typicode.github.io/husky/)** - Git hooks para automação
- **[Lint-staged](https://github.com/okonet/lint-staged)** - Execução de linters em arquivos staged
- **[@nuxt/test-utils](https://nuxt.com/docs/getting-started/testing)** - Utilitários de teste para Nuxt
- **[Faker.js](https://fakerjs.dev/)** - Geração de dados de teste

### Ferramentas
- **[PNPM](https://pnpm.io/)** - Gerenciador de pacotes rápido e eficiente (obrigatório)
- **[TSX](https://tsx.is/)** - Execução rápida de TypeScript
- **[Dotenv](https://github.com/motdotla/dotenv)** - Gerenciamento de variáveis de ambiente

## 🎯 Objetivos

- ✅ Manter a funcionalidade core do TabNews original
- ✅ Implementar uma arquitetura moderna e escalável
- ✅ Garantir performance otimizada com SSR/SSG
- ✅ Proporcionar uma excelente experiência de desenvolvimento
- ✅ Demonstrar boas práticas de desenvolvimento Vue.js/Nuxt

## 🚀 Como Começar

### Pré-requisitos
- **Node.js 22.11.0+** (LTS mais recente - use `nvm use` para a versão correta)
- **PNPM 10.17+** (obrigatório para este projeto)

### Instalação

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd tabNewsNuxt

# Use a versão correta do Node.js (se estiver usando nvm)
nvm use

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env

# Execute em modo de desenvolvimento
pnpm dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento

# Build
pnpm build        # Build para produção
pnpm generate     # Gera site estático
pnpm preview      # Preview do build de produção

# Database
pnpm db:generate  # Gera migrações do banco
pnpm db:migrate   # Executa migrações
pnpm db:studio    # Interface visual do banco

# Qualidade de código
pnpm lint         # Executa ESLint
pnpm lint:fix     # Corrige problemas do ESLint
pnpm format       # Formata código com Prettier
```

A aplicação estará disponível em `http://localhost:3000`

## 🤝 Contribuindo

Este é um projeto colaborativo e sua contribuição é muito bem-vinda! 

### Como contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Áreas de contribuição:
- 🐛 Correção de bugs
- ✨ Novas funcionalidades
- 📚 Documentação
- 🎨 Melhorias de UI/UX
- ⚡ Otimizações de performance
- 🧪 Testes automatizados

## 📋 Roadmap

- [ ] Sistema de autenticação
- [ ] CRUD de posts e comentários
- [ ] Sistema de votos (upvote/downvote)
- [ ] Perfis de usuário
- [ ] Sistema de notificações
- [ ] API REST completa
- [ ] Testes unitários e de integração
- [ ] Deploy automatizado

## 🎓 Créditos

Este projeto foi desenvolvido pelos alunos do [Curso.dev](https://curso.dev) como uma forma de aplicar os conhecimentos adquiridos e contribuir para a comunidade open source.

**Projeto original**: [TabNews](https://github.com/filipedeschamps/tabnews.com.br) por [Filipe Deschamps](https://github.com/filipedeschamps)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Embarque nessa nova aventura! 🚀**

Se você é desenvolvedor Vue.js/Nuxt ou quer aprender essas tecnologias, este é o projeto perfeito para você. Junte-se a nós e ajude a construir uma alternativa moderna e robusta ao TabNews!
