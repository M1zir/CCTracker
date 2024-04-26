import  { useState} from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardDescription, CardTitle } from "@/components/ui/card";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { useCrypto } from '../contexts/CryptoContext';
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Details from '@/pages/details';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export default function Component(): JSX.Element {
  const { cryptoData, loading } = useCrypto();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);

  
  const handleRowClick = (coin) => {
    setSelectedCoin(coin);
    setDialogOpen(true);
    
  };
  return (
    <div className='w-full p-20'>
      <Card className='w-full p-2 hover:cursor-pointer border-2 border-slate-50 border-opacity-10 rounded-xl'>
        <CardHeader>
          <CardTitle className="font-medium text-2xl">Top Cryptocurrencies</CardTitle>
          <CardDescription className="font-medium text-lg">Real-time price information for top cryptocurrencies.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-xl text-primary">Coin</TableHead>
                <TableHead className="font-bold text-xl text-primary">Last Price</TableHead>
                <TableHead className="font-bold text-xl text-primary">Change (%)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-slate-50'>
              {loading ? (
                <SkeletonRows />
              ) : (
                cryptoData.map((data, index) => (
                    <TableRow className='border-slate-100 w-full' key={index} onClick={() => handleRowClick(data)}>
                    <TableCell className="flex items-center">
                      <img src={data.imageUrl} alt={data.name} style={{ width: 50, height: 50, marginRight: 10 }} />
                      <span className="font-semibold text-lg">{data.name}</span>
                    </TableCell>
                    <TableCell className="font-semibold text-lg">{formatter.format(parseFloat(data.lastPrice))}</TableCell>
                    <TableCell className="font-semibold text-lg" style={{ color: parseFloat(data.priceChangePercent) > 0 ? 'green' : 'red' }}>{data.priceChangePercent}%</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>{cryptoData.length}</strong> entries
          </div>
        </CardFooter>
      </Card>
      {isDialogOpen && selectedCoin && (
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-[825px]">
            <DialogHeader>
              <div className='flex justify-center items-center gap-4'>
                <img src={selectedCoin.imageUrl} alt={selectedCoin.name} style={{ width: 35, height: 35}} />
                <DialogTitle className='text-2xl font-bold text-foreground text-center pb-2'>{selectedCoin.name}</DialogTitle>
              </div>
              <DialogDescription>
                Detailed view of {selectedCoin.name} for the past 30 days. See historical data and price changes.
              </DialogDescription>
            </DialogHeader>
            <Details />
            <DialogFooter>
              <Button onClick={() => setDialogOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

function SkeletonRows() {
  return (
    <TableRow>
      <TableCell className='space-y-2' colSpan={3}>
        <Skeleton className="py-5 h-20 align-middle" />
        <Skeleton className="py-5 h-20 align-middle" />
        <Skeleton className="py-5h-20  align-middle" />
        <Skeleton className="py-5 h-20 align-middle" />
        <Skeleton className="py-5 h-20 align-middle" />
        <Skeleton className="py-5 h-20 align-middle" />
      </TableCell>
    </TableRow>
  );
}