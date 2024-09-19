import Link from 'next/link'
import { Metadata } from 'next'
import Calculator from './components/Calculator'

export const metadata: Metadata = {
  title: 'Green Living Calculator | Reduce Your Carbon Footprint',
  description: 'Calculate your carbon footprint and learn how to live a more sustainable, eco-friendly life. Get personalized tips to reduce your environmental impact.',
  keywords: 'green living, carbon footprint, sustainability, eco-friendly, environment',
}

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Green Living Calculator</h1>
      <p className="text-center mb-8 text-lg text-green-700">
        Estimate your carbon footprint and get personalized tips to reduce your environmental impact.
      </p>
      <Calculator />
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Why Green Living Matters</h2>
        <p className="mb-4 dark:text-black">
          Green living is more than just a trend – it&apos;s a necessary shift in lifestyle to combat climate change and preserve our planet for future generations. By making small changes in our daily lives, we can collectively make a significant impact on reducing greenhouse gas emissions and conserving natural resources.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-green-700">Key Benefits of Sustainable Living:</h3>
        <ul className="list-disc pl-6 mb-4 dark:text-black">
          <li>Reduced carbon footprint and environmental impact</li>
          <li>Lower energy bills and cost savings</li>
          <li>Improved air and water quality</li>
          <li>Conservation of natural resources</li>
          <li>Support for local and sustainable businesses</li>
        </ul>
        <div className="flex justify-center space-x-4">
          <Link href="/faq" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
            Read FAQs
          </Link>
          <Link href="/tips" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
            Sustainability Tips
          </Link>
        </div>
      </section>
      {/* Google Ads
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">Advertisement</p>
        <div className="bg-gray-200 p-4 rounded-md">
          Replace this with actual Google Ads code
          <p className="text-gray-700">Google Ads Placeholder</p>
        </div>
      </div> */}
    </main>
  )
}