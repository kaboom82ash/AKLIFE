// Product catalogue shown on products.html
export const productIntro = {
  title: 'Products We Help You Plan With',
  h1: 'Every product category we can bring into your plan',
  sub: "Not every product fits every situation — this is the full menu so you know what's out there. On your consultation, we'll narrow it down to what's actually right for you, from carriers chosen to fit your needs, not a single company's lineup.",
  note: 'Independent access across carriers — not limited to one company’s product line',
};

export const productCategories = [
  {
    id: 'life-insurance',
    name: 'Life insurance',
    sub: 'The foundation — coverage that ranges from simple and temporary to lifelong with a built-in savings component.',
    items: [
      { h: 'Term life insurance', p: 'Coverage for a fixed period — typically 10, 20, or 30 years. The lowest-cost way to protect income for a defined stretch of time.', best: 'income replacement on a budget' },
      { h: 'Whole life insurance', p: 'Lifelong coverage with cash value that grows on a guaranteed schedule, plus the potential for annual dividends depending on the carrier.', best: 'guaranteed lifelong coverage + stable growth' },
      { h: 'Universal life insurance', p: 'Lifelong coverage with flexible premiums and an adjustable death benefit, so it can flex with your cash flow over time.', best: 'lifelong coverage with more flexibility' },
      { h: 'Variable universal life (VUL)', p: 'Lifelong coverage where you choose how cash value is invested in market-based subaccounts — more upside potential, but not guaranteed.', best: 'comfortable with market risk for more growth potential' },
      { h: 'Indexed universal life (IUL)', p: 'Lifelong coverage where cash value growth is linked to a market index, usually with a floor against losses and a cap on gains.', best: 'market-linked growth without full downside exposure' },
      { h: 'Survivorship (joint) life insurance', p: 'Covers two people under one policy and pays out after the second death — typically less expensive than two individual policies.', best: 'estate planning, married couples' },
    ],
  },
  {
    id: 'riders',
    name: 'Riders',
    sub: 'Optional add-ons that tailor a base policy to your specific situation, usually for a modest additional cost.',
    items: [
      { h: 'Waiver of Premium', p: 'Premiums are waived if you become totally disabled, so your coverage stays in force without you having to keep paying.' },
      { h: 'Accidental Death Benefit', p: 'Pays an additional amount on top of the base death benefit if death results from a covered accident.' },
      { h: 'Additional Purchase Benefit', p: 'Lets you buy more coverage at set ages or life events — marriage, a new child — without new medical underwriting.' },
      { h: 'Chronic Illness / Long-Term Care acceleration', p: 'Lets you access part of your death benefit early to help pay for qualifying long-term care or a chronic illness diagnosis.' },
      { h: 'Child term rider', p: 'Adds a flat amount of coverage on your children under one rider, instead of separate policies for each child.' },
      { h: 'Guaranteed insurability rider', p: 'Lets you increase coverage at future dates or life events without proving insurability again.' },
    ],
  },
  {
    id: 'disability',
    name: 'Disability insurance',
    sub: "Protects your income if you're unable to work — often the most overlooked piece of a financial plan.",
    items: [
      { h: 'Individual disability insurance', p: 'Replaces a portion of your income if you become too sick or hurt to work, independent of what your employer offers.' },
      { h: 'Specialty disability coverage', p: 'Occupation-specific policies (for example, for physicians and dentists) that account for the higher income and specialized skill at risk.' },
      { h: 'Business overhead expense (BOE)', p: 'Reimburses the fixed operating costs of your practice or business — rent, staff, utilities — while you are disabled and unable to work.' },
      { h: 'Disability buy-out coverage', p: 'Funds the purchase of an owner’s interest in a business if that owner becomes permanently disabled, the way a buy-sell policy funds a death.' },
    ],
  },
  {
    id: 'ltc',
    name: 'Long-term care',
    sub: 'Covers the cost of extended care later in life — one of the biggest unplanned expenses families face.',
    items: [
      { h: 'Standalone long-term care insurance', p: 'A dedicated policy to help cover the cost of assisted living, nursing care, or in-home help.' },
      { h: 'Long-term care rider on a life policy', p: 'Bundles LTC coverage into a life insurance policy — often more cost-effective than a standalone LTC policy, with a death benefit if care is never needed.' },
    ],
  },
  {
    id: 'annuities',
    name: 'Annuities',
    sub: 'Tools for turning savings into guaranteed income, or growing money on a tax-deferred basis.',
    items: [
      { h: 'Income annuities', p: 'Convert a lump sum into a guaranteed stream of income, immediately or starting at a future date.' },
      { h: 'Fixed annuities', p: 'Grow savings at a guaranteed interest rate, with principal protection from market downturns.' },
      { h: 'Variable annuities', p: 'Grow savings through market-based subaccounts, with more upside potential and more risk than a fixed annuity.' },
    ],
  },
  {
    id: 'investments',
    name: 'Investments',
    sub: 'Where life insurance planning connects to the rest of your portfolio.',
    items: [
      { h: 'Brokerage accounts', p: 'Standard taxable investment accounts for building wealth outside of retirement accounts.' },
      { h: 'Investment advisory services', p: 'Ongoing, professionally managed portfolios built around your goals and risk tolerance.' },
      { h: 'Private wealth management', p: 'Coordinated investment, tax, and estate strategy for higher-net-worth situations.' },
    ],
  },
  {
    id: 'planning',
    name: 'Planning services',
    sub: 'The strategy work that ties every product above into one coherent plan.',
    items: [
      { h: 'Retirement planning', p: 'Mapping out income sources, savings targets, and timing so retirement is funded the way you want it to be.' },
      { h: 'College savings planning', p: 'Structuring education savings alongside — not instead of — your other financial goals.' },
      { h: 'Estate planning coordination', p: 'Working alongside your attorney to make sure insurance, trusts, and beneficiary designations all point the same direction.' },
      { h: 'Business planning services', p: 'Buy-sell funding, key person coverage, and executive benefit design for business owners.' },
    ],
  },
];
