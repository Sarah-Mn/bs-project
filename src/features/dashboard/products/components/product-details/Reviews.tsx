import { Rating } from "@mui/material";
import { Product } from "../../types";

const Reviews = ({ product }: { product: Product }) => {
  return (
    <div className="space-y-4">
      {product.reviews.map((review, index) => (
        <div key={index} className="border rounded-lg p-4 bg-gray-50 text-sm">
          <div className="flex items-center space-x-4">
            <p className="font-medium">{review.reviewerName}</p>
            <Rating value={review.rating} precision={0.1} readOnly />{" "}
          </div>
          <p className="text-gray-600 mt-2">{review.comment}</p>
          <p className="text-xs text-gray-400 mt-2">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
