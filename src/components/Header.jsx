import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className="h-[100px] px-3 md:px-6 py-4 w-full bg-white">
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img className='h-[50px]' src={logo} alt="" />
                    <p className='font-semibold ml-4 md:ml-6 text-[#3C3D3D]'>Swap</p>
                    <p className='font-semibold ml-4 md:ml-8 text-[#7D7D7D]'>Emplore</p>
                    <p className='font-semibold ml-4 md:ml-8 text-[#7D7D7D]'>NFTs</p>
                    <p className='font-semibold ml-4 md:ml-8 text-[#7D7D7D]'>Pool</p>
                </div>
                <div>
                    <button className='rounded-full bg-[#FFE7FF] font-semibold text-[#FC80FF] px-3 py-2'>Connect</button>
                </div>
            </div>
        </div>
    )
}

export default Header