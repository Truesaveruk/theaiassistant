import Link from "next/link";
import { getSupabase, type Post } from "@/lib/supabase";
import { formatDate } from "@/lib/format";
import AudienceSelector from "@/components/AudienceSelector";

export const revalidate = 300;

async function getLatestPosts(): Promise<Post[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data } = await supabase
    .from("posts")
    .select("id,title,slug,excerpt,published_at,tags,author")
    .eq("published", true)
    .order("published_at", { ascending: false })
    .limit(3);
  return data ?? [];
}

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <>
      {/* Hero. Leads with the question the site exists to answer, not a slogan. */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-content px-5 py-20 sm:py-28">
          <h1 className="max-w-[16ch] text-[40px] font-extrabold leading-[1.03] tracking-tightest sm:text-[64px]">
            Which AI tools are actually worth your time?
          </h1>
          <p className="prose-measure mt-7 text-[17px] leading-relaxed text-muted">
            Most of them do the same thing in different packaging. This site rates
            them honestly — how easy each one is, who it suits, and whether it
            pays off — so you can stop guessing and start using one.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/quiz"
              className="rounded bg-pine px-6 py-3 text-[15px] font-medium text-white hover:opacity-90"
            >
              Find out where you stand
            </Link>
            <Link
              href="/tools"
              className="text-[15px] font-medium underline underline-offset-4 hover:text-pine"
            >
              Or browse the tool reviews
            </Link>
          </div>
          <p className="mt-5 text-[13px] text-muted">
            Five questions, about two minutes. No email needed to see your result.
          </p>
        </div>
      </section>

      <AudienceSelector />

      {/* How the ratings work — teaches the score language before it's used. */}
      <section className="border-b border-rule bg-panel">
        <div className="mx-auto max-w-content px-5 py-16">
          <h2 className="text-[24px] font-bold tracking-tightest">
            Every tool gets rated three ways
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-[15px] font-semibold">Ease of use</p>
              <p className="prose-measure mt-2 text-[14px] leading-relaxed text-muted">
                How long before you get something useful out of it. Rated one to
                five.
              </p>
            </div>
            <div>
              <p className="text-[15px] font-semibold">Who it suits</p>
              <p className="prose-measure mt-2 text-[14px] leading-relaxed text-muted">
                Whether you need any technical background to get value from it.
              </p>
            </div>
            <div>
              <p className="text-[15px] font-semibold">Payoff</p>
              <p className="prose-measure mt-2 text-[14px] leading-relaxed text-muted">
                What it realistically gives back for the time and money it costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="mx-auto max-w-content px-5 py-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-[24px] font-bold tracking-tightest">
            What happened in AI this week
          </h2>
          <Link
            href="/blog"
            className="text-[14px] text-muted underline underline-offset-4 hover:text-ink"
          >
            All posts
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="mt-8 border border-dashed border-rule px-6 py-12">
            <p className="prose-measure text-[15px] text-muted">
              The news feed starts once the site is connected to its database.
              Posts are written from published sources and cite every one of them.
            </p>
          </div>
        ) : (
          <ul className="mt-8 divide-y divide-rule border-y border-rule">
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.slug}`} className="block py-6 group">
                  <p className="text-[13px] text-muted">
                    {formatDate(post.published_at)}
                  </p>
                  <h3 className="mt-1 text-[19px] font-semibold leading-snug group-hover:text-pine">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="prose-measure mt-2 text-[15px] leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Closing */}
      <section className="border-t border-rule bg-panel">
        <div className="mx-auto max-w-content px-5 py-20">
          <h2 className="max-w-[20ch] text-[30px] font-bold leading-tight tracking-tightest">
            Not sure where to start? That&rsquo;s the normal place to be.
          </h2>
          <p className="prose-measure mt-5 text-[16px] leading-relaxed text-muted">
            Answer five questions and you&rsquo;ll get a straight read on where you
            are, three things to do next, and the tools that suit you rather than
            the ones with the biggest marketing budget.
          </p>
          <Link
            href="/quiz"
            className="mt-8 inline-block rounded bg-pine px-6 py-3 text-[15px] font-medium text-white hover:opacity-90"
          >
            Start the quiz
          </Link>
        </div>
      </section>
    </>
  );
}
