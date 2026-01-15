// app/page.tsx
import React from "react";
import Image from "next/image";

type SectionProps = {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
};

function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
}: SectionProps) {
  const alignCls = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`${alignCls} max-w-3xl mx-auto`}>
      {eyebrow ? (
        <p className="tracking-[0.28em] uppercase text-xs text-neutral-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tight text-neutral-900">
        {title}
      </h2>
      {desc ? (
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-700">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function Divider() {
  return (
    <div className="py-10">
      <div className="mx-auto h-px w-24 bg-neutral-300/70" />
    </div>
  );
}

function GoldPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#b08b57]/40 bg-[#b08b57]/10 px-3 py-1 text-xs text-neutral-800">
      {children}
    </span>
  );
}

export default function Page() {
  const palette = {
    gold: "#b08b57",
    cream: "#fbf7ef",
    ink: "#171717",
  };

  const distillationSteps = [
    {
      step: "01",
      title: "Selection & Preparation of Agarwood",
      desc: "Resin-rich agarwood chips are handpicked, cleaned, and soaked for days to soften fibers and enhance aromatic oil release.",
    },
    {
      step: "02",
      title: "Clay Pot Distillation",
      desc: "Soaked agarwood is placed into traditional clay/copper stills over a controlled wood-fired furnace for stable temperature and natural character.",
    },
    {
      step: "03",
      title: "Steam Extraction",
      desc: "Steam carries aromatic compounds through copper conduits, extracting fragrance molecules gently without burning the resin.",
    },
    {
      step: "04",
      title: "Condensation",
      desc: "Fragrant steam cools into liquid (oil + hydrosol), separating naturally by density.",
    },
    {
      step: "05",
      title: "Separation & Collection",
      desc: "Duze Attar floats atop condensed water and is hand-separated and transferred to glass vessels for aging.",
    },
  ];

  const productHighlights = [
    {
      title: "Agarwood",
      desc: "Nature’s rarest aromatic gift—resin-rich heartwood from Aquilaria. Warm, smoky, captivating—graded carefully for finest quality.",
      tag: "Core Ingredient",
    },
    {
      title: "Dahn Al Oud",
      desc: "The crown jewel of oriental perfumery—deep, complex oud oils traditionally hydro-distilled and curated from renowned regions.",
      tag: "Pure Oud Oils",
    },
    {
      title: "Oud Perfumes",
      desc: "A refined balance: oud with jasmine, sandalwood, amber, and citrus notes—luxurious atmosphere and modern elegance.",
      tag: "Modern Blend",
    },
    {
      title: "Other Perfumes",
      desc: "Softer contemporary compositions with jasmine, sandalwood, amber, and citrus—light luxury for everyday wear.",
      tag: "Everyday Elegance",
    },
    {
      title: "Oud Muattar & Bakhoor",
      desc: "High-grade agarwood infused with floral, spicy, musky oils—crafted for warmth, serenity, and opulence over charcoal.",
      tag: "Incense Collection",
    },
    {
      title: "Oud Bangle",
      desc: "Luxury bangles infused with premium oud that slowly releases scent with skin warmth—style meets sensorial beauty.",
      tag: "Signature Accessory",
    },
  ];

  const perfumeList = [
    {
      name: "Andy’s Ambergris",
      meta: "Masculine Eau de Parfum | Woody Spicy",
      desc: "Bold and elegant; dark ambergris, spiced accords, earthy patchouli—strength and sophistication.",
    },
    {
      name: "Prive Oud",
      meta: "Unisex Eau de Parfum | Amber Oud Blend",
      desc: "Almond, saffron, oud, rich Dhan Al Oud—warm, spicy, intense, and unforgettable.",
    },
    {
      name: "Floral",
      meta: "Unisex Eau de Parfum | Amber Woody",
      desc: "Pineapple + hyacinth opening; pink pepper, iris, jasmine heart; musk, amber, vetiver, patchouli, vanilla base.",
    },
    {
      name: "Oud Boca",
      meta: "Unisex Eau de Parfum | Amber Vanilla & Oud",
      desc: "Dark chocolate gourmand opening; spicy aftertaste; oud + warm vanilla—daring and seductive.",
    },
    {
      name: "Cambodia Lamduan",
      meta: "Unisex Eau de Parfum | Amber Floral",
      desc: "Romantic Cambodian oud with soft florals—warm and elegant tribute to luxury.",
    },
    {
      name: "Orchid Bloom",
      meta: "Unisex Eau de Parfum | Amber Floral",
      desc: "Green mandarin, salted vanilla, ambergris—bold freshness and modern goddess energy.",
    },
    {
      name: "Lady Rose",
      meta: "Eau de Parfum | Floral Fruity Gourmand",
      desc: "Bergamot, pear, pink pepper; peony, freesia, Bulgarian rose; warm honey nuances—nostalgic and feminine.",
    },
  ];

  const globalPresence = [
    {
      country: "Cambodia",
      lines: [
        "ANDY OUD (CAMBODIA) CO.LTD",
        "Bori Phiphop Thmey, Toul Sngke Office",
        "Street: 1232EO, Khan Rusey Keo",
        "+855 90 777 189",
      ],
    },
    {
      country: "Thailand",
      lines: [
        "ANDY OUD (THAILAND) CO. LTD.",
        "4/13 Sukhumvit 5, Wattana, Bangkok",
        "+66 86 037 1105",
        "+66 81 927 0997",
      ],
    },
    {
      country: "Bahrain",
      lines: [
        "ANDY OUD (BAHRAIN) CO. LTD.",
        "Thai-Mart Mall Shop #9 (Branch 1)",
        "Souq Al Baraha Shop #1122 (Branch 2)",
        "+973 3357 7888",
      ],
    },
    {
      country: "Oman",
      lines: [
        "ANDY OUD (OMAN) CO. LTD",
        "Al Arami Boulevard Mall Shop #8",
        "+968 954 58797",
      ],
    },
  ];

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(1200px 700px at 50% -200px, rgba(176,139,87,0.18), transparent 55%), linear-gradient(180deg, #fbf7ef 0%, #ffffff 45%, #fbf7ef 100%)",
      }}
    >
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            <a className="hover:text-neutral-900" href="#about">
              About
            </a>
            <a className="hover:text-neutral-900" href="#heritage">
              Heritage
            </a>
            <a className="hover:text-neutral-900" href="#collection">
              Collection
            </a>
            <a className="hover:text-neutral-900" href="#products">
              Products
            </a>
            <a className="hover:text-neutral-900" href="#contact">
              Presence
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-10 pt-12 md:grid-cols-2 md:items-center md:pb-16 md:pt-16">
          <div>
            <GoldPill>Timeless • Pure • Unforgettable</GoldPill>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-neutral-900 sm:text-5xl">
              The Essence of Cambodia’s Finest Agarwood
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-700 sm:text-base">
              Dedicated to preserving the legacy of Cambodian agarwood—crafted
              with precision to embody luxury, tradition, and authenticity.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#collection"
                className="rounded-full bg-neutral-900 px-5 py-3 text-xs font-medium text-white hover:bg-neutral-800"
              >
                Explore Collection
              </a>
              <a
                href="#heritage"
                className="rounded-full border border-neutral-900/15 bg-white px-5 py-3 text-xs font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Our Heritage
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-neutral-700">
              <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4">
                <p className="font-medium" style={{ color: palette.gold }}>
                  Craftsmanship
                </p>
                <p className="mt-1 text-neutral-600">Tradition + precision</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4">
                <p className="font-medium" style={{ color: palette.gold }}>
                  Authenticity
                </p>
                <p className="mt-1 text-neutral-600">Pure oud character</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4">
                <p className="font-medium" style={{ color: palette.gold }}>
                  Sustainability
                </p>
                <p className="mt-1 text-neutral-600">Ethical sourcing</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[#b08b57]/10 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/leader.jpg"
                  alt="Andy Oud"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-neutral-900/25 to-transparent" />
                <div className="absolute inset-0 flex h-full flex-col justify-end p-6 text-white">
                  <p className="font-serif text-2xl">Andy Oud</p>
                  <p className="mt-1 text-sm text-white/90">
                    Luxury fragrance & heritage craftsmanship
                  </p>
                  <div className="mt-4 h-px w-24 bg-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leader */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="Leadership"
          title="A Visionary Leader, Behind Timeless Excellence"
          desc="At the heart of Andy Oud Cambodia stands Mr. Kavin Krisnawongsakul—driving long-standing success through excellence, authenticity, and sustainability."
          align="center"
        />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-stretch">
          <div className="md:col-span-5">
            <div className="h-full overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Kavin_Krisnawongsakul.jpg"
                  alt="Mr. Kavin Krisnawongsakul"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  priority
                />
              </div>
              <div className="p-5">
                <p className="font-serif text-lg text-neutral-900">
                  Mr. Kavin Krisnawongsakul
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Founder / Visionary Leadership
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="h-full rounded-[1.75rem] border border-neutral-200 bg-white p-6">
              <p className="text-sm leading-relaxed text-neutral-700">
                Under his leadership, Andy Oud Cambodia has flourished,
                supported by a skilled team across various locations—preserving
                the legacy of Oudh craftsmanship while setting new benchmarks
                for luxury and heritage in fine fragrances.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <p className="text-xs uppercase tracking-wider text-neutral-600">
                    Focus
                  </p>
                  <p className="mt-2 font-medium text-neutral-900">
                    Quality & Authenticity
                  </p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <p className="text-xs uppercase tracking-wider text-neutral-600">
                    Commitment
                  </p>
                  <p className="mt-2 font-medium text-neutral-900">
                    Sustainability & Heritage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* About / Vision / Mission / Values */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="About Us"
          title="Rooted in tradition, driven by innovation"
          desc="Andy is dedicated to excellence, craftsmanship, and ethical practices—merging time-honored techniques with modern refinement to create sophisticated, elegant products."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6">
            <p className="font-serif text-xl text-neutral-900">Our Vision</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              To be a globally recognized leader—blending traditional expertise
              with contemporary innovation, upholding the highest standards of
              quality and craftsmanship.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6">
            <p className="font-serif text-xl text-neutral-900">Our Mission</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Deliver superior-quality products that embody heritage and
              craftsmanship, build enduring partnerships through trust and
              integrity, and innovate with sustainability in mind.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6">
            <p className="font-serif text-xl text-neutral-900">Our Values</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• Excellence through quality & innovation</li>
              <li>• Heritage preservation</li>
              <li>• Ethical sourcing & eco-responsibility</li>
              <li>• Customer satisfaction & personalization</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-neutral-200 bg-white p-7">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-serif text-2xl text-neutral-900">
                Why Choose Andy?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Exquisite craftsmanship, decades of expertise, tailored
                solutions, and a deep commitment to sustainability—supported by
                personalized, exceptional service at every touchpoint.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Masterful artistry",
                "Trusted legacy",
                "Bespoke experiences",
                "Ethical sourcing",
                "Eco-conscious process",
                "Unparalleled service",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs text-neutral-800"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Cambodia / Legacy */}
      <section id="heritage" className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="Cambodia"
          title="The Timeless Legacy of Cambodian Oud"
          desc="For centuries, Cambodia has been at the heart of the world’s finest oud—woven into spirituality, culture, craftsmanship, and holistic well-being."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-7">
              <p className="text-sm leading-relaxed text-neutral-700">
                Cambodian oud (“Chann Crassna”) is revered for a deep, rich
                aroma—sweet, woody, slightly spicy notes. It has been used in
                rituals, temples, meditation, traditional medicine, and
                treasured by royalty and nobility. Unique climate, soil, and
                natural aging create a warm, sweet, slightly leathery profile
                prized in luxury perfumery.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                With increasing rarity due to demand, sustainable plantations
                and ethical sourcing help preserve this natural
                treasure—honoring heritage while maintaining the highest
                standards.
              </p>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <p className="text-xs uppercase tracking-wider text-neutral-600">
                  Signature invite
                </p>
                <p className="mt-2 text-sm text-neutral-800">
                  Discover the Essence of Cambodia — timeless, pure, and
                  unforgettable.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="h-full overflow-hidden rounded-[2rem] border border-neutral-200 bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Angkor_wat_cambodia.jpg"
                  alt="Angkor Wat, Cambodia"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
              </div>
              <div className="p-6">
                <p className="font-serif text-lg text-neutral-900">
                  AndyOud of Cambodia
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  A fragrance story of heritage, passion, and nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Distillation */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="Craftsmanship"
          title="The Art of Traditional Duze Attar Distillation"
          desc="A slow, meticulous hydro-distillation method—performed with precision, care, and reverence for the raw material."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-7">
            <p className="font-serif text-xl text-neutral-900">
              Traditional Hydro-Distillation Process
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              This time-honored process safeguards authenticity and integrity of
              the Oudh essence, producing a deep woody richness with subtle
              sweet, earthy, and smoky notes—enduring and refined.
            </p>

            <div className="mt-6 space-y-3">
              {distillationSteps.map((s) => (
                <div
                  key={s.step}
                  className="flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                >
                  <div
                    className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-neutral-200 bg-white font-medium"
                    style={{ color: palette.gold }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      {s.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-white p-7">
            <p className="font-serif text-xl text-neutral-900">
              Uncompromising Purity, Unrivaled Elegance
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Andy Oudh’s Duze Attar delivers a complex profile—grounding yet
              uplifting—ideal for spiritual practices, meditative rituals, or as
              a statement of refined luxury.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
              “We are guardians of tradition”—working with local harvesters and
              distillers to honor nature and cultural legacy while avoiding mass
              production and synthetic additives.
            </p>

            <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-xs uppercase tracking-wider text-neutral-600">
                Experience
              </p>
              <p className="mt-2 text-sm text-neutral-800">
                A journey through centuries of aromatic tradition—connecting
                earth, history, and self.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "/images/distilation_005.jpg",
                "/images/distilation_006.jpg",
              ].map((src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl border border-neutral-200"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={src}
                      alt="Traditional distillation"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 520px, 100vw"
                    />
                  </div>
                </div>
              ))}
            </div>
            <Divider />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "/images/distilation_001.jpeg",
                "/images/distilation_002.jpeg",
                "/images/distilation_003.jpeg",
                "/images/distilation_004.jpeg",
              ].map((src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl border border-neutral-200"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={src}
                      alt="Traditional distillation"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 520px, 100vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="Collection"
          title="Essence of Elegance"
          desc="Crafted from Cambodia’s finest agarwood—pure aged Dahn Al Oudh, refined perfumes, traditional bakhoors, and distinctive accessories."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {productHighlights.map((p) => (
            <div
              key={p.title}
              className="rounded-[1.75rem] border border-neutral-200 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-serif text-xl text-neutral-900">{p.title}</p>
                <span
                  className="rounded-full border px-3 py-1 text-[11px]"
                  style={{
                    borderColor: `${palette.gold}55`,
                    background: `${palette.gold}12`,
                  }}
                >
                  {p.tag}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                {p.desc}
              </p>
              <div className="mt-5 h-px w-16 bg-neutral-900/10" />
              <p className="mt-4 text-xs text-neutral-600">
                Replace with product image (optional)
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Products / Perfume list */}
      <section id="products" className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="Perfumes"
          title="Signature Scents"
          desc="A curated selection of fragrances—crafted to express depth, elegance, and refined luxury."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {perfumeList.map((x) => (
            <div
              key={x.name}
              className="rounded-[1.75rem] border border-neutral-200 bg-white p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-serif text-xl text-neutral-900">{x.name}</p>
                <p className="text-xs text-neutral-600">{x.meta}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                {x.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Global Presence / Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          eyebrow="Global Presence"
          title="Across Key Regions"
          desc="From Cambodia to international outlets—delivering authentic Cambodian Oudh with a consistent blend of traditional heritage and modern elegance."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {globalPresence.map((g) => (
            <div
              key={g.country}
              className="rounded-[2rem] border border-neutral-200 bg-white p-7"
            >
              <p className="font-serif text-2xl text-neutral-900">
                {g.country}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {g.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-white p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-serif text-2xl text-neutral-900">
                United Arab Emirates
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                Coming Soon — an exclusive collection of fragrances, Bakhoor,
                Oud Muattar, and signature Oud Bangles.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-full bg-neutral-900 px-5 py-3 text-xs font-medium text-white hover:bg-neutral-800"
                >
                  Request Catalog
                </a>
                <a
                  href="#"
                  className="rounded-full border border-neutral-900/15 bg-white px-5 py-3 text-xs font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  Wholesale Inquiry
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-xs uppercase tracking-wider text-neutral-600">
                Website
              </p>
              <p className="mt-2 font-serif text-xl text-neutral-900">
                <a
                  href="https://www.andyoud.com"
                  className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-700 hover:decoration-neutral-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.andyoud.com
                </a>
              </p>
              <div className="mt-5 h-px w-full bg-neutral-200" />
              <p className="mt-5 text-sm text-neutral-700">
                “Thank you. Your journey into timeless fragrance begins here.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
