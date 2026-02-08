"use client";
import { useRouter } from "next/navigation";
import Hero from "./hero/page";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
     
      <Hero />
    </div>
    
  );
}