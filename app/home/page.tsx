import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import AskComponent from "@/components/ui/askComponent";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gray-100 text-white">
        <AskComponent />
      </div>


    </>
  );
}
