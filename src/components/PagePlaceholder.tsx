import Link from "next/link";

/**
 * Honest placeholder for sections that are built but not yet populated.
 * Says what the page will do and gives the reader somewhere to go meanwhile.
 */
export default function PagePlaceholder({
  title,
  intro,
  detail,
}: {
  title: string;
  intro: string;
  detail: string;
}) {
  return (
    <div className="mx-auto max-w-content px-5 py-16">
      <h1 className="max-w-[18ch] text-[36px] font-extrabold leading-[1.05] tracking-tightest sm:text-[46px]">
        {title}
      </h1>
      <p className="prose-measure mt-6 text-[17px] leading-relaxed text-muted">
        {intro}
      </p>
      <div className="mt-10 border border-dashed border-rule px-6 py-12">
        <p className="prose-measure text-[15px] leading-relaxed text-muted">
          {detail}
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/tools"
          className="rounded border border-rule px-5 py-3 text-[15px] font-medium hover:bg-panel"
        >
          Browse tool reviews
        </Link>
        <Link
          href="/quiz"
          className="rounded bg-pine px-5 py-3 text-[15px] font-medium text-white hover:opacity-90"
        >
          Take the quiz
        </Link>
      </div>
    </div>
  );
}
