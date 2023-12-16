import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const features = [
  {
    feature_name: "Sign Language Supported Meet",
    link: "/home",
  },
  {
    feature_name: "Sign Language Practice Platform",
    link: "/learn",
  },
  {
    feature_name: "Accessible Content Repository",
    link: "/learn-gpt",
  },
  {
    feature_name: "Assistive Technology Integration",
    link: "/",
  },
  {
    feature_name: "Adaptive Learning Paths",
    link: "/",
  },
  {
    feature_name: "Community Engagement Portal",
    link: "/",
  },

  {
    feature_name: "Real-time Progress Tracking",
    link: "/",
  },
  {
    feature_name: "Try this exclusive tool about Braille",
    link: "/",
  },
  {
    feature_name: "Interactive Learning Tools",
    link: "/",
  },
  {
    feature_name: "Accessible Assessments",
    link: "/",
  },
  {
    feature_name: "Accessibility Standards Adherence",
    link: "/",
  },
];

const Page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>
        <div className="my-16">
          <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl my-4">
            Explore Our Exciting Features
          </h3>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-1">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                className="p-4 bg-rose-600 hover:bg-primary/90 rounded-lg shadow"
              >
                <h3 className="text-primary-foreground font-semibold mb-2">
                  {feature.feature_name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className="text-center my-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Personalized Mentor Support
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Select a mentor from a pool of mentors, experts & get 1-on-1
            mentorship!
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-between sm:flex-row sm:justify-center">
          <div className="w-full flex flex-row justify-between sm:max-w-md">
            <Link
              className={cn(
                buttonVariants(),
                "flex flex-row justify-center gap-2"
              )}
              href="/search-mentor"
            >
              <span className="">
                <Search className="h-4 w-4" />
              </span>{" "}
              Find A Mentor
            </Link>
            <Button variant="ghost" className="border border-rose-600">
              Become A Mentor
            </Button>
          </div>
          <Image
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/657998c6eb87f_frame_1000013453_2.png?d=2360x672"
            alt="mentor"
            width={2360}
            height={672}
          />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
