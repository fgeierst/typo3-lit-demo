<?php
defined('TYPO3') || die('Access denied.');

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    'SiteDistribution',
    'Teaser',
    [
        \fgeierst\SiteDistribution\Controller\TeaserController::class => 'list',
    ],
    // non-cacheable actions
    [
        \fgeierst\SiteDistribution\Controller\TeaserController::class => '',
    ],
    \TYPO3\CMS\Extbase\Utility\ExtensionUtility::PLUGIN_TYPE_CONTENT_ELEMENT
);

// Override HTML sanitizer to allow tags and attributes that we need
$GLOBALS['TYPO3_CONF_VARS']['SYS']['htmlSanitizer']['default'] = fgeierst\SiteDistribution\Sanitizer\CustomHtmlSanitizer::class;
