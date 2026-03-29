import { useState } from "react";

const FAQ_DATA = [
  {
    category: "General",
    items: [
      {
        q: "What is a hackathon?",
        a: "Place holder text for now.",
      },
      {
        q: "When is Hack Brooklyn?",
        a: "Place holder text for now.",
      },
      {
        q: "What's the cost?",
        a: "Place holder text for now.",
      },
      {
        q: "What can I win?",
        a: "Place holder text for now.",
      },
      {
        q: "But I never hacked before!",
        a: "Place holder text for now.",
      },
      {
        q: "I can't wait until the weekend to get started with Hack Brooklyn!",
        a: "Place holder text for now.",
      },
      {
        q: "Is there an Admissions Puzzle this year?",
        a: "Place holder text for now.",
      },
      {
        q: "Where can I find the Admissions Puzzle?",
        a: "Place holder text for now.",
      },
      {
        q: "Still have questions!",
        a: "Place holder text for now.",
      },
    ],
  },
  {
    category: "Registration",
    items: [
      {
        q: "Can I apply?",
        a: "Place holder text for now.",
      },
      {
        q: "What if I'm no longer eligible? / Can I volunteer to be a judge or mentor?",
        a: "Place holder text for now.",
      },
      {
        q: "How do I apply?",
        a: "Place holder text for now.",
      },
      {
        q: "How do teams work?",
        a: "Place holder text for now.",
      },
      {
        q: "What if I go to Brooklyn College (or a CUNY school)?",
        a: "Place holder text for now.",
      },
      {
        q: "Where can I find the application to be a mentor or a judge?",
        a: "Place holder text for now.",
      },
    ],
  },
  {
    category: "Tracks",
    items: [
      {
        q: "What are hackathon tracks?",
        a: "Place holder text for now.",
      },
      {
        q: "Do I have to submit a project if I attend?",
        a: "Place holder text for now.",
      },
    ],
  },
  {
    category: "In-Person Logistics",
    items: [
      {
        q: "Can I attend Hack Brooklyn virtually?",
        a: "Place holder text for now.",
      },
      {
        q: "Will food be provided?",
        a: "Place holder text for now.",
      },
      {
        q: "Will there be overnight accommodations?",
        a: "Place holder text for now.",
      },
      {
        q: "Where is Hack Brooklyn?",
        a: "Place holder text for now.",
      },
      {
        q: "Will my travel be reimbursed?",
        a: "Place holder text for now.",
      },
      {
        q: "Will there be hardware I can use?",
        a: "Place holder text for now.",
      },
    ],
  },
];

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#8b6f47] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-2 py-1.5 text-left text-[clamp(12px,1.35vw,14px)] font-medium text-[#f5e6d3] transition-colors hover:text-white"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="shrink-0 text-[#d4a574]" aria-hidden>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <p className="pb-2 pl-0 text-[clamp(11px,1.25vw,13px)] leading-snug text-[#e8dccd]">
          {answer}
        </p>
      )}
    </div>
  );
}

function FAQ() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section
      id="faq"
      className="relative overflow-x-clip bg-[#64473f] px-4 py-8 md:overflow-x-visible md:px-6 md:py-10"
    >
      {/* Coffee */}
      <div
        className="pointer-events-none absolute right-0 top-[12%] z-0 md:top-1/2 md:-translate-y-1/2 lg:right-8"
        aria-hidden
      >
        <img
          src="/images/coffee.svg"
          alt=""
          className="h-[75vh] w-auto max-w-[95vw] object-contain object-right opacity-90 drop-shadow-2xl"
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="relative z-10 mb-5 flex justify-center">
          <div className="relative inline-block">
            {/* brown polygon behind faq title */}
            <div
              className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full bg-[#342018] [clip-path:polygon(0_0,100%_0,88%_100%,0_92%)] md:w-3/4 md:[clip-path:polygon(0_0,100%_0,78%_100%,0_88%)]"
              aria-hidden
            />
            <h2 className="relative z-10 px-2 py-0.5 text-center text-[clamp(24px,4vw,70px)] font-bold font-spenbebgame tracking-wide text-[#f5e6d3]">
              FAQ
            </h2>
          </div>
        </div>

        {/* Chips */}
        <div className="relative">
          <div
            className="pointer-events-none absolute left-0 top-1/2 z-0 w-[min(52vw,220px)] -translate-x-[14%] -translate-y-1/2 sm:w-[min(48vw,260px)] md:w-[min(34%,280px)] md:-translate-x-[26%] lg:-translate-x-[40%]"
            aria-hidden
          >
            <img
              src="/images/chips.svg"
              alt=""
              className="h-auto w-full max-h-[min(48vh,340px)] object-contain object-left opacity-90 drop-shadow-2xl md:max-h-[min(52vh,380px)]"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {FAQ_DATA.map((block) => (
            <div
              key={block.category}
              className="rounded-lg border border-[#9D7E67] bg-[#936656]/30 p-3 md:p-4"
            >
              <h3 className="mb-2 border-b border-[#8b6f47] pb-1.5 text-[clamp(16px,2vw,19px)] font-semibold text-[#5A2C22]">
                {block.category}
              </h3>
              <div className="max-h-[min(38vh,280px)] overflow-y-auto pr-1 md:max-h-[min(42vh,320px)]">
                {block.items.map((item, idx) => {
                  const key = `${block.category}-${idx}`;
                  return (
                    <FaqItem
                      key={key}
                      question={item.q}
                      answer={item.a}
                      isOpen={openKey === key}
                      onToggle={() => toggle(key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
