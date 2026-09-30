/* ============================================================
   PUBLIC SITE — templates for the static pages + home + admin gate
   ============================================================ */
const SITE = {
  name:"NOVA", tagline:"AI that pays for itself in your business",
  // ---- Replace with real figures before going public ----
  years:"15+", clients:"40+", tasksRun:"1,200+",
  founder:"the NOVA team",
  phone:"(555) 014-2200", email:"hello@nova-automation.example",
  bookingUrl:"contact.html",   // swap for a Calendly/HubSpot link when you have one
  city:"Serving businesses across the U.S.",
  adminPassHash:"__PASSHASH__",
};
const CTA_TXT = "Book a free consultation";
const LOGOS = [
  ["QuickBooks","#2CA01C"],["Xero","#13B5EA"],["ServiceTitan","#1A56DB"],["Jobber","#7DB00E"],["Housecall Pro","#1D6DED"],["HubSpot","#FF7A59"],
  ["Salesforce","#00A1E0"],["GoHighLevel","#1B5DE5"],["Clio","#0070E0"],["NexHealth","#5B4CFF"],["Weave","#00A9A5"],["Google Workspace","#4285F4"],
  ["Microsoft 365","#D83B01"],["Slack","#4A154B"],["Zapier","#FF4F00"],["Make","#6D00CC"],["Twilio","#F22F46"],["RingCentral","#FF7A00"],
  ["Calendly","#006BFF"],["Stripe","#635BFF"],["Shopify","#5E8E3E"],["DocuSign","#1B1B1B"],["Notion","#1B1B1B"],["Mailchimp","#1B1B1B"],["Gusto","#F45D48"],["Podium","#0057FF"],
];
const PILLARS = {
  "bi-consulting":{ t:"Business Intelligence & Value Creation Consulting", short:"BI & Value Creation", icon:"chart",
    tag:"See the number, then fix it",
    d:"We find where your business leaks money — missed calls, slow quotes, unpriced jobs, aging invoices — put it on one page you actually read, and turn it into a ranked plan with the payback for each fix.",
    bullets:["Opportunity audit: the ten workflows costing you the most, each with today-vs-after numbers","Owner's dashboard and a Monday narrative in plain English","Margin by job, crew, and service line; pricing corrected on evidence","13-week cash flow; budget vs. actual with the reasons","Win/loss and customer-language analysis that changes how you sell"],
    tasks:["finance-20","finance-13","finance-12","finance-11","sales-7","marketing-19"],
    ev:["mckGenAI","qbLate","mckEmail","chamber"],
    who:"Owners who don't know if last month was good until the CPA calls; businesses about to hire, expand, or sell.",
  },
  "agent-hiring":{ t:"Agent Hiring", short:"Agent Hiring", icon:"agent",
    tag:"Hire an AI agent the way you'd hire a person",
    d:"A front-desk agent that answers every call. An intake agent that replies to leads in a minute. A collections agent that chases invoices politely and never gets tired. Each one has a job description, works inside your systems, hands off to a person when it should, and costs a fraction of a salary.",
    bullets:["Scoped like a role: what it does, what it never does, when it transfers","Runs in shadow mode with your team approving before it goes live","Works 24/7 inside your phone system, CRM, and helpdesk","You hear the calls, read the messages, and see the numbers weekly","Priced per agent, month to month — no seats, no lock-in"],
    tasks:["service-5","sales-1","finance-4","service-1","sales-2","finance-1"],
    ev:["hbr","nber","gartner","cochrane"],
    who:"Any business missing calls, replying to leads late, or dreading the collections call.",
  },
  "automation":{ t:"Automation", short:"Automation", icon:"flow",
    tag:"The work between your systems, done without hands",
    d:"Re-keying between the CRM and the ledger. Invoices that should send themselves. Documents that arrive by email and get typed in again. We connect the tools you already pay for so the hand-offs happen on their own — and we measure the hours that come back.",
    bullets:["Connect what you have: field service, practice management, CRM, accounting, phones","Documents read and entered: POs, receipts, forms, intake, remittances","Follow-ups that run to a yes or a no: quotes, reviews, renewals, signatures","Every automation documented, monitored, and in your name","Priced as a fixed setup plus a small monthly retainer"],
    tasks:["ops-5","finance-3","ops-6","sales-4","finance-2","ops-11"],
    ev:["ardent","mckEmail","baymard","mckGenAI"],
    who:"Any office where one person's job is copying data from one screen to another.",
  },
  "on-prem":{ t:"On-Prem & Private AI", short:"On-Prem", icon:"server",
    tag:"AI that never leaves your building",
    d:"For firms whose data can't go to a cloud vendor — law, healthcare, finance, anyone under a confidentiality obligation — we install AI on a server in your office or in a private cloud you control. Your documents, your call recordings, your client files: searched and summarized by models that run where you can see them.",
    bullets:["Open-weight models running on hardware you own or a single-tenant private cloud","Private document assistant over your files, matters, or charts — with citations","Call and meeting summaries processed locally","Self-hosted automation (n8n, Supabase) with no per-token vendor bill","Security posture documented for your auditor, insurer, or bar"],
    tasks:["ops-4","ops-10","ops-2","service-3","hr-6","finance-17"],
    ev:["chamber","mckGenAI","mckEmail"],
    who:"Practices and firms with confidentiality requirements, regulated data, or a policy against sending data to AI vendors.",
  },
};
const AUD = {
  "law-firms":{ t:"Law Firms", short:"Law", eyebrow:"AI for law firms",
    h1:"Every call answered. Every intake captured. Nothing slips after signing.",
    sub:"NOVA sets up AI inside the tools your firm already uses — Clio, Lawmatics, your phones, your inbox — so potential clients are answered in seconds, intake is complete before the consult, and obligations land on the calendar.",
    pains:["A potential client calls at 6:40pm and gets voicemail. They call the next firm.","Intake is a phone-tag marathon; half the consults arrive with no facts.","Billing follow-up falls to the attorney who least wants to do it.","Obligations and dates live in three inboxes and one paralegal's memory."],
    tasks:[["service-5","24/7 intake coverage that transfers real emergencies"],["sales-1","Web and phone leads answered in under a minute"],["ops-15","Intake questionnaires completed before the consult"],["ops-10","Contract review, clause flags, and obligation calendars"],["finance-4","Polite, persistent billing follow-up"],["ops-4","A private assistant over your matters and precedents"],["finance-17","Client document chasing without the chasing"],["marketing-8","Reviews requested at the right moment, answered in your voice"]],
    logos:["Clio","DocuSign","Google Workspace","Microsoft 365","QuickBooks","RingCentral","Calendly","HubSpot"],
    pillars:["agent-hiring","on-prem","automation"], ev:["hbr","mckEmail","qbLate","brightlocal"],
    compliance:"Confidentiality and privilege come first. AI drafts and routes; an attorney reviews anything that touches advice. Firms that can't send client data to a vendor get our on-prem option, and every system is set up in your firm's name.",
    faq:[["Will an AI answer callers who need legal advice?","No. It captures the matter, urgency, and contact details, books a consult, and transfers emergencies to a person. It never advises."],["What about bar rules on confidentiality?","We build to your jurisdiction's rules with your guidance, document the data flow so you can show it, and offer on-prem deployment when client data must stay in the building."]],
  },
  "medical":{ t:"Medical & Dental Practices", short:"Medical", eyebrow:"AI for medical, dental and specialty practices",
    h1:"A front desk that never puts a patient on hold — and a schedule that stays full.",
    sub:"We add AI to the systems your practice already runs on — your PMS, NexHealth or Weave, your phones — to answer patients around the clock, complete intake before the visit, confirm and recall automatically, and chase balances kindly.",
    pains:["Phones ring through lunch and after 5; new-patient calls go to voicemail.","No-shows and late cancels leave chairs empty that a waitlist could fill.","Intake happens on a clipboard in the lobby, then gets typed in again.","Patient balances age because nobody likes making that call."],
    tasks:[["service-5","After-hours and overflow phone coverage for patients"],["sales-2","Recalls, confirmations and reactivation by text and voice"],["ops-15","Pre-visit intake and consent completed on the patient's phone"],["service-1","Insurance, hours and pricing questions answered instantly"],["finance-4","Patient balance follow-up that's firm but kind"],["marketing-8","More five-star reviews, every one answered"],["ops-1","The office manager's inbox sorted and drafted"],["hr-7","Staff scheduling with coverage gaps caught early"]],
    logos:["NexHealth","Weave","Calendly","QuickBooks","Google Workspace","Twilio","Podium","RingCentral"],
    pillars:["agent-hiring","automation","on-prem"], ev:["cochrane","hbr","brightlocal","nber"],
    compliance:"HIPAA is not an afterthought. We use HIPAA-eligible vendors with signed BAAs, keep PHI inside those tools — or on-prem when you prefer — and document the data flow so your compliance officer can sign off before anything goes live.",
    faq:[["Is this HIPAA compliant?","We build only with HIPAA-eligible vendors under BAAs, keep PHI inside those systems, and deliver a data-flow document for your records. Compliance is shared; we make our half easy to verify."],["Will patients know they're talking to an AI?","Yes — it introduces itself and offers a person at any point. Patients care that they got an answer and an appointment."]],
  },
  "home-services":{ t:"Home Services", short:"Trades", eyebrow:"AI for HVAC, plumbing, electrical, roofing and more",
    h1:"Stop losing jobs to voicemail. Quote the same day. Get paid faster.",
    sub:"NOVA connects to ServiceTitan, Jobber or Housecall Pro and your phone system so every call gets answered, every lead gets a reply in 60 seconds, quotes go out before the competitor's, and invoices chase themselves.",
    pains:["30% of calls hit voicemail while your techs are on the job — and the caller books the next company.","Quotes get written at the kitchen table at 10pm, two days after the visit.","Follow-up happens once, if at all.","Invoices go out late and get paid later."],
    tasks:[["service-5","Every call answered, booked, or transferred — 24/7"],["sales-1","Leads texted back in under a minute, then followed up seven times"],["sales-3","Quotes drafted from photos and a voice note, same day"],["sales-4","Quote follow-up until a yes or a no"],["ops-8","Smarter dispatch and routing — one more job per crew per day"],["finance-3","Invoice sent the moment the job closes, with a pay link"],["finance-13","Real margin by job — find the service line losing money"],["marketing-8","Reviews requested at the moment of delight"]],
    logos:["ServiceTitan","Jobber","Housecall Pro","QuickBooks","Twilio","GoHighLevel","Google Workspace","Stripe"],
    pillars:["agent-hiring","automation","bi-consulting"], ev:["hbr","brightlocal","qbLate","gartner"],
    compliance:"Calls and texts follow TCPA and carrier rules — disclosures in the greeting, registered messaging, opt-outs honored. Every account is in your company's name, so you're never locked in to us.",
    faq:[["My customers want a real person.","They want an answer. Today a third of them get voicemail. The agent answers, books, and transfers to a person the moment someone asks — and you can listen to every call."],["Does this work with ServiceTitan / Jobber / Housecall Pro?","Yes. We book into your system, not a spreadsheet, and we don't ask you to switch."]],
  },
  "accounting-insurance":{ t:"Accounting & Insurance Firms", short:"Firms", eyebrow:"AI for accounting, bookkeeping and insurance agencies",
    h1:"Busy season without the chasing. Renewals that never slip. Inboxes under control.",
    sub:"We automate the document hunting, data entry, and follow-up that eat a firm's hours — inside QuickBooks, Xero, your practice tools and your inbox — so your people spend their time on clients, not reminders.",
    pains:["Staff spend busy season chasing clients for documents.","Cleanup and categorization eat hours that should be advisory work.","Renewals, COIs and policy questions pile up in email.","Every client question lands on the partner's phone."],
    tasks:[["finance-17","Client document requests that chase themselves"],["finance-2","Transaction categorization and rec prep done before you open the file"],["finance-18","Backlog cleanup in weeks, not quarters"],["ops-1","Partner and staff inboxes triaged with replies drafted"],["sales-8","Renewal and cross-sell triggers caught on time"],["finance-16","Renewal and certificate tracking with automatic reminders"],["service-3","Client replies drafted in your voice for a human to send"],["ops-4","A private assistant over engagement files and policies"]],
    logos:["QuickBooks","Xero","Google Workspace","Microsoft 365","DocuSign","HubSpot","Slack","Salesforce"],
    pillars:["automation","bi-consulting","on-prem"], ev:["ardent","mckEmail","qbLate","chamber"],
    compliance:"Client financial data stays in your systems. We never hold credentials, we name every subprocessor, and firms that need it get on-prem deployment with a data-flow document for engagement letters.",
    faq:[["We're an accounting firm — can we resell this to our clients?","Yes, and it's the best fit in the book. One build spreads across every client on the same stack. We'll structure a partner arrangement."],["Will this replace our bookkeepers?","No. It removes the entry and chasing so they review, close, and advise. Every client we've worked with kept their team."]],
  },
};
const HOW = [
  ["Free consultation","30 minutes on the phone about your business — what's slow, what's leaking, what you've tried. No pitch. If we can help, we'll say how; if we can't, we'll say that too."],
  ["Opportunity audit","Two weeks. We interview you and three staff, map the workflows costing you the most, and rank them by what they cost you today and how hard they are to fix."],
  ["Pilot with a gate","One automation or agent, three to six weeks, a success metric we agree on up front. It runs in shadow mode before a customer ever hears it. If the number doesn't move, you stop."],
  ["Managed and reported","Go-live starts a month-to-month retainer: monitoring, tuning, a Monday note you can read in five minutes, and one improvement a month. Everything is in your name."],
];
const TRUST = [
  ["We work inside your tools","ServiceTitan, Clio, QuickBooks, NexHealth, HubSpot — we connect to what you already pay for. No rip-and-replace, no new system to learn."],
  ["You own everything","Every account, number, and configuration is in your company's name. We're an admin, never the owner. Exit-ready at all times."],
  ["Nothing talks to a customer untested","Every agent runs in shadow mode with a human approving before it goes live, and always has a human fallback."],
  ["Numbers before commitments","You see what a problem costs you today — measured from your own phone reports, analytics, and books — before you decide anything. We baseline first so results are real."],
  ["Compliance built in","HIPAA-eligible stacks with BAAs, TCPA-compliant calling and texting, disclosure on every AI conversation, on-prem when data can't leave."],
  ["A pilot you can walk away from","Agreed metric, go/no-go gate, no long-term contract. If it doesn't move the number, you stop."],
];
const GEN_FAQ = [
  ["We tried an agency and it didn't work.","Agencies sell hours. We sell a number — missed calls, response time, days to paid — and you see it every Monday. The pilot has a gate; if the number doesn't move, you stop."],
  ["What if the AI says something wrong?","It only answers from information you approve, transfers anything it isn't sure about, and runs in shadow mode with a person reviewing before customers hear it."],
  ["How do you charge?","Fixed-scope projects and month-to-month support with no lock-in. We share specifics after the free consultation, once we know your volume and systems — never a percentage of your revenue or spend."],
  ["Will I lose my office manager?","You'll keep them — they'll stop drowning. Every client we've worked with kept their front desk."],
  ["How fast can we start?","The free consultation is this week. A pilot is typically live in three to six weeks from signature."],
];
const ROI_EXAMPLES = [
  {ev:"hbr", color:"c1", tag:"Increase revenue", t:"Answer every call and every lead — in under a minute", how:"Agent Hiring",
   uses:["An AI receptionist answers after-hours and overflow calls, books the appointment into your system, and transfers emergencies","Web, Google and ad leads get a personal text back within 60 seconds, then a seven-touch follow-up until they book or say no","Past customers get a reactivation text with a reason to come back"],
   s:"A plumbing company's techs are on jobs when the phone rings; web leads used to wait until the evening."},
  {ev:"baymard", color:"c2", tag:"Drive growth", t:"Sell more from the website you already have", how:"Automation + Agent Hiring",
   uses:["Abandoned carts get a recovery email and text with the exact items and a nudge","A support agent answers 'where is my order', returns and sizing questions instantly, 24/7","Product descriptions, meta titles and alt text written for the whole catalog from the data you have","Review requests sent automatically after delivery"],
   s:"A DTC brand was losing most of its carts and answering order-status emails by hand, hours later."},
  {ev:"qbLate", color:"c3", tag:"Streamline operations", t:"Get paid without making the collections call", how:"Automation",
   uses:["The invoice goes out the moment the job closes, with a pay-by-card-or-bank link","A polite, escalating sequence by email, text and voice — due soon, due today, +7, +14, a call at +30","Replies are read and sorted: promises to pay logged, disputes routed to a person, VIPs excluded","A weekly note tells the owner who paid, who's late, and what was promised"],
   s:"An electrical contractor's office manager hated the collections call, so it didn't happen — and receivables aged."},
  {ev:"ardent", color:"c4", tag:"Streamline operations", t:"Run the back office on exceptions, not data entry", how:"Automation + BI",
   uses:["Bills and receipts captured from email and phone photos, coded, and routed for approval automatically","Duplicates, price increases and unusual payments flagged before money leaves","Meeting notes, action items and the owner's inbox triaged and drafted","Eight numbers on one page every Monday with a plain-English note on what moved"],
   s:"A clinic's bookkeeper spent the month keying bills and reconciling; the owner ran the practice from five dashboards and a gut feeling."},
];
const MORE_USES = [
  ["Marketing content and social posts","54% of small businesses use AI marketing tools — the most common entry point","chamber"],
  ["Customer chat on the website","AI chatbots are the second most-used technology tool among small businesses, behind only search engines","chamber"],
  ["Appointment reminders and recalls","Text reminders raise attendance and cost less than phone calls","cochrane"],
  ["Inbox triage and meeting notes","Workers spend 28% of the week on email and ~20% hunting for information","mckEmail"],
  ["Support agents for repetitive questions","+14% issues resolved per hour with an AI assistant; +34% for newer staff","nber"],
  ["Quotes, proposals and paperwork","Generative AI can automate activities absorbing 60–70% of employees' time","mckGenAI"],
];

const EVIDENCE = {
  hbr:{stat:"7×",text:"Companies that contact a web lead within an hour are nearly seven times more likely to qualify it than those that wait even one hour longer — and most companies don't respond that fast.",src:"Harvard Business Review, “The Short Life of Online Sales Leads” (study of 2,241 companies)",url:"https://hbr.org/2011/03/the-short-life-of-online-sales-leads",tags:["leads","phones"]},
  baymard:{stat:"70%",text:"About seven in ten online shopping carts are abandoned. Baymard's checkout research finds fixable checkout issues worth an average 35% lift in conversion for a large e-commerce site.",src:"Baymard Institute, cart abandonment research (aggregate of 50 studies)",url:"https://baymard.com/lists/cart-abandonment-rate",tags:["ecom"]},
  nber:{stat:"+14%",text:"Customer-support agents given a generative-AI assistant resolved 14% more issues per hour on average — 34% more for newer staff — with better customer sentiment and lower staff turnover.",src:"Brynjolfsson, Li & Raymond, “Generative AI at Work,” NBER Working Paper 31161 (5,179 agents)",url:"https://www.nber.org/papers/w31161",tags:["support","agents"]},
  cochrane:{stat:"More visits kept",text:"Text-message appointment reminders increase attendance compared with no reminders, match phone-call reminders, and cost less per attendance.",src:"Cochrane systematic review, “Mobile phone messaging reminders for attendance at healthcare appointments” (8 trials, 6,615 participants)",url:"https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments",tags:["medical","scheduling"]},
  mckEmail:{stat:"28%",text:"The average interaction worker spends 28% of the workweek managing email and nearly 20% looking for internal information or tracking down colleagues who can help.",src:"McKinsey Global Institute, “The social economy”",url:"https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy",tags:["inbox","knowledge","ops"]},
  ardent:{stat:"~73% lower",text:"Best-in-class accounts-payable teams using automated capture and matching process an invoice for roughly a quarter of the cost of everyone else.",src:"Ardent Partners AP benchmark, as reported by Tungsten Automation",url:"https://www.tungstenautomation.com/blog/ai-in-accounts-payable-metrics-that-matter",tags:["finance","ops"]},
  chamber:{stat:"58%",text:"58% of U.S. small businesses now use generative AI (up from 40% a year earlier), and 82% of small businesses using AI grew their workforce over the past year.",src:"U.S. Chamber of Commerce, “Empowering Small Business” report (3,870 small businesses, 2025)",url:"https://www.uschamber.com/technology/artificial-intelligence/u-s-chambers-latest-empowering-small-business-report-shows-majority-of-businesses-in-all-50-states-are-embracing-ai",tags:["adoption"]},
  brightlocal:{stat:"97%",text:"97% of consumers read reviews for local businesses, and 85% say positive reviews make them more likely to use a business.",src:"BrightLocal, Local Consumer Review Survey 2026",url:"https://www.brightlocal.com/research/local-consumer-review-survey/",tags:["marketing","reviews"]},
  qbLate:{stat:"59%",text:"Nearly three in five small businesses have invoices overdue by 30 days or more; those waiting on unpaid invoices are owed $17,700 on average, and half say it creates cash-flow gaps.",src:"Intuit QuickBooks, Small Business Late Payments Report 2026",url:"https://quickbooks.intuit.com/r/small-business-data/small-business-late-payments-report-2026/",tags:["finance","invoices"]},
  gartner:{stat:"$80B",text:"Gartner predicts conversational AI will reduce contact-center agent labor costs by $80 billion in 2026, with one in ten customer interactions automated.",src:"Gartner press release, August 2022",url:"https://www.gartner.com/en/newsroom/press-releases/2022-08-31-gartner-predicts-conversational-ai-will-reduce-contac",tags:["phones","support","agents"]},
  mckGenAI:{stat:"60–70%",text:"Current generative AI and other technologies could automate work activities that absorb 60 to 70 percent of employees' time today — with the biggest gains in language-heavy tasks like customer operations, sales, and back-office work.",src:"McKinsey Global Institute, “The economic potential of generative AI” (850 occupations, 2,100 activities)",url:"https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",tags:["adoption","ops"]},
};
function evidenceBlock(keys, title, intro){
  const list=(keys||Object.keys(EVIDENCE)).map(k=>EVIDENCE[k]).filter(Boolean);
  return `<section class="psec alt"><div class="pin"><div class="eyebrow">What the research says</div><h2>${title||"The savings are documented — by people who aren't selling anything."}</h2><p class="lede" style="font-size:16px;margin-bottom:22px">${intro||"We don't quote our own case numbers on this site. These are independent, published findings on the problems we work on. Your own numbers come from your consultation."}</p>
  <div class="evgrid">${list.map(e=>`<div class="ev"><div class="evstat">${e.stat}</div><p>${e.text}</p><a class="evsrc" href="${e.url}" target="_blank" rel="noopener">${e.src} ↗</a></div>`).join("")}</div></div></section>`;
}

const ICONS = {
  chart:`<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19V5M4 19h16"/><path d="M8 15l4-5 3 3 5-7"/></svg>`,
  agent:`<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M9 13h.01M15 13h.01M9 16h6"/></svg>`,
  flow:`<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="6" height="6" rx="1.5"/><rect x="15" y="14" width="6" height="6" rx="1.5"/><path d="M9 7h4a3 3 0 0 1 3 3v4"/></svg>`,
  server:`<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="16" height="6" rx="1.5"/><rect x="4" y="14" width="16" height="6" rx="1.5"/><path d="M8 7h.01M8 17h.01"/></svg>`,
};
const platformsOf = p => { const seen=new Set(); const html=p.stacks.map(s=>s.items.join(" ")).join(" "); Object.entries(PLATFORMS).forEach(([k,v])=>{ if(html.includes(`href="${v.u}"`)) seen.add(k); }); return [...seen]; };
const findTask = id => PLAYS.find(p=>p.id===id);
const fmtK = n => n>=1000? "$"+Math.round(n/1000)+"k" : "$"+Math.round(n);
const tel = () => "tel:"+SITE.phone.replace(/[^0-9+]/g,"");

/* ---------- shared blocks ---------- */
function pHeader(active){
  return `<header class="ph"><div class="phin">
    <a class="plogo" href="./">${LOGO(34)}<span>NOVA</span></a>
    <nav class="pnav" aria-label="Site">
      <div class="pdrop"><button class="pdb" aria-haspopup="true">Services ▾</button><div class="pdm">${Object.entries(PILLARS).map(([k,p])=>`<a href="${k}.html">${p.t}</a>`).join("")}</div></div>
      <div class="pdrop"><button class="pdb" aria-haspopup="true">Industries ▾</button><div class="pdm">${Object.entries(AUD).map(([k,a])=>`<a href="${k}.html">${a.t}</a>`).join("")}</div></div>
      <a href="how-we-work.html" class="${active==="how-we-work"?"on":""}">How we work</a>
      <a href="find-opportunities.html" class="${active==="find-opportunities"?"on":""}">Finding opportunities</a>
      <a href="about.html" class="${active==="about"?"on":""}">About</a>
      <a href="${SITE.bookingUrl}" class="pbtn">${CTA_TXT}</a>
    </nav>
    <button class="pburger" aria-label="Menu" onclick="document.querySelector('.pnav').classList.toggle('open')">☰</button>
  </div></header>`;
}
function pFooter(){
  return `<footer class="pf"><div class="pfin">
    <div><div class="plogo" style="margin-bottom:8px">${LOGO(28)}<span>NOVA</span></div><p class="small muted">${SITE.tagline}. ${SITE.city}</p></div>
    <div><div class="pfh">Services</div>${Object.entries(PILLARS).map(([k,p])=>`<a href="${k}.html">${p.short}</a>`).join("")}</div>
    <div><div class="pfh">Industries</div>${Object.entries(AUD).map(([k,a])=>`<a href="${k}.html">${a.t}</a>`).join("")}</div>
    <div><div class="pfh">Company</div><a href="how-we-work.html">How we work</a><a href="find-opportunities.html">Finding opportunities</a><a href="about.html">About</a><a href="contact.html">Contact</a><a href="${tel()}">${SITE.phone}</a><a href="mailto:${SITE.email}">${SITE.email}</a><a href="./#/login" class="muted small">Team login</a></div>
  </div><div class="pfin small muted" style="padding-top:12px;border-top:1px solid var(--line)">© ${new Date().getFullYear()} ${SITE.name}. Statistics on this site are from the named third-party sources; results vary by business and nothing here is a guarantee. Product names and marks belong to their owners and indicate compatibility, not endorsement.</div></footer>`;
}
const heroArt = `<svg class="heroart" viewBox="0 0 400 300" aria-hidden="true"><polygon fill="#267FA0" points="40,120 150,120 150,210" opacity=".9"/><polygon fill="#30B1B6" points="165,30 165,210 260,120" opacity=".9"/><polygon fill="#3AA970" points="185,220 260,140 370,140 300,220" opacity=".9"/><polygon fill="#FDBB40" points="200,240 290,240 290,270 215,285" opacity=".95"/><path fill="#F87D34" d="M60,290 L390,215 Q335,300 300,300 L90,300 Q55,300 60,290 Z"/></svg>`;
function trustStrip(){ return `<div class="tstrip"><div><b>${SITE.years}</b><span>years in small-business operations and software</span></div><div><b>${SITE.clients}</b><span>businesses automated</span></div><div><b>${SITE.tasksRun}</b><span>automations in production</span></div><div><b>0</b><span>systems you have to replace</span></div></div>`; }
function howBlock(){ return `<section class="psec"><div class="pin"><div class="eyebrow">How we work</div><h2>It starts with a conversation, not a contract.</h2><div class="steps">${HOW.map((s,i)=>`<div class="step"><div class="sn">${i+1}</div><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div></div></section>`; }
function trustBlock(){ return `<section class="psec alt"><div class="pin"><div class="eyebrow">Why small businesses trust NOVA</div><h2>Built to be easy to say yes to — and easy to leave.</h2><div class="tgrid">${TRUST.map(t=>`<div class="tcard"><h3>${t[0]}</h3><p>${t[1]}</p></div>`).join("")}</div></div></section>`; }
function faqBlock(items){ return `<section class="psec"><div class="pin narrow"><div class="eyebrow">Questions owners ask</div><h2>Straight answers.</h2><div class="faq">${items.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}</div></div></section>`; }
function ctaBlock(){ return `<section class="pcta"><div class="pin"><h2>Let's talk about your business — free, 30 minutes, no pitch.</h2><p>Tell us what's slow, what's leaking, and what you've tried. We'll tell you honestly whether AI can help and roughly what it would take.</p><div class="pills" style="gap:10px"><a class="pbtn big" href="${SITE.bookingUrl}">${CTA_TXT}</a><a class="pbtn ghost big" href="${tel()}">Call ${SITE.phone}</a></div></div></section>`; }
function logoWall(names, title){
  const list = names ? LOGOS.filter(l=>names.includes(l[0])) : LOGOS;
  return `<section class="psec alt"><div class="pin"><div class="eyebrow">Integrations</div><h2>${title||"We work with the tools you already run on."}</h2>
  <div class="logos">${list.map(([n,c])=>`<div class="lwall" style="--lc:${c}"><span class="lg"></span><span>${n}</span></div>`).join("")}</div>
  <p class="small muted" style="margin-top:12px">${names?`And ${Object.keys(PLATFORMS).length-names.length}+ more. `:`Plus ${Object.keys(PLATFORMS).length}+ platforms across phones, CRM, field service, practice management, accounting, and support. `}Don't see yours? <a href="contact.html">Ask us</a> — if it has an export or an API, we've probably connected it.</p></div></section>`;
}
function serviceCards(list){
  return `<div class="svc">${list.map(([id,title])=>{ const p=findTask(id); if(!p) return ""; const rank=c=>c==="AI models & agents"||c==="Consultant toolkit"?9:c==="Automation & integration"?5:0; const tools=platformsOf(p).map(k=>PLATFORMS[k]).filter(v=>rank(v.c)<9).sort((a,b)=>rank(a.c)-rank(b.c)).slice(0,4).map(v=>v.n);
    return `<div class="scard"><div class="eyebrow">${p.cat.t}</div><h3>${title}</h3><p>${p.d}</p><div class="sfoot"><span class="small muted">Works with ${tools.join(", ")}${tools.length>=4?" and more":""}</span></div></div>`; }).join("")}</div>`;
}
function roiCard(ex, i){
  const e=EVIDENCE[ex.ev];
  return `<div class="roi ${ex.color}"><div class="rstat"><div class="rtag">${ex.tag}</div><div class="rbig">${e.stat}</div><p>${e.text}</p><a class="rsrc" href="${e.url}" target="_blank" rel="noopener">${e.src} ↗</a></div>
    <div class="rbody"><div class="eyebrow">${ex.how}</div><h3>${ex.t}</h3><p class="rscene">${ex.s}</p><div class="ruses-h">How businesses use it</div><ul class="ruses">${ex.uses.map(u=>`<li>${u}</li>`).join("")}</ul></div></div>`;
}
function moreUses(){
  return `<div class="muses">${MORE_USES.map(m=>{const e=EVIDENCE[m[2]];return `<div class="muse"><b>${m[0]}</b><span>${m[1]}</span><a class="evsrc" href="${e.url}" target="_blank" rel="noopener">${e.src.split(",")[0]} ↗</a></div>`;}).join("")}</div>`;
}
function pillarCards(keys){
  return `<div class="pgrid">${(keys||Object.keys(PILLARS)).map(k=>{const p=PILLARS[k];return `<a class="pcardx" href="${k}.html"><div class="pic">${ICONS[p.icon]}</div><div class="eyebrow">${p.tag}</div><h3>${p.t}</h3><p>${p.d.split(". ")[0]}.</p><span class="alink">Learn more →</span></a>`;}).join("")}</div>`;
}

/* ---------- pages (inner HTML) ---------- */
function pHome(){
  return `${pHeader("home")}<main>
  <section class="hero"><div class="pin herogrid"><div>
    <div class="eyebrow">${SITE.tagline}</div>
    <h1>Put AI to work in your business — inside the tools you already use.</h1>
    <p class="lede">We help small businesses answer every call, follow up every lead, close the books faster, and see their numbers clearly — with AI agents and automation that run in the systems you already pay for. Measured first, piloted with a gate, and reported every Monday.</p>
    <div class="pills" style="gap:10px;margin-top:8px"><a class="pbtn big" href="${SITE.bookingUrl}">${CTA_TXT}</a><a class="pbtn ghost big" href="#examples">See the examples</a></div>
  </div>${heroArt}</div><div class="pin">${trustStrip()}</div></section>
  <section class="psec" id="examples"><div class="pin"><div class="eyebrow">What small businesses use AI for</div><h2>Four things owners are doing with AI right now to grow revenue and run leaner.</h2>
    <p class="lede" style="font-size:16px;margin-bottom:22px">${EVIDENCE.chamber.text.replace("58% of U.S. small businesses now use generative AI (up from 40% a year earlier), and","58% of U.S. small businesses now use generative AI — up from 40% a year earlier — and")} <a class="evsrc" style="border:0;padding:0" href="${EVIDENCE.chamber.url}" target="_blank" rel="noopener">${EVIDENCE.chamber.src} ↗</a></p>
    <div class="roilist">${ROI_EXAMPLES.map(roiCard).join("")}</div>
    <div class="eyebrow" style="margin-top:34px">Also common</div><h3 style="margin:6px 0 14px;font-size:22px">More ways owners are putting AI to work.</h3>${moreUses()}</div></section>
  <section class="psec alt"><div class="pin"><div class="eyebrow">What we do</div><h2>Four ways we help — pick one or combine them.</h2>${pillarCards()}</div></section>
  ${logoWall(null)}
  ${evidenceBlock(["chamber","mckGenAI","nber","mckEmail","brightlocal","cochrane"])}
  ${howBlock()}
  <section class="psec alt"><div class="pin"><div class="eyebrow">Who we help</div><h2>Built for businesses where every missed call is a lost job.</h2>
    <div class="agrid">${Object.entries(AUD).map(([k,a])=>`<a class="acard" href="${k}.html"><h3>${a.t}</h3><p>${a.h1}</p><span class="alink">See what we automate →</span></a>`).join("")}</div></div></section>
  ${ctaBlock()}</main>${pFooter()}`;
}
function pAudience(k){
  const a=AUD[k];
  return `${pHeader(k)}<main>
  <section class="hero"><div class="pin herogrid"><div><div class="eyebrow">${a.eyebrow}</div><h1>${a.h1}</h1><p class="lede">${a.sub}</p>
    <div class="pills" style="gap:10px;margin-top:8px"><a class="pbtn big" href="${SITE.bookingUrl}">${CTA_TXT}</a><a class="pbtn ghost big" href="#svc">What we automate</a></div></div>${heroArt}</div><div class="pin">${trustStrip()}</div></section>
  <section class="psec"><div class="pin narrow"><div class="eyebrow">Sound familiar?</div><h2>The things that cost you money quietly.</h2><ul class="pains">${a.pains.map(x=>`<li>${x}</li>`).join("")}</ul></div></section>
  <section class="psec alt" id="svc"><div class="pin"><div class="eyebrow">What we automate for ${a.t.toLowerCase()}</div><h2>Set up inside the tools you already use.</h2>${serviceCards(a.tasks)}</div></section>
  ${evidenceBlock(a.ev, "What the research says about these problems.")}
  ${logoWall(a.logos, `The ${a.short.toLowerCase()==="firms"?"firm":a.short.toLowerCase()} tools we connect to.`)}
  <section class="psec"><div class="pin"><div class="eyebrow">How we'd help</div><h2>The services most ${a.t.toLowerCase()} start with.</h2>${pillarCards(a.pillars)}</div></section>
  ${howBlock()}
  <section class="psec alt"><div class="pin narrow"><div class="callout"><span class="eyebrow">Compliance and trust</span>${a.compliance}</div></div></section>
  ${ctaBlock()}</main>${pFooter()}`;
}
function pPillar(k){
  const p=PILLARS[k];
  const extra = k==="agent-hiring" ? `
  <section class="psec"><div class="pin"><div class="eyebrow">The roles</div><h2>Agents you can hire this month.</h2><div class="tw"><table><thead><tr><th>Role</th><th>What it does</th><th>Never does</th><th>Replaces the need for</th></tr></thead><tbody>
    ${[["service-5","Front-desk agent","Answers every call 24/7, qualifies, books into your system, texts confirmations, transfers emergencies","Gives advice, quotes outside your price book, takes payments without approval","$800–2,500","A part-time receptionist — and it covers nights and weekends"],
       ["sales-1","Intake & lead agent","Replies to every web, GBP, and ad lead in under a minute; follows up seven times; books","Negotiates price; messages anyone without consent","$500–1,500","An inside sales assistant"],
       ["finance-4","Collections agent","Sends the invoice, chases by email/text/voice on a polite schedule, logs promises to pay, flags disputes","Threatens, adds fees not in your terms, contacts your VIP list","$400–1,200","An AR clerk and collections-agency fees"],
       ["service-1","Support agent","Answers order status, hours, pricing, how-to from your approved knowledge; hands off with a summary","Refunds, account changes, anything outside the knowledge base","$600–2,000","A first support hire"],
       ["sales-2","Scheduling & recall agent","Calls and texts warm lists to book, confirm, and recall; fills cancellations from the waitlist","Cold-calls strangers; calls outside quiet hours","$500–1,500","An appointment setter"],
       ["finance-1","Back-office agent","Captures bills and receipts, codes them, routes approvals, flags duplicates, preps the close","Posts without your bookkeeper's review; touches bank credentials","$600–1,800","Outsourced data entry"]].map(r=>`<tr><td><b>${r[1]}</b></td><td>${r[2]}</td><td class="small">${r[3]}</td><td class="small">${r[5]}</td></tr>`).join("")}
  </tbody></table></div><p class="caption">Every agent discloses that it's automated and offers a person at any point. Phone minutes and texts run on accounts in your name.</p></div></section>` :
  k==="on-prem" ? `
  <section class="psec"><div class="pin"><div class="eyebrow">What we install</div><h2>A private AI stack, sized to your firm.</h2><div class="grid3">
    <div class="card"><h3>Hardware or private cloud</h3><p>A GPU server in your office (or a single-tenant private cloud you control) sized to your document volume and user count. We spec it, procure it with you, and install it.</p></div>
    <div class="card"><h3>Models and tools</h3><p>Open-weight language models for drafting, search, and summarization; self-hosted automation and database; a document assistant with citations over your files, matters, or charts.</p></div>
    <div class="card"><h3>Security posture</h3><p>Network isolation, role-based access, audit logs, encrypted storage, and a written data-flow and controls document for your auditor, insurer, or bar.</p></div>
  </div>
  <div class="tw" style="margin-top:18px"><table><thead><tr><th></th><th>Cloud AI (typical)</th><th>NOVA on-prem</th></tr></thead><tbody>
    <tr><td><b>Where your data goes</b></td><td>A vendor's servers under their terms</td><td>Your building or your private cloud</td></tr>
    <tr><td><b>Ongoing cost shape</b></td><td>Per use, per seat, forever</td><td>Hardware once; support monthly; no per-use bill</td></tr>
    <tr><td><b>Model choice</b></td><td>Whatever the vendor ships</td><td>Open-weight models you can pin, test, and keep</td></tr>
    <tr><td><b>Best for</b></td><td>Most automations and agents</td><td>Confidential documents, regulated data, vendor-policy constraints</td></tr>
  </tbody></table></div><p class="small muted" style="margin-top:10px">Honest note: on-prem is the right call when confidentiality demands it or volume is high. For most small businesses the cloud option is simpler and faster — we'll tell you which in the consultation.</p></div></section>` :
  k==="bi-consulting" ? `
  <section class="psec"><div class="pin"><div class="eyebrow">What you receive</div><h2>Deliverables, not decks.</h2><div class="grid3">
    <div class="card"><h3>Opportunity audit</h3><p>Ten-page roadmap: baseline numbers, the ten workflows costing you the most, each priced today vs. after, ranked by payback, with pilot proposals for the top three.</p></div>
    <div class="card"><h3>Owner's dashboard</h3><p>The eight numbers you care about on one page, refreshed automatically, permissioned per person, with a Monday narrative that says what moved and why.</p></div>
    <div class="card"><h3>Value analyses</h3><p>Margin by job and service line, cash-flow forecast, pricing review, win/loss — each with a recommendation and the dollar impact.</p></div>
  </div></div></section>` : `
  <section class="psec"><div class="pin"><div class="eyebrow">What we connect</div><h2>${PLAYS.length} proven automations across six parts of your business.</h2><div class="cgrid">${CATS.map(c=>`<div class="ccard"><div class="cn">${playsIn(c).length}</div><h3>${c.t}</h3><p>${c.d}</p></div>`).join("")}</div></div></section>`;
  return `${pHeader(k)}<main>
  <section class="hero"><div class="pin herogrid"><div><div class="eyebrow">${p.tag}</div><h1>${p.t}</h1><p class="lede">${p.d}</p>
    <div class="pills" style="gap:10px;margin-top:8px"><a class="pbtn big" href="${SITE.bookingUrl}">${CTA_TXT}</a></div></div><div class="pillarart">${ICONS[p.icon]}</div></div><div class="pin">${trustStrip()}</div></section>
  <section class="psec"><div class="pin narrow"><div class="eyebrow">What's included</div><h2>What you get.</h2><ul class="pains check2">${p.bullets.map(x=>`<li>${x}</li>`).join("")}</ul><p class="small muted" style="margin-top:14px"><b>Best for:</b> ${p.who}</p></div></section>
  ${extra}
  <section class="psec alt"><div class="pin"><div class="eyebrow">Examples</div><h2>What this looks like in practice.</h2>${serviceCards(p.tasks.map(id=>[id, findTask(id).t.split(";")[0]]))}</div></section>
  ${evidenceBlock(p.ev, "What the research says.")}
  ${logoWall(null)}${howBlock()}${ctaBlock()}</main>${pFooter()}`;
}
function pHow(){
  return `${pHeader("how-we-work")}<main>
  <section class="hero small"><div class="pin narrow"><div class="eyebrow">How we work</div><h1>A conversation first. A number at every step after.</h1><p class="lede">We've watched small businesses get burned by agencies that sell hours and vendors that sell dashboards. So we built a process where you see the number before you pay, during the pilot, and every week after.</p><div class="pills" style="gap:10px;margin-top:8px"><a class="pbtn big" href="${SITE.bookingUrl}">${CTA_TXT}</a></div></div></section>
  ${howBlock()}
  <section class="psec alt"><div class="pin"><div class="eyebrow">What you get at each step</div><div class="tw"><table><thead><tr><th>Step</th><th>You receive</th><th>Time</th></tr></thead><tbody>
    <tr><td>Free consultation</td><td>A frank conversation about your business and whether AI can help; if it can, the two or three places to start.</td><td>30 min</td></tr>
    <tr><td>Opportunity audit</td><td>Roadmap: your baseline numbers, the workflows costing you the most ranked by impact and ease, pilot proposals for the top three.</td><td>2 weeks</td></tr>
    <tr><td>Pilot</td><td>One automation or agent live in shadow mode then production, weekly check-ins, a go/no-go meeting with the numbers.</td><td>3–6 weeks</td></tr>
    <tr><td>Setup</td><td>Full build, runbook, training, disclosure and consent language, monitoring.</td><td>2–6 weeks</td></tr>
    <tr><td>Managed</td><td>Monitoring, tuning, Monday note, monthly report, one improvement a month, quarterly review.</td><td>Month-to-month</td></tr>
  </tbody></table></div></div></section>
  <section class="psec"><div class="pin narrow"><div class="eyebrow">Our standards</div><h2>What we won't skip.</h2><ul class="pains check2">${["A two-week baseline before we claim any result.","Every account, number and login in your company's name.","A human fallback path configured and tested before go-live.","Disclosure and consent language approved in writing.","Shadow mode — a person reviews before a customer hears it.","A runbook so you could run it without us for 30 days."].map(x=>`<li>${x}</li>`).join("")}</ul></div></section>
  ${ctaBlock()}</main>${pFooter()}`;
}
function pDiscover(){
  const lens=[["Revenue leaks","Where do customers try to buy and fail?","Phone report, website or store analytics, CRM, booking system","Missed calls, slow lead replies, abandoned carts, no-shows, unfollowed quotes"],["Hours","Where do people copy, chase, or write the same thing repeatedly?","Ask each staff member; the inbox; the task they'd never do again","Re-keying, document chasing, invoice follow-up, inbox triage, quote writing"],["Cash & margin","Where is money slow, wrong, or unknown?","AR aging, bill volume, job costs, the date the books closed","Late invoices, duplicate payments, unpriced jobs, late close, no dashboard"]];
  const ex=[["E-commerce and websites",["Most carts abandoned with no recovery sequence; 'where is my order' answered by hand hours later; product pages with thin copy","Returns handled one email at a time; supplier orders typed in from PDFs","Sales tax across states done by hand; stockouts on the best-selling items"],["Cart-recovery flows, an order-status support agent, catalog copy at scale","Returns automation, order entry from documents","Tax automation, reorder points and stockout warnings"],"baymard"],
    ["Marketing and lead generation",["Ads running, but leads contacted hours later or not at all; past customers never emailed; a handful of reviews next to a competitor's hundreds","Every social post written by the owner at night; nobody knows which ads work","Nobody knows which lead source pays"],["Instant lead response with follow-up until a yes or no, reactivation campaigns, a review engine","A content system built from the business's own jobs, a Monday marketing summary","Lead-source tracking on one page"],"hbr"],
    ["Operations — agents that do the chasing",["Receivables aging while the office manager avoids the collections call","Hundreds of bills keyed by hand; tax documents chased by phone every spring","Calls missed while the team is with customers; recalls and reminders never sent"],["A collections agent: invoice on job close, polite escalating sequence, disputes to a human","A back-office agent for capture, coding and approvals; document-request sequences","A front-desk agent and a scheduling/recall agent"],"qbLate"],
    ["Professional practices — law, medical, accounting",["After-hours intake to voicemail; consults arriving with no facts","The partner answers the same policy and pricing questions daily; contracts read at midnight","Patient or client balances aged 90+ days"],["An intake agent and pre-visit questionnaires","A private knowledge assistant (on-prem where required), contract review with obligation calendars","A balance follow-up agent"],"cochrane"]];
  return `${pHeader("find-opportunities")}<main>
  <section class="hero small"><div class="pin narrow"><div class="eyebrow">Finding opportunities</div><h1>You know where the time goes. We help you see what it costs — and what to do first.</h1><p class="lede">Our discovery process is done with you and your team, not to you. In one working session you map how a customer moves through your business, pull your own numbers, and score the opportunities yourselves. You walk away with the map and the list whether or not you hire us.</p><div class="pills" style="gap:10px;margin-top:8px"><a class="pbtn big" href="${SITE.bookingUrl}">${CTA_TXT}</a></div></div></section>
  <section class="psec"><div class="pin"><div class="eyebrow">The process</div><h2>One form, one session, one scored list.</h2><div class="steps">
    <div class="step"><div class="sn">0</div><h3>Ten minutes of pre-work</h3><p>A short form: the systems you use, who does what, the numbers you check and the ones you wish you had. It means the session starts with facts, not guesses.</p></div>
    <div class="step"><div class="sn">1</div><h3>Walk the customer's journey</h3><p>Your team narrates how a customer actually moves through the business — <b>find → contact → book or buy → deliver → bill → collect → return</b> — while we draw it. At each stage: what happens when nobody's available, and who's waiting?</p></div>
    <div class="step"><div class="sn">2</div><h3>Look through three lenses</h3><p>Revenue leaks, hours, and cash. You pull each number from a system you already own, on screen, with us. The gaps show up on their own.</p></div>
    <div class="step"><div class="sn">3</div><h3>Score the opportunity cards</h3><p>Every finding becomes a one-page card. We write the top half — what happens today, what it costs, what 'after' looks like. You and your team score the bottom half.</p></div>
    <div class="step"><div class="sn">4</div><h3>Prioritize together</h3><p>Cards go on a grid of impact against ease. The top-right corner is the pilot. Anything that touches customers runs in shadow mode first.</p></div>
    <div class="step"><div class="sn">5</div><h3>The roadmap</h3><p>A week later: your baseline, the ranked opportunities, a pilot proposal for #1 and what #2 and #3 look like after it works. Presented live, ending with a start date — or an honest 'not yet'.</p></div>
  </div></div></section>
  <section class="psec alt"><div class="pin"><div class="eyebrow">Step 2</div><h2>Three lenses, three sources you already have.</h2><div class="tw"><table><thead><tr><th>Lens</th><th>The question</th><th>Where the number lives</th><th>What usually turns up</th></tr></thead><tbody>${lens.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td class="small">${r[2]}</td><td class="small">${r[3]}</td></tr>`).join("")}</tbody></table></div></div></section>
  <section class="psec"><div class="pin"><div class="eyebrow">Examples</div><h2>What the session finds, by kind of business.</h2><div class="exgrid">${ex.map(e=>{const ev=EVIDENCE[e[3]];return `<div class="excard"><h3>${e[0]}</h3><div class="exrow"><div><div class="eyebrow">What we usually find</div><ul>${e[1].map(x=>`<li>${x}</li>`).join("")}</ul></div><div><div class="eyebrow">What it becomes</div><ul>${e[2].map(x=>`<li>${x}</li>`).join("")}</ul></div></div><div class="exev"><b>${ev.stat}</b> ${ev.text} <a class="evsrc" href="${ev.url}" target="_blank" rel="noopener">${ev.src} ↗</a></div></div>`;}).join("")}</div></div></section>
  <section class="psec alt"><div class="pin narrow"><div class="eyebrow">Step 3</div><h2>The opportunity card your team scores.</h2><div class="sample"><span class="eyebrow">Sample card</span><pre>OPPORTUNITY: After-hours calls go to voicemail
Today:   calls missed each month (from your phone report) × your booking rate × your average job
After:   a front-desk agent answers, books into your system, transfers emergencies
Service: Agent Hiring       Effort: about 3 weeks       Risk: low — shadow mode first
────────────────────────────────────────────────────────────
Your team scores (1–5):   Pain ___   Value ___   Ease ___   We'd actually use it ___
Owner of this problem: ____________     Pilot metric: missed-call rate</pre></div><p class="small muted" style="margin-top:10px">The scoring matters more than it looks. When the office manager gives 'invoice chasing' a five on pain and a five on 'we'd use it', adoption is already half done.</p></div></section>
  <section class="psec"><div class="pin narrow"><div class="eyebrow">What you keep</div><h2>Even if you never hire us.</h2><ul class="pains check2">${["The journey map of your own business, drawn with your team","Your numbers in one place — probably for the first time","A scored list of where the money and hours are going","A clear first step, and an honest opinion on whether it's worth taking"].map(x=>`<li>${x}</li>`).join("")}</ul></div></section>
  ${evidenceBlock(["mckGenAI","mckEmail","qbLate","chamber"], "What the research says about where the opportunities are.")}
  ${ctaBlock()}</main>${pFooter()}`;
}
function pAbout(){
  return `${pHeader("about")}<main>
  <section class="hero small"><div class="pin narrow"><div class="eyebrow">About NOVA</div><h1>We've run the front desk, the dispatch board and the month-end close. That's why we automate them carefully.</h1><p class="lede">NOVA was started by ${SITE.founder} after ${SITE.years} years working in and around small businesses — the kind where the owner answers the phone, writes the quotes, and does the books on Sunday. We build AI for those businesses the way we'd want it built for our own: inside the tools you have, measured honestly, and never out of your control.</p></div></section>
  <section class="psec"><div class="pin"><div class="grid3">
    <div class="card"><h3>What we believe</h3><p>Automation should give people their lunch break back, not their pink slip. Every business we've worked with kept their team; the team stopped drowning.</p></div>
    <div class="card"><h3>What we're not</h3><p>Not an agency selling hours. Not a software vendor selling seats. We're the operators who set it up, measure it, and stay on the hook for the number.</p></div>
    <div class="card"><h3>How we're paid</h3><p>Fixed setup fees and month-to-month retainers you can cancel with 30 days' notice. No percentage of your spend, no lock-in, no accounts we own.</p></div>
  </div></div></section>
  <section class="psec alt"><div class="pin"><div class="eyebrow">What we do</div><h2>Four services, one standard.</h2>${pillarCards()}</div></section>
  
  <section class="psec"><div class="pin narrow"><div class="eyebrow">Experience</div><h2>Where the ${SITE.years} years went.</h2><ul class="pains check2">${["Operating and advising owner-led businesses in the trades, healthcare and professional services","Implementing and integrating the platforms our clients run on — field service, practice management, CRM, accounting","Building and managing AI voice, messaging and document automation in production, with the compliance work that goes with it","Turning messy processes into SOPs, dashboards and repeatable systems"].map(x=>`<li>${x}</li>`).join("")}</ul></div></section>
  ${ctaBlock()}</main>${pFooter()}`;
}
function pContact(){
  return `${pHeader("contact")}<main>
  <section class="hero small"><div class="pin narrow"><div class="eyebrow">Free consultation</div><h1>Let's talk about your business.</h1><p class="lede">Thirty minutes, on the phone or video, about what's slow and what's leaking. No pitch — if we can help, we'll say how and roughly what it takes; if we can't, we'll say that. We reply within one business day with two times.</p></div></section>
  <section class="psec"><div class="pin"><div class="cgrid2">
    <form class="cform" id="cform" onsubmit="return sendContact(event)">
      <label>Your name<input id="c_name" required autocomplete="name"></label>
      <label>Business name<input id="c_biz" required autocomplete="organization"></label>
      <label>Email<input id="c_email" type="email" required autocomplete="email"></label>
      <label>Phone<input id="c_phone" type="tel" autocomplete="tel"></label>
      <label>Industry<select id="c_ind">${Object.values(AUD).map(a=>`<option>${a.t}</option>`).join("")}<option>Other</option></select></label>
      <label>What's most interesting?<select id="c_svc">${Object.values(PILLARS).map(p=>`<option>${p.t}</option>`).join("")}<option>Not sure yet</option></select></label>
      <label>What would you like to talk about?<textarea id="c_msg" rows="4" placeholder="e.g. We miss calls after 5pm; quotes take two days; we want our numbers in one place"></textarea></label>
      <label>Best times to reach you<input id="c_time" placeholder="e.g. weekday mornings"></label>
      <button class="pbtn big" type="submit">Request my free consultation</button>
      <p class="small muted" id="c_note">Submitting opens a pre-filled email to ${SITE.email}. Prefer to talk now? Call <a href="${tel()}">${SITE.phone}</a>.</p>
    </form>
    <div class="section" style="gap:16px">
      <div class="card"><h3>What happens next</h3><ol style="padding-left:1.2em">${["We reply within one business day with two times.","We talk for 30 minutes about your business — no slides.","You get an honest read: where AI can help, where it can't, and what it would take.","If it's worth going further, we propose an audit or a pilot with a gate. If not, we say so."].map(x=>`<li>${x}</li>`).join("")}</ol></div>
      <div class="card"><h3>Direct</h3><p><a href="${tel()}">${SITE.phone}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p><p class="small muted">${SITE.city}</p></div>
    </div></div></div></section></main>${pFooter()}`;
}
function sendContact(e){
  e.preventDefault();
  const v=id=>{const el=document.getElementById(id);return el?el.value.trim():"";};
  const body=`Name: ${v("c_name")}\nBusiness: ${v("c_biz")}\nEmail: ${v("c_email")}\nPhone: ${v("c_phone")}\nIndustry: ${v("c_ind")}\nInterested in: ${v("c_svc")}\nBest times: ${v("c_time")}\n\nWhat they'd like to talk about:\n${v("c_msg")}`;
  window.location.href=`mailto:${SITE.email}?subject=${encodeURIComponent("Free consultation — "+v("c_biz"))}&body=${encodeURIComponent(body)}`;
  const n=document.getElementById("c_note"); if(n) n.textContent="Your email client should open with the request pre-filled. If it didn't, email us at "+SITE.email+".";
  return false;
}

/* ---------- static page export ---------- */
const PUBLIC_PAGES = {
  "law-firms":()=>pAudience("law-firms"), "medical":()=>pAudience("medical"), "home-services":()=>pAudience("home-services"), "accounting-insurance":()=>pAudience("accounting-insurance"),
  "bi-consulting":()=>pPillar("bi-consulting"), "agent-hiring":()=>pPillar("agent-hiring"), "automation":()=>pPillar("automation"), "on-prem":()=>pPillar("on-prem"),
  "how-we-work":pHow, "find-opportunities":pDiscover, "about":pAbout, "contact":pContact,
};
const PAGE_TITLES = { "law-firms":"AI for Law Firms — NOVA","medical":"AI for Medical & Dental Practices — NOVA","home-services":"AI for Home Services — NOVA","accounting-insurance":"AI for Accounting & Insurance Firms — NOVA","bi-consulting":"Business Intelligence & Value Creation — NOVA","agent-hiring":"Agent Hiring — NOVA","automation":"Automation — NOVA","on-prem":"On-Prem & Private AI — NOVA","how-we-work":"How We Work — NOVA","find-opportunities":"Finding Opportunities — NOVA","about":"About — NOVA","contact":"Free Consultation — NOVA" };
const PAGE_JS = `document.addEventListener('click',function(e){var b=e.target.closest('.pburger');if(b){document.querySelector('.pnav').classList.toggle('open');}});
var SITE_EMAIL="${SITE.email}";
function sendContact(e){e.preventDefault();var v=function(id){var el=document.getElementById(id);return el?el.value.trim():"";};var body="Name: "+v("c_name")+"\\nBusiness: "+v("c_biz")+"\\nEmail: "+v("c_email")+"\\nPhone: "+v("c_phone")+"\\nIndustry: "+v("c_ind")+"\\nInterested in: "+v("c_svc")+"\\nBest times: "+v("c_time")+"\\n\\nWhat they'd like to talk about:\\n"+v("c_msg");window.location.href="mailto:"+SITE_EMAIL+"?subject="+encodeURIComponent("Free consultation — "+v("c_biz"))+"&body="+encodeURIComponent(body);var n=document.getElementById("c_note");if(n)n.textContent="Your email client should open with the request pre-filled. If it didn't, email us at "+SITE_EMAIL+".";return false;}`;
function exportPage(name){
  const fonts = document.querySelector('link[href*="fonts.googleapis"]');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>${PAGE_TITLES[name]||"NOVA"}</title><meta name="description" content="${(name in AUD?AUD[name].sub:name in PILLARS?PILLARS[name].d:SITE.tagline).replace(/"/g,"&quot;").slice(0,300)}">${fonts?fonts.outerHTML:""}<link rel="stylesheet" href="site.css"></head><body class="is-public"><div id="public">${PUBLIC_PAGES[name]().replace(/onclick="[^"]*"/g,"")}</div><script>${PAGE_JS}<\/script></body></html>`;
}

/* ---------- Admin gate ---------- */
let AUTHED=false; try{ AUTHED = sessionStorage.getItem("nova_admin")==="1"; }catch(e){}
let PENDING = null;
async function sha256(str){ const buf=await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str)); return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,"0")).join(""); }
function setAuthed(v){ AUTHED=v; try{ if(v) sessionStorage.setItem("nova_admin","1"); else sessionStorage.removeItem("nova_admin"); }catch(e){} }
function pLogin(msg){
  return `${pHeader("login")}<main><section class="hero small"><div class="pin narrow"><div class="eyebrow">Team login</div><h1>Admin panel</h1><p class="lede">The playbook, pricing models, contract terms and delivery kits behind this site. For the NOVA team.</p></div></section>
  <section class="psec"><div class="pin narrow"><div class="card lift" style="max-width:480px">
    <h3>Sign in</h3>
    <p class="small">If you're signed in to claude.ai with edit access to this site, you're recognized automatically.</p>
    <button class="pbtn" id="loginClaude">Continue with claude.ai</button>
    <hr><p class="small muted">Or enter the team passcode.</p>
    <form onsubmit="return loginPass(event)"><label class="small">Passcode<input id="passcode" type="password" autocomplete="current-password" required></label><button class="pbtn" type="submit" style="margin-top:8px">Enter</button></form>
    <p class="small" id="loginmsg" style="color:var(--accent)">${msg||""}</p>
  </div></div></section></main>${pFooter()}`;
}
async function claudeUser(){ try{ return window.claude && window.claude.use ? await window.claude.use("user") : null; }catch(e){ return null; } }
async function loginClaude(){
  const m=document.getElementById("loginmsg"); if(m) m.textContent="Checking…";
  const u=await claudeUser();
  if(u && (u.canEdit() || u.isOwner())){ setAuthed(true); goAfterLogin(); return; }
  if(m) m.textContent = u ? "This claude.ai account doesn't have edit access to this site. Use the passcode or ask the owner." : "Not signed in to claude.ai in this view. Use the passcode.";
}
async function silentClaudeCheck(){ if(AUTHED) return; const u=await claudeUser(); if(u && (u.canEdit() || u.isOwner()) && !AUTHED){ setAuthed(true); goAfterLogin(); } }
async function loginPass(e){
  e.preventDefault(); const v=document.getElementById("passcode").value; const m=document.getElementById("loginmsg");
  if(await sha256(v)===SITE.adminPassHash){ setAuthed(true); goAfterLogin(); } else if(m) m.textContent="That passcode didn't match.";
  return false;
}
function goAfterLogin(){ const t=PENDING||"#home"; PENDING=null; if(location.hash===t) route(); else location.hash=t; }
function logout(){ setAuthed(false); location.hash="#/"; }
document.addEventListener("click", e=>{ if(e.target.closest("#loginClaude")) loginClaude(); if(e.target.closest("#logoutBtn")) logout(); });

/* ---------- Dispatcher ---------- */
function showPublic(html){
  document.getElementById("shell").hidden=true; document.getElementById("mobilebar").hidden=true;
  const pub=document.getElementById("public"); pub.hidden=false; pub.innerHTML=html; window.scrollTo({top:0});
  document.body.classList.add("is-public");
}
function showAdmin(){
  document.getElementById("public").hidden=true; document.getElementById("shell").hidden=false; document.getElementById("mobilebar").hidden=false;
  document.body.classList.remove("is-public");
}
function route(){
  const h = location.hash || "#/";
  if(h.startsWith("#/")){
    const path=h.slice(2).split("?")[0].replace(/\/$/,"");
    if(path==="login"){ if(AUTHED){ location.hash="#home"; return; } showPublic(pLogin()); silentClaudeCheck(); return; }
    if(path===""){ return showPublic(pHome()); }
    if(PUBLIC_PAGES[path]){ location.replace(path+".html"); return; }   // old hash links → real pages
    return showPublic(pHome());
  }
  if(!AUTHED){ PENDING=h; showPublic(pLogin()); silentClaudeCheck(); return; }
  showAdmin(); adminRoute();
}
