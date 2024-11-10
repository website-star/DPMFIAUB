import React from 'react'
import logo1 from '../Images/Logo DPM 6 1.png'
import logo2 from '../Images/Logo DPM 66 1.png'
import logo3 from '../Images/logwar 2.png'
import logo4 from '../Images/logwar 1.png'

export default function ThisYear() {
  return (
    <div className='mb-72 min-w-96'>
    <div className='h-screen sinergiaksi flex justify-center items-center'>
        <div className='lg:w-3/4 w-11/12 font-SFRegular lg:text-4xl text-xl text-justify'>
                <span><b className='font-SFHeavy'>Sinergi</b> adalah <span className='font-AGBold'>hasil kolaborasi</span> antara dua atau lebih entitas yang <span className='font-AGBold'>menghasilkan efek dan tujuan</span> yang <span className='font-SFLight'>lebih besar serta lebih efektif</span>. <b className='font-SFHeavy'>Aksi</b> berarti <span className='font-AGBold'>tindakan yang dilakukan</span> untuk mencapai <span className='font-SFLight'>tujuan yang progresif</span>. Maka dari itu, <b className='font-SFHeavy'>Sinergi Aksi</b> mengartikan <span className='font-AGBold'>proses kerja sama</span> yang aktif dalam mencapai <span className='font-AGBold'>tujuan bersama</span> yang <span className='font-SFLight'>progresif</span>.</span>
        </div>
    </div>
    <div className='flex flex-col items-center gap-10 mb-8'>
        <div className='lg:w-3/4 w-11/12 flex flex-col gap-2'>
            <span className='bg-gradient-to-b from-[#2BA097] to-[#103A37] text-transparent bg-clip-text text-3xl font-SFBlack'>VISI</span>
            <span className='font-SFRegular lg:text-xl'>Sinergi aksi progresif mewujudkan kolaborasi katalis yang harmonis</span>
        </div>
        <div className='lg:w-3/4 w-11/12 flex flex-col gap-2'>
            <span className='bg-gradient-to-b from-[#2BA097] to-[#103A37] text-transparent bg-clip-text text-3xl font-SFBlack'>MISI</span>
            <ul className='font-SFRegular lg:text-xl text-justify list-decimal list-inside'>
                <li>Mewujudkan lembaga yang representatif, adaptif, serta inovatif terhadap pembaharuan dan pengembangan mahasiswa FIA.</li>
                <li>Meningkatkan kualitas advokasi yang responsif dan proaktif dalam mewujudkan pelayanan mahasiswa yang solutif dan inklusif. </li>
                <li>Menjunjung tinggi integritas melalui transparansi, etika, dan akuntabilitas dalam setiap kebijakan dan produk hukum. </li>
                <li>Membangun relasi konstruktif dan sinergis antara DPM FIA UB dengan seluruh elemen FIA guna mewujudkan harmonisasi antar lembaga dan mahasiswa.</li>
                <li>Optimalisasi pengawasan terhadap eksekutif dengan profesionalitas tinggi, serta menyediakan evaluasi objektif guna memastikan kinerja eksekutif yang efektif.</li>
            </ul>
        </div>
    </div>
        <div className='min-h-screen flex flex-col items-center'>
            <div className='lg:w-3/4 w-11/12 flex flex-col gap-5 '>
                <div className='w-full'>
                    <span className='bg-gradient-to-b from-[#2BA097] to-[#103A37] text-transparent bg-clip-text text-3xl font-SFBlack'>KONSEP VISUAL</span>
                </div>
                <div className='w-full h-screen'>
                    <div className='flex'>
                        <div className='w-1/2 bg-[#d9d9d946] h-1/2 flex flex-col justify-center items-center py-10 gap-2'>
                            <img src={logo1} alt="" className='lg:h-40 h-32 '/>
                            <div className='flex flex-col items-center w-5/6'>
                                <span className='font-AGRegular text-xl'>KONTRUKSI ANGSA</span>
                                <span className='font-SFRegular lg:text-sm text-[10px] text-center'>Melambangkan ilmu pengetahuan yang dapat memberikan petunjuk untuk bersikap bijaksana dalam membedakan antara yang baik dan buruk, serta sebagai simbol perwujudan sarasvati yang dapat menjadi kendaraan organisasi ke jalan yang baik.</span>
                            </div>
                        </div>
                        <div className='w-1/2  h-1/2 flex flex-col justify-center items-center py-10 gap-2'>
                            <img src={logo2} alt="" className='lg:h-40 h-32'/>
                            <div className='flex flex-col items-center w-5/6'>
                                <span className='font-AGRegular text-xl'>6 SAYAP</span>
                                <span className='font-SFRegular lg:text-sm text-[10px] text-center'>Melambangkan 6 Program Studi yang ada di Fakultas Ilmu Administrasi Universitas Brawijaya.</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/2  h-1/2 flex flex-col justify-center items-center py-10 gap-2'>
                            <img src={logo3} alt="" className='lg:h-40 h-32 '/>
                            <div className='flex flex-col items-center w-5/6'>
                                <span className='font-AGRegular text-xl'>HIJAU TUA</span>
                                <span className='font-SFRegular lg:text-sm text-[10px] text-center'>Melambangkan kesatuan dengan lingkungan dan solidaritas. </span>
                            </div>
                        </div>
                        <div className='w-1/2  h-1/2 flex flex-col  bg-[#d9d9d946] justify-center items-center py-10 gap-2'>
                            <img src={logo4} alt="" className='lg:h-40 h-32 '/>
                            <div className='flex flex-col items-center w-5/6'>
                                <span className='font-AGRegular text-xl'>BIRU TUA</span>
                                <span className='font-SFRegular lg:text-sm text-[10px] text-center'>Melambangkan integritas, profesionalitas, dan ketenangan yang mencipatkan keharmonisan.  </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}
