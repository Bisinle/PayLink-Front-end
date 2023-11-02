import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function HelpPage(): JSX.Element {
  const [show, setShow] = useState({
    collapse1: false,
    collapse2: false,
    collapse3: false,
  });

  const toggleShow = (value: object) => {
    setShow({ ...show, ...value });
  };

  return (
    <>
      <div>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <h1>FAQs</h1>
        <div>
          <button
            className={`${
              show.collapse1
                ? "text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                : ""
            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
            type="button"
            onClick={() => toggleShow({ collapse1: !show.collapse1 })}
            aria-expanded={show.collapse1 ? "true" : "false"}
            aria-controls="collapseOne"
          >
            Accordion Item #1
            <span
              className={`${
                show.collapse1
                  ? "rotate-[-180deg] -mr-1"
                  : "rotate-0 fill-[#212529] dark:fill-white"
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
          <TECollapse show={show.collapse1} className="!mt-0 !rounded-b-none !shadow-none">
            <div className="px-5 py-4">
              <strong>This is the first item's accordion body.</strong> Lorem
            </div>
          </TECollapse>
        </div>

        {/* Repeat the above code for additional FAQs */}
      </div>
    </>
  );
}
