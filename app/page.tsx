import Hero from "@/components/Hero";

const page = () => {
  return (
    <div>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <h1 className="text-white">Hello</h1>
          <Hero />
        </div>
      </main>
    </div>
  );
};

export default page;
