import {
  LayoutDashboard,
  ShoppingBag,
  FileText,
  Users,
  Settings as SettingsIcon,
} from 'lucide-react';

export const salesData = [
  { month: 'Jan', value: 12000 },
  { month: 'Feb', value: 15000 },
  { month: 'Mar', value: 18000 },
  { month: 'Apr', value: 22000 },
  { month: 'May', value: 28000 },
  { month: 'Jun', value: 32000 },
];

export const themeData = [
  { name: 'Jawa Elegan', value: 35, color: '#d4af37' },
  { name: 'Modern Sakura', value: 25, color: '#c9a663' },
  { name: 'Sunda Klasik', value: 20, color: '#b8964f' },
  { name: 'Others', value: 20, color: '#8a7038' },
];

export const recentActivity = [
  { id: 1, text: 'Trdfs paliral', time: '○', icon: '⚙️' },
  { id: 2, text: 'Aciver Ddlemas', time: '○', icon: '💰' },
  { id: 3, text: 'Corel Themes', time: '○', icon: '📧' },
  { id: 4, text: 'Tdireal alLsm', time: '○', icon: '🔒' },
  { id: 5, text: 'Reeart Activity', time: '○', icon: '⚙️' },
];

export const menuItems = [
  { id: 'loach', label: 'Loach', icon: LayoutDashboard, badge: null },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
  { id: 'orders', label: 'Orders', icon: ShoppingBag, badge: null },
  { id: 'templates', label: 'Templates', icon: FileText, badge: null },
  { id: 'invitations', label: 'Invitations', icon: FileText, badge: null },
  { id: 'users', label: 'Users', icon: Users, badge: null },
  { id: 'settings', label: 'Settings', icon: SettingsIcon, badge: null },
];
