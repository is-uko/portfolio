import { Header } from "../header";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "../footer";

export default function Portfolios() {
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
    <>
      <Header></Header>
      <div className="w-11/12 mx-auto pb-10 opacity-1 duration-500">
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
      </div>
      <Footer></Footer>
    </>
  );
}
