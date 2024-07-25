import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex h-[60px] items-center justify-between bg-background/80 px-[20px] backdrop-blur-md lg:pr-[56px]">
      <LogoIcon className="lg:h-[19.01px] lg:w-[95.55px]" />
      <div className="flex gap-[51px]">
        <div className="flex items-center text-body-medium max-lg:hidden">
          <Link to="#about" className="mr-[39px]">
            About Nad.fun
          </Link>
          <Link to="#rule" className="mr-[35px]">
            Rule Nad.fun
          </Link>
          <Link to="#how-to-buy">How to buy</Link>
        </div>
        <div
          role="button"
          className="rounded-[32px] bg-purple py-[6px] pl-[13px]  pr-[12px] text-small-bold lg:pb-[10px] lg:pl-[28px] lg:pr-[29px] lg:pt-[11px] lg:text-body-bold"
        >
          Go to Community
        </div>
      </div>
    </div>
  )
}

export default Header

function LogoIcon({ className }: { className: HTMLElement['className'] }) {
  return (
    <svg
      width="78"
      height="16"
      viewBox="0 0 78 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.3037 15.5442H8.95351L3.35022 7.06085V15.5442H0V1.79062H3.35022L8.95351 10.3131V1.79062H12.3037V15.5442Z"
        fill="#9747FF"
      />
      <path
        d="M13.6742 10.0584C13.6742 8.93514 13.8832 7.94901 14.3012 7.10003C14.7322 6.25105 15.3134 5.59798 16.0449 5.14084C16.7763 4.68369 17.5926 4.45512 18.4939 4.45512C19.2645 4.45512 19.9371 4.61186 20.5118 4.92533C21.0996 5.2388 21.5502 5.65023 21.8637 6.15962V4.61186H25.2139V15.5442H21.8637V13.9964C21.5371 14.5058 21.08 14.9172 20.4922 15.2307C19.9175 15.5442 19.2449 15.7009 18.4743 15.7009C17.5861 15.7009 16.7763 15.4723 16.0449 15.0152C15.3134 14.545 14.7322 13.8854 14.3012 13.0364C13.8832 12.1743 13.6742 11.1817 13.6742 10.0584ZM21.8637 10.078C21.8637 9.24208 21.6286 8.58249 21.1584 8.09922C20.7012 7.61595 20.1396 7.37432 19.4735 7.37432C18.8073 7.37432 18.2392 7.61595 17.769 8.09922C17.3118 8.56943 17.0832 9.22249 17.0832 10.0584C17.0832 10.8943 17.3118 11.5605 17.769 12.0568C18.2392 12.5401 18.8073 12.7817 19.4735 12.7817C20.1396 12.7817 20.7012 12.5401 21.1584 12.0568C21.6286 11.5735 21.8637 10.9139 21.8637 10.078Z"
        fill="#9747FF"
      />
      <path
        d="M26.5797 10.0584C26.5797 8.93514 26.7886 7.94901 27.2066 7.10003C27.6376 6.25105 28.2189 5.59798 28.9503 5.14084C29.6817 4.68369 30.498 4.45512 31.3993 4.45512C32.1176 4.45512 32.7707 4.60533 33.3585 4.90574C33.9593 5.20615 34.4295 5.61105 34.7691 6.12044V1.04613H38.1193V15.5442H34.7691V13.9768C34.4556 14.4992 34.005 14.9172 33.4172 15.2307C32.8425 15.5442 32.1699 15.7009 31.3993 15.7009C30.498 15.7009 29.6817 15.4723 28.9503 15.0152C28.2189 14.545 27.6376 13.8854 27.2066 13.0364C26.7886 12.1743 26.5797 11.1817 26.5797 10.0584ZM34.7691 10.078C34.7691 9.24208 34.534 8.58249 34.0638 8.09922C33.6066 7.61595 33.045 7.37432 32.3789 7.37432C31.7127 7.37432 31.1446 7.61595 30.6744 8.09922C30.2172 8.56943 29.9887 9.22249 29.9887 10.0584C29.9887 10.8943 30.2172 11.5605 30.6744 12.0568C31.1446 12.5401 31.7127 12.7817 32.3789 12.7817C33.045 12.7817 33.6066 12.5401 34.0638 12.0568C34.534 11.5735 34.7691 10.9139 34.7691 10.078Z"
        fill="#9747FF"
      />
      <path
        d="M44.0784 15.7009C43.4907 15.7009 43.0074 15.5311 42.6286 15.1915C42.2629 14.8388 42.08 14.4078 42.08 13.8984C42.08 13.376 42.2629 12.9384 42.6286 12.5858C43.0074 12.2331 43.4907 12.0568 44.0784 12.0568C44.6531 12.0568 45.1233 12.2331 45.489 12.5858C45.8678 12.9384 46.0572 13.376 46.0572 13.8984C46.0572 14.4078 45.8678 14.8388 45.489 15.1915C45.1233 15.5311 44.6531 15.7009 44.0784 15.7009Z"
        fill="#9747FF"
      />
      <path
        d="M53.1343 7.39391H51.3319V15.5442H47.9816V7.39391H46.7669V4.61186H47.9816V4.29839C47.9816 2.95307 48.367 1.93429 49.1376 1.24205C49.9082 0.536737 51.038 0.184082 52.527 0.184082C52.7751 0.184082 52.958 0.190613 53.0756 0.203674V3.0445C52.4355 3.00532 51.9849 3.09675 51.7237 3.31879C51.4625 3.54083 51.3319 3.9392 51.3319 4.5139V4.61186H53.1343V7.39391Z"
        fill="#9747FF"
      />
      <path
        d="M65.1119 4.61186V15.5442H61.7617V14.0552C61.4221 14.5384 60.9584 14.9303 60.3706 15.2307C59.7959 15.518 59.1559 15.6617 58.4506 15.6617C57.6147 15.6617 56.8767 15.4788 56.2367 15.1131C55.5967 14.7344 55.1004 14.1923 54.7478 13.487C54.3951 12.7817 54.2188 11.9523 54.2188 10.9988V4.61186H57.5494V10.5482C57.5494 11.2796 57.7388 11.8478 58.1176 12.2527C58.4963 12.6576 59.0057 12.8601 59.6457 12.8601C60.2988 12.8601 60.8147 12.6576 61.1935 12.2527C61.5723 11.8478 61.7617 11.2796 61.7617 10.5482V4.61186H65.1119Z"
        fill="#9747FF"
      />
      <path
        d="M73.7877 4.49431C75.0677 4.49431 76.0865 4.91227 76.8441 5.74819C77.6147 6.57105 78 7.70738 78 9.15718V15.5442H74.6694V9.6078C74.6694 8.87637 74.48 8.3082 74.1012 7.9033C73.7224 7.4984 73.213 7.29595 72.573 7.29595C71.933 7.29595 71.4236 7.4984 71.0449 7.9033C70.6661 8.3082 70.4767 8.87637 70.4767 9.6078V15.5442H67.1265V4.61186H70.4767V6.06166C70.8163 5.57839 71.2734 5.19961 71.8481 4.92533C72.4228 4.63798 73.0694 4.49431 73.7877 4.49431Z"
        fill="#9747FF"
      />
    </svg>
  )
}
