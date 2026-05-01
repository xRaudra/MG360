export const treatments = [
  { id: 1, name: 'Knee Replacement', category: 'Orthopedics', price: '$4,500', duration: '7–10 days', rating: 4.9, reviews: 342, icon: '🦴', popular: true },
  { id: 2, name: 'Cardiac Bypass Surgery', category: 'Cardiology', price: '$7,200', duration: '14–21 days', rating: 4.8, reviews: 218, icon: '❤️', popular: true },
  { id: 3, name: 'Liver Transplant', category: 'Transplant', price: '$28,000', duration: '30–45 days', rating: 4.9, reviews: 95, icon: '🫀', popular: false },
  { id: 4, name: 'Hip Replacement', category: 'Orthopedics', price: '$5,100', duration: '7–10 days', rating: 4.7, reviews: 287, icon: '🦴', popular: true },
  { id: 5, name: 'Spine Surgery', category: 'Neurology', price: '$6,800', duration: '10–14 days', rating: 4.8, reviews: 156, icon: '🧠', popular: false },
  { id: 6, name: 'Cancer Treatment', category: 'Oncology', price: '$12,000', duration: '21–60 days', rating: 4.9, reviews: 203, icon: '🩺', popular: true },
  { id: 7, name: 'Eye Surgery (LASIK)', category: 'Ophthalmology', price: '$900', duration: '2–3 days', rating: 4.8, reviews: 512, icon: '👁️', popular: true },
  { id: 8, name: 'Dental Implants', category: 'Dentistry', price: '$800', duration: '3–5 days', rating: 4.7, reviews: 421, icon: '🦷', popular: false },
];

export const categories = [
  { id: 1, name: 'Cardiology', icon: '❤️', color: '#EF4444' },
  { id: 2, name: 'Orthopedics', icon: '🦴', color: '#F59E0B' },
  { id: 3, name: 'Oncology', icon: '🩺', color: '#8B5CF6' },
  { id: 4, name: 'Neurology', icon: '🧠', color: '#06B6D4' },
  { id: 5, name: 'Transplant', icon: '🫀', color: '#EC4899' },
  { id: 6, name: 'Ophthalmology', icon: '👁️', color: '#10B981' },
  { id: 7, name: 'Dentistry', icon: '🦷', color: '#3B82F6' },
  { id: 8, name: 'Fertility', icon: '👶', color: '#F97316' },
];

export const doctors = [
  { id: 1, name: 'Dr. Rajesh Sharma', specialization: 'Cardiothoracic Surgeon', hospital: 'Apollo Hospital', city: 'Delhi', experience: '22 yrs', rating: 4.9, reviews: 1240, fee: '$80', avatar: 'RS', available: true, languages: ['English', 'Hindi'] },
  { id: 2, name: 'Dr. Priya Mehta', specialization: 'Orthopedic Surgeon', hospital: 'Fortis Hospital', city: 'Mumbai', experience: '18 yrs', rating: 4.8, reviews: 987, fee: '$70', avatar: 'PM', available: true, languages: ['English', 'Hindi', 'Gujarati'] },
  { id: 3, name: 'Dr. Arjun Nair', specialization: 'Neurosurgeon', hospital: 'AIIMS', city: 'Delhi', experience: '25 yrs', rating: 4.9, reviews: 2105, fee: '$90', avatar: 'AN', available: false, languages: ['English', 'Malayalam'] },
  { id: 4, name: 'Dr. Sunita Reddy', specialization: 'Oncologist', hospital: 'Tata Memorial', city: 'Mumbai', experience: '20 yrs', rating: 4.8, reviews: 856, fee: '$85', avatar: 'SR', available: true, languages: ['English', 'Telugu'] },
  { id: 5, name: 'Dr. Vikram Singh', specialization: 'Transplant Surgeon', hospital: 'Max Hospital', city: 'Delhi', experience: '30 yrs', rating: 5.0, reviews: 654, fee: '$120', avatar: 'VS', available: true, languages: ['English', 'Hindi'] },
  { id: 6, name: 'Dr. Anita Patel', specialization: 'Ophthalmologist', hospital: 'Sankara Nethralaya', city: 'Chennai', experience: '15 yrs', rating: 4.7, reviews: 1432, fee: '$60', avatar: 'AP', available: true, languages: ['English', 'Tamil', 'Gujarati'] },
];

export const hospitals = [
  { id: 1, name: 'Apollo Hospitals', city: 'Delhi & 70+ locations', specialties: ['Cardiology', 'Orthopedics', 'Oncology', 'Neurology'], rating: 4.9, beds: 10000, accreditation: ['JCI', 'NABL'], founded: 1983, logo: 'AH' },
  { id: 2, name: 'Fortis Healthcare', city: 'Mumbai, Delhi, Bangalore', specialties: ['Orthopedics', 'Cardiac', 'Transplant'], rating: 4.8, beds: 4000, accreditation: ['JCI', 'NABH'], founded: 2001, logo: 'FH' },
  { id: 3, name: 'AIIMS New Delhi', city: 'New Delhi', specialties: ['All Specialties'], rating: 4.9, beds: 2478, accreditation: ['NABH', 'ISO'], founded: 1956, logo: 'AI' },
  { id: 4, name: 'Tata Memorial Centre', city: 'Mumbai', specialties: ['Oncology', 'Cancer Care'], rating: 4.9, beds: 629, accreditation: ['JCI'], founded: 1941, logo: 'TM' },
  { id: 5, name: 'Max Super Speciality', city: 'Delhi NCR', specialties: ['Cardiac', 'Neuro', 'Transplant'], rating: 4.7, beds: 3000, accreditation: ['JCI', 'NABH'], founded: 2000, logo: 'MS' },
  { id: 6, name: 'Kokilaben Hospital', city: 'Mumbai', specialties: ['Orthopedics', 'Neurology', 'Cardiac'], rating: 4.8, beds: 750, accreditation: ['JCI'], founded: 2009, logo: 'KH' },
];

export const journeySteps = [
  { id: 1, title: 'Consultation Booked', desc: 'Video call with Dr. Rajesh Sharma', date: 'Jan 15, 2025', time: '10:00 AM', status: 'done', icon: '📋' },
  { id: 2, title: 'Reports Submitted', desc: 'Blood work, MRI, ECG uploaded', date: 'Jan 18, 2025', time: '—', status: 'done', icon: '📄' },
  { id: 3, title: 'Treatment Plan Ready', desc: 'Cardiac Bypass — Apollo Delhi', date: 'Jan 20, 2025', time: '—', status: 'done', icon: '✅' },
  { id: 4, title: 'Travel Arrangements', desc: 'Flight: Lagos → Delhi via Dubai', date: 'Feb 01, 2025', time: '08:45 AM', status: 'active', icon: '✈️' },
  { id: 5, title: 'Admission', desc: 'Apollo Hospital, Room 412', date: 'Feb 03, 2025', time: '09:00 AM', status: 'upcoming', icon: '🏥' },
  { id: 6, title: 'Surgery', desc: 'Cardiac Bypass Procedure', date: 'Feb 05, 2025', time: '07:00 AM', status: 'upcoming', icon: '🔬' },
  { id: 7, title: 'Post-Op Recovery', desc: 'ICU → General Ward', date: 'Feb 06–14, 2025', time: '—', status: 'upcoming', icon: '💊' },
  { id: 8, title: 'Discharge & Return', desc: 'Return flight arranged', date: 'Feb 15, 2025', time: '—', status: 'upcoming', icon: '🏠' },
];

export const notifications = [
  { id: 1, type: 'appointment', title: 'Appointment Confirmed', body: 'Video consultation with Dr. Sharma on Jan 15 at 10 AM', time: '2 min ago', read: false },
  { id: 2, type: 'document', title: 'Report Review Complete', body: 'Dr. Mehta has reviewed your MRI report. See recommendations.', time: '1 hr ago', read: false },
  { id: 3, type: 'payment', title: 'Payment Received', body: 'Advance payment of $200 confirmed for Apollo Delhi.', time: '3 hrs ago', read: true },
  { id: 4, type: 'alert', title: 'Travel Reminder', body: 'Your flight to Delhi is in 3 days. Ensure you carry all reports.', time: 'Yesterday', read: true },
  { id: 5, type: 'message', title: 'New Message', body: 'Patient Care Coordinator: "Welcome! We are ready for your arrival."', time: 'Yesterday', read: true },
  { id: 6, type: 'appointment', title: 'Surgery Scheduled', body: 'Cardiac Bypass scheduled for Feb 5, 2025 at Apollo Hospital.', time: '2 days ago', read: true },
];

export const chatMessages = [
  { id: 1, sender: 'support', name: 'Care Team', text: 'Hello! Welcome to MG360. I\'m your dedicated care coordinator. How can I help you today?', time: '10:00 AM', avatar: 'CT' },
  { id: 2, sender: 'user', text: 'Hi! I need to know more about knee replacement surgery options in India.', time: '10:02 AM' },
  { id: 3, sender: 'support', name: 'Care Team', text: 'Great choice! India is one of the top destinations for orthopedic surgery. Would you like me to suggest top hospitals and doctors specializing in knee replacement?', time: '10:03 AM', avatar: 'CT' },
  { id: 4, sender: 'user', text: 'Yes please. Also, what\'s the approximate cost?', time: '10:04 AM' },
  { id: 5, sender: 'support', name: 'Care Team', text: 'Knee replacement in India typically costs $4,500–$6,500 depending on the hospital. This is 60–80% less than US/UK prices. Want me to prepare a detailed cost breakdown?', time: '10:05 AM', avatar: 'CT' },
];
