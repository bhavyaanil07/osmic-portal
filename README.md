# OSMIC Portal

The club portal for **OSMIC**, with an admin side, a club lead side and a member side. *From Ideas to Impact.*

> **Stage 1 (this version):** every page and animation works, using demo data saved in your browser.
> **Stage 2 (next):** connect Supabase for real logins, the database, file uploads and automatic emails.

## Run it on your laptop

You need **Node.js 18 or newer** (check with `node -v`).

```
git clone https://github.com/bhavyaanil07/osmic-portal.git
cd osmic-portal
npm install
npm run dev
```

Open the link it prints (usually http://localhost:5173).

## Try it

On the login page, use the **Demo** buttons to enter as **Admin**, **Club lead** (Rahul Nair) or **Member** (Ananya Menon).
You can also log in with any demo email and the password `osmic123`:

| Role | Email |
| --- | --- |
| Admin | admin@osmic.club |
| Club lead | rahul@am.students.amrita.edu |
| Club lead | fathima@am.students.amrita.edu |
| Member | ananya@am.students.amrita.edu |

The demo saves your changes in the browser. Use **Reset demo** on the login page to start fresh.
Today's demo attendance code is shown on the member's attendance page.

## Who can do what

| Feature | Admin | Club lead | Member |
| --- | --- | --- | --- |
| Approve or reject applications (and assign a club lead) | Yes | No | No |
| Make or remove club leads, deactivate members | Yes | No | No |
| Move members between teams | Yes | Add/remove from own team | No |
| Run attendance sessions and verify check-ins | Yes | No | No |
| Assign tasks, mark Pass or Fail | All members | Own team | No |
| Approve or reject leave | All members | Own team | No |
| Post announcements | Yes | Yes | No |
| Mark attendance, submit tasks, apply for leave | No | Yes | Yes |

**Attendance has two steps:** the member types the 6-character code shown in the room, then the admin verifies it.
Only verified check-ins count. Approved leave days are not counted as absent.

## Project structure

```
src/
  main.jsx               app start
  App.jsx                all page routes
  index.css              Tailwind and a few shared styles
  lib/
    demoData.js          made-up starting data (replaced by Supabase in stage 2)
    store.jsx            every action (approve, mark attendance, submit work...)
    selectors.js         attendance %, task status and other calculations
    dates.js             date helpers
  components/
    AppLayout.jsx        sidebar, top bar, notifications, page transitions
    ui.jsx               buttons, cards, badges, inputs, modal, animated numbers
    bits.jsx             stat cards, tabs, code tiles, countdown, member profile
    Toasts.jsx           pop-up messages
    Logo.jsx             OSMIC logo
  pages/
    public/              Login, Apply
    admin/               Dashboard, Applications, Members, Teams, Attendance
    lead/                Dashboard, My team
    staff/               Tasks, Leave requests, Announcements (admin and club lead)
    member/              Dashboard, Attendance, My tasks, Leave, My progress
```

The pages only talk to `lib/store.jsx`. In stage 2 the inside of each action changes to a Supabase call, and the pages stay the same.

## Built with

React 18 + Vite, Tailwind CSS, Framer Motion (animations), React Router and Lucide icons.
Animations respect the "reduce motion" setting on the user's device.

## Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com) (free). It detects Vite automatically.
`vercel.json` makes page links like `/admin/tasks` work when opened directly.

## Stage 2 plan

1. Create a Supabase project (free) and run the database script (tables + security rules).
2. Swap the demo store for Supabase calls: logins, data and file storage.
3. Add the approval Edge Function: creates the account and sends the "set your password" email.
4. Connect Resend for automatic emails, plus a scheduled job for deadline reminders and the daily summary.
