(function(){
  // Defaults (match style.css defaults)
  const DEFAULTS = {
    primary: '#EC4899',
    secondary: '#3B82F6'
  };

  function hexToRgb(hex){
    if(!hex) return null;
    hex = hex.replace('#','');
    if(hex.length===3){ hex = hex.split('').map(c=>c+c).join(''); }
    const int = parseInt(hex,16);
    return { r: (int>>16)&255, g: (int>>8)&255, b: int&255 };
  }

  function setColors(primary, secondary){
    const root = document.documentElement;
    root.style.setProperty('--primary-color', primary);
    root.style.setProperty('--secondary-color', secondary);
    const pr = hexToRgb(primary);
    const sr = hexToRgb(secondary);
    if(pr){ root.style.setProperty('--primary-bg', `rgba(${pr.r}, ${pr.g}, ${pr.b}, 0.08)`); }
    if(sr){ root.style.setProperty('--secondary-bg', `rgba(${sr.r}, ${sr.g}, ${sr.b}, 0.08)`); }
  }

  function save(primary, secondary){
    try{ localStorage.setItem('site-colors', JSON.stringify({primary, secondary})); }catch(e){ /* ignore */ }
  }

  function load(){
    try{
      const raw = localStorage.getItem('site-colors');
      if(!raw) return null;
      return JSON.parse(raw);
    }catch(e){ return null; }
  }

  // Init
  document.addEventListener('DOMContentLoaded', ()=>{
    const loaded = load();
    const primary = (loaded && loaded.primary) ? loaded.primary : DEFAULTS.primary;
    const secondary = (loaded && loaded.secondary) ? loaded.secondary : DEFAULTS.secondary;

    setColors(primary, secondary);

    const pInput = document.getElementById('primary-color-input');
    const sInput = document.getElementById('secondary-color-input');
    const resetBtn = document.getElementById('colors-reset-btn');

    if(pInput) pInput.value = primary;
    if(sInput) sInput.value = secondary;

    function onChange(){
      const p = pInput ? pInput.value : primary;
      const s = sInput ? sInput.value : secondary;
      setColors(p, s);
      save(p, s);
    }

    if(pInput) pInput.addEventListener('input', onChange);
    if(sInput) sInput.addEventListener('input', onChange);
    if(resetBtn) resetBtn.addEventListener('click', ()=>{
      if(pInput) pInput.value = DEFAULTS.primary;
      if(sInput) sInput.value = DEFAULTS.secondary;
      setColors(DEFAULTS.primary, DEFAULTS.secondary);
      save(DEFAULTS.primary, DEFAULTS.secondary);
    });
  });
})();
