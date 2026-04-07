# Guia de Testes - Pesos Argentinos Hoje

Este documento descreve a estrutura de testes do projeto e como executá-los.

## 🧪 Estrutura de Testes

```
__tests__/
├── api/
│   └── apiEndpoints.test.ts      # Testes para endpoints de API
├── components/
│   ├── Calculadora.test.tsx      # Testes do componente Calculadora
│   └── DolarBlue.test.tsx        # Testes dos componentes de cotações
├── tdd/
│   └── futureApiDotNet.test.ts   # Testes TDD para futura API .NET
├── utils/
│   └── testUtils.ts              # Utilitários para testes
└── useFetch.test.tsx             # Testes do hook useFetch
```

## 🚀 Comandos de Teste

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage

# Executar testes específicos
npm test -- --testPathPatterns=useFetch.test
npm test -- --testPathPatterns=components
npm test -- --testPathPatterns=api
```

## 📋 Tipos de Testes Implementados

### 1. Testes de Componentes React
- **Renderização**: Verifica se componentes renderizam corretamente
- **Interação**: Testa eventos de clique e entrada de dados
- **Estado**: Valida mudanças de estado e efeitos colaterais
- **Condições**: Testa estados de loading, error e dados vazios

### 2. Testes de Hooks Customizados
- **useFetch**: Testa estados de loading, dados e erro
- **Comportamento**: Valida re-renderizações com mudanças de dependências
- **Erros**: Testa tratamento de erros de rede e respostas inválidas

### 3. Testes de Integração com APIs
- **Contratos de API**: Valida estrutura de respostas de APIs externas
- **Endpoints**: Testa URLs e parâmetros esperados
- **Erros**: Valida tratamento de erros de API
- **Performance**: Testa timeouts e respostas em tempo razoável

### 4. Testes TDD para Futura API .NET
- **Especificação**: Define contrato que a API deve seguir
- **Endpoints**: Testa autenticação, conversão, cotações, configuração
- **Migração**: Garante compatibilidade com endpoints atuais
- **Segurança**: Testa rate limiting, autenticação, validações

## 🎯 Cobertura de Testes

### Componentes Testados
- ✅ `useFetch` - Hook personalizado para fetch de dados
- ✅ `DolarBlue` - Componente de exibição do dólar blue
- ✅ `DolarCripto` - Componente de exibição do dólar cripto
- ✅ `Calculadora` - Componente principal de conversão

### APIs Testadas
- ✅ Dólar Blue API (`dolarapi.com/v1/dolares/blue`)
- ✅ Dólar Cripto API (`criptoya.com/api/{exchange}/usdt/ars/0.1`)
- ✅ Futura API .NET (especificação TDD)

### Cenários de Teste
- ✅ Renderização inicial e estados de loading
- ✅ Conversão de valores (reais ↔ pesos)
- ✅ Formatação de valores monetários
- ✅ Tratamento de erros de rede
- ✅ Validação de entradas do usuário
- ✅ Compatibilidade com APIs externas

## 🔧 Configuração Técnica

### Dependências
```json
{
  "@testing-library/react": "^16.3.2",
  "@testing-library/jest-dom": "^6.9.1",
  "@testing-library/user-event": "^14.6.1",
  "jest": "^30.3.0",
  "jest-environment-jsdom": "^30.3.0"
}
```

### Configuração do Jest
- Ambiente: `jsdom` (para testes de React)
- Setup: `jest.setup.js` (configurações globais)
- Mocks: Next.js Image, Next.js Navigation, fetch global
- Coverage: 70% mínimo para branches, functions, lines, statements

## 📝 Padrões de Teste

### Nomenclatura
```typescript
// Padrão: describe > it
describe('Componente', () => {
  it('deve fazer algo', () => {});
  it('deve lidar com erro quando...', () => {});
});

// Cenários complexos
describe('quando dados são carregados', () => {
  it('deve exibir valor formatado', () => {});
});

describe('quando ocorre erro', () => {
  it('deve exibir mensagem de erro', () => {});
});
```

### Organização
1. **Arrange**: Configurar mocks e dados de teste
2. **Act**: Executar ação sendo testada
3. **Assert**: Verificar resultados esperados

### Mocks Comuns
```typescript
// Mock do fetch
global.fetch = jest.fn();

// Mock do useFetch
jest.mock('../../app/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock do Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));
```

## 🐛 Solução de Problemas

### Problemas Comuns

1. **Warning do act()**
   ```bash
   Warning: An update to TestComponent inside a test was not wrapped in act(...)
   ```
   **Solução**: Use `waitFor` ou `act` do React Testing Library

2. **Module not found**
   ```bash
   Cannot find module '@babel/preset-env'
   ```
   **Solução**: Instale dependências do Babel ou use Next.js Jest config

3. **Haste module naming collision**
   ```bash
   jest-haste-map: Haste module naming collision
   ```
   **Solução**: Ignore diretórios problemáticos no `jest.config.js`

### Debugging
```bash
# Executar teste específico com verbose
npm test -- --testPathPatterns=Calculadora.test --verbose

# Executar com debugger
node --inspect-brk node_modules/.bin/jest --runInBand --testPathPatterns=useFetch.test
```

## 🔄 Integração Contínua

### GitHub Actions (Exemplo)
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
      - run: npm run test:coverage
```

### Pré-commit Hooks (Recomendado)
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test -- --passWithNoTests"
    }
  }
}
```

## 🎯 Próximos Passos

### Testes a Implementar
- [ ] Testes de integração E2E (Cypress/Playwright)
- [ ] Testes de performance (Lighthouse CI)
- [ ] Testes de acessibilidade (axe-core)
- [ ] Testes de snapshot para componentes UI

### Melhorias
- [ ] Aumentar cobertura para 80%+
- [ ] Adicionar testes para componentes restantes
- [ ] Implementar testes para API routes do Next.js
- [ ] Adicionar testes para a extensão do navegador

## 📚 Recursos

- [Documentação Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing)
- [Testing React Hooks](https://react-hooks-testing-library.com/)

---

*Última atualização: Março 2026*  
*Mantenha os testes atualizados conforme o projeto evolui.*