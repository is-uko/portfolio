"use client";

import { useInView } from "react-intersection-observer";

export function Contact() {
  const { ref, inView } = useInView({});

  return (
    <div
      ref={ref}
      className={
        inView
          ? "pb-10 w-11/12 lg:w-1/3 mx-auto opacity-1 duration-500"
          : "pb-10 w-11/12 lg:w-1/3 mx-auto opacity-0 translate-y-10 duration-500"
      }
    >
      <h2 className="text-3xl text-center pb-7">やり取りの方法</h2>
      <p className="pb-5">
        まずはお問い合わせからお問い合わせをお願いいたします。
      </p>
      <p className="pb-5">案件確認後こちらよりご連絡させていただきます。</p>
      <p className="pb-5">
        その後のやり取りですが、落ち着いて回答をしたいので、基本的にはメールもしくはチャットでのやり取りでお願いいたします。
      </p>
      <p>できる限り迅速で丁寧な対応を心がけます。</p>
    </div>
  );
}
