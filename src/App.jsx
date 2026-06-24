import { useState } from 'react';
import './index.css';
import { DEV_MODE } from './config/features';
import * as DevScreens   from './config/dev-screens';
import * as OwnerScreens from './config/owner-screens';

import PhoneFrame from './components/PhoneFrame';
import BottomNav from './components/BottomNav';

import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DoctorsScreen from './screens/DoctorsScreen';
import HospitalsScreen from './screens/HospitalsScreen';
import TreatmentDetailScreen from './screens/TreatmentDetailScreen';
import DoctorDetailScreen from './screens/DoctorDetailScreen';
import HospitalDetailScreen from './screens/HospitalDetailScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import GuestCountryScreen from './screens/GuestCountryScreen';
import GuestConditionScreen from './screens/GuestConditionScreen';
import GuestTimelineScreen from './screens/GuestTimelineScreen';
import GuestConfirmScreen from './screens/GuestConfirmScreen';
import ChatScreen from './screens/ChatScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import CareCircleScreen from './screens/CareCircleScreen';
import CaseStudiesScreen from './screens/CaseStudiesScreen';
import AddMemberScreen from './screens/AddMemberScreen';
import MemberDetailScreen from './screens/MemberDetailScreen';
import CaregiverJourneyScreen from './screens/CaregiverJourneyScreen';
import AcceptInviteScreen from './screens/AcceptInviteScreen';
import FreeQuoteScreen from './screens/FreeQuoteScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import TravelScreen from './screens/TravelScreen';
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import LanguageScreen from './screens/LanguageScreen';
import NotificationSettingsScreen from './screens/NotificationSettingsScreen';
import HelpFaqScreen from './screens/HelpFaqScreen';
import AppSettingsScreen from './screens/AppSettingsScreen';

// DEV MODE  → dev-screens.js (your work in progress)
// OWNER MODE → owner-screens.js (stable, client-facing)
// To reflect: say "reflect dev to owner" — only owner-screens.js changes
const S = DEV_MODE ? DevScreens : OwnerScreens;

// Screens that show the bottom nav
const mainScreens = ['home', 'explore', 'journey', 'profile'];

// Map bottom nav keys to screen keys
const navMap = {
  home: 'home',
  explore: 'explore',
  journey: 'journey',
  chat: 'chat',
  profile: 'profile',
};

const guestScreens = ['guestCountry', 'guestCondition', 'guestTimeline', 'guestConfirm'];

export default function App() {
  const [screen, setScreen] = useState('splash');
  const [screenData, setScreenData] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const [currentUser] = useState({ firstName: 'Saurabh' });

  const navigate = (target, data = null) => {
    if (target === 'home') {
      if (screen === 'login') {
        setIsGuest(false);                       // existing user → show progress
      } else if (guestScreens.includes(screen) || screen === 'createAccount') {
        setIsGuest(true);                        // guest or new account → initial state
      }
    }
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
      case 'createAccount': return <CreateAccountScreen {...props} />;
      case 'guestCountry':    return <GuestCountryScreen {...props} />;
      case 'guestCondition':  return <GuestConditionScreen {...props} />;
      case 'guestTimeline':   return <GuestTimelineScreen {...props} />;
      case 'guestConfirm':    return <GuestConfirmScreen {...props} />;
      case 'home':         return <HomeScreen {...props} isGuest={isGuest} />;
      case 'explore':      return <S.ExploreScreen {...props} />;
      case 'treatment':    return <S.ExploreScreen {...props} />;
      case 'doctors':      return <DoctorsScreen {...props} />;
      case 'hospitals':    return <HospitalsScreen {...props} />;
      case 'treatmentDetail': return <TreatmentDetailScreen {...props} />;
      case 'doctorDetail': return <DoctorDetailScreen {...props} />;
      case 'hospitalDetail': return <HospitalDetailScreen {...props} />;
      case 'journey':      return <S.JourneyScreen {...props} isGuest={isGuest} />;
      case 'chat':         return <ChatScreen {...props} isGuest={isGuest} userName={currentUser.firstName} />;
      case 'notifications': return <NotificationsScreen {...props} isGuest={isGuest} />;
      case 'profile':      return <S.ProfileScreen {...props} isGuest={isGuest} />;
      case 'contact':      return <S.ContactScreen {...props} />;
      case 'careCircle':       return <CareCircleScreen {...props} />;
      case 'whyMedGlobal': return <S.WhyMedGlobalScreen {...props} />;
      case 'whyIndia':     return <S.WhyIndiaScreen {...props} />;
      case 'caseStudies':      return <CaseStudiesScreen {...props} />;
      case 'addMember':        return <AddMemberScreen {...props} />;
      case 'memberDetail':     return <MemberDetailScreen {...props} />;
      case 'caregiverJourney': return <CaregiverJourneyScreen {...props} />;
      case 'acceptInvite':     return <AcceptInviteScreen {...props} />;
      case 'freeQuote':        return <FreeQuoteScreen {...props} />;
      case 'personal':         return <PersonalInfoScreen {...props} />;
      case 'language':         return <LanguageScreen {...props} />;
      case 'notifications':    return <NotificationSettingsScreen {...props} />;
      case 'help':             return <HelpFaqScreen {...props} />;
      case 'settings':         return <AppSettingsScreen {...props} />;
      case 'documents':          return <S.JourneyScreen {...props} />;
      case 'journeyDocuments':   return <DocumentsScreen {...props} />;
      case 'journeyTravel':      return <TravelScreen {...props} />;
      default:                 return <HomeScreen {...props} isGuest={isGuest} />;
    }
  };

  // Show nav for main screens + sub-screens reached from Profile
  const fromProfile = screenData?.from === 'profile';
  const showNav  = mainScreens.includes(screen) || (fromProfile && ['journeyDocuments', 'journeyTravel'].includes(screen));
  const activeTab = fromProfile ? 'profile' : (Object.entries(navMap).find(([, v]) => v === screen)?.[0] || 'home');

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
      {/* Dev mode badge — only visible to you, never to the owner */}
      {DEV_MODE && (
        <div style={{
          position: 'fixed', bottom: 12, right: 12, zIndex: 9999,
          background: '#1B4FBF', color: '#fff',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
          padding: '4px 10px', borderRadius: 100,
          fontFamily: 'DM Sans, sans-serif',
          boxShadow: '0 2px 8px rgba(27,79,191,0.4)',
          pointerEvents: 'none',
        }}>
          DEV MODE
        </div>
      )}
    </PhoneFrame>
  );
}
