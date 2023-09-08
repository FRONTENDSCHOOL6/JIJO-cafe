function TextHorizen({children}) {
  return (
    <>
      <p className="flex before:flex-grow before:h-px before:mx-1 after:flex-grow after:h-px after:mx-1 items-center after:bg-darkGray before:bg-darkGray text-darkGray">
        {children}
      </p>
    </>
  );
}

export default TextHorizen;
