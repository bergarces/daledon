import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/writings")({
  component: Writings,
});

function Writings() {
  return <section className="py-16 lg:py-20">Work in progress</section>;
}
