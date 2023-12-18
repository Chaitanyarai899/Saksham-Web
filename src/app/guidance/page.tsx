const GuidancePage = () => {
  const videos = [
    {
      url: "https://www.youtube.com/embed/3SzazN2OrsQ?si=Qz-d2VOFm4SMlj3m",
      description:
        "Children with disabilities are among the most vulnerable in society, facing unique challenges that require specialized attention and protection. Ensuring their safety and rights is imperative for fostering an inclusive and supportive environment.",
    },
    {
      url: "https://www.youtube.com/embed/4WIP1VgPnco?si=qssg0KBqC20zBZfw",
      description:
        "'साक्षम' (Saksham), a meaningful word in Hindi, not only expresses an individual's condition but also calls for a shift in our mindset and perception. Changing the way we view disability is crucial, promoting inclusivity, equality, and empathy within our society. It's not just a challenge but an opportunity, offering everyone a chance to appreciate uniqueness and capability. Saksham signifies a celebration, urging us to embrace a perspective that sees everyone included in a rich and harmonious coexistence.",
    },
    {
      url: "https://www.youtube.com/embed/VtbYvVDItvg?si=90qb0mqOUQ-niw38",
      description:
        "Indian Sign Language (ISL) is a visual-gestural language used by the deaf community in India. It consists of hand movements, facial expressions, and body postures to convey meaning and communicate.",
    },
    {
      url: "https://www.youtube.com/embed/LpLM-8Uj1Bc?si=0Oj6aUBfMGfno_dS",
      description: `To express the sentence "I love to read books":

      Subject: Pointing to oneself using the appropriate sign for "I" in ISL.
      Verb: Using the sign for "love," which involves making a heart shape with both hands and bringing them closer to the chest.
      Object: Demonstrating the action of reading by miming holding a book and flipping its pages.
      `,
    },
  ];

  return (
    <div className="p-4">
      <div className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">
            JourneyMap: Guiding Parents and Guardians
          </h1>
          <p className="mt-4">
            Welcome to a supportive community for navigating the exceptional
            journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((video, index) => (
              <div key={index}>
                <div className="bg-white p-4 rounded shadow">
                  <iframe
                    height={315}
                    className="w-full"
                    src={video.url}
                    title={`Video ${index}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="ml-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8"></section>
        <section className="mb-8">
          <div className="text-center">
            <p className="text-lg">Supporting Your Differently-Abled Child</p>
            <p className="mt-4">
              Navigating the Unique Needs and Celebrating Every Milestone
            </p>
          </div>
        </section>
        <section className="mb-8">
          <div className="text-center">
            <p className="text-lg">
              As a parent or guardian, supporting a differently-abled child
              involves embracing uniqueness and providing tailored care.
            </p>
            <p className="mt-4">
              This guide is crafted to offer insights, resources, and strategies
              to navigate this journey effectively, ensuring your child's
              well-being and growth.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default GuidancePage;
