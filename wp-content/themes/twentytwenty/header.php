<?php
/**
 * Header file for the Twenty Twenty WordPress default theme.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

?><!DOCTYPE html>

<html class="no-js" <?php language_attributes(); ?>>

<head>

    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#040404">
    <meta name="description" content="<?php the_field( 'seo_description', 57 ); ?>">
    <meta name="keywords" content="<?php the_field( 'seo_keywords', 57 ); ?>">
    <meta name="copyright" content="<?php the_field( 'seo_copyright', 57 ); ?>">
    <meta name="contact" content="<?php the_field( 'seo_contact', 57 ); ?>">
    <meta name="abstract" content="<?php the_field( 'seo_abstract', 57 ); ?>">
    <meta name="author" content="<?php the_field( 'seo_author_web_author', 57 ); ?>">
    <meta name="web_author" content="<?php the_field( 'seo_author_web_author', 57 ); ?>">

	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

<?php
wp_body_open();
?>

<!-- ======= Preloader ======= -->
<div class="sk-cube-grid-wrap" id="sk-cube-grid-wrap">
    <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
    </div>
</div>

<!-- ======= Header ======= -->
<header id="header">
    <div class="container">

        <h1>
            <a href="<?php echo home_url(); ?>">
				<?php the_field( 'home_title' ); ?>
            </a>
        </h1>

        <h2>
            <span>
                <?php the_field( 'home_description' ); ?>
            </span>
        </h2>

        <nav id="navbar" class="navbar">

			<?php

			// wp_nav_menu
			wp_nav_menu( array(
				'theme_location'  => 'primary',
				'add_nav_a_class' => 'nav-link'
			) );

			?>

            <i class="bi bi-list mobile-nav-toggle"></i>

        </nav><!-- .navbar -->

        <!--<div class="social-links">
            <a href="https://t.me/oxyfly" title="Telegram"
               target="_blank" rel="noopener noreferrer"><i class="bi bi-telegram"></i></a>
            <a href="skype:foroxygen?chat" title="Skype"
               target="_blank" rel="noopener noreferrer"><i class="bi bi-skype"></i></a>
            <a href="https://www.facebook.com/oxyblade" title="Facebook"
               target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
            <a href="https://twitter.com/foroxygen" title="Twitter"
               target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter"></i></a>
            <a href="https://www.linkedin.com/in/andrew-zhukov" title="Linkedin"
               target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
            <a href="https://github.com/oxyblade" title="GitHub"
               target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
        </div>-->

    </div>
</header>
