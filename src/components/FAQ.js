import { useState } from "react";

const FAQ_DATA = [
  {
    category: "General",
    items: [
      {
        q: "What is a hackathon?",
        a: "A hackathon is a weekend-long event where students come together to build creative software or hardware projects. It's a great opportunity to learn new skills, meet other passionate people, and bring your ideas to life!",
      },
      {
        q: "When is Hack Brooklyn?",
        a: "Hack Brooklyn will take place from April 17th to 19th, 2026. Check our social media and website for the exact dates and schedule.",
      },
      {
        q: "What's the cost?",
        a: "Hack Brooklyn is completely free to attend! We provide food, swag, and a great experience at no cost to participants.",
      },
      {
        q: "What can I win?",
        a: "We have over $13K+ worth of prizes including tech gear like a Logitech Superlight 2 Mouse, Keychron V1 Max Keyboard, Acer Nitro Monitor, and more! There are also sponsor prizes from ElevenLabs and Prenora Dynamics.",
      },
      {
        q: "But I never hacked before!",
        a: "That's totally fine! Hack Brooklyn welcomes beginners of all skill levels. We'll have mentors, workshops, and resources to help you learn and build something awesome — no prior hackathon experience needed.",
      },
      {
        q: "I can't wait until the weekend to get started with Hack Brooklyn!",
        a: "We love the enthusiasm! Follow us on social media and join our Discord to stay updated on pre-hackathon events, workshops, and team formation opportunities.",
      },
      {
        q: "Still have questions!",
        a: "No worries! Reach out to us on Discord or email us at bc.cis.club@gmail.com and we'll be happy to help.",
      },
    ],
  },
  {
    category: "Registration",
    items: [
      {
        q: "Can I apply?",
        a: "Hack Brooklyn is open to all currently enrolled college and university students. Whether you're a freshman or a grad student, you're welcome to apply!",
      },
      {
        q: "What if I'm no longer eligible? / Can I volunteer to be a judge or mentor?",
        a: "Absolutely! We're always looking for experienced mentors and judges. If you're a professional or alumni, you can apply to volunteer through our mentor application form.",
      },
      {
        q: "How do I apply?",
        a: "Head to our registration page and fill out the application form. You'll hear back from us with a decision before the event. Deadline is April 10th, 2026",
      },
      {
        q: "How do teams work?",
        a: "Teams can have up to 4 members. You can form a team before the event or find teammates at our team formation session during the hackathon. You can also participate solo!",
      },
      {
        q: "What if I go to Brooklyn College (or a CUNY school)?",
        a: "Brooklyn College and CUNY students are especially welcome! Hack Brooklyn is organized by the Brooklyn College Computer Science Club, so you're right at home.",
      },
      {
        q: "Where can I find the application to be a mentor or a judge?",
        a: "The mentor and judge application is available on our website. Check the registration page or reach out to us on Discord for the direct link.",
      },
    ],
  },
  {
    category: "Tracks",
    items: [
      {
        q: "What are hackathon tracks?",
        a: "Tracks are themed categories for your project. This year's tracks are Finance, Education, Entertainment, and Healthcare. Choose the one that inspires you most and build your project around it!",
      },
      {
        q: "How many main tracks can I choose?",
        a: "You can select one or two main tracks for your project. Pick the tracks that best align with your idea!",
      },
      {
        q: "What are sponsored tracks?",
        a: "Sponsored tracks are special challenge categories provided by our sponsors, such as Best ElevenLabs Hack and Best Prenora Dynamics Hack. They come with their own unique prizes!",
      },
      {
        q: "How many sponsored tracks can I apply to?",
        a: "There's no limit! You can apply to as many sponsored tracks as you'd like. If your project fits multiple sponsored challenges, go for it!",
      },
      {
        q: "Can I combine main tracks and sponsored tracks?",
        a: "Absolutely! You can choose one or two main tracks and apply to unlimited sponsored tracks at the same time.",
      },
      {
        q: "Do I have to submit a project if I attend?",
        a: "Submitting a project is encouraged but not required. You're welcome to attend workshops, network with others, and enjoy the event even if you don't submit a final project.",
      },
    ],
  },
  {
    category: "In-Person Logistics",
    items: [
      {
        q: "Can I attend Hack Brooklyn virtually?",
        a: "Hack Brooklyn is an in-person event. We encourage all participants to attend on-site for the full experience, including networking, mentorship, and team collaboration.",
      },
      {
        q: "Will food be provided?",
        a: "Yes! We'll provide meals and snacks throughout the event to keep you fueled while you hack. We'll do our best to accommodate dietary restrictions.",
      },
      {
        q: "Will there be overnight accommodations?",
        a: "No, this event will not be overnight. The building closes at 7 pm and hackers are required to leave for the night.",
      },
      {
        q: "Where is Hack Brooklyn?",
        a: "Hack Brooklyn is held at Brooklyn College. The exact building and room details will be shared with accepted participants before the event.",
      },
      {
        q: "Will my travel be reimbursed?",
        a: "Unfortunately, we are unable to offer travel reimbursements at this time. However, Brooklyn College is easily accessible by public transit.",
      },
      {
        q: "Will there be hardware I can use?",
        a: "We'll have a limited selection of hardware available for participants to borrow during the event. Bring your own laptop and any other equipment you might need.",
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
              <h3 className="mb-2 border-b border-[#8b6f47] pb-1.5 text-[clamp(16px,2vw,19px)] font-semibold text-[#2a0f0a]">
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
