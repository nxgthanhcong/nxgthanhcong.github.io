import React from "react";
import { TwoOClockArrowIcon } from "../../assets/icons";

const Title = ({ item }: { item: any }) => {
  return (
    <h5 className="text-xl font-medium text-slate-200">
      {item.position} - {item.company}
      <TwoOClockArrowIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
    </h5>
  );
};

export default Title;
