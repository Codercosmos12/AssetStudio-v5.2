import  { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

function DecryptedText({ text, speed = 4 }) {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    if (!text) return;
    let currentIteration = 0;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*_+=-';
    const originalText = text;
    
    const interval = setInterval(() => {
      setDisplayText(() => {
        return originalText
          .split('')
          .map((char, index) => {
            if (index < currentIteration) return originalText[index];
            if (char === '\n') return '\n';
            if (char === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      });
      
      currentIteration += speed;
      if (currentIteration >= originalText.length + 1) {
        clearInterval(interval);
        setDisplayText(originalText);
      }
    }, 25);
    
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="whitespace-pre-line">{displayText}</span>;
}

export default function OutputMonitor({ loading, results }) {
  const [copiedSection, setCopiedSection] = useState(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [hudStage, setHudStage] = useState('INIT_COMPILER');
  
  const [showNamingModal, setShowNamingModal] = useState(false);
  const [fileNameInput, setFileNameInput] = useState('My_Professional_Asset');

  useEffect(() => {
    if (!loading) {
      setLoadProgress(0);
      return;
    }
    
    const progressInterval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) return 100;
        const jump = Math.floor(Math.random() * 8) + 2;
        const nextProgress = Math.min(prev + jump, 99); 
        
        if (nextProgress < 25) setHudStage('FETCHING_VIRTUAL_DOM_MAP');
        else if (nextProgress < 55) setHudStage('INJECTING_PROMPT_CONSTRAINTS');
        else if (nextProgress < 85) setHudStage('COMPILING_GROQ_SYNTAX_BLOCKS');
        else setHudStage('STREAMING_RESPONSIVE_MATRICES');
        
        return nextProgress;
      });
    }, 180);

    return () => clearInterval(progressInterval);
  }, [loading]);

  const handleCopy = (text, section) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const openDownloadModal = () => {
    if (!results || !results.documentBody) return;
    setShowNamingModal(true);
  };

  const executePDFDownload = () => {
    const finalFileName = fileNameInput.trim() !== "" ? fileNameInput.trim() : "Professional_Asset";

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(40, 40, 40); 

    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxLineWidth = pageWidth - (margin * 2); 
    
    const paragraphs = results.documentBody.split('\n');
    let verticalCursor = 30; 

    paragraphs.forEach((paragraph) => {
      const splitLines = doc.splitTextToSize(paragraph, maxLineWidth);
      
      splitLines.forEach((line) => {
        if (verticalCursor > 270) {
          doc.addPage();
          verticalCursor = 20; 
        }
        doc.text(line, margin, verticalCursor);
        verticalCursor += 6.5; 
      });
      verticalCursor += 4; 
    });

    doc.save(`${finalFileName}.pdf`);
    setShowNamingModal(false); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executePDFDownload();
    }
  };

  if (loading) {
    return (
      <div className="bg-zinc-950 border-2 border-emerald-500/20 rounded-xl p-8 flex flex-col items-center justify-between h-full min-h-122.5 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.05)] select-none">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-500/2 to-transparent bg-size-[100%_4px] animate-[pulse_1s_infinite] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98102_1px,transparent_1px),linear-gradient(to_bottom,#10b98102_1px,transparent_1px)] bg-size-[30px_30px]" />
        
        <div className="w-full flex justify-between items-center font-mono text-[9px] text-emerald-500/40 border-b border-zinc-900 pb-3">
          <span>PIPELINE_LOCK: SECURE</span>
          <span className="animate-pulse tracking-widest text-emerald-400 font-bold">SYSTEM_SYNTHESIS_ACTIVE</span>
          <span>CORE_NODE: 0x88F</span>
        </div>

        <div className="relative my-8 flex items-center justify-center">
          <div className="w-32 h-32 border border-dashed border-emerald-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-24 h-24 border-2 border-zinc-900 border-t-emerald-500/80 border-b-teal-500/80 rounded-full animate-[spin_3s_linear_infinite_reverse] shadow-[0_0_20px_rgba(16,185,129,0.15)]" />
          <div className="absolute w-14 h-14 bg-linear-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-400 rounded-full flex items-center justify-center animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40" />
          <div className="absolute w-10 h-10 bg-zinc-950 border border-emerald-500/40 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <span className="text-[10px] font-mono font-black text-emerald-400 tabular-nums animate-pulse">
              {loadProgress}%
            </span>
          </div>
          <span className="absolute -top-4 -left-4 text-emerald-500/30 font-mono text-sm">◤</span>
          <span className="absolute -top-4 -right-4 text-emerald-500/30 font-mono text-sm">◥</span>
          <span className="absolute -bottom-4 -left-4 text-emerald-500/30 font-mono text-sm">◣</span>
          <span className="absolute -bottom-4 -right-4 text-emerald-500/30 font-mono text-sm">◢</span>
        </div>

        <div className="w-full bg-zinc-900/30 border border-zinc-900 rounded-lg p-4 font-mono text-left relative overflow-hidden backdrop-blur-sm">
          <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 tracking-wider uppercase mb-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            Live compiler task execution string:
          </div>
          <div className="text-xs font-black text-emerald-400 tracking-wide uppercase h-5 overflow-hidden transition-all duration-300">
            &gt;&gt; {hudStage}
          </div>
          <div className="text-[8px] text-zinc-600 mt-2 font-mono grid grid-cols-2 gap-2 select-none uppercase tracking-widest pt-2 border-t border-zinc-900/60">
            <span className="animate-pulse">MEM_ALLOC: OK_0x{loadProgress}FF8B</span>
            <span className="text-right">CIPHER_STREAM_STATUS: RUNNING</span>
          </div>
        </div>
      </div>
    );
  }
  if (!results) {
    return (
      <div className="bg-zinc-950/20 border border-zinc-900 border-dashed rounded-xl p-8 flex flex-col items-center justify-center h-full min-h-122.5 text-center relative group shadow-inner">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        <div className="w-14 h-14 rounded-xl border border-zinc-900 bg-zinc-950 flex items-center justify-center mb-4 text-zinc-600 group-hover:border-zinc-800 group-hover:text-emerald-500/70 shadow-md group-hover:shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all duration-500 font-mono text-xs select-none">
          [0x0]
        </div>
        <p className="text-xs font-mono uppercase tracking-[0.15em] text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500 font-bold">
          AWAITING_COMPILATION_SEQUENCE
        </p>
        <span className="text-[9px] font-mono text-zinc-700 mt-1 uppercase tracking-widest">Target feed array is empty // standby</span>
      </div>
    );
  }

  const documentBtnClass = copiedSection === 'doc'
    ? "text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md border transition-all duration-300 bg-emerald-500 text-zinc-950 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-[0.97]"
    : "text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md border transition-all duration-300 bg-zinc-900/60 hover:bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30";

  return (
    <div className="space-y-6 h-full flex flex-col font-mono select-text relative">
      

      {showNamingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0b0c10] border border-emerald-500/30 p-6 rounded-xl max-w-sm w-full relative shadow-[0_0_50px_rgba(16,185,129,0.15)] font-mono mx-4">
            <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-emerald-400" />
            <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-emerald-400" />
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-emerald-400" />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-emerald-400" />

            <h3 className="text-xs font-black tracking-widest text-emerald-400 uppercase mb-2 flex items-center gap-1.5">
              <span className="w-1 h-2 bg-emerald-500 animate-pulse" />
              // DEFINE_EXPORT_FILENAME
            </h3>
            <p className="text-[9px] text-zinc-500 uppercase tracking-wider mb-4">Input custom filename parameters to commit local document save.</p>
            
            <input 
              type="text"
              value={fileNameInput}
              onChange={(e) => setFileNameInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-zinc-900/60 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-emerald-500/50 transition-all font-sans mb-5 uppercase tracking-wide"
              autoFocus
            />

            <div className="flex items-center justify-end gap-3 text-[10px] font-black">
              <button 
                onClick={() => setShowNamingModal(false)}
                className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 rounded transition-colors uppercase tracking-wider"
              >
                Cancel_Abort
              </button>
              <button 
                onClick={executePDFDownload}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 border border-emerald-400 rounded shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all uppercase tracking-wider"
              >
                Confirm_Compile
              </button>
            </div>
          </div>
        </div>
      )}


      <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-5 shadow-xl grow flex flex-col relative overflow-hidden group hover:border-zinc-800 transition-colors">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="flex justify-between items-center mb-3.5 select-none">
          <h3 className="text-[10px] font-black tracking-widest text-zinc-500 uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-none animate-ping" />
            OUT_STREAM // {results.title || "COMPILED_ASSET"}
          </h3>
          <div className="flex items-center gap-2">
            <button 
              onClick={openDownloadModal} 
              className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md border transition-all duration-300 bg-zinc-900/60 hover:bg-zinc-900 border-zinc-850 text-amber-500 hover:border-amber-500/40"
            >
              Compile_PDF 📥
            </button>
            <button onClick={() => handleCopy(results.documentBody, 'doc')} className={documentBtnClass}>
              {copiedSection === 'doc' ? 'DATA_COPIED✓' : 'EXTRACT_DATA_FILE'}
            </button>
          </div>
        </div>

        <div className="relative grow flex flex-col mt-1 bg-zinc-950 border border-zinc-900/60 p-4 rounded-lg overflow-y-auto max-h-105 scrollbar-thin scrollbar-thumb-zinc-900">
          <p className="text-sm font-sans text-zinc-200 leading-relaxed whitespace-pre-line">
            <DecryptedText text={results.documentBody} speed={8} />
          </p>
          <div className="mt-4 text-[8px] text-zinc-700 tracking-[0.25em] font-mono select-none uppercase border-t border-zinc-900/80 pt-2 flex items-center justify-between">
            <span>PACKET_VERIFICATION_HASH_OK</span>
            <span>SECURE_ARRAY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
