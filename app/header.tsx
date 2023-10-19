"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import mainVisual from "../public/mainvisual.jpg";

export function Header() {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  return (
    <div className="pb-10">
      <div
        className={
          inView
            ? "px-10 py-5 flex justify-between fixed left-0 right-0 bg-green-500 bg-opacity-40 duration-500"
            : "px-10 py-5 flex justify-between fixed left-0 right-0 bg-green-500 duration-500"
        }
      >
        <Link href="/" className="text-white">繊細ガジェットレビューWEB制作部</Link>
        <nav className="flex justify-between text-white">
          <Link className="pr-5" href="/articles">
            ブログ
          </Link>
          <Link className="pr-5" href="/contact">
            お問い合わせ
          </Link>
          <Link href="privacy-policy">プライバシーポリシー</Link>
        </nav>
      </div>
      <Image ref={ref} className="h-screen object-cover" src={mainVisual} alt="メインビジュアル"></Image>
    </div>
  );
}
