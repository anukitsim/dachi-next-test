import Image from "next/image";

const Garbage = () => {
  return (
    <>
      <div className="flex flex-row gap-10 relative">
     
     
        <Image
          src="/images/garbage1.png"
          alt="garbage1"
          width={700}
          height={475}
          sizes="30vw"
          className="mb-10"
          style={{
            width: "30%",
            height: "auto",
          }}
        />
        <p className="text-[#484848] font-MPlus1 font-wide font-thin tracking-normal text-base leading-6 w-5/12">
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
          <span className="block text-[#484848] font-MPlus1 text-right font-widest  tracking-normal text-lg leading-6 w-full xl:w-8/12 lg:8/12">Chair is constructed by collecting and stealing items on a single street of Tbilisi</span>
        </p>
        <br />
       
       
        <Image
  src="/images/garbage3.png"
  alt="garbage3"
  width={700}
  height={475}
  sizes="15vw"
  className="animate-moveTopToBottom animation-iteration-count[infinite] duration-5000 ease-linear"
  style={{
    width: "15%",
    height: "auto",
  }}
/>

      
          <div className="absolute flex flex-wrap justify-between w-8/12 left-56 top-80">
        {['1', '2'].map((gifIndex) => (
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
      <div className="absolute flex flex-wrap justify-between w-3/4 left-56 bottom-20">
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
