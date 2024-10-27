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
          <div className='mt-12 ms-16 lg:mt-12 lg:ms-28 md:ms-28 sm:ms-20'><img src={slogan} alt=""/></div>
        </section>
        <section id='sinergiaksi' className='h-screen flex justify-center items-center'>
          <div className='w-3/4 font-SFRegular lg:text-4xl text-xl text-justify'>
            <span><b className='font-SFHeavy'>Sinergi</b> adalah hasil kolaborasi antara dua atau lebih entitas yang menghasilkan efek dan tujuan yang lebih besar serta lebih efektif. <b className='font-SFHeavy'>Aksi</b> berarti tindakan yang dilakukan untuk mencapai tujuan yang progresif. Maka dari itu, <b className='font-SFHeavy'>Sinergi Aksi</b> mengartikan proses kerja sama yang aktif dalam mencapai tujuan bersama yang progresif.</span>
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
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9542 9.1076C11.3912 9.10781 10.841 9.27494 10.373 9.58786C9.90502 9.90077 9.54033 10.3454 9.32505 10.8656C9.10976 11.3858 9.05354 11.9581 9.1635 12.5102C9.27345 13.0623 9.54465 13.5694 9.94279 13.9674C10.3409 14.3654 10.8482 14.6364 11.4003 14.7462C11.9525 14.8559 12.5248 14.7995 13.0449 14.584C13.5649 14.3685 14.0094 14.0037 14.3222 13.5356C14.6349 13.0675 14.8019 12.5172 14.8019 11.9542C14.8013 11.1992 14.5011 10.4753 13.9671 9.9416C13.4332 9.40785 12.7092 9.10788 11.9542 9.1076ZM18.6096 6.91956C18.4647 6.55231 18.2458 6.21875 17.9667 5.93958C17.6875 5.66041 17.3539 5.44158 16.9867 5.29667C15.866 4.85426 13.1976 4.95352 11.9542 4.95352C10.7107 4.95352 8.04507 4.85052 6.92116 5.29667C6.55391 5.44158 6.22035 5.66041 5.94118 5.93958C5.66201 6.21875 5.44318 6.55231 5.29827 6.91956C4.85639 8.04026 4.95512 10.7113 4.95512 11.9537C4.95512 13.196 4.85639 15.8639 5.3004 16.9883C5.44532 17.3555 5.66415 17.6891 5.94332 17.9683C6.22249 18.2474 6.55604 18.4663 6.92329 18.6112C8.044 19.0536 10.7123 18.9543 11.9563 18.9543C13.2003 18.9543 15.8649 19.0573 16.9888 18.6112C17.3561 18.4663 17.6896 18.2474 17.9688 17.9683C18.248 17.6891 18.4668 17.3555 18.6117 16.9883C19.0573 15.8676 18.9549 13.1966 18.9549 11.9542C18.9549 10.7118 19.0573 8.04453 18.6117 6.92009L18.6096 6.91956ZM11.9542 16.3303C11.0887 16.3303 10.2426 16.0736 9.52297 15.5928C8.80332 15.1119 8.24243 14.4285 7.91122 13.6288C7.58 12.8292 7.49334 11.9493 7.66219 11.1005C7.83104 10.2516 8.24782 9.47184 8.85983 8.85983C9.47184 8.24782 10.2516 7.83104 11.1005 7.66219C11.9493 7.49334 12.8292 7.58 13.6288 7.91122C14.4285 8.24243 15.1119 8.80332 15.5928 9.52297C16.0736 10.2426 16.3303 11.0887 16.3303 11.9542C16.331 12.5291 16.2183 13.0984 15.9986 13.6297C15.7789 14.1609 15.4566 14.6436 15.0501 15.0501C14.6436 15.4566 14.1609 15.7789 13.6297 15.9986C13.0984 16.2183 12.5291 16.331 11.9542 16.3303ZM16.5107 8.41597C16.3086 8.41607 16.1111 8.35625 15.943 8.24408C15.775 8.13191 15.644 7.97242 15.5666 7.78578C15.4892 7.59915 15.4689 7.39375 15.5082 7.19558C15.5476 6.9974 15.6448 6.81535 15.7877 6.67244C15.9305 6.52954 16.1125 6.4322 16.3107 6.39275C16.5088 6.35329 16.7142 6.37349 16.9009 6.45078C17.0876 6.52808 17.2471 6.659 17.3594 6.82698C17.4717 6.99497 17.5316 7.19248 17.5316 7.39452C17.5321 7.52869 17.5062 7.66166 17.4553 7.78578C17.4043 7.90991 17.3294 8.02276 17.2347 8.11786C17.1401 8.21295 17.0276 8.28843 16.9037 8.33995C16.7798 8.39147 16.647 8.41803 16.5128 8.4181L16.5107 8.41597ZM21.3468 0H2.56161C1.88223 0 1.23067 0.269884 0.750279 0.750279C0.269883 1.23067 0 1.88223 0 2.56161L0 21.3468C0 22.0262 0.269883 22.6777 0.750279 23.1581C1.23067 23.6385 1.88223 23.9084 2.56161 23.9084H21.3468C22.0262 23.9084 22.6777 23.6385 23.1581 23.1581C23.6385 22.6777 23.9084 22.0262 23.9084 21.3468V2.56161C23.9084 1.88223 23.6385 1.23067 23.1581 0.750279C22.6777 0.269884 22.0262 0 21.3468 0ZM20.4331 15.4764C20.3643 16.8442 20.0521 18.0562 19.0536 19.052C18.0551 20.0478 16.8442 20.3664 15.478 20.4315C14.0686 20.511 9.843 20.511 8.43358 20.4315C7.06578 20.3627 5.85809 20.05 4.85799 19.052C3.8579 18.054 3.54356 16.8415 3.47846 15.4764C3.39894 14.0665 3.39894 9.84033 3.47846 8.43198C3.5473 7.06418 3.85576 5.85222 4.85799 4.85639C5.86022 3.86056 7.07112 3.5457 8.43358 3.48059C9.843 3.40107 14.0686 3.40107 15.478 3.48059C16.8458 3.54944 18.0572 3.86217 19.0536 4.86013C20.05 5.85809 20.368 7.07059 20.4331 8.43838C20.5126 9.843 20.5126 14.0654 20.4331 15.4764Z" fill="#16144D"/>
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
