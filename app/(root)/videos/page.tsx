const AboutPage = () => {
  return (
    <div className="flex flex-col gap-12 pb-16">
      <section className="w-full">
        <div
          className="relative w-full overflow-hidden rounded-none md:rounded-xl shadow-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/vDO_wtWOsZg?si=sFkXbU8evPzEOw-w"
            title="Andy at Kampong Seila, Cambodia"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
      <section className="wrapper grid gap-8 md:grid-cols-2">
        <video
          className="w-full h-full rounded-xl shadow-lg object-cover aspect-video"
          src="/images/about_us_001.mp4"
          controls
          playsInline
        />
        <video
          className="w-full h-full rounded-xl shadow-lg object-cover aspect-video"
          src="/images/about_us_002.mp4"
          controls
          playsInline
        />
      </section>
      <section className="w-full">
        <div
          className="relative w-full overflow-hidden rounded-none md:rounded-xl shadow-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/8OTSezNMdvI?si=M7iPgjsBzRKISOcF"
            title="Andy at Kampong Seila, Cambodia"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
