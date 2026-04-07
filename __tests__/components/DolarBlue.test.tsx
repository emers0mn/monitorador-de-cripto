import { render, screen, waitFor } from '@testing-library/react';
import { DolarBlue, DolarCripto } from '../../app/_components/(moedas)/dolarBlue';

// Mock do useFetch
jest.mock('../../app/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

import useFetch from '../../app/useFetch';

describe('Componentes de Cotações', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('DolarBlue Component', () => {
    it('deve exibir loading enquanto carrega dados', () => {
      (useFetch as jest.Mock).mockReturnValue({
        data: null,
        loading: true,
        error: null,
      });

      render(<DolarBlue />);
      
      // Verifica se o componente de loading está presente
      expect(screen.getByText(/carregando/i)).toBeInTheDocument();
    });

    it('deve exibir cotação do dólar blue quando dados são carregados', async () => {
      const mockData = { venta: 1250.50 };
      (useFetch as jest.Mock).mockReturnValue({
        data: mockData,
        loading: false,
        error: null,
      });

      render(<DolarBlue />);
      
      // Verifica se o valor formatado está presente
      expect(screen.getByText('1.251')).toBeInTheDocument();
    });

    it('deve exibir mensagem de erro quando ocorre falha', () => {
      (useFetch as jest.Mock).mockReturnValue({
        data: null,
        loading: false,
        error: 'Erro na API',
      });

      render(<DolarBlue />);
      
      expect(screen.getByText(/erro ao carregar dados/i)).toBeInTheDocument();
      expect(screen.getByText(/erro na api/i)).toBeInTheDocument();
    });

    it('deve exibir "Dados indisponíveis" quando não há dados', () => {
      (useFetch as jest.Mock).mockReturnValue({
        data: null,
        loading: false,
        error: null,
      });

      render(<DolarBlue />);
      
      expect(screen.getByText(/dados indisponíveis/i)).toBeInTheDocument();
    });
  });

  describe('DolarCripto Component', () => {
    it('deve exibir loading enquanto carrega dados', () => {
      (useFetch as jest.Mock).mockReturnValue({
        data: null,
        loading: true,
        error: null,
      });

      render(<DolarCripto />);
      
      expect(screen.getByText(/carregando/i)).toBeInTheDocument();
    });

    it('deve exibir cotação do dólar cripto quando dados são carregados', async () => {
      const mockData = { totalBid: 1245.75 };
      (useFetch as jest.Mock).mockReturnValue({
        data: mockData,
        loading: false,
        error: null,
      });

      render(<DolarCripto />);
      
      expect(screen.getByText('1.246')).toBeInTheDocument();
    });

    it('deve usar a exchange binance por padrão', () => {
      (useFetch as jest.Mock).mockReturnValue({
        data: { totalBid: 1245.75 },
        loading: false,
        error: null,
      });

      render(<DolarCripto />);
      
      expect(useFetch).toHaveBeenCalledWith(
        'https://criptoya.com/api/binance/usdt/ars/0.1'
      );
    });

    it('deve exibir mensagem de erro quando ocorre falha', () => {
      (useFetch as jest.Mock).mockReturnValue({
        data: null,
        loading: false,
        error: 'Falha na conexão',
      });

      render(<DolarCripto />);
      
      expect(screen.getByText(/erro ao carregar dados/i)).toBeInTheDocument();
      expect(screen.getByText(/falha na conexão/i)).toBeInTheDocument();
    });
  });

  it('deve formatar valores monetários corretamente', () => {
    const mockData = { venta: 1234.56 };
    (useFetch as jest.Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(<DolarBlue />);
    
    // Math.ceil(1234.56) = 1235, formatado como "1.235"
    expect(screen.getByText('1.235')).toBeInTheDocument();
  });
});