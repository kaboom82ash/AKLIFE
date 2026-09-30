<?php $rows = [
  ['Front-desk agent','Answers every call 24/7, qualifies, books into your system, texts confirmations, transfers emergencies','Gives advice, quotes outside your price book, takes payments without approval','A part-time receptionist — and it covers nights and weekends'],
  ['Intake & lead agent','Replies to every web, GBP, and ad lead in under a minute; follows up seven times; books','Negotiates price; messages anyone without consent','An inside sales assistant'],
  ['Collections agent','Sends the invoice, chases by email/text/voice on a polite schedule, logs promises to pay, flags disputes','Threatens, adds fees not in your terms, contacts your VIP list','An AR clerk and collections-agency fees'],
  ['Support agent','Answers order status, hours, pricing, how-to from your approved knowledge; hands off with a summary','Refunds, account changes, anything outside the knowledge base','A first support hire'],
  ['Scheduling & recall agent','Calls and texts warm lists to book, confirm, and recall; fills cancellations from the waitlist','Cold-calls strangers; calls outside quiet hours','An appointment setter'],
  ['Back-office agent','Captures bills and receipts, codes them, routes approvals, flags duplicates, preps the close','Posts without your bookkeeper\'s review; touches bank credentials','Outsourced data entry'],
]; ?>
<section class="psec"><div class="pin"><div class="eyebrow">The roles</div><h2>Agents you can hire this month.</h2><div class="tw"><table><thead><tr><th>Role</th><th>What it does</th><th>Never does</th><th>Replaces the need for</th></tr></thead><tbody>
<?php foreach ($rows as $r) echo '<tr><td><b>' . $r[0] . '</b></td><td>' . $r[1] . '</td><td class="small">' . $r[2] . '</td><td class="small">' . $r[3] . '</td></tr>'; ?>
</tbody></table></div><p class="caption">Every agent discloses that it's automated and offers a person at any point. Phone minutes and texts run on accounts in your name.</p></div></section>
