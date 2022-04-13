import Requisicao from '@/src/core/Requisicao'
import { HYDRATE } from 'next-redux-wrapper'
import * as t from '../types'

const initialState = {
  requerimentList: [],
  selectedRequeriment: undefined,
  isModalOpen: false,
}

const mainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case t.MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload,
      }
    case t.REQUERIMENT_FETCH_SUCCEEDED:
      return {
        ...state,
        requerimentList: action.payload,
      }
    case t.REQUERIMENT_ADD_SUCCEEDED:
      return {
        ...state,
        requerimentList: [action.payload, ...state.requerimentList],
      }
    case t.REQUERIMENT_UPDATE_SUCCEEDED:
      const updatedRequeriment = state.requerimentList.map(
        (requeriment: Requisicao) => {
          if (requeriment._id === action.payload._id) {
            return {
              ...requeriment,
              situacao: action.payload.situacao,
              departamento: action.payload.departamento,
              status: action.payload.status,
              tipo: action.payload.tipo,
            }
          }
          return requeriment
        },
      )
      return { ...state, requerimentList: updatedRequeriment }

    case t.REQUERIMENT_DELETE_SUCCEEDED:
      const newRequerimentList = state.requerimentList.filter(
        (requeriment: Requisicao) => requeriment._id !== action.payload,
      )
      return {
        ...state,
        requerimentList: newRequerimentList,
      }
    case t.REQUERIMENT_SELECTED:
      const selectedRequeriment = state.requerimentList.find(
        (requeriment: Requisicao) => requeriment._id === action.payload,
      )
      return {
        ...state,
        selectedRequeriment,
      }
    default:
      return state
  }
}

export default mainReducer
