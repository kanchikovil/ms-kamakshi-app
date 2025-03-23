import React from "react";

interface Event {
  date: string;
  time: string;
  name: string;
}

const events: Event[] = [
  {
    date: "10/03/2025",
    time: "06.30 am",
    name: "Golder Deer Vahanam",
  },
  {
    date: "10/03/2025",
    time: "07.30 pm",
    name: "Silver Vrushabha Vahanam",
  },
  {
    date: "10/03/2025",
    time: "06.30 pm",
    name: "Silver Deer Vahanam",
  },
];

export const UpcomingEvents = () => {
  return (
    <section className="mt-9 w-full max-md:max-w-full">
      <header className="flex gap-10 justify-between items-center w-full font-bold max-md:max-w-full">
        <h2 className="flex gap-2 items-center self-stretch my-auto text-3xl text-lime-900 min-w-60">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c905650f868200e3dfd48287b14c5db7bef930d3?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.85] w-[34px]"
            alt="Events icon"
          />
          <span>Upcoming Events</span>
        </h2>
        <button className="flex gap-0.5 items-center self-stretch my-auto text-base text-orange-900">
          <span>VIEW ALL</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/765307b54763fcc0020b26aa606afc9d16d6c176?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt="Arrow right"
          />
        </button>
      </header>
      <ul className="flex flex-col items-start mt-7 max-w-full text-base text-zinc-600 w-[376px]">
        {events.map((event, index) => (
          <li key={index} className="flex gap-5 items-center mt-2 first:mt-0">
            <time className="self-stretch my-auto">{event.date}</time>
            <p className="self-stretch my-auto font-bold">
              <span className="font-normal">{event.time}</span>{" "}
              <span className="font-black text-[#75762A]">{event.name}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
