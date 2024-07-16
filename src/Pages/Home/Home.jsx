import { FaWallet } from "react-icons/fa";
import { PiHandWaving } from "react-icons/pi";

const Home = () => {
    return (
        <div className="max-w-[1200px] mx-auto w-11/12 mt-10">
            <p className="flex items-center gap-3 text-b">Welcome Back <PiHandWaving /></p>
            <h1 className="text-xl font-semibold">MD.Shakhawat Hossain</h1>
            <div className="mt-10 flex flex-wrap gap-10">
                <div className="bg-[#21cd77] w-[200px] h-[200px] rounded-xl mx-auto relative overflow-clip p-5">
                    <div className="bg-white w-[100px] h-[100px] opacity-15 rounded-full absolute -top-10 right-0"></div>
                    <div className="bg-white w-[100px] h-[100px] opacity-15 rounded-full absolute top-4 -right-8"></div>
                    <div className="bg-white rounded-full flex items-center justify-center w-16 h-16">
                        <FaWallet className="text-3xl text-[#21cd77]" />
                    </div>
                    <div className="text-white mt-6 ml-1">
                        <h1>Balance</h1>
                        <h1 className="flex text-xl font-bold">32000 TK</h1>
                    </div>
                </div>

                <div className="bg-[#466bfd] w-[200px] h-[200px] rounded-xl mx-auto relative overflow-clip p-5">
                    <div className="bg-white w-[100px] h-[100px] opacity-15 rounded-full absolute -top-10 right-0"></div>
                    <div className="bg-white w-[100px] h-[100px] opacity-15 rounded-full absolute top-4 -right-8"></div>
                    <div className="bg-white rounded-full flex items-center justify-center w-16 h-16">
                        <FaWallet className="text-3xl text-[#21cd77]" />
                    </div>
                    <div className="text-white mt-6 ml-1">
                        <h1>Cash In</h1>
                        <h1 className="flex text-xl font-bold">32000 TK</h1>
                    </div>
                </div>

                <div className="bg-[#fd3d3d] w-[200px] h-[200px] rounded-xl mx-auto relative overflow-clip p-5">
                    <div className="bg-white w-[100px] h-[100px] opacity-15 rounded-full absolute -top-10 right-0"></div>
                    <div className="bg-white w-[100px] h-[100px] opacity-15 rounded-full absolute top-4 -right-8"></div>
                    <div className="bg-white rounded-full flex items-center justify-center w-16 h-16">
                        <FaWallet className="text-3xl text-[#21cd77]" />
                    </div>
                    <div className="text-white mt-6 ml-1">
                        <h1>Cash Out</h1>
                        <h1 className="flex text-xl font-bold">32000 TK</h1>
                    </div>
                </div>

                <div className="bg-[#fdb023] w-[200px] h-[200px] rounded-xl mx-auto relative overflow-clip p-5">
                    <div className="bg-white w-[100px] h-[100px] opacity-15 rounded-full absolute -top-10 right-0"></div>
                    <div className="bg-white w-[100px] h-[100px] opacity-15 rounded-full absolute top-4 -right-8"></div>
                    <div className="bg-white rounded-full flex items-center justify-center w-16 h-16">
                        <FaWallet className="text-3xl text-[#21cd77]" />
                    </div>
                    <div className="text-white mt-6 ml-1">
                        <h1>Send Money</h1>
                        <h1 className="flex text-xl font-bold">32000 TK</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;