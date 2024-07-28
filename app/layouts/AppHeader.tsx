import Link from "next/link";

const AppHeader = () => {
  return (
    <div className="bg-white w-full py-1 lg:py-4 px-4 lg:px-16 shadow-app-header">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-7">
          <Link href="/" className="flex items-center gap-1 lg:gap-2">
            <svg className="scale-75 lg:scale-100" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0029 12.6066V29.4654C19.0029 31.9459 12.1501 38.9669 7.98796 38.9669C4.70869 38.9669 2.06005 37.6215 0 33.8377L6.7267 23.7477L6.97895 23.8738C6.47445 27.4894 6.43241 37.9158 9.37534 37.9158C10.7207 37.9158 10.7627 36.0239 10.7627 29.5495V12.6066L8.61859 10.2523V10H21.1471V10.2523L19.0029 12.6066Z" fill="#4C1D95"/>
              <path d="M29.7538 10H38.4145L48 38.126V38.3783H36.6067V38.126L38.7508 35.9398L36.2283 28.5405H29.3334C29.4175 32.5344 30.4685 35.9819 32.3604 38.126V38.3783H21.5977V38.126L31.5616 15.3393L29.7538 10.2523V10ZM29.3334 27.7837H35.976L32.1502 16.5165H31.898L30.931 19.2492C29.922 22.1501 29.4175 25.093 29.3334 27.7837Z" fill="#4C1D95"/>
            </svg>
            <span className="text-primary text-lg lg:text-3xl font-bold">JOBS</span>
          </Link>
          <div className="items-center gap-5 hidden lg:flex">
            <Link href="/" className="underline text-[#581C87] text-base font-normal">Find Jobs</Link>
            <span className="text-[#0F0F0F] text-base font-normal">Employer</span>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-7">
          <svg className="scale-75 lg:scale-100" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2222 19.8C12.2222 20.3835 11.9881 20.9431 11.5713 21.3556C11.1546 21.7682 10.5894 22 10 22C9.41063 22 8.8454 21.7682 8.42865 21.3556C8.0119 20.9431 7.77778 20.3835 7.77778 19.8H12.2222ZM10 0C10.2947 0 10.5773 0.115892 10.7857 0.322183C10.994 0.528472 11.1111 0.808262 11.1111 1.1V2.288C14.2667 2.816 16.6667 5.533 16.6667 8.8V15.4L20 18.7H0L3.33333 15.4V8.8C3.33333 5.533 5.73333 2.816 8.88889 2.288V1.1C8.88889 0.808262 9.00595 0.528472 9.21433 0.322183C9.4227 0.115892 9.70532 0 10 0Z" fill="#030712"/>
          </svg>
          <div className="flex items-center gap-2">
            <svg className="scale-75 lg:scale-100" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 36.6666C29.2048 36.6666 36.6667 29.2047 36.6667 19.9999C36.6667 10.7952 29.2048 3.33325 20 3.33325C10.7953 3.33325 3.33334 10.7952 3.33334 19.9999C3.33334 29.2047 10.7953 36.6666 20 36.6666Z" fill="#111827" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M31.2334 32.2994C28.2667 35.016 24.3334 36.666 20 36.666C15.6667 36.666 11.7334 35.016 8.76669 32.2994C8.93336 30.7327 9.93336 29.1994 11.7167 27.9994C16.2834 24.966 23.75 24.966 28.2834 27.9994C30.0667 29.1994 31.0667 30.7327 31.2334 32.2994Z" fill="white"/>
              <path d="M20.2 21.3C20.0833 21.2833 19.9333 21.2833 19.8 21.3C16.8667 21.2 14.5333 18.8 14.5333 15.85C14.5333 12.8333 16.9667 10.3833 20 10.3833C23.0167 10.3833 25.4667 12.8333 25.4667 15.85C25.45 18.8 23.1333 21.2 20.2 21.3Z" fill="white"/>
            </svg>
            <span className="text-[#030712] text-sm lg:text-base">My Profile</span>
            <svg className="scale-75 lg:scale-100" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L6 6L12 0L0 0Z" fill="#030712"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AppHeader;
