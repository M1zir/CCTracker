import CurrencyCards from "@/components/currency-cards"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background dark:bg-background">
    
      <h3 className="text-md text-primary font-medium">Find The latest Crypto Prices in real time</h3>
      <h1 className="text-4xl my-4 text-foreground font-bold">CCTracker Market Watch</h1>
        <CurrencyCards />
    </div>
  )
}
