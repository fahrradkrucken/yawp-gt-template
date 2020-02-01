<?php
/**
 * Header (Main) Navigation
 */

?>

<!--<div class="header-nav__spacer"></div>-->
<div class="header-nav">
    <div class="header-nav__container flex-container">
        <a class="header-nav__logo" href="<?= home_url() ?>">

        </a>
        <button type="button" class="header-nav__toggle"></button>
        <div class="header-nav__wrap">
            <?= wp_nav_menu([
                'theme_location' => 'main_menu',
                'container' => '',
                'menu_class' => 'header-nav__links',
                'echo' => false,
                'fallback_cb' => false,
                'before' => '',
                'after' => '',
                'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
            ]); ?>
        </div>
    </div>
</div>
