const Locations = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-16">
      <div className="grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-start mb-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Opening Event
          </p>
          <h1 className="text-4xl font-bold leading-tight">
            Grand Opening Sale <br />
            Dubai &rarr; Global Village
          </h1>
          <p className="text-lg text-muted-foreground">
            Celebrate our Dubai launch at Global Village. Exclusive opening-day
            offers, live demos, and limited drops—all in one spectacular
            evening.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Venue: Global Village, Asian Road, Shop #9</li>
            <li>• Perks: Early-bird bundles, giveaways, and meet-the-team</li>
          </ul>
        </div>
        <div className="w-full h-full">
          <video
            className="w-full h-full rounded-xl shadow-lg object-cover aspect-video"
            src="/images/andyoud_store.MOV"
            controls
            playsInline
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8">Our Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Cambodia</h2>
          <p>ANDYOUD (CAMBODIA) CO .LTD, TOUL SNGKE OFFICE</p>
          <p>Phone: +66-86 037 1105</p>
          <p>Email: andy_international@gmail.com || cambodia@andyoud.com</p>
        </div>
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Dubai, United Arab Emirates
          </h2>
          <p>GLOBAL VILLAGE, ASIAN ROAD, SHOP #9</p>
          <p>Phone: +966 58-2344-997</p>
          <p>Email: andy_international@gmail.com</p>
        </div>
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Bangkok, THAILAND</h2>
          <p>4/13 SUKHUMVIT 5 WATTANA</p>
          <p>Phone: +66-86 037 1105</p>
          <p>Email: andy_international@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Locations;
