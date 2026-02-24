import { avatarUrl } from "../consts";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Welcome() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start py-8">
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
        <h2 className="text-3xl text-left">I accelerate enterprise transformation by architecting AI-infused, cloud-native platforms</h2>
        <p className="mt-2 text-left">
          Bridging strategic vision and hands-on delivery to modernize core systems with intelligent, scalable infrastructure.
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
                  .typeString("AI Strategy & Automation Lead")
                  .pauseFor(400)
                  .deleteAll()
              }}
            />{" "}
          </div>
        </div>
        {/* Supporting Line */}
        <p className="mt-6 text-base text-skydark-500 text-left max-w-2xl">
          From kickoff workshops to CI/CD pipelines and observability—delivering end-to-end solutions in autonomous, cross-functional teams.
        </p>

        {/* Downtime Note */}
        <p className="mt-4 text-sm text-skydark-400 text-left">
          Outside work, you’ll find me training at the gym or crafting new recipes in the kitchen.
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
