import BackButton from '../components/BackButton';

export default function ChatScreen({ onNavigate, isGuest = false }) {
  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* Header */}
      <div className="px-4 pt-4 pb-4">
        <div className="flex items-center gap-3">
          <BackButton onPress={() => onNavigate('home')} />
          <h2 className="font-bold text-lg" style={{ color: '#313131' }}>
            Care Co-ordinator
          </h2>
        </div>
      </div>

    </div>
  );
}
