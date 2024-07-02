import Image from "next/image";
import { CiMapPin } from "react-icons/ci";

const BruksledenPage = () => {
  return (
    <div className="w-full pr-10">
      <div>
        <h1 className="text-6xl">Bruksleden Etapp 1b</h1>
        <div className="flex items-center gap-4">
          <small>12 juni, 2024</small>
          <div>/</div>
          <small>250 km</small>
          <div>/</div>
          <small>Västmanland</small>
        </div>

        <p className="font-bold">
          Bruksleden har 27 etapper och går igenom Västmanland.
        </p>

        <p className="my-6">
          Bruksleden börjar på{" "}
          <span className="underline cursor-pointer text-zinc-400">
            Rocklunda, Västerås
          </span>{" "}
          och följer en orange markering. Eftersom jag bor i Västerås City så
          gick jag längst Svartån, förbi lottshusen och kyrkogården. Efter en
          bit av asvaltväg och grusväg så kommer man äntligen till skogen.
          <br />
          <br />I skogsslungan är det svårt att hitta stigen pga. fallna träd.
          Stigen går ända fram till Skålbystugan, vilket är en liten stuga med
          fyra sängar, ett das och eldplats. Stugan har en unken lukt och
          känsla, så sov över på eget behag. Det finns knappt tältplats på
          berget, men under berget finns det en del gräsplättar.{" "}
        </p>
        <div className="mb-2 rounded hover:bg-rose-50 hover:text-red-500 cursor-pointer w-fit flex items-center px-2 py-1">
          <CiMapPin size={20} />
          <span className="font-thin">Rocklunda</span>
        </div>
        <div className="grid grid-cols-2 gap-2 relative cursor-pointer">
          <Image
            src="/berg.jpg"
            width={200}
            height={200}
            alt=""
            className="aspect-square object-cover rounded-xl w-full hover:absolute inset-0"
          />
          <Image
            src="/berg.jpg"
            width={200}
            height={200}
            alt=""
            className="aspect-square object-cover rounded-xl w-full"
          />
          <Image
            src="/berg.jpg"
            width={200}
            height={200}
            alt=""
            className="aspect-square object-cover rounded-xl w-full"
          />
          <Image
            src="/berg.jpg"
            width={200}
            height={200}
            alt=""
            className="aspect-square object-cover rounded-xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BruksledenPage;
