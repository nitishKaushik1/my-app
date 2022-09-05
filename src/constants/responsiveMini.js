export const responsiveMini = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet_landscape: {
    breakpoint: { max: 1280, min: 960 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet_portrait: {
    breakpoint: { max: 960, min: 660 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 660, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
