import React from "react";

interface RegistrationCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  decorationSrc: string;
  className?: string;
}

export const RegistrationCard: React.FC<RegistrationCardProps> = ({
  title,
  subtitle,
  imageSrc,
  decorationSrc,
  className = "",
}) => {
  return (
    <section
      className={`flex overflow-hidden relative gap-2.5 items-start px-10 py-14 w-full bg-stone-300 min-h-[250px] max-md:px-5 ${className}`}
    >
      <div className="z-0 w-[239px]">
        <div className="flex gap-4 items-center w-full font-black">
          <h2 className="self-stretch my-auto text-4xl text-lime-900">
            {title}
          </h2>
          <div className="flex shrink-0 self-stretch my-auto w-0.5 bg-neutral-500 h-[29px]" />
          <p className="self-stretch my-auto text-base leading-6 text-lime-700">
            {subtitle.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < subtitle.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
        <button className="gap-2.5 self-stretch px-3.5 py-2.5 mt-8 max-w-full text-xl font-bold text-white whitespace-nowrap bg-orange-900 min-h-[50px] w-[200px]">
          REGISTER
        </button>
      </div>
      <img
        src={decorationSrc}
        className="object-contain absolute top-0 left-10 z-0 shrink-0 h-3.5 aspect-[3] w-[30px]"
        alt="Decoration"
      />
      <div className="flex overflow-hidden absolute bottom-0 z-0 flex-col px-2 h-[397px] right-[13px] w-[215px]">
        <img
          src={imageSrc}
          className="object-contain aspect-[0.89] w-[205px]"
          alt={title}
        />
      </div>
    </section>
  );
};
