:root {
  --blue:     #0057B8; --blue-l:  #E8F2FF; --blue-d:  #003A8C;
  --teal:     #009CA6; --teal-l:  #E0F8FA;
  --orange:   #F5821F; --orange-l:#FFF0E5;
  --green:    #00B47E; --green-l: #E5F9F3;
  --red:      #E53E3E; --red-l:   #FEF0F0;
  --yellow:   #F6C000; --yellow-l:#FFFBE5;
  --gray-1:   #F4F7FB; --gray-2:  #E8EDF5;
  --gray-3:   #CBD5E4; --gray-4:  #94A3BC;
  --gray-5:   #64748B; --gray-7:  #334155;
  --white:    #FFFFFF;
  --font:     'Inter', system-ui, sans-serif;
  --font-h:   'Sora', var(--font);
  --radius:   12px; --radius-sm: 8px;
  --shadow:   0 2px 8px rgba(0,87,184,.08);
  --shadow-md:0 4px 20px rgba(0,87,184,.12);
  --trans:    .15s ease;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--font);
  background: var(--gray-1);
  color: var(--gray-7);
  min-height: 100vh;
  line-height: 1.5;
}

/* ── HEADER ── */
.header {
  background: linear-gradient(135deg, var(--blue-d), var(--blue) 60%, #1A72D4);
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 70px;
  position: sticky;
  top: 0;
  z-index: 200;
  box-shadow: 0 4px 24px rgba(0,40,120,.22);
}
.header-brand { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
.logo-amigao  { height: 44px; object-fit: contain; }
.logo-pp      { height: 58px; object-fit: contain; }
.logo-sep     { width: 1px; height: 34px; background: rgba(255,255,255,.25); }
.header-center { text-align: center; }
.header-center h1 {
  font-family: var(--font-h);
  font-size: 17px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -.3px;
}
.header-sub   { font-size: 11px; color: rgba(255,255,255,.6); font-weight: 500; text-transform: uppercase; letter-spacing: .06em; margin-top: 2px; }
.header-date  { font-size: 12px; color: rgba(255,255,255,.65); font-weight: 500; }

/* ── FILTERS ── */
.filters-bar {
  background: var(--white);
  border-bottom: 1.5px solid var(--gray-2);
  padding: 10px 28px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  box-shadow: 0 1px 4px rgba(0,87,184,.06);
  position: sticky;
  top: 70px;
  z-index: 100;
}
.filter-group { display: flex; align-items: center; gap: 7px; border: none; }
.filter-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: var(--gray-4); white-space: nowrap; }
.filter-sep   { width: 1px; height: 26px; background: var(--gray-2); }
.tab-group    { display: flex; gap: 2px; background: var(--gray-1); border-radius: var(--radius-sm); padding: 3px; }
.tab {
  padding: 5px 13px;
  border-radius: 6px;
  border: none;
  background: transparent;
  font: 600 12px/1 var(--font);
  color: var(--gray-4);
  cursor: pointer;
  transition: var(--trans);
  white-space: nowrap;
}
.tab.active   { background: var(--white); color: var(--blue); box-shadow: 0 1px 4px rgba(0,87,184,.12); }
.tab:hover:not(.active) { color: var(--gray-7); }
.filter-select {
  border: 1.5px solid var(--gray-2);
  border-radius: var(--radius-sm);
  padding: 6px 10px;
  font: 600 13px var(--font);
  color: var(--gray-7);
  background: var(--white);
  cursor: pointer;
  transition: var(--trans);
  min-width: 140px;
  appearance: auto;
}
.filter-select:focus, .filter-select:hover { border-color: var(--blue); outline: none; }

/* ── CONTEXT BAR ── */
.ctx-bar {
  background: linear-gradient(90deg, var(--blue-l), #f0f7ff 60%, transparent);
  border-left: 3px solid var(--blue);
  padding: 7px 28px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 600;
  color: var(--blue-d);
}
.ctx-item {
  background: var(--blue);
  color: #fff;
  padding: 2px 10px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 700;
}
.ctx-item.teal { background: var(--teal); }
.ctx-vol { margin-left: auto; color: var(--gray-4); font-size: 11px; }

/* ── MAIN ── */
main { padding: 20px 28px 48px; max-width: 1600px; margin: 0 auto; }

/* ── SECTION ── */
.section { margin-bottom: 24px; }
.sec-title {
  font-family: var(--font-h);
  font-size: 14px;
  font-weight: 800;
  color: var(--gray-7);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.sec-title::after { content: ''; flex: 1; height: 1.5px; background: var(--gray-2); }
.sec-note { font-family: var(--font); font-size: 11px; font-weight: 600; color: var(--gray-4); order: 2; }

/* ── KPI CARDS ── */
.kpi-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
.kpi-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 18px 20px;
  box-shadow: var(--shadow);
  border: 1px solid var(--gray-2);
  position: relative;
  overflow: hidden;
  transition: transform var(--trans), box-shadow var(--trans);
}
.kpi-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.kpi-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; }
.kpi-card.blue::before   { background: var(--blue); }
.kpi-card.teal::before   { background: var(--teal); }
.kpi-card.orange::before { background: var(--orange); }
.kpi-card.red::before    { background: var(--red); }
.kpi-icon  { font-size: 20px; margin-bottom: 10px; display: block; }
.kpi-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--gray-4); margin-bottom: 4px; }
.kpi-value {
  font-family: var(--font-h);
  font-size: 34px;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 3px;
}
.kpi-card.blue .kpi-value   { color: var(--blue); }
.kpi-card.teal .kpi-value   { color: var(--teal); }
.kpi-card.orange .kpi-value { color: var(--orange); }
.kpi-card.red .kpi-value    { color: var(--red); }
.kpi-sub    { font-size: 11px; color: var(--gray-4); font-weight: 500; }
.kpi-detail { font-size: 11px; color: var(--gray-4); font-weight: 500; margin-top: 4px; }
.kpi-badge  {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 99px;
  font-size: 10px;
  font-weight: 800;
  margin-top: 6px;
}
.kpi-badge.above  { background: var(--green-l); color: #059669; }
.kpi-badge.below  { background: var(--red-l);   color: var(--red); }
.kpi-badge.near   { background: var(--yellow-l);color: #B45309; }
.kpi-badge.neutral{ background: var(--gray-1);  color: var(--gray-4); }
.kpi-split { display: flex; gap: 8px; margin-top: 10px; }
.split-item { flex: 1; background: var(--gray-1); border: 1px solid var(--gray-2); border-radius: var(--radius-sm); padding: 7px 9px; }
.split-lbl  { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--gray-4); display: block; margin-bottom: 2px; }
.split-val  { font-family: var(--font-h); font-size: 17px; font-weight: 800; }
.split-item.site  .split-val { color: var(--blue); }
.split-item.ifood .split-val { color: var(--teal); }

/* ── GAUGES ── */
.gauge-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
.gauge-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 18px 14px 14px;
  box-shadow: var(--shadow);
  border: 1px solid var(--gray-2);
  text-align: center;
  transition: transform var(--trans), box-shadow var(--trans);
}
.gauge-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.gauge-title { font-size: 12px; font-weight: 700; color: var(--gray-7); margin-bottom: 1px; }
.gauge-sub   { font-size: 10px; color: var(--gray-4); font-weight: 500; margin-bottom: 10px; }
.gauge-svg-wrap { width: 190px; height: 104px; margin: 0 auto 6px; }
.gauge-svg-wrap svg { width: 100%; height: 100%; overflow: visible; }
.gauge-stats { display: flex; justify-content: space-around; padding-top: 10px; border-top: 1.5px solid var(--gray-1); margin-top: 4px; }
.gs-lbl { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--gray-4); }
.gs-val { font-family: var(--font-h); font-size: 14px; font-weight: 800; color: var(--gray-7); margin-top: 2px; }
.gs-val.meta { color: var(--red); }

/* ── CHARTS ── */
.chart-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.chart-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: var(--shadow);
  border: 1px solid var(--gray-2);
}
.chart-title { font-size: 13px; font-weight: 700; color: var(--gray-7); display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.chart-tag  { font-size: 10px; padding: 2px 8px; border-radius: 99px; font-weight: 700; }
.chart-tag.blue { background: var(--blue-l); color: var(--blue); }
.chart-tag.teal { background: var(--teal-l); color: var(--teal); }
.chart-wrap { position: relative; height: 200px; }
.chart-wrap canvas { display: block; }

/* ── RANKING ── */
.rank-card { background: var(--white); border-radius: var(--radius); box-shadow: var(--shadow); border: 1px solid var(--gray-2); overflow: hidden; }
.rank-controls { padding: 16px 18px; border-bottom: 1.5px solid var(--gray-1); }
.rank-summary  { font-size: 12px; color: var(--gray-5); margin-bottom: 10px; line-height: 1.5; }
.rank-summary strong { color: var(--gray-7); }
.rank-builder  { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.rb-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: var(--gray-4); white-space: nowrap; }
.rb-group { display: flex; gap: 2px; background: var(--gray-1); border-radius: var(--radius-sm); padding: 3px; }
.rb-btn {
  padding: 5px 11px;
  border-radius: 6px;
  border: none;
  background: transparent;
  font: 600 11px var(--font);
  color: var(--gray-4);
  cursor: pointer;
  transition: var(--trans);
  white-space: nowrap;
}
.rb-btn.active { background: var(--white); color: var(--blue); box-shadow: 0 1px 4px rgba(0,87,184,.12); }
.rb-btn[data-tbl="3p"].active { color: var(--teal); }
.rb-btn[data-field="inc"].active { color: var(--red); }
.rb-btn[data-vol="desc"].active,
.rb-btn[data-vol="asc"].active  { color: var(--orange); }
.table-wrap { overflow-x: auto; }
.rank-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}
.rank-table thead tr { background: var(--blue); color: #fff; }
.rank-table.teal-head thead tr { background: var(--teal); }
.rank-table thead th { padding: 10px 12px; text-align: left; font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: .07em; white-space: nowrap; }
.rank-table tbody tr { border-bottom: 1px solid var(--gray-1); transition: background var(--trans); }
.rank-table tbody tr:hover { background: var(--blue-l); }
.rank-table tbody td { padding: 8px 12px; font-weight: 500; color: var(--gray-7); }
.rank-num { width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; }
.r1 { background: #FFD700; color: #7A5900; }
.r2 { background: #C0C0C0; color: #444; }
.r3 { background: #CD7F32; color: #fff; }
.rn { background: var(--gray-1); color: var(--gray-5); }
.bar-cell  { display: flex; align-items: center; gap: 8px; }
.bar-bg    { flex: 1; height: 6px; background: var(--gray-2); border-radius: 99px; min-width: 50px; }
.bar-fill  { height: 100%; border-radius: 99px; }
.sp        { display: inline-flex; padding: 3px 9px; border-radius: 99px; font-size: 10px; font-weight: 800; }
.sp-ok     { background: var(--green-l); color: #059669; }
.sp-warn   { background: var(--yellow-l); color: #B45309; }
.sp-bad    { background: var(--red-l); color: var(--red); }

/* ── LOADING ── */
.loading {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(255,255,255,.85);
  z-index: 999;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
}
.loading.visible { display: flex; }
.loading p { font-size: 14px; color: var(--gray-5); font-weight: 600; }
@keyframes spin { to { transform: rotate(360deg); } }
.spinner { width: 36px; height: 36px; border: 3px solid var(--gray-2); border-top-color: var(--blue); border-radius: 50%; animation: spin .7s linear infinite; }

/* ── RESPONSIVE ── */
@media (max-width: 1100px) {
  .kpi-grid, .gauge-grid { grid-template-columns: 1fr 1fr; }
  .chart-grid { grid-template-columns: 1fr; }
}
@media (max-width: 680px) {
  main, .filters-bar, .header { padding-inline: 14px; }
  .kpi-grid { grid-template-columns: 1fr 1fr; }
  .gauge-grid { grid-template-columns: 1fr 1fr; }
  .header-date { display: none; }
}
