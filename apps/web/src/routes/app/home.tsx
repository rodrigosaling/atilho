import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/app/home')({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="p-2">This is home</div>
      <button className="rounded bg-blue-500 px-4 py-2 text-base text-white">
        botão
      </button>
    </>
  );
}
