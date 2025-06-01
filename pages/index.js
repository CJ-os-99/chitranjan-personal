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
          <p>I’m an early stage investor at Accel. I spend most of my time on AI & cybersecurity, and opportunistically on deeptech & consumer platforms.</p>
          <p className="mt-2">Previously, I was an operator at Mosaic Wellness (consumer health). I joined them at ~$10M topline and helped scale to ~$50M by setting up their telehealth BU from scratch.</p>
        </section>

        <section id="sectors" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Sectors of Focus</h2>
          <ul className="list-disc list-inside">
            <li>P0: AI, Cybersecurity</li>
            <li>P1: Consumer platforms/brands, Financial Services, Deep tech</li>
          </ul>
        </section>

        <section id="themes" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Themes I'm Excited About (Representative, Not Exhaustive)</h2>
          <p className="text-sm text-gray-500 mb-4">Examples below are companies I like in these categories. I may or may not have any affiliation with them.</p>

          <p className="text-xl font-bold mt-6">AI</p>
          <p className="font-semibold mt-4">1. Horizontal Agent Infrastructure</p>
          <ul className="list-disc list-inside text-sm">
            <li>Observability for AI agents</li>
            <li>AI-powered OS for Data Centres</li>
            <li>AI-native video generation/editing platform</li>
            <li>Vmware for GPUs</li>
          </ul>

          <p className="font-semibold mt-4">2. Vertical AI Agents</p>
          <ul className="list-disc list-inside text-sm">
            <li>Vertical Voice AI agents – <a href="https://www.poly.ai">Poly AI</a>, <a href="https://www.assorthealth.com">Assort Health</a>, <a href="https://www.vocalityhealth.com/">Vocality Health</a>, <a href="https://www.happyrobot.ai">Happyrobot</a></li>
            <li>AI agents for Life Sciences</li>
            <li>AI agents for Cloud migration</li>
            <li>AI agents for BFSI compliance</li>
            <li>AI co-pilot for radiologists</li>
            <li>AI agents for Oil & Gas industry</li>
            <li>AI-powered travel booking platform</li>
          </ul>

          <p className="font-semibold mt-4">3. AI-Enabled Agencies / Services</p>
          <ul className="list-disc list-inside text-sm">
            <li>Salesforce/SAP implementation agency</li>
            <li>AI-powered CRO agency – <a href="https://fibr.ai/">Fibr AI</a></li>
          </ul>

          <p className="font-semibold mt-4">4. AI Infra & Tooling</p>
          <ul className="list-disc list-inside text-sm">
            <li>AI-powered Data Documentation – <a href="https://www.getzingle.com/">Zingle</a></li>
            <li>Scale AI for audio – <a href="https://www.withdavid.ai/">David AI</a></li>
            <li>Foundational models for weather prediction</li>
            <li>Generative Engine Optimization (GEO)</li>
            <li>Synthetic humans for UI/UX workflow validations</li>
          </ul>

          <p className="font-semibold mt-4">5. Consumer AI</p>
          <ul className="list-disc list-inside text-sm">
            <li>AI companions for kids</li>
            <li>AI coach for retail investors</li>
          </ul>

          <p className="font-semibold mt-4">6. Knowledge Work</p>
          <ul className="list-disc list-inside text-sm">
            <li><a href="https://www.gong.io">Gong</a> for high-ticket offline sales</li>
            <li>Video AI agent for pre-sales & onboarding</li>
            <li>AI co-pilots for Site Reliability Engineers (SREs)</li>
          </ul>

          <p className="text-xl font-bold mt-6">Cybersecurity</p>
          <p className="font-semibold mt-4">1. Infrastructure Security</p>
          <ul className="list-disc list-inside text-sm">
            <li>Zero CVE container images – <a href="https://www.chainguard.dev">Chainguard</a></li>
            <li>Security for MCP servers</li>
            <li>AI-native email security</li>
          </ul>

          <p className="font-semibold mt-4">2. Security Data & Observability</p>
          <ul className="list-disc list-inside text-sm">
            <li>Security data fabric – <a href="https://www.cribl.io">Cribl</a></li>
            <li>AI-powered SOC with differentiated GTM wedge</li>
          </ul>

          <p className="font-semibold mt-4">3. Identity & Access</p>
          <ul className="list-disc list-inside text-sm">
            <li>Identity Security for Agents</li>
          </ul>

          <p className="font-semibold mt-4">4. Security Services / Reviews</p>
          <ul className="list-disc list-inside text-sm">
            <li>Security Design Reviews – <a href="https://seezo.io/">Seezo</a></li>
          </ul>
        </section>

        <section id="teams" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What Do I Look Out For in Early Stage Teams?</h2>
          <ul className="list-disc list-inside text-sm">
            <li>Sharp articulation of founder right to win</li>
            <li>Early signs of ability to attract high-quality talent</li>
            <li>Clear articulation of the problem (ideally backed by case study)</li>
            <li>Demo of status quo</li>
            <li>Brownie points for AI founders in Bay Area</li>
            <li>Sticky businesses, deep thinking on moats</li>
            <li>Right to win from India (e.g., AI services)</li>
            <li>High bar on product and design – <a href="https://elevenlabs.io">Eleven Labs</a>, <a href="https://www.rox.com">Rox</a></li>
          </ul>
        </section>

        <section id="markets" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Loose Frameworks for How I Think About Markets & Business</h2>
          <ul className="list-disc list-inside text-sm">
            <li>Prefer $2–3B+ markets</li>
            <li>Bottoms-up TAM > top-down (ideally both)</li>
            <li>If TAM is small, still {'>'}$500M</li>
            <li>If TAM is {'<'}$1B, then:
              <ul className="list-disc ml-6">
                <li>Grow 15%+ CAGR or</li>
                <li>Clear Act 1 → Act 2 TAM expansion</li>
              </ul>
            </li>
            <li>Look at spend pool on headcount/software</li>
            <li>Compare top 3 players’ scale</li>
            <li>"Holy Trifecta": Low time to value, low implementation time, common ICP pain</li>
            <li>Honest split of live vs contracted ARR</li>
            <li>Excited by sleepy categories with Excel/email coordination and/or IP</li>
          </ul>
        </section>

        <section id="help" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What Can I Help With?</h2>
          <ul className="list-disc list-inside">
            <li>Hiring</li>
            <li>Customer intros</li>
            <li>Pitch deck feedback</li>
          </ul>
        </section>

        <section id="favorites" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Favorites</h2>
          <p className="italic mb-1">Newsletters</p>
          <ul className="list-disc list-inside text-sm">
            <li><a href="https://www.readthegeneralist.com/">Generalist</a> – Mario Gabriele</li>
            <li><a href="https://www.bloomberg.com/account/newsletters/money-stuff">Money Stuff</a> – Matt Levine</li>
            <li><a href="https://www.notboring.co/">Not Boring</a> – Packy McCormick</li>
          </ul>
          <p className="italic mt-2 mb-1">Podcasts</p>
          <ul className="list-disc list-inside text-sm">
            <li><a href="https://www.sequoiacap.com/series/crucible-moments/">Crucible Moments</a> – Sequoia</li>
            <li><a href="https://www.thetwentyminutevc.com/">The Twenty Minute VC</a></li>
            <li><a href="https://www.joincolossus.com/episodes">Invest Like the Best</a> – Patrick O’Shaughnessy</li>
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
