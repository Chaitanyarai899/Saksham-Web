import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="text-rose-600">Saksham</span> Empowering People
            with Disabilities
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Something nice and catchy get the attention of the user something
            catchy and nice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/auth" className={buttonVariants()}>
              Get Started &rarr;
            </Link>
            <Button variant="ghost">Support our Cause</Button>
          </div>
        </div>
      </MaxWidthWrapper>

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

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/preview.png"
                    alt="Preview of video call feature"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
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
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-8 text-center py-5">
        <div className="flex flex-col-reverse sm:flex-row items-center">
          <div className="flex-shrink-0 w-full sm:w-1/2 mb-4 sm:mb-0">
            <Image
              src="/hero.png"
              alt="Description of the image"
              width={400}
              height={200}
              quality={100}
              className="rounded-md"
            />
          </div>

          <div className="w-full sm:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-right">
              Breaking Barriers, Building Opportunities
            </h2>
            <p className="text-lg text-gray-700 text-right">
              Saksham: Empowering Specially Abled Individuals is a
              groundbreaking initiative that aims to create a more inclusive
              society in India. We believe that everyone, regardless of their
              abilities, should have the opportunity to learn, communicate, and
              thrive. Through our programs and services, we provide support,
              resources, and empowerment to individuals with disabilities,
              enabling them to lead fulfilling lives.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-8 text-center">
        <h2 className="text-3xl font-bold text-center mb-4 py-8">
          Our Mission & Vision
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <h2 className="text-2xl font-bold mb-4 text-left">
            Empowering Specially Abled Individuals with Accessible Education,
            Community Support, and Skill Development
          </h2>
         
            <p className="text-sm text-gray-500 text-left">
              At Saksham, we are dedicated to building a society that is more
              inclusive by offering accessible education, community support, and
              skill development opportunities to people with disabilities. Our
              goal is to enable individuals of varying abilities to acquire
              knowledge, communicate effectively, and succeed.
            </p>
         
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-10">
          <div>
            <p className="text-lg font-bold mb-2 text-left">
              Accessible Education for All
            </p>
            <p className="text-gray-700 text-left">
              Our accessible education program ensures that individuals with
              disabilities have equal access to quality education, enabling them
              to reach their full potential.
            </p>
            <p className="text-rose-600 font-bold mt-2 cursor-pointer text-left">
              Learn More{" "}
            </p>
          </div>
          <div>
            <p className="text-lg font-bold mb-2 text-left">
              Community Support for Inclusion
            </p>
            <p className="text-gray-700 text-left">
              Through our community support initiatives, we foster an inclusive
              environment where individuals with disabilities feel supported,
              valued, and connected.
            </p>
            <p className="text-rose-600 font-bold mt-2 cursor-pointer text-left">
              Learn More{" "}
            </p>
          </div>
          <div>
            <p className="text-lg font-bold mb-2 text-left">
              Skill Development for Empowerment
            </p>
            <p className="text-gray-700 text-left">
              Our skill development programs equip specially abled individuals
              with the necessary skills and knowledge to enhance their
              employability and independence.
            </p>
            <p className="text-rose-600 font-bold mt-2 cursor-pointer text-left">
              Learn More{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-8 text-center">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Saksham?</AccordionTrigger>
            <AccordionContent className="text-left">
              Saksham: Empowering Specially Abled Individuals is a
              groundbreaking initiative aimed at creating a more inclusive
              society in India where everyone, regardless of their abilities,
              has the opportunity to learn, communicate, and thrive.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can I contribute?</AccordionTrigger>
            <AccordionContent className="text-left">
              There are many ways you can contribute to Saksham: Empowering
              Specially Abled Individuals. You can volunteer your time, donate
              funds, or spread awareness about the initiative.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Who can benefit from Saksham?</AccordionTrigger>
            <AccordionContent className="text-left">
              Saksham: Empowering Specially Abled Individuals is designed to
              benefit individuals with disabilities of all kinds. Our programs
              and resources are tailored to meet the unique needs of each
              individual.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How can i get involved?</AccordionTrigger>
            <AccordionContent className="text-left">
              Getting involved with Saksham: Empowering Specially Abled
              Individuals is easy. You can join our volunteer network,
              participate in fundraising events, or become a corporate partner.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Where is Saksham based?</AccordionTrigger>
            <AccordionContent className="text-left">
              Saksham: Empowering Specially Abled Individuals is based in Delhi,
              but our reach extends to individuals and communities across the
              country.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
