import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="py-6 bg-gray-100">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Daledon Artworks</h1>
          <nav>
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </nav>
        </div>
      </header>
      <hr />
      <Outlet />
      <footer className="py-6 text-center text-gray-500">
        <p>&copy; 2024 Daledon Artworks. All rights reserved.</p>
      </footer>
      <TanStackRouterDevtools />
    </>
  ),
});
