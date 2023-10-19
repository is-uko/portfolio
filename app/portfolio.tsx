"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function Portfolio() {
  const { ref, inView } = useInView({});

  const DATA = [
    {
      src: "/portfolio-bbb.png",
      url: "https://portfolio-fe51a2ujx-is-uko.vercel.app/",
      date: "2023年9月22日-10月6日",
      technology: "HTML/CSS/JavaScript（Tailwind CSS、Next.js）",
    },
    {
      src: "/portfolio-furniture.png",
      url: "https://portfolio-store2-k4ra48olh-is-uko.vercel.app/",
      date: "2023年9月12日-21日",
      technology: "HTML/CSS/JavaScript（Tailwind CSS、Next.js）",
    },
    {
      src: "/portfolio-coffee.png",
      url: "https://portfolio-coffee-two.vercel.app/",
      date: "2023年8月30日-9月11日",
      technology: "HTML/CSS（Tailwind CSS、Next.js）",
    },
  ];

  return (
    <div
      ref={ref}
      className={
        inView
          ? "w-11/12 mx-auto pb-10 opacity-1 duration-500"
          : "w-11/12 mx-auto pb-10 opacity-0 translate-y-10 duration-500"
      }
    >
      <h2 className="text-3xl text-center pb-5">ポートフォリオ</h2>
      <div className="text-center grid grid-cols-1 lg:grid-cols-3 gap-5">
        {DATA.map((data) => {
          return (
            <Link className="hover:scale-105 duration-500" href={data.url}>
              <Image
                className="w-full mx-auto"
                src={data.src}
                alt={data.src}
                width={500}
                height={500}
              ></Image>
              <p className="pb-1">{data.date}</p>
              <p>{data.technology} </p>
            </Link>
          );
        })}
      </div>
      <Link href="/portfolios">
        <button className="block mx-auto mt-10 py-5 px-20 border-2 border-green-500 hover:text-white hover:bg-green-500 duration-500">
          MORE
        </button>
      </Link>
    </div>
  );
}
