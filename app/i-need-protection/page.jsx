import Image from "next/image";

const Protection = () => {
  return (
    <div class="grid grid-cols-6 grid-rows-1">
      <div className="md:row-start-1 md:col-start-1 md:col-span-6 md:ml-[-170px] md:mt-[-60px] min-[300px]:ml-[100px] ">
        <Image
          src="/images/protection1.png"
          alt="protection-1"
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="md:row-start-1 md:col-start-5 md:col-span-2 md:self-start md:mt-[150px] md:mr-5 min-[1900px]:mt-[220px] min-[1800px]:mt-[220px] min-[1700px]:mt-[200px] min-[1600px]:mt-[200px] min-[300px]:row-start-2 min-[300px]:col-start-2 min-[300px]:col-span-5 min-[300px]:mt-[10px]">
      <Image
          src="/images/protection2.png"
          alt="protection-2"
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="md:row-start-1  md:col-start-5 md:self-center md:col-span-2 min-[1900px]:mt-[-100px] min-[1900px]:mr-5  min-[1800px]:mt-[-100px] min-[1800px]:ml-20 min-[1700px]:ml-12 min-[1600px]:ml-12 min-[300px]:row-start-3 min-[300px]:col-start-2 min-[300px]:col-span-5">
        <p className="text-[#484848] text-right w-9/12 font-MPlus1 font-wide font-thin tracking-normal text-base leading-6 ml-20 min-[1900px]:w-10/12 min-[1800px]:w-9/12 min-[300px]:w-11/12 min-[300px]:ml-2 min-[300px]:mt-5">
          Object is a piece of armour, perhaps, "a skin of metal" as older men
          suggested me to obtain to me as a kid. A way of protection in the
          country dedicated to burning of my family, family who want to live in
          their country and be true to themeselves against the norms of the
          elderly who can't see the world past false walls of so called holly
          place, a place of which in truth god is not part of. Using silver and
          bronze handiet was casted and formed by hand without the use of the
          machines, this process was crucial to insure the connection I could
          obtain with it. With all the effort and energy it has absorbed to
          support the one to whom it belongs at any given moment in the History
          of its existence.
        </p>
      </div>
    </div>
  );
};

export default Protection;
