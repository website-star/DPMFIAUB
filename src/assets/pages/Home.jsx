import React from 'react'

import slogan from '../Images/Group 3.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
        <section id='welcome' className='h-screen flex justify-center items-center'>
            <div className='ms-20'><img src={slogan} className='w-full' alt=""/></div>
        </section>
        <section id='sinergiaksi' className='h-screen flex justify-center items-center'>
            <div className='w-3/4 font-SFRegular lg:text-5xl text-xl text-justify'>
                <span><b className='font-SFHeavy'>Sinergi</b> adalah <span className='font-AGBold'>hasil kolaborasi</span> antara dua atau lebih entitas yang <span className='font-AGBold'>menghasilkan efek dan tujuan</span> yang <span className='font-SFLight'>lebih besar serta lebih efektif</span>. <b className='font-SFHeavy'>Aksi</b> berarti <span className='font-AGBold'>tindakan yang dilakukan</span> untuk mencapai <span className='font-SFLight'>tujuan yang progresif</span>. Maka dari itu, <b className='font-SFHeavy'>Sinergi Aksi</b> mengartikan <span className='font-AGBold'>proses kerja sama</span> yang aktif dalam mencapai <span className='font-AGBold'>tujuan bersama</span> yang <span className='font-SFLight'>progresif</span>.</span>
            </div>
        </section>
        <section id='program' className='h-screen flex justify-center items-center'>
            <div className='  lg:w-5/6 w-full overflow-x-auto '>
                <div className='flex w-full h-[28rem]  lg:justify-center lg:gap-9 gap-4 p-2 '>
                    <div className='bg-gradient-to-b from-[#2BA097] to-[#103A37] to-95% lg:w-[21%] min-w-[275px] h-full rounded-lg' style={{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.35)"}}>
                    <div className=' h-1/2 rounded-t-lg flex items-center justify-center'>
                    <svg width="242" height="211" viewBox="0 0 242 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_204_119)">
                    <path 
                    d="M51.721 169.226L76.0024 145.948M191.085 35.6219L175.161 50.8878M71.4782 12.0787L87.3116 37.1422M183.222 188.964L163.931 158.427M134.92 19.1091L132.749 37.6842M114.94 190.05L117.874 164.949M16.1247 89.7195L55.884 92.6273M226.487 105.104L187.692 102.267M159.237 66.1538C159.237 66.1538 171.157 70.6644 173.468 77.6159C176.579 86.9753 162.15 100.399 162.15 100.399M159.237 66.1538L100.284 122.67M159.237 66.1538L139.659 68.6112L130.196 59.5225M159.237 66.1538L175.161 50.8878M162.15 100.399L160.737 100.296M162.15 100.399L187.692 102.267M144.639 127.89C144.639 127.89 144.622 118.084 147.299 112.73C150.542 106.244 160.737 100.296 160.737 100.296M144.639 127.89C144.639 127.89 141.801 138.066 136.643 140.064C130.571 142.415 121.57 133.321 121.57 133.321M144.639 127.89L103.145 62.2058M144.639 127.89L163.931 158.427M160.737 100.296L90.342 95.1473M121.57 133.321C121.57 133.321 119.365 124.291 114.978 121.662C110.027 118.696 100.284 122.67 100.284 122.67M121.57 133.321L130.196 59.5225M121.57 133.321L117.874 164.949M100.284 122.67C100.284 122.67 87.153 117.349 85.848 109.635C84.8647 103.823 90.342 95.1473 90.342 95.1473M100.284 122.67L76.0024 145.948M90.342 95.1473C90.342 95.1473 97.1972 89.7431 99.9399 84.9542C104.373 77.2139 103.145 62.2058 103.145 62.2058M90.342 95.1473L55.884 92.6273M103.145 62.2058C103.145 62.2058 107.645 51.0526 113.732 49.4617C121.035 47.5529 130.196 59.5225 130.196 59.5225M103.145 62.2058L87.3116 37.1422M130.196 59.5225L132.749 37.6842M175.161 50.8878C175.161 50.8878 191.63 60.1432 194.907 70.8742C198.544 82.7831 187.692 102.267 187.692 102.267M175.161 50.8878C175.161 50.8878 155.856 57.5397 145.745 52.0037C139.206 48.4232 132.749 37.6842 132.749 37.6842M187.692 102.267C187.692 102.267 172.491 110.731 167.004 120.029C159.403 132.91 163.931 158.427 163.931 158.427M163.931 158.427C163.931 158.427 154.005 175.81 143.475 177.637C132.463 179.548 117.874 164.949 117.874 164.949M117.874 164.949C117.874 164.949 112.648 150.013 104.979 145.268C95.3089 139.284 76.0024 145.948 76.0024 145.948M76.0024 145.948C76.0024 145.948 44.2335 141.05 40.9632 124.816C38.2361 111.279 55.884 92.6273 55.884 92.6273M55.884 92.6273C55.884 92.6273 68.9577 83.9532 74.9166 75.9537C84.334 63.3113 87.3116 37.1422 87.3116 37.1422M87.3116 37.1422C87.3116 37.1422 98.4961 21.5658 108.732 20.9193C120.082 20.2025 132.749 37.6842 132.749 37.6842" 
                    stroke="white" stroke-opacity="0.75" stroke-width="6"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_204_119" x="0.905762" y="0.47644" width="240.8" height="210.09" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="5"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_204_119"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_204_119" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                    </div>
                    <div className='bg-white h-1/2 rounded-b-lg flex flex-col gap-2 items-center pt-7 p-3'>
                    <span className='font-SFBold lg:text-xl text-center'>Jaring Asmara</span>
                    <span className='font-SFRegular text-sm text-justify' >Penjaringan aspirasi mahasiswa FIA mengenai permasalahan dan isu yang sedang dialami atau masukan terkait kebijakan dekanat... <a href="#program" className='text-blue-500 visited:text-purple-500'><u>Read More</u></a></span>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-[#2BA097] to-[#103A37] to-95% lg:w-[21%] min-w-[275px] h-full  rounded-lg' style={{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.35)"}}>
                <div className=' h-1/2 rounded-t-lg flex justify-center items-center'>
                    <svg width="254" height="189" viewBox="0 0 254 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_204_120)">
                    <path d="M91.9937 168L103.496 108.228M103.496 108.228C103.496 108.228 157.407 115.182 175.422 94.7269C188.825 79.5088 185.544 45.5032 185.544 45.5032C185.544 45.5032 196.174 39.3856 199.96 33.2676C204.077 26.6155 203.794 14 203.794 14C203.794 14 157.087 26.0744 140.763 49.0192C138.618 52.0333 137.687 53.905 135.717 57.0356M103.496 108.228L122.129 78.6237M122.129 78.6237C122.129 78.6237 131.421 73.2387 136.775 75.4594C140.858 77.1526 143.83 83.7571 143.83 83.7571M122.129 78.6237L135.717 57.0356M135.717 57.0356C135.717 57.0356 141.428 54.7024 144.597 56.0511C147.731 57.3852 149.504 62.8018 149.504 62.8018M32.0294 141.56L236 108.228V121.308L17 152.811L32.0294 141.56Z" stroke="white" stroke-opacity="0.75" stroke-width="6"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_204_120" x="0.202148" y="0.147949" width="253.798" height="188.419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="5"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_204_120"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_204_120" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                </div>
                    <div className='bg-white h-1/2 rounded-b-lg flex flex-col gap-2 items-center pt-7 p-3'>
                    <span className='font-SFBold lg:text-xl text-center'>Produk Hukum</span>
                    <span className='font-SFRegular text-sm text-justify '>deskripsi tulis di sini lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... <a href="#program2" className='text-blue-500 visited:text-purple-500'><u>Read More</u></a></span>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-[#2BA097] to-[#103A37] to-95%  lg:w-[21%] min-w-[275px] h-full  rounded-lg' style={{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.35)"}}>
                    <div className='h-1/2 rounded-t-lg flex justify-center items-center'>
                    <svg width="196" height="189" viewBox="0 0 196 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_204_121)">
                    <path d="M137.355 36.5854C137.355 77.9594 164.444 113.957 137.355 142.53C131.17 149.054 126.779 151.663 119.237 156.118C85.4073 176.103 21 156.118 21 156.118C21 156.118 40.4199 116.628 45.7671 88.9152C50.6039 63.8469 30.2024 38.7533 48.7591 23.3652C53.8461 19.1468 63.5529 15.8371 63.5529 15.8371C63.5529 15.8371 126.364 14.718 166.611 14.0009M137.355 36.5854C139.742 29.2578 142.475 25.2164 148.16 20.611C154.268 15.6625 159.036 13.9545 166.611 14.0009M137.355 36.5854C138.397 47.3867 146.14 55.176 155.972 55.3139C162.707 55.4084 167.092 52.5576 171.431 46.8677C176.598 40.0919 178.601 32.8604 175.587 24.6505C173.653 19.3848 171.227 16.507 166.611 14.0009M65.5475 46.8677C68.4841 45.0928 70.5646 41.0067 74.5235 41.5429C77.7713 41.9828 79.1223 45.0928 81.3386 46.8677C83.5549 48.6426 86.5962 40.4553 91.1457 39.5232C95.9602 38.5368 98.4043 43.5118 103.28 43.0118C108.949 42.4304 116.079 35.3 116.079 35.3M65.5475 79C65.5475 79 69.1753 71.3721 73.36 70.7374C77.8933 70.0499 78.7619 77.7529 83.3333 77.5311C88.1746 77.2963 88.1523 69.4346 92.9742 68.9013C97.3683 68.4153 98.8643 74.1043 103.28 74.0425C109.656 73.9531 109.704 62.9848 116.079 62.842C120.926 62.7335 127.216 68.9013 127.216 68.9013M61.8906 100.483C61.8906 100.483 68.5034 95.3137 73.36 95.158C77.4064 95.0282 79.2857 98.3533 83.3333 98.2794C88.5407 98.1844 90.4291 92.7979 95.6337 92.5874C99.5674 92.4283 101.505 95.2271 105.441 95.158C111.262 95.0558 119.237 88.9152 119.237 88.9152M63.5529 125.821C63.5529 125.821 72.6225 121.252 78.5129 122.333C82.9812 123.153 84.4577 128.004 88.9849 127.841C94.0955 127.657 94.8427 119.86 99.9555 119.946C104.255 120.018 105.296 125.821 109.596 125.821C113.896 125.821 114.952 119.548 119.237 119.946C122.969 120.292 127.216 125.821 127.216 125.821" stroke="white" stroke-opacity="0.75" stroke-width="8"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_204_121" x="0.345703" y="0" width="195.657" height="189.001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="5"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_204_121"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_204_121" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                    </div>
                    <div className='bg-white h-1/2 rounded-b-lg flex flex-col gap-2 items-center pt-7 p-3'>
                    <span className='font-SFBold lg:text-xl text-center'>Press Release</span>
                    <span className='font-SFRegular text-sm text-justify '>deskripsi tulis di sini lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... <a href="#program3" className='text-blue-500 visited:text-purple-500'><u>Read More</u></a></span>
                    </div>
                </div>
                </div>
                <Link className='mt-4 flex items-center gap-3 justify-end lg:w-full w-[850px]' to='/Programs'><u>Program Lainnya</u>
                    <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8.39941H20.0126" stroke="black" stroke-linecap="round"/>
                    <path d="M7.13574 0.951172C6.8988 9.51108 12.5966 8.16442 20.1261 8.45117" stroke="black"/>
                    <path d="M7.19892 15.6523C6.81381 7.09983 12.4771 8.91903 20 8.5" stroke="black"/>
                    </svg>
                    </Link>
            </div>
            </section>
        </>
    )
}
