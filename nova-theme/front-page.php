<?php get_header(); $d = nova_data(); $ch = $d['EVIDENCE']['chamber']; ?>
<section class="hero"><div class="pin herogrid"><div>
  <div class="eyebrow"><?php echo esc_html(nova_site('tagline')); ?></div>
  <h1>Put AI to work in your business — inside the tools you already use.</h1>
  <p class="lede">We help small businesses answer every call, follow up every lead, close the books faster, and see their numbers clearly — with AI agents and automation that run in the systems you already pay for. Measured first, piloted with a gate, and reported every Monday.</p>
  <div class="pills" style="gap:10px;margin-top:8px"><a class="pbtn big" href="<?php echo esc_url(nova_site('bookingUrl')); ?>"><?php echo nova_cta_text(); ?></a><a class="pbtn ghost big" href="#examples">See the examples</a></div>
</div><?php echo nova_hero_art(); ?></div><div class="pin"><?php echo nova_trust_strip(); ?></div></section>
<section class="psec" id="examples"><div class="pin"><div class="eyebrow">What small businesses use AI for</div><h2>Four things owners are doing with AI right now to grow revenue and run leaner.</h2>
  <p class="lede" style="font-size:16px;margin-bottom:22px"><?php echo str_replace('58% of U.S. small businesses now use generative AI (up from 40% a year earlier), and', '58% of U.S. small businesses now use generative AI — up from 40% a year earlier — and', $ch['text']); ?> <a class="evsrc" style="border:0;padding:0" href="<?php echo esc_url($ch['url']); ?>" target="_blank" rel="noopener"><?php echo $ch['src']; ?> ↗</a></p>
  <?php echo nova_roi_cards(); ?>
  <div class="eyebrow" style="margin-top:34px">Also common</div><h3 style="margin:6px 0 14px;font-size:22px">More ways owners are putting AI to work.</h3><?php echo nova_more_uses(); ?></div></section>
<section class="psec alt"><div class="pin"><div class="eyebrow">What we do</div><h2>Four ways we help — pick one or combine them.</h2><?php echo nova_pillar_cards(); ?></div></section>
<?php echo nova_logo_wall(); echo nova_evidence_block(['chamber','mckGenAI','nber','mckEmail','brightlocal','cochrane']); echo nova_how_block(); ?>
<section class="psec alt"><div class="pin"><div class="eyebrow">Who we help</div><h2>Built for businesses where every missed call is a lost job.</h2>
  <div class="agrid"><?php foreach ($d['AUD'] as $k => $a) echo '<a class="acard" href="' . esc_url(nova_link($k)) . '"><h3>' . $a['t'] . '</h3><p>' . $a['h1'] . '</p><span class="alink">See what we automate →</span></a>'; ?></div></div></section>
<?php echo nova_cta_block(); get_footer(); ?>
