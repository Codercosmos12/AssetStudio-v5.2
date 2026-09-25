import { useState, useEffect } from 'react';


function ResumeFields({ formData, onChange, placeholders }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="text-[10px] text-emerald-400 font-black tracking-widest uppercase mb-2">
        // ENHANCED_RESUME_CREDENTIAL_MATRIX
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[9px] font-bold text-zinc-400 uppercase mb-1">Target Job Title</label>
          <input 
            type="text" name="targetTitle" placeholder="e.g., Senior Systems Architect" 
            onChange={onChange} value={formData.targetTitle || ''} 
            className="w-full bg-[#090a0f] border border-zinc-900 rounded p-2 text-xs text-zinc-100 placeholder-zinc-800 focus:outline-none focus:border-emerald-500/30 uppercase font-sans" 
          />
        </div>
        <div>
          <label className="block text-[9px] font-bold text-zinc-400 uppercase mb-1">Contact Info Handles</label>
          <input 
            type="text" name="contactInfo" placeholder="e.g., ://github.com, name@mail.com" 
            onChange={onChange} value={formData.contactInfo || ''} 
            className="w-full bg-[#090a0f] border border-zinc-900 rounded p-2 text-xs text-zinc-100 placeholder-zinc-800 focus:outline-none focus:border-emerald-500/30 font-sans" 
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[9px] font-bold text-zinc-400 uppercase mb-1">Highest Education Degree</label>
          <input 
            type="text" name="educationHistory" placeholder="e.g., BS Computer Science, MIT" 
            onChange={onChange} value={formData.educationHistory || ''} 
            className="w-full bg-[#090a0f] border border-zinc-900 rounded p-2 text-xs text-zinc-100 placeholder-zinc-800 focus:outline-none focus:border-emerald-500/30 uppercase font-sans" 
          />
        </div>
        <div>
          <label className="block text-[9px] font-bold text-zinc-400 uppercase mb-1">Certifications Array</label>
          <input 
            type="text" name="certifications" placeholder="e.g., AWS Solutions Architect, PMP" 
            onChange={onChange} value={formData.certifications || ''} 
            className="w-full bg-[#090a0f] border border-zinc-900 rounded p-2 text-xs text-zinc-100 placeholder-zinc-800 focus:outline-none focus:border-emerald-500/30 uppercase font-sans" 
          />
        </div>
      </div>

      <div>
        <label className="block text-[9px] font-bold text-zinc-300 uppercase mb-1">Core Professional Skills Matrix</label>
        <input 
          type="text" name="skills" placeholder={placeholders.place1} 
          value={formData.skills || ''} onChange={onChange} 
          className="w-full bg-[#090a0f] border border-zinc-900 rounded p-2 text-xs text-zinc-100 placeholder-zinc-800 focus:outline-none focus:border-emerald-500/30 uppercase font-sans" 
          required 
        />
      </div>

      <div>
        <label className="block text-[9px] font-bold text-zinc-300 uppercase mb-1">Chronological Work History (Raw Bullet Wins)</label>
        <textarea 
          name="jobDescription" rows="3" placeholder={placeholders.place2} 
          value={formData.jobDescription || ''} onChange={onChange} 
          className="w-full bg-[#090a0f] border border-zinc-900 rounded p-2 text-xs text-zinc-100 placeholder-zinc-800 focus:outline-none focus:border-emerald-500/30 resize-none leading-relaxed font-sans" 
          required 
        />
      </div>
    </div>
  );
}

function CoverLetterFields({ formData, onChange, placeholders }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="text-[10px] text-emerald-400 font-black tracking-widest uppercase mb-2">
        // TARGET_APPLICATION_COVER_LETTER_PORT
      </div>
      <div>
        <label className="block text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-1">Core Competencies</label>
        <input 
          type="text" name="skills" placeholder={placeholders.place1} 
          value={formData.skills || ''} onChange={onChange} 
          className="w-full bg-[#090a0f] border border-zinc-900 rounded p-2 text-xs text-zinc-100 placeholder-zinc-800 focus:outline-none focus:border-emerald-500/30 uppercase font-sans" 
          required 
        />
      </div>
      <div>
        <label className="block text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-1">Target Criteria / Job Requirements</label>
        <textarea 
          name="jobDescription" rows="4" placeholder={placeholders.place2} 
          value={formData.jobDescription || ''} onChange={onChange} 
          className="w-full bg-[#090a0f] border border-zinc-900 rounded p-2 text-xs text-zinc-100 placeholder-zinc-800 focus:outline-none focus:border-emerald-500/30 resize-none leading-relaxed font-sans" 
          required 
        />
      </div>
    </div>
  );
}

function DetailedBioFields({ formData, onChange, placeholders }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="text-[10px] text-emerald-400 font-black tracking-widest uppercase mb-2">
        // NARRATIVE_PROFESSIONAL_BIO_ARRAY
      </div>
      <div>
        <label className="block text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-1">Core Domain Talents & Expert Skills</label>
        <input 
          type="text" name="skills" placeholder={placeholders.place1} 
          value={formData.skills || ''} onChange={onChange} 
          className="w-full bg-[#090a0f] border border-zinc-900 rounded p-2 text-xs text-zinc-100 placeholder-zinc-800 focus:outline-none focus:border-emerald-500/30 uppercase font-sans" 
          required 
        />
      </div>
      <div>
        <label className="block text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-1">Key Legacy Career Achievements & Vision Summary</label>
        <textarea 
          name="jobDescription" rows="4" placeholder={placeholders.place2} 
          value={formData.jobDescription || ''} onChange={onChange} 
          className="w-full bg-[#090a0f] border border-zinc-900 rounded p-2 text-xs text-zinc-100 placeholder-zinc-800 focus:outline-none focus:border-emerald-500/30 resize-none leading-relaxed font-sans" 
          required 
        />
      </div>
    </div>
  );
}

const CONFIG_MATRIX = {
  IT: {
    "Cover Letter": {
      label1: "Core Engineering Stack", sub1: "Languages, Libraries, Frameworks", place1: "E.G., REACT, TYPESCRIPT, PYTHON, FLASK...",
      label2: "System Infrastructure Objectives", sub2: "Architecture Constraints & Target Bottlenecks", place2: "E.G., SCALING MICROSERVICES, REFACTORED VIEWS..."
    },
    "Resume Blueprint": {
      label1: "Technical Tools Matrix", sub1: "Clouds, Databases & CI/CD Pipelines", place1: "E.G., AWS, POSTGRESQL, GRAPHQL, KUBERNETES...",
      label2: "Chronological Engineering Timeline History", sub2: "Major Features Scaled & Systems Built", place2: "E.G., REDUCED DATABASE QUERY LATENCIES BY 42%..."
    },
    "Detailed Bio": {
      label1: "Engineering Specialization Focus", sub1: "Primary Core Developer Domains", place1: "E.G., FULL-STACK SYSTEM ARCHITECTURE...",
      label2: "Career Trajectory Milestones", sub2: "Historical Professional Legacy Summary", place2: "E.G., LED ENGINEERING TEAM TRANSITIONS..."
    }
  },
  Medical: {
    "Cover Letter": {
      label1: "Clinical Accreditations & Specialties", sub1: "Board Certifications & Licensure Keys", place1: "E.G., REGISTERED NURSE (RN), ICU CARE...",
      label2: "Patient Care Target Objectives", sub2: "Unit Criteria & Treatment Environments", place2: "E.G., MANAGING HIGH PATIENT ACUITY UNITS..."
    },
    "Resume Blueprint": {
      label1: "Clinical Competencies & Toolsets", sub1: "Medical Hardware, EMR Software, and Direct Procedures", place1: "E.G., EPIC EMR, VENTILATOR MANAGEMENT...",
      label2: "Medical Milestone Work History", sub2: "Quantifiable Unit Achievements & Outcomes", place2: "E.G., MAINTAINED ZERO DIAGNOSTIC ERRORS..."
    },
    "Detailed Bio": {
      label1: "Medical Specialization Domains", sub1: "Primary Focus Areas & Healthcare Horizons", place1: "E.G., PEDIATRICS ICU, EMERGENCY ER TRAUMA...",
      label2: "Healthcare Legacy Milestones", sub2: "Professional Accomplishments & Operational Legacy", place2: "E.G., DEVELOPED EMERGENCY DISPATCH PROTOCOLS..."
    }
  },
  Other: {
    "Cover Letter": {
      label1: "Core Professional Competencies", sub1: "Domain Tools & Domain Frameworks", place1: "E.G., DIGITAL MARKETING, SEO, LEAD_GEN...",
      label2: "Operational Project Targets", sub2: "KPI Goals & Strategic Target Criteria", place2: "E.G., NORMALIZING GROWTH FUNNEL CONVERSIONS..."
    },
    "Resume Blueprint": {
      label1: "Professional Skills & Platforms", sub1: "Software, Methods, & Technical Skills", place1: "E.G., SALESFORCE CRM, AGILE, DATA ANALYTICS...",
      label2: "Quantifiable Business Achievements", sub2: "Historical Career Milestones & Metric Wins", place2: "E.G., BOOSTED INBOUND ORGANIC TRAFFIC BY 180%..."
    },
    "Detailed Bio": {
      label1: "Domain Focus & Core Passions", sub1: "Primary Business Archetypes", place1: "E.G., E-COMMERCE GROWTH STRATEGY...",
      label2: "Career Legacy Profile Summary", sub2: "Notable Historical Accomplishments Overview", place2: "E.G., SCALED STARTUP OPERATIONS FROM ZERO..."
    }
  }
};

export default function ConfigPanel({ formData, onChange, onSubmit, loading }) {
  const activeIndustry = formData.industry || 'IT';
  const activeAsset = formData.assetType || 'Cover Letter';
  const currentWordCount = formData.wordCount || 400;

  const [isInteracting, setIsInteracting] = useState(false);
  const [hertzReadout, setHertzReadout] = useState('98.64');
  const [hexNodeStream, setHexNodeStream] = useState('0x7F_FF');

  useEffect(() => {
    const streamInterval = setInterval(() => {
      setHertzReadout((98 + Math.random() * 1.5).toFixed(2));
      const hexOptions = ['0x7F_FF', '0x2A_9C', '0x8B_D1', '0xCC_44', '0xE3_A9', '0x00_F4'];
      setHexNodeStream(hexOptions[Math.floor(Math.random() * hexOptions.length)]);
    }, 350);
    return () => clearInterval(streamInterval);
  }, []);

    const handleStaticSelect = (fieldName, value) => {
    setIsInteracting(true);
    let adjustedWordCount = currentWordCount;
    if (fieldName === 'assetType') {
      if (value === 'Detailed Bio') adjustedWordCount = 80;
      else if (value === 'Resume Blueprint') adjustedWordCount = 600;
      else adjustedWordCount = 400;
    }
    
    // 🌟 CALLS THE DIRECT React STATE INJECTION METHOD INSTEAD OF A SHALLOW COPIER
    onChange({ target: { name: fieldName, value: value } });
    onChange({ target: { name: 'wordCount', value: adjustedWordCount } });
    setTimeout(() => setIsInteracting(false), 800);
  };

  const sliderConfig = {
    "Detailed Bio": { min: 10, max: 150, step: 5, label: "Bio Length Range" },
    "Cover Letter": { min: 300, max: 1000, step: 50, label: "Letter Target Length" },
    "Resume Blueprint": { min: 400, max: 1500, step: 50, label: "Resume Detail Volume" }
  }[activeAsset] || { min: 150, max: 1000, step: 50, label: "Enforcement Limit" };

  const industryDeck = CONFIG_MATRIX[activeIndustry] || CONFIG_MATRIX.Other;
  const activeFields = industryDeck[activeAsset] || industryDeck["Cover Letter"];

  const getIndustryBtnClass = (id) => {
    const base = "flex-1 text-[10px] font-black uppercase py-2 rounded-md transition-all duration-300 border ";
    return activeIndustry === id 
      ? base + "bg-emerald-500 text-zinc-950 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.45)] scale-[0.98]" 
      : base + "bg-transparent text-zinc-500 border-transparent hover:text-zinc-300";
  };

  const getAssetBtnClass = (id) => {
    const base = "flex-1 text-[10px] font-black uppercase py-2 rounded-md transition-all duration-300 border ";
    return activeAsset === id 
      ? base + "bg-emerald-500 text-zinc-950 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.45)] scale-[0.98]" 
      : base + "bg-transparent text-zinc-500 border-transparent hover:text-zinc-300";
  };
  return (
    <section className="bg-[#050609] border border-emerald-950/40 rounded-xl p-6 relative overflow-hidden font-mono text-zinc-300 shadow-[0_0_50px_rgba(16,185,129,0.02)] select-none max-w-xl w-full group/panel transition-all duration-500 hover:border-emerald-500/20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98102_1px,transparent_1px),linear-gradient(to_bottom,#10b98102_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />
      <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-900 group-hover/panel:border-emerald-500/60 group-hover/panel:shadow-[0_0_8px_#10b981] transition-all duration-300" />
      <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-900 group-hover/panel:border-emerald-500/60 group-hover/panel:shadow-[0_0_8px_#10b981] transition-all duration-300" />
      <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-900 group-hover/panel:border-emerald-500/60 group-hover/panel:shadow-[0_0_8px_#10b981] transition-all duration-300" />
      <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-900 group-hover/panel:border-emerald-500/60 group-hover/panel:shadow-[0_0_8px_#10b981] transition-all duration-300" />

      
      <div className="grid grid-cols-3 gap-2 text-center text-[8px] uppercase tracking-[0.2em] text-zinc-600 font-black mb-6 pb-4 border-b border-zinc-950 relative">
        <div>
          <span className="block mb-2.5">Field Matrix Injection</span>
          <div className="w-12 h-12 mx-auto border border-emerald-950/40 rounded-full flex items-center justify-center relative bg-zinc-950/20">
            <div className="w-5 h-5 border border-emerald-500/30 rotate-45 animate-pulse" />
          </div>
        </div>
        <div>
          <span className="block mb-2.5 text-zinc-400 font-bold tracking-[0.25em] animate-pulse">// Core Content Reactor</span>
          <div className={`w-14 h-14 mx-auto border-2 border-dashed border-emerald-500/20 rounded-full flex items-center justify-center relative bg-zinc-900/10 shadow-inner transition-all duration-500 ${
            isInteracting || loading ? 'animate-spin border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]' : 'animate-[spin_12s_linear_infinite]'
          }`}>
            <div className="absolute w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" />
          </div>
        </div>
        <div>
          <span className="block mb-2.5">Threshold Matrix</span>
          <div className="w-9 h-12 mx-auto border border-emerald-950/60 relative bg-zinc-950/90 rounded-sm overflow-hidden p-px">
            <div 
              className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-emerald-600/40 via-emerald-500/30 to-teal-400/20 transition-all duration-700 border-t-2 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)] animate-pulse" 
              style={{ height: `${((currentWordCount - sliderConfig.min) / (sliderConfig.max - sliderConfig.min)) * 100}%` }} 
            />
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-3 gap-2 border-t border-b border-emerald-950/20 py-3 mb-6 text-center text-[10px] uppercase font-black tracking-widest bg-emerald-500/[0.01]">
        <div>
          <span className="text-zinc-600 block text-[7px] mb-0.5 tracking-widest">Matrix Theme</span>
          <span className="text-emerald-400 font-black">{activeIndustry} State</span>
        </div>
        <div>
          <span className="text-zinc-600 block text-[7px] mb-0.5 tracking-widest">Archetype Lock</span>
          <span className="text-zinc-200 font-bold">{activeAsset === 'Resume Blueprint' ? 'Resume' : activeAsset === 'Cover Letter' ? 'Letter' : 'Bio'}</span>
        </div>
        <div>
          <span className="text-zinc-600 block text-[7px] mb-0.5 tracking-widest">Scan Density</span>
          <span className="text-emerald-500/80 font-black tabular-nums animate-pulse">{hertzReadout} GHz</span>
        </div>
      </div>

      <div className="space-y-4">
      
        <div>
          <label className="block text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1.5">// Target Domain Matrix</label>
          <div className="flex gap-1.5 bg-[#0a0a0f] p-1 rounded-lg border border-zinc-900 shadow-inner">
            <button type="button" onClick={() => handleStaticSelect('industry', 'IT')} className={getIndustryBtnClass('IT')}>IT Sector</button>
            <button type="button" onClick={() => handleStaticSelect('industry', 'Medical')} className={getIndustryBtnClass('Medical')}>Medical</button>
            <button type="button" onClick={() => handleStaticSelect('industry', 'Other')} className={getIndustryBtnClass('Other')}>Other Domain</button>
          </div>
        </div>

      
        <div>
          <label className="block text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1.5">// Document Archetype</label>
          <div className="flex gap-1.5 bg-[#0a0a0f] p-1 rounded-lg border border-zinc-900 shadow-inner">
            <button type="button" onClick={() => handleStaticSelect('assetType', 'Resume Blueprint')} className={getAssetBtnClass('Resume Blueprint')}>Resume</button>
            <button type="button" onClick={() => handleStaticSelect('assetType', 'Cover Letter')} className={getAssetBtnClass('Cover Letter')}>Letter</button>
            <button type="button" onClick={() => handleStaticSelect('assetType', 'Detailed Bio')} className={getAssetBtnClass('Detailed Bio')}>Bio</button>
          </div>
        </div>

      
        <div>
          <div className="flex justify-between items-center text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1">
            <label>// {sliderConfig.label}</label>
            <span className="text-emerald-400 font-bold tabular-nums text-xs drop-shadow-[0_0_6px_rgba(16,185,129,0.3)]">{currentWordCount} words</span>
          </div>
          <div className="flex items-center bg-[#0a0a0f] p-2 rounded-lg border border-zinc-900 shadow-inner">
            <input 
              type="range" name="wordCount" min={sliderConfig.min} max={sliderConfig.max} step={sliderConfig.step} value={currentWordCount}
              onMouseDown={() => setIsInteracting(true)} onMouseUp={() => setIsInteracting(false)} onChange={onChange}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
            />
          </div>
        </div>

       
        <form onSubmit={onSubmit} className="border border-emerald-950/20 bg-[#06070a]/80 rounded-xl p-5 relative space-y-4 shadow-inner transition-all duration-300 focus-within:border-emerald-500/40">
          <div className="absolute top-0 right-4 -translate-y-1/2 bg-[#050507] px-2 text-[8px] text-zinc-600 tracking-[0.2em] font-black uppercase flex items-center gap-1 select-none">
            <span>Status: Volts</span>
            <span className="text-emerald-500 font-mono animate-pulse">[{hexNodeStream}]</span>
          </div>

       
          {activeAsset === 'Resume Blueprint' && (
            <ResumeFields formData={formData} onChange={onChange} placeholders={activeFields} />
          )}
          {activeAsset === 'Cover Letter' && (
            <CoverLetterFields formData={formData} onChange={onChange} placeholders={activeFields} />
          )}
          {activeAsset === 'Detailed Bio' && (
            <DetailedBioFields formData={formData} onChange={onChange} placeholders={activeFields} />
          )}

       
          <button
            type="submit" disabled={loading}
            className={`w-full font-black py-4 rounded-lg text-xs uppercase tracking-[0.25em] transition-all duration-500 relative overflow-hidden group/btn ${
              loading 
                ? 'bg-zinc-900 border border-zinc-800 text-zinc-600 cursor-not-allowed' 
                : 'bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-600 text-zinc-950 font-black shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] active:scale-[0.98] border border-emerald-400/40'
            }`}
          >
            {!loading && <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shir_1.4s_infinite]" />}
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <span className="w-3.5 h-3.5 border-2 border-zinc-700 border-t-emerald-400 rounded-full animate-spin" />
                ASSET_SYNTHESIS_RUNNING...
              </span>
            ) : (
              <span className="relative z-10 flex items-center justify-center gap-1.5">
                EXECUTE_COMPILER_PROBE // ⚡
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
