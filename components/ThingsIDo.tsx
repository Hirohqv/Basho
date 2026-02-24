export default function ThingsIDo() {
  return (
    <div className="pb-6">
      <div>
        <h2 className="text-4xl text-center pb-10 pt-4">Areas of Expertise</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm flex flex-col">
          <h3 className="text-2xl mb-3 flex-shrink-0">Leadership & Advisory</h3>
          <p className="flex-grow">
I step in as Product Owner, Product Lead or strategic advisor — keeping teams aligned, delivery moving, and strategy grounded in reality. Whether you need someone to own the backlog, chair the steering group or advise the CTO — I've done all three.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm flex flex-col">
          <h3 className="text-2xl mb-3 flex-shrink-0">Enterprise & Solution Architecture</h3>
          <p className="flex-grow">
I design systems that don't become legacy two years later — integration patterns, event-driven architecture, built to scale.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm flex flex-col">
          <h3 className="text-2xl mb-3 flex-shrink-0">Cloud & Platform Strategy</h3>
          <p className="flex-grow">
Migrating to Azure, AWS or GCP — or already there and struggling with governance and costs — I define the platform strategy and make it stick.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm flex flex-col">
          <h3 className="text-2xl mb-3 flex-shrink-0">AI Strategy & Adoption</h3>
          <p className="flex-grow">
I define the AI roadmap — then stay in the room. Department by department, I turn strategy into real adoption, tackling data quality and process change until AI actually sticks.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm flex flex-col">
          <h3 className="text-2xl mb-3 flex-shrink-0">Agentic AI & Intelligent Automation</h3>
          <p className="flex-grow">
I design and deliver multi-agent systems and tool-use agents — across Copilot Studio, Azure AI, M365 Copilot, OpenAI and Claude — moving teams beyond prompting into autonomous, orchestrated workflows.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm flex flex-col">
          <h3 className="text-2xl mb-3 flex-shrink-0">DevOps & SRE</h3>
          <p className="flex-grow">
From GitHub Actions to Terraform and observability — I build the delivery machinery that lets your teams ship confidently and sleep at night.
          </p>
        </div>
      </div>
    </div>
  );
}
