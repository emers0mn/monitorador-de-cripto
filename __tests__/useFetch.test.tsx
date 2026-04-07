import { renderHook, waitFor } from '@testing-library/react';
import useFetch from '../app/useFetch';

describe('useFetch Hook', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('deve retornar estado inicial de loading como true', () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: 'test' }),
    });

    const { result } = renderHook(() => useFetch('https://api.example.com/data'));
    
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('deve retornar dados quando a requisição é bem-sucedida', async () => {
    const mockData = { venta: 1200, compra: 1180 };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() => useFetch('https://dolarapi.com/v1/dolares/blue'));

    await waitFor(() => expect(result.current.loading).toBe(false));
    
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('deve retornar erro quando a requisição falha', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

    const { result } = renderHook(() => useFetch('https://api.example.com/data'));

    await waitFor(() => expect(result.current.loading).toBe(false));
    
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe('Failed to fetch data');
    expect(result.current.loading).toBe(false);
  });

  it('deve retornar erro genérico quando ocorre exceção', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => useFetch('https://api.example.com/data'));

    await waitFor(() => expect(result.current.loading).toBe(false));
    
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe('Network error');
    expect(result.current.loading).toBe(false);
  });

  it('deve fazer nova requisição quando a URL muda', async () => {
    const mockData1 = { venta: 1200 };
    const mockData2 = { venta: 1250 };
    
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockData1,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockData2,
      });

    const { result, rerender } = renderHook(
      ({ url }) => useFetch(url),
      { initialProps: { url: 'https://api.example.com/first' } }
    );

    await waitFor(() => expect(result.current.data).toEqual(mockData1));
    
    rerender({ url: 'https://api.example.com/second' });
    
    await waitFor(() => expect(result.current.data).toEqual(mockData2));
    
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
});