import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Amber S.",
    date: "October 18, 2025",
    rating: 5,
    text: "Great experience using this florist for the first time. Order was placed the day before and arrived quickly the next day. Our friend said the bouquet was beautiful. We look forward to the next order.",
    response: "Hi Amber! Thank you so much for your great Review!! Glad to hear the flowers were well received!! We look forward to working with you again!"
  },
  {
    name: "David H.",
    date: "September 23, 2025",
    rating: 5,
    text: "The floral arrangement was for my Mother's 92nd birthday. When it arrived she was so happy and surprised. My Mom said they were absolutely amazing and beautiful.\n\nSincerely,\nDavid Haaland\nMorganton, Georgia",
    response: "Hi David! Thank you so much for the Great Review!! I'm thrilled we could be a small part of making your Mother's 92nd birthday special!! Thanks for taking the time to review us!!"
  },
  {
    name: "Robbie S.",
    date: "September 20, 2025",
    rating: 5,
    text: "Beautiful arrangement",
    response: "Hi Robbie!!\nThank you for the great review!! We appreciate you taking the time to let us know!"
  },
  {
    name: "Joanne B.",
    date: "August 16, 2025",
    rating: 5,
    text: "The flowers looked just like the picture. Lovely.",
    response: "Hi Joanne! Thank you so much for the Great Review!! We are so glad you are happy! Thank you for taking the time to review!"
  },
  {
    name: "Nancy B.",
    date: "August 6, 2025",
    rating: 5,
    text: "This was my first order from your floral store after a recommendation from a friend. The arrangement delivered timely and was beautiful. The recipient sent me a picture and remarked how lovely it was. I will definitely use your shop in the future. Thank you.",
    response: "Hi Nancy!\nThank you so much for the Great Review!! I'm thrilled your friend recommended us and that you were pleased as well!\nThanks for taking the time to review!"
  },
  {
    name: "Tracy S.",
    date: "July 31, 2025",
    rating: 5,
    text: "Cattails florist delivered the most perfect flower/ plant combo arrangement promptly.\nThe receipent sent me a photo of the arrangement and it was a perfect match of the website order. That's amazing!",
    response: ""
  }
];

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 6;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
  const startIndex = currentPage * reviewsPerPage;
  const endIndex = Math.min(startIndex + reviewsPerPage, reviews.length);
  const currentReviews = reviews.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <section className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-semibold mb-4">Most Recent Reviews</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className="h-10 w-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Now viewing reviews {startIndex + 1} - {endIndex} of {reviews.length}
            </p>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="h-10 w-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {currentReviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                
                <div className="mb-3">
                  <p className="font-semibold">Reviewed by {review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>

                <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                  {review.text}
                </p>

                {review.response && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-semibold mb-2">Florist's Response:</p>
                    <p className="text-xs text-muted-foreground whitespace-pre-line">
                      {review.response}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
