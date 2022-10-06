import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack,
    Checkbox,
} from '@chakra-ui/react'
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'

function StoreLeftComponent() {
    return (
        <div className='hidden w-[338px] flex-column lg:flex'>
            <Accordion allowMultiple>
                <AccordionItem borderTop={'none'} borderBottom={'none'}>
                    <div className='flex w-full'>
                        <AccordionButton display={'flex'} w={'100%'} columnGap={'1rem'} px={'0'}>
                            <div className='flex text-left text-navicon font-gotham text-[18px] px-[14px]'>
                                URUTKAN BERDASARKAN
                            </div>
                            <div className='flex text-navicon pr-[14px]'>
                                <AccordionIcon />
                            </div>
                        </AccordionButton>
                    </div>
                    <AccordionPanel flexDir={'column'}>
                        <div className='text-[18px] text-navicon font-gotham pb-[11px]'>
                            Harga
                        </div>
                        <RangeSlider defaultValue={[25000, 500000]} min={0} max={3000000} step={25000}>
                            <RangeSliderTrack bg={'#757575'}>
                                <RangeSliderFilledTrack bg={'#EB3F36'} />
                            </RangeSliderTrack>
                            <RangeSliderThumb bg={'#EB3F36'} boxSize={'14px'} index={0} />
                            <RangeSliderThumb bg={'#EB3F36'} boxSize={'14px'} index={1} />
                        </RangeSlider>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem borderTop={'none'} borderBottom={'none'}>
                    <div className='flex w-full'>
                        <AccordionButton boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.1)'} bg={'#f5f5f5'} display={'flex'} justifyContent={'space-between'} w={'100%'} columnGap={'1rem'} px={'0'}>
                            <div className='flex text-left text-navicon font-gotham text-[18px] px-[14px]'>
                                Origin
                            </div>
                            <div className='flex text-navicon pr-[14px]'>
                                <AccordionIcon />
                            </div>
                        </AccordionButton>
                    </div>
                    <AccordionPanel>
                        <Stack direction={'column'} spacing={'14px'} px={'14px'} w={'100%'}>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Aceh</Checkbox>
                                <div>{`(8)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Semarang</Checkbox>
                                <div>{`(2)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Bandung</Checkbox>
                                <div>{`(7)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Jawa</Checkbox>
                                <div>{`(5)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Amerika Selatan</Checkbox>
                                <div>{`(6)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Lain - lain</Checkbox>
                                <div>{`(8)`}</div>
                            </div>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem borderTop={'none'} borderBottom={'none'}>
                    <div className='flex w-full'>
                        <AccordionButton boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.1)'} bg={'#f5f5f5'} display={'flex'} justifyContent={'space-between'} w={'100%'} columnGap={'1rem'} px={'0'}>
                            <div className='flex text-left text-navicon font-gotham text-[18px] px-[14px]'>
                                Species
                            </div>
                            <div className='flex text-navicon pr-[14px]'>
                                <AccordionIcon />
                            </div>
                        </AccordionButton>
                    </div>
                    <AccordionPanel>
                        <Stack direction={'column'} spacing={'14px'} px={'14px'} w={'100%'}>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Arabica</Checkbox>
                                <div>{`(128)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Robusta</Checkbox>
                                <div>{`(23)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Blend</Checkbox>
                                <div>{`(9)`}</div>
                            </div>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem borderTop={'none'} borderBottom={'none'}>
                    <div className='flex w-full'>
                        <AccordionButton boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.1)'} bg={'#f5f5f5'} display={'flex'} justifyContent={'space-between'} w={'100%'} columnGap={'1rem'} px={'0'}>
                            <div className='flex text-left text-navicon font-gotham text-[18px] px-[14px]'>
                                Roast Level
                            </div>
                            <div className='flex text-navicon pr-[14px]'>
                                <AccordionIcon />
                            </div>
                        </AccordionButton>
                    </div>
                    <AccordionPanel>
                        <Stack direction={'column'} spacing={'14px'} px={'14px'} w={'100%'}>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Light Roast</Checkbox>
                                <div>{`(8)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Medium Roast</Checkbox>
                                <div>{`(2)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Dark Roast</Checkbox>
                                <div>{`(7)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Light to Medium Roast</Checkbox>
                                <div>{`(5)`}</div>
                            </div>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem borderTop={'none'} borderBottom={'none'}>
                    <div className='flex w-full'>
                        <AccordionButton boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.1)'} bg={'#f5f5f5'} display={'flex'} justifyContent={'space-between'} w={'100%'} columnGap={'1rem'} px={'0'}>
                            <div className='flex text-left text-navicon font-gotham text-[18px] px-[14px]'>
                                Tasted
                            </div>
                            <div className='flex text-navicon pr-[14px]'>
                                <AccordionIcon />
                            </div>
                        </AccordionButton>
                    </div>
                    <AccordionPanel>
                        <Stack direction={'column'} spacing={'14px'} px={'14px'} w={'100%'}>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Sweet</Checkbox>
                                <div>{`(18)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Floral</Checkbox>
                                <div>{`(21)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Fruity</Checkbox>
                                <div>{`(7)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Nutty</Checkbox>
                                <div>{`(5)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Cocoa</Checkbox>
                                <div>{`(21)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Spices</Checkbox>
                                <div>{`(18)`}</div>
                            </div>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem borderTop={'none'} borderBottom={'none'}>
                    <div className='flex w-full'>
                        <AccordionButton boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.1)'} bg={'#f5f5f5'} display={'flex'} justifyContent={'space-between'} w={'100%'} columnGap={'1rem'} px={'0'}>
                            <div className='flex text-left text-navicon font-gotham text-[18px] px-[14px]'>
                                Processing
                            </div>
                            <div className='flex text-navicon pr-[14px]'>
                                <AccordionIcon />
                            </div>
                        </AccordionButton>
                    </div>
                    <AccordionPanel>
                        <Stack direction={'column'} spacing={'14px'} px={'14px'} w={'100%'}>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Honey White</Checkbox>
                                <div>{`(8)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Natural</Checkbox>
                                <div>{`(2)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Honey Gold</Checkbox>
                                <div>{`(7)`}</div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center font-gotham text-4 text-authformtext'>
                                <Checkbox colorScheme='orange'>Honey Yellow</Checkbox>
                                <div>{`(5)`}</div>
                            </div>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default StoreLeftComponent