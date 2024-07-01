import Pagination from "@/components/pagination";

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
  const totalVikt = vikt.map((v) => v.vikt).reduce((partialSum, a) => partialSum + a, 0);

  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        <small>12 juni, 2024</small>
        <div>/</div>
        <small>Tips</small>
      </div>

      <h1 className="text-4xl font-bold">Fjäderlätt Packning</h1>

      <p className="font-bold mt-6">
        Lightweight är en packningstaktik. Eftersom hög packnigsvikt också tar
        energi under vandringen så väljer ultralätta vandrare att byta bort en
        del komfort för att spara energi.{" "}
      </p>

      <p className="my-6">
        <span className="font-bold">Viktigt</span> <br />
        Medan en lätt vandring är guld värt så bör det inte vara på allt för
        stor bekostnad av natten. Det kommer inte vara en trevlig vandring om du
        inte får tillräckligt med sömn och mat. Därför är det lämpligt att hålla
        värmen uppe på natten.
      </p>

      <p className="my-6">
        <span className="font-bold">3 för 3</span> <br />
        Som övernattande vandrare är packningen oftast större än dagsvandrarens.
        Det talas oftast om &quot;de stora 3&quot;, som är ryggsäck, tält och
        sovsäck. De väger mest i väskan, förutom mat och vatten, och bör därför
        inte väga mer än 3kg totalt.
      </p>

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
        preseningen så att inte vinden ska blåsa kallt in.
        <br />
        <br />
        Det andra problemet var matlagningsutrustingen. Att kunna laga varm mat
        på turen är guld värt, men i högsommaren är varm mat inte en
        nödvändighet. Därför har jag valt att lämna köket hemma.
      </p>
      <p className="font-bold">Vikt</p>
      <div className="border rounded p-10">
        <div className="grid grid-cols-3 gap-2 text-sm">
          {vikt.map((v) => (
            <div key={v.namn}>
              {v.namn}: <span className="text-green-600 font-bold">{v.vikt}g</span>
            </div>
          ))}
        </div>
        <p className="mt-10 border-t pt-10">Totalvikt: <span className="text-green-600 font-bold">{totalVikt} gram</span></p>
      </div>

      <p className="my-6">
        <span className="font-bold">Tips</span> <br />
        Lämna onödiga saker hemma. Mer är inte alltid bättre.
      </p>

      <Pagination rightName="Björnön" rightLink="bjornon" />
    </div>
  );
}
