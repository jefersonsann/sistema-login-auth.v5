"use client";

import { useState } from "react";

const SvgVisibility = (props: React.SVGProps<SVGSVGElement>) => {
  const [active, setActive] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      fill="currentColor"
      onClick={() => setActive(!active)}
      data-visibility={active}
      {...props}
    >
      {active ? (
        <path d="M617.846-454.154 586-486q9-52.385-29.692-90.692Q517.615-615 466-606l-31.846-31.846q10.077-4.154 21.038-6.231 10.962-2.077 24.808-2.077 61.154 0 103.654 42.5 42.5 42.5 42.5 103.654 0 13.846-2.077 25.577-2.077 11.731-6.231 20.269Zm126.462 122.923L714-358q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-31.231-31.231q34.846-13.154 70.923-18.962Q443.769-760 480-760q130.231 0 238.231 71.577T876.923-500q-21.461 48.231-54.346 90.654-32.884 42.423-78.269 78.115Zm44.615 216.77L633.231-269.692q-26.539 11.769-65.885 20.731Q528-240 480-240q-131 0-238.231-71.577T83.077-500q23.307-53 61.461-99.269 38.154-46.269 81.462-77.654l-111.539-112 28.308-28.308 674.462 674.462-28.308 28.308ZM254.307-648.615Q219.923-624.154 184-584.308 148.077-544.461 128-500q50 101 143.5 160.5T480-280q34.615 0 69.769-6.731 35.154-6.73 52.846-13.577L537.385-366q-9.462 5.308-26.385 8.731-16.923 3.423-31 3.423-61.154 0-103.654-42.5-42.5-42.5-42.5-103.654 0-13.308 3.423-29.846 3.423-16.539 8.731-27.539l-91.693-91.23ZM541-531Zm-112.539 56.539Z" />
      ) : (
        <path d="M480.181-353.846q60.973 0 103.473-42.681t42.5-103.654q0-60.973-42.681-103.473t-103.654-42.5q-60.973 0-103.473 42.681t-42.5 103.654q0 60.973 42.681 103.473t103.654 42.5ZM480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm.11 152q-129.956 0-236.879-70.731Q136.307-381.461 83.077-500q53.23-118.539 160.044-189.269Q349.934-760 479.89-760q129.956 0 236.879 70.731Q823.693-618.539 876.923-500q-53.23 118.539-160.044 189.269Q610.066-240 480.11-240ZM480-500Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
      )}
    </svg>
  );
};
export default SvgVisibility;
