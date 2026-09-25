import React, { useState, useEffect } from 'react';

export default function Header() {
  const [entropy, setEntropy] = useState('0.9842');

  // Real-time fluctuating network noise simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setEntropy((Math.random() * 0.1 + 0.9).toFixed(4));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="border-b border-emerald-500/20 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono relative overflow-hidden select-none">
      {/* Laser HUD Scanning Bar across the header */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-[pulse_1.5s_infinite]" />

      <div className="relative pl-5 group">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-500 shadow-[0_0_15px_#10b981] animate-[pulse_2s_infinite]" />
        {/* Animated crosshair ticks */}
        <span className="absolute -left-[5px] -top-[5px] text-[10px] text-emerald-500/40 font-bold">+</span>
        <span className="absolute -left-[5px] -bottom-[15px] text-[10px] text-emerald-500/40 font-bold">+</span>
        
        <h1 className="text-2xl font-black tracking-widest text-zinc-100 uppercase group-hover:text-emerald-400 transition-colors duration-300">
          SHAYAN_PROG <span className="text-emerald-500 animate-pulse">//</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">ASSET_STUDIO_v5.2</span>
        </h1>
        <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1 font-semibold flex items-center gap-2">
          <span>PIPELINE_STATUS:</span>
          <span className="text-zinc-400 animate-pulse">[NET_FLOW_ACTIVE]</span>
          <span className="text-zinc-600">•</span>
          <span>ENTROPY_INDEX:</span>
          <span className="text-emerald-500/80 font-bold tabular-nums animate-[pulse_0.4s_infinite]">{entropy}</span>
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 bg-zinc-900/20 border border-zinc-900 p-2.5 rounded-lg shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Decorative corner brackets */}
        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-emerald-500/40" />
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-emerald-500/40" />
        
        <div className="flex flex-col px-3 py-1 bg-zinc-950/60 rounded border border-zinc-900/80 text-left">
          <span className="text-[8px] text-zinc-600 uppercase tracking-wider font-bold">CORE_DATAFEED</span>
          <span className="text-[11px] font-bold text-zinc-400 font-mono tracking-wider animate-pulse">MATRIX_IDLE</span>
        </div>

        <div className="flex items-center gap-3 bg-emerald-950/20 border border-emerald-900/40 px-3 py-2 rounded">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_12px_#10b981]"></span>
          </span>
          <span className="text-[10px] font-black tracking-widest text-emerald-400 uppercase animate-[pulse_1s_infinite]">
            SYS_ONLINE_NODES_OK
          </span>
        </div>
      </div>
    </header>
  );
}
