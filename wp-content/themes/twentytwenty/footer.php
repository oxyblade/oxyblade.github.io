<?php
/**
 * The template for displaying the footer
 *
 * Contains the opening of the #site-footer div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

?>
<div class="credits">
	<?php the_field( 'footer_date', 285 ); ?>
    <a href="<?php echo home_url(); ?>"><?php the_field( 'footer_name', 285 ); ?></a>
</div>

<?php wp_footer(); ?>

</body>
</html>
