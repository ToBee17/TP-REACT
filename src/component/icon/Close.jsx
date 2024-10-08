import { twMerge } from "tailwind-merge";

export default function Close({ className, onClick }) {
    return (<svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={twMerge(
        "size-6",
        className,
      )}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
    );
}      