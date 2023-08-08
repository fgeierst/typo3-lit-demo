<?php

declare(strict_types=1);

namespace fgeierst\SiteDistribution\Sanitizer;

use TYPO3\CMS\Core\Html\DefaultSanitizerBuilder;
use TYPO3\HtmlSanitizer\Behavior;
use TYPO3\HtmlSanitizer\Behavior\Attr;
use TYPO3\HtmlSanitizer\Behavior\Tag;

class CustomHtmlSanitizer extends DefaultSanitizerBuilder
{
    public function createBehavior(): Behavior
        {
            // Add new flag to allow custom elements
            return parent::createBehavior()
                ->withFlags(Behavior::ALLOW_CUSTOM_ELEMENTS);
        }
}
