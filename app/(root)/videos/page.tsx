import { Play } from "lucide-react";

const VideosPage = () => {
  const featuredVideo = {
    title: "Discover Andy Oud - Premium Cambodian Fragrances",
    description: "Experience the essence of traditional craftsmanship",
    embedUrl: "https://www.youtube.com/embed/vDO_wtWOsZg?si=sFkXbU8evPzEOw-w",
  };

  const youtubeVideos = [
    {
      title: "Behind the Scenes - Kampong Seila",
      description: "Journey through our traditional manufacturing process",
      embedUrl: "https://www.youtube.com/embed/0XvQZDw3o_s?si=x1fKsQD4vgM4alW6",
      thumbnail: "https://img.youtube.com/vi/0XvQZDw3o_s/maxresdefault.jpg",
    },
    {
      title: "Crafting Excellence",
      description: "The art of creating premium oud fragrances",
      embedUrl: "https://www.youtube.com/embed/8OTSezNMdvI?si=M7iPgjsBzRKISOcF",
      thumbnail: "https://img.youtube.com/vi/8OTSezNMdvI/maxresdefault.jpg",
    },
  ];

  const localVideos = [
    {
      title: "Our Story - Part 1",
      description:
        "Warmest welcomeing smile waiting just to serve you at our store.",
      src: "/images/about_us_001.mp4",
    },
    {
      title: "Our Story - Part 2",
      description:
        "Continuing the tradition of excellence to the modern world.",
      src: "/images/about_us_002.mp4",
    },
  ];

  return (
    <div className="min-h-screen pb-16">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="h1-bold mb-4 text-center">Video Gallery</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of videos showcasing our craftsmanship,
          heritage, and the art of creating premium oud fragrances.
        </p>
      </div>

      {/* Featured Video Section */}
      <section className="mb-16">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative">
            <div className="bg-card rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="relative w-full overflow-hidden"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={featuredVideo.embedUrl}
                  title={featuredVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-6 bg-card">
                <h2 className="h2-bold mb-2">{featuredVideo.title}</h2>
                <p className="text-muted-foreground">
                  {featuredVideo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="h2-bold mb-2">Featured Stories</h2>
          <p className="text-muted-foreground">Dive deeper into our world</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {youtubeVideos.map((video, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-5 bg-card">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Local Videos Section */}
      <section className="mb-8">
        <div className="mb-8">
          <h2 className="h2-bold mb-2">Our Location Features</h2>
          <p className="text-muted-foreground">
            Exclusive direct-service content
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {localVideos.map((video, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative aspect-video bg-black">
                <video
                  className="w-full h-full object-cover"
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <div className="p-5 bg-card">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VideosPage;
