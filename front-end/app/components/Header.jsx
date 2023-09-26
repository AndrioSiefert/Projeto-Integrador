export function Header() {
  return (
    <header className="flex items-center w-full h-20 bg-gradient-to-r from-violet-600 to-violet-400 drop-shadow-md">
      <div className="w-full max-w-[1246px] px-[15px] mx-auto">
        <div>
          <div className="flex items-center gap-14">
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
            <p className="text-white text-3xl font-bold font">Eliane Siefert</p>
            <div className="flex gap-4">
              <div>
                <ul>
                  <li>
                    <button className="flex items-center gap-3 ">
                      <span className="text-white hover:font-bold">Home</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <button className="flex items-center gap-3">
                      <span className="text-white hover:font-bold">
                        Serviços
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <button className="flex items-center gap-3">
                      <span className="text-white hover:font-bold">
                        Produtos
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <button className="flex items-center gap-3">
                      <span className="text-white hover:font-bold">Agenda</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
