import Requisicao from '@/src/core/Requisicao'

import * as t from '../types'

export const setModalOpen = (isModalOpen: boolean) => {
  return {
    type: t.MODAL_OPEN,
    payload: isModalOpen,
  }
}

export const fetchRequeriments = () => {
  return {
    type: t.REQUERIMENT_FETCH_REQUESTED,
  }
}

export const addRequeriment = (requeriment: Requisicao) => {
  return {
    type: t.REQUERIMENT_ADD_REQUESTED,
    payload: requeriment,
  }
}

export const updateRequeriment = (requeriment: Requisicao) => {
  return {
    type: t.REQUERIMENT_UPDATE_REQUESTED,
    payload: requeriment,
  }
}

export const deleteRequeriment = (id: string) => {
  return {
    type: t.REQUERIMENT_DELETE_REQUESTED,
    payload: id,
  }
}

export const setSelectedRequeriment = (id) => {
  return {
    type: t.REQUERIMENT_SELECTED,
    payload: id,
  }
}
