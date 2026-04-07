import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Calculadora from '../../app/_components/(calculadora)/Calculadora';

// Mock do fetch global
global.fetch = jest.fn();

describe('Calculadora Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o componente com campos de entrada', () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ totalBid: 1200 }),
    });

    render(<Calculadora />);
    
    expect(screen.getByPlaceholderText(/digite o valor em reais/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/digite o valor em pesos/i)).toBeInTheDocument();
    expect(screen.getByText(/converter reais para pesos/i)).toBeInTheDocument();
    expect(screen.getByText(/converter pesos para reais/i)).toBeInTheDocument();
  });

  it('deve buscar cotação inicial ao montar', async () => {
    const mockData = { totalBid: 1200 };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    render(<Calculadora />);
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'https://criptoya.com/api/lemoncash/usdt/ars/0.1'
      );
    });
  });

  it('deve converter reais para pesos argentinos', async () => {
    const mockData = { totalBid: 1200 };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    render(<Calculadora />);
    
    // Aguarda a cotação carregar
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
    
    // Insere valor em reais
    const inputReais = screen.getByPlaceholderText(/digite o valor em reais/i);
    fireEvent.change(inputReais, { target: { value: '100' } });
    
    // Clica para converter
    const converterReaisBtn = screen.getByText(/converter reais para pesos/i);
    fireEvent.click(converterReaisBtn);
    
    // Verifica o resultado (100 * 1200 = 120000)
    await waitFor(() => {
      expect(screen.getByText(/120\.000/i)).toBeInTheDocument();
    });
  });

  it('deve converter pesos argentinos para reais', async () => {
    const mockData = { totalBid: 1200 };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    render(<Calculadora />);
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
    
    // Insere valor em pesos
    const inputPesos = screen.getByPlaceholderText(/digite o valor em pesos/i);
    fireEvent.change(inputPesos, { target: { value: '120000' } });
    
    // Clica para converter
    const converterPesosBtn = screen.getByText(/converter pesos para reais/i);
    fireEvent.click(converterPesosBtn);
    
    // Verifica o resultado (120000 / 1200 = 100)
    await waitFor(() => {
      expect(screen.getByText(/100/i)).toBeInTheDocument();
    });
  });

  it('deve lidar com valores decimais corretamente', async () => {
    const mockData = { totalBid: 1234.56 };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    render(<Calculadora />);
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
    
    const inputReais = screen.getByPlaceholderText(/digite o valor em reais/i);
    fireEvent.change(inputReais, { target: { value: '50.75' } });
    
    const converterReaisBtn = screen.getByText(/converter reais para pesos/i);
    fireEvent.click(converterReaisBtn);
    
    // 50.75 * 1234.56 = 62638.92 ≈ 62639
    await waitFor(() => {
      expect(screen.getByText(/62\.639/i)).toBeInTheDocument();
    });
  });

  it('deve exibir zero quando o valor de entrada é zero', async () => {
    const mockData = { totalBid: 1200 };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    render(<Calculadora />);
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
    
    const inputReais = screen.getByPlaceholderText(/digite o valor em reais/i);
    fireEvent.change(inputReais, { target: { value: '0' } });
    
    const converterReaisBtn = screen.getByText(/converter reais para pesos/i);
    fireEvent.click(converterReaisBtn);
    
    await waitFor(() => {
      expect(screen.getByText(/0/i)).toBeInTheDocument();
    });
  });

  it('deve lidar com erro na busca da cotação', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    render(<Calculadora />);
    
    // O componente deve lidar com o erro sem quebrar
    await waitFor(() => {
      expect(screen.getByPlaceholderText(/digite o valor em reais/i)).toBeInTheDocument();
    });
  });

  it('deve alternar ícones de conversão', async () => {
    const mockData = { totalBid: 1200 };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    render(<Calculadora />);
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
    
    // Verifica ícone inicial
    const icon1 = screen.getByAltText(/ícone de conversão 1/i);
    expect(icon1).toBeInTheDocument();
    
    // Clica para converter reais para pesos
    const converterReaisBtn = screen.getByText(/converter reais para pesos/i);
    fireEvent.click(converterReaisBtn);
    
    // O ícone deve mudar após a conversão
    await waitFor(() => {
      expect(screen.getByAltText(/ícone de conversão 2/i)).toBeInTheDocument();
    });
  });
});