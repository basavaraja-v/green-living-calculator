import { Metadata } from 'next'
import Link from 'next/link'

type Post = {
    title: string;
    content: string;
    date: string;
}

type Posts = {
    [key: string]: Post;
}

const posts: Posts = {
    '10-ways-to-reduce-carbon-footprint': {
        title: '10 Easy Ways to Reduce Your Carbon Footprint',
        content: 'Here are 10 simple ways to reduce your carbon footprint: 1. Use energy-efficient appliances, 2. Reduce meat consumption, 3. Use public transportation or carpool, 4. Recycle and compost, 5. Use reusable bags and water bottles, 6. Plant trees or support reforestation projects, 7. Reduce water consumption, 8. Buy local and seasonal produce, 9. Use renewable energy sources, 10. Educate others about climate change and sustainability.',
        date: '2024-05-01',
    },
    'diet-impact-on-environment': {
        title: 'The Impact of Diet on the Environment',
        content: 'Your diet choices can significantly affect the environment. Plant-based diets generally have a lower carbon footprint due to reduced land use, water consumption, and greenhouse gas emissions associated with animal agriculture. Choosing locally sourced, seasonal produce can further reduce your environmental impact by minimizing transportation emissions.',
        date: '2024-05-05',
    },
    'sustainable-transportation-guide': {
        title: 'Sustainable Transportation: A Comprehensive Guide',
        content: 'Sustainable transportation options include walking, cycling, public transit, and electric vehicles. By choosing these alternatives to traditional fossil fuel-powered vehicles, you can significantly reduce your carbon footprint. Additionally, carpooling and optimizing your travel routes can help minimize emissions when driving is necessary.',
        date: '2024-05-10',
    },
    'eco-friendly-home-guide': {
        title: 'How to Create an Eco-Friendly Home',
        content: 'Creating an eco-friendly home involves making sustainable choices in energy use, water consumption, and waste management. Some key steps include installing energy-efficient appliances, using LED light bulbs, improving insulation, collecting rainwater, and implementing a comprehensive recycling and composting system.',
        date: '2024-05-15',
    },
    'importance-of-renewable-energy': {
        title: 'The Importance of Renewable Energy',
        content: 'Renewable energy sources such as solar, wind, and hydroelectric power are crucial for reducing our dependence on fossil fuels and mitigating climate change. These clean energy sources produce little to no greenhouse gas emissions and can help create a more sustainable and resilient energy infrastructure.',
        date: '2024-05-20',
    },
    'reducing-plastic-waste': {
        title: 'Reducing Plastic Waste: Tips and Tricks',
        content: 'Reducing plastic waste is essential for protecting our environment, particularly our oceans. Some effective strategies include using reusable bags, water bottles, and food containers, avoiding single-use plastics, choosing products with minimal packaging, and properly recycling plastic items when necessary.',
        date: '2024-05-25',
    },
    'sustainable-fashion-guide': {
        title: 'Sustainable Fashion: Making Ethical Clothing Choices',
        content: 'Sustainable fashion involves making ethical choices in clothing production and consumption. This includes choosing garments made from eco-friendly materials, supporting brands with fair labor practices, buying second-hand or vintage clothing, and extending the life of your clothes through proper care and repair.',
        date: '2024-05-30',
    },
    'water-conservation-guide': {
        title: 'Water Conservation: Why It Matters and How to Do It',
        content: 'Water conservation is crucial for preserving this vital resource and reducing energy consumption associated with water treatment and distribution. Simple steps like fixing leaks, using water-efficient appliances, collecting rainwater, and being mindful of water use in daily activities can make a significant impact.',
        date: '2024-06-04',
    },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = posts[params.slug as keyof typeof posts]
    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        }
    }
    return {
        title: `${post.title} | Green Living Blog`,
        description: `Learn about ${post.title.toLowerCase()} and how it affects your carbon footprint and the environment.`,
        keywords: `${post.title.toLowerCase()}, carbon footprint, sustainability, eco-friendly, green living`,
    }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = posts[params.slug as keyof typeof posts]

    if (!post) {
        return (
            <div className="min-h-screen p-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-red-800">Post Not Found</h1>
                <p className="text-center dark:text-black">
                    Sorry, the requested blog post could not be found.
                    <Link href="/blog" className="text-green-600 hover:underline ml-2">
                        Return to blog
                    </Link>
                </p>
            </div>
        )
    }

    return (
        <div className="min-h-screen p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-green-800">{post.title}</h1>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <p className="mb-4 text-gray-600 dark:text-black">Published on: {post.date}</p>
                <p className="mb-6 dark:text-black">{post.content}</p>
                <Link href="/blog" className="text-green-600 hover:underline">
                    ← Back to blog
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