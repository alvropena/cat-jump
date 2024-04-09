"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'



export default function Component() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = () => {
    if (password === 'theCorrectPassword') {
      setIsAuthenticated(true);
      setIsDialogOpen(false);
    } else {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center p-4 bg-black">
      <header className="w-full text-center p-4">

      </header>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>What&apos;s up Riri?</DialogTitle>
            <DialogDescription>Type the password.</DialogDescription>
          </DialogHeader>
          <Input
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="button" onClick={handlePasswordSubmit}>Submit</Button>
        </DialogContent>
      </Dialog>
      {isAuthenticated && (
        <Carousel className="w-full max-w-6xl">
          <h1 className="text-3xl text-white">An Album for Ange</h1>
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-start p-6 gap-6 flex-col">
                    <Image
                      alt="Image"
                      className="rounded"
                      height={225}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "400/225",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold leading-none">Slide 1</h3>
                      <p className="text-sm font-medium text-gray-500 leading-none">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum mi sed lacus scelerisque, vel commodo dolor pellentesque. Suspendisse auctor, ipsum a malesuada elementum, magna sapien fringilla libero, nec aliquam.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-start p-6 gap-6 flex-col">
                    <Image
                      alt="Image"
                      className="rounded"
                      height={225}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "400/225",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold leading-none">Slide 2</h3>
                      <p className="text-sm font-medium text-gray-500 leading-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum mi sed lacus scelerisque, vel commodo dolor pellentesque. Suspendisse auctor, ipsum a malesuada elementum, magna sapien fringilla libero, nec aliquam.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-start p-6 gap-6 flex-col">
                    <Image
                      alt="Image"
                      className="rounded"
                      height={225}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "400/225",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold leading-none">Slide 3</h3>
                      <p className="text-sm font-medium text-gray-500 leading-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum mi sed lacus scelerisque, vel commodo dolor pellentesque. Suspendisse auctor, ipsum a malesuada elementum, magna sapien fringilla libero, nec aliquam.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  )
}

