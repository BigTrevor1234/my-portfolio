function IntroVideo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Meet Trevor
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
          Get to know the person behind the projects. Here's a quick introduction
          about who I am, what I do, and what I'm passionate about.
        </p>

        {/* Video */}
        <div className="max-w-xl mx-auto rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <video
            controls
            preload="metadata"
            className="w-full aspect-video object-cover"
          >
            <source src="/intro1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
}

export default IntroVideo;