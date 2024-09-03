
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export default function Component() {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-[250px]">
        <img
          src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Casper"
          alt="Product Image"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          style={{ aspectRatio: "400/400", objectFit: "cover" }}
        />
  
      </div>
      <div className="p-4 bg-background">
        <h3 className="text-lg font-semibold">Acme Prism Tee</h3>
        <p className="text-sm text-muted-foreground">A cozy and stylish t-shirt with a unique prism design.</p>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" size="sm" className="w-full rounded-none rounded-b-lg">
            View
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-background">
          <SheetHeader>
            <SheetTitle>Acme Prism Tee</SheetTitle>
            <SheetDescription>A cozy and stylish t-shirt with a unique prism design.</SheetDescription>
          </SheetHeader>
          <div className="grid gap-6 p-4">
            <img
              src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Casper"
              alt="Product Image"
              width={600}
              height={600}
              className="w-full h-[400px] object-cover rounded-lg"
              style={{ aspectRatio: "600/600", objectFit: "cover" }}
            />
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Price:</span>
                <span>$49.99</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Color:</span>
                <span>Prism</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Material:</span>
                <span>60% Cotton, 40% Polyester</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Size:</span>
                <span>S, M, L, XL</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Inventory:</span>
                <span>In Stock</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Buy Now
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </Card>
  )
}