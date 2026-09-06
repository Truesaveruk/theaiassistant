import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-panel">
      <div className="mx-auto max-w-content px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h2 className="mb-3 text-[13px] font-semibold">Explore</h2>
            <ul className="space-y-2 text-[14px] text-muted">
              <li><Link href="/tools" className="hover:text-ink">Tool reviews</Link></li>
              <li><Link href="/prompts" className="hover:text-ink">Prompt library</Link></li>
              <li><Link href="/videos" className="hover:text-ink">Videos</Link></li>
              <li><Link href="/glossary" className="hover:text-ink">Glossary</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-[13px] font-semibold">Start here</h2>
            <ul className="space-y-2 text-[14px] text-muted">
              <li><Link href="/quiz" className="hover:text-ink">Take the quiz</Link></li>
              <li><Link href="/use-cases" className="hover:text-ink">Use cases</Link></li>
              <li><Link href="/challenges" className="hover:text-ink">This week&rsquo;s challenge</Link></li>
              <li><Link href="/my-skills" className="hover:text-ink">Skill tracker</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-[13px] font-semibold">About</h2>
            <p className="prose-measure text-[14px] leading-relaxed text-muted">
              Written and maintained by Andy Reeves in Crosby, Merseyside. He runs
              The UK AI Meetup, helping business owners get past the hype.
            </p>
            <ul className="mt-4 space-y-2 text-[14px] text-muted">
              <li><Link href="/how-we-help" className="hover:text-ink">How we help</Link></li>
              <li><Link href="/privacy" className="hover:text-ink">Privacy notice</Link></li>
              <li><Link href="/terms" className="hover:text-ink">Terms and disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <p className="prose-measure mt-12 border-t border-rule pt-6 text-[13px] leading-relaxed text-muted">
          Our daily news posts are written by AI from published sources, which are
          cited on every article. Tool reviews, ratings and use cases are written
          by Andy Reeves. Any time or money savings mentioned on this site are
          estimates, not guarantees.
        </p>
      </div>
    </footer>
  );
}
