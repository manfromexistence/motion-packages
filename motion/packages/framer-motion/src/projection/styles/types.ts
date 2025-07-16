import { type AnyResolvedKeyframe } from "motion-dom"
import { IProjectionNode } from "../node/types"

export type ScaleCorrector = (
    latest: AnyResolvedKeyframe,
    node: IProjectionNode
) => AnyResolvedKeyframe

export interface ScaleCorrectorDefinition {
    correct: ScaleCorrector
    applyTo?: string[]
    isCSSVariable?: boolean
}

export interface ScaleCorrectorMap {
    [key: string]: ScaleCorrectorDefinition
}
