import Pagination from "@/components/pagination";
import Image from "next/image";

const vikt = [
  {
    namn: "Liggunderlag",
    vikt: 470,
  },
  {
    namn: "Sovsäck",
    vikt: 520,
  },
  {
    namn: "Tältpinnar",
    vikt: 165,
  },
  {
    namn: "Vatten 50cl",
    vikt: 530,
  },
  {
    namn: "Vattenfilter",
    vikt: 65,
  },
  {
    namn: "Första hjälpen/ necessär",
    vikt: 165,
  },
  {
    namn: "Toalettpapper",
    vikt: 15,
  },
  {
    namn: "Karta",
    vikt: 20,
  },
  {
    namn: "Ficklampa",
    vikt: 20,
  },
  {
    namn: "Kniv",
    vikt: 95,
  },
];

export default function packningPage() {
  const totalVikt = vikt
    .map((v) => v.vikt)
    .reduce((partialSum, a) => partialSum + a, 0);

  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        <small>2 juli, 2024</small>
        <div>/</div>
        <small>Tips</small>
      </div>

      <h1 className="text-4xl font-bold">Fjäderlätt Packning</h1>

      <p className="font-bold mt-6">
        Lightweight är en packningstaktik som handlar om att hitta en balans på
        vandringen. Eftersom hög packnigsvikt tar en del energi under vandringen
        så väljer ultralätta vandrare att byta bort en del komfort prylar för
        att gå lättare från A till B. Det kan vara att byta in stora tältet till
        en presening eller boka en stuga på vägen. Eller om ni är flera vandrare
        i ett sällskap så går det att sampacka.
      </p>

      <p className="my-6">
        <span className="font-bold">Viktigt</span> <br />
        Medan en lätt vandring är guld värt så bör det inte vara på allt för
        stor bekostnad av natten. Det kommer inte vara en trevlig vandring om du
        inte får tillräckligt med sömn och mat. Därför är det lämpligt att hålla
        värmen uppe på natten. Till exempel att hindra att sova direkt på marken
        utan liggunderlag, marken är kyligare än man kan tro. Ett annat exempel
        kan vara att inte sova i vindläge, om preseningen inte når ner på marken
        så bör du bygga en valgrav runt.
      </p>

      <div className="grid md:grid-cols-2 w-full gap-2">
        <Image
          src="/pack/stuga.jpg"
          alt="Stuga"
          width={1000}
          height={1000}
          className="rounded shadow max-md:max-h-[500px] object-cover"
        />
        <Image
          src="/pack/old-pack2.jpg"
          alt="Packning"
          width={1000}
          height={1000}
          className="rounded shadow max-md:max-h-[500px] object-cover"
        />
      </div>

      <p className="my-6">
        <span className="font-bold">3 för 3</span> <br />
        De flesta ultralätta packare har hört talas om 3 för 3 principen.
        Principen säger att dina tre tyngsta prylar; rygsäck, tält och sovsäck,
        inte bör överträda 3kg. Detta är svårare att ordna än man kan tro. Min
        första vandringsryggsäck vägde hela 2kg och var i god kvalitet. Dock har
        god kvalitet inte mycket betydelse när väskan är för tung att bära.
        Nuförtiden har jag en enkel ryggsäck som jag lånade av mina föräldrars
        ryggsäck-skåp. Lätt, smidig och gratis.
        <br />
        Tält och sovsäck är svårare att få gratis. Lightweight är oftast dyrare,
        skörare och finns oftast inte i 3D butiker. Här kommer det behövas en
        del research och investeringstänk.
      </p>

      <Image
        src="/pack/pack.JPG"
        alt="Packning"
        width={1000}
        height={1000}
        className="rounded shadow max-h-[500px] object-cover"
      />

      <p className="my-6">
        <span className="font-bold">Min packning</span> <br />
        Min ryggsäck består av presening (och tältpinnar), sovsäck,
        liggunderlag, vattenflaskor och mat. I ytterfacket har jag första
        hjälpen, kniv, ficklampa och karta.
        <br /> <br />
        Första problemet jag stötte på med lightweight var sovsituationen. Jag
        brukar oftast gå med min moster som föredrar att sova i trävindskydd som
        är placerade på de populära ställena, eller att hyra stuga. Personligen
        passar dessa alternativ inte mig då den mustiga luften tar över. Så jag
        valde att köpa ett tält. Eftersom även enmanstält var för tungt så jag
        tar bara med preseningen och tältpinnar. Självaste skelettet byter jag
        med en pinne i skogen och kanterna täcker jag som en vallgrav runt
        preseningen så att inte vinden ska blåsa kallt in. Preseningen passar
        också perfekt som ryggstöd i ryggsäcken.
        <br />
        <br />
        Det andra problemet var matlagningsutrustingen. Att kunna äta varm mat
        på turen är guld värt, men är varm mat på högsommaren verkligen en
        nödvändighet? Därför har jag valt att lämna köket hemma och tar med mig
        mackor, tortilla och småsnacks. Det finns alltid iskaffepulver och bars
        i min väska för energi och sockersug. <br /> <br />
        Det går dock absolute att skaffa ett ultralätt kök på vandringen. Här är
        några av mina favoriter:
      </p>
      <div className="grid grid-cols-3 gap-2 my-6">
        <div className="border border-stone-400 rounded-xl p-4">
          <Image
            src="/pack/gas.jpg"
            alt=""
            width={500}
            height={500}
            className="aspect-square"
          />
          <div>
            Spis <br />
            <span>25g</span>
          </div>
        </div>

        <div className="border border-stone-400 rounded-xl p-4">
          <Image
            src="/pack/kastrull.jpg"
            alt=""
            width={500}
            height={500}
            className="aspect-square"
          />
          <div>
            Kastrull <br />
            <span>75g</span>
          </div>
        </div>

        <div className="border border-stone-400 rounded-xl p-4">
          <Image
            src="/pack/sked.jpg"
            alt=""
            width={500}
            height={500}
            className="aspect-square"
          />
          <div>
            Sked <br />
            <span>15g</span>
          </div>
        </div>
      </div>

      <p className="font-bold">Vikt</p>
      <div className="border rounded p-2 sm:p-10">
        <div className="grid sm:grid-cols-3 grid-flow-row gap-2 text-sm">
          {vikt.map((v) => (
            <div key={v.namn}>
              {v.namn}:{" "}
              <span className="text-green-600 font-bold">{v.vikt}g</span>
            </div>
          ))}
        </div>
        <p className="mt-2 sm:mt-10 border-t pt-2 sm:pt-10">
          Totalvikt:{" "}
          <span className="text-green-600 font-bold">{totalVikt} gram</span>
        </p>
      </div>

      <p className="my-6">
        <span className="font-bold">Tips</span> <br />
        Förutom de stora 3, finns det alltid utrymme för förbättring i din
        packning. Det första är att lämna onödiga saker hemma.{" "}
        <span className="underline underline-offset-4">Mer</span> är inte alltid
        bättre. Det behövs ingen sax, ingen hel toalettrulle eller hela
        medicinskåpet för &quot;i fall om att&quot;- situationer.
      </p>

      <Pagination rightName="Björnön" rightLink="bjornon" />
    </div>
  );
}
