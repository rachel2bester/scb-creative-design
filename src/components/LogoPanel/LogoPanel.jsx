import React from 'react'
import "./LogoPanel.scss"
import MenuPopup from '../../containers/MenuPopup/MenuPopup'
import desktopImg from "../../assets/images/desktop-image.WEBP";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


const LogoPanel = ({ displayPopUp, toggleDisplayPopUp, closePopUp }) => {

    
    return (
        <div className="logo-panel">
            <img src={desktopImg} className="logo-panel__img" alt="a living room" />
        <div className="logo-panel__overlay"></div>
        <div className="logo-panel__main">

        <Controller>
        <Scene
          triggerHook="onLeave"
          duration={1000}
          offset={-window.innerHeight / 2}
        >
          {(progress) => (
              <Timeline totalProgress={progress} paused>
                <Tween
                    from={{ x: 0, y: 0 }}
                    to={{ x: '0%', top: '80px' }}
                >
                        <svg viewBox="0 0 780 541" preserveAspectRatio="xMidYMid meet" className="logo-panel__logo">
                            <g transform="translate(0,541) scale(0.100000,-0.100000)" stroke="none">
                                <path d="M50 3485 l0 -1855 3850 0 3850 0 0 1855 0 1855 -3850 0 -3850 0 0 -1855z m7590 0 l0 -1745 -3740 0 -3740 0 0 1745 0 1745 3740 0 3740 0 0 -1745z"/>
                                <path d="M1323 5009 c-205 -26 -384 -125 -468 -259 -66 -105 -90 -262 -61 -400 53 -247 200 -349 691 -475 444 -114 561 -193 596 -404 35 -208 -96 -379 -337 -441 -90 -24 -289 -29 -384 -10 -230 44 -382 165 -455 363 -10 26 -20 47 -23 47 -2 0 -40 -10 -84 -22 l-80 -22 6 -30 c9 -42 58 -146 94 -199 110 -159 304 -267 538 -298 125 -16 347 -7 449 20 188 49 341 160 402 291 42 89 54 147 54 254 -1 148 -43 269 -122 346 -47 45 -155 118 -214 143 -57 24 -236 79 -399 122 -482 127 -586 209 -574 454 3 70 10 99 32 144 50 102 159 179 303 213 98 23 332 15 424 -15 168 -54 278 -159 328 -313 10 -31 16 -37 34 -33 12 2 49 9 81 15 33 5 61 12 64 14 9 9 -40 134 -76 195 -72 124 -231 236 -386 276 -130 33 -296 42 -433 24z"/>
                                <path d="M3637 5005 c-42 -8 -113 -29 -156 -45 -429 -166 -652 -687 -556 -1297 55 -343 241 -612 510 -734 130 -58 212 -73 410 -73 154 0 192 4 260 22 203 56 357 167 454 326 26 44 91 187 91 201 0 3 -145 30 -163 30 -5 0 -21 -29 -36 -65 -38 -89 -62 -125 -123 -188 -168 -172 -464 -226 -744 -138 -336 107 -523 469 -500 971 14 314 111 550 286 693 62 51 187 113 270 133 82 21 319 19 397 -3 201 -56 332 -177 407 -379 l18 -46 71 14 c105 21 99 15 78 75 -46 133 -125 253 -219 331 -75 63 -212 132 -309 158 -105 27 -336 35 -446 14z"/>
                                <path d="M5380 3934 l0 -1055 453 4 c503 5 528 7 664 73 188 90 282 273 270 524 -10 199 -76 315 -232 407 -56 33 -167 73 -202 73 -39 0 -26 15 25 29 71 19 166 76 211 127 80 91 113 194 112 354 0 168 -45 287 -140 372 -136 123 -278 148 -833 148 l-328 0 0 -1056z m878 883 c184 -54 262 -164 262 -367 0 -182 -64 -297 -199 -361 -85 -40 -174 -49 -482 -49 l-289 0 0 401 0 401 328 -5 c257 -3 338 -8 380 -20z m-3 -942 c140 -30 250 -106 300 -209 30 -62 49 -190 40 -265 -25 -202 -128 -315 -323 -357 -50 -10 -151 -14 -394 -14 l-328 0 0 430 0 430 318 0 c241 0 334 -4 387 -15z"/>
                                <path d="M2485 2511 c-109 -28 -165 -102 -165 -216 0 -97 35 -157 120 -201 26 -13 58 -18 120 -19 75 0 93 4 152 32 36 17 69 29 72 25 16 -16 3 17 -21 51 -24 34 -28 36 -34 19 -4 -10 -30 -28 -57 -40 -131 -57 -262 10 -262 133 0 96 77 160 182 152 64 -6 117 -31 134 -65 11 -22 12 -21 38 19 15 22 26 42 24 43 -103 53 -149 69 -208 72 -36 2 -78 0 -95 -5z"/>
                                <path d="M3630 2440 c0 -6 -62 -10 -165 -10 -161 0 -165 -1 -155 -19 5 -11 10 -81 10 -156 0 -75 -5 -145 -10 -156 -10 -18 -6 -19 159 -19 126 0 171 -3 174 -12 3 -7 5 12 5 42 0 30 -2 49 -5 43 -3 -10 -38 -13 -124 -13 l-119 0 0 45 0 45 74 0 c50 0 76 -4 79 -12 3 -7 5 12 5 42 0 30 -2 49 -5 43 -3 -9 -29 -13 -79 -13 l-74 0 0 40 0 40 114 0 c82 0 116 -4 119 -12 3 -7 6 11 6 40 1 28 -1 52 -4 52 -3 0 -5 -4 -5 -10z"/>
                                <path d="M4132 2400 c0 -30 2 -49 5 -42 3 8 26 12 64 12 l59 0 0 -133 c0 -90 -4 -137 -12 -145 -9 -9 2 -12 50 -12 59 0 62 1 52 19 -5 11 -10 76 -10 145 l0 126 58 0 c32 0 63 -5 70 -12 9 -9 12 0 12 42 0 42 -3 51 -12 42 -17 -17 -324 -17 -331 1 -3 6 -5 -13 -5 -43z"/>
                                <path d="M5455 2440 c-4 -6 -73 -10 -173 -11 -92 0 -161 -3 -154 -6 9 -3 12 -47 12 -168 0 -121 -3 -165 -12 -168 -7 -3 64 -6 158 -6 118 -1 174 -5 182 -13 9 -9 12 0 12 42 0 42 -3 51 -12 42 -8 -8 -50 -12 -125 -12 l-113 0 0 45 0 45 68 0 c40 0 73 -5 80 -12 9 -9 12 0 12 42 0 42 -3 51 -12 42 -7 -7 -40 -12 -80 -12 l-68 0 0 40 0 40 108 0 c71 0 112 -4 120 -12 9 -9 12 0 12 40 0 52 -3 61 -15 42z"/>
                                <path d="M2870 2411 c5 -11 10 -81 10 -156 0 -75 -5 -145 -10 -156 -10 -18 -7 -19 52 -19 48 0 59 3 50 12 -7 7 -12 39 -12 76 l0 63 42 -3 c39 -3 46 -8 81 -58 21 -31 36 -63 33 -72 -4 -16 4 -18 65 -18 l69 0 -55 68 c-30 37 -55 70 -55 74 0 4 15 14 34 22 40 17 56 42 56 86 0 82 -41 100 -230 100 -136 0 -140 -1 -130 -19z m270 -60 c13 -25 13 -27 -6 -45 -11 -12 -36 -16 -95 -16 l-79 0 0 40 0 40 85 0 c73 0 86 -3 95 -19z"/>
                                <path d="M3839 2413 c7 -13 -8 -51 -61 -158 -39 -77 -77 -148 -86 -157 -14 -17 -11 -18 53 -18 59 0 66 2 55 15 -10 12 -10 21 0 45 12 30 13 30 95 30 82 0 83 0 95 -30 10 -24 10 -33 0 -45 -11 -13 -3 -15 60 -15 69 0 72 1 58 18 -9 9 -48 78 -88 151 -51 97 -70 141 -65 158 5 22 3 23 -60 23 -59 0 -65 -2 -56 -17z m83 -143 l28 -50 -54 0 -55 0 21 50 c11 28 23 50 27 50 3 0 18 -23 33 -50z"/>
                                <path d="M4530 2411 c5 -11 10 -81 10 -156 0 -75 -5 -145 -10 -156 -10 -18 -7 -19 52 -19 48 0 59 3 50 12 -8 8 -12 59 -12 163 0 104 4 155 12 163 9 9 -2 12 -50 12 -59 0 -62 -1 -52 -19z"/>
                                <path d="M4682 2413 c9 -10 46 -81 83 -158 53 -112 64 -143 56 -157 -10 -17 -5 -18 61 -17 40 0 67 3 61 6 -7 2 -13 13 -13 23 0 24 118 269 143 298 l20 22 -71 0 c-68 0 -72 -1 -60 -19 10 -16 4 -35 -33 -115 -24 -53 -46 -96 -49 -96 -3 0 -25 44 -48 97 -35 78 -42 101 -33 115 10 17 5 18 -60 18 -68 0 -71 -1 -57 -17z"/>
                                <path d="M4472 1034 c-66 -34 -137 -145 -202 -315 -22 -57 -40 -99 -40 -93 0 27 54 165 103 259 55 104 58 124 23 147 -22 15 -87 7 -174 -21 -164 -54 -260 -115 -307 -195 -26 -45 -48 -136 -39 -161 7 -18 53 -20 58 -2 2 6 10 34 17 62 16 62 74 127 143 162 53 27 157 65 162 60 2 -2 -17 -41 -41 -88 -58 -112 -85 -210 -92 -341 -7 -129 12 -220 57 -268 30 -32 54 -37 93 -19 23 10 24 17 30 122 9 155 10 157 63 157 55 0 145 31 189 65 19 14 37 25 42 25 4 0 28 -18 52 -39 l45 -38 -32 -99 c-40 -122 -41 -175 -7 -209 17 -18 35 -25 61 -25 49 0 95 48 153 161 24 46 45 85 45 86 1 1 22 -7 45 -19 42 -21 44 -21 76 -3 30 16 64 66 79 118 5 16 8 16 34 3 24 -12 28 -20 24 -45 -6 -43 15 -97 49 -126 44 -37 72 -40 119 -16 22 12 42 21 44 21 2 0 6 -18 10 -39 13 -81 99 -130 170 -96 63 30 98 113 56 135 -16 8 -22 6 -34 -12 -7 -13 -17 -33 -21 -45 -4 -16 -14 -23 -30 -23 -56 0 -59 163 -6 360 17 63 42 158 56 210 14 52 23 104 21 116 -3 11 -21 29 -39 39 -59 31 -68 18 -117 -175 -23 -94 -46 -173 -50 -175 -5 -3 -23 2 -43 10 -51 21 -101 5 -135 -45 -15 -22 -32 -39 -39 -40 -22 0 -72 50 -78 80 -10 43 -52 73 -94 66 -62 -10 -106 -68 -121 -161 -12 -71 -110 -279 -140 -295 -22 -12 -22 -11 -16 26 4 21 23 68 42 106 33 66 41 102 26 124 -4 6 -31 23 -59 38 -63 31 -67 51 -28 134 27 58 31 87 15 97 -5 3 -10 34 -10 68 -1 134 -108 222 -208 171z m86 -144 c-8 -107 -108 -254 -204 -300 -25 -12 -47 -20 -50 -18 -8 9 57 182 99 262 23 43 59 94 80 113 38 34 39 34 59 16 17 -15 19 -27 16 -73z m452 -322 c0 -24 -9 -61 -19 -83 l-19 -40 -1 44 c-1 48 17 121 31 121 4 0 8 -19 8 -42z m315 9 c14 -22 14 -30 -5 -89 -29 -94 -65 -119 -62 -43 2 56 32 155 47 155 3 0 11 -11 20 -23z"/>
                                <path d="M567 1010 c-208 -70 -298 -152 -301 -273 -1 -49 1 -52 25 -55 24 -3 27 1 38 53 16 72 64 124 152 164 71 33 124 49 117 35 -56 -117 -74 -185 -84 -326 -7 -86 -8 -88 -40 -107 -104 -62 -91 -188 26 -258 144 -87 331 -5 411 180 20 47 28 57 49 57 14 0 34 3 46 6 17 4 22 -1 32 -35 17 -56 55 -96 107 -116 66 -26 106 -14 171 48 52 52 64 53 64 9 0 -8 -20 -35 -45 -59 -56 -53 -62 -94 -15 -118 43 -22 87 -19 114 8 20 20 46 99 46 140 0 7 15 37 33 66 l34 53 13 -31 c34 -84 116 -94 192 -24 25 24 28 24 49 9 29 -20 91 -21 130 -1 l29 16 -24 -63 c-13 -35 -27 -71 -31 -80 -5 -14 -19 -18 -56 -18 -65 0 -109 -19 -146 -65 -102 -123 13 -252 152 -171 32 19 96 85 120 124 1 1 14 -2 29 -8 15 -5 59 -15 97 -21 129 -20 206 34 153 109 l-15 23 -31 -26 c-23 -20 -40 -25 -82 -25 -29 0 -68 5 -85 11 -40 14 -43 -3 51 263 39 111 71 210 70 221 -2 27 -38 55 -73 55 -21 0 -32 -7 -44 -29 l-15 -29 -35 35 c-31 31 -40 35 -72 30 -67 -11 -123 -87 -153 -210 -15 -59 -82 -138 -101 -120 -15 15 1 84 36 154 30 58 30 60 5 87 -31 33 -67 28 -106 -14 -19 -19 -34 -41 -34 -47 0 -7 -23 -50 -51 -97 l-50 -85 4 80 c3 57 10 92 26 123 21 41 21 45 6 68 -20 30 -74 33 -99 5 -24 -26 -45 -88 -46 -132 -1 -81 -99 -209 -161 -209 -30 0 -49 23 -49 59 0 16 6 21 29 21 58 0 112 69 113 146 2 77 -53 123 -129 109 -52 -9 -118 -77 -127 -130 -9 -45 -19 -55 -57 -55 l-26 0 24 83 c15 51 27 120 30 182 5 89 3 105 -17 147 -25 54 -71 88 -120 88 -26 0 -43 -10 -79 -47 -26 -27 -55 -59 -64 -73 -14 -19 -17 -21 -12 -5 16 52 16 72 -2 92 -29 34 -52 34 -146 3z m302 -87 c6 -21 11 -59 11 -84 0 -51 -24 -202 -42 -261 l-11 -38 -74 0 c-85 0 -84 -1 -57 104 24 95 132 316 154 316 5 0 14 -17 19 -37z m1126 -249 c9 -9 14 -22 12 -28 -2 -6 -12 -35 -21 -63 -19 -57 -57 -96 -90 -91 -50 7 -15 156 44 185 32 16 35 16 55 -3z m-801 -112 c-26 -38 -31 -5 -7 40 16 31 18 32 21 10 2 -13 -5 -35 -14 -50z m-384 -88 c0 -12 -62 -95 -93 -124 -60 -56 -144 -65 -207 -20 -38 27 -48 62 -26 95 23 34 32 31 39 -12 4 -21 14 -49 23 -62 14 -19 23 -22 51 -18 54 9 63 22 63 88 l0 59 75 0 c41 0 75 -3 75 -6z m1042 -291 c-57 -80 -102 -106 -102 -59 0 13 3 32 6 41 8 20 58 44 92 45 l23 0 -19 -27z"/>
                                <path d="M6401 1014 c-12 -15 -21 -32 -21 -38 -1 -31 -15 -35 -64 -21 -66 20 -99 19 -120 -4 -33 -36 6 -88 40 -54 14 14 22 15 62 4 26 -7 48 -13 49 -15 2 -2 -8 -33 -22 -70 -14 -37 -39 -117 -56 -178 -34 -122 -61 -173 -112 -212 -95 -72 -132 3 -88 177 22 84 47 140 60 132 5 -2 12 -25 15 -49 8 -49 25 -70 49 -60 52 20 20 158 -42 184 -80 33 -166 -37 -196 -158 -26 -106 -61 -169 -110 -197 -23 -14 -45 -25 -48 -25 -15 0 -6 72 19 156 45 150 44 163 -17 164 -34 0 -51 -21 -78 -100 -24 -69 -90 -190 -103 -190 -17 0 -7 88 17 138 42 91 29 137 -37 130 -30 -3 -35 -8 -56 -62 -47 -118 -39 -222 20 -252 35 -18 75 -12 113 17 22 18 25 18 25 4 0 -9 13 -30 29 -46 48 -48 115 -34 193 38 l27 26 6 -26 c9 -35 53 -73 100 -86 49 -13 102 0 145 35 25 21 30 23 30 9 0 -35 42 -93 81 -110 63 -29 109 -3 165 93 15 26 28 49 30 51 2 2 15 -6 30 -18 15 -11 41 -21 58 -21 35 0 100 39 116 70 11 20 12 19 35 -8 33 -39 74 -56 107 -43 35 13 78 71 85 115 5 34 7 35 26 21 12 -8 31 -15 43 -15 17 0 22 -7 27 -41 7 -54 32 -81 71 -77 27 3 41 18 116 130 47 70 89 130 93 135 9 8 -6 -31 -63 -171 -59 -145 -51 -220 27 -252 82 -35 139 17 248 224 68 128 75 147 61 160 -25 25 -43 7 -92 -90 -79 -158 -136 -238 -168 -238 -11 0 -6 57 10 110 9 29 38 104 65 166 53 122 59 162 31 187 -47 43 -116 2 -207 -121 -33 -45 -61 -78 -63 -73 -2 5 6 33 18 62 11 30 20 64 20 76 0 31 -26 53 -64 53 -30 0 -35 -5 -54 -47 -11 -27 -25 -67 -31 -90 -10 -35 -16 -43 -35 -43 -27 0 -69 43 -89 92 -19 45 -48 62 -93 54 -46 -9 -87 -54 -113 -125 -38 -104 -121 -192 -121 -128 0 25 34 132 48 151 29 37 3 96 -42 96 -50 0 -93 -54 -115 -145 -13 -52 -78 -196 -104 -230 -13 -16 -17 -17 -31 -6 -35 29 -6 195 71 407 l36 101 68 -1 69 -1 0 -30 c0 -40 16 -55 56 -55 40 0 74 39 74 84 0 37 -15 56 -44 56 -16 0 -17 3 -8 12 17 17 15 47 -3 54 -9 4 -28 -8 -48 -30 -31 -32 -40 -36 -87 -36 -50 0 -52 1 -45 23 18 58 17 66 -8 91 -33 33 -60 33 -86 0z m476 -456 c-6 -61 -25 -110 -40 -101 -5 3 -6 26 -3 55 13 97 53 140 43 46z"/>
                                <path d="M3082 922 c-57 -30 -101 -82 -117 -135 -20 -68 -19 -86 10 -143 l25 -48 -25 -26 c-57 -60 -72 -165 -32 -235 90 -159 325 -159 403 2 23 47 26 62 22 124 -5 69 -5 70 23 84 35 18 79 75 79 101 0 20 -17 44 -32 44 -4 0 -26 -20 -50 -43 -32 -33 -61 -50 -112 -67 -85 -28 -148 -81 -144 -119 4 -37 50 -42 73 -8 17 26 71 54 82 43 13 -12 5 -103 -11 -134 -21 -40 -50 -59 -102 -67 -34 -6 -45 -3 -71 19 -41 34 -57 76 -51 135 5 53 25 86 72 116 45 30 46 62 3 80 -38 16 -47 31 -47 76 0 56 57 129 101 129 22 0 49 -37 49 -66 0 -25 28 -36 54 -22 21 12 21 69 1 109 -34 64 -133 89 -203 51z"/>
                                <path d="M1685 875 c-27 -26 -34 -82 -13 -103 22 -22 75 -14 97 14 23 29 28 83 9 102 -20 20 -67 14 -93 -13z"/>
                                <path d="M2418 743 c-23 -21 -68 -74 -101 -118 -33 -44 -58 -73 -55 -65 42 122 49 150 38 169 -11 22 -46 35 -76 29 -31 -6 -76 -129 -82 -225 -6 -97 9 -133 56 -133 35 0 64 30 123 125 106 172 118 174 49 10 -21 -49 -43 -116 -50 -148 -10 -50 -9 -62 7 -94 21 -44 75 -70 120 -58 47 12 105 84 181 228 39 76 72 144 72 152 0 12 -21 25 -40 25 -5 0 -39 -59 -77 -131 -69 -133 -123 -209 -149 -209 -8 0 -14 9 -14 19 0 33 48 173 95 280 51 114 53 133 25 161 -32 32 -74 26 -122 -17z"/>
                            </g>
                        </svg>
                </Tween>
              </Timeline>
          )}
        </Scene>
    </Controller>
            
        <Controller>
            <div >
                <Scene
                triggerHook="onLeave"
                duration={1000}
                offset={200}
                >
                {(progress) => (
                    <>
                    <Timeline wrapper={<div className="parallax" />}>
                        
                            <Tween
                                from={{ x: '0%', y: '0%' }}
                                to={{ x: '0%', top:  '-50%'}}
                            >
                                
                        </Tween>    
                    </Timeline>
                    </>
                )}
                </Scene>
            </div>
            </Controller>

            <MenuPopup displayPopUp={displayPopUp} closePopUp={closePopUp} />
            
        </div>
        </div>
    )
}

export default LogoPanel;