

import { Inter } from "next/font/google";
import DashboardLayout from "@/components/layout/dashboardLayout";
import GalleryCard from "@/components/minors/galleryCard";

const inter = Inter({ subsets: ["latin"] });

const products = [
  {
    imageUrl: "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Casper1",
    title: "Acme Prism Tee 1",
    description: "A cozy and stylish t-shirt with a unique prism design.",
    price: 1.2, 
    color: "Prism",
    material: "60% Cotton, 40% Polyester",
    size: "S, M, L, XL",
    inventory: "In Stock",
  },
  {
    imageUrl: "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Casper2",
    title: "Acme Prism Tee 2",
    description: "A cozy and stylish t-shirt with a unique prism design.",
    price: 1.4, 
    color: "Prism",
    material: "60% Cotton, 40% Polyester",
    size: "S, M, L, XL",
    inventory: "In Stock",
  },
  {
    imageUrl: "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Casper3",
    title: "Acme Prism Tee 3",
    description: "A cozy and stylish t-shirt with a unique prism design.",
    price: 1.3, 
    color: "Prism",
    material: "60% Cotton, 40% Polyester",
    size: "S, M, L, XL",
    inventory: "In Stock",
  },
  {
    imageUrl: "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Casper4",
    title: "Acme Prism Tee 4",
    description: "A cozy and stylish t-shirt with a unique prism design.",
    price: 1.5, 
    color: "Prism",
    material: "60% Cotton, 40% Polyester",
    size: "S, M, L, XL",
    inventory: "In Stock",
  },
  {
    imageUrl: "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Casper5",
    title: "Acme Prism Tee 5",
    description: "A cozy and stylish t-shirt with a unique prism design.",
    price: 1.6,
    color: "Prism",
    material: "60% Cotton, 40% Polyester",
    size: "S, M, L, XL",
    inventory: "In Stock",
  },
];

export default function Home() {
  return (
    <main>
      <DashboardLayout>
        <div className="flex flex-wrap items-center justify-center md:justify-left gap-3">
          {products.map((product, index) => (
            <GalleryCard key={index} {...product} />
          ))}
        </div>
      </DashboardLayout>
    </main>
  );
}
