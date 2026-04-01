import * as React from "react";

type Props = React.SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MailIcon(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M4.5 7.5A2.5 2.5 0 0 1 7 5h10a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 17 19H7a2.5 2.5 0 0 1-2.5-2.5v-9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m6.8 8.3 4.2 3.4a1.5 1.5 0 0 0 2 0l4.2-3.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function XIcon(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function ExternalLinkIcon(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M14 5h5v5m0-5-9 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SendIcon(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M3 11.5 21 3l-8.5 18-2.2-7.3L3 11.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M21 3 10.3 13.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function SunIcon(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 2v2m0 16v2M4 12H2m20 0h-2M5.2 5.2 3.8 3.8m16.4 16.4-1.4-1.4M18.8 5.2l1.4-1.4M3.8 20.2l1.4-1.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function MoonIcon(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M21 13.2A7.5 7.5 0 0 1 10.8 3a6.5 6.5 0 1 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function Volume2Icon(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M11 5 6.8 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.8L11 19V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8.5a4.5 4.5 0 0 1 0 7M18.2 6.2a7.5 7.5 0 0 1 0 11.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function VolumeXIcon(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M11 5 6.8 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.8L11 19V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 10l6 6M22 10l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function GitHubIcon(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-1.6 2.9-1.9-.9-.1-1.8-.4-1.8-2.1 0-.5.2-1 .5-1.4-.1-.1-.2-.6.1-1.3 0 0 .4-.1 1.4.5a4.8 4.8 0 0 1 2.6 0c1-.6 1.4-.5 1.4-.5.3.7.2 1.2.1 1.3.3.4.5.9.5 1.4 0 1.7-.9 2-1.8 2.1 1.2.3 1.2 1 1.2 2v2.3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function LinkedInIcon(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M6 9v12M6 6.2v.2M10 9h4v2.1c.7-1.3 1.9-2.1 3.6-2.1 2.4 0 4.4 1.6 4.4 5.2V21h-4v-6.3c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.3-.1.3-.1.6-.1 1V21h-4V9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.1 6.4a1.4 1.4 0 1 0 0-.1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

