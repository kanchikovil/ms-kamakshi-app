import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start px-24 py-6 mt-12 w-full text-base leading-none bg-stone-300 min-h-[60px] text-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-1 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0d60fd547501eb89293e2dbcbfaac647c8d11aa?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt="Copyright icon"
        />
        <p className="self-stretch my-auto w-[239px]">
          2025, Manasasmarami Kamakshi
        </p>
      </div>
    </footer>
  );
};
