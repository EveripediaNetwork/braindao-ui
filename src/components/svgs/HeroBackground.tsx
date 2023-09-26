import Image from "next/image";

export const HeroBackground = (p: { className: string }) => (
  <div className="relative w-full h-full">
    <Image src={"/hero-bg.png"} alt="hero bg" fill />
  </div>
);
