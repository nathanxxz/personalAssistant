import Navbar from "@/components/ui/navbar";

export default function Sobre(){
    return(
        <>
        <Navbar/>
        <div className="flex justify-center items-center min-h-screen bg-white text-black">
            <div className="max-w-2xl p-8">
                <h1 className=" text-center font-bold text-3xl mb-4">Quem somos?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, qui animi a dolor aspernatur quaerat quam, nostrum ducimus fuga suscipit, eos debitis deleniti repudiandae porro saepe? Impedit aliquid iure cupiditate.</p>
            </div>
        </div>
        </>
    );
}