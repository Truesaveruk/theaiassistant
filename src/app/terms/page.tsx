export const metadata = { title: "Terms and disclaimer" };

export default function Terms() {
  return (
    <div className="mx-auto max-w-content px-5 py-16">
      <h1 className="text-[36px] font-extrabold tracking-tightest">
        Terms and disclaimer
      </h1>
      <p className="mt-3 text-[13px] text-muted">
        This is a working draft. Have it checked before you take real enquiries.
      </p>

      <div className="prose-measure mt-10 space-y-8 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-[19px] font-bold tracking-tightest">
            What this site is
          </h2>
          <p className="mt-3 text-muted">
            Guidance on using AI tools in a small business, plus paid help
            putting that into practice. It is general information, not advice
            specific to your circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-[19px] font-bold tracking-tightest">
            Estimates are estimates
          </h2>
          <p className="mt-3 text-muted">
            Where the site mentions hours saved or money saved, those are
            estimates worked out from what you told us. Your results will differ.
            Nothing here is a guarantee of any outcome.
          </p>
        </section>

        <section>
          <h2 className="text-[19px] font-bold tracking-tightest">
            Tool ratings are opinions
          </h2>
          <p className="mt-3 text-muted">
            Ratings reflect hands-on use and honest judgement at the time of
            writing. Tools change constantly. Check anything important yourself
            before committing money to it.
          </p>
        </section>

        <section>
          <h2 className="text-[19px] font-bold tracking-tightest">
            Third-party tools
          </h2>
          <p className="mt-3 text-muted">
            We do not run the tools we write about and cannot be responsible for
            them, their pricing, their availability, or what they do with your
            data. Read their own terms.
          </p>
        </section>

        <section>
          <h2 className="text-[19px] font-bold tracking-tightest">News posts</h2>
          <p className="mt-3 text-muted">
            Daily news posts are written by AI from published sources, which are
            cited on every article. Follow the source link for the original
            reporting. Tool reviews, ratings and use cases are written by Andrew
            Reeves.
          </p>
        </section>
      </div>
    </div>
  );
}
