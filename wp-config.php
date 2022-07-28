<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'server_wp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY', '+J|BnsSR>yTx1qyY93j;}R*WiH&THj4ha)y?U*VfQm0!2/l#@-[#|Ipb-XK)6F2!' );
define( 'SECURE_AUTH_KEY', 'UJ*$TSQ0A=TS|Ruu-PiUgN:;7fOAeJ}N3]r8c({Co1w)%):wiFVlS+G3>Z5zduUR' );
define( 'LOGGED_IN_KEY', 'd/n;|W`Rg*FH-<t5tc{r%kI5tQp@Q_Q_DY%+x0#JXM1HT/kc#hGT[`@8,%I$hs[u' );
define( 'NONCE_KEY', '~{v>dq+8!*HMh~mE*J`(|(+sux,vqA^*<C/87[iNUV4c4,mp0/lU*8<%oe-PoARR' );
define( 'AUTH_SALT', '$Y.x|QTC2 OO(H4<-M$,]wj;g$y_u=9>LU_*_Ms7Aw62RGN9rbOU|mI!-uNj4wG6' );
define( 'SECURE_AUTH_SALT', '-F16B/+BNU(D>+#O?WOexh=@1xQcFG1rvlddt6Bdz~pL{r^b/8yLr$!Gg5-q4L%8' );
define( 'LOGGED_IN_SALT', 'o)Y` cuvrE<TX^Tm=p6*18d8+Eb-|$}e&N0t4xDbL^JD)>k:+u`(w(?.m@],M.VL' );
define( 'NONCE_SALT', '`}L!svumqOG[J+W4Qi8tWJ$:2 zo@[~|`szv5sS*b ot]+&<pDSR:I;d!aSLq@]7' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

define( 'FS_METHOD', 'direct' );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
