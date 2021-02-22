import {
    createStateHook,
    createActionsHook,
    createEffectsHook,
    createReactionHook
} from 'overmind-react'
import { merge, namespaced } from "overmind/config";
import { state } from './state'
import * as actions from "./actions"
import * as navigation from "./navigation"

export const config = merge({
    state,
    actions,
},
    namespaced({
        navigation
    })
)

export const useState = createStateHook()
export const useActions = createActionsHook()
export const useEffects = createEffectsHook()
export const useReaction = createReactionHook()