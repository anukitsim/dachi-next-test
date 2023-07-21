import Image from "next/image";


const Broken = () => {
  return (
    <section className="h-full flex flex-col">
      <div>
        <h2 className="text-[#484848] font-MPlus1 font-wide font-thin tracking-normal text-lg leading-6">
          Knife In The Back
        </h2>
        <br />
        <p className="text-[#484848] font-MPlus1 font-wide font-thin tracking-normal text-base leading-6">
          Objects built from the parts found in the ruins of my childhood house
          a collapsed building in my hometown of Batumi. The catastrophical fail
          in the buildings base caused an immediate crash of a 7 floor apartment
          building, nine people, including three children, have been found dead
          in the wreckage. This incident was caused by the carelessness of a
          construction worker and their boss.
        </p>
        <br />
        <Image
          src="/images/brokenCity1.jpg"
          alt="broken1"
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="flex flex-row gap-8 mt-10 ">
        <Image
        src='/images/brokenCity2.png'
        alt="broken2"
        width={700}
        height={475}
        className='mt-10'
        sizes="50vw"
        style={{
          width: "50%",
          height: "auto",
        }}
         />
        <Image 
        src='/images/brokenCity3.png'
        alt="broken3"
        width={700}
        height={475}
        sizes="45vw"
        style={{
          width: "45%",
          height: "70%",
        }}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-[#484848] font-MPlus1 font-wide font-thin tracking-normal text-lg leading-6">
        Barbed Wire
        </h2>
        <br />
        <p className="text-[#484848] font-MPlus1 font-wide font-thin tracking-normal text-base leading-6">
        Quote of the Georgian people "20% of my land is occupied by Russia"
          was initially the truth, but slowly we realised that 20% is only the
          beginning. In 2008, after occupying two Georgian territories of
          Abkhazia and South Ossetia, the occupiers erected a barbed wire along
          the border, guarded by the Russian armed forces. What started as a
          barrier between Georgia and cccupied territorie, slowly turned into a
          creeping invasion. Day by day step by step Russia is moving the
          border, every new morning people who yesterday lived on our side of
          the border wake up on the other side with their families. And there is
          no way out. The quote may have been true at the time, but I believe
          that now, 14 years later, 20% has become an illusion. Chairs made by
          remelting barbed wire, with a small amount of georgian wine left
          inside of the body. Just like corrosion on steel, which spreads
          through the metal and slowly rusts it away, this process will not stop
          in Georgia until the whole chair colapses.

        </p>
        <Image
        src='/images/brokenCity4.png'
        alt="broken4"
        width={700}
        height={475}
        className='mt-10'
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
         />

      </div>
    </section>
  );
};

export default Broken;
