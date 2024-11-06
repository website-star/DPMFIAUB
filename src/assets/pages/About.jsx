import React from 'react'
import advocacy from '../Images/advocacy 1.png'
import legislasi from '../Images/legislation 1.png'
import pengawasan from '../Images/supervised 1.png'

export default function About() {
  return (
    <div>
        <div className='h-screen flex justify-center items-center'>
            <span className='font-SFRegular lg:text-2xl text-sm w-10/12 text-justify'>Dewan Perwakilan Mahasiswa Fakultas Ilmu Administrasi Universitas Brawijaya merupakan lembaga legislatif tertinggi di lingkungan Fakultas Ilmu Administrasi Universitas Brawijaya. Mengacu pada AD/ART sebagai Dasar hukum berdirinya, Dewan Perwakilan Mahasiswa terdiri dari 9 Anggota yang dipilih berdasarkan Pemilihan Wakil Mahasiswa (Pemilwa) Fakultas Ilmu Administrasi yang dalam pelaksanaannya DPM dibantu oleh staff ahli komisi.</span>
        </div>
        <div className='min-h-screen flex flex-col gap-10 justify-center'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='mb-5'>
                    <span className='text-[#005B65] font-SFBlack text-2xl'>FUNGSI</span>
                </div>
                <div className='flex max-w-full justify-aroud lg:gap-16 items-center'>
                    <div className='flex-col flex justify-center items-center min-w-[90px]'>
                        <img src={advocacy} alt="" className='h-10 w-10'/>
                        <span>Advokasi</span>
                    </div>
                    <div className='flex-col flex justify-center items-center min-w-[90px]'>
                        <img src={legislasi} alt="" className='h-10 w-10' />
                        <span>Legislasi</span>
                    </div>
                    <div className='flex-col flex justify-center items-center min-w-[90px]'>
                        <img src={pengawasan} alt="" className='h-10 w-10' />
                        <span>Pengawasan</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
