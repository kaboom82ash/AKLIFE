<?php
/**
 * NOVA Automation theme.
 */
if (!defined('ABSPATH')) exit;

define('NOVA_VERSION', '1.0.0');
require_once get_template_directory() . '/inc/helpers.php';

/* ---------- Data ---------- */
function nova_data() {
  static $data = null;
  if ($data === null) $data = require get_template_directory() . '/inc/data.php';
  return $data;
}

/* ---------- Site settings (Customizer with defaults from data.php) ---------- */
function nova_site($key) {
  $defaults = nova_data()['SITE'];
  $val = get_theme_mod('nova_' . $key, $defaults[$key] ?? '');
  if ($key === 'bookingUrl') {
    $contact = get_page_by_path('contact');
    return $val && $val !== 'contact.html' ? $val : ($contact ? get_permalink($contact) : home_url('/contact/'));
  }
  return $val;
}

add_action('after_setup_theme', function () {
  add_theme_support('title-tag');
  add_theme_support('html5', ['search-form','comment-form','comment-list','gallery','caption','style','script']);
  add_theme_support('post-thumbnails');
  add_theme_support('custom-logo');
  register_nav_menus(['primary' => __('Primary (optional — replaces the built-in menu)', 'nova')]);
});

add_action('wp_enqueue_scripts', function () {
  wp_enqueue_style('nova-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap', [], null);
  wp_enqueue_style('nova-site', get_template_directory_uri() . '/assets/site.css', ['nova-fonts'], NOVA_VERSION);
  wp_enqueue_script('nova-site', get_template_directory_uri() . '/assets/site.js', [], NOVA_VERSION, true);
});

add_filter('body_class', function ($c) { $c[] = 'is-public'; return $c; });

/* ---------- Customizer ---------- */
add_action('customize_register', function ($wp) {
  $wp->add_section('nova_site', ['title' => __('NOVA site settings', 'nova'), 'priority' => 20]);
  $fields = [
    'years' => 'Years of experience (trust strip)', 'clients' => 'Businesses automated (trust strip)', 'tasksRun' => 'Automations in production (trust strip)',
    'founder' => 'Founder / team name (About page)', 'phone' => 'Phone', 'email' => 'Contact email (form recipient)', 'city' => 'Service area line',
    'bookingUrl' => 'Booking URL (leave blank to use the Contact page)', 'tagline' => 'Tagline',
  ];
  $defaults = nova_data()['SITE'];
  foreach ($fields as $k => $label) {
    $wp->add_setting('nova_' . $k, ['default' => $defaults[$k] ?? '', 'sanitize_callback' => 'sanitize_text_field']);
    $wp->add_control('nova_' . $k, ['label' => $label, 'section' => 'nova_site', 'type' => 'text']);
  }
});

/* ---------- Page templates by slug ---------- */
add_filter('template_include', function ($template) {
  if (is_front_page() && !is_home()) return locate_template('front-page.php') ?: $template;
  if (is_page()) {
    $slug = get_post_field('post_name', get_queried_object_id());
    $d = nova_data();
    $map = ['how-we-work' => 'how-we-work', 'find-opportunities' => 'find-opportunities', 'about' => 'about', 'contact' => 'contact'];
    if (isset($d['AUD'][$slug])) $file = 'industry';
    elseif (isset($d['PILLARS'][$slug])) $file = 'service';
    elseif (isset($map[$slug])) $file = $map[$slug];
    else return $template; // ordinary WP page → page.php
    $found = locate_template('page-templates/' . $file . '.php');
    if ($found) return $found;
  }
  return $template;
});

/* ---------- Create the site pages on activation ---------- */
add_action('after_switch_theme', function () {
  $d = nova_data();
  $pages = ['home' => 'Home'];
  foreach ($d['AUD'] as $slug => $a) $pages[$slug] = $a['t'];
  foreach ($d['PILLARS'] as $slug => $p) $pages[$slug] = $p['t'];
  $pages += ['how-we-work' => 'How we work', 'find-opportunities' => 'Finding opportunities', 'about' => 'About', 'contact' => 'Free consultation'];
  foreach ($pages as $slug => $title) {
    if (get_page_by_path($slug)) continue;
    wp_insert_post(['post_type' => 'page', 'post_status' => 'publish', 'post_name' => $slug, 'post_title' => $title, 'post_content' => '']);
  }
  $home = get_page_by_path('home');
  if ($home) { update_option('show_on_front', 'page'); update_option('page_on_front', $home->ID); }
});

/* ---------- Contact form handler (wp_mail to the configured email) ---------- */
add_action('admin_post_nopriv_nova_contact', 'nova_handle_contact');
add_action('admin_post_nova_contact', 'nova_handle_contact');
function nova_handle_contact() {
  if (!isset($_POST['nova_nonce']) || !wp_verify_nonce($_POST['nova_nonce'], 'nova_contact')) wp_die('Invalid request.');
  if (!empty($_POST['website'])) { wp_safe_redirect(add_query_arg('sent', '1', wp_get_referer() ?: home_url('/contact/'))); exit; } // honeypot
  $f = fn($k) => sanitize_text_field(wp_unslash($_POST[$k] ?? ''));
  $msg = sanitize_textarea_field(wp_unslash($_POST['c_msg'] ?? ''));
  $body = "Name: {$f('c_name')}\nBusiness: {$f('c_biz')}\nEmail: {$f('c_email')}\nPhone: {$f('c_phone')}\nIndustry: {$f('c_ind')}\nInterested in: {$f('c_svc')}\nBest times: {$f('c_time')}\n\nWhat they'd like to talk about:\n{$msg}";
  $to = sanitize_email(nova_site('email')) ?: get_option('admin_email');
  $headers = [];
  if (is_email($f('c_email'))) $headers[] = 'Reply-To: ' . $f('c_name') . ' <' . $f('c_email') . '>';
  wp_mail($to, 'Free consultation — ' . $f('c_biz'), $body, $headers);
  wp_safe_redirect(add_query_arg('sent', '1', wp_get_referer() ?: home_url('/contact/')));
  exit;
}
