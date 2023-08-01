import Hero from '@/components/home/hero';
import Animation from '@/components/home/animation';
// import Lottiesss from '@/components/Lottiesss';
// import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="flex flex-col min-h-screen items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <Hero />
        </div>
      </section>
    </>
  );
}
