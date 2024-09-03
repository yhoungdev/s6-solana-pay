import { useState, useRef } from "react";
import { BigNumber } from "bignumber.js";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { createQR, encodeURL } from "@solana/pay";

interface GalleryCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number; 
  color: string;
  material: string;
  size: string;
  inventory: string;
}

export default function GalleryCard({
    imageUrl,
    title,
    description,
    price,
    color,
    material,
    size,
    inventory,
  }: GalleryCardProps) {
  
    const qrRef = useRef<HTMLDivElement | null>(null);
  
    const handleBuyNow = async () => {
      const connection = new Connection(clusterApiUrl("devnet"));
      const recipient = new PublicKey("9riZWGcTFTLoBpmRM5xfYXCrHsxoqL4ynqBYtNxskYHV"); 
      const amount = new BigNumber(price);
      const label = title;
  
      const urlParams = {
        recipient,
        amount,
        label,
      };
  
      const solanaPayUrl = encodeURL(urlParams);
  
      if (qrRef.current) {
        qrRef.current.innerHTML = ""; 
        const qr = createQR(solanaPayUrl, 512, "transparent");
        qr.append(qrRef.current);
      }
    };

    console.log(qrRef)
  
    return (
      <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-[250px]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" size="sm" className="w-full rounded-none rounded-b-lg">
              View
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background">
            <SheetHeader>
              <SheetTitle>{title}</SheetTitle>
              <SheetDescription>{description}</SheetDescription>
            </SheetHeader>
            <div className="grid gap-6 p-4">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Price:</span>
                  <span>{price} SOL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Color:</span>
                  <span>{color}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Material:</span>
                  <span>{material}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Size:</span>
                  <span>{size}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Inventory:</span>
                  <span>{inventory}</span>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="flex-1" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Scan to Pay</DialogTitle>
                    <DialogDescription>
                      Please scan the QR code to complete your payment.
                    </DialogDescription>
                  </DialogHeader>
                  <div ref={qrRef} className="flex justify-center mt-4 mb-4"></div>
                </DialogContent>
              </Dialog>
            </div>
          </SheetContent>
        </Sheet>
      </Card>
    );
  }
  