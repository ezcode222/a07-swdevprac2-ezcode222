type VenueDetail = {
  vid: string;
  name: string;
  image: string;
};

const venueData: Map<string, VenueDetail> = new Map([
  [
    "001",
    {
      vid: "001",
      name: "The Bloom Pavilion",
      image: "/img/bloom.jpg",
    },
  ],
  [
    "002",
    {
      vid: "002",
      name: "Spark Space",
      image: "/img/sparkspace.jpg",
    },
  ],
  [
    "003",
    {
      vid: "003",
      name: "The Grand Table",
      image: "/img/grandtable.jpg",
    },
  ],
]);

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venue = venueData.get(vid);

  if (!venue) {
    return <main className="p-8">Venue not found</main>;
  }

  return (
    <main className="p-8 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-6">
        <img
          src={venue.image}
          alt={venue.name}
          className="w-48 h-48 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold">{venue.name}</h1>
      </div>
    </main>
  );
}