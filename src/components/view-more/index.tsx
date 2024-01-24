import React from "react";
import { NineOClockArrowIcon } from "../../assets/icons";

const ViewMore = ({ url }: { url: string }) => {
  return (
    <a href={url} className="group mt-4 block text-lg font-medium text-white">
      View full résume1
      <NineOClockArrowIcon className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
    </a>
  );
};

export default ViewMore;
