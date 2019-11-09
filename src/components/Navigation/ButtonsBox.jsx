import React from 'react';

const PreviousButton = ({numberPage, onClickBtn}) => (
  numberPage !== 1 && (
    <button
      onClick={onClickBtn( numberPage - 1 )}
      className='NavPage__previous'
    >
      {`<`}
    </button>
  )
);

const NextButton = ({numberPage, length, onClickBtn}) => (
  numberPage !== length && (
    <button
      onClick={onClickBtn( numberPage + 1 )}
      className='NavPage__next'
    >
      {`>`}
    </button>
  )
);

const ButtonsBox = ({ numberPage,
                      array,
                      onClickBtn }) => {
  return (
    <div className="ButtonsBox">
      <PreviousButton
        numberPage={numberPage}
        onClickBtn={onClickBtn}
      />

      {
        array.map((elem, idx) => {
          return (
            <button
              key={elem}
              onClick={onClickBtn(elem)}
              className={elem === numberPage ? 'Active' : null}
            >
              {idx + 1}
            </button>
          )
        })
      }

      <NextButton
        numberPage={numberPage}
        length={array.length}
        onClickBtn={onClickBtn}
      />
    </div>
  )
};

export default ButtonsBox;