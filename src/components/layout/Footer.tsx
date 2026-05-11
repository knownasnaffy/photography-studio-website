import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t thin-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-4xl mb-6 block tracking-widest uppercase">Lucky</Link>
            <p className="font-body-md text-on-surface/60 max-w-sm">
              Capturing the eternal moment through cinematic, narrative-driven photography.
            </p>
          </div>
          <div>
            <h4 className="font-label-sm mb-6 text-on-surface/40 uppercase tracking-widest">Connect</h4>
            <div className="flex flex-col gap-4 font-body-md">
              <a href="#" className="hover:text-primary-container transition-shutter">Instagram</a>
              <a href="#" className="hover:text-primary-container transition-shutter">Behance</a>
              <a href="#" className="hover:text-primary-container transition-shutter">Vero</a>
            </div>
          </div>
          <div>
            <h4 className="font-label-sm mb-6 text-on-surface/40 uppercase tracking-widest">Legal</h4>
            <div className="flex flex-col gap-4 font-body-md">
              <a href="#" className="hover:text-primary-container transition-shutter">Privacy Policy</a>
              <a href="#" className="hover:text-primary-container transition-shutter">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t thin-border text-center font-label-sm text-on-surface/40 uppercase tracking-widest">
          © {new Date().getFullYear()} Lucky Photography. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
