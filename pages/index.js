export default function Home() {
  return (
    <div className="flex max-w-screen-xl mx-auto">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 px-4 pt-10 text-sm text-gray-600 sticky top-10 h-screen">
        <nav className="space-y-4">
          <a href="#background" className="block hover:text-black">My Background</a>
          <a href="#sectors" className="block hover:text-black">Sectors of Focus</a>
          <a href="#themes" className="block hover:text-black">Themes I'm Excited About</a>
          <a href="#teams" className="block hover:text-black">Early Stage Teams</a>
          <a href="#markets" className="block hover:text-black">Markets & Business</a>
          <a href="#help" className="block hover:text-black">What I Can Help With</a>
          <a href="#favorites" className="block hover:text-black">Favorites</a>
          <a href="#contact" className="block hover:text-black">Contact</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 py-10 px-4 text-gray-900 font-sans">
        <h1 className="text-4xl font-bold mb-6">Notes from the Edge</h1>

        <section id="background" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">My Background</h2>
          <p>
            I’m an early stage investor at Accel. I spend most of my time on AI & cybersecurity, and opportunistically on deeptech & consumer platforms.
          </p>
          <p className="mt-2">
            Previously, I was an operator at a consumer health platform called Mosaic Wellness. They're backed by Sequoia Capital, Matrix Partners and Elevation Capital. I joined them at ~$10M topline and helped scale to ~$50M by setting up their telehealth business unit from scratch.
          </p>
        </section>

        <section id="sectors" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Sectors of Focus</h2>
          <ul className="list-disc list-inside">
            <li>P0 – AI, Cybersecurity</li>
            <li>P1 – Evaluate opportunistically: Consumer platforms/brands, Financial Services, Deep tech</li>
          </ul>
        </section>

        <section id="themes" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Themes I'm Excited About (Representative, Not Exhaustive)</h2>
          <p className="text-sm text-gray-500 mb-4">Examples below are companies I like in these categories. I may or may not have any affiliation with them.</p>

          <p className="font-semibold mt-4">1. Vertical AI Agents</p>
          <ul className="list-disc list-inside text-sm">
            <li>Vertical specific Voice AI agents – <a href="https://www.poly.ai">Poly AI</a>, <a href="https://www.assorthealth.com">Assort Health</a>, <a href="https://www.vocalityhealth.com">Vocality Health</a>, <a href="https://www.happyrobot.ai">Happyrobot</a></li>
            <li>AI agents for Life Sciences</li>
            <li>AI-powered OS for Data Centres</li>
            <li>AI agents for Cloud migration</li>
            <li>AI agents for BFSI compliance</li>
            <li>AI co-pilot for radiologists</li>
            <li>AI agents for Oil & Gas industry</li>
            <li>AI-powered travel booking platform</li>
          </ul>

          <p className="font-semibold mt-4">2. AI-Enabled Agencies / Services</p>
          <ul className="list-disc list-inside text-sm">
            <li>Salesforce/SAP implementation agency</li>
            <li>AI-powered Conversion rate optimisation agency – <a href="https://fibr.ai/">Fibr AI</a></li>
          </ul>

          <p className="font-semibold mt-4">3. AI Infra & Tooling</p>
          <ul className="list-disc list-inside text-sm">
            <li>AI-powered Data Documentation – <a href="https://www.getzingle.com/">Zingle</a></li>
            <li>Scale AI for audio – <a href="https://www.withdavid.ai/">David AI</a></li>
            <li>Foundational model for weather prediction</li>
            <li>GEO – Generative engine optimization</li>
            <li>Observability for AI agents</li>
          </ul>

          <p className="font-semibold mt-4">4. Consumer/Prosumer AI</p>
          <ul className="list-disc list-inside text-sm">
            <li>AI companions for kids</li>
            <li>AI coach for retail investors</li>
            <li>AI-native video generation/editing platform</li>
          </ul>

          <p className="font-semibold mt-4">5. Knowledge Work</p>
          <ul className="list-disc list-inside text-sm">
            <li>Gong for high ticket offline sales</li>
            <li>Video AI agent for pre-sales & onboarding</li>
            <li>AI co-pilots for Site Reliability Engineers (SREs)</li>
            <li>Synthetic humans for UI/UX workflow validations</li>
          </ul>
        </section>
        <section id="themes-cybersecurity" className="mb-8">
          <p className="text-xl font-bold mt-6">Cybersecurity</p>

          <p className="font-semibold mt-4">1. Infrastructure Security</p>
          <ul className="list-disc list-inside text-sm">
            <li>Zero CVE hardened container images – <a href="https://www.chainguard.dev">Chainguard</a></li>
            <li>Security for MCP servers</li>
            <li>AI native email security</li>
          </ul>

          <p className="font-semibold mt-4">2. Security Data & Observability</p>
          <ul className="list-disc list-inside text-sm">
            <li>Security data fabric/Data pipeline management platform – <a href="https://www.cribl.io">Cribl</a></li>
            <li>AI-powered SOC – Competitive market but differentiated wedge/insight on GTM could make it interesting</li>
          </ul>

          <p className="font-semibold mt-4">3. Identity & Access</p>
          <ul className="list-disc list-inside text-sm">
            <li>Identity Security for Agents</li>
          </ul>

          <p className="font-semibold mt-4">4. Security Services</p>
          <ul className="list-disc list-inside text-sm">
            <li>Security Design Reviews – <a href="https://seezo.io">Seezo</a></li>
          </ul>
        </section>

        <section id="teams" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What Do I Look Out For in Early Stage Teams?</h2>
          <ul className="list-disc list-inside text-sm">
            <li>Sharp articulation of founder's right to win</li>
            <li>Early signs of founders’ ability to attract high quality talent</li>
            <li>Very clear articulation of the problem statement – Important to establish the pain in status quo via a customer case study (existing headcount/headcount spend, how much time does it take to solve the problem, what is the existing tech stack)</li>
            <li>Demo of status quo workflows – I don’t think enough founders do this today</li>
            <li>Brownie points for founders who have already moved to the Bay Area</li>
            <li>Design pilots/Paid customers in US</li>
            <li>Clear & honest distinction between live / contracted / advanced-stage conversation ARR</li>
            <li>Sticky businesses – Integrations, Multi-agent complex workflows</li>
            <li>Moats - Built on non-publicly available data that cannot be crawled by LLMs, RLHF baked into workflows that makes your agents better over time</li>
            <li>Any unique right to win for this business to be built out of India? For eg AI Services</li>
            <li>High bar on product and design sense of website/demo – <a href="https://elevenlabs.io">Eleven Labs</a>, <a href="https://www.rox.com">Rox</a></li>
          </ul>
        </section>

        <section id="markets" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Loose Frameworks for How I Think About Markets & Business</h2>
          <ul className="list-disc list-inside text-sm">
            <li>Ideally prefer $2–3B+ markets</li>
            <li>Bottoms-up TAM calculation builds more confidence than top-down; triangulation of both is best</li>
            <li>If TAM is small, it should still be {'>'}$500M</li>
            <li>If TAM is {'<'}$1B, then either:
              <ul className="list-disc ml-6">
                <li>It should be growing 15%+ CAGR</li>
                <li>Or there must be a clear articulation of how TAM expands via Act 1 → Act 2 progression</li>
              </ul>
            </li>
            <li>Best way to articulate TAM in software/AI: show existing spend on headcount/software in the category</li>
            <li>Clearly highlight top 3 players in the space with their scale to build category confidence</li>
            <li>"Sharp answer to can this business grow fast?": Low time to value + Low time to implement + Common pain point in ICP</li>
            <li>I like categories with sleepy large incumbents (10+ yrs since a $100M+ business was built), fragmented systems of record, coordination via email/Excel/PPT/docs, and/or unique tech/IP wedge</li>
          </ul>
        </section>

        <section id="help" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What Can I Help With?</h2>
          <ul className="list-disc list-inside">
            <li>Hiring</li>
            <li>Customer introductions in my network</li>
            <li>Feedback on Pitch Deck</li>
          </ul>
        </section>

        <section id="favorites" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Favorites</h2>
          <p className="italic mb-1">Newsletters</p>
          <ul className="list-disc list-inside text-sm">
            <li><a href="https://www.readthegeneralist.com/">Generalist</a> by Mario Gabriele</li>
            <li><a href="https://www.bloomberg.com/account/newsletters/money-stuff">Money Stuff</a> by Matt Levine</li>
            <li><a href="https://www.notboring.co/">Not Boring</a> by Packy McCormick</li>
          </ul>

          <p className="italic mt-2 mb-1">Podcasts</p>
          <ul className="list-disc list-inside text-sm">
            <li><a href="https://www.sequoiacap.com/series/crucible-moments/">Crucible Moments</a> by Sequoia Capital</li>
            <li><a href="https://www.thetwentyminutevc.com/">The Twenty Minute VC</a></li>
            <li><a href="https://www.joincolossus.com/episodes">Invest like the best with Patrick O’Shaughnessy</a></li>
          </ul>
        </section>

        <section id="contact" className="mb-8">
          <hr className="my-10 border-gray-200" />
          <footer className="text-sm text-center text-gray-500">
            <p className="mb-2">You can reach me here:</p>
            <p className="space-x-4">
              <a href="mailto:cjain@accel.com" className="underline hover:text-black">Email</a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/chitranjan-jain-bits-pilani/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">LinkedIn</a>
              <span>·</span>
              <a href="https://x.com/chitranjanjain1" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Twitter</a>
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}
