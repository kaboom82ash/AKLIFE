// Audience content. Edit the copy, then run `npm run build`.
export default {
  slug: 'tech-equity',
  navLabel: 'Tech & Equity Comp',
  navSub: 'RSUs, options, pre-IPO and post-liquidity',
  title: 'Planning for Tech Professionals with Equity Compensation',
  description:
    'Life insurance and liquidity planning for tech employees and founders paid in RSUs, ISOs and NSOs — funding an option exercise, pre-IPO estate planning, and coverage sized to real total comp.',
  kicker: 'For engineers, PMs, designers and leaders paid in equity',
  h1: 'Most of your net worth is in one company\'s stock, and you cannot sell it yet.',
  sub: 'Equity compensation creates a very specific pattern: enormous paper wealth, very little liquidity, a tax bill with hard deadlines, and life insurance sized to a base salary that is a fraction of what you actually earn. Each of those has a fix.',
  heroBullets: [
    'Liquidity to exercise options before they expire, without selling other assets',
    'Coverage sized to three-year average total compensation, not base salary',
    'Estate structures put in place before a valuation event, when it is cheapest',
  ],
  audienceNote: {
    title: 'WHO THIS IS FOR',
    body: 'Senior and staff engineers, engineering and product leaders, designers, sales and go-to-market leaders, and early employees or founders at private companies — anyone whose compensation is meaningfully RSUs, incentive stock options, non-qualified options, or founder equity.',
  },
  pressuresHead: {
    kicker: 'The real problem',
    h2: 'The specific traps equity compensation sets',
    p: 'Equity comp is not just "a bigger paycheck." It behaves differently, and the failure modes are timing-driven rather than market-driven.',
  },
  pressures: [
    { h: 'Extreme concentration by default', p: 'Your salary, your bonus, your unvested equity and often your largest single asset all depend on one company. Diversification advice is easy to give and structurally hard to follow.' },
    { h: 'Options expire, and exercise costs cash', p: 'ISOs and NSOs have a strike price you have to actually pay, plus a tax consequence. Finding six figures of cash to exercise, at the exact moment you cannot sell the shares, is the classic squeeze.' },
    { h: 'The 90-day post-termination window', p: 'Leave the company — voluntarily or not — and you typically have 90 days to exercise vested options or lose them. That deadline does not care what else is happening in your life.' },
    { h: 'Alternative Minimum Tax on ISO exercise', p: 'Exercising incentive stock options and holding can trigger AMT on the spread, meaning you owe real tax on gains you have not received in cash.' },
    { h: 'Group life sized to base salary', p: 'If your base is 210,000 and your total comp is 600,000, two-times-base group life covers well under a year of what your household actually lives on.' },
    { h: 'Paper wealth is not an estate plan', p: 'A large unrealised position still counts in an estate. And gifting shares into a trust is dramatically cheaper at a low 409A valuation than after an IPO or tender.' },
    { h: 'Liquidity events arrive suddenly', p: 'A tender offer, an acquisition or an IPO can convert a decade of illiquid equity into a taxable event and a genuine estate on a few weeks\' notice.' },
    { h: 'Startup risk cuts both ways', p: 'The same volatility that could make the position enormous could make it zero. Planning has to work in both branches, not just the good one.' },
  ],
  playsHead: {
    kicker: 'How the tools get used',
    h2: 'Where insurance solves an equity problem',
    p: 'Some of these are protection plays and some are pure liquidity plays. The liquidity ones are the reason tech clients tend to find this conversation more interesting than they expected.',
  },
  plays: [
    {
      tag: 'Liquidity',
      h: 'Cash value as the funding source for an option exercise',
      p: 'Accumulated cash value in a permanent policy can be borrowed against, generally without a credit check, income verification, or a sale of other assets. For someone facing an exercise deadline on options they believe in, that is a source of capital that does not force a decision on the rest of the portfolio.',
      fit: 'The alternative is usually selling public holdings at a bad moment, taking a high-interest personal loan, or letting the options lapse.',
    },
    {
      tag: 'Foundation',
      h: 'Coverage sized to a normalised total compensation figure',
      p: 'We use a three-year average of base plus bonus plus the realised value of vested equity, then size a term ladder to the years your household would need that income to continue. This is nearly always several multiples of the group policy.',
      fit: 'It is also portable, which matters more in tech than almost anywhere else given how often people change employers.',
    },
    {
      tag: 'Timing matters',
      h: 'Put an irrevocable trust in place before the valuation runs up',
      p: 'Gifting equity into an irrevocable trust uses gift-tax exemption based on the value at the time of the gift. Doing that at a low 409A valuation, before a tender or IPO, moves far more future appreciation out of your taxable estate for the same amount of exemption. This is attorney work — our role is to flag the window and to fund the insurance piece.',
      fit: 'This is the single most time-sensitive item on the page. After the liquidity event, the same transfer costs multiples more in exemption.',
    },
    {
      tag: 'Tax diversification',
      h: 'A LIRP for the years your income is genuinely enormous',
      p: 'An overfunded policy, structured to stay within IRS limits and avoid Modified Endowment Contract status, gives a place for surplus cash flow to grow tax-deferred with access later through policy loans. Particularly relevant if you expect several very high-income years followed by a sabbatical, a startup, or an early retirement.',
      fit: 'Front-loading tax-advantaged savings during the peak years is the opposite of how most people default, which is to spend more.',
    },
    {
      tag: 'Income protection',
      h: 'Individual disability with a strong occupation definition',
      p: 'Group LTD caps out well below a senior tech income and is usually taxable when employer-paid. An individual policy with a future increase option lets coverage grow as compensation grows, without new medical underwriting each time.',
      fit: 'Especially important for anyone considering leaving a large employer for a startup, where the group benefits disappear.',
    },
    {
      tag: 'Couples',
      h: 'A survivorship policy for a dual-tech household',
      p: 'Two senior tech incomes and two equity stacks can build an estate that crosses state or federal thresholds quietly. A second-to-die policy held in an irrevocable trust is a relatively efficient way to create the cash to settle it.',
      fit: 'Cheaper than two individual permanent policies, and it pays exactly when the estate cost actually arrives.',
    },
    {
      tag: 'Founders',
      h: 'Key person coverage and a funded founder buy-sell',
      p: 'Investors frequently require key person coverage on founders. Separately, co-founders need a written agreement about what happens to equity if one dies — and money behind it, so the surviving founders are not negotiating with a grieving family or a new, unwanted shareholder.',
      fit: 'This is one of those items that is trivially cheap to fix early and effectively impossible to fix at the moment it is needed.',
    },
    {
      tag: 'After the exit',
      h: 'Converting a windfall into something that outlives the market',
      p: 'Post-liquidity, the questions change: estate liquidity, charitable structures, income floors, and protecting the number rather than growing it. Permanent coverage and annuities both become relevant in ways they were not the year before.',
      fit: 'The mistake we see most often is treating a one-time liquidity event with the same plan that got you there.',
    },
  ],
  scenarios: [
    {
      who: 'The pre-IPO engineer',
      h: 'Exercising without selling anything else',
      rows: [
        { k: 'Situation', v: 'Age 33, a staff engineer at a late-stage private company. Vested ISOs with a combined strike price of about 180,000 and a 409A valuation many multiples higher. No secondary market yet, and a strong belief in the company.' },
        { k: 'Strategy', v: 'Coverage sized to total compensation as a foundation, plus a permanent policy funded aggressively during the high-income years so cash value is available as a borrowing source ahead of the exercise deadline.' },
      ],
      outcome:
        'When the exercise window arrives, there is a capital source that does not require selling public holdings, taking on a high-rate personal loan, or letting the options expire. If the company does not work out, the policy is still a policy — the family protection was never contingent on the outcome.',
    },
    {
      who: 'The post-tender household',
      h: 'An estate that appeared overnight',
      rows: [
        { k: 'Situation', v: 'Two senior tech employees, ages 41 and 43, with a combined net worth that roughly tripled after a tender offer and a strong stock year. Two children. No estate documents beyond a basic will written years ago.' },
        { k: 'Strategy', v: 'Attorney-drafted trust documents, a survivorship policy held in an irrevocable life insurance trust sized to projected settlement costs, and a review of beneficiary designations across a decade of old employer accounts.' },
      ],
      outcome:
        'Heirs receive a death benefit outside the taxable estate and outside probate, which gives them cash to pay settlement costs rather than having to liquidate concentrated stock on someone else\'s timeline.',
    },
  ],
  checklist: [
    'What your options actually cost to exercise, and when the deadline is',
    'Whether your coverage reflects total comp or just base salary',
    'What happens to unvested equity in a death or disability',
    'Whether a trust should be funded before your next valuation event',
    'How much of your household net worth sits in one ticker',
    'Where surplus cash flow goes in a very high-income year',
    'What your group benefits look like if you leave for a startup',
    'Whether co-founder equity is covered by a funded agreement',
  ],
  faqs: [
    {
      q: 'Can I really borrow against a life insurance policy to exercise options?',
      a: 'Yes, if the policy has accumulated cash value. Policy loans generally do not require a credit check or income verification, and the money can be used for anything. The important caveats: loans accrue interest, they reduce the death benefit and cash value while outstanding, and if the policy lapses with a large loan there can be a significant taxable event. It is a real tool, and it needs to be managed rather than forgotten. We will walk through the mechanics and the risks before you rely on it.',
    },
    {
      q: 'My equity might be worth nothing. Should I plan around it at all?',
      a: 'Plan around your cash compensation and your family\'s actual needs first — that part should work whether the equity goes to zero or to the moon. Then treat the equity-specific moves as contingent: the trust conversation only matters if there is a valuation event, and the exercise liquidity only matters if you decide to exercise. Good planning here is building the option, not betting on the outcome.',
    },
    {
      q: 'Why does the timing of a trust matter so much?',
      a: 'Because gift tax is measured at the value on the date of the gift. Moving shares into an irrevocable trust when the 409A valuation is low uses a small amount of your lifetime exemption and shifts all future appreciation outside your estate. The same shares moved after an IPO consume vastly more exemption for the identical economic result. Your attorney does this work; we help identify the window and fund any insurance the structure needs.',
    },
    {
      q: 'I already have a big brokerage account. Why add insurance?',
      a: 'For most people in this cohort, the honest answer is: for the death benefit and the estate liquidity, not to beat your index funds. Permanent insurance is not a better investment than a diversified portfolio and we will not pitch it that way. It earns a place when you need money to appear at a specific moment — a death, an estate settlement, an exercise deadline — regardless of what the market did that week.',
    },
    {
      q: 'What should a founder do about key person insurance?',
      a: 'Expect institutional investors to require it, and get ahead of it. Separately, and more importantly for you personally, make sure the co-founder agreement specifies what happens to equity on a death or long-term disability, and that there is funding behind that obligation. Without it, a surviving founder can end up with a co-owner who has no involvement in the business and a very different agenda.',
    },
  ],
  related: [
    { label: 'Indexed universal life', href: 'products.html#life-insurance' },
    { label: 'Variable universal life', href: 'products.html#life-insurance' },
    { label: 'Policy loans', href: 'strategies.html#liquidity' },
    { label: 'Using a policy as collateral', href: 'strategies.html#liquidity' },
    { label: 'ILIT', href: 'strategies.html#estate' },
    { label: 'Key person insurance', href: 'strategies.html#business' },
    { label: 'Survivorship life', href: 'products.html#life-insurance' },
  ],
  also: ['corporate-executives', 'pre-retirees', 'legacy-founders'],
};
