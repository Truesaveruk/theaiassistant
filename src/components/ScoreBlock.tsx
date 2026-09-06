/**
 * The rating unit. This is the one element that has to be memorable, so
 * everything else on the site stays quiet around it.
 *
 * It appears on tool cards, tool pages and quiz results, always identical, so
 * the reader learns to read it once and then reads it everywhere.
 */

type Outcome = "Low" | "Medium" | "High";
type Skill = "Beginner" | "Intermediate" | "Advanced";

const outcomeStyles: Record<Outcome, string> = {
  High: "bg-signalHighBg text-signalHigh",
  Medium: "bg-signalMidBg text-signalMid",
  Low: "bg-signalLowBg text-signalLow",
};

const skillStyles: Record<Skill, string> = {
  Beginner: "bg-signalHighBg text-signalHigh",
  Intermediate: "bg-signalMidBg text-signalMid",
  Advanced: "bg-signalLowBg text-signalLow",
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-2">
      <span className="text-[13px] text-muted">{label}</span>
      {children}
    </div>
  );
}

export function ScoreBlock({
  usability,
  skill,
  outcome,
}: {
  usability: number | null;
  skill: Skill | null;
  outcome: Outcome | null;
}) {
  return (
    <div className="divide-y divide-rule border-y border-rule">
      <Row label="Ease of use">
        <span
          className="flex gap-[3px]"
          aria-label={usability ? `${usability} out of 5` : "Not rated"}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              aria-hidden
              className={`h-[9px] w-[9px] rounded-full ${
                usability && n <= usability ? "bg-pine" : "bg-rule"
              }`}
            />
          ))}
        </span>
      </Row>

      <Row label="Suits">
        {skill ? (
          <span
            className={`rounded px-2 py-[3px] text-[13px] font-medium ${skillStyles[skill]}`}
          >
            {skill}
          </span>
        ) : (
          <span className="text-[13px] text-muted">Not rated</span>
        )}
      </Row>

      <Row label="Payoff">
        {outcome ? (
          <span
            className={`rounded px-2 py-[3px] text-[13px] font-medium ${outcomeStyles[outcome]}`}
          >
            {outcome}
          </span>
        ) : (
          <span className="text-[13px] text-muted">Not rated</span>
        )}
      </Row>
    </div>
  );
}

export function PriceTag({ price }: { price: string | null }) {
  if (!price) return null;
  return (
    <span className="rounded border border-rule px-2 py-[2px] text-[12px] text-muted">
      {price}
    </span>
  );
}
