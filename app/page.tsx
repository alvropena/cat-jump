import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center p-4">
      <header className="w-full text-center p-4">
        <h1 className="text-3xl font-bold">Ange is the cutest</h1>
      </header>
      <Carousel className="w-full max-w-6xl">
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
    </div>
  )
}

