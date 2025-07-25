import Image from "next/image";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex justify-center">
        <div className="mt-67">
          <Image src={"/images/semFundo-ivox.jpg"} alt="logo-principal" height={400} width={400} />
        </div>
      </div>
    </>
  );
}
