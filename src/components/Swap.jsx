import { useState } from 'react';
import data from '../data/tokens.json'
import { ChevronDown, ArrowDown } from 'lucide-react';
import TransitionsModal from './SelectToken';

const Swap = () => {
    const [topSelected, setTopSelected] = useState(data[5]);
    const [BottomSelected, setBottomSelected] = useState(data[2]);
    const [FavouriteTokens, setFavouriteTokens] = useState([data[5], data[6], data[8], data[10]])
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [sellNumber, setSellNumber] = useState('');
    return (
        <div className="mt-5 flex flex-col items-center mx-5 max-w-[470px] w-auto md:mx-auto">
            <h1 className='text-[#7A7A7A] dark:text-white text-4xl font-semibold text-center mb-3'>Swap</h1>
            <div className='flex flex-col'>
                <div className='flex'>
                    <div className="flex relative flex-col shadow-sm justify-between items-start bg-[#e8e8e8] dark:bg-[#1B1B1B] rounded-xl px-4 py-4 w-[300px] mt-4 h-[200px]">
                        <div className='flex flex-row-reverse w-full justify-between'>
                            <input
                                type="text"
                                onChange={(e) => setSellNumber(e.target.value)}
                                value={sellNumber}
                                placeholder="0"
                                className="text-3xl bg-transparent w-[100px] outline-none pb-5 mt-2 font-semibold text-[#5c5b5b] dark:text-white"
                            />
                            <div
                                onClick={() => setOpen(true)}
                                className="bg-white dark:bg-[#131313] mt-2 shadow-sm inline-flex self-start items-center px-1 rounded-full cursor-pointer py-1 w-auto"
                            >
                                <img src={topSelected.image} alt="" className="h-[35px]" />
                                <p className="text-[#2B2C2E] dark:text-white font-semibold w-auto text-2xl mx-2">
                                    {topSelected.currency}
                                </p>
                                <ChevronDown className="w-auto dark:text-white" />
                            </div>
                            <button
                                onClick={() => {
                                    const temp = topSelected;
                                    setTopSelected(BottomSelected);
                                    setBottomSelected(temp);
                                }}
                                className="absolute z-10 rounded-xl py-1 bg-[#e8e8e8] dark:bg-[#1B1B1B] border-4 border-[#fff] h-[40px] dark:border-[#131313] dark:text-white"
                                style={{
                                    padding: '4px 6px',
                                    right: '-20px',
                                    top: "50%",
                                    transform: 'translateY(-50%)',
                                }}
                            >
                                <ArrowDown className="w-[18px]" />
                            </button>
                        </div>
                        <p className='text-[#7A7A7A] text-xl dark:text-white text-center  mx-auto'>${topSelected.price}</p>
                    </div>
                    <div style={{ marginLeft: "6px" }} className="flex relative flex-col shadow-sm justify-between items-start bg-[#e8e8e8] dark:bg-[#1B1B1B] rounded-xl px-4 py-4 w-[300px] mt-4 h-[200px]">
                        <div className='flex flex-row-reverse w-full justify-between'>
                            <input
                                type="text"
                                value={sellNumber * BottomSelected.price}
                                disabled placeholder="0"
                                className="text-3xl bg-transparent w-[100px] outline-none pb-5 mt-2 font-semibold text-[#5c5b5b] dark:text-white"
                            />
                            <div
                                onClick={() => setOpen1(true)}
                                className="bg-white dark:bg-[#131313] mt-2 shadow-sm inline-flex self-start items-center px-1 rounded-full cursor-pointer py-1 w-auto"
                            >
                                <img src={BottomSelected.image} alt="" className="h-[35px]" />
                                <p className="text-[#2B2C2E] dark:text-white font-semibold w-auto text-2xl mx-2">
                                    {BottomSelected.currency}
                                </p>
                                <ChevronDown className="w-auto dark:text-white" />
                            </div>
                        </div>
                        <p className='text-[#7A7A7A] text-xl dark:text-white text-center  mx-auto'>${BottomSelected.price}</p>
                    </div>                </div>
                <button className='mt-2 text-xl w-full h-[60px] rounded-lg font-semibold bg-[#edc5ea] dark:bg-[#311C31] dark:text-[#F476FA] px-3 py-2'>Swap</button>
                {/* <div className="flex relative flex-row shadow-sm justify-between items-center bg-[#e8e8e8] dark:bg-[#1B1B1B] rounded-xl px-4 pb-4 w-full mt-2 min-h-[100px]">
                    <div className="flex w-[30%] md:w-[50%] flex-col">
                        <p className="text-[#7D7D7D] dark:text-white">Buy</p>
                        <input
                            type="text"
                            value={sellNumber * BottomSelected.price}
                            disabled
                            placeholder="0"
                            className="text-3xl bg-transparent outline-none pb-5 mt-2 font-semibold text-[#5c5b5b] dark:text-white"
                        />
                    </div>
                    <div className="w-full flex-1 flex justify-end">
                        <div
                            onClick={() => setOpen1(true)}
                            className="bg-white dark:bg-[#131313] shadow-sm inline-flex self-end items-center px-1 rounded-full cursor-pointer py-1 w-auto"
                        >
                            <img src={BottomSelected.image} alt="" className="h-[35px]" />
                            <p className="text-[#2B2C2E] dark:text-white font-semibold w-auto text-2xl mx-2">
                                {BottomSelected.currency}
                                </p>
                                <ChevronDown className="w-auto dark:text-white" />
                                </div>
                                </div>
                            </div> */}
            </div>

            <TransitionsModal open={open} setOpen={setOpen} FavouriteTokens={FavouriteTokens} setFavouriteTokens={setFavouriteTokens} setToken={setTopSelected} />
            <TransitionsModal open={open1} setOpen={setOpen1} FavouriteTokens={FavouriteTokens} setFavouriteTokens={setFavouriteTokens} setToken={setBottomSelected} />
        </div>
    )
}
export default Swap