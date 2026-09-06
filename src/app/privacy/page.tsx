export const metadata = { title: "Privacy notice" };

export default function Privacy() {
  return (
    <div className="mx-auto max-w-content px-5 py-16">
      <h1 className="text-[36px] font-extrabold tracking-tightest">
        Privacy notice
      </h1>
      <p className="mt-3 text-[13px] text-muted">
        This is a working draft. Have it checked before you take real enquiries.
      </p>

      <div className="prose-measure mt-10 space-y-8 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-[19px] font-bold tracking-tightest">Who we are</h2>
          <p className="mt-3 text-muted">
            The AI Assistant is run by Andrew Reeves, based in Crosby, Merseyside.
            For anything about your data, email [ADD EMAIL].
          </p>
        </section>

        <section>
          <h2 className="text-[19px] font-bold tracking-tightest">
            What we collect and why
          </h2>
          <p className="mt-3 text-muted">
            If you take the assessment, we store your answers so we can produce
            your result. Answers are stored before we ask for an email address,
            and they are not linked to you unless you give us one.
          </p>
          <p className="mt-3 text-muted">
            If you ask for your report by email, we store your name and email
            address to send it and to follow up about your enquiry.
          </p>
          <p className="mt-3 text-muted">
            If you tick the box to receive updates, we use your email for that as
            well. That is a separate choice from receiving your report, and you
            can take one without the other.
          </p>
        </section>

        <section>
          <h2 className="text-[19px] font-bold tracking-tightest">
            What we never do
          </h2>
          <p className="mt-3 text-muted">
            We do not sell assessment answers or contact details to anyone. We do
            not ask for information we have no use for.
          </p>
        </section>

        <section>
          <h2 className="text-[19px] font-bold tracking-tightest">
            How your result is produced
          </h2>
          <p className="mt-3 text-muted">
            Your result is generated automatically from the answers you give. Any
            time or cost figures are estimates based on those answers, not
            predictions and not guarantees. You can ask for a person to review
            your result at any point.
          </p>
        </section>

        <section>
          <h2 className="text-[19px] font-bold tracking-tightest">
            Getting your data removed
          </h2>
          <p className="mt-3 text-muted">
            Email [ADD EMAIL] and we will delete everything we hold about you. You
            do not have to give a reason. You can also ask for a copy of it, or
            ask us to correct it.
          </p>
        </section>

        <section>
          <h2 className="text-[19px] font-bold tracking-tightest">Cookies</h2>
          <p className="mt-3 text-muted">
            This site uses only the cookies needed to make it work. If analytics
            are added later, this notice will say so and you will be asked first.
          </p>
        </section>
      </div>
    </div>
  );
}
