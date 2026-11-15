import React from 'react'
import { getProduct } from '@/lib/api'
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = await getProduct(Number(id)).catch(() => null);
    if (!product) notFound();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <Image src={product.image} alt={product.title} width={300} height={300} />
            <div className="text-xl text-center flex flex-col gap-4 py-5 max-w-175">
                <h1>{product.title}</h1>
                <p  className='text-[15px]'>{product.description}</p>
                <p>${product.price}</p></div>

            <div className="text-[#b3b3b3] text-center">
                <p>{product.rating.rate} Stars</p>
                <p>Customer reviews ({product.rating.count})</p>

            </div>


        </div>
    )
}