import Image from "next/image";


const Garbage = () => {
  return (
    <>
      <div className="flex md:flex-row gap-10 relative min-[300px]:flex-col">
     
     
        <Image
          src="/images/garbage1.png"
          alt="garbage1"
          width={700}
          height={475}
          sizes="30vw"
          className="mb-10 min-[300px]:w-[500px]"
          style={{
            width: "30%",
            height: "auto",
          }}
        />
        <p className="text-[#484848] font-MPlus1 font-wide font-thin tracking-normal text-base leading-6 w-5/12 min-[300px]:w-full">
          As an adult remembering when an empty streets used to be full of
          adventure, seeing all of the trash laying around, wondering to what
          could be done with all of the items lost to the time. Imagining all
          the ways it could be rebuilt and given second life to, actually listen
          to the stories of old unwanted family members who are alone on the
          streets with no one to listen. This mindset has stuck to me to this
          day when every new place is a scavenger hunt of all the trash around,
          every sidewalk corner can hide a the treasure that in good hands can
          be even more then before.
          <br /> 
          <br />
          <br />
          <span className="block text-[#484848] text-right font-MPlus1 lg:text-lg leading-6 min-[1900px]:w-10såœåu  e4sa3yghzx p0hl;-y/12 min-[1300px]:w-full min-[1600px]:w-full min-[1500px]:w-full min-[1400px]:w-full /12 sm:w-full md:w-full xl:w-8/12 lg:6/12 tracking-normal">
  Chair is constructed by collecting and stealing items on a single street of Tbilisi
</span>

        </p>
        <br />
       
       
        <Image
  src="/images/garbage3.png"
  alt="garbage3"
  width={700}
  height={475}
  sizes="15vw"
  className="min-[300px]:w-[600px]"
  style={{
    width: "15%",
    height: "auto",
  }}
/>

      
          <div className="absolute flex flex-wrap md:justify-between md:w-8/12 md:left-56 md:top-80 min-[300px]:left-10 min-[300px]:top-[1000px]">
        {['1', '2'].map((gifIndex) => (
          <Image
            key={gifIndex}
            src={`/gif/garbage-gif${gifIndex}.gif`}
            alt={`vase${gifIndex}`}
            width={700}
            height={475}
            sizes="50vw"
            className=""
            style={{
              width: "50%",
              height: "auto",
            }}
            
          />
        ))}
      </div>
      <div className="absolute flex flex-wrap md:justify-between md:w-3/4 md:left-56 md:bottom-20 min-[300px]:ml-[-150px]">
        {['3', '4'].map((gifIndex) => (
          <Image
            key={gifIndex}
            src={`/gif/garbage-gif${gifIndex}.gif`}
            alt={`vase${gifIndex}`}
            width={700}
            height={475}
            sizes="50vw"
            style={{
              width: "50%",
              height: "auto",
            }}
            
          />
        ))}
      </div>

       </div>
     
        
     
    </>
  );
};

export default Garbage;
