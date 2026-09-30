<?php /* Service (pillar) page — chosen automatically for pages whose slug matches a PILLARS key. */
get_header(); $d = nova_data(); $slug = get_post_field('post_name', get_queried_object_id()); $p = $d['PILLARS'][$slug]; ?>
<section class="hero"><div class="pin herogrid"><div><div class="eyebrow"><?php echo $p['tag']; ?></div><h1><?php echo $p['t']; ?></h1><p class="lede"><?php echo $p['d']; ?></p>
  <div class="pills" style="gap:10px;margin-top:8px"><a class="pbtn big" href="<?php echo esc_url(nova_site('bookingUrl')); ?>"><?php echo nova_cta_text(); ?></a></div></div><div class="pillarart"><?php echo nova_icon($p['icon']); ?></div></div><div class="pin"><?php echo nova_trust_strip(); ?></div></section>
<section class="psec"><div class="pin narrow"><div class="eyebrow">What's included</div><h2>What you get.</h2><?php echo nova_pains($p['bullets'], true); ?><p class="small muted" style="margin-top:14px"><b>Best for:</b> <?php echo $p['who']; ?></p></div></section>
<?php get_template_part('template-parts/service', $slug); ?>
<section class="psec alt"><div class="pin"><div class="eyebrow">Examples</div><h2>What this looks like in practice.</h2><?php echo nova_service_cards($p['tasks']); ?></div></section>
<?php echo nova_evidence_block($p['ev'], 'What the research says.'); echo nova_logo_wall(); echo nova_how_block(); echo nova_cta_block(); get_footer(); ?>
