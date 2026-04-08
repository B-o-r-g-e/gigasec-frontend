'use client'
import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
  speed?: number;
};

export default function Typewriter({ words, speed = 80 }: TypewriterProps) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[idx] ?? "";

    if (!word) {
      return;
    }

    if (!del && txt === word) {
      const pauseTimer = window.setTimeout(() => setDel(true), 1800);
      return () => window.clearTimeout(pauseTimer);
    }

    if (del && txt === "") {
      const nextWordTimer = window.setTimeout(() => {
        setDel(false);
        setIdx((current) => (current + 1) % words.length);
      }, 0);
      return () => window.clearTimeout(nextWordTimer);
    }

    const timer = window.setTimeout(() => {
      setTxt((prev) => (del ? prev.slice(0, -1) : word.slice(0, prev.length + 1)));
    }, del ? speed / 2 : speed);

    return () => window.clearTimeout(timer);
  }, [txt, del, idx, words, speed]);

  return (
    <span className="inline-flex items-center text-[#00CCCC]">
      <span>{txt}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.9em] w-[2px] rounded-full bg-[#00CCCC] animate-[blink_0.8s_step-end_infinite]"
      />
    </span>
  );
}
