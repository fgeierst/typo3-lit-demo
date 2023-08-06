<?php

namespace fgeierst\SiteDistribution\Controller;

use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;

class TeaserController extends ActionController
{
    public function listAction()
    {
        $this->view->assign('data', $this->configurationManager->getContentObject()->data);
        $this->view->assign('subheader', $this->configurationManager->getContentObject()->data['subheader']);
        return $this->htmlResponse();
    }
}
