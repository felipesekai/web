import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import React from 'react';
import { Input } from './Input';
import { WeekDaysButton } from './WeekDaysButton';

interface Props extends Dialog.DialogProps {
    children: React.ReactNode;
}

export const ModalNewAd = ({ children }: Props) => (

    <Dialog.Root>
        {children}
        <Dialog.Trigger />

        <Dialog.Portal>

            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

            <Dialog.Content className='bg-[#2A2634] 
            py-8 px-10 fixed
             text-white rounded top-1/2 left-1/2 
             -translate-x-1/2 -translate-y-1/2
             rounded-lg
             shadow-lg
             shadow-black/25
             '>

                <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

                <form className='flex flex-col gap-8 mt-8'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='game'>Qual game??</label>
                        <Input id='game' name='game' placeholder='Selecione o game que deseja jogar'></Input>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='name'>Seu nome ou nickname</label>
                        <Input id='name' placeholder='Como te chamam dentro do jogo'></Input>
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='yearsPlaying'>Joga a quantos anos?</label>
                            <Input id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO'></Input>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='discord'>Qual seu discord?</label>
                            <Input id='discord' type='text' placeholder='Usuario#00'></Input>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='weekDays'>Quando costuma jogar?</label>
                            <div className='flex gap-2'>
                                <WeekDaysButton title='domingo'>D</WeekDaysButton>
                                <WeekDaysButton title='segunda'>S</WeekDaysButton>
                                <WeekDaysButton title='terça' >T</WeekDaysButton>
                                <WeekDaysButton title='quarta'>Q</WeekDaysButton>
                                <WeekDaysButton title='quinta'>Q</WeekDaysButton>
                                <WeekDaysButton title='sexta'>S</WeekDaysButton>
                                <WeekDaysButton title='sabado'>S</WeekDaysButton>
                            </div>
                        </div>
                        <div >
                            <div>
                                <label htmlFor='hoursStart'>Qual horario?</label>
                            </div>
                            <div className='grid grid-cols-2 gap-2 flex-1'>
                                <Input type="time" id="hoursStart" placeholder='De' />
                                <Input type="time" id="hourEnd" placeholder='Até' />
                            </div>
                        </div>
                    </div>
                    <div className='flex text-sm gap-2'><Input type="checkbox" />Costumo me conextar no chat de voz</div>

                    <footer className='mt-4 flex gap-4 justify-end'>

                        <Dialog.Close
                            className='bg-zinc-500 rounded-md px-5 hover:bg-zinc-600'>Cancelar
                        </Dialog.Close>

                        <button type='submit'
                            className='bg-violet-500 py-3 px-5 flex gap-2 rounded-md hover:bg-violet-600'>
                            <GameController size={24} />
                            Encontrar</button>

                    </footer>
                </form>

                <Dialog.Description />



            </Dialog.Content>

        </Dialog.Portal>

    </Dialog.Root>

);