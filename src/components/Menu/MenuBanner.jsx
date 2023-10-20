import LazyImage from "@/utils/LazyImage"

function MenuBanner({bannerTitle, title, subTitle, description, image, alt}) {
  return (
    <section className="bg-white mx-auto max-w-7xl mobile:w-full flex mobile:flex-col justify-between items-center mobile:items-start gap-[3.125rem] pt-[6.25rem] mobile:px-5">
      <div>
        <p className="text-jj_24 font-light">{bannerTitle}</p>
        <h2 className="text-jj_60 font-bold break-keep leading-tight my-10">{title}</h2>
        <div className="text">
          <p className="title text-jj_22 border-b pb-5">{subTitle}</p>
          <p className="desc text-[#1c1c1b] opacity-70 pt-5 w-1/2 break-keep">{description}</p>
        </div>
      </div>
      <figure className="shrink-0 tablet:shrink mobile:w-full">
        <LazyImage className="w-fit h-auto" src={image} alt={alt} />
      </figure>
    </section>
  )
}

export default MenuBanner