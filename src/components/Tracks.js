function Tracks() {
  return (
    <section id="tracks" className="relative w-full">
      {/* Train platform background*/}
      <img
        src="/images/train_platform.svg"
        alt=""
        aria-hidden
        className="block h-auto w-full"
      />

      <div className="absolute inset-0">
        {/* Train sign*/}
        <div className="absolute left-1/2 top-[16%] flex h-[18%] w-[78%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <img
            src="/images/train_sign.svg"
            alt="Track sign"
            className="h-full w-full object-contain object-center"
          />
        </div>

        {/* Train */}
        <div className="absolute bottom-[5%] left-1/2 flex h-[54%] w-[94%] -translate-x-1/2 translate-y-0 items-end justify-center">
          <img
            src="/images/train.svg"
            alt="Train"
            className="h-full w-full object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Tracks;
