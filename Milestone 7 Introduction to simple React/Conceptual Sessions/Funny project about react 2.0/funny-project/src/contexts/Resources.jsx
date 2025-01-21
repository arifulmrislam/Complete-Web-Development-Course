export default function Resources() {
    const resources = [
        { name: 'Articles & Tutorials', icon: '📰' },
        { name: 'Video Guides & Talks', icon: '🎥' },
        { name: 'Books & Guides', icon: '📚' },
        { name: 'Courses & Video Series', icon: '🎓' },
        { name: 'Podcast Episodes', icon: '🎙️' },
        { name: 'Libraries', icon: '📦' },
        { name: 'Conferences', icon: '🌐' },
        { name: 'Companies', icon: '🏢' },
        { name: 'People', icon: '👥' },
        { name: 'Jobs', icon: '⚡' },
    ];

    return (
        <div className='bg-gray-100 p-6 rounded-md shadow-md w-64 mt-16 ml-20'>
            <h2 className='text-gray-700 font-bold text-lg mb-4'>RESOURCES</h2>
            <ul className='space-y-3'>
                {
                resources.map((resource, index) => (
                    <li key={index} className='flex items-center text-gray-600'>
                        <span className='text-xl mr-3'>{resource.icon}</span>
                        <span className='text-base'>{resource.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
