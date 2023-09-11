
// import dynamic from "next/dynamic";


// const Loading = dynamic(() => import("./loading"), { ssr: false });

export default function VideoPlayer() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);

  return (
    <div>
      <p className="font-sm font-MPlus1 text-[#484848] text-start font-thin">
        Museum of Louvre, has extended an invitation to twenty young creative
        professionals to present their distinctive interpretation of the
        institution through the medium of a 3 minute film. The initiative, aptly
        named "Louvre Looks," endeavors to convene creatives under the age of
        forty and foster a new perspective on the museum's rich and diverse
        collections.
      </p>
      <br />
      <p className="font-sm font-MPlus1 text-[#484848] text-start font-thin mb-5">
        In collaboration with artist Mykki Blanco, within the perimeter of this
        legendary institution, we have put together a volume that speaks of
        nostalgia, time, and the human relationship with the concept of
        infinity. It incarnates the upper bourgeoisie, but also the Revolution
        and radical change. It is a space of power and contradiction, with a
        magic sparked by the many forms of cultural and political cohesion.
      </p>

      
   
        <div>
          <iframe
            src="https://player.vimeo.com/video/804685785?h=53a3b36cd6&title=0&byline=0&portrait=0"
            className="aspect-video w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="caption-bottom text-right text-xs font-MPlus1 text-[#484848] font-normal">
            Le Témoin / The Witness
          </p>
          <p className="caption-bottom text-right text-xs font-MPlus1 text-[#484848] font-normal">
            © Mykki Blanco et Dachi-Giorgi Garuchava
          </p>
        </div>
  
    </div>
  )
}
