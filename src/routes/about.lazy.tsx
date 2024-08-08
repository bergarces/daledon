import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <img
            src={"artist.jpg"}
            alt="Artist Paul Don"
            className="w-full h-auto max-h-[768px] object-cover rounded-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About the Artist
          </h2>
          <p className="text-gray-600 mb-4">
            Paul Don is a self-taught painter and sculptor. Impressed by his
            grandfather's talent for 'all things artistic', he went on to
            develop a skill and understanding of various artists, including such
            diverse people as Vermeer, Van Gogh, Matisse, Picasso and many
            others. Having selected some important styles and form from his
            mentors, he began to develop his own style; having a particular
            interest in exteriors with reflected images in rainwater puddles.
          </p>
          <p className="text-gray-600 mb-4">
            Paul believes in affordable art within the reach of genuine people
            who are drawn by interesting images both traditional and abstract.
            As Paul has quoted, 'A lifetime is nowhere near long enough to reach
            perfection'. Most famous painters have already realised that! Please
            browse the gallery and enjoy the diverse colour and form of the
            paintings. Paul is always happy to create an idea on canvas with no
            obligation to purchase.
          </p>
          <p className="text-gray-600">
            You can contact Paul Don on{" "}
            <a
              href="mailto:willshrh@gmail.com"
              className="text-blue-500 hover:text-blue-700"
            >
              willshrh@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
