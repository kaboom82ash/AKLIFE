// Strategy guide shown on strategies.html
export const strategyIntro = {
  title: 'Your Complete Life Insurance Strategy Guide',
  h1: 'The complete life insurance strategy guide',
  sub: "Every strategy we reference in a consultation, in one place — organized from basic protection through advanced estate and business planning. Not every strategy applies to you; we'll narrow this down together on your call.",
  badge: 'Unlocked after booking your free consultation',
};

export const strategyCategories = [
  {
    id: 'foundational',
    name: 'Foundational protection',
    sub: 'The core strategies most people start with — making sure the people who depend on your income are covered.',
    related: [
      { label: 'Term life insurance', href: 'products.html#life-insurance' },
      { label: 'Whole life insurance', href: 'products.html#life-insurance' },
      { label: 'Guaranteed insurability rider', href: 'products.html#riders' },
    ],
    items: [
      { h: 'Term life for income replacement', p: 'The lowest-cost way to replace your income for a set number of years — sized to the actual gap your family would face, not a generic multiple of salary.' },
      { h: 'Return-of-premium term', p: 'A term policy that refunds your premiums if you outlive the term — costs more, but nothing is "lost" if you never make a claim.' },
      { h: 'Convertible term', p: 'Lets you convert some or all of a term policy to permanent coverage later, without new medical underwriting — useful if your health changes.' },
      { h: 'Laddering multiple term policies', p: 'Stacking policies of different lengths so coverage steps down as needs shrink — for example, a 20-year policy sized to the mortgage and a 10-year policy sized to the years until kids are independent.' },
      { h: 'Mortgage protection coverage', p: 'Term coverage sized and timed specifically to pay off the remaining mortgage balance if something happens to you.' },
      { h: 'Supplementing employer group life', p: 'Group life through work is usually cheap but small and not portable if you leave the job — most people need individual coverage alongside it, not instead of it.' },
    ],
  },
  {
    id: 'riders',
    name: 'Living benefits & riders',
    sub: 'Optional add-ons that extend what a policy covers, often for a modest additional cost.',
    related: [
      { label: 'All riders', href: 'products.html#riders' },
      { label: 'Long-term care rider', href: 'products.html#ltc' },
    ],
    items: [
      { h: 'Accidental Death Benefit (ADB)', p: 'Pays an additional amount on top of the base death benefit if death results from a covered accident.' },
      { h: 'Waiver of Premium', p: 'Waives future premiums if you become totally disabled, so the policy — and any cash value growth — stays in force without you having to keep paying.' },
      { h: 'Chronic illness / long-term care acceleration', p: "Lets you access part of your death benefit while living if you're diagnosed with a qualifying chronic or terminal illness." },
      { h: 'Child term rider', p: 'Adds a flat amount of coverage on your children under one rider, instead of buying separate policies for each child.' },
      { h: 'Guaranteed insurability rider', p: 'Lets you buy additional coverage at set future dates or life events without new medical underwriting — valuable if your health may decline.' },
    ],
  },
  {
    id: 'liquidity',
    name: 'Cash value & liquidity strategies',
    sub: 'Ways permanent policies can function as a flexible pool of money while you are alive, not just a death payout.',
    related: [
      { label: 'Whole life insurance', href: 'products.html#life-insurance' },
      { label: 'Universal life insurance', href: 'products.html#life-insurance' },
      { label: 'Indexed universal life', href: 'products.html#life-insurance' },
    ],
    items: [
      { h: 'Policy loans against cash value', p: 'Borrow against accumulated cash value for an opportunity or emergency, generally without a credit check or bank underwriting. Loans accrue interest and reduce the death benefit while outstanding.' },
      { h: 'Using a policy as collateral', p: "Assign a policy's cash value as collateral to help secure a business loan or real estate financing, sometimes on better terms than an unsecured loan." },
      { h: '"Infinite Banking" / Bank-on-Yourself style strategies', p: 'Using a properly structured whole life policy as your own source of financing — borrowing against it and repaying yourself instead of a bank, while cash value keeps compounding. Requires discipline and a long horizon to work as advertised.' },
      { h: 'Cash value as an emergency-fund backstop', p: 'A supplemental layer of liquidity behind a traditional emergency fund, for when unexpected costs exceed what is in savings.' },
      { h: '1035 exchange', p: 'Moves cash value from an old or underperforming policy into a new one without triggering current income tax on the gain.' },
    ],
  },
  {
    id: 'retirement',
    name: 'Retirement & tax-advantaged growth',
    sub: 'Using permanent insurance as a supplemental — not primary — retirement savings vehicle.',
    related: [
      { label: 'Indexed universal life', href: 'products.html#life-insurance' },
      { label: 'Whole life insurance', href: 'products.html#life-insurance' },
      { label: 'Income annuities', href: 'products.html#annuities' },
      { label: 'Investment advisory services', href: 'products.html#investments' },
    ],
    items: [
      { h: 'Life Insurance Retirement Plan (LIRP)', p: 'An overfunded whole life or IUL policy designed to generate supplemental, tax-advantaged income in retirement through policy loans.' },
      { h: 'Whole life dividend options', p: 'Choosing how dividends are used — buying more paid-up coverage, reducing premiums, accumulating at interest, or taking them as cash — to match your goals. Dividends are not guaranteed.' },
      { h: 'Avoiding Modified Endowment Contract (MEC) status', p: 'Keeping premium funding within IRS limits so loans and withdrawals keep their favorable tax treatment instead of being taxed like an annuity.' },
      { h: 'IUL vs. VUL trade-offs', p: 'Indexed universal life credits growth linked to a market index with a floor and a cap; variable universal life invests directly in sub-accounts with full market risk and reward. Choosing between them is a risk-tolerance decision.' },
      { h: 'Roth conversions paired with a death benefit', p: 'Converting pre-tax balances in low-income "gap years" while using life insurance as the tax-free legacy asset — particularly relevant since the SECURE Act ended the stretch IRA for most non-spouse heirs.' },
    ],
  },
  {
    id: 'business',
    name: 'Business owner strategies',
    sub: 'Protecting a business, its owners, and its key people using life insurance as the funding mechanism.',
    related: [
      { label: 'Whole life insurance', href: 'products.html#life-insurance' },
      { label: 'Disability insurance', href: 'products.html#disability' },
      { label: 'Business planning services', href: 'products.html#planning' },
    ],
    items: [
      { h: 'Buy-sell agreements', p: 'Funds a pre-agreed buyout if an owner dies — structured as cross-purchase (owners insure each other) or entity-purchase (the business owns the policies). The choice has real tax and basis consequences.' },
      { h: 'Key person insurance', p: 'Protects the business financially if a critical owner or employee dies, covering the cost and disruption of replacing them. Employer-owned policies have notice and consent requirements.' },
      { h: 'Executive bonus plans (Section 162)', p: 'The business pays premiums on a policy owned by a key employee as a bonus, a simple way to help retain top talent without a complex plan.' },
      { h: 'Split-dollar arrangements', p: 'The business and an executive share the costs and benefits of a policy under a written agreement — often used for executive retention.' },
      { h: 'Cash value as business collateral', p: 'Accumulated cash value in a business-owned policy can support a line of credit for growth without taking on new outside debt.' },
      { h: 'Disability buy-out and overhead coverage', p: 'Funds a buyout if an owner becomes permanently disabled, and reimburses fixed business costs during a shorter absence — the triggers most agreements name but never fund.' },
    ],
  },
  {
    id: 'estate',
    name: 'Estate & wealth transfer',
    sub: 'Using life insurance to move wealth to the next generation efficiently and provide liquidity when it is needed most.',
    related: [
      { label: 'Survivorship life insurance', href: 'products.html#life-insurance' },
      { label: 'Estate planning coordination', href: 'products.html#planning' },
    ],
    items: [
      { h: 'Irrevocable Life Insurance Trust (ILIT)', p: "Holds a policy outside your taxable estate, so the death benefit isn't added to your estate's value for tax purposes. Requires careful drafting, gifting mechanics, and a real trustee." },
      { h: 'Survivorship (second-to-die) life insurance', p: 'Covers two people (often spouses) and pays out after the second death — commonly used to provide liquidity for estate taxes, at a lower cost than two individual policies.' },
      { h: 'Equalizing inheritances', p: 'Uses a policy payout to give one heir a comparable inheritance when another heir receives an illiquid asset, like a family business or property.' },
      { h: 'Wealth replacement trusts', p: "Pairs a charitable gift of an asset with a life insurance policy that replaces that asset's value for your heirs." },
      { h: 'Charitable beneficiary designations', p: 'Naming a charity or donor-advised fund as a full or partial policy beneficiary as part of a giving strategy.' },
      { h: 'Planning for a non-citizen spouse', p: 'Property passing to a non-US-citizen spouse does not qualify for the unlimited marital deduction. A qualified domestic trust (QDOT) defers rather than eliminates the tax, which creates a liquidity need.' },
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced & high-net-worth strategies',
    sub: 'More complex structures generally used by high-net-worth individuals and businesses, usually alongside an attorney or CPA.',
    related: [
      { label: 'Variable universal life', href: 'products.html#life-insurance' },
      { label: 'Private wealth management', href: 'products.html#investments' },
    ],
    items: [
      { h: 'Premium financing', p: 'Borrowing from a bank (not the policy) to pay premiums on a large policy, preserving other assets and liquidity — carries interest-rate and collateral risk that needs careful structuring and honest downside modelling.' },
      { h: 'Private placement life insurance', p: 'A specialized policy structure for accredited investors seeking tax-efficient growth on alternative investments held inside the policy.' },
      { h: 'Life insurance in divorce settlements', p: 'Securing alimony or child support obligations by requiring the paying spouse to maintain a policy naming the other spouse or children as beneficiary.' },
      { h: 'Pre-liquidity-event trust funding', p: 'Gifting closely held or pre-IPO interests into an irrevocable trust while the valuation is low, so future appreciation grows outside the taxable estate.' },
    ],
  },
  {
    id: 'lifestage',
    name: 'Life-stage review triggers',
    sub: 'Points in life worth revisiting your coverage and beneficiaries, even if nothing feels urgent.',
    related: [
      { label: 'Additional Purchase Benefit rider', href: 'products.html#riders' },
      { label: 'Retirement planning', href: 'products.html#planning' },
    ],
    items: [
      { h: 'Major life events', p: 'Marriage, a new child, a new home, starting a business, or a significant promotion are all good moments to re-check whether your coverage still matches your actual needs.' },
      { h: 'Beneficiary reviews', p: 'Divorce, remarriage, or a death in the family are reasons to confirm your beneficiary designations are still correct — outdated designations are one of the most common estate-planning mistakes.' },
      { h: 'Term conversion deadlines', p: 'Most term policies include a right to convert to permanent coverage without new underwriting, and that right expires at a stated age or duration. Check the contract, not your memory.' },
      { h: 'Changing jobs or leaving an employer', p: 'Group life and group disability end with employment, often with a short conversion window. The time to review is before you give notice.' },
    ],
  },
];
