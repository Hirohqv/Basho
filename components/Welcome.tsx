import { avatarUrl } from "../consts";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Welcome() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start pt-8 pb-4">
      <div className="flex-shrink-0 flex justify-center md:block">
        <Image
          src={avatarUrl}
          alt="avatar"
          height={250}
          width={250}
          className="rounded-3xl"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl text-left">Senior tech consultant — I help Norwegian enterprises ship better, faster</h2>
        <p className="mt-2 text-left">
          11+ years of experience across public sector, finance, telecom, retail and defence — I've led architecture, delivery and platform work at organizations like Telenor, NAV, Storebrand and Kongsberg.
        </p>
        <div className="mt-2 text-left">
          I work alongside teams wearing these hats:
          <div className="text-xl">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString("Technical Product Owner & Lead")
                  .pauseFor(400)
                  .deleteAll()
                  .typeString("Solution & Enterprise Architect")
                  .pauseFor(400)
                  .deleteAll()
                  .typeString("Cloud & DevOps Engineer")
                  .pauseFor(400)
                  .deleteAll()
                  .typeString("Agentic AI Architect")
                  .pauseFor(400)
                  .deleteAll()
              }}
            />{" "}
          </div>
        </div>
        {/* Supporting Line */}
        <p className="mt-6 text-base text-skydark-500 text-left max-w-2xl">
          Available for senior consultant, tech lead, or interim roles — I plug in from day one and deliver.
        </p>

        {/* CTA */}
        <a
          href="https://www.linkedin.com/in/hirohqv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-5 py-2.5 bg-skydark-800 text-skywhite rounded-lg text-sm font-medium hover:bg-skydark-700 transition-colors"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}
