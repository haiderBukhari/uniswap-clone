import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { X, Star } from 'lucide-react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import data from '../data/tokens.json';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWith: '300px',
    width: "auto",
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal({ open, setOpen, FavouriteTokens, setFavouriteTokens, setToken }) {
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className="bg-white dark:bg-[#131313]">
                        <Typography className='flex justify-between' id="transition-modal-title" variant="h6" component="h2">
                            <p className='text-lg font-normal text-black dark:text-white'>Select a token</p>
                            <X className='cursor-pointer text-black dark:text-white' onClick={handleClose} />
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <div className='flex flex-wrap max-w-[350px]'>
                                {
                                    FavouriteTokens.map((Item) => (
                                        <button key={Item.currency} onClick={() => { setToken(Item); handleClose(); }} className='bg-white shadow-sm flex items-center rounded-full py-1 min-w-[100px] mr-3 mb-3 dark:bg-[#1e1f21]'>
                                            <img src={Item.image} alt="" className='w-[20px]' />
                                            <p className='text-[#2B2C2E] font-semibold text-md dark:text-white mx-2'>{Item.currency}</p>
                                        </button>
                                    ))
                                }
                            </div>
                        </Typography>
                        <Typography id="transition-modal-description" className='max-h-[300px] overflow-x-hidden overflow-y-auto text-black dark:text-white' sx={{ mt: 2 }}>
                            <hr className='border-gray-700' />
                            <h1 className='text-[#858585] mt-4'>Popular tokens</h1>
                            <div className='flex flex-col pt-4'>
                                {
                                    data.map((Item) => (
                                        <div onClick={() => { setToken(Item); handleClose(); }} key={Item.currency} className='py-2 flex items-center cursor-pointer justify-between text-black dark:text-white'>
                                            <div className='flex items-center'>
                                                <img src={Item.image} alt="" className='h-[40px]' />
                                                <p className='#3c3d3d text-sm ml-4'>{Item.currency}</p>
                                            </div>
                                            <Star onClick={(e) => {
                                                e.stopPropagation(); // Prevent click event from bubbling up to the parent div
                                                const filter = FavouriteTokens.map(item => item.currency).indexOf(Item.currency);
                                                if (filter === -1) {
                                                    setFavouriteTokens([...FavouriteTokens, Item]);
                                                }
                                            }} className='cursor-pointer text-[#3c3d3d] dark:text-white border-none mr-5' />
                                        </div>
                                    ))
                                }
                            </div>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
