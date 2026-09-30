<?php get_header(); ?>
<section class="hero small"><div class="pin narrow"><h1><?php echo is_home() ? 'Latest' : get_the_archive_title(); ?></h1></div></section>
<section class="psec"><div class="pin narrow"><?php if (have_posts()) { while (have_posts()) { the_post(); echo '<article class="card" style="margin-bottom:16px"><h3><a href="' . esc_url(get_permalink()) . '">' . get_the_title() . '</a></h3>' . wp_kses_post(get_the_excerpt()) . '</article>'; } the_posts_pagination(); } else { echo '<p>Nothing here yet.</p>'; } ?></div></section>
<?php get_footer(); ?>
