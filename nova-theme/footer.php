</main>
<?php $d = nova_data(); ?>
<footer class="pf"><div class="pfin">
  <div><div class="plogo" style="margin-bottom:8px"><?php echo nova_logo(28); ?><span><?php echo esc_html(get_bloginfo('name') ?: 'NOVA'); ?></span></div><p class="small muted"><?php echo esc_html(nova_site('tagline')); ?>. <?php echo esc_html(nova_site('city')); ?></p></div>
  <div><div class="pfh">Services</div><?php foreach ($d['PILLARS'] as $k => $p) echo '<a href="' . esc_url(nova_link($k)) . '">' . $p['short'] . '</a>'; ?></div>
  <div><div class="pfh">Industries</div><?php foreach ($d['AUD'] as $k => $a) echo '<a href="' . esc_url(nova_link($k)) . '">' . $a['t'] . '</a>'; ?></div>
  <div><div class="pfh">Company</div><a href="<?php echo esc_url(nova_link('how-we-work')); ?>">How we work</a><a href="<?php echo esc_url(nova_link('find-opportunities')); ?>">Finding opportunities</a><a href="<?php echo esc_url(nova_link('about')); ?>">About</a><a href="<?php echo esc_url(nova_link('contact')); ?>">Contact</a><a href="<?php echo esc_attr(nova_tel()); ?>"><?php echo esc_html(nova_site('phone')); ?></a><a href="mailto:<?php echo esc_attr(nova_site('email')); ?>"><?php echo esc_html(nova_site('email')); ?></a></div>
</div><div class="pfin small muted" style="padding-top:12px;border-top:1px solid var(--line)">© <?php echo date('Y'); ?> <?php echo esc_html(get_bloginfo('name') ?: 'NOVA'); ?>. Statistics on this site are from the named third-party sources; results vary by business and nothing here is a guarantee. Product names and marks belong to their owners and indicate compatibility, not endorsement.</div></footer>
</div>
<?php wp_footer(); ?>
</body>
</html>
