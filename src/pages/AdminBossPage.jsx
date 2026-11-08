import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { apiService } from '../services/api';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Users, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Search, 
  Filter, 
  Eye, 
  EyeOff, 
  LogOut, 
  RefreshCw, 
  Send, 
  Phone, 
  Mail, 
  Building2, 
  Calendar, 
  Trash2, 
  Edit3, 
  Download, 
  Plus, 
  X, 
  FileText,
  Printer,
  ChevronRight
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function AdminBossPage() {
  const navigate = useNavigate();

  // Authentication State
  const [user, setUser] = useState(() => apiService.getStoredUser());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  // Dashboard Data State
  const [inquiries, setInquiries] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isBackendLive, setIsBackendLive] = useState(false);

  // Modal State
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Quick New Lead Form State
  const [newLead, setNewLead] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    eventType: 'Mall Activation',
    venue: '',
    durationDays: 1,
    notes: '',
    quotedAmount: '₹50,000'
  });

  // Verify Backend Health on Mount
  useEffect(() => {
    apiService.checkHealth().then(res => setIsBackendLive(res.isLive));
  }, []);

  // Fetch Inquiries when authenticated
  const fetchInquiries = async () => {
    if (!user) return;
    setLoadingData(true);
    try {
      const data = await apiService.getInquiries();
      setInquiries(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchInquiries();
    }
  }, [user]);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoggingIn(true);

    try {
      const res = await apiService.loginAdmin(email, password);
      if (res.success) {
        setUser(res.user);
        setEmail('');
        setPassword('');
        showNotification("Welcome back, Executive Administrator.");
      } else {
        setLoginError(res.error || 'Authentication failed. Please verify credentials.');
      }
    } catch (err) {
      setLoginError('Server error while logging in.');
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = () => {
    apiService.logout();
    setUser(null);
    setSelectedInquiry(null);
  };

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Status Change Handler
  const handleUpdateStatus = async (id, newStatus) => {
    setStatusUpdating(true);
    const res = await apiService.updateInquiry(id, { status: newStatus });
    setStatusUpdating(false);
    if (res.success) {
      setInquiries(prev => prev.map(i => i.id === id ? { ...i, status: newStatus } : i));
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry(prev => ({ ...prev, status: newStatus }));
      }
      showNotification(`Order ${id} marked as ${newStatus.toUpperCase()}`);
    }
  };

  // Delete Handler
  const handleDeleteInquiry = async (id) => {
    if (!window.confirm(`Are you sure you want to delete inquiry ${id}?`)) return;
    const res = await apiService.deleteInquiry(id);
    if (res.success) {
      setInquiries(prev => prev.filter(i => i.id !== id));
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
      showNotification(`Inquiry ${id} removed.`);
    }
  };

  // Create Manual Lead Handler
  const handleCreateLead = async (e) => {
    e.preventDefault();
    const res = await apiService.submitClientInquiry({
      ...newLead,
      source: 'manual_admin_entry',
      totalCrew: 4,
      totalMaterials: 2
    });
    if (res.success) {
      setInquiries(prev => [res.inquiry, ...prev]);
      setShowCreateModal(false);
      setNewLead({
        name: '',
        company: '',
        phone: '',
        email: '',
        eventType: 'Mall Activation',
        venue: '',
        durationDays: 1,
        notes: '',
        quotedAmount: '₹50,000'
      });
      showNotification(`New client record ${res.id} created!`);
    }
  };

  // Filter inquiries
  const filteredInquiries = inquiries.filter(item => {
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const s = searchTerm.toLowerCase();
    const matchesSearch = !searchTerm || 
      (item.name && item.name.toLowerCase().includes(s)) ||
      (item.company && item.company.toLowerCase().includes(s)) ||
      (item.venue && item.venue.toLowerCase().includes(s)) ||
      (item.phone && item.phone.includes(s)) ||
      (item.id && item.id.toLowerCase().includes(s));
    return matchesStatus && matchesSearch;
  });

  // Calculate Metrics
  const totalCount = inquiries.length;
  const newCount = inquiries.filter(i => i.status === 'new').length;
  const activePipeline = inquiries.filter(i => i.status === 'quoted' || i.status === 'in_review').length;
  const totalHeadcount = inquiries.reduce((acc, i) => acc + (i.totalCrew || 0), 0);
  const confirmedCount = inquiries.filter(i => i.status === 'confirmed').length;

  // Export CSV
  const handleExportCSV = () => {
    const headers = ["Ref ID", "Date", "Client Name", "Company", "Phone", "Email", "Event Type", "Venue", "Crew Total", "Status", "Quoted Value"];
    const rows = filteredInquiries.map(i => [
      i.id,
      new Date(i.createdAt).toLocaleDateString(),
      `"${i.name || ''}"`,
      `"${i.company || ''}"`,
      `"${i.phone || ''}"`,
      `"${i.email || ''}"`,
      `"${i.eventType || ''}"`,
      `"${i.venue || ''}"`,
      i.totalCrew || 0,
      i.status || 'new',
      `"${i.quotedAmount || 'Pending'}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `pristine_decore_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification("Leads spreadsheet exported successfully.");
  };

  // =========================================================================
  // VIEW: 1. UNINITIALIZED / LOGIN SCREEN
  // =========================================================================
  if (!user) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-4 sm:p-6 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
        <div className="max-w-md w-full space-y-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Logo & Header */}
          <div className="text-center space-y-3">
            <div className="flex justify-center mb-2">
              <Logo size="lg" variant="light" showTagline={false} />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono tracking-widest uppercase">
              <Lock className="w-3 h-3 text-amber-400" />
              <span>Restricted Executive Gateway</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Executive Command Portal
            </h1>
            <p className="text-slate-400 text-xs">
              Direct access for Syed Inam, Razak Ahmed Khan & Syed Haamed Ali.
            </p>
          </div>

          {loginError && (
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-3">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Executive ID / Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@me"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Administrative Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Quick Fill Helper Pill */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
              <span>Designated Key: <code className="text-amber-400 font-mono">admin@me</code></span>
              <button
                type="button"
                onClick={() => {
                  setEmail('admin@me');
                  setPassword('admin@123');
                }}
                className="text-amber-400 hover:underline font-mono"
              >
                Auto-fill
              </button>
            </div>

            <button
              type="submit"
              disabled={loggingIn}
              className="w-full py-3.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-soft-gold hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loggingIn ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <Key className="w-4 h-4" />
                  <span>Authenticate Session</span>
                </>
              )}
            </button>
          </form>

          <div className="border-t border-slate-800 pt-4 text-center">
            <Link to="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              ← Return to Public Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW: 2. AUTHENTICATED EXECUTIVE DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-900 pb-20 selection:bg-amber-200">
      
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-500/40 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Executive Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <Link to="/">
              <Logo size="md" variant="dark" showTagline={false} />
            </Link>
            <div className="h-6 w-px bg-slate-300 hidden sm:block"></div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-lg font-bold text-slate-900">
                  Command Center
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-900 border border-amber-200">
                  /adminboss
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Pristine Decore Executive Portal • pristinedecore.com
              </p>
            </div>
          </div>

          {/* Right Action Icons & Profile */}
          <div className="flex items-center gap-3">
            {/* Live Backend Indicator */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs">
              <span className={`w-2 h-2 rounded-full ${isBackendLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
              <span className="text-[11px] font-medium">
                {isBackendLive ? 'Render Backend Live' : 'Active Local Session'}
              </span>
            </div>

            <button
              onClick={fetchInquiries}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Refresh Inquiries"
            >
              <RefreshCw className={`w-4 h-4 ${loadingData ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={() => setShowCreateModal(true)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-1.5 shadow-soft-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Log New Lead</span>
            </button>

            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

            {/* User Pill & Logout */}
            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold text-slate-900">{user.email}</div>
                <div className="text-[10px] text-amber-700 font-semibold">{user.role}</div>
              </div>
              <button
                onClick={handleLogout}
                className="p-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors"
                title="Log Out of Admin Session"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* KPI Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-luxury card-luxury space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Total Inquiries</span>
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <FileText className="w-4 h-4" />
              </div>
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">{totalCount}</div>
            <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>{newCount} New Unreviewed</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-luxury card-luxury space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Active Pipeline</span>
              <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">{activePipeline}</div>
            <div className="text-[11px] text-slate-500 font-medium">
              Quoted & Under Review
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-luxury card-luxury space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Crew Headcount</span>
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">{totalHeadcount}</div>
            <div className="text-[11px] text-slate-500 font-medium">
              Requested Staff Across Events
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-luxury card-luxury space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Confirmed Bookings</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">{confirmedCount}</div>
            <div className="text-[11px] text-emerald-700 font-medium">
              Advance Paid & Scheduled
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-luxury space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by client name, company, mall venue, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
              />
            </div>

            {/* Status Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'All' },
                { id: 'new', label: 'New' },
                { id: 'in_review', label: 'In Review' },
                { id: 'quoted', label: 'Quoted' },
                { id: 'confirmed', label: 'Confirmed' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    statusFilter === tab.id
                      ? 'bg-amber-600 text-white shadow-soft-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}

              <button
                onClick={handleExportCSV}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-colors ml-auto sm:ml-2"
                title="Export Filtered CSV"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>

          </div>
        </div>

        {/* Inquiries Table */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-luxury overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px] font-bold">
                  <th className="py-4 px-4 sm:px-6">Ref & Date</th>
                  <th className="py-4 px-4">Client & Company</th>
                  <th className="py-4 px-4">Direct Contact</th>
                  <th className="py-4 px-4">Target Venue</th>
                  <th className="py-4 px-4 text-center">Crew Count</th>
                  <th className="py-4 px-4 text-center">Status</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredInquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400 italic">
                      No event inquiries matching your filters.
                    </td>
                  </tr>
                ) : (
                  filteredInquiries.map((inq) => {
                    const statusColors = {
                      new: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                      in_review: 'bg-amber-50 text-amber-800 border-amber-200',
                      quoted: 'bg-blue-50 text-blue-800 border-blue-200',
                      confirmed: 'bg-purple-50 text-purple-800 border-purple-200',
                      completed: 'bg-slate-100 text-slate-800 border-slate-200'
                    };

                    const waMessage = `Hi ${inq.name}! This is Pristine Decore regarding your event inquiry (${inq.id}) for ${inq.venue || 'your upcoming event'}. We have prepared your quotation brief.`;

                    return (
                      <tr key={inq.id} className="hover:bg-slate-50/70 transition-colors group">
                        
                        {/* Ref & Date */}
                        <td className="py-4 px-4 sm:px-6">
                          <span className="font-mono font-bold text-slate-900 block">{inq.id}</span>
                          <span className="text-[10px] text-slate-400">
                            {new Date(inq.createdAt).toLocaleDateString()}
                          </span>
                        </td>

                        {/* Client & Brand */}
                        <td className="py-4 px-4">
                          <div className="font-bold text-slate-900">{inq.name}</div>
                          <div className="text-[11px] text-slate-500">{inq.company || 'Direct Brand'}</div>
                        </td>

                        {/* Phone & WhatsApp */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-slate-700">{inq.phone}</span>
                            <a
                              href={CONTACT_CONFIG.getWhatsAppUrl(waMessage, inq.phone.replace(/[^0-9]/g, ''))}
                              target="_blank"
                              rel="noreferrer"
                              className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center hover:bg-emerald-100"
                              title="Chat with client on WhatsApp"
                            >
                              <Send className="w-3 h-3" />
                            </a>
                          </div>
                          {inq.email && <span className="text-[10px] text-slate-400 block">{inq.email}</span>}
                        </td>

                        {/* Venue */}
                        <td className="py-4 px-4">
                          <span className="text-slate-800 font-medium block truncate max-w-[180px]">
                            {inq.venue || 'TBD'}
                          </span>
                          <span className="text-[10px] text-slate-400">{inq.eventType}</span>
                        </td>

                        {/* Headcount */}
                        <td className="py-4 px-4 text-center">
                          <span className="inline-block px-2.5 py-1 rounded-xl bg-slate-100 font-bold text-slate-800">
                            {inq.totalCrew || 0} Staff
                          </span>
                        </td>

                        {/* Status Select */}
                        <td className="py-4 px-4 text-center">
                          <select
                            value={inq.status}
                            onChange={(e) => handleUpdateStatus(inq.id, e.target.value)}
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-full border focus:outline-none cursor-pointer ${
                              statusColors[inq.status] || 'bg-slate-100 text-slate-800'
                            }`}
                          >
                            <option value="new">New Lead</option>
                            <option value="in_review">In Review</option>
                            <option value="quoted">Quoted</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                          </select>
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-4 text-right space-x-1.5 whitespace-nowrap">
                          <button
                            onClick={() => setSelectedInquiry(inq)}
                            className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs transition-colors"
                          >
                            View Brief
                          </button>
                          <button
                            onClick={() => handleDeleteInquiry(inq.id)}
                            className="p-1.5 rounded-xl hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>

                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* ========================================================================= */}
      {/* MODAL 1: VIEW FULL CLIENT BRIEF & DISPATCH DESK */}
      {/* ========================================================================= */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedInquiry(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="border-b border-slate-100 pb-4 pr-10">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-800 text-sm bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200">
                  {selectedInquiry.id}
                </span>
                <span className="text-xs text-slate-400">
                  Received {new Date(selectedInquiry.createdAt).toLocaleString()}
                </span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-slate-900 mt-2">
                {selectedInquiry.name} — {selectedInquiry.company}
              </h2>
            </div>

            {/* Quick Contact & Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 text-xs">
              <div>
                <span className="text-slate-400 font-semibold uppercase block text-[10px]">Phone / WhatsApp</span>
                <span className="font-bold text-slate-900">{selectedInquiry.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold uppercase block text-[10px]">Target Venue</span>
                <span className="font-bold text-slate-900">{selectedInquiry.venue || 'TBD'}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold uppercase block text-[10px]">Duration</span>
                <span className="font-bold text-slate-900">{selectedInquiry.durationDays} Day(s)</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold uppercase block text-[10px]">Event Type</span>
                <span className="font-bold text-slate-900">{selectedInquiry.eventType}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold uppercase block text-[10px]">Current Status</span>
                <span className="font-bold text-amber-800 uppercase">{selectedInquiry.status}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold uppercase block text-[10px]">Quoted Value</span>
                <span className="font-bold text-emerald-700">{selectedInquiry.quotedAmount || 'Pending'}</span>
              </div>
            </div>

            {/* Manpower Breakdown */}
            {selectedInquiry.crew && Object.keys(selectedInquiry.crew).length > 0 && (
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500">
                  Requested Event Manpower ({selectedInquiry.totalCrew} Total)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {Object.entries(selectedInquiry.crew).map(([role, count]) => (
                    count > 0 && (
                      <div key={role} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <span className="capitalize text-slate-700">{role.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-bold text-slate-900">{count}x</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Production Breakdown */}
            {selectedInquiry.materials && Object.keys(selectedInquiry.materials).length > 0 && (
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500">
                  Custom Production Deliverables
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {Object.entries(selectedInquiry.materials).map(([item, count]) => (
                    count > 0 && (
                      <div key={item} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <span className="capitalize text-slate-700">{item.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-bold text-slate-900">{count}x</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Custom Notes / Wishlist */}
            {selectedInquiry.customRequest && (
              <div className="space-y-1 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs">
                <span className="font-bold text-amber-900 uppercase text-[10px]">Client Wishlist / Special Note:</span>
                <p className="text-slate-800 italic mt-0.5">"{selectedInquiry.customRequest}"</p>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <a
                href={CONTACT_CONFIG.getWhatsAppUrl(
                  `Hi ${selectedInquiry.name}! This is Pristine Decore regarding your event inquiry (${selectedInquiry.id}).`,
                  selectedInquiry.phone.replace(/[^0-9]/g, '')
                )}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-soft transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Message Client on WhatsApp</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Brief</span>
                </button>

                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-200 text-slate-800"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: MANUAL CLIENT LEAD LOGGER */}
      {/* ========================================================================= */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 relative">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-heading text-xl font-bold text-slate-900">Log Offline / Walk-in Lead</h3>
              <p className="text-slate-500 text-xs">Record telephone or in-person event inquiries.</p>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={newLead.name}
                    onChange={(e) => setNewLead(p => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. Vikram Seth"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Company / Brand</label>
                  <input
                    type="text"
                    value={newLead.company}
                    onChange={(e) => setNewLead(p => ({ ...p, company: e.target.value }))}
                    placeholder="e.g. Puma India"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={newLead.phone}
                    onChange={(e) => setNewLead(p => ({ ...p, phone: e.target.value }))}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={newLead.email}
                    onChange={(e) => setNewLead(p => ({ ...p, email: e.target.value }))}
                    placeholder="client@puma.com"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Mall / Venue</label>
                  <input
                    type="text"
                    value={newLead.venue}
                    onChange={(e) => setNewLead(p => ({ ...p, venue: e.target.value }))}
                    placeholder="Phoenix Marketcity"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Estimated Budget</label>
                  <input
                    type="text"
                    value={newLead.quotedAmount}
                    onChange={(e) => setNewLead(p => ({ ...p, quotedAmount: e.target.value }))}
                    placeholder="₹75,000"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Brief / Notes</label>
                <textarea
                  rows={3}
                  value={newLead.notes}
                  onChange={(e) => setNewLead(p => ({ ...p, notes: e.target.value }))}
                  placeholder="Need 4 promoters for weekend roadshow, 2 standees and 1 backdrop..."
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold"
                >
                  Save Lead Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

