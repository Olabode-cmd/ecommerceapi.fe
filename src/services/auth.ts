import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from './api';
import type { AuthRequest, RegisterRequest } from '../types';

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterRequest) =>
      api.post('/api/auth/register', data),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: AuthRequest) =>
      api.post('/api/auth/login', data),
  });
};

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: () => api.post('/api/auth/refresh'),
  });
};

export const useGetMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: () => api.get('/api/auth/me'),
  });
};