import React from "react";
import SectionHeading from "../../components/SectionHeading";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "../../components/TestimonialCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ReviewsSection = ({id}) => {
  return (
    <section id={id} className="container mx-auto py-12 px-6 md:px-0">
      <SectionHeading
        badgeText="Reviews"
        title="Hear What Customers Say About CASA!"
        description="Trusted by Thousands of Business Owners. See what our satisfied customers have to say about CASA."
      />

      <div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          pagination={{
            clickable: true
          }}
          loop={true}
          autoplay={{
            delay: 3000, // 3 seconds per slide
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
