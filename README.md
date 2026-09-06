# The AI Assistant

Next.js 14 + TypeScript + Tailwind + Supabase, deployed on Vercel.

---

## Getting it live — no terminal needed

### 1. Create the GitHub repo

Go to **github.com/new**

- Owner: **Truesaveruk**
- Repository name: **theaiassistant**
- Private
- Do NOT tick "Add a README"

Click **Create repository**.

### 2. Upload these files

On the empty repo page, click **uploading an existing file**.

Unzip this download, then drag **everything inside the folder** into the browser
window — all the files and folders together. Do not drag the outer folder itself,
drag its contents.

Scroll down, click **Commit changes**.

> `node_modules` is not included and must not be. Vercel installs it.

### 3. Create the Supabase project

Go to **supabase.com**, create a new project.

Once it's ready: **SQL Editor → New query**, paste the whole contents of
`supabase/schema.sql`, click **Run**.

Then **Settings → API** and keep this tab open — you need three values in a moment.

### 4. Deploy on Vercel

Go to **vercel.com/new**, import the `theaiassistant` repo.

Before clicking Deploy, open **Environment Variables** and add:

| Name | Where it comes from |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API → anon public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API → service_role key |
| `NEXT_PUBLIC_SITE_URL` | `https://theaiassistant.com` |

Click **Deploy**.

### 5. Point the domain at it

Vercel → your project → **Settings → Domains** → add `theaiassistant.com`.
Vercel shows you the DNS records to set at your registrar.

---

## What's in this build

| Page | State |
|---|---|
| `/` Homepage | Done — pulls the latest 3 posts |
| `/tools` Tool reviews | Done — filters, ratings, empty state |
| `/tools/[slug]` Tool review | Done |
| `/how-we-help` Services and prices | Done |
| `/privacy` Privacy notice | Draft — needs your email address adding |
| `/terms` Terms and disclaimer | Draft — needs checking |
| `/prompts` | Placeholder |
| `/videos` | Placeholder |
| `/glossary` | Placeholder |
| `/use-cases` | Placeholder |
| `/challenges` | Placeholder |
| `/quiz` | Placeholder |
| `/blog` | Placeholder |
| `/my-skills` | Placeholder — stays a placeholder by design |

Every page works with an empty database. Nothing crashes before the content
exists.

---

## Design notes

The site is built to look like a consumer testing organisation, not a tech
startup — the closest relative is Which?, not a SaaS landing page.

- **Colour carries meaning.** Green, amber and red are only ever used for
  ratings, never for decoration. Once a reader learns the score block, they can
  read every tool at a glance.
- **One family, Archivo**, self-hosted so no fonts are fetched from Google.
  Hierarchy comes from weight and size, not from a display serif.
- **Left-aligned throughout.** No centred hero, no gradients, no cards with drop
  shadows.
- **The score block is the one bold element.** Everything else stays quiet.

Colours live in `tailwind.config.ts`. Change them there and they change
everywhere.

---

## Adding a photo of Andy

Drop a square image at `public/andy.jpg`, then in
`src/components/AuthorBox.tsx` swap the grey circle for an `<Image>`.


---

## Before you take real enquiries

1. **Add your email address** to `src/app/privacy/page.tsx` — search for
   `[ADD EMAIL]`, it appears twice.
2. **Get the privacy notice and terms looked over.** They're written to cover the
   ICO basics — separate consent for the report and for marketing, a clear
   deletion route, estimates labelled as estimates — but they are a starting
   draft, not legal advice.
3. **Prices are live on `/how-we-help`.** Free assessment, £99 clarity session
   featured; audit, done-for-you, training and monthly support listed underneath.
   All in `src/app/how-we-help/page.tsx` if you want to change them.
