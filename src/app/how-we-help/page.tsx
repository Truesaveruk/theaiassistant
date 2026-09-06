import Link from "next/link";

export const metadata = {
  title: "How we help",
  description:
    "Start with a free assessment. If you want a hand after that, there's a 60-minute session for £99. Everything else is quoted properly.",
};

const alsoAvailable = [
  {
    name: "Business AI audit and action plan",
    price: "£295–£495",
    what: "A proper look at how your business actually runs, which jobs AI can take on, and a ranked plan of what to do first.",
  },
  {
    name: "Done-for-you setup",
    price: "From £750",
    what: "I build it. Email and document workflows, enquiry handling, follow-ups, reporting, whatever the audit says is worth doing.",
  },
  {
    name: "Training, one-to-one or team",
    price: "From £295",
    what: "Hands-on, using your real work. Not a slide deck about what a large language model is.",
  },
  {
    name: "Monthly support",
    price: "From £199/month",
    what: "Ongoing help as things change. Fixes, improvements, and a straight answer when something new comes out.",
  },
];

export default function HowWeHelp() {
  return (
    <div className="mx-auto max-w-content px-5 py-16">
      <h1 className="max-w-[18ch] text-[36px] font-extrabold leading-[1.05] tracking-tightest sm:text-[46px]">
        How we help
      </h1>
      <p className="prose-measure mt-6 text-[17px] leading-relaxed text-muted">
        Start free and find out where you stand. If you want a hand after that,
        there are two straightforward ways in. Bigger pieces of work get quoted
        once I understand what you actually need.
      </p>

      {/* The two launch offers get the weight. */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col border border-rule p-7">
          <p className="text-[13px] text-muted">Start here</p>
          <h2 className="mt-2 text-[22px] font-bold tracking-tightest">
            AI Journey Assessment
          </h2>
          <p className="mt-3 text-[28px] font-extrabold tracking-tightest text-pine">
            Free
          </p>
          <p className="prose-measure mt-4 text-[15px] leading-relaxed text-muted">
            About five minutes. You get your stage on the AI journey, three
            opportunities specific to the work you described, and one thing you
            can try the same afternoon. No email needed to see the result.
          </p>
          <Link
            href="/quiz"
            className="mt-7 rounded bg-pine px-5 py-3 text-center text-[15px] font-medium text-white hover:opacity-90"
          >
            Take the assessment
          </Link>
        </div>

        <div className="flex flex-col border border-rule p-7">
          <p className="text-[13px] text-muted">If you want to talk it through</p>
          <h2 className="mt-2 text-[22px] font-bold tracking-tightest">
            60-minute clarity session
          </h2>
          <p className="mt-3 text-[28px] font-extrabold tracking-tightest">£99</p>
          <p className="prose-measure mt-4 text-[15px] leading-relaxed text-muted">
            One hour on a call, going through your actual work. You leave knowing
            which two or three things are worth doing, which tool does each one,
            and how to start. No prep needed.
          </p>
          <Link
            href="/quiz"
            className="mt-7 rounded border border-rule px-5 py-3 text-center text-[15px] font-medium hover:bg-panel"
          >
            Book a session
          </Link>
        </div>
      </div>

      {/* Everything else, quieter. */}
      <section className="mt-16">
        <h2 className="text-[24px] font-bold tracking-tightest">
          Also available
        </h2>
        <p className="prose-measure mt-3 text-[15px] leading-relaxed text-muted">
          Most people don&rsquo;t need these to begin with. If you do, the
          assessment or a call is still the right first step so we can work out
          what&rsquo;s actually worth doing.
        </p>

        <ul className="mt-8 divide-y divide-rule border-y border-rule">
          {alsoAvailable.map((item) => (
            <li
              key={item.name}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="sm:flex-1">
                <h3 className="text-[17px] font-semibold">{item.name}</h3>
                <p className="prose-measure mt-2 text-[15px] leading-relaxed text-muted">
                  {item.what}
                </p>
              </div>
              <p className="shrink-0 text-[16px] font-bold tracking-tightest">
                {item.price}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-rule pt-10">
        <h2 className="max-w-[26ch] text-[24px] font-bold leading-tight tracking-tightest">
          I don&rsquo;t sell AI for the sake of it
        </h2>
        <p className="prose-measure mt-4 text-[16px] leading-relaxed text-muted">
          Plenty of what gets sold as an AI solution isn&rsquo;t worth the
          trouble. If the honest answer for your business is &ldquo;two free
          tools and an afternoon&rdquo;, that&rsquo;s what you&rsquo;ll be told.
          The assessment is free precisely so that answer stays available.
        </p>
      </section>
    </div>
  );
}
