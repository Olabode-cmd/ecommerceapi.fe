import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from './api';

export interface CreateProductRequest {
  name: string;
  price: number;
  description?: string;
  categoryId: string;
  tags?: string[];
  image?: string;
}

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => api.get('/api/products'),
  });
};

export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => api.get(`/api/products/${id}`),
    enabled: !!id,
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateProductRequest) =>
      api.post('/api/products', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};