import { getProducts } from '@/lib/api'
import Link from 'next/dist/client/link';
import Image from "next/image"

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="flex w-full justify-center text-center py-12">
      <div className="grid grid-cols-2 gap-4 max-w-195 mx-auto ">

        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div key={product.id} className="bg-muted p-4 rounded-lg shadow-md flex flex-col gap-4 items-center h-full w-full">
              <Image src={product.image} alt={product.title} width={180} height={200} className=" w-60 h-60 object-contain " />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-muted-foreground">{product.category}</p>
              <p className="text-2xl font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div >
  )
}
