import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { DollarSign } from 'lucide-react';

export const Route = createFileRoute('/login')({
  component: Login,
});

function Login({ className, ...props }: React.ComponentProps<'div'>) {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-md bg-amber-200">
            <DollarSign size={32} />
          </div>
          <h1 className="text-xl font-bold">Atilho</h1>
        </div>
        <div className={cn('flex flex-col gap-6', className)} {...props}>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="text-center text-sm">
                  Don't have an account?{' '}
                  <a href="#" className="underline underline-offset-4">
                    Sign up
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <Button
                  type="button"
                  className="w-full"
                  onClick={() => {
                    navigate({ to: '/app/home' });
                  }}
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
          <div className="text-center text-xs text-balance text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
