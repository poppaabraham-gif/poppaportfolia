import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poppa Abraham — Creative Growth & GTM" },
      { name: "description", content: "Portfolio of Poppa Abraham: content, communities, and creative growth on the internet." },
      { property: "og:title", content: "Poppa Abraham — Creative Growth & GTM" },
      { property: "og:description", content: "I work where ideas, people, and the internet meet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap" },
    ],
  }),
  component: Index,
});

const IMG = "https://lh3.googleusercontent.com/aida-public/";
const hero = IMG + "AB6AXuAYgNbWOGc6j-0h_HNDHEKFYzNHdQ6pbJ-cC2n_vz8vfnq-CmoYbQXuqcXn9r6uoaTV-Z8m4dBM4bEccprZnit_bSFEwzV5Odp0WSiFGAt9skpnRFPFhmBvC53ZYYRKjK_XJ8vObZilZ9Kt1LfjlbRkcuISMGMEHXVUO0zbnZXHzFq6xpP_t9om5STnq6hxmEfNY2X0gqZHoPfMcfbzAMw349mw6N0p2NBORuHxmKQiWsyNxmCODWh08r3KjAqFSDodtQ";
const newLogo = IMG + "AB6AXuAvEFBalDGTEDAhyKr-07Pu3x4vk5pJypu0RlOc6avVOzndmPnuKiMpYbZFyPWx3hTSIRH0qLISK3mssv57GfTV2w_VLxQ-ei7p8zr6v_PymBTwz_a2rhUBRPM6yOAwsYrnKs-u4ZvJjv2uU8bspzcAEH9pjNlKEJWCqf9JfZdskVvx-Q-3LA0hZ73KVDB7-kxjD5aUCEIYNjQNnnUTbUVTPNCP0D3TY0yoiCCYElqvWCMcwbZl6GYGdMNzjo3r5zNDpQ";

const achievements = [
  ["01 / Creative Direction", "Directed creative concepts for brand campaigns and video advertisements."],
  ["02 / Content Production", "Created and published 26 short-form videos across Instagram and TikTok."],
  ["03 / Audience Growth", "Grew the founder’s X following from approximately 4 to 124 in just two weeks through targeted engagement."],
  ["04 / User Retention", "Built targeted user re-engagement campaigns using PostHog and emails."],
];

const rows = [
  { year: "2026", items: [{ n: "02", y: "2026", name: "Level Break Media", status: "Previous Engagement", label: "Attention Engineering", desc: "B-ROLL · VOICEOVER · KINETIC TYPOGRAPHY", tag: "Audiovisual • Motion", logo: IMG + "AB6AXuALeeoiZ3621scIYz5c51DiaFZ7WMyKP1J45cke5z76SWP1Tqm9Yq0wGtU9Xm7NzxJZfQPTtWSSbvIzIeEdiCtJqqcr2NDQ5bAunH1nnkKiHhVarVaIve0aL2feqXpDuYItRAx9jr8QMW-MduoA5iac8ErYSl8lVtRyqIZCWV623AFl3cZmHtH5Rn1EAl-ywzOW1l6NEHualGEy5Arj5RWowcYrlaJgksT2WoRvZI-sOMIt8AQWf2OlufD9lC9UwYKsFw" }] },
  { year: "2025", items: [
    { n: "03", y: "2025", name: "ReitCircles", status: "Ended December 2025", label: "Visual Communication", desc: "INFOGRAPHICS · ILLUSTRATION · COMMUNITY", tag: "Tokenization • Content", logo: IMG + "AB6AXuARLIg346ZK7UAgW_y3sI3fUS6nQ8sRGVAerw-jbz9fvHaM5XhXSGMcd8q6HbPNIsSGnUHLSRQfaD3BlxODwN-gDVaDTjj3TfXw14z90XOnRsTuCHvyxive7XpnERzQF_XA9yDRvQcoB2dGkQl6-dMXCFYQPXmWGjHoT2ODkNKrNLM5vZIg_kpFqfTN9AP6tL7snFyhjNuMwma1edkwOmj8wQljuTfFI0Wyd1L4b09QJJImKYun7vSn3VolRCZrWjyiBg" },
    { n: "04", y: "2025", name: "Rift Studios", status: "Previous Engagement", label: "Culture & Community", desc: "NFT COMMUNITY · ENGAGEMENT · MEMBER EXPERIENCE", tag: "NFT • Community", logo: IMG + "AB6AXuCjhWXK3arBedZS_nh0rU1na5i1d80H0-F8slRvYX36cHbYX-SjL0IwnB1Y3-ab2hImdXm8nDs0QGRUlC2V2wU6BY4DJdWQIQbmLaEWXwt3hSzVL432i5309f2Glfc37ON57fM_mlqLSK_vPH2se1f_hPya84whnT2Vf5JylRmpG-akoxaZamlGiAoDria3pSkZjglPI1n_tXy3NFjQaL_w6Y0b2bHHHtcubuqWclb7Bt5p-1LH2NmMP3qxu_JMvZdhNw" },
  ] },
];

const domains = [
  ["I make the unfamiliar feel undeniable.", "I turn complex ideas into stories people can understand, connect with, and believe in."],
  ["Every brand has a pulse.", "Building sustained member retention, hosting live audio rooms, and designing shared cultural rituals."],
  ["Attention is easy. Belonging is different.", "I build communities where people have a reason to show up, take part, and feel connected to what you're building."],
  ["Make people feel something. Give them something to say.", "I create content and conversations that give people a reason to notice your brand and keep talking about it."],
];

function YearBar({ year }: { year: string }) {
  return (
    <div className="mb-8 flex items-center justify-between bg-surface-high px-4 py-2">
      <span className="caps text-primary">Temporal Frame</span>
      <span className="meta font-semibold text-primary">{year}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="bg-surface text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed top-0 z-50 w-full bg-surface/85 shadow-sm backdrop-blur-xl">
        <div className="flex h-20 items-center justify-between px-5 md:px-16">
          <a href="#top" className="caps tracking-widest text-primary hover:opacity-60">Poppa Abraham</a>
          <nav className="flex items-center gap-4 text-sm font-semibold uppercase text-primary md:gap-8">
            <a href="#work" className="hover:opacity-60">Work</a>
            <a href="#about" className="hover:opacity-60">About</a>
            <a href="#contact" className="hover:opacity-60">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section id="top" className="flex min-h-[calc(100vh-5rem)] flex-col justify-between bg-surface-lowest px-5 py-16 md:px-16">
          <div className="grid w-full max-w-7xl items-center gap-8 lg:grid-cols-12">
            <div className="flex justify-center lg:col-span-5">
              <img src={hero} alt="Poppa Abraham illustration" className="aspect-square w-full max-w-[420px] object-contain" />
            </div>
            <div className="lg:col-span-7">
              <span className="caps rise inline-block tracking-[0.2em] text-ink-dim">Creative Growth &amp; GTM</span>
              <h1 className="mt-4 flex flex-col font-display text-[38px] font-extrabold uppercase leading-[42px] tracking-tighter text-primary md:text-[64px] md:leading-[68px] lg:text-[84px] lg:leading-[88px]">
                <span className="rise" style={{ animationDelay: "0.25s" }}>Poppa</span>
                <span className="rise" style={{ animationDelay: "0.4s" }}>Abraham</span>
              </h1>
              <p className="rise mt-8 max-w-xl text-xl leading-8 md:mt-16" style={{ animationDelay: "0.6s" }}>
                “I work where ideas, people, and the internet meet.”
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-16 md:flex-row md:items-end">
            <div className="meta flex gap-2 tracking-widest text-ink-dim">
              <span>poppa abraham</span><span>/</span><span>Portfolio Monograph</span>
            </div>
            <a href="#work" className="group caps inline-flex gap-2 tracking-widest text-primary hover:opacity-60">
              Scroll to Explore <span className="transition-transform group-hover:translate-y-1">↓</span>
            </a>
          </div>
        </section>

        <section id="work" className="px-5 py-28 md:px-16">
          <div className="mb-16 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="meta mb-2 tracking-widest text-ink-dim">Index / 01 — Selected Engagements</div>
              <h2 className="font-display text-[38px] font-bold leading-[42px] tracking-tight text-primary md:text-[64px] md:leading-[68px]">Selected Work</h2>
            </div>
            <p className="flex items-end italic leading-relaxed text-ink-dim md:col-span-4">
              “A small collection of things I've worked on across content, communities, and creative growth.”
            </p>
          </div>

          <div className="pt-8">
            <YearBar year="2026" />
            <article className="mb-16 bg-surface-lowest p-8 md:p-16">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="flex flex-col justify-between lg:col-span-6">
                  <div>
                    <div className="meta mb-1 tracking-widest text-ink-dim">Project 01 • October 2026 • Previous Engagement</div>
                    <h3 className="font-display text-4xl font-bold uppercase tracking-tight text-primary">Coral Bricks</h3>
                    <span className="caps mb-8 block tracking-widest text-ink-dim">Growth, Content &amp; Creative</span>
                    <div className="mb-8 bg-surface-low p-4">
                      <div className="meta mb-2 flex justify-between border-b border-surface-high pb-2 text-ink-dim">
                        <span>Coral Bricks • 2026</span><span>▦</span>
                      </div>
                      <div className="text-[22px] font-semibold uppercase leading-tight text-primary">Beyond the Model</div>
                      <p className="meta mt-1 text-ink-dim">Brand, Content &amp; Audience</p>
                    </div>
                    <div className="mb-8 bg-surface-low p-4">
                      <div className="caps mb-1 text-primary">Logo Redesign</div>
                      <p className="mb-4 text-sm text-ink-dim">A refreshed identity for Coral Bricks.</p>
                      <div className="flex items-center justify-around bg-surface-lowest p-4">
                        <div className="flex flex-col items-center gap-1">
                          <span className="meta text-ink-dim">Old</span>
                          <div className="flex h-20 w-20 items-center justify-center bg-surface-mid meta text-ink-dim">Logo</div>
                        </div>
                        <span className="text-xl font-bold text-primary">→</span>
                        <div className="flex flex-col items-center gap-1">
                          <span className="meta font-semibold text-primary">New</span>
                          <img src={newLogo} alt="Coral Bricks new logo" className="h-20 w-20 object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="meta mb-2 block text-ink-dim">Find Coral Bricks</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="meta bg-surface-mid px-3 py-1 font-semibold text-primary">coralbricks.ai</span>
                      <span className="meta bg-surface-mid px-3 py-1 font-semibold text-primary">@CoralBricksdev</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="caps mb-2 text-ink-dim">Context &amp; Execution</div>
                  <p className="mb-16 leading-relaxed">
                    Coral Bricks operated in the AI inference space, where speed, cost, and access to capable models mattered to developers. I made the brand more visible, communicated its value through content, engaged relevant audiences, and built targeted campaigns to re-engage users.
                  </p>
                  <div className="caps mb-4 border-b border-surface-high pb-2 tracking-widest text-ink-dim">Notable Achievement</div>
                  <div className="flex flex-col gap-4">
                    {achievements.map(([k, v], i) => (
                      <div key={k} className={`flex flex-col gap-2 pb-4 sm:flex-row sm:gap-4 ${i < 3 ? "border-b border-surface-high" : ""}`}>
                        <span className="meta w-28 shrink-0 font-semibold text-primary">{k}</span>
                        <p className="text-sm">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {rows.map((g, gi) => (
            <div key={g.year} className={gi === 0 ? "-mt-8" : "pt-16"}>
              {gi > 0 && <YearBar year={g.year} />}
              {g.items.map((p) => (
                <article key={p.n} className="mb-2 bg-surface-lowest p-8">
                  <div className="grid items-center gap-8 md:grid-cols-12">
                    <div className="flex items-center gap-4 md:col-span-4">
                      <img src={p.logo} alt={`${p.name} logo`} className="h-8 w-8 shrink-0 object-contain" />
                      <div>
                        <div className="meta text-ink-dim">Project {p.n} • {p.y}</div>
                        <h4 className="text-[22px] font-semibold uppercase text-primary">{p.name}</h4>
                        <span className="meta text-ink-dim">{p.status}</span>
                      </div>
                    </div>
                    <div className="md:col-span-5">
                      <div className="caps mb-1 text-ink-dim">{p.label}</div>
                      <p>{p.desc}</p>
                    </div>
                    <div className="flex md:col-span-3 md:justify-end">
                      <span className="meta bg-surface-mid px-3 py-1 text-primary">{p.tag}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </section>

        <section id="about" className="bg-surface-low px-5 py-28 md:px-16">
          <div className="max-w-6xl">
            <div className="meta mb-2 tracking-widest text-ink-dim">Profile / 02 — Perspective</div>
            <div className="grid items-start gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="mb-8 font-display text-[38px] font-bold uppercase leading-none tracking-tight text-primary md:text-[64px]">A Little<br />About Me</h2>
                <div className="max-w-sm bg-surface-high p-4">
                  <span className="caps mb-1 block text-primary">Location •</span>
                  <p className="meta tracking-widest">Based in Lagos, Nigeria.</p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="mb-4 leading-relaxed">
                  I'm Poppa Abraham. I like taking ideas and turning them into things people can actually see, use, or connect with. From building online communities to creating content and working on AI products, I've found myself doing a bit of everything on the internet, and honestly, I enjoy it.
                </p>
                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                  {domains.map(([t, d], i) => (
                    <div key={t} className="bg-surface-lowest p-4">
                      <span className="meta mb-1 block text-ink-dim">Domain 0{i + 1}</span>
                      <span className="text-[22px] font-semibold uppercase leading-7 text-primary">{t}</span>
                      <p className="mt-2 text-sm text-ink-dim">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-primary px-5 py-28 text-primary-foreground md:px-16">
          <div className="flex min-h-[50vh] max-w-6xl flex-col justify-between">
            <div className="meta flex justify-between pb-16 tracking-widest text-inverse-muted">
              <span>Dialogue / 03 — Direct Channel</span><span>Availability • Open</span>
            </div>
            <div className="py-8">
              <h2 className="max-w-4xl font-display text-[38px] font-extrabold uppercase leading-none tracking-tight md:text-[64px]">Got Something in Mind?</h2>
              <p className="mt-8 font-display text-4xl italic tracking-tight">“Let's talk.”</p>
            </div>
            <div className="flex flex-col justify-between gap-8 pt-16 sm:flex-row sm:items-center">
              <div>
                <span className="caps mb-1 block text-inverse-muted">Direct Correspondence</span>
                <a href="mailto:poppaabraham@gmail.com" className="text-[22px] font-semibold underline underline-offset-8 hover:opacity-80">poppaabraham@gmail.com</a>
              </div>
              <div className="flex flex-wrap gap-4">
                {[["X (Twitter)", "https://twitter.com/Poppa_Abraham"], ["LinkedIn", "https://www.linkedin.com/in/akingbade-abraham-705b75234"], ["Telegram", "https://t.me/Poppa_Abraham"]].map(([l, h]) => (
                  <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="caps bg-inverse-chip px-4 py-3 transition-colors hover:bg-primary-foreground hover:text-primary">{l} ↗</a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-low px-5 py-28 md:px-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-2">
            <span className="text-[22px] font-semibold uppercase text-primary">Poppa Abraham</span>
            <span className="meta text-ink-dim">Creative Growth &amp; GTM</span>
          </div>
          <div className="meta text-ink-dim">© 2026 All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}
