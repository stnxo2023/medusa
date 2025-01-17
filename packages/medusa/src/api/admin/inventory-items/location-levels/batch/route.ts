import { batchInventoryItemLevelsWorkflow } from "@medusajs/core-flows"
import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { AdminBatchInventoryItemLevelsType } from "../../validators"

export const POST = async (
  req: MedusaRequest<AdminBatchInventoryItemLevelsType>,
  res: MedusaResponse
) => {
  const body = req.validatedBody

  const output = await batchInventoryItemLevelsWorkflow(req.scope).run({
    input: body,
  })

  res.json({
    created: output.result.created,
    updated: output.result.updated,
    deleted: output.result.deleted,
  })
}