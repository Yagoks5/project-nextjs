import { notFound } from "next/navigation";

interface ReviewsParams {
  params: {
    productId: number;
    reviewId: number;
  };
}

export default function Reviews({ params }: ReviewsParams) {
  if (params.reviewId > 100) {
    notFound();
  }
  return (
    <div>
      <p>Produto {params.productId}</p>
      <p>Reviews do produto {params.reviewId}</p>
    </div>
  );
}
