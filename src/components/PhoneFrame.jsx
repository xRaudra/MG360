export default function PhoneFrame({ children }) {
  return (
    <div
      className="flex items-center justify-center w-full"
      style={{ minHeight: '100dvh', background: 'linear-gradient(135deg, #C4B5FD 0%, #93C5FD 50%, #F8FAFC 100%)' }}
    >
      <div
        className="relative overflow-hidden bg-app w-full sm:w-[390px] sm:rounded-[44px] sm:shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
        style={{ height: '100dvh', maxHeight: '844px' }}
      >
        {children}
      </div>
    </div>
  );
}
