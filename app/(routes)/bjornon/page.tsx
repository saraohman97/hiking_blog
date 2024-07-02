import Pagination from "@/components/pagination";
import Image from "next/image";

export default function BjornonPage() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        <small>12 juni, 2024</small>
        <div>/</div>
        <small>Västerås</small>
        <div>/</div>
        <small>Dagspromenad</small>
      </div>

      <h1 className="text-4xl font-bold">Björnön</h1>

      <p className="font-bold mt-6">
        Björnön är en långsmal ö i Mälaren som kopplas med fastlandet genom en
        bro. Det finns fyra motionsspår på Björnön; 1.25km, 2.5km, 5km, 10km och
        en naturstig på 2.2km.
      </p>

      <p className="my-6">
        Det finns flera parkeringar och busshållplatser på Björnön. Dessutom två
        kaféer, camping, eldstäder, badplatser och så mycket mer. Björnön är
        generellt välmarkerat och lättgående, den enda förvirringen kan ske i
        början av 10km spåret. Spåret går till ett sommarstugområde och saknar
        markering till vägsplittringen av 5km och 10km.
      </p>

      <a
        href="https://www.naturkartan.se/sv/vastmanlands-lan/bjornon-2"
        className="underline underline-offset-4 text-sm hover:text-green-700"
      >
        Karta {"-->"}
      </a>

      <div className="grid grid-cols-2 gap-2 mt-6">
        <Image
          src="/bjornon/image1.JPG"
          alt="Björnön"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
        <Image
          src="/bjornon/image2.JPG"
          alt="Björnön"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
        <Image
          src="/bjornon/image3.JPG"
          alt="Björnön"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
        <Image
          src="/bjornon/image4.JPG"
          alt="Björnön"
          width={1000}
          height={1000}
          className="object-cover max-h-[500px] rounded"
        />
      </div>

      <Pagination leftName="Ultralätt packning" leftLink="ultralatt_packning" />
    </div>
  );
}
