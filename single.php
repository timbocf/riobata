<?php
/**
 * The Template for displaying all single posts.
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */

get_header(); ?>

		<div id="container">
			<div id="content" role="main">

			<?php
			/* Run the loop to output the post.
			 * If you want to overload this in a child theme then include a file
			 * called loop-single.php and that will be used instead.
			 */
			get_template_part( 'loop', 'single' );
			?>

			</div><!-- #content -->
		</div><!-- #container -->

<?php // get_sidebar(); ?>
<?php get_footer(); ?>

</div>
<!-- CUSTOM FOOTER -->
    <div id="footerwrap">
        <div id="customfooter">
            <div id="footerMenu">
                <!--<ul>
                    <li><a href="index.php?page=home">home</a></li>
                    <li><a href="index.php?page=services">services</a></li>
                    <li><a href="index.php?page=equipment">equipment</a></li>
                </ul>-->
                <?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' => 'primary' ) ); ?>
            </div>
            <div id="footer_email_phone">
                <span class="email">email:  rei@riobataenterprise.com</span>
                <span class="phone">phone:  214-901-8563</span>
            </div>
        </div>
    </div>
<!-- FOOTER -->