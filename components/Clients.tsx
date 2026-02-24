import Image from "next/image";
import { NAVIGATION } from "../consts";

export default function Clients() {
  return (
    <>
      <div className="py-6 pb-10 pt-10">
        <h1 className="text-center text-4xl pb-2">Companies/organizations I've worked with </h1>
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
          <div className="flex items-center justify-center bg-[#ffffff] rounded-xl p-6 shadow-sm w-[220px] h-[100px]">
            <Image
              src="/static/img/clients/mattilsynet.png"
              alt="Mattilsynet"
              height={80}
              width={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-[#ffffff] rounded-xl p-6 shadow-sm w-[220px] h-[100px]">
            <Image
              src="/static/img/clients/ngm.png"
              alt="Norsk Gjennvinning Metall"
              height={80}
              width={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-[#ffffff] rounded-xl p-6 shadow-sm w-[220px] h-[100px]">
            <Image
              src="/static/img/clients/Telenor.png"
              alt="Telenor"
              height={80}
              width={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-[#ffffff] rounded-xl p-6 shadow-sm w-[220px] h-[100px]">
            <Image
              src="/static/img/clients/slv.svg"
              alt="Statens Legemiddelverk"
              height={80}
              width={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-[#ffffff] rounded-xl p-6 shadow-sm w-[220px] h-[100px]">
            <Image
              src="/static/img/clients/nokas.png"
              alt="Nokas"
              height={80}
              width={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-[#ffffff] rounded-xl p-6 shadow-sm w-[220px] h-[100px]">
            <Image
              src="/static/img/clients/sb1.png"
              alt="Sparebank1 Utvikling"
              height={80}
              width={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-[#ffffff] rounded-xl p-6 shadow-sm w-[220px] h-[100px]">
            <Image
              src="/static/img/clients/Hdir.svg"
              alt="Helsedirektoratet"
              height={80}
              width={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-[#ffffff] rounded-xl p-6 shadow-sm w-[220px] h-[100px]">
            <Image
              src="/static/img/clients/Rema_1000.png"
              alt="Rema 1000"
              height={80}
              width={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-[#ffffff] rounded-xl p-6 shadow-sm w-[220px] h-[100px]">
            <Image
              src="/static/img/clients/Nav.png"
              alt="NAV"
              height={80}
              width={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-[#ffffff] rounded-xl p-6 shadow-sm w-[220px] h-[100px]">
            <Image
              src="/static/img/clients/Storebrand.png"
              alt="Storebrand"
              height={80}
              width={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-[#ffffff] rounded-xl p-6 shadow-sm w-[220px] h-[100px]">
            <Image
              src="/static/img/clients/Kongsberg_Gruppen.png"
              alt="Kongsberg Group"
              height={80}
              width={200}
              className="object-contain"
            />
          </div>
      </div>
    </>
  );
}
