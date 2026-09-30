<?php get_header(); ?>
<section class="hero small"><div class="pin narrow"><div class="eyebrow">How we work</div><h1>A conversation first. A number at every step after.</h1><p class="lede">We've watched small businesses get burned by agencies that sell hours and vendors that sell dashboards. So we built a process where you see the number before you pay, during the pilot, and every week after.</p><div class="pills" style="gap:10px;margin-top:8px"><a class="pbtn big" href="<?php echo esc_url(nova_site('bookingUrl')); ?>"><?php echo nova_cta_text(); ?></a></div></div></section>
<?php echo nova_how_block(); ?>
<section class="psec alt"><div class="pin"><div class="eyebrow">What you get at each step</div><div class="tw"><table><thead><tr><th>Step</th><th>You receive</th><th>Time</th></tr></thead><tbody>
  <tr><td>Free consultation</td><td>A frank conversation about your business and whether AI can help; if it can, the two or three places to start.</td><td>30 min</td></tr>
  <tr><td>Opportunity audit</td><td>Roadmap: your baseline numbers, the workflows costing you the most ranked by impact and ease, pilot proposals for the top three.</td><td>2 weeks</td></tr>
  <tr><td>Pilot</td><td>One automation or agent live in shadow mode then production, weekly check-ins, a go/no-go meeting with the numbers.</td><td>3–6 weeks</td></tr>
  <tr><td>Setup</td><td>Full build, runbook, training, disclosure and consent language, monitoring.</td><td>2–6 weeks</td></tr>
  <tr><td>Managed</td><td>Monitoring, tuning, Monday note, monthly report, one improvement a month, quarterly review.</td><td>Month-to-month</td></tr>
</tbody></table></div></div></section>
<section class="psec"><div class="pin narrow"><div class="eyebrow">Our standards</div><h2>What we won't skip.</h2><?php echo nova_pains(['A two-week baseline before we claim any result.','Every account, number and login in your company\'s name.','A human fallback path configured and tested before go-live.','Disclosure and consent language approved in writing.','Shadow mode — a person reviews before a customer hears it.','A runbook so you could run it without us for 30 days.'], true); ?></div></section>
<?php echo nova_cta_block(); get_footer(); ?>
