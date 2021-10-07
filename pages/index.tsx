import LocationMap from "../components/location";

function HomePage() {
  return (
    <main className="h-screen w-full flex flex-col items-center bg-main-pattern">
      <div className="w-full p-4 text-center">
        <h1 className="text-3xl font-bold tracking-wide block">Primeira 2006 - 14biz</h1>
        <h3 className="text-2xl font-medium tracking-wide block">CHURRASCO</h3>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 m-4 shadow">
        <h3 className="text-2xl font-medium tracking-wide block">Dia: 16/10</h3>
        <h3 className="text-2xl font-medium tracking-wide block">Local: Rancho do Savas - olha no mapa</h3>
        <h3 className="text-2xl font-medium tracking-wide block">Se possível, faz um PIX de $30 pra <strong>06839160920</strong></h3>
      </div>
      <div className="relative w-full h-full bg-red-200">
        <LocationMap />
      </div>
    </main>
  );
}

export default HomePage;
