"use client";
import React, { Suspense } from "react";
import Banner from "../components/Banner";

const CONTACT = () => {
  return (
    <section>
      <Banner />
      <Suspense
        fallback={<p className="bg-black min-h-[2000px]">Loading feed...</p>}
      >
        <div className="container max-w-screen-xl md:mx-auto px-3 flex flex-col gap-7 md:flex-row justify-between items-center">
          <div className="flex1">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-7 px-1 py-28"
            >
              <div>
                <input
                  type="text"
                  //className="py-2  my-7 md:my-0 w-full md:w-80  border-2 border-black "
                  placeholder="Enter your name"
                  className="bg-slate-50 text-secondary shadow-sm
                  py-2 px-10 border-2 border-gray-100 cursor-pointer
                   outline-none "
                 
                />{" "}
                <input
                  type="email"
                  className="bg-slate-50 text-secondary shadow-sm
                  py-2 px-10 border-2 border-gray-100 cursor-pointer
                   outline-none "
                   placeholder="Enter your email"
                  //className="py-2 w-full  md:w-80 border-2 border-black"
                />
              </div>
              <input
                type="text"
                className="bg-slate-50 text-secondary shadow-sm
                 py-2 px-10 border-2 border-gray-100 cursor-pointer
                  outline-none "
                placeholder="Your subject"
              />

              <textarea
                className="bg-slate-50 text-secondary 
                shadow-sm py-2 px-10 border-2 border-gray-100
                 cursor-pointer outline-none "
                id="msg"
                name="user_message"
                placeholder="Your message"
              ></textarea>
              <button type="submit" className="py-2  border-2 border-primary px-2 mx-1 inline uppercase md:w-44 hover:bg-white hover:text-primary font-extrabold text-white bg-primary ">
                send message
              </button>
            </form>
          </div>
          <div className="flex1 flex flex-col">
            <div>
              <h1 className="text-3xl text-secondary font-extrabold ">
                Don’t hesitate to reach out!
              </h1>
              <p className="text-secondary pr-2 md:py-4">
                We have highly experienced and supportive lawyers at your
                service.
              </p>
              <div className="flex flex-col md:flex-row gap-7">
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-extrabold uppercase  text-secondary ">
                    <span className="bg-primary pl-2 py-1">Hea</span>d office
                  </h2>
                  <p className="w-[250px]">
                    <span className="font-extrabold mr-1">Address:</span> St.
                    Luke's Business Centre, Suite 3-4, 85 Tarling Road, London
                    E16 1HN
                  </p>
                  <p className="text-base  font-bold mb-2">
                    Phone:
                    <span className="text-primary ml-2">
                      020 7366 6409
                    </span>{" "}
                  </p>
                  <p className="text-base  font-bold mb-2">
                    Email:{" "}
                    <span className="text-primary ml-2">
                      admin@jdssolicitors.com
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-extrabold uppercase  text-secondary ">
                    <span className="bg-primary pl-2 py-1 ">o</span>ffice
                  </h2>
                  <p className="w-[250px]">
                    <span className="font-extrabold mr-1">Address:</span>Unit 1,
                    Lighterage Court, 41 High Street, Brentford, Middlesex TW8
                    0FT
                  </p>
                  <p className="text-base  font-bold mb-2">
                    Phone:
                    <span className="text-primary ml-2">
                      020 7366 6409
                    </span>{" "}
                  </p>
                  <p className="text-base  font-bold mb-2">
                    Email:{" "}
                    <span className="text-primary ml-2">
                      admin@jdssolicitors.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </section>
  );
};

export default CONTACT;
