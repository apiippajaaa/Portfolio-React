import { useState } from "react";

export function useServicesCarousel(total: number) {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => Math.min(i + 1, total - 1));

  const prev = () =>
    setIndex((i) => Math.max(i - 1, 0));

  return { index, next, prev };
}