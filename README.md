# Moda Versátil - E-Commerce Interativo de Alfaiataria e Moda Premium

Uma plataforma digital de alta-costura interativa desenvolvida com tecnologia moderna e foco em conversão e experiência do usuário (UX/UI). Este projeto apresenta o catálogo de vestuário fino e acessórios de luxo da **Moda Versátil**, integrando recursos dinâmicos e experiências imersivas de estilo.

---

## 🚀 O que foi feito (Melhorias e Novas Funcionalidades)

### 1. Estúdio Interativo "Monte seu Look" (Mix & Match)
* **Visualização em Tempo Real**: Criado um provador virtual e dinâmico (`MixMatch.tsx`) onde os clientes podem combinar partes superiores (T-shirts premium e conjuntos), partes inferiores (calças exclusivas de linho) e acessórios de luxo.
* **Efeitos Visuais Premium**: O canvas de exibição possui estética noturna sofisticada, com brilhos de fundo (*radial glow*), animações fluidas de entrada e saída (`AnimatePresence` do `motion/react`) e molduras refinadas para cada categoria de produto.
* **Integração Comercial via WhatsApp**: Após selecionar a combinação ideal, o usuário pode clicar em um botão de ação rápida para enviar uma mensagem personalizada diretamente ao suporte, informando as peças escolhidas e consultando tamanhos e disponibilidade imediata.

### 2. Redesenho da Seção Hero (Banner Principal)
* **Card de Informações com Efeito Glassmorphism**: O destaque principal agora utiliza desfoque de fundo avançado (`backdrop-blur-md`), overlay escuro translúcido (`bg-neutral-950/70`) e bordas ultra-finas (`border-white/10`), proporcionando elegância máxima e legibilidade.
* **Tipografia Editorial**:
  * Subtítulo *"NATURAL & ELEGÂNCIA"* estilizado com fonte sans-serif, letras maiúsculas e espaçamento largo (`tracking-[0.3em]`) na cor dourada exclusiva.
  * Título principal *"Conjunto de Linho"* em fonte serifada premium, estilo ultra-light e elegante.
* **Indicadores de Slide Dinâmicos (Luxury Dots)**: Os indicadores de navegação foram remodelados de pontos genéricos para um sistema fluido. O slide ativo expande-se horizontalmente como uma linha dourada em transição suave (`w-6 bg-brand-gold-500`), enquanto os inativos permanecem como pequenos pontos semi-transparentes de 6px (`w-1.5`).
* **Chamada para Ação (CTA) de Alta Conversão**: Inserção de um botão proeminente de destaque dourado redirecionando os visitantes para a loja oficial na **Shein** (`https://onelink.shein.com/40/5u00gic2rajd`).

### 3. Integração Completa com a Plataforma Shein
* **Substituição de Plataforma**: Removidas todas as referências anteriores à Shopee, migrando a infraestrutura de vendas externas totalmente para a **Shein**.
* **Links Diretos Customizados**:
  * O produto premium **Calça de linho e elastano com detalhe de botões** foi integrado ao seu link oficial dedicado na Shein.
  * Os demais produtos do catálogo foram configurados para redirecionamento estratégico à vitrine geral da marca.
* **Botões de Venda Integrados**: Nos modais e cards de detalhes dos produtos, o botão de compra rápida foi personalizado com ícones fluidos e a identidade visual "Comprar na Shein".

### 4. Rodapé Personalizado (Créditos Profissionais)
* **Desenvolvido por Patricia Oliveira**: O rodapé institucional foi atualizado com a inclusão de um crédito profissional elegante e interativo apontando para o portfólio oficial de desenvolvimento (`https://patriciaoliveiradev.netlify.app/`), perfeitamente integrado à tipografia minimalista do site.

---

## 🛠️ Stack Tecnológica & Dependências

O projeto foi construído utilizando as melhores e mais modernas ferramentas do ecossistema de front-end:

* **React 18** & **TypeScript** - Garantia de tipagem estática robusta, estabilidade de componentes e renderização ágil.
* **Vite** - Bundler de alta performance que fornece inicialização e build extremamente rápidos.
* **Tailwind CSS** - Framework utilitário de estilização para design responsivo fluido, transições de estado e controle de layout pixel-perfect.
* **Motion (motion/react)** - Motor de animações utilizado para dar vida às interações do provador e transições do carrossel.
* **Lucide React** - Pacote de ícones minimalistas e modernos vetorizados.

---

## 📁 Estrutura do Código Desenvolvido

* `src/components/MixMatch.tsx`: Componente interativo que engloba toda a lógica de seleção de peças de vestuário, canvas de visualização, animações e integração com o WhatsApp.
* `src/components/Hero.tsx`: Componente de abertura redesenhado com o novo card translúcido de informações, indicadores personalizados de sliders e botão de redirecionamento para a Shein.
* `src/components/ProductCard.tsx`: Sistema de exibição do catálogo de produtos contendo CTAs para Shein e atendimento personalizado via WhatsApp.
* `src/data.ts`: Base de dados unificada de produtos, contendo links de compra diretos atualizados para a Shein.
* `src/App.tsx`: Ponto de ancoragem principal do applet, unificando a navegação suave de âncoras e as seções de forma coesa.

---

Desenvolvido com sofisticação técnica e excelência visual para impulsionar a presença digital da marca **Moda Versátil**.
