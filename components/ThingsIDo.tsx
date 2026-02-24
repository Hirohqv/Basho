export default function ThingsIDo() {
  return (
    <div className="py-6">
      <div>
        <h1 className=" text-4xl text-center pb-10 pt-10">Areas of Expertise</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl mb-3">Agile Leadership & Product Ownership</h3>
          <p>
            I step in as Product Owner or Product Lead on complex initiatives — keeping teams aligned, backlogs sharp, and delivery moving without the overhead.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl mb-3">Enterprise & Solution Architecture</h3>
          <p>
            I design systems that don't become legacy two years later — from integration patterns to event-driven architecture, built to scale with your business.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl mb-3">Cloud & Platform Strategy</h3>
          <p>
            Whether you're migrating to Azure, AWS or GCP — or already there and struggling with governance and costs — I define the platform strategy and make it stick.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl mb-3">AI & Automation</h3>
          <p>
            I help organizations move beyond AI pilots — embedding Copilot and intelligent services into real workflows that teams actually adopt and trust.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl mb-3">DevOps & SRE</h3>
          <p>
            From GitHub Actions to Terraform and observability — I build the delivery machinery that lets your teams ship confidently and sleep at night.
          </p>
        </div>
        <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl mb-3">Strategic Advisory</h3>
          <p>
            I speak both boardroom and codebase. When IT and business are misaligned, I bridge the gap — turning ambiguous strategy into concrete roadmaps with real ROI.
          </p>
        </div>
      </div>
    </div>
  );
}
