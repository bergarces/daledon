import { createLazyFileRoute } from "@tanstack/react-router";
import Gallery from "../components/Gallery";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <Gallery />
    </main>
  );
}
