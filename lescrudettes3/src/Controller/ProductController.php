<?php

namespace App\Controller;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class ProductController extends AbstractController{
    #[Route('/product', name: 'app_product')]
    public function index(EntityManagerInterface $entityManager)
    {

        $product = $entityManager->getRepository(Product::class)->findAll();

        dd($product);
        return $this->render('product/product.html.twig', [
            'product' => $product['name'],
            'description' => $product['description'],
            'image' => $product['image']
        ]);
    }
}
