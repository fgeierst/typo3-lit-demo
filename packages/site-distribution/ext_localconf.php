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
