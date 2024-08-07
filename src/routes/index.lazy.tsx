import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="py-8">
      <section id="home">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Welcome to Daledon Artworks
        </h2>
        <p className="text-gray-600">
          This is the home page content. You can add an introduction, featured
          artwork, or any other relevant information here.
        </p>
      </section>
    </main>
  );
}
