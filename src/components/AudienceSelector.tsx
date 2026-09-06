import Link from "next/link";

/**
 * Sorts visitors before they commit to anything. Each card carries the
 * audience through to the assessment as a query param.
 */
const audiences = [
  {
    who: "New to all this",
    line: "You've heard about AI constantly and used it barely at all. Nothing here assumes otherwise.",
    param: "beginner",
  },
  {
    who: "Self-employed",
    line: "You do everything yourself. The win is getting hours back from admin and repetition.",
    param: "self-employed",
  },
  {
    who: "Small business",
    line: "A handful of staff, no IT department, and no appetite for a six-month project.",
    param: "small-business",
  },
  {
    who: "Established team",
    line: "You want this done properly across the business, with the team trained rather than guessing.",
    param: "team",
  },
];

export default function AudienceSelector() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-content px-5 py-16">
        <h2 className="text-[24px] font-bold tracking-tightest">
          Where do you fit?
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <li key={a.param}>
              <Link
                href={`/quiz?audience=${a.param}`}
                className="flex h-full flex-col border border-rule p-5 hover:border-pine"
              >
                <h3 className="text-[17px] font-bold tracking-tightest">
                  {a.who}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {a.line}
                </p>
                <span className="mt-5 text-[14px] font-medium text-pine">
                  Start here
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
