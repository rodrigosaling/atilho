import { Link, Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/app')({
  component: AppLayout,
});

export function AppLayout() {
  return (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/app/home" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/" className="[&.active]:font-bold">
          Exit
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
