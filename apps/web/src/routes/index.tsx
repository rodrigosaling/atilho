import { createFileRoute, Link } from '@tanstack/react-router';
import { DollarSign } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-md bg-amber-200">
            <DollarSign size={32} />
          </div>
          <h1 className="text-xl font-bold">Atilho</h1>
        </div>
        <div>
          <p>
            Controle o seu dinheiro (e da sua família, colegas de quarto, etc.)
            de forma tranquila.
          </p>

          <p>
            Faça seu <Link to="/login">login</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
