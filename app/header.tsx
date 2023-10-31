"use client";

import Link from "next/link";
import Image from "next/image";
import mainVisual from "../public/mainvisual.jpg";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="pb-10">
      <div className="px-10 py-5 flex flex-col md:flex-row justify-between fixed left-0 right-0 bg-green-500">
        <Link href="/" className="text-white text-center pb-5 md:pb-0">
          繊細ガジェットレビューWEB制作部
        </Link>
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
      {pathname === "/" && (
        <Image
          className="h-screen object-cover"
          src={mainVisual}
          alt="メインビジュアル"
        />
      )}
    </div>
  );
}
