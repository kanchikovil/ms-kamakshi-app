"use client";
import React from "react";

export const RegistrationStatus = () => {
  return (
    <section className="w-full max-w-md max-md:max-w-full">
      <h2 className="text-3xl font-bold text-lime-900 max-md:max-w-full">
        Check your registration status
      </h2>
      <div className="flex gap-8 items-center mt-2.5 w-full max-md:max-w-full">
        <div className="self-stretch my-auto text-xl font-bold min-w-60 w-[300px]">
          <input
            type="text"
            placeholder="Enter Aadhar / Mobile number"
            className="gap-2.5 self-stretch p-3.5 w-full border border-solid border-stone-300 text-zinc-600"
          />
          <button className="gap-2.5 self-stretch p-3.5 mt-3 w-full text-white bg-orange-900">
            CHECK STATUS
          </button>
        </div>
        <div className="self-stretch my-auto font-black w-[116px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af0fbc0ef51400f1cbbbab8680e5aafd7677d80?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
            className="object-contain aspect-square w-[30px]"
            alt="Schedule icon"
          />
          <div className="w-full">
            <h3 className="text-2xl text-neutral-700">Scheduled</h3>
            <time className="text-sm text-zinc-600">
              25/03/2025
              <br />
              07.30 PM
            </time>
          </div>
        </div>
      </div>
    </section>
  );
};
