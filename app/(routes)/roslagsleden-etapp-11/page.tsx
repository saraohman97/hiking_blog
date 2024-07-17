import Pagination from "@/components/pagination";
import Image from "next/image";

export default function BjornonPage() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-4">
        <small>15 juli, 2024</small>
        <div>/</div>
        <small>Norrtälje</small>
        <div>/</div>
        <small>Dagspromenad</small>
        <div>/</div>
        <small>Övernattning</small>
      </div>

      <h1 className="text-4xl font-bold">Roslagsleden Etapp 11</h1>

      <p className="font-bold mt-6">
        Roslagsleden är en 19mil lång vandring uppdelat i 11 etapper. Första
        etappen börjar i Danderyd och sista etappen slutar i Grisslehamn. Jag
        och min moster vandrar sista etappen baklänges med start i Grisslehamn.
        Etappen Sandviken - Grisslehamn är 2 mil lång.
      </p>

      {/* Första stycket */}
      <p className="my-6">
        Vi anlände i Grisslehamn söndagen den 14 juli och sov över på campingen.
        Byn var belägrat vid vattnet och hade allt mellan krogar/fik, en
        matbutik och en enkel minigolfbana. På morgonen gick vi en kort stund på
        en bilväg och sedan in på en fin skogsväg.
      </p>

      <div className="grid grid-cols-2 gap-2 mt-6">
        <Image
          src="/roslagsleden/etapp-11/1.JPG"
          alt="Roslagsleden etapp-11 Grisslehamn"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
        <Image
          src="/roslagsleden/etapp-11/2.JPG"
          alt="Roslagsleden etapp-11"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
      </div>

      {/* Andra stycket */}
      <p className="my-6">
        <span className="font-bold">Terräng</span> <br />
        Terrängen under turen varierade mellan vita sandstränder/klippor med
        havsutsikt, tätskog och enskilda vägar med stugor och sommarstugor.
        <br /> <br />
        Delar av skogen var skyddat som naturreservat och skyltar med historia
        dök upp emellanåt. Skogen var också full av blåbär och andra bär. Vid
        tillfällen var naturen nära inpå, så se upp för fästingar och ormar.
      </p>

      <div className="grid grid-cols-2 gap-2 mt-6">
        <Image
          src="/roslagsleden/etapp-11/3.JPG"
          alt="Roslagsleden etapp-11"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
        <Image
          src="/roslagsleden/etapp-11/4.JPG"
          alt="Roslagsleden etapp-11"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
        <Image
          src="/roslagsleden/etapp-11/7.JPG"
          alt="Roslagsleden etapp-11"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
        <Image
          src="/roslagsleden/etapp-11/8.JPG"
          alt="Roslagsleden etapp-11"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
      </div>

      {/* Tredje stycket */}
      <p className="my-6">
        <span className="font-bold">Klippklättring</span> <br />
        Efter mer än halva vägen till Sandviken, kom vi till stenklippor längst
        vattnet som man skulle klättra över. Efter en bra bit med klättring
        fortsätter stigen in i skogen.
      </p>

      <div className="grid grid-cols-2 gap-2 mt-6">
        <Image
          src="/roslagsleden/etapp-11/5.JPG"
          alt="Roslagsleden etapp-11"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
        <Image
          src="/roslagsleden/etapp-11/6.JPG"
          alt="Roslagsleden etapp-11"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
      </div>

      {/* Fjärde stycket */}
      <p className="my-6">
        <span className="font-bold">Camping</span> <br />
        Sista biten på vandringen var mer enskilda vägar och bostadsområden till
        man nådde Sandvikens camping.
        <br />
         När vi började närma oss campingen var det
        sent på dagen. Vi bestämde oss för att ringa och förvana ifall butiken
        stängde. Receptionen svarade att det var inga problem men det visade sig
        inte vara fallet när vi anlände. Till en liten och obemannad
        camping, lyckades vi tillslut få nyckeln till en sliten stuga och jag
        placerade tältet där det fick plats. Mat var dock svårare att få tag på då den enda butiken inom 5km var stängd. 
        <br />
        <br />
        Dagen därpå gick vi enskilda vägar till Älmsta stad. En mellanstor stad
        med kaféer, butiker och en matbutik. Vid matbutiken tog vi bussen hem
        mot Stockholm.
      </p>

      {/* <div className="grid grid-cols-2 gap-2 mt-6">
        <Image
          src="/roslagsleden/etapp-11/5.JPG"
          alt="Roslagsleden etapp-11"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
        <Image
          src="/roslagsleden/etapp-11/6.JPG"
          alt="Roslagsleden etapp-11"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
      </div> */}

      <a
        href="https://www.naturkartan.se/sv/stockholms-lan/sandviken-grisslehamn-roslagsleden-tapp-11"
        className="underline underline-offset-4 text-sm hover:text-green-700"
        target="_blank"
      >
        Naturkartan {"-->"}
      </a>
      <br />
      <a
        href="https://www.visitroslagen.se/roslagsleden"
        className="underline underline-offset-4 text-sm hover:text-green-700"
        target="_blank"
      >
        Visit roslagsleden {"-->"}
      </a>

      <Pagination leftName="Björnön" leftLink="bjornon" />
    </div>
  );
}
