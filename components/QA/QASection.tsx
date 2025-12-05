
import QAItem from './QAItem';

const qaData = [
  {
    question: 'Which calendar provider(s) is Notion Calendar compatible with?',
    answer: 'Currently, Notion Calendar integrates and syncs with Google Calendar accounts and Apple iCloud-synced Calendars. Adding support for other calendar providers such as Outlook is on our roadmap.',
  },
  {
    question: 'Is Notion Calendar available on mobile devices?',
    answer: 'Yes, Notion Calendar is available for iPhone and Android devices. We know some users are looking for an optimized version for tablet devices, such as iPad, and are working to make Notion Calendar the best experience on all platforms.',
  },
  {
    question: 'Does Notion Calendar bring Google Calendar sync to Notion?',
    answer: 'Notion Calendar allows you to view your Notion database items alongside your Google Calendar events. This offers a streamlined way to see project timelines and task due dates alongside other scheduled events.',
  },
];

const QASection = () => {
  return (
    <section className="py-[200px] bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Questions & answers
        </h2>
        <div className="max-w-5xl mx-auto">
          {qaData.map((item, index) => (
            <QAItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QASection;
