
import Image from 'next/image';

const integrations = [
  {
    icon: '/Icons/notion-icon.svg',
    title: 'Notion',
    description: 'Bring in important dates across workspaces into one calendar.',
  },
  {
    icon: '/Icons/google-calendar-icon.svg',
    title: 'Google Calendar',
    description: 'Connect Google Calendar with your existing Notion workspace.',
  },
  {
    icon: '/Icons/google-meet-icon.svg',
    title: 'Google Meet',
    description: 'Available by default with Google Calendar.',
  },
  {
    icon: '/Icons/zoom-icon.svg',
    title: 'Zoom',
    description: 'Create new Zoom meetings directly in Notion Calendar.',
  },
  {
    icon: '/Icons/apple-calendar-icon.svg',
    title: 'Apple Calendar',
    description: 'Create new Apple Calendar meetings directly in Notion.',
  },
  {
    icon: '/Icons/other-providers-icon.svg',
    title: 'Other providers',
    description: 'Add a custom link from other popular conferencing services.',
  },
];

const IntegrationsGrid = () => {
  return (
    <section className="py-12 mt-10">
      <div className="container mx-auto px-[150px]">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Designed to work with your favorite tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => (
            <div
              key={integration.title}
              className="bg-[#F7F7F5] rounded-xl p-6"
            >
              <Image src={integration.icon} alt={`${integration.title} icon`} width={24} height={24} />
              <h3 className="font-semibold text-lg mt-4 mb-2">
                {integration.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsGrid;
