import {FC, SVGProps} from "react";

const Logo: FC<SVGProps<SVGSVGElement>> = ({...elements}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 530.0493" {...elements}>
            <path
                d="M205.166 4.972c-.72.407-2.198 2.813-4.857 7.906-2.101 4.027-4.72 9.032-5.818 11.122-1.098 2.09-4.292 8.21-7.096 13.6-2.805 5.39-6.043 11.6-7.196 13.8-3.13 5.973-19.849 37.971-23.199 44.4-5.122 9.831-16.421 31.468-18.486 35.4-1.098 2.09-3.58 6.86-5.516 10.6-1.936 3.74-9.632 18.5-17.102 32.8-16.641 31.854-27.7 53.031-30.603 58.6-1.204 2.31-3.043 5.82-4.088 7.8-1.044 1.98-3.252 6.21-4.906 9.4-2.718 5.242-13.659 26.23-19.497 37.4-9.395 17.975-11.424 21.862-14.097 27-6.281 12.076-21.262 40.73-22.898 43.8-2.124 3.983-5.69 10.801-9.204 17.6-1.479 2.86-4.469 8.639-6.646 12.842L0 396.683v5.416c0 4.569.099 5.453.633 5.658.348.134 22.203.243 48.567.243s48.221.11 48.572.245c.518.198-1.729 4.929-11.918 25.1C42.768 518.634 40.8 522.62 40.8 524.578c0 2.268.789 3.906 2.189 4.544 1.85.843 51.889.669 53.692-.187 1.279-.607 1.823-1.527 6.211-10.5 2.646-5.409 4.922-9.925 5.059-10.035.137-.11.306-.461.376-.781.401-1.835 48.892-98.401 49.604-98.782.576-.308 13.812-.437 44.943-.437 24.269 0 78.551-.12 120.626-.266l76.5-.267v-16.384l-12.85-25.442c-7.067-13.992-12.98-25.621-13.139-25.841-.159-.22-6.189-12.1-13.4-26.4-12.349-24.489-18.455-36.535-30.665-60.501-2.83-5.556-5.146-10.356-5.146-10.667 0-.311-.15-.625-.333-.699-.334-.134-5.732-10.645-22.871-44.533-5.118-10.12-11.146-22-13.396-26.4-2.25-4.4-8.828-17.36-14.618-28.8-19.984-39.485-17.893-36.076-21.876-35.672-3.018.307-3.059.371-12.408 19.138-4.858 9.754-24.528 49.234-43.709 87.734-19.182 38.5-43.116 86.566-53.187 106.813-10.071 20.248-18.557 36.988-18.857 37.2-.343.244-9.015.313-23.438.187l-22.893-.2 4.714-9c2.592-4.95 6.168-11.79 7.947-15.2 15.583-29.881 24.49-46.894 25.233-48.2.25-.44 2.645-5.03 5.321-10.2 8.076-15.6 10.424-20.105 11.569-22.2.602-1.1 2.676-5.06 4.61-8.8 1.934-3.74 5.174-9.95 7.199-13.8 2.025-3.85 6.069-11.59 8.988-17.2 6.148-11.819 28.658-54.863 40.998-78.4 4.672-8.91 12.017-22.95 16.323-31.2 4.305-8.25 11.26-21.57 15.455-29.6 9.703-18.572 9.439-16.81 4.227-28.283-1.678-3.695-3.657-8.067-4.398-9.717-4.461-9.935-8.805-19.676-10.792-24.2-1.257-2.86-2.62-5.548-3.031-5.973-.98-1.017-4.924-1.297-6.411-.455M260.708 230.8c10.683 21.103 25.846 51.159 43.69 86.6 8.418 16.72 16.452 32.602 17.854 35.293 1.401 2.691 2.548 4.986 2.548 5.1 0 .114-31.95.207-71 .207-47.774 0-71-.133-71-.406 0-.467 2.55-5.788 11.403-23.794 3.461-7.04 7.871-16.04 9.8-20 4.387-9.007 12.067-24.682 19.992-40.8 3.353-6.82 7.855-16 10.004-20.4 14.2-29.075 18.455-37.504 18.768-37.171.191.204 3.765 7.121 7.941 15.371"
                fill="#04fcfc" fillRule="evenodd"/>
        </svg>
    )
}

export default Logo