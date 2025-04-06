declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module 'swiper/css' {}
declare module 'swiper/css/pagination' {}
declare module 'swiper/css/navigation' {}

declare module '*.png' {
  const value: string;
  export default value;
}