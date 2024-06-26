const SvgWarning = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      fill="currentColor"
      aria-label="Warning"
      role="img"
      data-testid="icon-warning"
      {...props}
    >
      <path d="M109.23-160 480-800l370.77 640H109.23ZM178-200h604L480-720 178-200Zm302-55.385q10.462 0 17.539-7.076 7.076-7.077 7.076-17.539 0-10.462-7.076-17.539-7.077-7.076-17.539-7.076-10.462 0-17.539 7.076-7.076 7.077-7.076 17.539 0 10.462 7.076 17.539 7.077 7.076 17.539 7.076Zm-20-89.23h40v-200h-40v200ZM480-460Z" />
    </svg>
  );
};
export default SvgWarning;
