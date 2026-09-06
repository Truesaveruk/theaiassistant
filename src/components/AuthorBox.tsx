import Link from "next/link";

export default function AuthorBox() {
  return (
    <aside className="mt-14 border-t border-rule pt-8">
      <div className="flex gap-5">
        <div
          aria-hidden
          className="h-16 w-16 shrink-0 rounded-full bg-panel"
          title="Replace with a photo at /public/andy.jpg"
        />
        <div>
          <p className="text-[15px] font-semibold">Andy Reeves</p>
          <p className="prose-measure mt-2 text-[14px] leading-relaxed text-muted">
            Andy runs The UK AI Meetup, helping business owners who aren&rsquo;t
            technical work out what AI is actually good for. Twenty years in
            construction, utilities and project management before this, so he
            asks the questions a working business owner asks. Based in Crosby,
            Merseyside.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="rounded bg-pine px-4 py-2 text-[14px] font-medium text-white hover:opacity-90"
            >
              Book a 30-minute call
            </Link>
            <a
              href="https://www.meetup.com"
              className="rounded border border-rule px-4 py-2 text-[14px] font-medium hover:bg-panel"
            >
              Join the meetup
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
