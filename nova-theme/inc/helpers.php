<?php
/** Rendering helpers mirroring the static site's blocks. All content strings come from inc/data.php (trusted HTML). */
if (!defined('ABSPATH')) exit;

function nova_logo($size = 34) {
  return '<svg class="logo" width="' . (int)$size . '" height="' . (int)$size . '" viewBox="28 14 44 40" aria-hidden="true"><polygon fill="#267FA0" points="33.2,27.8 43.5,27.8 43.5,35.6"/><polygon fill="#30B1B6" points="45,16.5 45,35.5 55.5,26.5"/><polygon fill="#3AA970" points="47.9,35.6 54.7,27.8 64.5,27.8 57.1,35.6"/><polygon fill="#3AA970" points="38.5,45 44.5,38.5 48,43"/><polygon fill="#FDBB40" points="47,37.5 56,37.5 56,41.5 48.5,43"/><path fill="#F87D34" d="M31.5,48 L68.5,39.5 Q63,49.5 59.5,50.5 L34.5,50.5 Q31.5,50 31.5,48 Z"/></svg>';
}
function nova_link($slug) { $p = get_page_by_path($slug); return $p ? get_permalink($p) : home_url('/' . $slug . '/'); }
function nova_tel() { return 'tel:' . preg_replace('/[^0-9+]/', '', nova_site('phone')); }
function nova_cta_text() { return __('Book a free consultation', 'nova'); }
function nova_icon($name) {
  $icons = [
    'chart' => '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19V5M4 19h16"/><path d="M8 15l4-5 3 3 5-7"/></svg>',
    'agent' => '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M9 13h.01M15 13h.01M9 16h6"/></svg>',
    'flow' => '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="6" height="6" rx="1.5"/><rect x="15" y="14" width="6" height="6" rx="1.5"/><path d="M9 7h4a3 3 0 0 1 3 3v4"/></svg>',
    'server' => '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="16" height="6" rx="1.5"/><rect x="4" y="14" width="16" height="6" rx="1.5"/><path d="M8 7h.01M8 17h.01"/></svg>',
  ];
  return $icons[$name] ?? '';
}
function nova_hero_art() {
  return '<svg class="heroart" viewBox="0 0 400 300" aria-hidden="true"><polygon fill="#267FA0" points="40,120 150,120 150,210" opacity=".9"/><polygon fill="#30B1B6" points="165,30 165,210 260,120" opacity=".9"/><polygon fill="#3AA970" points="185,220 260,140 370,140 300,220" opacity=".9"/><polygon fill="#FDBB40" points="200,240 290,240 290,270 215,285" opacity=".95"/><path fill="#F87D34" d="M60,290 L390,215 Q335,300 300,300 L90,300 Q55,300 60,290 Z"/></svg>';
}
function nova_trust_strip() {
  return '<div class="tstrip"><div><b>' . esc_html(nova_site('years')) . '</b><span>years in small-business operations and software</span></div><div><b>' . esc_html(nova_site('clients')) . '</b><span>businesses automated</span></div><div><b>' . esc_html(nova_site('tasksRun')) . '</b><span>automations in production</span></div><div><b>0</b><span>systems you have to replace</span></div></div>';
}
function nova_how_block() {
  $out = '<section class="psec"><div class="pin"><div class="eyebrow">How we work</div><h2>It starts with a conversation, not a contract.</h2><div class="steps">';
  foreach (nova_data()['HOW'] as $i => $s) $out .= '<div class="step"><div class="sn">' . ($i + 1) . '</div><h3>' . $s[0] . '</h3><p>' . $s[1] . '</p></div>';
  return $out . '</div></div></section>';
}
function nova_cta_block() {
  return '<section class="pcta"><div class="pin"><h2>Let\'s talk about your business — free, 30 minutes, no pitch.</h2><p>Tell us what\'s slow, what\'s leaking, and what you\'ve tried. We\'ll tell you honestly whether AI can help and roughly what it would take.</p><div class="pills" style="gap:10px"><a class="pbtn big" href="' . esc_url(nova_site('bookingUrl')) . '">' . nova_cta_text() . '</a><a class="pbtn ghost big" href="' . esc_attr(nova_tel()) . '">Call ' . esc_html(nova_site('phone')) . '</a></div></div></section>';
}
function nova_evidence_block($keys = null, $title = null, $intro = null) {
  $ev = nova_data()['EVIDENCE'];
  $keys = $keys ?: array_keys($ev);
  $out = '<section class="psec alt"><div class="pin"><div class="eyebrow">What the research says</div><h2>' . ($title ?: 'The savings are documented — by people who aren\'t selling anything.') . '</h2><p class="lede" style="font-size:16px;margin-bottom:22px">' . ($intro ?: 'We don\'t quote our own case numbers on this site. These are independent, published findings on the problems we work on. Your own numbers come from your consultation.') . '</p><div class="evgrid">';
  foreach ($keys as $k) { if (!isset($ev[$k])) continue; $e = $ev[$k];
    $out .= '<div class="ev"><div class="evstat">' . $e['stat'] . '</div><p>' . $e['text'] . '</p><a class="evsrc" href="' . esc_url($e['url']) . '" target="_blank" rel="noopener">' . $e['src'] . ' ↗</a></div>'; }
  return $out . '</div></div></section>';
}
function nova_logo_wall($names = null, $title = null) {
  $d = nova_data(); $list = $d['LOGOS'];
  if ($names) $list = array_values(array_filter($list, fn($l) => in_array($l[0], $names, true)));
  $out = '<section class="psec alt"><div class="pin"><div class="eyebrow">Integrations</div><h2>' . ($title ?: 'We work with the tools you already run on.') . '</h2><div class="logos">';
  foreach ($list as $l) $out .= '<div class="lwall" style="--lc:' . esc_attr($l[1]) . '"><span class="lg"></span><span>' . esc_html($l[0]) . '</span></div>';
  $more = $names ? 'And ' . ($d['platformCount'] - count($names)) . '+ more. ' : 'Plus ' . $d['platformCount'] . '+ platforms across phones, CRM, field service, practice management, accounting, and support. ';
  return $out . '</div><p class="small muted" style="margin-top:12px">' . $more . 'Don\'t see yours? <a href="' . esc_url(nova_link('contact')) . '">Ask us</a> — if it has an export or an API, we\'ve probably connected it.</p></div></section>';
}
function nova_service_cards($list) {
  $tasks = nova_data()['tasks']; $out = '<div class="svc">';
  foreach ($list as $item) { [$id, $title] = is_array($item) ? $item : [$item, $tasks[$item]['t'] ?? $item]; if (!isset($tasks[$id])) continue; $t = $tasks[$id];
    $out .= '<div class="scard"><div class="eyebrow">' . esc_html($t['cat']) . '</div><h3>' . $title . '</h3><p>' . $t['d'] . '</p><div class="sfoot"><span class="small muted">Works with ' . esc_html(implode(', ', $t['tools'])) . (count($t['tools']) >= 4 ? ' and more' : '') . '</span></div></div>'; }
  return $out . '</div>';
}
function nova_pillar_cards($keys = null) {
  $p = nova_data()['PILLARS']; $keys = $keys ?: array_keys($p); $out = '<div class="pgrid">';
  foreach ($keys as $k) { $x = $p[$k]; $first = explode('. ', $x['d'])[0];
    $out .= '<a class="pcardx" href="' . esc_url(nova_link($k)) . '"><div class="pic">' . nova_icon($x['icon']) . '</div><div class="eyebrow">' . $x['tag'] . '</div><h3>' . $x['t'] . '</h3><p>' . $first . '.</p><span class="alink">Learn more →</span></a>'; }
  return $out . '</div>';
}
function nova_roi_cards() {
  $d = nova_data(); $out = '<div class="roilist">';
  foreach ($d['ROI_EXAMPLES'] as $i => $ex) { $e = $d['EVIDENCE'][$ex['ev']];
    $out .= '<div class="roi ' . esc_attr($ex['color']) . '"><div class="rstat"><div class="rtag">' . $ex['tag'] . '</div><div class="rbig">' . $e['stat'] . '</div><p>' . $e['text'] . '</p><a class="rsrc" href="' . esc_url($e['url']) . '" target="_blank" rel="noopener">' . $e['src'] . ' ↗</a></div><div class="rbody"><div class="eyebrow">' . $ex['how'] . '</div><h3>' . $ex['t'] . '</h3><p class="rscene">' . $ex['s'] . '</p><div class="ruses-h">How businesses use it</div><ul class="ruses">';
    foreach ($ex['uses'] as $u) $out .= '<li>' . $u . '</li>';
    $out .= '</ul></div></div>'; }
  return $out . '</div>';
}
function nova_more_uses() {
  $d = nova_data(); $out = '<div class="muses">';
  foreach ($d['MORE_USES'] as $m) { $e = $d['EVIDENCE'][$m[2]];
    $out .= '<div class="muse"><b>' . $m[0] . '</b><span>' . $m[1] . '</span><a class="evsrc" href="' . esc_url($e['url']) . '" target="_blank" rel="noopener">' . explode(',', $e['src'])[0] . ' ↗</a></div>'; }
  return $out . '</div>';
}
function nova_pains($items, $check = false) {
  $out = '<ul class="pains' . ($check ? ' check2' : '') . '">'; foreach ($items as $x) $out .= '<li>' . $x . '</li>'; return $out . '</ul>';
}
