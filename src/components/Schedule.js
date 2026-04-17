function Schedule() {
  return (
    <section
      id="schedule"
      className="w-full min-h-screen px-4 pt-24 pb-16 bg-[#2c3e50]"
    >
      <h2 className="mb-8 text-center text-[clamp(28px,5vw,48px)] font-bold text-[#FFE5BA]">
        Schedule
      </h2>
      <div className="mx-auto w-full max-w-7xl overflow-hidden shadow-lg">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS-_LgmSZP5toKqBkdddsz2Cl5DJcZSi7ghiyX6gH_jcML-XO4bcybx8vCWIv4K_UQMYiooncr9t1l7/pubhtml?widget=true&headers=false"
          title="Hack Brooklyn Schedule"
          className="h-[85vh] w-full border-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Schedule;
