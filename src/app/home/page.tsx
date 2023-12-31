"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.number().min(10, {
    message: "Your phone number must contain 10 digits",
  }),
  email: z.string().email({
    message: "Enter a Valid Email",
  }),
  expertise: z.string().min(1, {
    message: "Enter an Expertise",
  }),
});

const ngoFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Enter a Valid Email",
  }),
  phone: z.number().min(10, {
    message: "Your phone number must contain 10 digits",
  }),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

function onNGOSubmit(values: z.infer<typeof ngoFormSchema>) {
  // Do something with the NGO form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

function learn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: undefined,
      email: "",
      expertise: "",
    },
  });

  const ngoForm = useForm<z.infer<typeof ngoFormSchema>>({
    resolver: zodResolver(ngoFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: undefined,
    },
  });

  return (
    <>
      <div className="p-2 flex flex-row h-[60vh] mb-20">
        <div className="w-[50%]">
          <div className="py-auto px-auto my-auto flex flex-col ">
            <div className="py-auto px-auto mx-auto my-[15vh] text-5xl font-bold">
              Enspire. Empower.
              <div className="my-2">Educate.</div>
              <div className="font-normal mt-3 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                It's not about being Disabled,
              </div>
              <div className="font-normal mt-1 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                It's about being सaksham
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex flex-row justify-center my-13">
            <div className="flex flex-col">
              <Image
                src="/diasbledpeople.png"
                alt="Preview of video call feature"
                width={250}
                height={30}
                quality={100}
                className="rounded-md items-center "
              />
              <Image
                src="/handsignwomen.png"
                alt="Preview of video call feature"
                width={200}
                height={100}
                quality={100}
                className="rounded-md mx-auto items-center "
              />
            </div>
            <div className="flex flex-col m-5">
              <Image
                src="/empower.png"
                alt="Preiew of video call feature"
                width={200}
                height={100}
                quality={100}
                className="rounded-md mx-auto items-center "
              />
              <Image
                src="/enspire.png"
                alt="Preview of video call feature"
                width={200}
                height={100}
                quality={100}
                className="rounded-md mx-auto items-center "
              />
              <Image
                src="/educate.png"
                alt="Preview of video call feature"
                width={200}
                height={100}
                quality={100}
                className="rounded-md mx-auto items-center "
              />
            </div>
            <div className="flex flex-col"></div>
          </div>
        </div>
      </div>

      <div className="h-5 ">
        <div className="w-fit rounded-2xl mx-auto bg-[#e6e6e6]">
          <div className=" flex flex-row p-4">
            <div className="p-1 ">
              <div className="text-4xl font-semibold mt-9  ml-3 pr-[6vw]">
                Learn Beyond{" "}
              </div>

              <div className="text-4xl font-semibold  ml-3 mr-10">
                any Restriction
              </div>
              <div className="text-xl font-normal mr-10 mt-9 ml-2 ">
                We Provide you with the Tools you need and the benefits you
                deserve !
              </div>
              <div className="text-xl font-normal mr-10 mt-1 ml-2 ">
                To facilitate inclusions and make everyone Saksham.
              </div>

              <div className="flex flex-row mt-7">
                <Button className="bg-transparent mt-5 text-black mr-1 rounded-3xl w-fit border border-black">
                  <Image
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/mentor-1-499019.png?f=webp&w=256"
                    alt="Preview of video call feature"
                    width={40}
                    height={100}
                    quality={100}
                    className="rounded-3xl p-1 mr-2   "
                  />
                  Get a Mentor
                </Button>
                <Button className="bg-transparent mt-5 text-black mx-1 rounded-3xl w-fit border border-black">
                  <Image
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/about-us-2840081-2359589.png?f=webp&w=256"
                    alt="Preview of video call feature"
                    width={40}
                    height={100}
                    quality={100}
                    className="rounded-3xl p-1 mr-2   "
                  />
                  About us
                </Button>
              </div>
              <Button className="bg-transparent my-3 text-black rounded-3xl w-fit px-4 border border-black">
                <Image
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/investment-idea-1554251-1317258.png?f=webp&w=256"
                  alt="Preview of video call feature"
                  width={40}
                  height={100}
                  quality={100}
                  className="rounded-3xl p-1 mr-2   "
                />
                Support us
              </Button>
            </div>
            <div className="p-1">
              <Image
                src="/educated.png"
                alt="Preview of video call feature"
                width={380}
                height={100}
                quality={100}
                className="rounded-3xl mr-[1vw] items-center "
              />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 mt-[68vh] ">
        <div className="flex flex-col justify-center mt-2">
          <div className="font-semibold font-mono tracking-wide text-2xl text-center  mx-15 my-auto">
            The Features are endless,{" "}
          </div>
          <div className="font-normal font-semibold text-xl mt-1  text-center my-auto">
            So are the opportunities{" "}
          </div>
        </div>

        <div className="m-10 flex flex-row flex-wrap justify-center mx-auto ">
          <Card className="w-[21vw] m-4  ">
            <CardHeader>
              <CardTitle>
                {" "}
                <Image
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/alphabets-2862416-2390540.png?f=webp&w=256"
                  alt="Preview of video call feature"
                  width={120}
                  height={100}
                  quality={100}
                  className="rounded-md mx-auto items-center "
                />
              </CardTitle>
              <CardDescription className="py-2 ">
                {" "}
                <span className="font-semibold text-black text-lg ">
                  Start With The Basics
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[21vw] m-4 ">
            <CardHeader>
              <CardTitle>
                {" "}
                <Image
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/numbers-16-742294.png?f=webp&w=256"
                  alt="Preview of video call feature"
                  width={120}
                  height={100}
                  quality={100}
                  className="rounded-md mx-auto items-center "
                />
              </CardTitle>
              <CardDescription className="py-2">
                {" "}
                <span className="font-semibold text-black text-lg ">
                  Digital Orbit Writer
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[21vw] m-4 ">
            <CardHeader>
              <CardTitle>
                {" "}
                <Image
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/objects-7491084-6382955.png?f=webp&w=256"
                  alt="Preview of video call feature"
                  width={120}
                  height={100}
                  quality={100}
                  className="rounded-md mx-auto items-center "
                />
              </CardTitle>
              <CardDescription className="py-2">
                {" "}
                <span className="font-semibold text-black text-lg ">
                  Government Schemes
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="m-10 flex flex-row flex-wrap justify-center mx-auto ">
          <Card className="w-[21vw] m-4 ">
            <CardHeader>
              <CardTitle>
                {" "}
                <Image
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/emotions-5347777-4467817.png?f=webp&w=256"
                  alt="Preview of video call feature"
                  width={120}
                  height={100}
                  quality={100}
                  className="rounded-md mx-auto items-center "
                />
              </CardTitle>
              <CardDescription className="py-2">
                {" "}
                <span className="font-semibold text-black text-lg ">
                  Online Sign Language Practice
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[21vw] m-4 ">
            <CardHeader>
              <CardTitle>
                {" "}
                <Image
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/days-6503034-5462334.png?f=webp&w=256"
                  alt="Preview of video call feature"
                  width={120}
                  height={100}
                  quality={100}
                  className="rounded-md mx-auto items-center "
                />
              </CardTitle>
              <CardDescription className="py-2">
                {" "}
                <span className="font-semibold text-black text-lg ">
                  Book A Mentoring Session
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[21vw] m-4 ">
            <CardHeader>
              <CardTitle>
                {" "}
                <Image
                  src="https://cdn.iconscout.com/icon/free/png-512/free-animals-3706539-3089267.png?f=webp&w=256"
                  alt="Preview of video call feature"
                  width={120}
                  height={100}
                  quality={100}
                  className="rounded-md mx-auto items-center "
                />
              </CardTitle>
              <CardDescription className="py-2">
                {" "}
                <span className="font-semibold text-black text-lg ">
                  {" "}
                  Animals : The first Letters
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
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
            <div className="w-full px-16 flex flex-row justify-between sm:max-w-md">
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

                  

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" className="border border-rose-600">
                    Become A mentor
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Become A Mentor Today</AlertDialogTitle>
                    <AlertDialogDescription>
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="text-left space-y-8"
                        >
                          <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter Your Name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter Your Phone Number"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter Your Email"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="expertise"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Expertise</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter Your Expertise"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button className="w-full" type="submit">
                            Submit
                          </Button>
                        </form>
                      </Form>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <Image
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/657998c6eb87f_frame_1000013453_2.png?d=2360x672"
              alt="mentor"
              width={1230}
              height={400}
              className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            />
          </div>

          <div
            id="collaborate"
            className="mt-6 w-full flex content-center h-fit mb-4"
          >
            <div className=" rounded-lg w-[95%] mx-auto h-full ">
              <div className="w-fit rounded-2xl h-full mx-auto bg-[#e6e6e6]">
                <div className=" flex flex-row-reverse justify-right p-4">
                  <div className="p-1 text-right">
                    <div className="text-4xl font-semibold mt-9 pr-[3vw]">
                      Collaborate
                    </div>

                    <div className="text-4xl font-semibold  ml-3 mr-10">
                      with Us
                    </div>
                    <div className="text-xl font-normal mr-10 mt-9 ml-2 ">
                      Join hands with us, as collaboration sparks innovation. Together, we can build a brighter future for all
                    </div>

       <div className="flex flex-row-reverse mt-7">
              {/* NGO Sign Up Form */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" className="mr-8 border border-black">
                    Sign Up as an NGO
                  </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>NGO Sign Up</AlertDialogTitle>
                      <AlertDialogDescription>
                        <Form {...ngoForm}>
                          <form
                            onSubmit={ngoForm.handleSubmit(onNGOSubmit)}
                            className="text-left space-y-8"
                          >
                            <FormField
                              control={ngoForm.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter NGO Name"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={ngoForm.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter NGO Email"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={ngoForm.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter NGO Phone Number"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button className="w-full" type="submit">
                              Submit
                            </Button>
                          </form>
                        </Form>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
            </div>
                  </div>
                  <div className="p-1">
                    <Image
                      src="/Collaborate.png"
                      alt="Preview of video call feature"
                      width={380}
                      height={100}
                      quality={100}
                      className="rounded-3xl mr-[1vw] items-center "
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
}

export default learn;
