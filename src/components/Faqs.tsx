import { Container } from './Container'

const faqs = [
  [
    {
      question: 'Who can join Card Trade?',
      answer:
        'Only verified collectors are allowed on the platform. You must receive an invite or referral code from an existing member — or apply to join via the waitlist.',
    },
    {
      question: 'What makes Card Trade safer than other platforms?',
      answer: `Every user on Card Trade must pass strict identity verification, including biometric facial screening matched to a government-issued ID — this keeps scammers out entirely.

And it doesn’t stop there. Every deal is fully documented, and both parties must leave feedback. Over time, each collector builds a visible reputation score based on real transaction history, so you always know who you’re dealing with — and who you can trust.`,
    },
  ],
  [
    {
      question: 'Do I have to pay to buy, sell, or trade?',
      answer:
        'No. Card Trade charges zero transaction fees. Whether you’re buying, selling, or trading, there are no hidden costs — everything is covered by your membership.',
    },
    {
      question: 'Can I use Card Trade with people I meet on social media?',
      answer:
        'Yes. Card Trade acts as a deal protection utility. If you find someone on social media, you can use Card Trade to verify their identity and document the transaction.',
    },
  ],
  [
    {
      question: 'How does reputation work?',
      answer:
        'After every deal, both collectors leave feedback — and that feedback builds your visible reputation score. You can view a user’s deal history and read what others have said before choosing to transact, giving you the confidence to deal only with collectors who have earned their reputation.',
    },
    {
      question: 'What if I don’t have an invite?',
      answer:
        'If you don’t have an invite or referral code, you can still apply by joining the waitlist. While we can’t guarantee immediate access, we may open up limited spots to collectors who apply.\n\nYou can also ask around — many collectors get invited by people they’ve done deals with in the past. Try reaching out to friends in The Hobby or posting in trusted social media groups. Some group admins even distribute referral codes to members who have strong reputations and no history of scamming.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@cardtrade.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm whitespace-pre-line text-gray-700">
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
