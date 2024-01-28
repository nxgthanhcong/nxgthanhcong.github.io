import React from "react";

const Container = ({
  girdColVariant,
  children,
}: {
  girdColVariant: string;
  children: any;
}) => {
  return (
    <div className={`mx-auto max-w-screen-xl grid ${girdColVariant} gap-2`}>
      {children}
    </div>
  );
};

export default Container;
