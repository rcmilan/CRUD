import React from "react";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react/swiper-react";

import { useForm } from "react-hook-form";
import { useLoremStore } from "../../store/lorem";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const SwiperComponent = () => {
  const addQuote = useLoremStore((state) => state.addLoremIpsun);
  const contents = useLoremStore((state) => state.loremIpsuns);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    data.id = Date.now();
    addQuote(data);

  };

  const SlideButton = () => {
    const swiper = useSwiper();

    return (
      <>
        <button onClick={() => swiper.slidePrev()}>
          Slide to the prev slide
        </button>
        <button onClick={() => swiper.slideNext()}>
          Slide to the next slide
        </button>
      </>
    );
  };

  const QuoteForm = () => {
    return (
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          Quote
          <input {...register("text", { required: true, minLength: 2 })} />
          <p>
            {errors.text?.type === "required" && "Texto é obrigatório"}
            {errors.text?.type === "minLength" && "Minimo: 2 caracteres"}
          </p>
        </div>

        <input type="submit" value="enviar" />
      </form>
    );
  };

  return (
    <>
      <QuoteForm />
      <hr />
      <Swiper
        modules={[Virtual]}
        spaceBetween={50}
        slidesPerView={3}
      >
        {contents.map((content, index) => (
          <SwiperSlide key={content.id} virtualIndex={index}>
            {({ isActive }) => {
              return (
                <>
                  {isActive && <h1>Active</h1>}

                  {content.text}
                </>
              );
            }}
          </SwiperSlide>
        ))}
        <span slot="container-end">
          <SlideButton />
        </span>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
