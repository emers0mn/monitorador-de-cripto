/**
 * Utilitários para testes do projeto
 */

// Dados mock para testes
export const mockDolarBlueData = {
  compra: 1180,
  venta: 1200,
  fecha: '2024-03-29T12:00:00.000Z',
};

export const mockDolarCriptoData = {
  totalBid: 1234.56,
  totalAsk: 1245.67,
  timestamp: Date.now(),
};

export const mockExchangeData = {
  binance: { totalBid: 1234.56, totalAsk: 1245.67 },
  lemoncash: { totalBid: 1235.67, totalAsk: 1246.78 },
  bitsoalpha: { totalBid: 1233.45, totalAsk: 1244.56 },
};

// Funções utilitárias
export const formatCurrency = (value: number): string => {
  return Math.ceil(value).toLocaleString('pt-BR');
};

export const calculateConversion = (
  value: number,
  rate: number,
  fromCurrency: string,
  toCurrency: string
): number => {
  if (fromCurrency === 'BRL' && toCurrency === 'ARS') {
    return value * rate;
  } else if (fromCurrency === 'ARS' && toCurrency === 'BRL') {
    return value / rate;
  }
  throw new Error('Conversão não suportada');
};

// Mock do fetch para testes
export const setupFetchMock = (
  url: string,
  responseData: any,
  options: { ok?: boolean; status?: number } = { ok: true, status: 200 }
) => {
  (global.fetch as jest.Mock).mockImplementation((requestUrl: string) => {
    if (requestUrl === url) {
      return Promise.resolve({
        ok: options.ok,
        status: options.status,
        json: () => Promise.resolve(responseData),
      });
    }
    return Promise.reject(new Error(`URL não mockada: ${requestUrl}`));
  });
};

// Mock do useFetch para testes de componentes
export const mockUseFetch = (
  data: any,
  loading: boolean = false,
  error: string | null = null
) => {
  return {
    data,
    loading,
    error,
  };
};

// Helper para simular delay
export const delay = (ms: number) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Validações comuns
export const validateCurrencyResponse = (data: any) => {
  expect(data).toHaveProperty('compra');
  expect(data).toHaveProperty('venta');
  expect(typeof data.compra).toBe('number');
  expect(typeof data.venta).toBe('number');
  expect(data.venta).toBeGreaterThanOrEqual(data.compra);
};

export const validateCryptoResponse = (data: any) => {
  expect(data).toHaveProperty('totalBid');
  expect(data).toHaveProperty('totalAsk');
  expect(typeof data.totalBid).toBe('number');
  expect(typeof data.totalAsk).toBe('number');
  expect(data.totalAsk).toBeGreaterThanOrEqual(data.totalBid);
};