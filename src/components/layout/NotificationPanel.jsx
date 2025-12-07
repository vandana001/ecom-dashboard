// import { X, Bug, User, Rss, Bell } from 'lucide-react';
// import { notifications, activities, contacts } from '../../data/mock-data';

// function NotificationPanel({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   const getIcon = (type) => {
//     switch (type) {
//       case 'bug':
//         return <Bug className="w-4 h-4" />;
//       case 'user':
//         return <User className="w-4 h-4" />;
//       case 'subscription':
//         return <Rss className="w-4 h-4" />;
//       default:
//         return <Bell className="w-4 h-4" />;
//     }
//   };

//   return (
//     <div className="w-80 bg-white border-l border-gray-100 flex flex-col h-screen overflow-y-auto">
//       {/* Header */}
//       <div className="p-5 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
//         <h2 className="font-semibold text-gray-900 text-lg">Notifications</h2>
//         <button 
//           onClick={onClose} 
//           className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
//         >
//           <X className="w-5 h-5 text-gray-600" />
//         </button>
//       </div>

//       {/* Notifications */}
//       <div className="p-5 border-b border-gray-100">
//         <div className="space-y-4">
//           {notifications.map((notification) => (
//             <div key={notification.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
//               <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
//                 {getIcon(notification.type)}
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm text-gray-900 leading-relaxed">{notification.message}</p>
//                 <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Activities */}
//       <div className="p-5 border-b border-gray-100">
//         <h3 className="font-semibold text-gray-900 mb-4">Activities</h3>
//         <div className="space-y-4">
//           {activities.map((activity) => (
//             <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
//               <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
//                 {activity.user.charAt(0)}
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm text-gray-900 leading-relaxed">
//                   <span className="font-medium">{activity.user}</span> {activity.action}
//                 </p>
//                 <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Contacts */}
//       <div className="p-5">
//         <h3 className="font-semibold text-gray-900 mb-4">Contacts</h3>
//         <div className="space-y-2">
//           {contacts.map((contact) => (
//             <div key={contact.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
//               <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
//                 {contact.name.split(' ').map(n => n[0]).join('')}
//               </div>
//               <span className="text-sm font-medium text-gray-900">{contact.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NotificationPanel;