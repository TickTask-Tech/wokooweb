import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Account and Data Deletion',
  description: 'How to request deletion of your TickTask account and associated data.',
}

const lastUpdated = '2026-02-18'

export default function AccountDeletionPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-primary-600 hover:text-primary-700 text-sm font-medium mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Account and Data Deletion</h1>
          <p className="text-gray-500 mb-10">TickTask (Ticktask Technologies Limited) · Last Updated: {lastUpdated}</p>

          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">How to request account deletion</h2>
              <p className="text-gray-600 mb-4">You can request that your TickTask account and associated data be deleted in either of the following ways:</p>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li><strong>In the app:</strong> Open the TickTask app → go to <strong>Settings</strong> (or Profile) → find <strong>Delete account</strong> → follow the on-screen steps to confirm. Your account and linked data will be deleted as described below.</li>
                <li><strong>By email:</strong> Send an email to <a href="mailto:support@ticktask.co.ke" className="text-primary-600 hover:underline">support@ticktask.co.ke</a> from the email address linked to your account. Include your full name and phone number used in the app. We will verify your identity and process the deletion request within a reasonable period.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">What we delete and what we keep</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Deleted:</strong> Your profile (name, email, phone, photo), saved addresses, payment methods stored with us, support messages, and other personal data we hold that is linked to your account.</li>
                <li><strong>Anonymized or retained where required:</strong> We may anonymize or retain certain data (e.g. transaction records) only as required for legal, tax, or regulatory purposes, or to resolve disputes. Such data will no longer identify you personally.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Retention period</h2>
              <p className="text-gray-600">
                After you request deletion, we process it as soon as practicable. Data that we must retain for legal or regulatory reasons may be kept for the period required by applicable law (e.g. several years for financial records). After that period, it will be deleted or anonymized.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Questions</h2>
              <p className="text-gray-600">
                If you have any questions about account or data deletion, contact us at <a href="mailto:support@ticktask.co.ke" className="text-primary-600 hover:underline">support@ticktask.co.ke</a> or see our <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
