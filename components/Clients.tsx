import Image from "next/image";
import { NAVIGATION } from "../consts";

export default function Clients() {
  return (
    <>
      <div className="py-6 pb-10 pt-10">
        <h2 className="text-center text-4xl pb-2">Trusted by</h2>
        <p className="text-center text-skydark-400">
          {" "}
          Request my CV on{" "}
          <a
            className="font-bold text-skydark-600"
            href={NAVIGATION.social.at(0)?.href}
          >
            LinkedIn{" "}
          </a>{" "}
          for full and more detailed description of my experience.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 pb-10">
          {[
            { src: "/static/img/clients/mattilsynet.png", alt: "Mattilsynet" },
            { src: "/static/img/clients/ngm.png", alt: "Norsk Gjennvinning Metall" },
            { src: "/static/img/clients/Telenor.png", alt: "Telenor" },
            { src: "/static/img/clients/slv.svg", alt: "Statens Legemiddelverk" },
            { src: "/static/img/clients/nokas.png", alt: "Nokas" },
            { src: "/static/img/clients/sb1.png", alt: "Sparebank1 Utvikling" },
            { src: "/static/img/clients/Hdir.svg", alt: "Helsedirektoratet" },
            { src: "/static/img/clients/Rema_1000.png", alt: "Rema 1000" },
            { src: "/static/img/clients/Nav.png", alt: "NAV" },
            { src: "/static/img/clients/Storebrand.png", alt: "Storebrand" },
            { src: "/static/img/clients/Kongsberg_Gruppen.png", alt: "Kongsberg Group" },
          ].map(({ src, alt }) => (
            <div key={alt} className="bg-[#ffffff] rounded-xl shadow-sm w-[220px] h-[100px] overflow-hidden relative">
              <Image
                src={src}
                alt={alt}
                layout="fill"
                className="object-contain p-4"
              />
            </div>
          ))}
      </div>
    </>
  );
}
