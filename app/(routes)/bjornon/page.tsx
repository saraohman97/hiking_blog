import Pagination from "@/components/pagination";

export default function BjornonPage() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        <small>12 juni, 2024</small>
        <div>/</div>
        <small>Dagspromenad</small>
      </div>

      <h1 className="text-4xl font-bold">Björnön, Västerås</h1>

      <p className="font-bold mt-6">
        Lightweight är en packningstaktik. Eftersom hög packnigsvikt också tar
        energi under vandringen så väljer ultralätta vandrare att byta bort en
        del komfort för bekvämrare vandring.{" "}
      </p>

      <p className="my-6">
        Som övernattande vandrare är packningen oftast större. Det talas oftast
        om &quot;de stora 3&quot;, som är ryggsäck, tält och sovsäck. De väger
        mest i väskan, förutom mat och vatten, och bör därför inte väga mer än
        3kg totalt.
        <br />
        <br />
        Min ryggsäck består av presening (och tältpinnar), sovsäck,
        liggunderlag, vattenflaskor och mat. I ytterfacket har jag första
        hjälpen, kniv, ficklampa och karta.
      </p>

      <Pagination leftName="Ultralätt packning" leftLink="ultralatt_packning" />
    </div>
  );
}
