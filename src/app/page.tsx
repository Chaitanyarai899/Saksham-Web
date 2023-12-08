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
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Something nice and catchy get the attention of the user something
            catchy and nice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/kahi-jayenge" className={buttonVariants()}>
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
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-8 text-center">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Saksham?</AccordionTrigger>
            <AccordionContent>
            Saksham: Empowering Specially Abled Individuals is a groundbreaking initiative aimed at creating a more inclusive society in India where everyone, regardless of their abilities, has the opportunity to learn, communicate, and thrive.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can I contribute?</AccordionTrigger>
            <AccordionContent>
              There are many ways you can contribute to Saksham: Empowering Specially Abled Individuals. You can volunteer your time, donate funds, or spread awareness about the initiative.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Who can benefit from Saksham?</AccordionTrigger>
            <AccordionContent>
              Saksham: Empowering Specially Abled Individuals is designed to benefit individuals with disabilities of all kinds. Our programs and resources are tailored to meet the unique needs of each individual.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How can i get involved?</AccordionTrigger>
            <AccordionContent>
              Getting involved with Saksham: Empowering Specially Abled Individuals is easy. You can join our volunteer network, participate in fundraising events, or become a corporate partner.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Where is Saksham based?</AccordionTrigger>
            <AccordionContent>
              Saksham: Empowering Specially Abled Individuals is based in Delhi, but our reach extends to individuals and communities across the country.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
