<?php get_header(); ?>
<section class="hero small"><div class="pin narrow"><h1><?php the_title(); ?></h1></div></section>
<section class="psec"><div class="pin narrow"><?php while (have_posts()) { the_post(); the_content(); } ?></div></section>
<?php get_footer(); ?>
