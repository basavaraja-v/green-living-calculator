import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Sustainability Tips | Green Living Calculator',
    description: 'Discover practical tips for sustainable living and reducing your environmental impact. Learn how to make eco-friendly choices in your daily life.',
    keywords: 'sustainability tips, eco-friendly living, green living guide, reduce environmental impact',
}

const tips = [
    {
        category: "Energy",
        items: [
            "Switch to LED light bulbs",
            "Use a programmable thermostat",
            "Unplug electronics when not in use",
            "Invest in energy-efficient appliances",
        ]
    },
    {
        category: "Transportation",
        items: [
            "Use public transportation or carpool",
            "Bike or walk for short trips",
            "Maintain your vehicle for better fuel efficiency",
            "Consider an electric or hybrid vehicle",
        ]
    },
    {
        category: "Food",
        items: [
            "Reduce meat consumption",
            "Buy local and seasonal produce",
            "Start a home garden",
            "Compost food scraps",
        ]
    },
    {
        category: "Waste Reduction",
        items: [
            "Use reusable bags, water bottles, and containers",
            "Recycle and properly dispose of waste",
            "Choose products with minimal packaging",
            "Repair items instead of replacing them",
        ]
    },
]

export default function SustainabilityTips() {
    return (
        <div className="min-h-screen p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Sustainability Tips</h1>
            <div className="max-w-4xl mx-auto dark:text-black">
                {tips.map((category, index) => (
                    <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">{category.category}</h2>
                        <ul className="list-disc pl-6">
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="mb-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link href="/" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                    Back to Calculator
                </Link>
            </div>
            {/* Google Ads */}
            {/* <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">Advertisement</p>
                <div className="bg-gray-200 p-4 rounded-md">
                    Replace this with actual Google Ads code
                    <p className="text-gray-700">Google Ads Placeholder</p>
                </div>
            </div> */}
        </div>
    )
}