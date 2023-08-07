import Image from "next/image";

const French = () => {
  return (
    <>
      <div className="grid grid-cols-12 min-[300px]:flex min-[300px]:justify-center">
        <Image
          alt="french-lessons"
          src="/images/french.png"
          width={700}
          height={475}
          className="
        col-start-1
        "
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

export default French;
