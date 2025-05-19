import CarrouselInfo from "./_components/carrousel";

export default function Blog() {
  return (
    <div className="space-y-4 mt-20 p-6">
      <h2 className="text-2xl font-semibold tracking-tight md:ml-2 ml-4">
        Últimos artigos
      </h2>
      <CarrouselInfo />
    </div>
  );
}