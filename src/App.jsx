import { useState, useEffect } from 'react';
import Header from './components/Header';
import ConfigPanel from './components/ConfigPanel';
import OutputMonitor from './components/OutputMonitor';

export default function App() {
  
  const [siteBooting, setSiteBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [currentSystemLog, setCurrentSystemLog] = useState('LOAD_KERNEL_MODULES');

  
  const [formData, setFormData] = useState({
  
    skills: '',
    experience: 'Intermediate',
    jobDescription: '',
    
  
    industry: 'IT',
    assetType: 'Cover Letter',
    wordCount: 400,           

    
    targetTitle: '',          
    contactInfo: '',          
    educationHistory: '',     
    certifications: ''        
  });
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const bootInterval = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(bootInterval);
          setTimeout(() => setSiteBooting(false), 600); 
          return 100;
        }
        
        const increment = Math.floor(Math.random() * 14) + 4;
        const nextProgress = Math.min(prev + increment, 100);

        if (nextProgress < 25) setCurrentSystemLog('ESTABLISHING_ENCRYPTED_PROXY_TUNNEL...');
        else if (nextProgress < 50) setCurrentSystemLog('PROBING_LOCAL_HARDWARE_DECK_REGISTERS...');
        else if (nextProgress < 75) setCurrentSystemLog('ALLOCATING_QUANTUM_COMPILER_MEMORY_BLOCKS...');
        else setCurrentSystemLog('SYS_HANDSHAKE_COMPLETE // ENTIRE_STUDIO_READY');

        return nextProgress;
      });
    }, 150);

    return () => clearInterval(bootInterval);
  }, []);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResults(null);

    try {
      const response = await fetch("http://localhost:8080/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.coverLetter || `Server returned status ${response.status}`);
      }
      
      setResults(data);
    } catch (error) {
      console.error("Pipeline failure:", error);
      alert(`Connection failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (siteBooting) {
    return (
      <div className="fixed inset-0 z-9999 bg-[#040405] text-emerald-400 font-mono flex flex-col items-center justify-center p-6 select-none antialiased">
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.04),rgba(0,255,0,0.02),rgba(0,0,255,0.04))] bg-size-[100%_4px,4px_100%] opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0%,transparent_75%)]" />

        
        <div className="max-w-lg w-full border border-emerald-500/30 bg-zinc-950/90 rounded-2xl p-8 relative shadow-[0_0_80px_rgba(16,185,129,0.06)] animate-fade-in">
          <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
          <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-emerald-400" />
          <span className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-emerald-400" />
          <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-emerald-400" />


          <div className="flex justify-between items-start mb-8 pb-4 border-b border-emerald-950/60">
            <div className="text-left">
              <h1 className="text-lg font-black tracking-[0.2em] text-zinc-100 uppercase">
                SHAYAN_PROG <span className="text-emerald-500">//</span> NETWORK
              </h1>
              <p className="text-[9px] text-zinc-500 tracking-widest mt-0.5 uppercase">SYSTEM_INITIAL_BOOT_SEQUENCE</p>
            </div>
            <div className="text-right text-[9px] text-emerald-500/40">
              SECURE_LOADER_v5.2
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-end text-xs tracking-wider">
              <span className="text-zinc-400 font-bold uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 animate-ping" />
                Compiling Core Workspace...
              </span>
              <span className="text-emerald-400 tabular-nums font-black text-sm drop-shadow-[0_0_6px_rgba(16,185,129,0.4)]">
                {bootProgress}%
              </span>
            </div>

            
            <div className="w-full h-2 bg-zinc-900/60 border border-zinc-800 rounded-full overflow-hidden p-px relative">
              <div 
                className="h-full bg-linear-to-r from-emerald-500 via-teal-400 to-emerald-400 rounded-full shadow-[0_0_12px_#10b981] transition-all duration-150 ease-out"
                style={{ width: `${bootProgress}%` }}
              />
            </div>

            
            <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 min-h-12 flex items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500/[0.01] via-transparent to-transparent" />
              <span className="text-[11px] text-emerald-400/90 font-bold tracking-wide uppercase select-text">
                &gt; {currentSystemLog}
              </span>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between text-[8px] text-zinc-600 tracking-widest font-semibold uppercase">
            <span>MEM_ALLOC: 0x7FFF_OK</span>
            <span>DIAGNOSTICS: NORMAL</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070708] text-zinc-100 font-sans antialiased selection:bg-emerald-500 selection:text-zinc-950 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-size-[100%_4px,3px_100%] pointer-events-none z-50 opacity-40" />
      
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col min-h-screen relative z-10">
        <Header />
        <main className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mt-8 grow">
          <div className="md:col-span-5 grid">
            <ConfigPanel 
              formData={formData} 
              onChange={handleChange} 
              onSubmit={handleSubmit} 
              loading={loading} 
            />
          </div>
          <div className="md:col-span-7">
            <OutputMonitor loading={loading} results={results} />
          </div>
        </main>
      </div>
    </div>
  );
}
