const Calander = () => {
  return (
    <div className="w-full h-full items-center my-3 justify-center">
      <div className="text-heading">Calander</div>
      <div className="md:hidden">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=92vfvsjpf8npmnm89k3k14s72o%40group.calendar.google.com&amp;ctz=Australia/Sydney&mode=AGENDA"
          allowFullScreen={true}
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="w-full h-[50vh] invert contrast-125 brightness-75"
        ></iframe>
      </div>

      <div className="hidden md:block">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=92vfvsjpf8npmnm89k3k14s72o%40group.calendar.google.com&amp;ctz=Australia/Sydney"
          allowFullScreen={true}
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="w-full h-[50vh] invert contrast-125 brightness-75"
        ></iframe>
      </div>
    </div>
  );
};

export default Calander;
