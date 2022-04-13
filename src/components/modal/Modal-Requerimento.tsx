import { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import cx from 'clsx'

import {
  addRequeriment,
  setModalOpen,
  setSelectedRequeriment,
  updateRequeriment,
} from '../../store'
import { CheckSVG, CloseSVG, EvenOdd } from '../icons'

const ModalRequerimento = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm()

  const state = useSelector((state) => state.requeriment)

  const dispatch = useDispatch()

  const closeModal = () => {
    reset()
    dispatch(setModalOpen(false))
    dispatch(setSelectedRequeriment(undefined))
  }

  const onSubmitHandler = (data) => {
    console.log(JSON.stringify(data))

    if (data) {
      closeModal()
    }
    if (state.selectedRequeriment) {
      dispatch(
        updateRequeriment({
          _id: state.selectedRequeriment._id,
          ...data,
        }),
      )
    } else {
      dispatch(addRequeriment(data))
    }
  }

  useEffect(() => {
    console.log(state)

    if (state.selectedRequeriment) {
      setValue('situacao', state.selectedRequeriment.situacao)
      setValue('departamento', state.selectedRequeriment.departamento)
      setValue('status', state.selectedRequeriment.status)
      setValue('descricao', state.selectedRequeriment.descricao)
    }
  }, [state.selectedRequeriment, setValue])

  return state.isModalOpen
    ? ReactDOM.createPortal(
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="overflow-x-hidden  fixed h-modal md:h-full top-40 left-0 right-0 overflow-y-scroll md:inset-0 z-50 content-center justify-center items-center"
        >
          <div className="relative w-full max-w-md px-4 h-full md:h-auto">
            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                  onClick={closeModal}
                >
                  <EvenOdd />
                </button>
              </div>
              <form
                className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
                onSubmit={handleSubmit(onSubmitHandler)}
                noValidate
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {state.selectedRequeriment ? (
                    <>
                      Alterar <span>Requerimento</span>
                    </>
                  ) : (
                    <>
                      Adicionar <span>Requerimento</span>
                    </>
                  )}
                </h3>
                <div>
                  <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                    Situação
                  </label>
                  <input
                    type="text"
                    id="situacao"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Situaçao"
                    {...register('situacao', { required: true, maxLength: 80 })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                    Departamento
                  </label>
                  <input
                    type="text"
                    id="departamento"
                    // placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    {...register('departamento', {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                    Status
                  </label>
                  <input
                    type="text"
                    id="status"
                    // placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    {...register('status', { required: true, maxLength: 80 })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                    Descrição
                  </label>
                  <input
                    type="text"
                    id="descricao"
                    // placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    {...register('descricao', {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                </div>

                {/* <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button> */}

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {state.selectedRequeriment ? 'Atualizar' : 'Gravar'}
                </button>
              </form>
            </div>
          </div>
        </div>,

        document.body,
      )
    : null
}

export default ModalRequerimento
