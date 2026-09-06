import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-5 py-28">
      <h1 className="text-[40px] font-extrabold tracking-tightest">
        That page isn&rsquo;t here
      </h1>
      <p className="prose-measure mt-5 text-[16px] leading-relaxed text-muted">
        The link may be out of date, or the page may have moved. The tool reviews
        are the best place to pick things back up.
      </p>
      <Link
        href="/tools"
        className="mt-8 inline-block rounded bg-pine px-6 py-3 text-[15px] font-medium text-white hover:opacity-90"
      >
        Browse tool reviews
      </Link>
    </div>
  );
}
