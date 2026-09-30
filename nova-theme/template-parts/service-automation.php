<?php $d = nova_data(); ?>
<section class="psec"><div class="pin"><div class="eyebrow">What we connect</div><h2><?php echo (int)$d['taskCount']; ?> proven automations across six parts of your business.</h2><div class="cgrid">
<?php foreach ($d['cats'] as $c) echo '<div class="ccard"><div class="cn">' . (int)$c['n'] . '</div><h3>' . $c['t'] . '</h3><p>' . $c['d'] . '</p></div>'; ?>
</div></div></section>
