'use client';

import React, { useState } from 'react';
import OrderItem from './OrderItem';
import ReviewRating from './ReviewRating';
import Textarea from './Textarea';
import Button from './Button';
import Close from '/public/images/close.svg';
import { ModalProps } from 'app/_types/common';

export default function Modal({ onClose }: ModalProps) {
  const [clicked, setClicked] = useState<boolean[]>([false, false, false, false, false]);
  const [message, setMessage] = useState('');

  const handleStarClick = (index: number): void => {
    let clickStates: boolean[] = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-20">
      <div className="flex flex-col bg-white rounded-2xl w-8/12">
        <div className="flex flex-end border-b p-7">
          <p className="m-auto text-xl font-bold">리뷰작성</p>
          <div onClick={onClose} className="cursor-grabbing">
            <Close />
          </div>
        </div>
        <div className="flex flex-col px-20 py-16">
          <OrderItem
            itemId={110}
            image="/images/alcohol.png"
            title="어린꿀술"
            price={0}
            quantity={0}
            isValue={false}
          />
          <div className="flex flex-col gap-5 pt-10">
            <p className="text-zinc-800 text-lg font-normal text-start">
              구매하신 상품은 만족하셨나요?
            </p>
            <ReviewRating clicked={clicked} onStarClick={handleStarClick} isShow={false} />
          </div>
          <div className="flex flex-col gap-5 py-14">
            <p className="text-zinc-800 text-lg font-normal text-start">
              상품에 대한 리뷰를 작성해주세요.
            </p>
            <Textarea
              label=""
              id="message"
              rows={2}
              onChange={handleTextChange}
              value={message}
              className="p-3"
              placeholder="구매하신 상품에 대한 자세한 후기를 작성해주세요!"
            />
          </div>
          <div className="flex justify-center">
            <Button
              className="w-1/3 px-14 py-2.5 bg-gray-100 rounded-lg justify-center items-center gap-2.5 inline-flex text-center text-zinc-800 text-base font-normal"
              buttonName="작성 완료"
              type={undefined}
              onClick={undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
