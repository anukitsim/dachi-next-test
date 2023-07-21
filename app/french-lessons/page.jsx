import Image from "next/image"

const French = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 w-full h-screen overflow-hidden bg-[#080808]">
       
      </div>

      <div className="relative z-20">
      <Image
            alt="french-lessons"
            src="/images/french.png"
            width={700}
        height={475}
        className='mt-[-150px] ml-[-100px]'
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
          />
      </div>
    </>
  )
}

export default French
