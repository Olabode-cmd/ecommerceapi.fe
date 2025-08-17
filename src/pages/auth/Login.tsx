import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLogin } from '../../services/auth';
import { loginSchema, type LoginFormData } from '../../schemas/auth';
import { sanitizeFormData } from '../../utils/sanitize';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import auth from '../../assets/images/auth.jpg';

export default function Login() {
  const navigate = useNavigate();
  const loginMutation = useLogin();
  
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange'
  });

  const onSubmit = (data: LoginFormData) => {
    const sanitizedData = sanitizeFormData(data);
    loginMutation.mutate(
      sanitizedData,
      {
        onSuccess: (response) => {
          const { accessToken, refreshToken } = response.data;
          sessionStorage.setItem('accessToken', accessToken);
          sessionStorage.setItem('refreshToken', refreshToken);
          
          toast.success('Login successful!');
          navigate('/');
          window.location.reload();
        },
        onError: (error: any) => {
          toast.error(error.response?.data?.message || 'Login failed');
        }
      }
    );
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-black hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <Input
                variant="auth"
                type="email"
                placeholder="Email address"
                {...register('email')}
                error={errors.email?.message}
              />

              <Input
                variant="auth"
                type="password"
                placeholder="Password"
                {...register('password')}
                error={errors.password?.message}
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={!isValid || loginMutation.isPending}
              >
                {loginMutation.isPending ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={auth}
          alt="Authentication"
        />
      </div>
    </div>
  );
}