import { useMutation } from '@tanstack/react-query';
import { login } from './login.api';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: login,
  });
};
