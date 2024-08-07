import { Link, Outlet } from "@tanstack/react-router";
import React from "react";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

export default function Layout() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <header className="sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center justify-between py-3">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Daledon Artworks
            </h1>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="block hover:text-gray-500 focus:text-gray-500 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <title>Menu</title>
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} pb-4 sm:flex sm:pb-0`}>
          <Link
            to="/"
            className="block px-2 py-1 font-semibold [&.active]:font-bold rounded hover:bg-gray-200"
          >
            Gallery
          </Link>
          <Link
            to="/writings"
            className="mt-1 block px-2 py-1 font-semibold [&.active]:font-bold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2"
          >
            Writings
          </Link>
          <Link
            to="/about"
            className="mt-1 block px-2 py-1 font-semibold [&.active]:font-bold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2"
          >
            About
          </Link>
        </div>
      </header>
      <Outlet />
      <footer className="py-6 text-center text-gray-500">
        <p>&copy; 2024 Daledon Artworks. All rights reserved.</p>
      </footer>
      <React.Suspense>
        <TanStackRouterDevtools />
      </React.Suspense>
    </>
  );
}
