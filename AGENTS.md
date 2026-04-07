# Guia para Agentes de Desenvolvimento

Este documento fornece informações essenciais para agentes de IA que trabalham neste projeto. Siga estas diretrizes para garantir consistência e qualidade no código.

## 📋 Sobre o Projeto

**Pesos Argentinos Hoje** - Conversor e monitor de câmbio em tempo real entre Pesos Argentinos (ARS) e Reais Brasileiros (BRL). Aplicação Next.js com TypeScript que consome APIs de câmbio.

## 🚀 Comandos Essenciais

### Desenvolvimento
```bash
npm run dev          # Inicia servidor de desenvolvimento
```

### Build e Deploy
```bash
npm run build        # Build do projeto Next.js
npm run start        # Inicia servidor de produção
npm run pages:build  # Build para Cloudflare Pages
```

### Qualidade de Código
```bash
npm run lint         # Executa ESLint para verificar código
```

### Testes
*Nota: O projeto não possui configuração de testes automatizados no momento.*

## 🎯 Estrutura do Projeto

```
app/                    # Aplicação Next.js (App Router)
├── _components/        # Componentes React reutilizáveis
│   ├── (calculadora)/  # Componentes da calculadora
│   ├── (moedas)/       # Componentes de exibição de cotações
│   └── store/          # Gerenciamento de estado (Zustand)
├── api/                # Rotas de API
├── (blog)/             # Páginas do blog
└── page.tsx           # Página principal

public/                # Arquivos estáticos
extension/             # Extensão para navegador
```

## 📝 Convenções de Código

### TypeScript
- Use TypeScript estrito (`strict: true` no tsconfig)
- Defina tipos explícitos para props, estados e retornos de função
- Use interfaces para objetos complexos
- Evite `any` - prefira tipos específicos ou `unknown`

### Imports
```typescript
// Ordem recomendada:
1. Bibliotecas externas (React, Next.js, etc.)
2. Bibliotecas internas
3. Componentes
4. Estilos
5. Tipos/Interfaces

// Exemplo:
import { useState, useEffect } from "react";
import Image from "next/image";
import useFetch from '../../useFetch';
import style from './calculadora.module.css';
```

### Nomenclatura

#### Componentes React
- Use PascalCase para nomes de componentes
- Nome do arquivo deve corresponder ao nome do componente
- Use `.tsx` para componentes com JSX, `.ts` para lógica pura

```typescript
// Bom
Calculadora.tsx
DolarBlue.tsx
useFetch.ts

// Ruim
calculadora.tsx
dolar-blue.tsx
use-fetch.ts
```

#### Funções e Variáveis
- Use camelCase para funções, variáveis e hooks
- Prefixe hooks personalizados com `use`
- Use nomes descritivos que indiquem a função

```typescript
// Bom
const [exchangeRate, setExchangeRate] = useState<number>(0);
function calculateConversion() { ... }
const useFetch = () => { ... }

// Ruim
const [er, setER] = useState(0);
function calc() { ... }
const fetchData = () => { ... }
```

#### Estilos CSS Modules
- Use camelCase para nomes de classes
- Prefixe com o nome do componente quando apropriado

```css
/* calculadora.module.css */
.contentValores { ... }
.valoresFinais { ... }
.title2 { ... }
```

### Componentes React

#### Estrutura de Componentes
1. Importações
2. Definição de tipos/interfaces
3. Componente principal
4. Hooks (useState, useEffect, etc.)
5. Lógica do componente
6. JSX/TSX
7. Exportação

```typescript
'use client';

import { useState, useEffect } from "react";
import style from './componente.module.css';

type Props = {
  valor: number;
  moeda: string;
};

export default function Componente({ valor, moeda }: Props) {
  const [dados, setDados] = useState(null);
  
  useEffect(() => {
    // Lógica de efeito
  }, []);
  
  return (
    <div className={style.container}>
      {/* Conteúdo */}
    </div>
  );
}
```

#### Componentes Client vs Server
- Use `'use client';` no topo para componentes interativos
- Componentes sem interatividade podem ser Server Components por padrão
- Separe lógica de apresentação da lógica de negócio

### Gerenciamento de Estado

#### Estado Local
- Use `useState` para estado simples do componente
- Use `useEffect` para side effects (fetch, subscriptions)

#### Estado Global
- O projeto usa **Zustand** para estado global
- Siga o padrão existente em `app/_components/store/`
- Crie stores específicas por domínio

### Fetch de Dados

#### Custom Hook useFetch
- Use o hook `useFetch` personalizado para requisições HTTP
- Localizado em `app/useFetch.ts`
- Retorna `{ data, loading, error }`

```typescript
const { data, loading, error } = useFetch('https://api.example.com/data');
```

#### APIs Consumidas
- **Dólar Blue**: `https://dolarapi.com/v1/dolares/blue`
- **Dólar Cripto**: `https://criptoya.com/api/{exchange}/usdt/ars/0.1`
- Trate erros de API adequadamente
- Adicione estados de loading e error

### Tratamento de Erros

#### Em Componentes
- Sempre trate estados de loading e error
- Use fallback UI para erros
- Log erros no console para desenvolvimento

```typescript
if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage message={error} />;
```

#### Em Requisições
- Valide respostas da API
- Use try/catch para operações assíncronas
- Forneça mensagens de erro amigáveis ao usuário

### Formatação de Valores

#### Moedas
- Use `toLocaleString('pt-BR')` para formatar números
- Arredonde valores monetários apropriadamente
- Mantenha consistência nas casas decimais

```typescript
const valorFormatado = Math.ceil(valor).toLocaleString('pt-BR');
```

### Performance

#### Otimizações Next.js
- Use `Image` do Next.js para otimização de imagens
- Implemente lazy loading quando apropriado
- Use `dynamic` import para code splitting

#### React
- Use `useMemo` e `useCallback` para otimizações
- Evite re-renders desnecessários
- Separe componentes grandes em menores

## 🔧 Configurações do Projeto

### TypeScript (tsconfig.json)
- Target: ES5
- Strict mode habilitado
- Path alias `@/*` configurado para `./*`
- JSX: preserve

### ESLint
- Configuração padrão do Next.js (`next/core-web-vitals`)
- Executar lint antes de commits
- Corrigir problemas automaticamente quando possível

### Next.js
- App Router (não Pages Router)
- Static Generation e Server-side Rendering
- API Routes para endpoints backend

## 🐛 Depuração

### Problemas Comuns
1. **Erros de TypeScript**: Verifique tipos e interfaces
2. **Erros de Build**: Execute `npm run lint` para identificar problemas
3. **Problemas de API**: Verifique CORS e endpoints
4. **Erros de Estado**: Use React DevTools para inspecionar estado

### Logs
- Use `console.log` para desenvolvimento (remova antes do commit)
- Use React DevTools para inspeção de componentes
- Use Network tab para debug de requisições

## 📚 Boas Práticas Específicas do Projeto

### Cálculos Monetários
- Sempre valide entradas do usuário
- Use precisão adequada para cálculos
- Formate resultados para exibição

### Componentes de Câmbio
- Mantenha consistência na exibição de valores
- Atualize dados em intervalos apropriados
- Forneça feedback visual durante atualizações

### Responsividade
- Todos os componentes devem ser responsivos
- Teste em diferentes tamanhos de tela
- Use CSS Modules para estilos

## 🤝 Contribuição

### Commits
- Use mensagens descritivas em português
- Referencie issues quando aplicável
- Commits pequenos e focados

### Pull Requests
- Descreva as mudanças claramente
- Inclua screenshots para mudanças visuais
- Certifique-se de que o build passa

### Código Review
- Revise para consistência com este guia
- Verifique tipos TypeScript
- Teste funcionalidades manualmente

## 🆘 Suporte

### Quando Pedir Ajuda
1. APIs externas não estão respondendo
2. Erros de build não resolvidos pelo lint
3. Problemas de deploy no Cloudflare
4. Decisões de arquitetura complexas

### Recursos
- Documentação Next.js: https://nextjs.org/docs
- Documentação TypeScript: https://www.typescriptlang.org/docs/
- API Dólar: https://dolarapi.com/
- API CriptoYa: https://criptoya.com/

---

*Última atualização: Março 2026*  
*Mantenha este documento atualizado conforme o projeto evolui.*