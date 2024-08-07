import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/writings")({
  component: Writings,
});

function Writings() {
  return <div className="p-2">Hello from Writings!</div>;
}
