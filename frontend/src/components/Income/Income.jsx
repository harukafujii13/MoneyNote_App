import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import InnerLayout from '../../styles/InnerLayout';
import CardItem from '../CardItem/CardItem';
import IncomeForm from '../Form/IncomeForm';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Incomes = () => {
  const {
    addIncome,
    incomes,
    getIncomes,
    deleteIncome,
    totalIncome,
    getIncomeById,
  } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formdata, setFormdata] = useState();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="flex overflow-auto">
      <InnerLayout>
        <div className="font-semibold text-3xl flex lg:justify-start md:justify-start justify-center lg:mb-0 md:mb-0 mb-4">
          Incomes
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-4">
          <div className="flex flex-row items-center justify-center font-semibold gap-2 lg:w-[30rem] md:w-[20rem] w-[15rem] border-2 border-white shadow-md rounded-lg lg:py-4 md:py-4 py-2 lg:my-6 md:my-6 my-0">
            <div className="lg:text-2xl md:text-xl text-sm">Total incomes:</div>
            <p className="text-primary-pink lg:text-3xl md:text-2xl text-xl">
              ${totalIncome()}
            </p>
          </div>
          <Button
            name="Add Income"
            icon={plus}
            bPad="lg:py-2 lg:px-4 md:py-2 lg:px-2 py-2 px-4"
            bRad="rounded-full"
            bg="bg-primary-teal"
            color="text-white"
            onClick={() => setShowModal(true)}
          />
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-4 text-left px-6 bg-primary-lavender">
                <div className="flex justify-end mb-4">
                  <p
                    className="text-2xl"
                    onClick={() => setShowModal(false)}>
                    <AiOutlineCloseSquare />
                  </p>
                </div>
                <IncomeForm
                  setShowModal={setShowModal}
                  isEditMode={isEditMode}
                  formdata={formdata}
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-row gap-8 justify-center lg:mt-0 md:mt-0 mt-4">
          <div>
            {[...incomes].reverse().map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <CardItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="color-green"
                  deleteItem={deleteIncome}
                  setShowModal={setShowModal}
                  setIsEditMode={setIsEditMode}
                  getIncomeById={getIncomeById}
                  setFormdata={setFormdata}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </div>
  );
};

export default Incomes;
