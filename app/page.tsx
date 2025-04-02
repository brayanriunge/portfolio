import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative  overflow-hidden mx-auto px-5 sm:px-10 flex justify-between items-center flex-col bg-black-100">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </div>
  );
}
