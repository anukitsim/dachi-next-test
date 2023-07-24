import Image  from "next/image";

const Hyphen = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 w-full h-screen overflow-hidden">
        <video className="absolute w-full h-full object-cover" autoPlay muted playsInline loop>
          <source src="/video/background-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10">
          <Image
            alt="background"
            src="/images/background-img.png"
            layout='fill'
            objectFit='cover'
            quality={100}
            className='opacity-50'
          />
        </div>
      </div>

      <div className="relative z-20">
      <Image
            alt="hyphen"
            src="/images/hyphenImg.png"
            width={700}
        height={475}
        className='flex justify-center mt-[-100px] min-[300px]:flex min-[300px]:justify-center'
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
          />
      </div>
    </>
  );
};

export default Hyphen;
