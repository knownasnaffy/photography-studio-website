import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      <main className="flex-grow pt-20"> {/* pt-20 to offset the fixed header */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
