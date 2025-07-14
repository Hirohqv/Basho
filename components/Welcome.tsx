import { avatarUrl } from "../consts";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Welcome() {
  return (
    <div className="text-centerq items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
      <div className="flex flex-col items-center space-x-2 pt-8 pb-8">
        <Image
          src={avatarUrl}
          alt="avatar"
          height={250}
          width={250}
          className="rounded-3xl"
        />
      </div>
      <div className=" pt-8 pb-8 xl:col-span-2">
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
        <p className="mt-6 text-base text-gray-700 text-left max-w-2xl">
          From kickoff workshops to CI/CD pipelines and observability—delivering end-to-end solutions in autonomous, cross-functional teams.
        </p>

        {/* Downtime Note */}
        <p className="mt-4 text-sm text-gray-500 text-left">
          Outside work, you’ll find me strengthening at the gym or crafting new recipes in the kitchen.
        </p>
      </div>
    </div>
  );
}
