<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); $d = nova_data(); $slug = is_page() ? get_post_field('post_name', get_queried_object_id()) : ''; ?>
<div id="public">
<header class="ph"><div class="phin">
  <a class="plogo" href="<?php echo esc_url(home_url('/')); ?>"><?php echo nova_logo(34); ?><span><?php echo esc_html(get_bloginfo('name') ?: 'NOVA'); ?></span></a>
  <?php if (has_nav_menu('primary')) : wp_nav_menu(['theme_location' => 'primary', 'container' => 'nav', 'container_class' => 'pnav', 'items_wrap' => '%3$s', 'depth' => 2]); else : ?>
  <nav class="pnav" aria-label="Site">
    <div class="pdrop"><button class="pdb" aria-haspopup="true">Services ▾</button><div class="pdm"><?php foreach ($d['PILLARS'] as $k => $p) echo '<a href="' . esc_url(nova_link($k)) . '">' . $p['t'] . '</a>'; ?></div></div>
    <div class="pdrop"><button class="pdb" aria-haspopup="true">Industries ▾</button><div class="pdm"><?php foreach ($d['AUD'] as $k => $a) echo '<a href="' . esc_url(nova_link($k)) . '">' . $a['t'] . '</a>'; ?></div></div>
    <a href="<?php echo esc_url(nova_link('how-we-work')); ?>" class="<?php echo $slug === 'how-we-work' ? 'on' : ''; ?>">How we work</a>
    <a href="<?php echo esc_url(nova_link('find-opportunities')); ?>" class="<?php echo $slug === 'find-opportunities' ? 'on' : ''; ?>">Finding opportunities</a>
    <a href="<?php echo esc_url(nova_link('about')); ?>" class="<?php echo $slug === 'about' ? 'on' : ''; ?>">About</a>
    <a href="<?php echo esc_url(nova_site('bookingUrl')); ?>" class="pbtn"><?php echo nova_cta_text(); ?></a>
  </nav>
  <?php endif; ?>
  <button class="pburger" aria-label="Menu">☰</button>
</div></header>
<main>
