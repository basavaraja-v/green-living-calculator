'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Calculator() {
    const [energy, setEnergy] = useState('')
    const [transport, setTransport] = useState('')
    const [diet, setDiet] = useState('')
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const score = calculateScore(energy, transport, diet)
        router.push(`/results?score=${score}&energy=${energy}&transport=${transport}&diet=${diet}`)
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="energy" className="block mb-2 text-green-700">Monthly Energy Consumption (kWh)</label>
                <input
                    type="number"
                    id="energy"
                    value={energy}
                    onChange={(e) => setEnergy(e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-black"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="transport" className="block mb-2 text-green-700">Weekly Car Mileage</label>
                <input
                    type="number"
                    id="transport"
                    value={transport}
                    onChange={(e) => setTransport(e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-black"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="diet" className="block mb-2 text-green-700">Diet Type</label>
                <select
                    id="diet"
                    value={diet}
                    onChange={(e) => setDiet(e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-black"
                    required
                >
                    <option value="">Select your diet</option>
                    <option value="meat">Meat-heavy</option>
                    <option value="average">Average</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                </select>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                Calculate Impact
            </button>
        </form>
    )
}

function calculateScore(energy: string, transport: string, diet: string): number {
    let score = 0
    score += parseInt(energy) * 0.1
    score += parseInt(transport) * 0.2
    switch (diet) {
        case 'meat': score += 500; break
        case 'average': score += 400; break
        case 'vegetarian': score += 300; break
        case 'vegan': score += 200; break
    }
    return score
}