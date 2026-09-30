<?php /* Industry landing page — chosen automatically for pages whose slug matches an AUD key. */
get_header(); $d = nova_data(); $slug = get_post_field('post_name', get_queried_object_id()); $a = $d['AUD'][$slug]; ?>
<section class="hero"><div class="pin herogrid"><div><div class="eyebrow"><?php echo $a['eyebrow']; ?></div><h1><?php echo $a['h1']; ?></h1><p class="lede"><?php echo $a['sub']; ?></p>
  <div class="pills" style="gap:10px;margin-top:8px"><a class="pbtn big" href="<?php echo esc_url(nova_site('bookingUrl')); ?>"><?php echo nova_cta_text(); ?></a><a class="pbtn ghost big" href="#svc">What we automate</a></div></div><?php echo nova_hero_art(); ?></div><div class="pin"><?php echo nova_trust_strip(); ?></div></section>
<section class="psec"><div class="pin narrow"><div class="eyebrow">Sound familiar?</div><h2>The things that cost you money quietly.</h2><?php echo nova_pains($a['pains']); ?></div></section>
<section class="psec alt" id="svc"><div class="pin"><div class="eyebrow">What we automate for <?php echo strtolower($a['t']); ?></div><h2>Set up inside the tools you already use.</h2><?php echo nova_service_cards($a['tasks']); ?></div></section>
<?php $short = strtolower($a['short']); echo nova_evidence_block($a['ev'], 'What the research says about these problems.'); echo nova_logo_wall($a['logos'], 'The ' . ($short === 'firms' ? 'firm' : $short) . ' tools we connect to.'); ?>
<section class="psec"><div class="pin"><div class="eyebrow">How we'd help</div><h2>The services most <?php echo strtolower($a['t']); ?> start with.</h2><?php echo nova_pillar_cards($a['pillars']); ?></div></section>
<?php echo nova_how_block(); ?>
<section class="psec alt"><div class="pin narrow"><div class="callout"><span class="eyebrow">Compliance and trust</span><?php echo $a['compliance']; ?></div></div></section>
<?php echo nova_cta_block(); get_footer(); ?>
