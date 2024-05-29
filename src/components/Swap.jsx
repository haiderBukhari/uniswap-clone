import { useState } from 'react';
import data from '../data/tokens.json'
import { ChevronDown, ArrowDown } from 'lucide-react';
import TransitionsModal from './SelectToken';

const Swap = () => {
    const [topSelected, setTopSelected] = useState(data[5]);
    const [BottomSelected, setBottomSelected] = useState(data[18]);
    const [FavouriteTokens, setFavouriteTokens] = useState([data[5], data[6], data[8], data[10]])
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [sellNumber, setSellNumber] = useState(0);
    return (
        <div className="mt-10 flex flex-col items-center max-w-[470px] w-full mx-auto">
            <div className="self-start">
                <button className='rounded-full bg-[#F5F5F5] font-semibold text-[#7A7A7A] px-3 py-2'>Swap</button>
            </div>
            <div className="flex relative flex-row shadow-sm justify-between items-center bg-[#F9F9F9] rounded-xl px-4 py-4 w-full mt-4 min-h-[100px]">
                <div className="flex w-[50%] flex-col">
                    <p className="text-[#7D7D7D]">Sell</p>
                    <input
                        type="text"
                        onChange={(e) => setSellNumber(e.target.value)}
                        value={sellNumber}
                        placeholder="0"
                        className="text-3xl bg-transparent outline-none pb-5 mt-2 font-semibold text-[#CECECE]"
                    />
                </div>
                <div className="w-full flex-1 flex justify-end">
                    <div
                        onClick={() => setOpen(true)}
                        className="bg-white shadow-sm inline-flex self-end items-center px-1 rounded-full cursor-pointer py-1 w-auto"
                    >
                        <img src={topSelected.image} alt="" className="h-[35px]" />
                        <p className="text-[#2B2C2E] font-semibold w-auto text-2xl mx-2">
                            {topSelected.currency}
                        </p>
                        <ChevronDown className="w-auto" />
                    </div>
                </div>
                <button
                    onClick={() => {
                        const temp = topSelected;
                        setTopSelected(BottomSelected);
                        setBottomSelected(temp);
                    }}
                    className="absolute bottom-[-20px] z-10 rounded-xl py-1 bg-[#F9F9F9]"
                    style={{
                        border: '4px solid #fff',
                        padding: '4px 6px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <ArrowDown className="w-[18px]" />
                </button>
            </div>
            <div className="flex relative flex-row shadow-sm justify-between items-center bg-[#F9F9F9] rounded-xl px-4 pb-4 w-full mt-2 min-h-[100px]">
                <div className="flex w-[50%] flex-col">
                    <p className="text-[#7D7D7D]">Buy</p>
                    <input
                        type="text"
                        value={sellNumber * BottomSelected.price}
                        disabled
                        placeholder="0"
                        className="text-3xl bg-transparent outline-none pb-5 mt-2 font-semibold text-[#CECECE]"
                    />
                </div>
                <div className="w-full flex-1 flex justify-end">
                    <div
                        onClick={() => setOpen1(true)}
                        className="bg-white shadow-sm inline-flex self-end items-center px-1 rounded-full cursor-pointer py-1 w-auto"
                    >
                        <img src={BottomSelected.image} alt="" className="h-[35px]" />
                        <p className="text-[#2B2C2E] font-semibold w-auto text-2xl mx-2">
                            {BottomSelected.currency}
                        </p>
                        <ChevronDown className="w-auto" />
                    </div>
                </div>
            </div>
            <button className='mt-2 text-xl w-full h-[60px] rounded-lg bg-[#FFE7FF] font-bold text-[#F481FA] px-3 py-2'>Connect wallet</button>

            <TransitionsModal open={open} setOpen={setOpen} FavouriteTokens={FavouriteTokens} setFavouriteTokens={setFavouriteTokens} setToken={setTopSelected} />
            <TransitionsModal open={open1} setOpen={setOpen1} FavouriteTokens={FavouriteTokens} setFavouriteTokens={setFavouriteTokens} setToken={setBottomSelected} />
        </div>
    )
}
export default Swap