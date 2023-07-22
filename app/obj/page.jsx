import Image from "next/image";

const Obj = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-12 gap-y-1">
      <div className="row-start-1 row-span-12 col-start-1 col-span-2">
        <Image
          src="/images/obj1.png"
          alt="obj-1"
          width={700}
          height={475}
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="row-start-1 self-center  col-start-3 col-span-1 z-50">
        <Image
          src="/images/Text.png"
          alt="obj-text"
          width={700}
          height={475}
          sizes="50vw"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="row-start-1 row-span-12 col-start-4 col-span-2 mt-20">
        <Image
          src="/images/obj2.png"
          alt="obj-2"
          width={700}
          height={475}
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="md:row-start-2 row-span-4 col-start-1 col-span-2 min-[300px]:row-start-1">
        <h1 className="text-[#484848] font-MPlus1 font-thin tracking-wider w-6/12  text-lg leading-6 mt-20 min-[300px]:hidden">Flask.obj</h1>
        <Image
          src="/images/obj3.png"
          alt="obj-1"
          width={700}
          height={475}
          sizes="70vw"
          className="md:object-cover h-full w-full min-[300px]:object-contain min-[300px]:mt-[-20px]"
        />
        <p className="text-[#484848] font-MPlus1 font-thin tracking-wider text-base w-full leading-6 md:mt-10 pb-10 min-[300px]:w-full min-[300px]:mt-[-200px]">
          Deciding whether to bring a bag for my bottle or buy one and
          contribute to environmental pollution with unnecessary plastic was an
          everyday dilemma. Drawing inspiration from a military-style flask, an
          ergonomic bottle that attaches to the side of the bottle came to
          existence. 
          <br />
          <br />
          <span>The holder for a metal bottle is constructed from sturdy
          resin and features a metal plate that securely clasps the bottle. By
          gently squeezing the holder from both sides, the bottle can be easily
          removed and reattached with equal simplicity. obg-img-4</span>
          
        </p>
        
      </div>
      <div className="row-start-2 self-center  col-start-3 col-span-1 z-50">
        <Image
          src="/images/obj4.png"
          alt="obj-text"
          width={700}
          height={475}
          sizes="100vw"
          className="object-contain h-full w-full"
        />
      </div>
      <div className="md:row-start-2 row-span-6 col-start-4 col-span-2 min-[300px]:row-start-4">
        <Image
          src="/images/obj5.png"
          alt="obj-2"
          width={700}
          height={475}
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Obj;
