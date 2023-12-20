"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const education = () => {
  return (
    <div>
      <div className="text-gray-800 m-4 p-8 divide-black" role="main">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{localStorage.getItem('lang') === "english" ? "why should a parent or guardian learn sign language ?" : "माता-पिता या अभिभावक को साइन भाषा सीखने की आवश्यकता क्यों है?"}

              

</AccordionTrigger>
            <AccordionContent>
            {localStorage.getItem('lang') === "english" ? "why should a parent or guardian learn sign language ?" : "अभिभावक या अभिभाविका के रूप में साइन भाषा सीखने से बहरे या कन विकलांग बच्चे के साथ बेहतर संवाद और जुड़ाव हो सकता है। यह सहायक वातावरण को बढ़ावा देता है और प्रभावी बातचीत को संभव बनाता है, जो माता-पिता और बच्चे के बीच मजबूत बंधन और समझ में मदद करता है।"}
            
                      </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>              {localStorage.getItem('lang') === "english" ? "Is it Difficult or time consuming ?" : "क्या यह मुश्किल या समय लेने वाला है?"}
</AccordionTrigger>
            <AccordionContent>
            {localStorage.getItem('lang') === "english" ? "While it depends on individual learning ability , Sign language is incredibly easy to understand and won't take much time to get a hold of!" : "यह व्यक्ति की सीखने क्षमता पर निर्भर करता है, लेकिन साइन भाषा को समझना अत्यंत आसान होता है और इसे पकड़ने में ज्यादा समय नहीं लगेगा।"}

              
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </div>

      <ol
        className="relative p-4 m-8 border-s border-gray-900 dark:border-gray-700"
        role="list"
      >
        <li className="mb-10 ms-4" role="listitem">
          <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {localStorage.getItem('lang') === "english" ? "Why Sign Language ? How it Helps in Education" : "साइन भाषा सीखने से मुझे क्या फायदा होगा? शिक्षा में यह मदद कैसे करेगी?"}
              </h3>
              <DropdownMenuContent>
                <DropdownMenuItem className="space-x-4">
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
          {localStorage.getItem('lang') === "english" ? "Sign Language will help fostering inclusion and smooth education/communication between every person despite of their disability.This in long run will create more opportunities for specially abled. " : "साइन भाषा सीखने से समावेशीकरण मजबूत होता है और शिक्षा और संचार में हर व्यक्ति के बीच सहानुभूति बढ़ती है, चाहे उनमें कोई विकलांगता हो या न हो। यह दीर्घकालिक रूप से विशेष रूप से सक्षम व्यक्तिओं के लिए अधिक अवसर बनाता है।"}

            
           </p>
        </li>
        <li className="mb-10 ms-4" role="listitem">
          <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {localStorage.getItem('lang') === "english" ? " Learn Sign Language - Going through the ABCs" : "साइन भाषा सीखें - मूल अक्षरों का सीधा मार्ग पर जाएं।"}

              </h3>
              <DropdownMenuContent>
                <DropdownMenuItem className="space-x-4">
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
          {localStorage.getItem('lang') === "english" ? "Learning the basics of ABC in sign language opens a world of communication through hand gestures, a vibrant and engaging way to begin understanding this beautiful visual language." : "साइन भाषा में अक्षरों की मूल जानकारी सीखने से हाथों के इशारों के माध्यम से संवाद का एक नया संसार खुलता है, जो इस सुंदर दृश्यात्मक भाषा को समझने का एक जीवंत और आकर्षक तरीका है।"}

          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {localStorage.getItem('lang') === "english" ? "Learn Sign Language - Learning The Words" : "साइन भाषा सीखें - मूल शब्दों का समझें।"}

              </h3>
              <DropdownMenuContent>
                <DropdownMenuItem className="space-x-4">
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
          {localStorage.getItem('lang') === "english" ? "Learning words in sign language is a gateway to a rich and expressive form of communication. Each sign embodies meaning, emotion, and nuance, offering a beautiful and visual way to convey thoughts and ideas." : "साइन भाषा में शब्द सीखना एक समृद्ध और संवेदनशील संचार का द्वार होता है। प्रत्येक साइन में अर्थ, भावना, और सूक्ष्मता होती है, जो विचारों और विचारों को सुंदर और दृश्यमय तरीके से प्रकट करने का एक बेहद अच्छा तरीका होता है।"}

            
          </p>
        </li>
        
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {localStorage.getItem('lang') === "english" ? " Practice Your Sign Language Skills" : "अपनी साइन भाषा कौशल्य को अभ्यास करें।"}

              </h3>
              <DropdownMenuContent>
                <DropdownMenuItem className="space-x-4">
                  <div className="flex flex-col px-4 mx-auto content-center">
                    <img
                      src="https://www.lifewire.com/thmb/hDBos5-KEGNUi-4iJgbEDgdKikM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sign-language-numbers-letters-lifeprint-7e6dac833d4e44deb202b7b269cdd7e6.png"
                      width={250}
                      height={200}
                      alt=""
                    />
                    <Link
                      href="https://www.signingsavvy.com/sign/PRACTICE/335/1"
                      className="p-4 border-2 my-2 text-center border-black"
                    >
                      Practice Here
                    </Link>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {localStorage.getItem('lang') === "english" ? "Explore the fascinating world of sign language on our platform through an engaging and enjoyable game that recognizes hand signs! Our platform offers an interactive way to practice sign language, turning learning into a playful experience" : "हमारे प्लेटफ़ॉर्म पर हस्त चिन्हों को पहचानने वाले एक रोमांचक और मजेदार गेम के माध्यम से हस्त भाषा की दुनिया के रोचक ख़ज़ाने को खोजें! हमारा प्लेटफ़ॉर्म हस्त भाषा का अभ्यास करने के लिए एक संवादात्मक तरीका प्रदान करता है, जो शिक्षा को खेलने जैसा अनुभव में बदल देता है।"}

          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {localStorage.getItem('lang') === "english" ? " Try out Our Meeting Extension for smooth Lectures,meetings and interactions" : "हमारी मीटिंग एक्सटेंशन स्मूथ लेक्चर्स, मीटिंग्स और बातचीतों के लिए है, जो संचार को सरल बनाने में सहायक होती है।"}

               
              </h3>
              <DropdownMenuContent>
                <DropdownMenuItem className="space-x-4">
                  <div className="flex flex-col px-4 mx-auto content-center">
                    <img
                      src="./meet.jpg"
                      width={250}
                      height={200}
                      alt=""
                    />
                    <Link
                      href="https://www.signingsavvy.com/sign/PRACTICE/335/1"
                      className="p-4 border-2 my-2 text-center border-black"
                    >
                      Practice Here
                    </Link>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {localStorage.getItem('lang') === "english" ? "Experience seamless lectures, meetings, and interactions with our Meeting Extension! Simplify your communication, streamline lectures, and enhance collaborative sessions effortlessly. Try it out for smoother, more engaging gatherings and seamless learning experiences." : "हमारी मीटिंग एक्सटेंशन के साथ अपने सभानुवाद, मीटिंग और बातचीतों का अनुभव सरल और सहज बनाएं! संचार को सरल बनाएं, सभाओं को सुगम बनाएं, और सहयोगी सत्रों को सुधारें। इसे आजमाएं, ताकि गैरकटिबद्ध और संकुचित अनुभवों को मजबूत और आकर्षक बनाया जा सके।"}

            
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {localStorage.getItem('lang') === "english" ? "Feeling Stucked ? Get yourself in touch with a professional mentor now !!" : "महसूस हो रहा है कि आप अटक गए हैं? अब खुद को किसी पेशेवर मेंटर से जोड़ें!"}

                
              </h3>
              <DropdownMenuContent>
                <DropdownMenuItem className="space-x-4">
                  <div className="flex flex-col px-4 mx-auto content-center">
                    <img
                      src="https://www.lifewire.com/thmb/hDBos5-KEGNUi-4iJgbEDgdKikM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sign-language-numbers-letters-lifeprint-7e6dac833d4e44deb202b7b269cdd7e6.png"
                      width={250}
                      height={200}
                      alt=""
                    />
                    <Link
                      href="http://localhost:3000/search-mentor"
                      className="p-4 border-2 my-2 text-center border-black"
                    >
                      Check it out Here
                    </Link>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {localStorage.getItem('lang') === "english" ? "Mentors for specially abled children provide personalized support, act as role models, and offer essential skills and emotional guidance, empowering them to navigate challenges, build confidence, and achieve their full potential." : "विशेष रूप से योग्य बच्चों के लिए मेंटर्स व्यक्तिगत समर्थन प्रदान करते हैं, उनके आदर्श बनते हैं, और आवश्यक कौशल और भावनात्मक मार्गदर्शन प्रदान करते हैं, जो उन्हें संघर्षों का सामना करने, आत्म-विश्वास बढ़ाने और अपनी पूर्ण क्षमता तक पहुंचने में सशक्त करता है।"}

                  </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {localStorage.getItem('lang') === "english" ? "Digitalized Orbit Writer : a Free Orbit Writer Solution for Everyone" : "डिजिटलाइज्ड ऑर्बिट राइटर: सबके लिए मुफ्त ऑर्बिट राइटर समाधान"}

                
              </h3>
              <DropdownMenuContent>
                <DropdownMenuItem className="space-x-4">
                  <div className="flex flex-col px-4 mx-auto content-center">
                    <img
                      src="./orbitwriter.jpg"
                      width={250}
                      height={200}
                      alt=""
                    />
                    <Link
                      href="http://localhost:3000/braille/orbitwriter"
                      className="p-4 border-2 my-2 text-center border-black"
                    >
                      Check it out Here
                    </Link>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {localStorage.getItem('lang') === "english" ? " Orbit Writer is a portable Bluetooth keyboard designed for people with motor disabilities. It allows individuals who might have limited mobility or dexterity to type more easily Our Online Orbit Writer ia a replication of same while being free of cost and more accessible " : "ऑर्बिट राइटर एक पोर्टेबल ब्लूटूथ कीबोर्ड है जो शारीरिक विकलांगता वाले लोगों के लिए बनाया गया है। यह उन व्यक्तियों को सहायता प्रदान करता है जिनकी गतिशीलता या हथेली में समस्या हो सकती है, ताकि वे आसानी से टाइप कर सकें। हमारा ऑनलाइन ऑर्बिट राइटर इसी तरह की एक प्रतिरूपण है, जो मुफ्त है और अधिक पहुंचयोग्य है।"}

         </p>
        </li>
        
      </ol>
    </div>
  );
};

export default education;
