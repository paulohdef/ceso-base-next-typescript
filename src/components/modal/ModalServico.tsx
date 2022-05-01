import RouterWithParams from '@/src/utils/util'
import { useState } from 'react'
import Image from 'next/image'

type ModalProps = {
  src: string
  title: string
  subTitle: string
}

const ModalServico = (props: ModalProps) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        className={`
                        cursor-pointer
                        items-center justify-center text-center bg-gray-100 p-4 hover:bg-gray-200
                      `}
        onClick={() => setShowModal(true)}
        // onClick={() => RouterWithParams('/service', 'AUXÍLIO FINANCEIRO')}
      >
        <Image src={props.src} alt="" className="h-14" width={40} height={40} />

        <a
          className={` 
                            hidden md:block
                            focus:bg-blue-600 font-normal items-center lg:text-xs text-center md:text-justify text-principal   hover:text-blue-300 hover:underline
                        `}
        >
          {props.subTitle}
        </a>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold"> {props.title} </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <div className="flex flex-col   gap-2 ">
                    <section className="px-4 ">
                      <h1 className="text-xl mb-4 font-bold text-principal capitalize dark:text-principal">
                        Formulário de requisição
                      </h1>
                      <form>
                        <div className="grid grid-cols-2 gap-6 mt-0 sm:grid-cols-4">
                          <div>
                            <label className="text-principal dark:text-gray-200">
                              Requisição numero
                            </label>
                            <input
                              id="username"
                              type="text"
                              placeholder="000012-2021"
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                          </div>

                          <div>
                            <label className="text-principal dark:text-gray-200">
                              Data requisição
                            </label>
                            <input
                              id="date"
                              type="date"
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                          </div>

                          <div>
                            <label className="text-principal dark:text-gray-200">
                              Descrição
                            </label>
                            <input
                              id="emailAddress"
                              type="email"
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                          </div>

                          <div>
                            <label className="text-principal dark:text-gray-200">
                              Descrição2
                            </label>
                            <input
                              id="password"
                              type="password"
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                          </div>

                          <div>
                            <label className="text-principal dark:text-gray-200">
                              Password Confirmation
                            </label>
                            <input
                              id="passwordConfirmation"
                              type="password"
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                          </div>
                          <div>
                            <label className="text-principal dark:text-gray-200">
                              Color
                            </label>
                            <input
                              id="color"
                              type="color"
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                          </div>
                          <div>
                            <label className="text-principal dark:text-gray-200">
                              Select
                            </label>
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                              <option>Surabaya</option>
                              <option>Jakarta</option>
                              <option>Tangerang</option>
                              <option>Bandung</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-principal dark:text-gray-200">
                              Range
                            </label>
                            <input
                              id="range"
                              type="range"
                              className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                          </div>

                          <div>
                            <label className="text-principal dark:text-gray-200">
                              Text Area
                            </label>
                            <textarea
                              id="textarea"
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            ></textarea>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-principal">
                              Anexos
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-principal"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span className="">Upload a file</span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                  <p className="pl-1 text-principal">
                                    or drag and drop
                                  </p>
                                </div>
                                <p className="text-xs text-principal">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-red-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar e Sair
                  </button>
                  <button
                    className="bg-blue-900 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Salvar alterações
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default ModalServico
