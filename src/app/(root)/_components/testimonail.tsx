import { cn } from "@/lib/utils";
import Marquee from "@/components/marquee";
import Image from "next/image";
import { Six_Caps } from "next/font/google";

const sixCaps = Six_Caps({
  weight: ["400"],
  subsets: ["latin"],
});

const reviews = [
  {
    name: "Arjun Sharma",
    username: "@arjun_dev",
    body: "The website PixelArc built for our startup exceeded all expectations. Their attention to detail is remarkable!",
    img: "https://avatar.vercel.sh/arjun",
  },
  {
    name: "Priya Patel",
    username: "@priya_design",
    body: "Our e-commerce conversion rate increased by 40% after the redesign. Highly recommend their services.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Vikram Mehta",
    username: "@vikram_tech",
    body: "Working with PixelArc was seamless from start to finish. They delivered our project ahead of schedule.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Neha Gupta",
    username: "@neha_digital",
    body: "The mobile app they developed for us has received outstanding feedback from our users. Great work!",
    img: "https://avatar.vercel.sh/neha",
  },
  {
    name: "Rahul Singh",
    username: "@rahul_singh",
    body: "Their team's technical expertise helped us solve complex problems we'd been struggling with for months.",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Ananya Desai",
    username: "@ananya_d",
    body: "PixelArc transformed our outdated website into a modern, responsive platform that our customers love.",
    img: "https://avatar.vercel.sh/ananya",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="font-medium text-sm dark:text-white">
            {name}
          </figcaption>
          <p className="font-medium text-xs dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const Testimonials = () => {
  return (
    <div className="flex flex-col gap-10 py-40">
      <div className="flex flex-col justify-center items-center gap-4 w-full text-center">
        <h1 className={`${sixCaps.className} text-[6rem] leading-[5rem]  md:text-[calc(1rem+10.15vw)] md:leading-[calc(1rem+8.15vw)] text-white`}>Testimonials</h1>
        <p className="md:w-1/2 text-[#6d6d6d] text-[12px] text-center md:text-base uppercase">Discover how our product has made a positive impact on our users&lsquo; lives through their genuine experiences and heartfelt testimonials.</p>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-background md:shadow-xl rounded-lg w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="left-0 absolute inset-y-0 bg-gradient-to-r from-white dark:from-background w-1/3 pointer-events-none"></div>
        <div className="right-0 absolute inset-y-0 bg-gradient-to-l from-white dark:from-background w-1/3 pointer-events-none"></div>
      </div>
    </div>
  );
};
