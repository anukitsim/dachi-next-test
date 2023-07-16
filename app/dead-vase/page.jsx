import Image from "next/image";

const Vase = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="relative">
        <Image src="/images/vase1.png" alt="vase1" width={550} height={400} className="mt-2" />
        <p className="text-[#484848] font-MPlus1 font-wide font-thin tracking-normal text-lg leading-6 w-8/12 mt-5 mb-10">
          The structures whole ideology is in connection with dead cells finding the structure in nature in the form of dried ground, turtle
          shell, a wall and many more items of every day. Vase was created specifically for dead plants. With an open body for the dried leafs
          to grow out of. Built on the structure vase was crafted by 3D printing parts and combining them together by hand, with 3D resin
          and Uv light in hand.
        </p>
        <div className="absolute top-1/2 left-1/10 transform -translate-x-1/20 -translate-y-1/8">
          <Image src="/images/vase3.png" alt="vase3" width={1000} height={1000} className='ml-72'  />
        </div>
      </div>

      <div>
        <p className="text-[#484848] font-MPlus1 font-thin tracking-wide text-lg leading-6 w-11/12 mt-2">
          Voronoi structures are geometric patterns that occur naturally in various systems, such as the distribution of cells in plant tissues,
          the shape of soap bubbles, and the arrangement of particles in a crystal lattice. Voronoi structures are characterised by a set of
          points in a space, known as seeds or generators, which partition the space into regions, called Voronoi cells, such that each cell
          contains all the points that are closer to its own generator than to any other.
        </p>
        <Image src="/images/vase2.png" alt="vase1"   width={700}
        height={475}
        className='mt-10 mb-10'
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }} />
      </div>
    </div>
  );
};

export default Vase;
