<?php get_header(); $d = nova_data(); $sent = isset($_GET['sent']); ?>
<section class="hero small"><div class="pin narrow"><div class="eyebrow">Free consultation</div><h1>Let's talk about your business.</h1><p class="lede">Thirty minutes, on the phone or video, about what's slow and what's leaking. No pitch — if we can help, we'll say how and roughly what it takes; if we can't, we'll say that. We reply within one business day with two times.</p></div></section>
<section class="psec"><div class="pin"><div class="cgrid2">
  <?php if ($sent) : ?><div class="card lift"><h3>Thanks — we got it.</h3><p>We'll reply within one business day with two times for a call. Prefer to talk now? Call <a href="<?php echo esc_attr(nova_tel()); ?>"><?php echo esc_html(nova_site('phone')); ?></a>.</p></div>
  <?php else : ?>
  <form class="cform" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
    <input type="hidden" name="action" value="nova_contact"><?php wp_nonce_field('nova_contact', 'nova_nonce'); ?>
    <input type="text" name="website" value="" style="display:none" tabindex="-1" autocomplete="off">
    <label>Your name<input name="c_name" required autocomplete="name"></label>
    <label>Business name<input name="c_biz" required autocomplete="organization"></label>
    <label>Email<input name="c_email" type="email" required autocomplete="email"></label>
    <label>Phone<input name="c_phone" type="tel" autocomplete="tel"></label>
    <label>Industry<select name="c_ind"><?php foreach ($d['AUD'] as $a) echo '<option>' . esc_html($a['t']) . '</option>'; ?><option>Other</option></select></label>
    <label>What's most interesting?<select name="c_svc"><?php foreach ($d['PILLARS'] as $p) echo '<option>' . esc_html($p['t']) . '</option>'; ?><option>Not sure yet</option></select></label>
    <label>What would you like to talk about?<textarea name="c_msg" rows="4" placeholder="e.g. We miss calls after 5pm; quotes take two days; we want our numbers in one place"></textarea></label>
    <label>Best times to reach you<input name="c_time" placeholder="e.g. weekday mornings"></label>
    <button class="pbtn big" type="submit">Request my free consultation</button>
    <p class="small muted">Prefer to talk now? Call <a href="<?php echo esc_attr(nova_tel()); ?>"><?php echo esc_html(nova_site('phone')); ?></a>.</p>
  </form>
  <?php endif; ?>
  <div class="section" style="gap:16px">
    <div class="card"><h3>What happens next</h3><ol style="padding-left:1.2em"><li>We reply within one business day with two times.</li><li>We talk for 30 minutes about your business — no slides.</li><li>You get an honest read: where AI can help, where it can't, and what it would take.</li><li>If it's worth going further, we propose an audit or a pilot with a gate. If not, we say so.</li></ol></div>
    <div class="card"><h3>Direct</h3><p><a href="<?php echo esc_attr(nova_tel()); ?>"><?php echo esc_html(nova_site('phone')); ?></a><br><a href="mailto:<?php echo esc_attr(nova_site('email')); ?>"><?php echo esc_html(nova_site('email')); ?></a></p><p class="small muted"><?php echo esc_html(nova_site('city')); ?></p></div>
  </div></div></section>
<?php get_footer(); ?>
