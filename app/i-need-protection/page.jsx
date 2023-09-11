import Image from "next/image";

const Protection = () => {
  return (
    <Image
      src="/images/protection1.png"
      alt="protection"
      sizes="(min-width: 2140px) calc(79.88vw + 96px), (min-width: 1280px) calc(92.86vw - 179px), (min-width: 1040px) 66.36vw, (min-width: 640px) 100vw, (min-width: 340px) calc(100vw + 50px), calc(1395vw - 4094px)"
      width={500}
      height={500}
      className="w-full h-auto"
    />
  );
};

export default Protection;
