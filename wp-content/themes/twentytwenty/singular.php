<?php
/**
 * The template for displaying single posts and pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
?>

<!-- ======= About Section ======= -->
<section id="about" class="about">

    <!-- ======= About Me ======= -->
    <div class="about-me container">

        <div class="section-title">
            <h2>
				<?php the_field( 'about_title' ); ?>
            </h2>
            <p>
				<?php the_field( 'about_sub_title' ); ?>
            </p>
        </div>

        <div class="row">

            <div class="col-lg-4 col-sm-2 mt-4">
                <div class="about-me-img">
					<?php $about_info_image = get_field( 'about_info_image' ); ?>
					<?php if ( $about_info_image ) : ?>
                        <img src="<?php echo esc_url( $about_info_image['url'] ); ?>"
                             alt="<?php echo esc_attr( $about_info_image['alt'] ); ?>"
                             title="<?php echo esc_attr( $about_info_image['title'] ); ?>" class="img-fluid" loading="lazy"/>
					<?php endif; ?>
                </div>
            </div>

            <div class="col-lg-8 col-sm-10 pt-4 pt-lg-0 content mt-4">

                <h3>
					<?php the_field( 'about_info_title' ); ?>
                </h3>

                <p class="fst-italic text-uppercase">
					<?php the_field( 'about_info_sub_title' ); ?>
                </p>

                <div class="row">

					<?php if ( have_rows( 'about_info_item_add' ) ) : ?>
						<?php while ( have_rows( 'about_info_item_add' ) ) :
							the_row(); ?>

                            <div class="col-lg-6">

                                <ul>
									<?php if ( have_rows( 'about_info_item_link' ) ) : ?>
										<?php while ( have_rows( 'about_info_item_link' ) ) : the_row(); ?>
                                            <li class="about-link">
                                                <i class="bi bi-chevron-right"></i>
                                                <strong>
													<?php the_sub_field( 'about_info_item_-_title' ); ?>
                                                </strong>
                                                <span>
                                                    <a href="<?php the_sub_field( 'about_info_item_link_address' ); ?>"
                                                       title="<?php the_sub_field( 'about_info_item_link_title' ); ?>"
                                                       target="_blank" rel="noopener noreferrer">
                                                        <?php the_sub_field( 'about_info_item_link_title' ); ?>
                                                    </a>
                                                </span>
                                            </li>
										<?php endwhile; ?>
									<?php else : ?>
										<?php // no rows found ?>
									<?php endif; ?>

                                </ul>
                            </div>
						<?php endwhile; ?>
					<?php else : ?>
						<?php // no rows found ?>
					<?php endif; ?>

                </div>

                <p>
					<?php the_field( 'about_info_description' ); ?>
                </p>

            </div>

        </div>

    </div>

    <!-- ======= Counts ======= -->
    <div class="counts container">

        <div class="row">

			<?php if ( have_rows( 'about_counts' ) ) : ?>
				<?php while ( have_rows( 'about_counts' ) ) : the_row(); ?>

                    <div class="col-lg-3 col-md-6 pb-5">
                        <div class="count-box">
                            <i class="<?php the_sub_field( 'about_counts_icon' ); ?>"></i>
                            <span data-purecounter-start="0" data-purecounter-end="<?php the_sub_field( 'about_counter_number' ); ?>"
                                  data-purecounter-duration="1"
                                  class="purecounter"></span>
                            <p>
								<?php the_sub_field( 'about_counts_item_title' ); ?>
                            </p>
                        </div>
                    </div>

				<?php endwhile; ?>
			<?php else : ?>
				<?php // no rows found ?>
			<?php endif; ?>

        </div>

    </div>

    <!-- ======= Skills ======= -->
    <div class="skills container">

        <div class="section-title">
            <h2>
				<?php the_field( 'about_skills_title' ); ?>
            </h2>
        </div>

        <div class="row">

			<?php if ( have_rows( 'about_skills' ) ) : ?>
				<?php while ( have_rows( 'about_skills' ) ) : the_row(); ?>

                    <div class="col-lg-3 col-md-4 mt-4">
                        <div class="icon-box">
                            <i class="<?php the_sub_field( 'about_skills_class_icon' ); ?>"
                               style="color: <?php the_sub_field( 'about_skills_class_icon_color' ); ?>"></i>
                            <h3>
								<?php the_sub_field( 'about_skills_item_title' ); ?>
                            </h3>
                        </div>
                    </div>

				<?php endwhile; ?>
			<?php else : ?>
				<?php // no rows found ?>
			<?php endif; ?>

        </div>

    </div>

    <!-- ======= Certificate ======= -->
    <div class="about-me container">

        <div class="section-title">
            <h2>
				<?php the_field( 'about_certificate_title' ); ?>
            </h2>
        </div>

        <div class="row">

			<?php if ( have_rows( 'about_certificate_image' ) ) : ?>
				<?php while ( have_rows( 'about_certificate_image' ) ) : the_row(); ?>

                    <div class="col-md-6 mb-5">
						<?php $about_certificate_image_add = get_sub_field( 'about_certificate_image_add' ); ?>
						<?php if ( $about_certificate_image_add ) : ?>
                            <a href="<?php echo esc_url( $about_certificate_image_add['url'] ); ?>"
                               title="Certificate Educational Center of HTP (High-Tech Park Belarus)"
                               data-gallery="portfolioGallery" class="portfolio-lightbox">
                                <div class="about-me-img">
                                    <img src="<?php echo esc_url( $about_certificate_image_add['url'] ); ?>"
                                         alt="<?php echo esc_attr( $about_certificate_image_add['alt'] ); ?>"
                                         title="<?php echo esc_attr( $about_certificate_image_add['title'] ); ?>"
                                         class="img-fluid" loading="lazy"/>
                                </div>
                            </a>
						<?php endif; ?>
                    </div>

				<?php endwhile; ?>
			<?php else : ?>
				<?php // no rows found ?>
			<?php endif; ?>

        </div>

    </div>

</section>

<!-- ======= Resume Section ======= -->
<section id="resume" class="resume">
    <div class="container">

        <div class="section-title">
            <h2>
				<?php the_field( 'resume_title' ); ?>
            </h2>
            <p>
				<?php the_field( 'resume_sub_title' ); ?>
            </p>
        </div>

        <div class="row">
            <div class="col-lg-12 mt-4">

				<?php if ( have_rows( 'resume_item' ) ) : ?>
					<?php while ( have_rows( 'resume_item' ) ) : the_row(); ?>

                        <div class="resume-item">
                            <h4>
								<?php the_sub_field( 'resume_item_title' ); ?>
                            </h4>
                            <h5>
								<?php the_sub_field( 'resume_item_period' ); ?>
                            </h5>
                            <p>
                                <em>
									<?php the_sub_field( 'resume_item_location' ); ?>
                                </em>
                            </p>
                        </div>

					<?php endwhile; ?>
				<?php else : ?>
					<?php // no rows found ?>
				<?php endif; ?>

            </div>
        </div>

    </div>
</section>

<!-- ======= Services Section ======= -->
<section id="services" class="services">
    <div class="container">

        <div class="section-title">
            <h2>
				<?php the_field( 'services_title' ); ?>
            </h2>
            <p>
				<?php the_field( 'services_subtitle' ); ?>
            </p>
        </div>

        <div class="row">
			<?php if ( have_rows( 'services_items' ) ) : ?>
				<?php while ( have_rows( 'services_items' ) ) : the_row(); ?>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div class="icon-box">
                            <div class="icon"><i class="<?php the_sub_field( 'service_item_icon' ); ?>"></i></div>
                            <h4>
								<?php the_sub_field( 'service_item_title' ); ?>
                            </h4>
                            <p>
								<?php the_sub_field( 'service_item_description' ); ?>
                            </p>
                        </div>
                    </div>

				<?php endwhile; ?>
			<?php else : ?>
				<?php // no rows found ?>
			<?php endif; ?>
        </div>

    </div>
</section>

<!-- ======= Portfolio Section ======= -->
<section id="portfolio" class="portfolio">
    <div class="container">

        <div class="section-title">
            <h2>
				<?php the_field( 'portfolio_title' ); ?>
            </h2>
            <p>
				<?php the_field( 'portfolio_subtitle' ); ?>
            </p>
        </div>

		<?php if ( have_rows( 'portfolio_item' ) ) : ?>
			<?php while ( have_rows( 'portfolio_item' ) ) :
				the_row(); ?>

                <div class="row">
                    <div class="col-lg-12 d-flex justify-content-center mt-4">
                        <ul id="portfolio-filters">

							<?php if ( have_rows( 'portfolio_item_tab' ) ) : ?>
								<?php while ( have_rows( 'portfolio_item_tab' ) ) : the_row(); ?>
                                    <li data-filter="<?php the_sub_field( 'portfolio_item_tab_class' ); ?>">
										<?php the_sub_field( 'portfolio_item_tab_title' ); ?>
                                    </li>

								<?php endwhile; ?>
							<?php else : ?>
								<?php // no rows found ?>
							<?php endif; ?>

                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <p class="projects__notes">
							<?php the_field( 'portfolio_projects_description' ); ?>
                        </p>
                    </div>
                </div>

                <div class="row portfolio-container">

					<?php if ( have_rows( 'portfolio_item_add' ) ) : ?>
						<?php while ( have_rows( 'portfolio_item_add' ) ) : the_row(); ?>

                            <div class="col-lg-4 col-md-6 portfolio-item <?php the_sub_field( 'portfolio_item_class' ); ?>">
                                <div class="portfolio-wrap">

									<?php $portfolio_item_image = get_sub_field( 'portfolio_item_image' ); ?>
									<?php if ( $portfolio_item_image ) : ?>
                                        <img src="<?php echo esc_url( $portfolio_item_image['url'] ); ?>"
                                             alt="<?php echo esc_attr( $portfolio_item_image['alt'] ); ?>"
                                             title="<?php echo esc_attr( $portfolio_item_image['title'] ); ?>"
                                             loading="lazy" class="img-fluid"/>
									<?php endif; ?>

                                    <div class="portfolio-info">
                                        <h4>
											<?php the_sub_field( 'portfolio_item_title' ); ?>
                                        </h4>
                                        <p>
											<?php the_sub_field( 'portfolio_item_description' ); ?>
                                        </p>
                                        <div class="portfolio-links">
                                            <a href="<?php echo esc_url( $portfolio_item_image['url'] ); ?>"
                                               data-gallery="portfolioGallery"
                                               class="portfolio-lightbox" title="<?php the_sub_field( 'portfolio_item_title' ); ?>">
                                                <i class="bx bx-plus"></i>
                                            </a>
                                            <a href="<?php the_sub_field( 'portfolio_item_link_address' ); ?>"
                                               target="_blank" rel="noopener noreferrer"
                                               title="Details"><i class="bx bx-link"></i>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

						<?php endwhile; ?>
					<?php else : ?>
						<?php // no rows found ?>
					<?php endif; ?>

                </div>

			<?php endwhile; ?>
		<?php else : ?>
			<?php // no rows found ?>
		<?php endif; ?>

    </div>
</section>

<!-- ======= Contact Section ======= -->
<section id="contact" class="contact">
    <div class="container">

        <div class="section-title">
            <h2>
				<?php the_field( 'contact_title' ); ?>
            </h2>
            <p>
				<?php the_field( 'contact_subtitle' ); ?>
            </p>
        </div>

        <div class="row mt-2">

			<?php if ( have_rows( 'contact_item' ) ) : ?>
				<?php while ( have_rows( 'contact_item' ) ) : the_row(); ?>

                    <div class="col-md-6 d-flex align-items-stretch mt-4">
                        <div class="info-box">

                            <i class="<?php the_sub_field( 'contact_item_class_icon' ); ?>"></i>

                            <h3>
								<?php the_sub_field( 'contact_item_title' ); ?>
                            </h3>

                            <p class="<?php the_sub_field( 'contact_item_wrapper_class' ); ?>">
								<?php if ( have_rows( 'contact_item_links' ) ) : ?>
									<?php while ( have_rows( 'contact_item_links' ) ) : the_row(); ?>
                                        <a href="<?php the_sub_field( 'contact_item_link_address' ); ?>"
                                           title="Europe" target="_blank" rel="noopener noreferrer">
                                            <i class="<?php the_sub_field( 'contact_item_link_class_icon' ); ?>"></i>
											<?php the_sub_field( 'contact_item_link_title' ); ?>
                                        </a>
									<?php endwhile; ?>
								<?php else : ?>
									<?php // no rows found ?>
								<?php endif; ?>
                            </p>

                        </div>
                    </div>

				<?php endwhile; ?>
			<?php else : ?>
				<?php // no rows found ?>
			<?php endif; ?>

        </div>

    </div>
</section>

<?php get_footer(); ?>
