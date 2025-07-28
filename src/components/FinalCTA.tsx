import { Mail } from 'lucide-react'
import { Container } from '@/components/Container'

export function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative isolate overflow-hidden py-20 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="w-full text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get Invited or Apply & Join the Waitlist
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Card Trade is a private platform built exclusively for verified
            collectors. <br />
            No scammers. No transaction fees. Just secure deals and real
            reputations that actually matter.
            <br />
            <br />
            Have an invite or referral code? You can join immediately.
            <br />
            Don&rsquo;t have one? Apply and join the waitlist.
          </p>

          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <input
              type="email"
              name="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-gray-600 ring-inset placeholder:text-gray-600 focus:ring-2 focus:ring-cyan-500 focus:ring-inset sm:text-sm"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
            >
              <Mail className="h-4 w-4" />
              Join Waitlist
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}
