import Image from "next/image";

const Obj = () => {
  return (
    <div className="grid gid-cols-12 grid-rows-1 max-[900px]:grid-rows-2">
      <div className="col-start-1 col-span-6 row-start-1 max-[900px]:col-start-1 max-[900px]:col-span-6  max-[900px]:row-start-1 ">
        <Image
             src='/images/obj1.png'
             alt="obj1"
             width={1500}
             height={800}
             className='ml-[-150px] max-[900px]:ml-[-50px] max-[900px]:w-[1000px] min-[2000px]:ml-[-300px] min-[1900px]:ml-[-200px] min-[1800px]:ml-[-200px] min-[1700px]:ml-[-200px]'
        />

      </div>
      <div className="col-start-7 col-span-6 row-start-1 ">
      <Image
             src='/images/obj2.png'
             alt="obj1"
             width={500}
             height={500}
             
             className='ml-10 min-[2000px]:w-[700px] min-[1900px]:w-[700px] min-[1800px]:w-[600px] min-[1700px]:w-[600px] max-[900px]:ml-10'
        />

      </div>
      <div className="col-start-4 col-span-4 row-start-1 z-50 self-center">
      <Image
             src='/images/Text.png'
             alt="obj1"
             width={400}
             height={400}
             className='mt-[-150px] min-[2000px]:ml-[-200px] min-[2000px]:w-[600px] min-[1900px]:w-[400px] min-[1900px]:ml-[-20px] min-[1800px]:w-[400px] min-[1800px]:ml-[-20px] min-[1700px]:w-[400px] max-[900px]:w-[500px] max-[900px]:ml-[20px] max-[900px]:mt-[-50px]'
        />

      </div>

      <div className="col-start-1 col-span-6 row-start-2">
        <Image
             src='/images/obj3.png'
             alt="obj3"
             width={1500}
             height={800}
             className='ml-[-150px] max-[900px]:ml-0 max-[900px]:w-[1000px] min-[2000px]:ml-[-300px] min-[1900px]:ml-[-200px] min-[1800px]:ml-[-200px] min-[1700px]:ml-[-200px]'
        />

      </div>
      <div className="col-start-7 col-span-6 row-start-2 ">
      <Image
             src='/images/obj5.png'
             alt="obj1"
             width={1500}
             height={800}
             
             className='ml-10 mb-10  min-[2000px]:w-[700px] min-[1900px]:w-[700px] min-[1800px]:w-[600px] min-[1700px]:w-[600px] '
        />

      </div>
      <div className="col-start-4 col-span-4 row-start-2 z-50 self-center">
      <Image
             src='/images/obj4.png'
             alt="obj1"
             width={300}
             height={300}
             className='mt-[-350px] ml-20 min-[2000px]:ml-[-200px] min-[2000px]:w-[600px] min-[1900px]:w-[400px] min-[1900px]:ml-[-20px] min-[1800px]:w-[400px] min-[1800px]:ml-[-20px] min-[1700px]:w-[400px] max-[900px]:w-[100px] max-[900px]:mt-[-50px]'
        />

      </div>
     
    </div>
  );
};

export default Obj;
