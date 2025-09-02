import TabelaPadrao from '../../../../components/TabelaPadrao'
import { InputPadrao, UseInputMask } from '../../../../components/InputPadrao'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { jsonRoute } from '../../../../utils/json'
import { useCallback, useEffect, useState } from 'react'

const status = [
  { value: "", label: "TODOS" },
  { value: "ativo", label: "ATIVO" },
  { value: "cancelado", label: "CANCELADO" },
  { value: "suspenso", label: "SUSPENSO" },
  { value: "inativo", label: "INATIVO" },
]