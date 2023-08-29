import * as React from "react";
import Modal from "@mui/material/Modal";
import styles from "@/styles/Menu.module.css";

interface IModalProps {
  openModal: boolean;
  modalData: any;
  modalHanlder: (section: any) => void;
  addOrderHandler: ( item: any) => void;
}
export default function ItemModal({
  modalHanlder,
  modalData,
  openModal,
  addOrderHandler,
}: IModalProps) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={modalHanlder}
        disableAutoFocus
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <div
          className={`  bg-[#2e2e2e] flex flex-col justify-start gap-2 items-center align-middle rounded-md absolute top-[50%] left-[50%] h-fit ${styles.modal} w-[30rem] rounded-2xl  `}>
          <img src='pics/food.png' alt='' className='' />
          <div
            className={`flex w-full  flex-col justify-end  gap-2 h-fit rounded-2xl pb-4 px-4 `}>
            <div className='flex flex-col gap-1'>
              <div className='flex w-full justify-between items-center align-middle'>
                <h3 className='font-extrabold'>{modalData?.name}</h3>
                <span className='text-white font-extrabold text-lg'>
                  {modalData?.subItems[0].price}
                  <small className='mr-4 text-[#8B0505]'>هزار تومان</small>
                </span>
              </div>
              <div className={` flex flex-col gap-2 relative`}>
                <span className='text-[#8B0505]'>محتویات</span>
                <p className='mb-2'>
                  نان مافین. پنیر زیره. سلمن دودی. آووکادو. سس هلندایز. تخم مرغ
                  پوچد. سالاد میوه
                </p>
                <p className=''>{modalData?.description}</p>
              </div>
            </div>

            <div
              className='w-5/6 mx-auto py-2 px-2 bg-[#8B0505] rounded-full mt-2 cursor-pointer text-center font-black'
              onClick={() => {
                addOrderHandler( modalData);
              }}>
              <span className=''>افزودن به یاداشت سفارش</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
{
  /* <Modal
  open={confirmModal}
  onClose={confirmModalHandler}
  disableAutoFocus
  aria-labelledby='modal-modal-title'
  aria-describedby='modal-modal-description'>
  <Box
    dir='rtl'
    className='absolute top-[30%] rounded-[9px] flex flex-col justify-around p-4 left-[30%] bg-white shadow-md rounded-sm w-[600px] r 
           mxs:w-[87%] mxs:left-[20px] msm:w-[87%] msm:left-[30px]'>
    <div id='modal-modal-title '>
      <div className='w-full flex flex-col justify-around gap-10 items-center align-middle py-4 mxs;gap-2'>
        <i className='icon-warning text-main-color text-[3rem] text-center ' />
        <div className='flex text-base text-center mxs:flex-col mxs:w-full msm:w-full mxs:block msm:block'>
          آیا میخواهید بیمار
          <span className='text-base font-semibold  text-secondary px-2 mxs:block msm:block'>
            {formik.values.patientId.full_name}
          </span>
          با کد ملی
          <span className='text-base font-semibold text-secondary px-2'>
            {formik.values.patientId.national_code}
          </span>
          را حذف کنید؟
        </div>
        <div className='flex w-full justify-center gap-4 mxs:justify-between msm:justify-between'>
          <span
            className='py-2 text-center text-base rounded-sm cursor-pointer bg-neutral-600 text-netural-light-6 w-[175px] mxs:w-[45%] msm:w-[45%]'
            onClick={() => {
              if (!deleteLoading) {
                confirmModalHandler();
              }
            }}>
            انصراف
          </span>
          <span
            className='py-2 text-base text-center rounded-sm cursor-pointer text-error border-[1px] border-error text-netural-light-6 w-[175px] mxs:w-[45%] msm:w-[45%]'
            onClick={deletePatient}>
            {deleteLoading ? <PulseLoader /> : " حذف شود"}
          </span>
        </div>
      </div>
    </div>
  </Box>
</Modal>; */
}
