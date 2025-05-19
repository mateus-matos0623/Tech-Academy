import CarrouselInfo from "./_components/carrousel";

export default function Courses() {
  return (
    <div className="space-y-8 mt-20 p-6">
      <h2 className="text-2xl font-semibold tracking-tight md:ml-2 ml-3">
        Cursos em alta &#128293;
      </h2>
      <CarrouselInfo />
    </div>
  );
}