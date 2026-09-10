// ============================================================================
// LEAD-GEN FORM DEFINITIONS
//
// Each of the top-5 priority audiences gets a two-step form. Step 1 asks
// qualifying questions about their situation — low commitment, and it tells you
// what the call is about before you pick up the phone. Step 2 asks for contact
// details, once they've already invested a few clicks.
//
// Field types: 'select' | 'text' | 'radio'.  `half: true` puts two fields on
// one row.  Every audience not listed here falls back to DEFAULT_FORM.
// ============================================================================

// Shared step 2 — the contact block, identical everywhere.
const CONTACT_STEP = {
  title: 'How should we reach you?',
  note: 'We usually follow up within one business day to find a time.',
  fields: [
    { type: 'text', name: 'name', label: 'Full name', required: true, placeholder: 'Jordan Smith', autocomplete: 'name' },
    { type: 'text', name: 'email', label: 'Email', inputType: 'email', required: true, placeholder: 'jordan@email.com', autocomplete: 'email', half: true },
    { type: 'text', name: 'phone', label: 'Phone', inputType: 'tel', required: true, placeholder: '(555) 555-5555', autocomplete: 'tel', half: true },
    { type: 'text', name: 'state', label: 'State', required: true, placeholder: 'Georgia', autocomplete: 'address-level1', half: true },
    {
      type: 'select', name: 'best_time', label: 'Best time to call', half: true,
      options: ['Morning', 'Midday', 'Afternoon', 'Evening', 'Any time'],
    },
  ],
};

export const DEFAULT_FORM = {
  heading: 'Get your free plan check',
  note: "Tell us a little about your situation. We'll follow up to schedule your 20-minute call.",
  cta: 'Request my free consultation',
  steps: [
    {
      title: "What's prompting this?",
      fields: [
        {
          type: 'select', name: 'topic', label: "What's mainly on your mind?",
          options: [
            "Protecting my family's income",
            'Retirement & cash-value strategies',
            'Business or estate planning',
            "Income protection if I can't work",
            "Not sure yet — I'd like guidance",
          ],
        },
      ],
    },
    CONTACT_STEP,
  ],
};

export const FORMS = {

  /* ---------------------------------------------------------------- 01 */
  'healthcare-professionals': {
    heading: 'Free coverage gap check for clinicians',
    note: 'Six questions about your situation. We use them to prepare, so the call is about you rather than a generic presentation.',
    cta: 'Get my coverage gap check',
    steps: [
      {
        title: 'About your practice',
        note: 'This tells us which of the clinician-specific gaps are likely to apply to you.',
        fields: [
          {
            type: 'select', name: 'role', label: 'Your role', required: true,
            options: ['Physician / surgeon', 'Dentist / oral surgeon', 'CRNA', 'Nurse practitioner or PA', 'Registered nurse', 'Resident or fellow', 'Pharmacist / therapist / other clinician'],
          },
          { type: 'text', name: 'specialty', label: 'Specialty (optional)', placeholder: 'Anesthesiology, orthodontics…', half: true },
          {
            type: 'select', name: 'career_stage', label: 'Career stage', required: true, half: true,
            options: ['Resident or fellow', 'First 5 years as an attending', 'Established, employed', 'Practice owner or partner', 'Within 10 years of retiring'],
          },
          {
            type: 'select', name: 'student_loans', label: 'Student loan balance', half: true,
            options: ['None remaining', 'Under $100,000', '$100,000 – $250,000', 'Over $250,000', 'Prefer not to say'],
          },
          {
            type: 'select', name: 'own_occ', label: 'Individual (non-employer) disability cover?', required: true, half: true,
            options: ['Yes, own-occupation', 'Yes, but not sure of the definition', 'No — only what work provides', 'Not sure'],
          },
          {
            type: 'select', name: 'priority', label: 'What matters most right now?',
            options: ['Protecting my income if I can no longer practise', 'Making sure loans do not land on my family', 'Family income protection', 'Tax-advantaged saving beyond the 403(b)', 'Practice buy-sell or partnership funding', 'Not sure — I want an honest review'],
          },
        ],
      },
      CONTACT_STEP,
    ],
  },

  /* ---------------------------------------------------------------- 02 */
  'global-families': {
    heading: 'Cross-border coverage review',
    note: 'Citizenship and where your assets sit change the answer completely. A few questions so we know which rules apply to you.',
    cta: 'Request my cross-border review',
    steps: [
      {
        title: 'Your situation',
        note: 'We ask because US estate and gift tax treats citizens, residents and non-residents very differently.',
        fields: [
          {
            type: 'select', name: 'your_status', label: 'Your status', required: true, half: true,
            options: ['US citizen', 'Green card holder', 'Visa holder (H-1B, L-1, E-2, O-1…)', 'Non-resident with US assets', 'Prefer not to say'],
          },
          {
            type: 'select', name: 'spouse_status', label: "Spouse's status", required: true, half: true,
            options: ['Not married', 'US citizen', 'Green card holder', 'Visa holder', 'Non-resident', 'Prefer not to say'],
          },
          {
            type: 'select', name: 'us_assets', label: 'Do you own US real estate or a US business?', required: true, half: true,
            options: ['Yes — real estate', 'Yes — a business', 'Yes — both', 'No'],
          },
          {
            type: 'select', name: 'support_abroad', label: 'Do you support family outside the US?', half: true,
            options: ['Yes, regularly', 'Occasionally', 'No'],
          },
          { type: 'text', name: 'countries', label: 'Which countries are involved?', placeholder: 'India and the US, Korea and the US…', half: true },
          {
            type: 'select', name: 'priority', label: 'What brought you here?', half: true,
            options: ['Estate tax exposure with a non-citizen spouse', 'US assets owned from abroad', 'Getting covered while my visa status allows it', 'Passing wealth to heirs in another country', 'Supporting parents overseas', 'Not sure — I want it explained'],
          },
        ],
      },
      CONTACT_STEP,
    ],
  },

  /* ---------------------------------------------------------------- 03 */
  'legacy-founders': {
    heading: 'Succession liquidity review',
    note: 'Five questions about the business and the handover. Everything you share stays confidential and is only used to prepare.',
    cta: 'Request my succession review',
    steps: [
      {
        title: 'About the business',
        note: 'Ranges are fine — we are sizing the problem, not underwriting anything.',
        fields: [
          { type: 'text', name: 'industry', label: 'What does the business do?', required: true, placeholder: 'Manufacturing, construction, distribution…' },
          {
            type: 'select', name: 'revenue', label: 'Approximate annual revenue', half: true,
            options: ['Under $2 million', '$2M – $10M', '$10M – $50M', 'Over $50M', 'Prefer not to say'],
          },
          {
            type: 'select', name: 'net_worth_share', label: 'Roughly what share of your net worth is the business?', half: true,
            options: ['Under 25%', '25% – 50%', '50% – 75%', 'Over 75%', 'Not sure'],
          },
          {
            type: 'select', name: 'transition_to', label: 'Who will take it over?', required: true, half: true,
            options: ['One or more of my children', 'Management or key employees', 'A third-party buyer', 'Undecided'],
          },
          {
            type: 'select', name: 'timeline', label: 'Timeline', required: true, half: true,
            options: ['Within 2 years', '2 – 5 years', '5 – 10 years', 'More than 10 years', 'Undecided'],
          },
          {
            type: 'select', name: 'buysell', label: 'Is there a buy-sell agreement?', half: true,
            options: ['Yes, and it is funded', 'Yes, but it is not funded', 'No agreement', 'Not sure'],
          },
          {
            type: 'select', name: 'other_heirs', label: 'Children or heirs not involved in the business?', required: true, half: true,
            options: ['Yes', 'No', 'Not applicable'],
          },
        ],
      },
      CONTACT_STEP,
    ],
  },

  /* ---------------------------------------------------------------- 04 */
  'next-gen-owners': {
    heading: 'Transfer funding review',
    note: 'A few questions about how the handover is structured, so we can tell you which pieces are already covered and which are not.',
    cta: 'Request my transfer review',
    steps: [
      {
        title: 'About the handover',
        note: 'Most transfers have two or three funding gaps. These questions find yours.',
        fields: [
          { type: 'text', name: 'industry', label: 'What does the business do?', required: true, placeholder: 'Distribution, construction, services…' },
          {
            type: 'select', name: 'your_role', label: 'Where are you in the process?', required: true, half: true,
            options: ['Already an owner', 'Buying in over time', 'Expecting to inherit', 'Being groomed to buy (not family)', 'Just starting the conversation'],
          },
          {
            type: 'select', name: 'structure', label: 'How is the transfer structured?', required: true, half: true,
            options: ['Installment sale / note to the seller', 'Gifting programme', 'Outright purchase with financing', 'A combination', 'Not decided yet'],
          },
          {
            type: 'select', name: 'guarantees', label: 'Have you signed personal guarantees?', required: true, half: true,
            options: ['Yes', 'Not yet, but I expect to', 'No', 'Not sure'],
          },
          {
            type: 'select', name: 'siblings', label: 'Siblings or family not in the business?', required: true, half: true,
            options: ['Yes', 'No', 'Not applicable'],
          },
          {
            type: 'select', name: 'buysell', label: 'Is there a funded buy-sell agreement?', half: true,
            options: ['Yes, and it is funded', 'Yes, but unfunded', 'No agreement', 'Not sure'],
          },
        ],
      },
      CONTACT_STEP,
    ],
  },

  /* ---------------------------------------------------------------- 05 */
  'pre-retirees': {
    heading: 'Retirement tax & legacy check',
    note: 'Six questions. They tell us whether the tax, the care risk, or the legacy piece is the thing worth your twenty minutes.',
    cta: 'Request my retirement check',
    steps: [
      {
        title: 'Where you stand',
        note: 'Ranges are fine — nothing here is a commitment and none of it is underwriting.',
        fields: [
          {
            type: 'select', name: 'age_band', label: 'Age', required: true, half: true,
            options: ['Under 50', '50 – 54', '55 – 59', '60 – 64', '65 – 70', 'Over 70'],
          },
          {
            type: 'select', name: 'status', label: 'Where are you?', required: true, half: true,
            options: ['Working, more than 5 years out', 'Working, within 5 years of retiring', 'Recently retired', 'Recently sold a business', 'Already retired some years'],
          },
          {
            type: 'select', name: 'pretax_balance', label: 'Approximate pre-tax retirement balance', half: true,
            options: ['Under $500,000', '$500,000 – $1M', '$1M – $3M', 'Over $3M', 'Prefer not to say'],
          },
          {
            type: 'select', name: 'pension', label: 'Do you have a pension election to make?', half: true,
            options: ['Yes', 'No', 'Not sure'],
          },
          {
            type: 'select', name: 'ltc', label: 'Is long-term care planned for?', required: true, half: true,
            options: ['Yes, we have coverage', 'No', 'We intend to self-fund', 'Not sure'],
          },
          {
            type: 'select', name: 'term_expiring', label: 'Any term policy expiring soon?', half: true,
            options: ['Yes', 'No', 'Not sure'],
          },
          {
            type: 'select', name: 'priority', label: 'What concerns you most?',
            options: ['Taxes on a large pre-tax balance', 'What my children will owe on an inherited IRA', 'Paying for long-term care', 'The surviving spouse being worse off', 'Leaving a legacy efficiently', 'Not sure — I want an honest review'],
          },
        ],
      },
      CONTACT_STEP,
    ],
  },
};

export const formFor = (slug) => FORMS[slug] || DEFAULT_FORM;
