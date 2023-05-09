import Header from "@/components/Header";
import Image from "next/image";


 const ProductList: React.FC = () => {
    return (
         <Header>
         <div className="mt-10">
            <h3 className="tracking-wider font-bold text-3xl text-center">REDISCOVER</h3>
            <h1 className="text-center text-[100px] font-bold text-violet-600 my-9">Fishkeeping</h1>
            <p className="text-center">An <span className="font-bold">exclusive collection of bettas </span>  available for everyone.</p>
         <div className="flex justify-between mt-20">
            <Image src="/static/crowntail.jpeg" alt="logo"  width="500" height="100" />
            <div className="w-[50%] h-[350px]">
            <h2 className="mt-5">Halfmoon Betta</h2>
            <p className="my-5">The Halfmoon betta is arguably one of the prettiest betta species. 
                It is recognized by its large tail that can flare up to 180 degrees.</p>

            <div className="mt-32 flex gap-4 items-center">
                <p>$25.00</p>
                <button className="p-4 bg-violet-400 text-white text-sm rounded-sm hover:bg-violet-950">Add to Cart</button>
            </div>
            </div>
        
         </div>
         </div>
         </Header>
    )
}

export default ProductList;