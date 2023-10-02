'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function Menu() {
    return (
      <div className="items-center text-center pt-2 text-white">
        <Link href="#">
          <div className="font-bold text-xl  bg-zinc-900 rounded-xl p-2 transition duration-300 ease-out hover:text-zinc-300 hover:bg-slate-800">
            Home
          </div>
        </Link>
        <Link href="services">
          <div className="font-bold text-xl  bg-zinc-900 rounded-xl p-2 transition duration-300 ease-out hover:text-zinc-300 hover:bg-slate-800">
            Serviços
          </div>
        </Link>
        <Link href="#">
          <div className="font-bold text-xl  bg-zinc-900 rounded-xl p-2 transition duration-300 ease-out hover:text-zinc-300 hover:bg-slate-800">
            Produtos
          </div>
        </Link>
        <Link href="#">
          <div className="font-bold text-xl  bg-zinc-900 rounded-xl p-2 transition duration-300 ease-out hover:text-zinc-300 hover:bg-slate-800">
            Agenda
          </div>
        </Link>
      </div>
    );
  }

  return (
    <header className=" bg-zinc-900 pt-4 pb-4 pl-4 pr-4">
      <div className="flex max-w-[1246px] w-full mx-auto justify-between bg-zinc-900 text-white">
        <div className="flex items-center">
          <Link href="#">
            <div className="font-bold  items-center text-xl flex gap-4">
              <div>
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_19)">
                    <path
                      d="M26.239 24.478C26.239 24.478 25.0463 20.9 22.661 18.5146C20.2756 16.1292 15.5049 16.1292 15.5049 16.1292C15.5049 16.1292 15.5049 20.9 17.8902 23.2853C20.2756 25.6707 23.8536 26.8634 23.8536 26.8634M32.2024 32.8268C33.1514 31.8778 33.6845 30.5908 33.6845 29.2487C33.6845 27.9067 33.1514 26.6196 32.2024 25.6707C31.2534 24.7217 29.9664 24.1886 28.6244 24.1886C27.2823 24.1886 25.9953 24.7217 25.0463 25.6707C24.0974 26.6196 23.5642 27.9067 23.5642 29.2487C23.5642 30.5908 24.0974 31.8778 25.0463 32.8268C25.9953 33.7757 27.2823 34.3088 28.6244 34.3088C29.9664 34.3088 31.2534 33.7757 32.2024 32.8268Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.8537 31.6341C23.8537 31.6341 20.2756 32.8268 17.8903 35.2121C15.5049 37.5975 15.5049 42.3682 15.5049 42.3682C15.5049 42.3682 20.2756 42.3682 22.661 39.9829C25.0463 37.5975 26.239 34.0195 26.239 34.0195M33.3951 31.6341C33.3951 31.6341 36.9732 32.8268 39.3585 35.2121C41.7439 37.5975 41.7439 42.3682 41.7439 42.3682C41.7439 42.3682 36.9732 42.3682 34.5878 39.9829C32.2024 37.5975 31.0097 34.0195 31.0097 34.0195M31.0097 24.478C31.0097 24.478 32.2024 20.9 34.5878 18.5146C36.9732 16.1292 41.7439 16.1292 41.7439 16.1292C41.7439 16.1292 41.7439 20.9 39.3585 23.2853C36.9732 25.6707 33.3951 26.8634 33.3951 26.8634M23.565 27.5623C23.565 27.5623 20.1909 25.8746 16.8168 25.8758C13.4439 25.8758 10.071 29.2487 10.071 29.2487C10.071 29.2487 13.4439 32.6216 16.818 32.6228C20.1909 32.6228 23.565 30.9352 23.565 30.9352M26.9379 34.3081C26.9379 34.3081 25.2503 37.6822 25.2515 41.0563C25.2515 44.4292 28.6244 47.8021 28.6244 47.8021C28.6244 47.8021 31.9973 44.4292 31.9973 41.0563C31.9985 37.6822 30.3108 34.3081 30.3108 34.3081M33.6849 27.5611C33.6849 27.5611 37.0566 25.8758 40.4319 25.8758C43.8048 25.8758 47.1777 29.2487 47.1777 29.2487C47.1777 29.2487 43.8048 32.6216 40.4319 32.6216C37.0578 32.6228 33.6837 30.9352 33.6837 30.9352M26.9379 24.1894C26.9379 24.1894 25.2503 20.8153 25.2515 17.4412C25.2515 14.0683 28.6244 10.6954 28.6244 10.6954C28.6244 10.6954 31.9973 14.0683 31.9985 17.4424C31.9985 20.8153 30.3108 24.1894 30.3108 24.1894"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <rect
                    x="2.82843"
                    y="29.2487"
                    width="36.481"
                    height="36.481"
                    transform="rotate(-45 2.82843 29.2487)"
                    stroke="white"
                    stroke-width="4"
                  />
                  <defs>
                    <clipPath id="clip0_1_19">
                      <rect
                        y="29.2487"
                        width="40.481"
                        height="40.481"
                        transform="rotate(-45 0 29.2487)"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="text-4xl">Eliane Seifert</div>
            </div>
          </Link>
        </div>
        <div className="hidden md:block md:flex gap-4 items-center">
          <Link href="#">
            <div className="font-bold text-xl bg-zinc-900 rounded-xl p-2 transition duration-300 ease-out hover:text-zinc-300 hover:bg-slate-800">
              Home
            </div>
          </Link>
          <Link href="services">
            <div className="font-bold text-xl bg-zinc-900 rounded-xl p-2 transition duration-300 ease-out hover:text-zinc-300 hover:bg-slate-800">
              Serviços
            </div>
          </Link>
          <Link href="#">
            <div className="font-bold text-xl bg-zinc-900 rounded-xl p-2 transition duration-300 ease-out hover:text-zinc-300 hover:bg-slate-800">
              Produtos
            </div>
          </Link>
          <Link href="#">
            <div className="font-bold text-xl bg-zinc-900 rounded-xl p-2 transition duration-300 ease-out hover:text-zinc-300 hover:bg-slate-800">
              Agenda
            </div>
          </Link>
        </div>
        <div className="flex md:hidden items-center cursor-pointer">
          <button onClick={() => setShowMenu(!showMenu)}>
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 6.983C7.73478 6.983 7.48043 7.08836 7.29289 7.2759C7.10536 7.46343 7 7.71779 7 7.983C7 8.24822 7.10536 8.50257 7.29289 8.69011C7.48043 8.87764 7.73478 8.983 8 8.983H16C16.2652 8.983 16.5196 8.87764 16.7071 8.69011C16.8946 8.50257 17 8.24822 17 7.983C17 7.71779 16.8946 7.46343 16.7071 7.2759C16.5196 7.08836 16.2652 6.983 16 6.983H8ZM7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12ZM8 15.017C7.73478 15.017 7.48043 15.1224 7.29289 15.3099C7.10536 15.4974 7 15.7518 7 16.017C7 16.2822 7.10536 16.5366 7.29289 16.7241C7.48043 16.9116 7.73478 17.017 8 17.017H16C16.2652 17.017 16.5196 16.9116 16.7071 16.7241C16.8946 16.5366 17 16.2822 17 16.017C17 15.7518 16.8946 15.4974 16.7071 15.3099C16.5196 15.1224 16.2652 15.017 16 15.017H8Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      {showMenu && <Menu />}
    </header>
  );
}
