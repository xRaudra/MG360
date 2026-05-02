export default function PhoneFrame({ children }) {
  return (
    <div className="phone-outer">
      <div className="phone-inner bg-app">
        {children}
      </div>
    </div>
  );
}
