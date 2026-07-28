# Blue Oracle Consulting

Marketing website for [blueoracleconsulting.com](https://blueoracleconsulting.com) — operations management consulting with planning, scheduling, and AI CMMS product offerings.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, AI CMMS highlight |
| `/services` | Operations management, planning & scheduling, process optimization |
| `/ai-cmms` | AI CMMS product page with features and purchase inquiry |
| `/about` | Company story, approach, and values |
| `/contact` | Contact form for consulting and CMMS demo/purchase requests |

## Related Project

The **AI CMMS** product lives in a separate repo/app:

```
~/Projects/ai-cmms
```

Run it separately on port 3000. This marketing site runs on port 3001 by default if both are running.

## Getting Started

```bash
cd ~/Projects/blueoracle-consulting
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to blueoracleconsulting.com

1. Push to GitHub
2. Deploy on [Vercel](https://vercel.com) (recommended for Next.js)
3. Add your domain in Vercel project settings → Domains → `blueoracleconsulting.com`
4. Update DNS at your registrar:
   - **A record** → Vercel IP, or
   - **CNAME** → `cname.vercel-dns.com`

## Contact Form

Submissions are logged to the server console. To send real emails, wire `/api/contact` to a service like [Resend](https://resend.com) or SendGrid.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide icons

## License

MIT
