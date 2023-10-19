"use client";

import { useInView } from "react-intersection-observer";

export function Introduction() {
  const { ref, inView } = useInView({});

  return (
    <div
      ref={ref}
      className={
        inView
          ? "w-11/12 lg:w-1/3 mx-auto pb-10 opacity-1 duration-500"
          : "w-11/12 lg:w-1/3 mx-auto pb-10 opacity-0 translate-y-10 duration-500"
      }
    >
      <h2 className="text-3xl text-center pb-7">自己紹介</h2>
      <div>
        <p className="pb-5">こんにちは、1993年生まれのisukoです。</p>
        <p className="pb-5">情報系の大学院修了後メンタル不調に陥りました。</p>
        <p className="pb-5">
          その前後で私がHSP（Highly Sensitive
          Person）であると強く感じ、自分が心地よい方法で生きていこうと思い一念発起。
        </p>
        <p className="pb-5">
          そのひとつとして繊細ガジェットレビューというブログを立ち上げました。
        </p>
        <p className="pb-5">
          デジタルガジェットをメインに様々なガジェットを試してレビューするのは好きですが、メーカーの開発待ちになってしまい、受動的だと感じていました。
        </p>
        <p className="pb-5">
          そこで能動的に何かを生み出す方法としてWEB制作の勉強を開始。
        </p>
        <p className="pb-5">
          前述の通りガジェットのレビューブログを運営していますので、製品紹介ページで紹介する内容を考えるお手伝いもできるかもしれません。
        </p>
        <p>よろしくお願いいたします。</p>
      </div>
    </div>
  );
}
