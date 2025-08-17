import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRegister } from '../../services/auth';
import { registerSchema, type RegisterFormData } from '../../schemas/auth';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import auth2 from '../../assets/images/auth2.jpg';

export default function Register() {
  const navigate = useNavigate();
  const registerMutation = useRegister();
  
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data: RegisterFormData) => {
    registerMutation.mutate(
      data,
      {
        onSuccess: () => {
          toast.success('Account created successfully! Please login.');
          navigate('/login');
        },
        onError: (error: any) => {
          toast.error(error.response?.data?.message || 'Registration failed');
        }
      }
    );
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-black hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <Input
                variant="auth"
                type="text"
                placeholder="Username"
                {...register('username')}
                error={errors.username?.message}
              />

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
                disabled={registerMutation.isPending}
              >
                {registerMutation.isPending ? 'Creating account...' : 'Create account'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={auth2}
          alt="Authentication"
        />
      </div>
    </div>
  );
}