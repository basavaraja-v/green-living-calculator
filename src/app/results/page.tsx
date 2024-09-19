import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: { score: string } }): Promise<Metadata> {
    return {
        title: `Your Green Living Score: ${searchParams.score}`,
        description: 'See your environmental impact and get personalized tips to reduce your carbon footprint.',
    }
}

export default function Results({ searchParams }: { searchParams: { score: string, energy: string, transport: string, diet: string } }) {
    const score = parseInt(searchParams.score)
    const tips = generateTips(searchParams.energy, searchParams.transport, searchParams.diet)

    return (
        <div className="min-h-screen p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Your Green Living Score</h1>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-center mb-4 dark:text-black">
                    {score} <span className="text-lg font-normal">kg CO2e/year</span>
                </p>
                <p className="text-center mb-8 dark:text-black">
                    {score < 1000 ? 'Great job! Your carbon footprint is below average.' : 'There\'s room for improvement in reducing your carbon footprint.'}
                </p>
                <h2 className="text-2xl font-bold mb-4 text-green-700">Personalized Tips</h2>
                <ul className="list-disc pl-6 mb-8 dark:text-black">
                    {tips.map((tip, index) => (
                        <li key={index} className="mb-2">{tip}</li>
                    ))}
                </ul>
                <Link href="/" className="block w-full text-center bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                    Calculate Again
                </Link>
            </div>
        </div>
    )
}

function generateTips(energy: string, transport: string, diet: string): string[] {
    const tips = []
    if (parseInt(energy) > 500) {
        tips.push('Consider using energy-efficient appliances and LED light bulbs to reduce your energy consumption.')
    }
    if (parseInt(transport) > 100) {
        tips.push('Try carpooling, using public transportation, or biking for shorter trips to reduce your car mileage.')
    }
    if (diet === 'meat' || diet === 'average') {
        tips.push('Incorporating more plant-based meals into your diet can significantly reduce your carbon footprint.')
    }
    return tips
}