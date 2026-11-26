import Link from 'next/link';
const projectsData = [
  {
    id: 1,
    title: 'Garage Automated License Plate Recognition System',
    description: 'An automated system for recognizing license plates.',
    tech: ['Python', 'OpenCV', 'MQTT'],
    year: 2026,
    link: 'https://github.com/lirichard1/garage-alpr',
  },
  {
    id: 2,
    title: 'Contest Submission for 6th Kibo Robot Programming Challenge (NASA/JAXA)',
    tech: ['Python', 'Java'] ,
    year: 2025,
    link: 'https://github.com/lirichard1/Kibo-Robot-Programming-Challenge',
  },
  {
    id: 3,
    title: "Aerospace Robotics Competition",
    description: "First place at Antelope Valley Regionals, Best Mission 1, Best Technical Presentation",
    year: 2024,
    tech: ['Mission Planner'],
  },
  {
    id: 4,
    title: "Synopsys Science Fair",
    description: "Built a semi-autonomous robot to collect badminton shuttlecocks. Won Honorable Mention.",
    year: 2023,
    tech: ['C++'],
    link: "github.com/lirichard1/shuttlecock-collector"
  }
];


export default function Projects() {
    // Group projects by year
    const groupedProjects = projectsData.reduce<Record<number, typeof projectsData>>(
        (acc, project) => {
            const year = project.year;
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(project);
            return acc;
        },
        {}
    );

    // Sort years newest to oldest
    const sortedYears = Object.keys(groupedProjects)
        .map(Number)
        .sort((a, b) => b - a);

    return (
        <>
        <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
        <Link href="/" className="inline-block self-start ml-4 mt-4 max-w-xs items-left gap-2 bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
            ← Back Home
        </Link>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    Check out my projects!
                </h1>

                {sortedYears.map((year) => (
                    <div key={year} className="w-full mt-8">
                        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-4">
                            {year}
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {groupedProjects[year].map((project) => (
                            <div key={project.id} className="border rounded-lg p-6 shadow-sm">
                                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                <p className="text-gray-600 mb-4 dark:text-gray-500">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((item) => (
                                    <span key={item} className="bg-gray-500 text-sm text-white dark: text-black px-2 py-1 rounded ">
                                    {item}
                                    </span>
                                ))}
                                </div>

                                <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 font-medium hover:underline"
                                >
                                View Source →
                                </a>
                            </div>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
        </div>
        </>
    );
}
