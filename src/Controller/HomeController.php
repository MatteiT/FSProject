<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */

    #[Route('/', name: 'app_home')]

    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/about', name: 'app_about')]
    public function about(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/error', name: 'app_error')] 
    public function error(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/search', name: 'app_search')]
    public function contact(): Response
    {
        return $this->render('home/index.html.twig');
    }

    

}
