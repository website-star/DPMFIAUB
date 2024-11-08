import React from 'react'
import advocacy from '../Images/advocacy 1.png'
import legislasi from '../Images/legislation 1.png'
import pengawasan from '../Images/supervised 1.png'

export default function About() {
  return (
    <div className='flex flex-col justify-center items-center gap-8 lg:py-30 py-28 mb-10 '>
        <div className='w-3/4 flex flex-col gap-2'>
            <span className='text-3xl font-SFBlack bg-gradient-to-b from-[#2BA097] to-[#103A37] inline-block text-transparent bg-clip-text'>TENTANG</span>
            <span className='text-justify font-SFRegular text-lg'>Dewan Perwakilan Mahasiswa Fakultas Ilmu Administrasi Universitas Brawijaya merupakan <span className='font-SFSemiBold'>lembaga legislatif tertinggi</span> di lingkungan Fakultas Ilmu Administrasi Universitas Brawijaya. Mengacu pada AD/ART sebagai Dasar hukum berdirinya, Dewan Perwakilan Mahasiswa <span className='font-SFSemiBold'>terdiri dari 9 Anggota</span>  yang dipilih berdasarkan Pemilihan Wakil Mahasiswa (Pemilwa) Fakultas Ilmu Administrasi <span className='font-SFSemiBold'>yang dalam pelaksanaannya DPM dibantu oleh staf ahli komisi</span> .</span>
        </div>
        <div className='w-3/4 flex flex-col gap-2'>
            <span className='text-3xl font-SFBlack bg-gradient-to-b from-[#2BA097] to-[#103A37] inline-block text-transparent bg-clip-text'>FUNGSI</span>
            <ul className='list-decimal list-inside space-y-2 text-justify'>
                <li className='font-SFSemiBold text-md'>
                    <span className='underline text-md'>Advokasi</span><br />
                    <span className='font-SFMedium text-md'>Menyalurkan aspirasi mahasiswa <span className='font-SFRegular'>kepada pihak yang bersangkutan, khususnya BEM dan pihak Dekanat.</span></span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='underline text-md'>Legislasi</span><br />
                    <span className='font-SFMedium text-md'>Pembuat kebijakan<span className='font-SFRegular'>di tingkat LKM/LOF FIA UB.</span></span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='underline text-md'>Pengawasan</span><br />
                    <span className='font-SFMedium text-md'>Mengawal dan mengawasi pelaksanan program kerja<span className='font-SFRegular'>BEM FIA UB berdasarkan peraturan yang berlaku serta aspirasi mahasiswa FIA UB.</span></span>
                </li>
            </ul>
        </div>
        <div className='w-3/4 flex flex-col gap-2'>
            <span className='text-3xl font-SFBlack bg-gradient-to-b from-[#2BA097] to-[#103A37] inline-block text-transparent bg-clip-text'>WEWENANG</span>
            <ul className='list-decimal list-inside space-y-2 text-justify'>
                <li className='font-SFRegular text-md'>
                    <span className='text-md'>Melakukan <span className='font-SFMedium'>pengawasan</span> terhadap kinerja BEM FIA UB.</span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='text-md'>Memberikan <span className='font-SFMedium'>evaluasi dan/atau penilaian atas kinerja BEM FIA UB</span> sebagai bahan evaluasi DPM FIA UB & BEM FIA UB untuk periode selanjutnya.</span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='text-md'>Bentuk <span className='font-SFMedium'>Transparansi kinerja BEM FIA UB</span> terhadap masyarakat FIA UB.</span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='text-md'><span className='font-SFMedium'>Memberikan memorandum</span> kepada BEM FIA UB.</span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='text-md'><span className='font-SFMedium'>Menerima/membahas RAB</span> BEM FIA UB setiap periode kepengurusan.</span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='text-md'><span className='font-SFMedium'>Meminta Laporan Pertanggung Jawaban</span> dari HMD/P FIA UB melalui BEM FIA UB.</span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='text-md'>Dalam kondisi tertentu yang dianggap perlu berdasarkan hasil Sidang Pleno DPM FIA UB, DPM FIA UB sewaktu-waktu <span className='font-SFMedium'>berwenang untuk meminta Laporan Pertanggung Jawaban</span> LKM/LOF FIA UB untuk keperluan penyelesaian persoalan khusus.</span>
                </li>
            </ul>
        </div>
        <div className='w-3/4 flex flex-col gap-2'>
            <span className='text-3xl font-SFBlack bg-gradient-to-b from-[#2BA097] to-[#103A37] inline-block text-transparent bg-clip-text'>KEWAJIBAN</span>
            <ul className='list-decimal list-inside space-y-2 text-justify'>
                <li className='font-SFRegular text-md'>
                    <span className='text-md'>Melakukan pengawasan terhadap kinerja BEM FIA UB.</span>
                </li>
                <li className='font-SFRegular text-md'>
                    <span className='text-md'>Memberikan evaluasi dan/atau penilaian atas kinerja BEM FIA UB sebagai bahan evaluasi DPM FIA UB & BEM FIA UB untuk periode selanjutnya.</span>
                </li>
                <li className='font-SFRegular text-md'>
                    <span className='text-md'>Bentuk Transparansi kinerja BEM FIA UB terhadap masyarakat FIA UB.</span>
                </li>
            </ul>
        </div>
        <div className='w-3/4 flex flex-col gap-2'>
            <span className='text-3xl font-SFBlack bg-gradient-to-b from-[#2BA097] to-[#103A37] inline-block text-transparent bg-clip-text'>HAK</span>
            <ul className='list-decimal list-inside space-y-2 text-justify'>
                <li className='font-SFSemiBold text-md'>
                    <span className='underline text-md'>Hak Interpelasi</span><br />
                    <span className='font-SFMedium text-md'>Meminta keterangan kepada BEM FIA UB mengenai kebijakannya <span className='font-SFRegular'>, yang berkaitan dan berdampak dalam kehidupan mahasiswa FIA UB.</span></span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='underline text-md'>Hak Angket</span><br />
                    <span className='font-SFMedium text-md'><span className='font-SFRegular'>Melakukan</span>penyelidikan terhadap pelaksanaan kebijakan oleh BEM FIA UB<span className='font-SFRegular'>, yang berkaitan dan berdampak luas dalam kehidupan mahasiswa FIA UB yang diduga bertentangan dengan AD/ART LKM FIA UB.</span></span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='underline text-md'>Hak Petisi</span><br />
                    <span className='font-SFMedium text-md'> <span className='font-SFRegular'>Mengajukan</span> usul atau anjuran serta pernyataan<span className='font-SFRegular'>mengenai suatu permasalahan.</span></span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='underline text-md'>Hak Inisiatif</span><br />
                    <span className='font-SFMedium text-md'>Mengusulkan Rancangan Undang-Undang<span className='font-SFRegular'>atau peraturan perundang-undangan dalam lingkungan FIA UB.</span></span>
                </li>
                <li className='font-SFSemiBold text-md'>
                    <span className='underline text-md'>Hak Budget</span><br />
                    <span className='font-SFMedium text-md'>Menyetujui dan/atau menolak Rancangan Dana<span className='font-SFRegular'>yang diajukan oleh BEM FIA UB, serta melakukan pengawasan terkait anggaran yang digunakan oleh BEM FIA UB.</span></span>
                </li>
            </ul>
        </div>
    </div>
  )
}
