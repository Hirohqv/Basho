import Image from "next/image";
import { NAVIGATION } from "../consts";

export default function Clients() {
  return (
    <>
      <div className="py-6 pb-10 pt-10">
        <h1 className="text-center text-4xl">Clients I´ve worked with</h1>
        <p className="text-center text-skydark-200">
          {" "}
          Request my CV on{" "}
          <a
            className="font-bold text-skydark-400"
            href={NAVIGATION.social.at(0)?.href}
          >
            LinkedIn{" "}
          </a>{" "}
          for full and more detailed description of my experience.
        </p>
      </div>
      <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:grid-cols-3 pb-10">
        <div>
          <Image
            src="/static/img/clients/Telenor.png"
            alt="Telenor"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/clients/slv.svg"
            alt="Statens Legemiddelverk"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>

        <div>
          <Image
            src="/static/img/clients/nokas.png"
            alt="Nokas"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/clients/sb1.png"
            alt="Sparebank1 Utvikling"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/clients/Hdir.svg"
            alt="Helsedirektoratet"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/clients/Rema_1000.png"
            alt="Rema 1000"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/clients/Nav.png"
            alt="NAV"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/clients/Storebrand.png"
            alt="Storebrand"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/clients/Kongsberg_Gruppen.png"
            alt="Kongsberg Group"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
