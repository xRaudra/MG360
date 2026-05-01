export default function PhoneFrame({ children }) {
  return (
    <div
      className="flex items-center justify-center w-full bg-[#0F172A]"
      style={{ minHeight: '100dvh' }}
    >
      <div
        className="relative overflow-hidden bg-[#F1F5F9] w-full sm:w-[390px] sm:rounded-[44px] sm:shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
        style={{ height: '100dvh', maxHeight: '844px' }}
      >
        {children}
      </div>
    </div>
  );
}
