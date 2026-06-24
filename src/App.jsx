import { useState } from 'react';
import './index.css';
import { FEATURES } from './config/features';

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
import GuestCountryScreen from './screens/GuestCountryScreen';
import GuestConditionScreen from './screens/GuestConditionScreen';
import GuestTimelineScreen from './screens/GuestTimelineScreen';
import GuestConfirmScreen from './screens/GuestConfirmScreen';
import JourneyScreen from './screens/JourneyScreen';
import ChatScreen from './screens/ChatScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ContactScreen from './screens/ContactScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import CareCircleScreen from './screens/CareCircleScreen';
import WhyMedGlobalScreen from './screens/WhyMedGlobalScreen';
import WhyIndiaScreen from './screens/WhyIndiaScreen';
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
      // FEATURES.explore — flip to true in features.js when redesign is ready
      case 'explore':      return FEATURES.explore    ? null /* <ExploreScreenV2 /> */ : <ExploreScreen {...props} />;
      case 'treatment':    return FEATURES.explore    ? null /* <ExploreScreenV2 /> */ : <ExploreScreen {...props} />;
      case 'doctors':      return <DoctorsScreen {...props} />;
      case 'hospitals':    return <HospitalsScreen {...props} />;
      case 'treatmentDetail': return <TreatmentDetailScreen {...props} />;
      case 'doctorDetail': return <DoctorDetailScreen {...props} />;
      case 'hospitalDetail': return <HospitalDetailScreen {...props} />;
      // FEATURES.journey — flip to true in features.js when redesign is ready
      case 'journey':      return FEATURES.journey    ? null /* <JourneyScreenV2 /> */ : <JourneyScreen {...props} isGuest={isGuest} />;
      case 'chat':         return <ChatScreen {...props} isGuest={isGuest} userName={currentUser.firstName} />;
      case 'notifications': return <NotificationsScreen {...props} isGuest={isGuest} />;
      // FEATURES.profile — flip to true in features.js when redesign is ready
      case 'profile':      return FEATURES.profile    ? null /* <ProfileScreenV2 /> */ : <ProfileScreen {...props} isGuest={isGuest} />;
      // FEATURES.contact — flip to true in features.js when redesign is ready
      case 'contact':      return FEATURES.contact    ? null /* <ContactScreenV2 /> */ : <ContactScreen {...props} />;
      case 'careCircle':       return <CareCircleScreen {...props} />;
      // FEATURES.whyMedGlobal — flip to true in features.js when redesign is ready
      case 'whyMedGlobal': return FEATURES.whyMedGlobal ? null /* <WhyMedGlobalScreenV2 /> */ : <WhyMedGlobalScreen {...props} />;
      // FEATURES.whyIndia — flip to true in features.js when redesign is ready
      case 'whyIndia':     return FEATURES.whyIndia   ? null /* <WhyIndiaScreenV2 /> */ : <WhyIndiaScreen {...props} />;
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
      case 'documents':          return <JourneyScreen {...props} />;
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
    </PhoneFrame>
  );
}
