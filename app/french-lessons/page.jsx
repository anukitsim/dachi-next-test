import Image from "next/image";
import { Suspense } from "react";

const French = () => {
  return (
    <Suspense fallback='Loading...'>
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
    </Suspense>
  );
};

export default French;
