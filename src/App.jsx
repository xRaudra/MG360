import { useState } from 'react';
import './index.css';

import PhoneFrame from './components/PhoneFrame';
import BottomNav from './components/BottomNav';

import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import DoctorsScreen from './screens/DoctorsScreen';
import HospitalsScreen from './screens/HospitalsScreen';
import TreatmentDetailScreen from './screens/TreatmentDetailScreen';
import DoctorDetailScreen from './screens/DoctorDetailScreen';
import HospitalDetailScreen from './screens/HospitalDetailScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import JourneyScreen from './screens/JourneyScreen';
import ChatScreen from './screens/ChatScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ContactScreen from './screens/ContactScreen';

// Screens that show the bottom nav
const mainScreens = ['home', 'explore', 'journey', 'chat', 'profile'];

// Map bottom nav keys to screen keys
const navMap = {
  home: 'home',
  explore: 'explore',
  journey: 'journey',
  chat: 'chat',
  profile: 'profile',
};

export default function App() {
  const [screen, setScreen] = useState('splash');
  const [screenData, setScreenData] = useState(null);

  const navigate = (target, data = null) => {
    setScreenData(data);
    setScreen(target);
  };

  const renderScreen = () => {
    const props = { onNavigate: navigate, data: screenData };
    switch (screen) {
      case 'splash':       return <SplashScreen {...props} />;
      case 'onboarding':   return <OnboardingScreen {...props} />;
      case 'welcome':      return <WelcomeScreen {...props} />;
      case 'login':        return <LoginScreen {...props} />;
      case 'home':         return <HomeScreen {...props} />;
      case 'explore':      return <ExploreScreen {...props} />;
      case 'treatment':    return <ExploreScreen {...props} />;
      case 'doctors':      return <DoctorsScreen {...props} />;
      case 'hospitals':    return <HospitalsScreen {...props} />;
      case 'treatmentDetail': return <TreatmentDetailScreen {...props} />;
      case 'doctorDetail': return <DoctorDetailScreen {...props} />;
      case 'hospitalDetail': return <HospitalDetailScreen {...props} />;
      case 'journey':      return <JourneyScreen {...props} />;
      case 'chat':         return <ChatScreen {...props} />;
      case 'notifications': return <NotificationsScreen {...props} />;
      case 'profile':      return <ProfileScreen {...props} />;
      case 'contact':      return <ContactScreen {...props} />;
      default:             return <HomeScreen {...props} />;
    }
  };

  const showNav = mainScreens.includes(screen);
  const activeTab = Object.entries(navMap).find(([, v]) => v === screen)?.[0] || 'home';

  return (
    <PhoneFrame>
      <div className="flex flex-col h-full bg-transparent">
        <div className="flex-1 overflow-hidden relative">
          {renderScreen()}
        </div>
        {showNav && (
          <BottomNav
            active={activeTab}
            onNavigate={(key) => navigate(navMap[key])}
          />
        )}
      </div>
    </PhoneFrame>
  );
}
