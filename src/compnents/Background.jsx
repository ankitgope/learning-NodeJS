import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen ">
        <div className="absolute w-full h-screen bg-zinc-800">
          <nav className="absolute top-[5%] bg-sky-500/5 w-full py-10 flex justify-center text-zinc-50 font-semibold text-xl">
            Documents
          </nav>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold">
            Docs
          </h1>
        </div>
      </div>
    </>
  );
}

export default Background;
