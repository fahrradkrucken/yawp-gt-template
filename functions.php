<?php
/**
 * ACMWPT functions and definitions
 *
 * @package ACMWPT
 */

use YAWPT\Setup;
use FahrradKruken\YAWP\GTheme\Core;

require 'vendor/autoload.php';

Core::init([
    'path' => [
        'page_templates' => get_template_directory() . '/tpl/',
        'modules'        => get_template_directory() . '/app/modules/',
        'blocks'         => get_template_directory() . '/app/blocks/',
    ],
]);

Core::bootstrap()
    ->addActionAfterSetupTheme(function () { // -- Theme Setup
        add_filter('show_admin_bar', '__return_false');

        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        add_theme_support(
            'html5',
            [
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
            ]
        );

        register_nav_menus([
            'main_menu' => 'Main Menu',
        ]);
    })
    // Enqueue Scripts
    ->addAssetsOnFrontend('/static/', [
        ['app-styles', 'theme.css', ['dashicons']],
        ['app-scripts', 'theme.js', ['jquery']],
    ])
    ->addAssetsOnBackend('/static/', [
        ['app-admin-styles', 'theme.admin.css',],
        ['app-admin-scripts', 'theme.admin.js', ['jquery']],
    ])
    ->addAssetsOnLogin('/static/', [
        ['app-login-styles', 'theme.auth.css'],
    ])
    ->addAssetsDefaultFixes();
