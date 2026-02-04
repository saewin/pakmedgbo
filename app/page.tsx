import LandingPageClient from './LandingPageClient';
import LatestNews from './components/LatestNews';

export default function Home() {
  return (
    <div>
      {/* ส่วนหน้า Landing Page สวยๆ (Client Component) */}
      <LandingPageClient />

      {/* ส่วนบทความจาก WordPress (Server Component) */}
      <LatestNews />

      {/* Footer (แยกออกมาเพื่อให้โค้ดสะอาด) */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">P</div>
              <span className="font-bold text-lg text-white">PakMed <span className="text-green-500">GBO</span></span>
            </div>
            <div className="text-sm">
              &copy; 2024 PakMed GBO. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
