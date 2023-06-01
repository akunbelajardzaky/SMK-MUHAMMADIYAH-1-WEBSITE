import React from "react";

function Page() {
  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8  text-black">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            Judul
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
            <div className="flex items-center md:space-x-2"></div>
          </div>
        </div>
        <div className="text-black">
          <p>Insert the actual text content here...</p>
        </div>
      </article>
      <div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Rangkuman</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Nunc id magna mollis
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
