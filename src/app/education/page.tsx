import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';

const education = () => {
  return (
    <ol className="relative p-4 m-8 border-s border-gray-900 dark:border-gray-700">
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Learn Sign Language - Going through the ABCs
                </h3>
            <DropdownMenuContent>
                <DropdownMenuItem className='space-x-4'>
                    <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/cGavOVNDj1s?si=bKkIuJiowCKcyZZV"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/6_gXiBe9y9A?si=FqH6AEDDfq8FX2MZ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/Vj_13bdU4dU?si=dKSZMmnduZTbXdHk"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenuTrigger>
        </DropdownMenu>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        A parent should learn sign language to enhance communication and foster a stronger connection with their specially-abled child, promoting inclusivity and understanding of their unique needs and experiences.
        </p>
      </li>
           <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Learn Sign Language - Learning The Words
                </h3>
            <DropdownMenuContent>
                <DropdownMenuItem className='space-x-4'>
                    <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/videoseries?si=H8ieizxl40I0EKBe&amp;list=PL2rZQvyPycXJPaPuFSvtlyQxmb6GfNUP_"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/videoseries?si=whQZ3N7fJ0-uV_ce&amp;list=PLMN7QCuj6dfYD8DfG1rN6rEo1b1RyvgKF"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/videoseries?si=ja6N2P4NssT6v1qo&amp;list=PLMN7QCuj6dfaUwmtdkdKhINGZzyGwp7Q1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenuTrigger>
        </DropdownMenu>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        A parent should learn sign language to enhance communication and foster a stronger connection with their specially-abled child, promoting inclusivity and understanding of their unique needs and experiences.
        </p>
      </li>
        <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Practice Your Sign Language Skills
                </h3>
            <DropdownMenuContent>
                <DropdownMenuItem className='space-x-4'>
                    <div className='flex flex-col px-4 mx-auto content-center'>
                        <img src="https://www.lifewire.com/thmb/hDBos5-KEGNUi-4iJgbEDgdKikM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sign-language-numbers-letters-lifeprint-7e6dac833d4e44deb202b7b269cdd7e6.png"
                        width={250}
                        height={200}
                        alt="" />
                        <Link href="https://www.signingsavvy.com/sign/PRACTICE/335/1" className='p-4 border-2 my-2 text-center border-black'>Practice Here</Link>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenuTrigger>
        </DropdownMenu>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        A parent should learn sign language to enhance communication and foster a stronger connection with their specially-abled child, promoting inclusivity and understanding of their unique needs and experiences.
        </p>
      </li>
    </ol>
  );
};

export default education;