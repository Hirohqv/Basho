export default function ThingsIDo() {
  return (
    <div className="py-6">
      <div>
        <h1 className=" text-4xl text-center pb-10 pt-10">Areas of Expertise</h1>
      </div>
      <div className="margin:0 grid gap-10 text-center md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-2xl">Agile Leadership & Product Ownership</h3>
          <p>
            Accelerating delivery by serving as Product Owner and Product Lead—guiding cross-functional product teams through structured sprints, risk-driven planning and continuous feedback loops.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">Enterprise & Solution Architecture</h3>
          <p>
            Crafting resilient, future-proof systems that evolve with business needs and scale seamlessly.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">Cloud & Platform Strategy</h3>
          <p>
            Defining PaaS roadmaps, governance and security best practices for robust, cost-efficient cloud platforms.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">AI & Automation</h3>
          <p>
            Designing Copilot-driven workflows and intelligent services to boost productivity and drive adoption.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">DevOps & SRE</h3>
          <p>
            Implementing IaC, CI/CD pipelines and proactive monitoring to ensure rapid, reliable releases.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">Strategic Advisory</h3>
          <p>
            Bridging IT and business—translating strategy into roadmaps, governance models and measurable ROI.
          </p>
        </div>
      </div>
    </div>
  );
}
