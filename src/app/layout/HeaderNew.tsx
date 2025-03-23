import React from "react";

export const Header = () => {
  return (
    <header className="flex relative flex-col flex-wrap gap-10 justify-between items-center px-24 py-8 w-full text-2xl font-bold whitespace-nowrap min-h-[100px] text-stone-300 max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/527ef045df7dde52d3bd662268ef842d27f9a07c?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
        className="object-cover absolute inset-0 size-full"
        alt="Background"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4474ad5ccf91ddb78660fddfff4f71acf313114e?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
        className="object-contain shrink-0 self-stretch my-auto aspect-[16.95] min-w-60 w-[426px]"
        alt="Logo"
      />
      <nav className="flex relative gap-8 items-center self-stretch my-auto min-w-60">
        <ul className="flex gap-9 items-center self-stretch my-auto">
          <li className="self-stretch my-auto">
            <a href="#articles">Articles</a>
          </li>
          <li className="self-stretch my-auto">
            <a href="#books">Books</a>
          </li>
        </ul>
        <div className="flex shrink-0 self-stretch my-auto w-0.5 h-6 bg-stone-300" />
        <button className="self-stretch my-auto">Login</button>
      </nav>
    </header>
  );
};
