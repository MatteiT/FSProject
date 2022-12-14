<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;



#[Route('/api', name: 'api')]
class ApiController extends AbstractController
{
    #[Route('/', name: 'index')] 
    public function index() : JsonResponse {
        return $this->json(['message' => 'Welcome to API']);
    }

    #[Route('/posts', name: 'api.posts', methods: ['GET'])]
    public function getPOSTs() : JsonResponse {
        $posts = $this->em->getRepository(Post::class)->findAll();
        return $this->json($posts);
    } 

    #[Route('/posts/{id}', name: 'api.posts.show', methods: ['GET'])]
    public function getPOST(int $id) : JsonResponse {
        $post = $this->em->getRepository(Post::class)->find($id);
        return $this->json($post);
    }

    #[Route('/posts', name: 'api.posts.create', methods: ['POST'])]
    public function createPOST() : JsonResponse {
        $post = new Post();
        $post->setTitle('New Post');
        $post->setBody('New Post Body');
        $this->em->persist($post);
        $this->em->flush();
        return $this->json($post);
    }

    #[Route('/posts/{id}', name: 'api.posts.update', methods: ['PUT'])]
    public function updatePOST(int $id) : JsonResponse {
        $post = $this->em->getRepository(Post::class)->find($id);
        $post->setTitle('Updated Post');
        $post->setBody('Updated Post Body');
        $this->em->persist($post);
        $this->em->flush();
        return $this->json($post);
    }

    #[Route('/posts/{id}', name: 'api.posts.delete', methods: ['DELETE'])]
    public function deletePOST(int $id) : JsonResponse {
        $post = $this->em->getRepository(Post::class)->find($id);
        $this->em->remove($post);
        $this->em->flush();
        return $this->json($post);
    }
}



