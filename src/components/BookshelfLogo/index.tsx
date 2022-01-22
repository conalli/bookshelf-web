import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

type BookshelfLogoProps = {
  className?: SVGLogoElements;
  colors?: LogoElements;
};

type SVGLogoElements = LogoElements & {
  main?: string;
};

type LogoVariants = {
  light: LogoElements;
  dark: LogoElements;
};

type LogoElements = {
  text?: string;
  shelf?: string;
  book1?: string;
  book2?: string;
  book3?: string;
};

const defaultColors: LogoVariants = {
  dark: {
    text: "#fafafa",
    shelf: "#d1d5db",
    book1: "#F2994A",
    book2: "#EB5757",
    book3: "#63B3ED",
  },
  light: {
    text: "#525252",
    shelf: "#171717",
    book1: "#F2994A",
    book2: "#EB5757",
    book3: "#63B3ED",
  },
};

const BookshelfLogo: React.FC<BookshelfLogoProps> = ({ colors, className }) => {
  const { theme } = useTheme();
  const [logoColors, setLogoColors] = useState<LogoElements>(
    defaultColors.light
  );

  useEffect(() => {
    if (theme === "light") setLogoColors({ ...defaultColors.light, ...colors });
    if (theme === "dark") setLogoColors({ ...defaultColors.dark, ...colors });
  }, [colors, theme]);

  return (
    <>
      <svg
        className={className?.main}
        width={className ? undefined : "800"}
        height={className ? undefined : "213"}
        viewBox="0 0 800 213"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="182"
          width="800"
          height="25"
          fill={logoColors.shelf}
          className={className?.shelf}
        />
        <path
          d="M51.3281 134.117H25.3828L25.2422 123.219H48.7969C52.6875 123.219 56.0859 122.562 58.9922 121.25C61.8984 119.938 64.1484 118.062 65.7422 115.625C67.3828 113.141 68.2031 110.188 68.2031 106.766C68.2031 103.016 67.4766 99.9688 66.0234 97.625C64.6172 95.2344 62.4375 93.5 59.4844 92.4219C56.5781 91.2969 52.875 90.7344 48.375 90.7344H28.4062V182H14.8359V79.625H48.375C53.625 79.625 58.3125 80.1641 62.4375 81.2422C66.5625 82.2734 70.0547 83.9141 72.9141 86.1641C75.8203 88.3672 78.0234 91.1797 79.5234 94.6016C81.0234 98.0234 81.7734 102.125 81.7734 106.906C81.7734 111.125 80.6953 114.945 78.5391 118.367C76.3828 121.742 73.3828 124.508 69.5391 126.664C65.7422 128.82 61.2891 130.203 56.1797 130.812L51.3281 134.117ZM50.6953 182H20.0391L27.7031 170.961H50.6953C55.0078 170.961 58.6641 170.211 61.6641 168.711C64.7109 167.211 67.0312 165.102 68.625 162.383C70.2188 159.617 71.0156 156.359 71.0156 152.609C71.0156 148.812 70.3359 145.531 68.9766 142.766C67.6172 140 65.4844 137.867 62.5781 136.367C59.6719 134.867 55.9219 134.117 51.3281 134.117H31.9922L32.1328 123.219H58.5703L61.4531 127.156C66.375 127.578 70.5469 128.984 73.9688 131.375C77.3906 133.719 79.9922 136.719 81.7734 140.375C83.6016 144.031 84.5156 148.062 84.5156 152.469C84.5156 158.844 83.1094 164.234 80.2969 168.641C77.5312 173 73.6172 176.328 68.5547 178.625C63.4922 180.875 57.5391 182 50.6953 182ZM99.1406 144.805V143.188C99.1406 137.703 99.9375 132.617 101.531 127.93C103.125 123.195 105.422 119.094 108.422 115.625C111.422 112.109 115.055 109.391 119.32 107.469C123.586 105.5 128.367 104.516 133.664 104.516C139.008 104.516 143.812 105.5 148.078 107.469C152.391 109.391 156.047 112.109 159.047 115.625C162.094 119.094 164.414 123.195 166.008 127.93C167.602 132.617 168.398 137.703 168.398 143.188V144.805C168.398 150.289 167.602 155.375 166.008 160.062C164.414 164.75 162.094 168.852 159.047 172.367C156.047 175.836 152.414 178.555 148.148 180.523C143.93 182.445 139.148 183.406 133.805 183.406C128.461 183.406 123.656 182.445 119.391 180.523C115.125 178.555 111.469 175.836 108.422 172.367C105.422 168.852 103.125 164.75 101.531 160.062C99.9375 155.375 99.1406 150.289 99.1406 144.805ZM112.148 143.188V144.805C112.148 148.602 112.594 152.188 113.484 155.562C114.375 158.891 115.711 161.844 117.492 164.422C119.32 167 121.594 169.039 124.312 170.539C127.031 171.992 130.195 172.719 133.805 172.719C137.367 172.719 140.484 171.992 143.156 170.539C145.875 169.039 148.125 167 149.906 164.422C151.688 161.844 153.023 158.891 153.914 155.562C154.852 152.188 155.32 148.602 155.32 144.805V143.188C155.32 139.438 154.852 135.898 153.914 132.57C153.023 129.195 151.664 126.219 149.836 123.641C148.055 121.016 145.805 118.953 143.086 117.453C140.414 115.953 137.273 115.203 133.664 115.203C130.102 115.203 126.961 115.953 124.242 117.453C121.57 118.953 119.32 121.016 117.492 123.641C115.711 126.219 114.375 129.195 113.484 132.57C112.594 135.898 112.148 139.438 112.148 143.188ZM181.266 144.805V143.188C181.266 137.703 182.062 132.617 183.656 127.93C185.25 123.195 187.547 119.094 190.547 115.625C193.547 112.109 197.18 109.391 201.445 107.469C205.711 105.5 210.492 104.516 215.789 104.516C221.133 104.516 225.938 105.5 230.203 107.469C234.516 109.391 238.172 112.109 241.172 115.625C244.219 119.094 246.539 123.195 248.133 127.93C249.727 132.617 250.523 137.703 250.523 143.188V144.805C250.523 150.289 249.727 155.375 248.133 160.062C246.539 164.75 244.219 168.852 241.172 172.367C238.172 175.836 234.539 178.555 230.273 180.523C226.055 182.445 221.273 183.406 215.93 183.406C210.586 183.406 205.781 182.445 201.516 180.523C197.25 178.555 193.594 175.836 190.547 172.367C187.547 168.852 185.25 164.75 183.656 160.062C182.062 155.375 181.266 150.289 181.266 144.805ZM194.273 143.188V144.805C194.273 148.602 194.719 152.188 195.609 155.562C196.5 158.891 197.836 161.844 199.617 164.422C201.445 167 203.719 169.039 206.438 170.539C209.156 171.992 212.32 172.719 215.93 172.719C219.492 172.719 222.609 171.992 225.281 170.539C228 169.039 230.25 167 232.031 164.422C233.812 161.844 235.148 158.891 236.039 155.562C236.977 152.188 237.445 148.602 237.445 144.805V143.188C237.445 139.438 236.977 135.898 236.039 132.57C235.148 129.195 233.789 126.219 231.961 123.641C230.18 121.016 227.93 118.953 225.211 117.453C222.539 115.953 219.398 115.203 215.789 115.203C212.227 115.203 209.086 115.953 206.367 117.453C203.695 118.953 201.445 121.016 199.617 123.641C197.836 126.219 196.5 129.195 195.609 132.57C194.719 135.898 194.273 139.438 194.273 143.188ZM279.914 74V182H266.836V74H279.914ZM326.391 105.922L293.203 141.43L274.641 160.695L273.586 146.844L286.875 130.953L310.5 105.922H326.391ZM314.508 182L287.367 145.719L294.117 134.117L329.836 182H314.508ZM384.117 161.82C384.117 159.945 383.695 158.211 382.852 156.617C382.055 154.977 380.391 153.5 377.859 152.188C375.375 150.828 371.625 149.656 366.609 148.672C362.391 147.781 358.57 146.727 355.148 145.508C351.773 144.289 348.891 142.812 346.5 141.078C344.156 139.344 342.352 137.305 341.086 134.961C339.82 132.617 339.188 129.875 339.188 126.734C339.188 123.734 339.844 120.898 341.156 118.227C342.516 115.555 344.414 113.188 346.852 111.125C349.336 109.062 352.312 107.445 355.781 106.273C359.25 105.102 363.117 104.516 367.383 104.516C373.477 104.516 378.68 105.594 382.992 107.75C387.305 109.906 390.609 112.789 392.906 116.398C395.203 119.961 396.352 123.922 396.352 128.281H383.344C383.344 126.172 382.711 124.133 381.445 122.164C380.227 120.148 378.422 118.484 376.031 117.172C373.688 115.859 370.805 115.203 367.383 115.203C363.773 115.203 360.844 115.766 358.594 116.891C356.391 117.969 354.773 119.352 353.742 121.039C352.758 122.727 352.266 124.508 352.266 126.383C352.266 127.789 352.5 129.055 352.969 130.18C353.484 131.258 354.375 132.266 355.641 133.203C356.906 134.094 358.688 134.938 360.984 135.734C363.281 136.531 366.211 137.328 369.773 138.125C376.008 139.531 381.141 141.219 385.172 143.188C389.203 145.156 392.203 147.57 394.172 150.43C396.141 153.289 397.125 156.758 397.125 160.836C397.125 164.164 396.422 167.211 395.016 169.977C393.656 172.742 391.664 175.133 389.039 177.148C386.461 179.117 383.367 180.664 379.758 181.789C376.195 182.867 372.188 183.406 367.734 183.406C361.031 183.406 355.359 182.211 350.719 179.82C346.078 177.43 342.562 174.336 340.172 170.539C337.781 166.742 336.586 162.734 336.586 158.516H349.664C349.852 162.078 350.883 164.914 352.758 167.023C354.633 169.086 356.93 170.562 359.648 171.453C362.367 172.297 365.062 172.719 367.734 172.719C371.297 172.719 374.273 172.25 376.664 171.312C379.102 170.375 380.953 169.086 382.219 167.445C383.484 165.805 384.117 163.93 384.117 161.82ZM427.219 74V182H414.211V74H427.219ZM424.125 141.078L418.711 140.867C418.758 135.664 419.531 130.859 421.031 126.453C422.531 122 424.641 118.133 427.359 114.852C430.078 111.57 433.312 109.039 437.062 107.258C440.859 105.43 445.055 104.516 449.648 104.516C453.398 104.516 456.773 105.031 459.773 106.062C462.773 107.047 465.328 108.641 467.438 110.844C469.594 113.047 471.234 115.906 472.359 119.422C473.484 122.891 474.047 127.133 474.047 132.148V182H460.969V132.008C460.969 128.023 460.383 124.836 459.211 122.445C458.039 120.008 456.328 118.25 454.078 117.172C451.828 116.047 449.062 115.484 445.781 115.484C442.547 115.484 439.594 116.164 436.922 117.523C434.297 118.883 432.023 120.758 430.102 123.148C428.227 125.539 426.75 128.281 425.672 131.375C424.641 134.422 424.125 137.656 424.125 141.078ZM525.094 183.406C519.797 183.406 514.992 182.516 510.68 180.734C506.414 178.906 502.734 176.352 499.641 173.07C496.594 169.789 494.25 165.898 492.609 161.398C490.969 156.898 490.148 151.977 490.148 146.633V143.68C490.148 137.492 491.062 131.984 492.891 127.156C494.719 122.281 497.203 118.156 500.344 114.781C503.484 111.406 507.047 108.852 511.031 107.117C515.016 105.383 519.141 104.516 523.406 104.516C528.844 104.516 533.531 105.453 537.469 107.328C541.453 109.203 544.711 111.828 547.242 115.203C549.773 118.531 551.648 122.469 552.867 127.016C554.086 131.516 554.695 136.438 554.695 141.781V147.617H497.883V137H541.688V136.016C541.5 132.641 540.797 129.359 539.578 126.172C538.406 122.984 536.531 120.359 533.953 118.297C531.375 116.234 527.859 115.203 523.406 115.203C520.453 115.203 517.734 115.836 515.25 117.102C512.766 118.32 510.633 120.148 508.852 122.586C507.07 125.023 505.688 128 504.703 131.516C503.719 135.031 503.227 139.086 503.227 143.68V146.633C503.227 150.242 503.719 153.641 504.703 156.828C505.734 159.969 507.211 162.734 509.133 165.125C511.102 167.516 513.469 169.391 516.234 170.75C519.047 172.109 522.234 172.789 525.797 172.789C530.391 172.789 534.281 171.852 537.469 169.977C540.656 168.102 543.445 165.594 545.836 162.453L553.711 168.711C552.07 171.195 549.984 173.562 547.453 175.812C544.922 178.062 541.805 179.891 538.102 181.297C534.445 182.703 530.109 183.406 525.094 183.406ZM584.016 74V182H570.938V74H584.016ZM624.305 182H611.297V97.9062C611.297 92.4219 612.281 87.8047 614.25 84.0547C616.266 80.2578 619.148 77.3984 622.898 75.4766C626.648 73.5078 631.102 72.5234 636.258 72.5234C637.758 72.5234 639.258 72.6172 640.758 72.8047C642.305 72.9922 643.805 73.2734 645.258 73.6484L644.555 84.2656C643.57 84.0312 642.445 83.8672 641.18 83.7734C639.961 83.6797 638.742 83.6328 637.523 83.6328C634.758 83.6328 632.367 84.1953 630.352 85.3203C628.383 86.3984 626.883 87.9922 625.852 90.1016C624.82 92.2109 624.305 94.8125 624.305 97.9062V182ZM640.477 105.922V115.906H599.273V105.922H640.477Z"
          fill={logoColors.text}
          className={className?.text}
        />
        <rect
          x="655"
          y="48"
          width="25"
          height="134"
          fill={logoColors.book1}
          className={className?.book1}
        />
        <rect
          x="680"
          y="62"
          width="25"
          height="120"
          fill={logoColors.book2}
          className={className?.book2}
        />
        <rect
          x="705"
          y="6"
          width="25"
          height="176"
          fill={logoColors.book3}
          className={className?.book3}
        />
      </svg>
    </>
  );
};

export default BookshelfLogo;
