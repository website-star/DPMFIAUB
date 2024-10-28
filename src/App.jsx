import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/component/navbar'
import slogan from './assets/Images/Group 3.png'
import logo from './assets/Images/Logo DPM transparan.png'

function App() {
  const limitPragraph = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertikal',
    overflow: 'hidden',
    display: '-webkit-box',
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='h-screen'>
        <Navbar/>
        <section id='welcome' className='h-screen flex justify-center items-center'>
          <div className='mt-12 ms-16 lg:mt-12 lg:ms-28'><img src={slogan} className='w-full' alt=""/></div>
        </section>
        <section id='sinergiaksi' className='h-screen flex justify-center items-center'>
          <div className='w-3/5 font-SFRegular lg:text-4xl text-xl text-justify'>
            <span><b className='font-SFHeavy'>Sinergi</b> adalah <span className='font-AGBold'>hasil kolaborasi</span> antara dua atau lebih entitas yang <span className='font-AGBold'>menghasilkan efek dan tujuan</span> yang <span className='font-SFLight'>lebih besar serta lebih efektif</span>. <b className='font-SFHeavy'>Aksi</b> berarti <span className='font-AGBold'>tindakan yang dilakukan</span> untuk mencapai <span className='font-SFLight'>tujuan yang progresif</span>. Maka dari itu, <b className='font-SFHeavy'>Sinergi Aksi</b> mengartikan <span className='font-AGBold'>proses kerja sama</span> yang aktif dalam mencapai <span className='font-AGBold'>tujuan bersama</span> yang <span className='font-SFLight'>progresif</span>.</span>
          </div>
        </section>
        <section id='program' className='h-screen flex justify-center items-center '>
          <div className='  lg:w-5/6 w-full  overflow-x-auto'>
            <div className='flex w-full h-[28rem]  lg:justify-center lg:gap-9 gap-4 p-2'>
              <div className='bg-gradient-to-b from-[#2BA097] to-[#103A37] to-95% lg:w-[21%] min-w-[200px] h-full shadow-lg rounded-lg'>
                <div className=' h-1/2 rounded-t-lg'>

                </div>
                <div className='bg-white h-1/2 rounded-b-lg flex flex-col gap-2 items-center pt-7 p-3'>
                  <span className='font-SFBold lg:text-xl text-center'>Jaring Asmara</span>
                  <span className='font-SFRegular text-sm text-justify' >Penjaringan aspirasi mahasiswa FIA mengenai permasalahan dan isu yang sedang dialami atau masukan terkait kebijakan dekanat... <a href="#program" className='text-blue-500 visited:text-purple-500'><u>Read More</u></a></span>
                  </div>
              </div>
              <div className='bg-gradient-to-b from-[#2BA097] to-[#103A37] to-95% lg:w-[21%] min-w-[200px] h-full shadow-lg rounded-lg'>
              <div className=' h-1/2 rounded-t-lg flex justify-center items-center'>
                <svg 
                  width="102" 
                  height="153" 
                  viewBox="0 0 102 153" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M52.5 42.5C35.5764 61.7292 25.1168 73.0614 16 97C12.0382 107.403 8.5 124.5 8.5 124.5C8.5 124.5 62.9473 125.023 82.5 102C95.0161 87.2628 95.9673 74.5094 99.5 55.5C103.389 34.5747 99.5 1 99.5 1C99.5 1 68.677 24.1191 52.5 42.5Z" 
                    fill="black"/>
                  <path 
                    d="M1 152L8.5 124.5M8.5 124.5C8.5 124.5 12.0382 107.403 16 97C25.1168 73.0614 35.5764 61.7292 52.5 42.5C68.677 24.1191 99.5 1 99.5 1C99.5 1 103.389 34.5747 99.5 55.5C95.9673 74.5094 95.0161 87.2628 82.5 102C62.9473 125.023 8.5 124.5 8.5 124.5Z" 
                    stroke="black"/>
                    </svg>
                </div>
                <div className='bg-white h-1/2 rounded-b-lg flex flex-col gap-2 items-center pt-7 p-3'>
                <span className='font-SFBold lg:text-xl text-center'>Policy Brief</span>
                  <span className='font-SFRegular text-sm text-justify '>deskripsi tulis di sini lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... <a href="#program2" className='text-blue-500 visited:text-purple-500'><u>Read More</u></a></span>
                  </div>
              </div>
              <div className='bg-gradient-to-b from-[#2BA097] to-[#103A37] to-95%  lg:w-[21%] min-w-[200px] h-full shadow-lg rounded-lg'>
                <div className='h-1/2 rounded-t-lg'>
                </div>
                <div className='bg-white h-1/2 rounded-b-lg flex flex-col gap-2 items-center pt-7 p-3'>
                  <span className='font-SFBold lg:text-xl text-center'>Press Release</span>
                  <span className='font-SFRegular text-sm text-justify '>deskripsi tulis di sini lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... <a href="#program3" className='text-blue-500 visited:text-purple-500'><u>Read More</u></a></span>
                </div>
              </div>
            </div>
            <a className='mt-4 flex items-center gap-3 justify-end lg:w-full w-[650px]' href=''><u>Program Lainnya</u>
                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.39941H20.0126" stroke="black" stroke-linecap="round"/>
                <path d="M7.13574 0.951172C6.8988 9.51108 12.5966 8.16442 20.1261 8.45117" stroke="black"/>
                <path d="M7.19892 15.6523C6.81381 7.09983 12.4771 8.91903 20 8.5" stroke="black"/>
                </svg>
                </a>
          </div>
        </section>
        <footer className='h-[350px] bg-gradient-to-l from-[#30E3CA] from-0% via-[#2BA097] via-20% via-[#297576] via-55% to-[#11999E] to-95% rounded-t-[70px] p-10'>
          <div className='flex  h-full '>
            <div className='h-full flex items-center'>
              <img src={logo} alt="" className='lg:h-64 '/>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col text-white font-SFLight lg:w-80 text-justify mt-9'>
                <span className='font-SFRegular lg:text-xl'>Alamat</span>
                <span className='font-SFLight text-xs lg:text-sm'>Gedung D FIA UB, Jalan MT. Haryono No. 163, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145, Indonesia</span>
              </div>
              <div className='fkex flex-col text-white font-SFLight '>
                <span className='font-SFRegular lg:text-xl'>Find Us</span>
                <div className='flex gap-4'>
                  <div className='w-9 h-9 bg-white rounded-md flex items-center justify-center'>
<svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.9563 6.80481C27.1656 6.63845 27.4768 6.79408 27.4768 7.05704V18.0317C27.4768 19.4538 26.323 20.6076 24.9009 20.6076H2.57595C1.15381 20.6076 0 19.4538 0 18.0317V7.06241C0 6.79408 0.305894 6.64381 0.520557 6.81018C1.72267 7.74396 3.31654 8.92997 8.79044 12.9066C9.92279 13.7331 11.8333 15.4718 13.7384 15.4611C15.6543 15.4772 17.6024 13.7009 18.6918 12.9066C24.1657 8.92997 25.7542 7.73859 26.9563 6.80481ZM13.7384 13.7384C14.9835 13.7599 16.7759 12.1714 17.6775 11.5167C24.7989 6.34865 25.3409 5.89786 26.9831 4.60988C27.2944 4.36839 27.4768 3.99273 27.4768 3.5956V2.57595C27.4768 1.15381 26.323 0 24.9009 0H2.57595C1.15381 0 0 1.15381 0 2.57595V3.5956C0 3.99273 0.182463 4.36302 0.493724 4.60988C2.1359 5.89249 2.67792 6.34865 9.79936 11.5167C10.7009 12.1714 12.4934 13.7599 13.7384 13.7384Z" fill="#16144D"/>
</svg>
</div>
                  <div className='w-9 h-9 bg-white rounded-md flex items-center justify-center'>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9227 7.09551C23.908 6.08663 23.7215 5.08574 23.3643 4.14216C22.7392 2.53088 21.4665 1.25677 19.8552 0.633052C18.9236 0.282541 17.9387 0.0946247 16.9418 0.0733008C15.6597 0.015993 15.2532 0 11.9987 0C8.74411 0 8.32697 8.93672e-08 7.0542 0.0733008C6.05864 0.0946247 5.07375 0.282541 4.14216 0.633052C2.53088 1.25677 1.25677 2.53088 0.633052 4.14216C0.282541 5.07375 0.0932919 6.05864 0.0746335 7.0542C0.0173256 8.33763 0 8.74411 0 11.9987C0 15.2532 -9.92969e-09 15.669 0.0746335 16.9431C0.0946246 17.94 0.282541 18.9236 0.633052 19.8578C1.25811 21.4678 2.53088 22.7419 4.14349 23.3656C5.07108 23.7281 6.05598 23.9334 7.05553 23.9653C8.33896 24.0227 8.74545 24.04 12 24.04C15.2546 24.04 15.6717 24.04 16.9445 23.9653C17.94 23.9454 18.9249 23.7574 19.8578 23.4069C21.4691 22.7819 22.7419 21.5078 23.3669 19.8978C23.7175 18.9649 23.9054 17.9813 23.9254 16.9831C23.9827 15.701 24 15.2945 24 12.0386C23.9973 8.7841 23.9973 8.37095 23.9227 7.09551ZM11.9907 18.1533C8.58685 18.1533 5.82941 15.3958 5.82941 11.992C5.82941 8.58818 8.58685 5.83074 11.9907 5.83074C15.3918 5.83074 18.1519 8.58818 18.1519 11.992C18.1519 15.3958 15.3918 18.1533 11.9907 18.1533ZM18.3972 7.03954C17.6015 7.03954 16.9605 6.39716 16.9605 5.60284C16.9605 4.80853 17.6015 4.16615 18.3972 4.16615C19.1901 4.16615 19.8325 4.80853 19.8325 5.60284C19.8325 6.39716 19.1901 7.03954 18.3972 7.03954Z" fill="#16144D"/>
<path d="M11.991 15.9942C14.2014 15.9942 15.9932 14.2023 15.9932 11.992C15.9932 9.7816 14.2014 7.98975 11.991 7.98975C9.78063 7.98975 7.98877 9.7816 7.98877 11.992C7.98877 14.2023 9.78063 15.9942 11.991 15.9942Z" fill="#16144D"/>
</svg>
</div>
                  <div className='w-9 h-9 bg-white rounded-md flex items-center justify-center'><svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.9032 2.96156C26.5769 1.80289 25.6733 0.894157 24.5094 0.572923C22.3665 2.73895e-05 13.7515 2.7528e-05 13.7515 2.7528e-05C13.7515 2.7528e-05 5.15295 -0.0137153 2.98762 0.572923C1.82981 0.895016 0.921932 1.80289 0.59898 2.96156C0.192714 5.15781 -0.00913113 7.38068 0.000316933 9.61386C-0.00397764 11.8324 0.197008 14.0519 0.59898 16.2344C0.921932 17.393 1.82981 18.3018 2.98762 18.6282C5.13061 19.2011 13.7515 19.2011 13.7515 19.2011C13.7515 19.2011 22.345 19.2011 24.5094 18.6282C25.6733 18.3018 26.5769 17.3939 26.9032 16.2344C27.2975 14.0519 27.4899 11.8324 27.4761 9.61386C27.4899 7.38068 27.3018 5.15781 26.9032 2.96156ZM10.9996 13.7255V5.4842L18.1707 9.61386L10.9996 13.7255Z" fill="#16144D"/>
</svg></div>
                  <div className='w-9 h-9 bg-white rounded-md flex items-center justify-center'>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.1375 0H1.7649C0.790637 0 0 0.772042 0 1.72273V22.1833C0 23.1353 0.790637 23.9084 1.7649 23.9084H22.1375C23.1124 23.9084 23.9084 23.1353 23.9084 22.1833V1.72273C23.9084 0.772042 23.1124 0 22.1375 0ZM7.09083 20.3733H3.54309V8.96398H7.09083V20.3733ZM5.31696 7.40396C4.18031 7.40396 3.2615 6.48283 3.2615 5.34718C3.2615 4.21319 4.18031 3.29205 5.31696 3.29205C6.45095 3.29205 7.37208 4.21319 7.37208 5.34718C7.37208 6.48283 6.45095 7.40396 5.31696 7.40396ZM20.3719 20.3733H16.8298V14.8252C16.8298 13.5016 16.8039 11.7998 14.9866 11.7998C13.141 11.7998 12.8597 13.2413 12.8597 14.7292V20.3736H9.31497V8.96398H12.7169V10.522H12.7654C13.2389 9.62545 14.3958 8.67941 16.1212 8.67941C19.7095 8.67941 20.3723 11.0417 20.3723 14.1149L20.3719 20.3733Z" fill="#16144D"/>
</svg>
</div>
                </div>
              </div>
            </div>
            
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
