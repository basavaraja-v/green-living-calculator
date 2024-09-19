import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Green Living Blog | Sustainability and Eco-Friendly Tips',
    description: 'Explore our blog for in-depth articles on sustainable living, reducing your carbon footprint, and making eco-friendly choices in your daily life.',
    keywords: 'green living blog, sustainability articles, eco-friendly tips, environmental impact reduction',
}

const posts = [
    { id: 1, title: '10 Easy Ways to Reduce Your Carbon Footprint', slug: '10-ways-to-reduce-carbon-footprint' },
    { id: 2, title: 'The Impact of Diet on the Environment', slug: 'diet-impact-on-environment' },
    { id: 3, title: 'Sustainable Transportation: A Comprehensive Guide', slug: 'sustainable-transportation-guide' },
    { id: 4, title: 'How to Create an Eco-Friendly Home', slug: 'eco-friendly-home-guide' },
    { id: 5, title: 'The Importance of Renewable Energy', slug: 'importance-of-renewable-energy' },
    { id: 6, title: 'Reducing Plastic Waste: Tips and Tricks', slug: 'reducing-plastic-waste' },
    { id: 7, title: 'Sustainable Fashion: Making Ethical Clothing Choices', slug: 'sustainable-fashion-guide' },
    { id: 8, title: 'Water Conservation: Why It Matters and How to Do It', slug: 'water-conservation-guide' },
]

export default function Blog() {
    return (
        <div className="min-h-screen p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Green Living Blog</h1>
            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
                {posts.map(post => (
                    <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                        <Link href={`/blog/${post.slug}`} className="text-xl font-semibold text-green-700 hover:underline">
                            {post.title}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link href="/" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                    Back to Calculator
                </Link>
            </div>
            {/* Google Ads
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">Advertisement</p>
                <div className="bg-gray-200 p-4 rounded-md">
                    Replace this with actual Google Ads code
                    <p className="text-gray-700">Google Ads Placeholder</p>
                </div>
            </div> */}
        </div>
    )
}